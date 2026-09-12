import { CartIcon } from "~/entities/cart";
import { Logo } from "~/shared/ui/Logo";
import { useHeaderState } from "~/widgets/header/model/hooks/useHeaderState";
import NavigationsLinksList
  from "~/widgets/header/ui/NavigationsLinksList/NavigationsLinksList";

export const Header = () => {
  const solid  = useHeaderState();

  return (
    <header
      className={`inline-padding sticky top-0 z-50 mx-auto flex h-16 items-center justify-between gap-4 border-b text-white transition-colors duration-300 lg:h-20 ${
        solid
          ? "border-gold/25 bg-black/95 backdrop-blur"
          : "border-transparent bg-transparent"
      }`}
    >
      <Logo style={"light"} />

      <NavigationsLinksList />

      <CartIcon />
    </header>
  );
};