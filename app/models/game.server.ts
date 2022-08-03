import { redirect } from "@remix-run/node";
import type { Match, Player, Transaction } from "@prisma/client";
import { prisma } from "~/db.server";

export type { Match, Player, Transaction } from "@prisma/client";

export async function getPlayers(): Promise<Player[]> {
  return prisma.player.findMany();
}

export async function getMatches(): Promise<Match[]> {
  return prisma.match.findMany();
}

export async function getTransactions(): Promise<Transaction[]> {
  return prisma.transaction.findMany();
}


export async function createTransaction(trans: Transaction): Promise<Transaction> {
  const transaction = await prisma.transaction.create({data: trans});
  return transaction
}