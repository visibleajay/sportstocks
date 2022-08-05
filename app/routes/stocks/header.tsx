import { Link } from "@remix-run/react";

export default function Header({ profile = true }: { profile?: boolean }) {
  return (
    <div className="to-red fixed w-full top-0 flex h-12 flex-row items-center justify-between bg-gradient-to-br from-purple-100 p-2 antialiased">
      <Link to="/" className="text-black">
        SportStocks
      </Link>
      {profile && (
        <Link to="/account" className="text-black">
          100
        </Link>
      )}
    </div>
  );
}
