import { useLoaderData } from "@remix-run/react";
import type { LoaderArgs, ActionArgs, ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import Header from "./stocks/header";
import List from "./stocks/list";

import {
  createTransaction,
  getMatches,
  getPlayers,
  getTransactions,
} from "~/models/game.server";
import type { Match, Player, Transaction } from "~/models/game.server";

export type NormalizedPlayer = {
  [key: string]: Player;
};
export async function loader({ request, params }: LoaderArgs) {
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
  const min = formData.get("min");
  const max = formData.get("max");
  const price = formData.get("price");
  const quantity = formData.get("quantity");
  const type = formData.get("type");

  const errors: {
    [key: string]: null | string;
  } = {
    type: null,
    player: null,
    min: null,
    max: null,
    price: null,
    quantity: null,
  };

  if (typeof type === "string" && !["buy", "sell"].includes(type)) {
    errors.type = "Provide valid Type";
  }

  if (typeof playerId !== "string" || playerId.length === 0) {
    errors.playerId = "Player is missing";
  }

  if (typeof min !== "number" || (typeof min === "number" && isNaN(min))) {
    errors.min = "Provide valid min.";
  }

  if (typeof max !== "number" || (typeof max === "number" && isNaN(max))) {
    errors.max = "Provide valid max.";
  }

  if (
    typeof price !== "number" ||
    (typeof price === "number" && isNaN(price))
  ) {
    errors.price = "Provide valid price.";
  }

  if (
    typeof quantity !== "number" ||
    (typeof quantity === "number" && isNaN(quantity))
  ) {
    errors.quantity = "Provide valid quantity.";
  }

  if (Object.values(errors).some((val) => val !== null)) {
    return json({ errors }, { status: 400 });
  }

  return createTransaction({
    type,
    playerId,
    min: +min,
    max: +max,
    price: +price,
    quantity: +quantity,
    generatedBy: userId,
  });
}

export default function StockIndexPages() {
  const {
    matches = [],
    transactions = [],
    players,
  } = useLoaderData<typeof loader>();

  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          paddingTop: 10,
          height: "93vh",
        }}
      >
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
