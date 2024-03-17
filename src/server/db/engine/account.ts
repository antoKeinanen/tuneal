import { eq } from "drizzle-orm";
import { db } from "..";
import { accounts } from "../schema";
import { type TokenSet } from "next-auth";

export const getAccountById = async (id: string) => {
  return db.query.accounts.findFirst({
    where: eq(accounts.userId, id),
  });
};

export const updateTokens = async (id: string, tokens: TokenSet) => {
  return db
    .update(accounts)
    .set({
      access_token: tokens.access_token,
      refresh_token: tokens.refresh_token,
      expires_at: tokens.expires_at,
    })
    .where(eq(accounts.userId, id));
};
