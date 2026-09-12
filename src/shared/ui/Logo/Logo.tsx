import { Link } from "react-router";

export const Logo = () => {
  return (
    <Link to="/" className="group flex flex-col leading-none">
      <span className="font-display text-2xl font-semibold tracking-[0.35em] text-gold lg:text-3xl">
        LUNE
      </span>
    </Link>
  );
};