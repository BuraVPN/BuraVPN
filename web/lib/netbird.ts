const NETBIRD_API_URL = process.env.NETBIRD_API_URL;
const NETBIRD_API_TOKEN = process.env.NETBIRD_API_KEY;

type NetBirdRequestOptions = {
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  body?: any;
};

async function netbirdRequest<T>(
  endpoint: string,
  options: NetBirdRequestOptions
): Promise<T> {
  if (!NETBIRD_API_TOKEN) {
    throw new Error("NetBird API token is missing");
  }

  if (!NETBIRD_API_URL) {
    throw new Error("NetBird API URL is missing");
  }

  const { method = "GET", body } = options;

  const config: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `TOKEN ${NETBIRD_API_TOKEN}`,
    },
  };

  if (body && method !== "GET") {
    config.body = JSON.stringify(body);
  }

  const url = `${NETBIRD_API_URL}${endpoint}`;

  try {
    const response = await fetch(url, config);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        `NetBird API error: ${response.status} - ${JSON.stringify(errorData)}`
      );
    }

    return await response.json();
  } catch (error) {
    console.error(`NetBird API request failed: ${url}`, error);
    throw error;
  }
}

//AUTH SE NAPRAVI PREKO NEXT-AUTHA MI RADIMO POST REQUEST DA SE NAPRAVI GRUPA
//NA SVAKI POST MI SYNCAMO BAZU, JER JE UVIJEK POST PRVI KOJI TREBA BITI

export async function getGroups() {
  return netbirdRequest<any[]>("/api/groups", { method: "GET" });
}

export async function getGroup(groupId: string) {
  return netbirdRequest<any>(`/api/groups/${groupId}`, { method: "GET" });
}

export async function getUsers() {
  return netbirdRequest<any[]>("/api/users");
}

export async function getUser(userId: string) {
  return netbirdRequest<any>(`/api/users/${userId}`);
}

export async function getPeers() {
  return netbirdRequest<any[]>("/api/peers");
}

export async function getPeer(peerId: string) {
  return netbirdRequest<any>(`/api/peers/${peerId}`, { method: "GET" });
}

export async function getSetupKeys() {
  return netbirdRequest<any[]>("/api/setup-keys");
}
export { netbirdRequest };
