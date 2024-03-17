import { getSpotifyApi } from "~/lib/getSpotifyApi";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import { getAccountById } from "~/server/db/engine/account";
import { type Song } from "~/types/spotify";

export const songRouter = createTRPCRouter({
  getCurrentSong: protectedProcedure.query(async ({ ctx }) => {
    const account = await getAccountById(ctx.session.user.id);
    if (!account) {
      console.error("No account found for user", ctx.session.user.id);
      return null;
    }
    const api = getSpotifyApi(account);
    const playState = await api.player.getPlaybackState();
    const song = await api.tracks.get(playState.item.id);

    return {
      currentSong: {
        name: song.name,
        coverImage: song.album.images[0]?.url ?? "",
        duration_ms: song.duration_ms,
        artists: song.artists.map((artist) => artist.name),
        album: song.album.name,
      } satisfies Song,
    };
  }),
});
