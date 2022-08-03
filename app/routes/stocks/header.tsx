import { Link } from "@remix-run/react";

export default function Header() {
  return (
    <div className="items-center to-red flex h-12 flex-row justify-between bg-gradient-to-br from-purple-100 p-2 antialiased">
      <Link to="/" className="text-black">
        SportStocks
      </Link>
      <Link to="/profile" className="text-black">
        100
      </Link>
    </div>
  );
}
