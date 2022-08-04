import { Link } from "@remix-run/react";

export default function Header({ profile = true }: { profile?: boolean }) {
  return (
    <div className="to-red flex h-12 flex-row items-center justify-between bg-gradient-to-br from-purple-100 p-2 antialiased">
      <Link to="/" className="text-black">
        SportStocks
      </Link>
      {profile && (
        <Link to="/profile" className="text-black">
          100
        </Link>
      )}
    </div>
  );
}
