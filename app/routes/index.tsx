import { useLoaderData } from "@remix-run/react";
import { LoaderArgs, ActionArgs, redirect } from "@remix-run/node";
import { json } from "@remix-run/node";
import Header from "./stocks/header";
import List from "./stocks/list";

import {
  createTransaction,
  getMatches,
  getPlayerById,
  getPlayers,
  getTransactions,
} from "~/models/game.server";
import type { Match, Player, Transaction } from "~/models/game.server";
import { useOptionalUser } from "~/utils";
import type { User } from "~/models/login.server";
import { getUser } from "~/session.server";

export type NormalizedPlayer = {
  [key: string]: Player;
};
export async function loader({ request, params }: LoaderArgs) {
  const user = await getUser(request);
  if (!user) {
    return redirect("/login");
  }
  const matches: Match[] = await getMatches();
  const transactions: Transaction[] = await getTransactions();
  const players: Player[] = await getPlayers();

  const normalizedPlayer: NormalizedPlayer = {};
  players.map((player) => {
    normalizedPlayer[player.id] = player;
  });

  return json({
    matches,
    transactions,
    players: normalizedPlayer,
  });
}

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const userId = formData.get("userId");
  const playerId = formData.get("player");
  const type = formData.get("type");
  const min = formData.get("min");
  const max = formData.get("max");
  const price = formData.get("price");
  const quantity = formData.get("quantity");

  const isNumber = (val: FormDataEntryValue | null): boolean => {
    return typeof val === "number" || (typeof val === "string" && !isNaN(+val));
  };

  const errors = {
    type:
      typeof type === "string" && ["buy", "sell"].includes(type)
        ? null
        : "Valid Type is Required",
    player: typeof playerId === "string" ? null : "Valid Player is Required",
    min: isNumber(min) ? null : "Valid Min is Required",
    max: isNumber(max) ? null : "Valid Max is Required",
    price: isNumber(price) ? null : "Valid Price is Required",
    quantity: isNumber(quantity) ? null : "Valid Quantity is Required",
    userId: typeof userId === "string" ? null : "Valid User is Required",
  };

  if (Object.values(errors).some((val) => val !== null)) {
    return json({ errors }, { status: 400 });
  }

  // @ts-ignore
  const player = await getPlayerById(playerId);
  if (!player) {
    return json({ errors: { player: "Player is missing" } }, { status: 400 });
  }

  // @ts-ignore
  // const user = await getUserID(userId);
  // if (!user) {
  //   return json({ errors: { userId: "User is missing" } }, { status: 400 });
  // }

  return createTransaction({
    // @ts-ignore
    type,
    // @ts-ignore
    playerId,
    // @ts-ignore
    min: +min,
    // @ts-ignore
    max: +max,
    // @ts-ignore
    price: +price,
    // @ts-ignore
    quantity: +quantity,
    // @ts-ignore
    generatedBy: userId,
  });
}

export default function StockIndexPages() {
  const {
    matches = [],
    transactions = [],
    players,
  } = useLoaderData<typeof loader>();

  const user: User | undefined = useOptionalUser();
  return (
    <>
      <Header />
      <div className="pt-[10px] mt-12 flex h-[93vh] flex-row justify-around">
        <List
          title={"Matches"}
          data={matches}
          players={Object.values(players || {})}
        />
        <List title="My Orders" data={transactions} players={players} />
        <List title="All Orders" data={transactions} players={players} />
      </div>
    </>
  );
}
