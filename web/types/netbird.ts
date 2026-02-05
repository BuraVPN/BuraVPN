export interface NetBirdPeer {
  id: string;
  name: string;
  ip?: string;
  connection_ip?: string;
  connected: boolean;
  last_seen?: string;
  last_login?: string;
  os?: string;
  kernel_version?: string;
  version?: string;
  ui_version?: string;
  hostname?: string;
  dns_label?: string;
  extra_dns_labels?: string[];
  geoname_id?: number;
  country_code?: string;
  city_name?: string;
  user_id?: string;
  serial_number?: string;
  ssh_enabled?: boolean;
  approval_required?: boolean;
  ephemeral?: boolean;
  login_expiration_enabled?: boolean;
  login_expired?: boolean;
  inactivity_expiration_enabled?: boolean;
}
