export interface Account {
  userId: string;
  type: "email" | "oauth" | "oidc";
  access_token: string | null;
  token_type: string | null;
  id_token: string | null;
  refresh_token: string | null;
  scope: string | null;
  expires_at: number | null;
  session_state: string | null;
  provider: string;
  providerAccountId: string;
}
