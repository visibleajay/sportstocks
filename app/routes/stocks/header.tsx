import { Link } from "@remix-run/react";

export default function Header({ profile = true }: { profile?: boolean }) {
  return (
    <div className="to-red fixed top-0 flex h-12 w-full flex-row items-center justify-between bg-gradient-to-br from-purple-100 p-2 antialiased">
      <div className="flex flex-row justify-center items-center">
        <Logo />
        <Link to="/" className="text-black text-md font-bold">
          SportStocks
        </Link>
      </div>
      {profile && (
        <Link to="/account" className="text-black">
          100
        </Link>
      )}
    </div>
  );
}

export const Logo = () => (
  <svg
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    width="50"
    height="50"
    viewBox="0 0 200.000000 200.000000"
  >
    <g
      transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)"
      stroke="none"
      fill="#6BAA75"
    >
      <path
        d="M829 1516 c-25 -12 -28 -47 -7 -73 14 -18 53 -16 68 2 16 19 29 19
79 -4 37 -16 40 -20 25 -31 -20 -18 -74 -124 -74 -148 0 -10 3 -22 7 -26 10
-10 13 -39 6 -56 -3 -8 -7 -26 -8 -40 -1 -14 -5 -32 -9 -41 -5 -11 4 -26 25
-47 39 -38 52 -41 39 -7 -8 20 -6 27 11 36 12 6 31 8 43 5 24 -6 35 7 74 89
20 41 23 62 20 122 -3 67 -2 73 20 82 29 14 38 37 22 56 -17 20 -40 19 -56 -2
-12 -17 -14 -17 -43 5 -17 12 -61 32 -99 43 -37 12 -71 24 -77 28 -22 17 -43
19 -66 7z m271 -240 c0 -42 -11 -96 -19 -96 -9 1 -61 76 -61 89 0 14 61 52 72
45 4 -3 8 -20 8 -38z m-65 -136 c3 -5 1 -10 -4 -10 -6 0 -11 5 -11 10 0 6 2
10 4 10 3 0 8 -4 11 -10z"
        fill="#432313"
      />
      <path
        d="M543 1037 l27 -46 -22 -14 c-13 -8 -32 -19 -43 -25 -19 -10 -18 -11
10 -22 17 -7 56 -14 88 -17 l57 -6 0 75 0 75 -52 6 c-29 3 -62 9 -73 13 -17 7
-16 3 8 -39z"
      />
      <path
        d="M1420 1070 c-14 -4 -42 -8 -62 -9 l-38 -1 0 -76 0 -77 58 6 c31 3 71
10 87 17 28 11 29 12 10 22 -11 6 -30 17 -43 25 l-22 14 26 44 c27 47 26 48
-16 35z"
      />
      <path d="M902 1028 c3 -19 10 -23 48 -26 l45 -3 -37 26 c-46 31 -60 32 -56 3z" />
      <path
        d="M1010 1020 c0 -11 7 -20 15 -20 8 0 15 9 15 20 0 11 -7 20 -15 20 -8
0 -15 -9 -15 -20z"
      />
      <path
        d="M670 930 l0 -77 69 -16 c163 -40 339 -40 502 0 l69 16 0 78 c0 72 -1
78 -19 71 -10 -4 -31 -22 -46 -39 -32 -39 -45 -42 -45 -9 l0 24 -142 -2 c-136
-2 -146 -3 -195 -30 -48 -25 -56 -27 -89 -16 l-37 13 22 16 c22 17 22 17 -33
33 l-56 15 0 -77z m420 33 c0 -25 -43 -72 -75 -83 -45 -15 -51 -10 -31 27 18
37 34 50 66 56 14 2 28 5 33 6 4 0 7 -2 7 -6z"
      />
      <path d="M880 980 c-13 -8 -13 -10 2 -10 9 0 20 5 23 10 8 13 -5 13 -25 0z" />
    </g>
  </svg>
);
