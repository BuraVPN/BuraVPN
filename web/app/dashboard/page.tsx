import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { SetupPending } from "@/components/dashboard/ui/SetupPending";

export default async function DashboardHome() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    include: {
      setupKeys: {
        where: { revokedAt: null },
        take: 1,
      },
    },
  });

  if (!user?.setupKeys.length) {
    return <SetupPending />;
  }

  return <h1>Home</h1>;
}
