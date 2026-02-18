import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import Resend from "next-auth/providers/resend";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./prisma";
import { checkAndRegenerateIfExpiring } from "./setup-key";

const NETBIRD_API_URL = process.env.NETBIRD_API_URL;
const NETBIRD_API_KEY = process.env.NETBIRD_API_KEY;

async function createNetBirdGroup(name: string) {
  const response = await fetch(`${NETBIRD_API_URL}/api/groups`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${NETBIRD_API_KEY}`,
    },
    body: JSON.stringify({ name }),
  });

  if (!response.ok) {
    throw new Error(`Failed to create NetBird group: ${response.status}`);
  }

  return response.json();
}

async function createNetBirdSetupKey(groupId: string, name: string) {
  const response = await fetch(`${NETBIRD_API_URL}/api/setup-keys`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${NETBIRD_API_KEY}`,
    },
    body: JSON.stringify({
      name: `${name} Setup Key`,
      type: "reusable",
      expires_in: 31536000,
      auto_groups: [groupId],
      usage_limit: 0,
      ephemeral: false,
    }),
  });

  if (!response.ok) {
    throw new Error(`Failed to create NetBird setup key: ${response.status}`);
  }

  return response.json();
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      allowDangerousEmailAccountLinking: true,
    }),
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      allowDangerousEmailAccountLinking: true,
    }),
    Resend({
      from: "info@buravpn.com",
    }),
  ],
  callbacks: {
    session({ session, user }) {
      session.user.id = user.id;
      return session;
    },

    async signIn({ user, account, profile }) {
      if (account?.provider === "resend") return true;

      const email = user.email;
      if (!email) return true;

      const existingUser = await prisma.user.findUnique({
        where: { email },
        include: { accounts: true },
      });

      if (existingUser) {
        const alreadyLinked = existingUser.accounts.some(
          (acc) => acc.provider === account?.provider
        );

        if (!alreadyLinked && account) {
          await prisma.account.create({
            data: {
              userId: existingUser.id,
              type: account.type,
              provider: account.provider,
              providerAccountId: account.providerAccountId,
              access_token: account.access_token,
              refresh_token: account.refresh_token,
              expires_at: account.expires_at,
              token_type: account.token_type,
              scope: account.scope,
              id_token: account.id_token,
              session_state: account.session_state
                ? String(account.session_state)
                : null,
            },
          });

          console.log(
            `Linked ${account.provider} to existing user ${existingUser.id}`
          );
        }

        user.id = existingUser.id;
        user.name = existingUser.name ?? user.name;
        user.image = existingUser.image ?? user.image;
      }

      return true;
    },
  },
  events: {
    async createUser({ user }) {
      if (!user.id) {
        console.error("User ID is missing");
        return;
      }
      try {
        const userName = user.name || user.email || "User";
        const groupName = `${userName}'s Group`;

        const netbirdGroup = await createNetBirdGroup(groupName);
        console.log(`NetBird group created: ${netbirdGroup.id}`);

        const netbirdSetupKey = await createNetBirdSetupKey(
          netbirdGroup.id,
          userName
        );
        console.log(`NetBird setup key created: ${netbirdSetupKey.id}`);

        await prisma.group.create({
          data: {
            netbirdGroupId: netbirdGroup.id,
            name: netbirdGroup.name,
            peersCount: 0,
            resourcesCount: 0,
            issued: "api",
            userId: user.id,
          },
        });

        await prisma.setupKey.create({
          data: {
            userId: user.id,
            key: netbirdSetupKey.key,
            netbirdId: netbirdSetupKey.id.toString(),
            name: `${userName} Setup Key`,
            autoGroups: [netbirdGroup.id],
            expiresAt: new Date(netbirdSetupKey.expires),
          },
        });

        console.log(
          `User ${user.id} provisioned with NetBird group and setup key`
        );
      } catch (error) {
        console.error("Failed to provision NetBird resources:", error);
      }
    },
    async signIn({ user }) {
      if (user.id) {
        try {
          await checkAndRegenerateIfExpiring(user.id);
        } catch (error) {
          console.error("Failed to check/regenerate setup key:", error);
        }
      }
    },
  },
  pages: {
    signIn: "/login",
  },
});
