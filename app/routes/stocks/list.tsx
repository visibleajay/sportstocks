import { ActionArgs, json, LoaderArgs, MetaFunction } from "@remix-run/node";
import { Form, Link, useActionData, useSearchParams } from "@remix-run/react";

import { Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";

import AddOrder from "./addOrder";
import TeamCard from "./teamCard";
import TradingCard from "./tradingCard";

export default function List({
  title,
  data,
  players = [],
}: {
  title: string;
  data: any[];
  players: any;
}): JSX.Element {
  const [isAddOrder, setAddOrder] = useState<boolean>(false);

  return (
    <>
      <div className="flex flex-col">
        <Typography variant="h6" component="h3" style={{ textAlign: "center" }}>
          {title}
        </Typography>
        <div className="w-80 max-w-sm border flex flex-col space-y-1.5 overflow-auto rounded border-solid border-white-400 p-2">
          {title !== "Matches" ? (
            <>
              {data.map((tran) => {
                const playerName = players[tran.playerId].name;
                return <TradingCard key={tran.id} player={playerName} {...tran} />
              })}
              {title === "My Orders" && (
                <Button variant="outlined" onClick={() => setAddOrder(true)}>
                  Add Order
                </Button>
              )}
            </>
          ) : (
            <>
              {data.map((match) => {
                return (
                  <TeamCard
                    key={match.id}
                    {...match}
                    onClick={() => console.log("on team card click", { match })}
                  />
                );
              })}
            </>
          )}
        </div>
      </div>
      <AddOrder
        players={Object.values(players || {})}
        isAddOrder={isAddOrder}
        onClose={(val) => setAddOrder(false)}
      />
    </>
  );
}
