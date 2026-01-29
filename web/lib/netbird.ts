const NETBIRD_API_URL = process.env.NETBIRD_API_URL;
const NETBIRD_API_TOKEN = process.env.NETBIRD_API_KEY;

export interface NetBirdGroup {
  id: string;
  name: string;
  peers_count: number;
  issued: "api" | "integration" | "jwt";
  peers: NetBirdPeerMinimal[];
}

export interface NetBirdPeerMinimal {
  id: string;
  name: string;
}

export interface NetBirdUser {
  id: string;
  email: string;
  name: string;
  role: "admin" | "user" | "owner";
  status: "active" | "invited" | "blocked";
  auto_groups: string[];
  is_current: boolean;
  is_service_user: boolean;
  is_blocked: boolean;
  last_login: string;
  issued: "api" | "integration" | "jwt";
  permissions: {
    dashboard_view: "full" | "limited" | "blocked";
  };
}

export interface NetBirdPeer {
  id: string;
  name: string;
  ip: string;
  connected: boolean;
  last_seen: string;
  os: string;
  version: string;
  groups: NetBirdPeerGroup[];
  ssh_enabled: boolean;
  hostname: string;
  user_id: string;
  ui_version: string;
  dns_label: string;
  login_expiration_enabled: boolean;
  login_expired: boolean;
  last_login: string;
  approval_required: boolean;
  country_code: string;
  city_name: string;
  serial_number: string;
}

export interface NetBirdPeerGroup {
  id: string;
  name: string;
  peers_count: number;
}

export interface NetBirdSetupKey {
  id: string;
  key: string;
  name: string;
  expires: string;
  type: "one-off" | "reusable";
  valid: boolean;
  revoked: boolean;
  used_times: number;
  last_used: string;
  state: "valid" | "expired" | "revoked" | "overused";
  auto_groups: string[];
  updated_at: string;
  usage_limit: number;
  ephemeral: boolean;
}

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

interface NetBirdRequestOptions<TBody = unknown> {
  method: HttpMethod;
  body?: TBody;
}

async function netbirdRequest<TResponse, TBody = unknown>(
  endpoint: string,
  options: NetBirdRequestOptions<TBody>
): Promise<TResponse> {
  if (!NETBIRD_API_TOKEN) {
    throw new Error("NetBird API token is missing");
  }

  if (!NETBIRD_API_URL) {
    throw new Error("NetBird API URL is missing");
  }

  const { method, body } = options;

  const headers: HeadersInit = {
    "Content-Type": "application/json",
    Authorization: `TOKEN ${NETBIRD_API_TOKEN}`,
  };

  const config: RequestInit = {
    method,
    headers,
  };

  if (body && method !== "GET") {
    config.body = JSON.stringify(body);
  }

  const url = `${NETBIRD_API_URL}${endpoint}`;

  const response = await fetch(url, config);

  if (!response.ok) {
    const errorData: unknown = await response.json().catch(() => ({}));
    throw new Error(
      `NetBird API error: ${response.status} - ${JSON.stringify(errorData)}`
    );
  }

  return response.json() as Promise<TResponse>;
}

export async function getGroups(): Promise<NetBirdGroup[]> {
  return netbirdRequest<NetBirdGroup[]>("/api/groups", { method: "GET" });
}

export async function getGroup(groupId: string): Promise<NetBirdGroup> {
  return netbirdRequest<NetBirdGroup>(`/api/groups/${groupId}`, {
    method: "GET",
  });
}

export async function getUsers(): Promise<NetBirdUser[]> {
  return netbirdRequest<NetBirdUser[]>("/api/users", { method: "GET" });
}

export async function getUser(userId: string): Promise<NetBirdUser> {
  return netbirdRequest<NetBirdUser>(`/api/users/${userId}`, { method: "GET" });
}

export async function getPeers(): Promise<NetBirdPeer[]> {
  return netbirdRequest<NetBirdPeer[]>("/api/peers", { method: "GET" });
}

export async function getPeer(peerId: string): Promise<NetBirdPeer> {
  return netbirdRequest<NetBirdPeer>(`/api/peers/${peerId}`, { method: "GET" });
}

export async function getSetupKeys(): Promise<NetBirdSetupKey[]> {
  return netbirdRequest<NetBirdSetupKey[]>("/api/setup-keys", {
    method: "GET",
  });
}

export { netbirdRequest };
