
import { getSpotifyApi } from "~/lib/getSpotifyApi";
import { type Account } from "~/types/account";

export const getQueue = async (account: Account) => {
  const api = getSpotifyApi(account);
  return api.player.getUsersQueue();
};
