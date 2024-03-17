import { getSpotifyApi } from "~/lib/getSpotifyApi";
import { type Account } from "~/types/account";
import { type Song } from "~/types/spotify";

export const getQueue = async (account: Account) => {
  const api = getSpotifyApi(account);
  const { queue } = await api.player.getUsersQueue();
  const songIds = queue.map((item) => item.id);

  const songs = await api.tracks.get(songIds);
  return songs.map(
    (song) =>
      ({
        name: song.name,
        coverImage: song.album.images[0]?.url ?? "",
        duration_ms: song.duration_ms,
        artists: song.artists.map((artist) => artist.name),
        album: song.album.name,
      }) satisfies Song,
  );
};
