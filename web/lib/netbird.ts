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

export interface NetBirdRoute {
  id: string;
  description: string;
  network_id: string;
  network: string;
  enabled: boolean;
  peer: string;
  metric: number;
  masquerade: boolean;
  groups: string[];
  keep_route: boolean;
}

export interface NetBirdPolicyRule {
  name: string;
  description: string;
  enabled: boolean;
  action: "accept";
  bidirectional: boolean;
  protocol: "all" | "tcp" | "udp" | "icmp";
  sources: string[];
  destinations: string[];
  ports?: string[];
}

export interface NetBirdPolicy {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
  rules: NetBirdPolicyRule[];
}

export async function createGroup(
  name: string,
  peerIds: string[]
): Promise<NetBirdGroup> {
  return netbirdRequest<NetBirdGroup>("/api/groups", {
    method: "POST",
    body: { name, peers: peerIds },
  });
}

export async function updateGroup(
  groupId: string,
  name: string,
  peerIds: string[]
): Promise<NetBirdGroup> {
  return netbirdRequest<NetBirdGroup>(`/api/groups/${groupId}`, {
    method: "PUT",
    body: { name, peers: peerIds },
  });
}

export async function deleteGroup(groupId: string): Promise<void> {
  return netbirdRequest<void>(`/api/groups/${groupId}`, { method: "DELETE" });
}

interface CreateRouteParams {
  description: string;
  networkId: string;
  network: string;
  peer: string;
  enabled: boolean;
  metric: number;
  masquerade: boolean;
  groups: string[];
}

export async function createRoute(
  params: CreateRouteParams
): Promise<NetBirdRoute> {
  return netbirdRequest<NetBirdRoute>("/api/routes", {
    method: "POST",
    body: {
      description: params.description,
      network_id: params.networkId,
      network: params.network,
      peer: params.peer,
      enabled: params.enabled,
      metric: params.metric,
      masquerade: params.masquerade,
      groups: params.groups,
      keep_route: true,
    },
  });
}

export async function deleteRoute(routeId: string): Promise<void> {
  return netbirdRequest<void>(`/api/routes/${routeId}`, { method: "DELETE" });
}

interface CreatePolicyParams {
  name: string;
  description: string;
  sourceGroupIds: string[];
  destinationGroupIds: string[];
  bidirectional: boolean;
}

export async function createPolicy(
  params: CreatePolicyParams
): Promise<NetBirdPolicy> {
  return netbirdRequest<NetBirdPolicy>("/api/policies", {
    method: "POST",
    body: {
      name: params.name,
      description: params.description,
      enabled: true,
      rules: [
        {
          name: params.name,
          description: params.description,
          enabled: true,
          action: "accept",
          bidirectional: params.bidirectional,
          protocol: "all",
          sources: params.sourceGroupIds,
          destinations: params.destinationGroupIds,
        },
      ],
    },
  });
}

export async function deletePolicy(policyId: string): Promise<void> {
  return netbirdRequest<void>(`/api/policies/${policyId}`, {
    method: "DELETE",
  });
}

interface ProvisionTunnelParams {
  tunnelId: string;
  tunnelName: string;
  exitNodeNetbirdPeerId: string;
  travelRouterNetbirdPeerIds: string[];
}

export interface ProvisionResult {
  netbirdGroupId: string;
  netbirdRouteId: string;
  netbirdPolicyId: string;
}

export async function provisionTunnel(
  params: ProvisionTunnelParams
): Promise<ProvisionResult> {
  const shortId = params.tunnelId.split("-")[0];
  const groupName = `tun-${shortId}`;
  const allPeerIds = [
    params.exitNodeNetbirdPeerId,
    ...params.travelRouterNetbirdPeerIds,
  ];

  const group = await createGroup(groupName, allPeerIds);

  let route;
  try {
    route = await createRoute({
      description: `Exit node route for ${params.tunnelName || groupName}`,
      networkId: groupName,
      network: "0.0.0.0/0",
      peer: params.exitNodeNetbirdPeerId,
      enabled: true,
      metric: 9999,
      masquerade: true,
      groups: [group.id],
    });
  } catch (e) {
    await deleteGroup(group.id).catch(() => {});
    throw e;
  }

  let policy;
  try {
    policy = await createPolicy({
      name: `policy-${groupName}`,
      description: `Allow traffic within tunnel ${params.tunnelName || groupName}`,
      sourceGroupIds: [group.id],
      destinationGroupIds: [group.id],
      bidirectional: true,
    });
  } catch (e) {
    await deleteRoute(route.id).catch(() => {});
    await deleteGroup(group.id).catch(() => {});
    throw e;
  }

  return {
    netbirdGroupId: group.id,
    netbirdRouteId: route.id,
    netbirdPolicyId: policy.id,
  };
}

export async function deprovisionTunnel(
  netbirdGroupId: string,
  netbirdRouteId: string,
  netbirdPolicyId: string
) {
  await deletePolicy(netbirdPolicyId).catch((e) =>
    console.error("Delete policy failed:", e)
  );
  await deleteRoute(netbirdRouteId).catch((e) =>
    console.error("Delete route failed:", e)
  );
  await deleteGroup(netbirdGroupId).catch((e) =>
    console.error("Delete group failed:", e)
  );
}
export { netbirdRequest };
