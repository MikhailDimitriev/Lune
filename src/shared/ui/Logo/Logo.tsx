import { Link } from "react-router";

export const Logo = ({style}: {style: "light" | "dark"}) => {
  return (
    <Link
      to="/"
      className={`p-1 font-display text-2xl font-semibold tracking-[0.35em] lg:text-3xl ${style === "light" ? `custom-text-gold` : `text-[#8c827a]`}`}
    >
      LUNE
    </Link>
  );
};