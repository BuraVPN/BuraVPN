interface TunnelConfig {
  tunnelId: string;
  role: "exit-node" | "travel-router";
  tunnelPeerIps: string[];
}

interface CacheEntry {
  configs: TunnelConfig[];
  cachedAt: number;
}

const cache = new Map<string, CacheEntry>();
const MAX_AGE_MS = 30_000;

export function getCachedTunnelConfigs(peerId: string): TunnelConfig[] | null {
  const entry = cache.get(peerId);
  if (!entry) return null;
  if (Date.now() - entry.cachedAt > MAX_AGE_MS) {
    cache.delete(peerId);
    return null;
  }
  return entry.configs;
}

export function setCachedTunnelConfigs(
  peerId: string,
  configs: TunnelConfig[]
) {
  cache.set(peerId, { configs, cachedAt: Date.now() });
}

export function invalidateCache(peerIds?: string[]) {
  if (!peerIds) {
    cache.clear();
    return;
  }
  for (const id of peerIds) {
    cache.delete(id);
  }
}
