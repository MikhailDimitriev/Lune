import { CartIcon } from "~/entities/cart";
import { Logo } from "~/shared/ui/Logo";
import NavigationsLinksList
  from "~/widgets/header/ui/NavigationsLinksList/NavigationsLinksList";

export const Header = () => {
  return (
    <header
      className="sticky h-16 lg:h-20 top-0 z-50 text-white
        backdrop-blur mx-auto flex items-center justify-between gap-4 px-4 sm:px-6 lg:px-8"
    >

      <Logo />

      <NavigationsLinksList />

      <CartIcon />
    </header>
  );
};