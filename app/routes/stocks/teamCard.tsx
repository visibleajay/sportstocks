import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { toTitleCase } from "../utils/helper";

export default function TeamCard({
  id = 98,
  team1 = "NZ",
  team2 = "India",
  type = "ODI",
  date = "11/12/2008",
  onClick = () => console.log("inside open"),
}) {
  return (
    <Card style={{ minHeight: 64}}>
      <CardHeader
        avatar={
          <Avatar
            style={{ border: "0.5px solid black", borderRadius: "50%" }}
            aria-label="recipe"
          >
            C
          </Avatar>
        }
        action={<Button onClick={onClick}>Open</Button>}
        title={`${toTitleCase(team1)} vs ${toTitleCase(team2)}`}
        subheader={`${type.toUpperCase()}, ${date}`}
        style={{ textAlign: "left" }}
      />
    </Card>
  );
}
