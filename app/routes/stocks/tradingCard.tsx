import type { Transaction } from "~/models/game.server";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import { Box, Button, IconButton, Stack } from "@mui/material";

import { toInitialCase } from "../utils/helper";

export default function TradingCard({
  player,
  min,
  max,
  price,
  quantity,
  type,
}: { player: string } & Partial<Transaction>) {
  return (
    <Card sx={{ width: "100%", overflow: "initial" }}>
      <CardHeader
        avatar={
          <div
            className="border-white-400 flex h-12 w-12 flex-col items-center justify-center rounded-full border-solid bg-red-500 text-xl text-white"
            aria-label="player_initials"
          >
            {toInitialCase(player)}
          </div>
        }
        action={<IconButton aria-label="runs">30</IconButton>}
        title={player}
        style={{ textAlign: "left" }}
      />
      <CardContent>
        <Stack direction="row" justifyContent="space-between">
          <Stack direction="row" spacing={2}>
            <Stack direction="column">
              <Box component="span" sx={{ fontSize: 13, color: "#e6e6e6" }}>
                Min
              </Box>
              <Box component="span" sx={{ fontSize: 14, textAlign: "center" }}>
                {min}
              </Box>
            </Stack>
            <Stack direction="column">
              <Box component="span" sx={{ fontSize: 13, color: "#e6e6e6" }}>
                Max
              </Box>
              <Box component="span" sx={{ fontSize: 14, textAlign: "center" }}>
                {max}
              </Box>
            </Stack>
            <Stack direction="column">
              <Box component="span" sx={{ fontSize: 13, color: "#e6e6e6" }}>
                Quantity
              </Box>
              <Box component="span" sx={{ fontSize: 14, textAlign: "center" }}>
                {quantity}
              </Box>
            </Stack>
            <Stack direction="column">
              <Box component="span" sx={{ fontSize: 13, color: "#e6e6e6" }}>
                Price
              </Box>
              <Box component="span" sx={{ fontSize: 14, textAlign: "center" }}>
                {price}
              </Box>
            </Stack>
          </Stack>
          <Button onClick={() => console.log("Buy Me")}>{type}</Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
