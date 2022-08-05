import { LoaderArgs, redirect } from "@remix-run/node";

export async function loader({ params }: LoaderArgs) {
  return redirect("/account/pointsystem");
}

