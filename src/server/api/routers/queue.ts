import { getQueue } from "../spotify/queue";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import { getAccountById } from "~/server/db/engine/account";

export const queueRouter = createTRPCRouter({
  getMyQueue: protectedProcedure.query(async ({ ctx }) => {
    const account = await getAccountById(ctx.session.user.id);
    if (!account) {
      console.error("No account found for user", ctx.session.user.id);
      return null;
    }
    const playbackState = await getQueue(account);

    return {
      ...playbackState.queue,
    };
  }),
});
