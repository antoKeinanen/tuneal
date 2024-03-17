import "server-only";
import { type AccessToken } from "@spotify/web-api-ts-sdk";
import { SpotifyApi } from "@spotify/web-api-ts-sdk";
import { env } from "~/env";
import { type Account } from "~/types/account";

export const getSpotifyAccessToken = (
  access_token: string | null,
  expires_at: number | null,
  refresh_token: string | null,
) =>
  ({
    access_token: access_token ?? "",
    expires_at: expires_at ?? 0,
    refresh_token: refresh_token ?? "",
    expires_in: new Date(expires_at ?? 0).getTime() - Date.now(),
    token_type: "Bearer",
  }) as AccessToken;

export const getSpotifyApi = (account: Account) =>
  SpotifyApi.withAccessToken(
    env.SPOTIFY_CLIENT_ID,
    getSpotifyAccessToken(
      account.access_token,
      account.expires_at,
      account.refresh_token,
    ),
  );
