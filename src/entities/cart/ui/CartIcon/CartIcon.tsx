import { Link } from "react-router";
import {cartCount} from "~/entities/cart/model/cart.model";

export const CartIcon = () => {
  return (
    <Link
      to="/cart"
      aria-label="Shopping cart"
      className="relative text-white transition-colors hover:text-gold"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 lg:h-7 lg:w-7"
      >
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
        <path d="M3 6h18" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>

      {cartCount > 0 && (
        <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[9px] font-bold text-black">
          {cartCount}
        </span>
      )}
    </Link>
  );
};