import type { ReactNode } from "react";

export type CraftItemProps = {
  Icon: () => ReactNode;
  title: string;
  description: string;
};

export const CraftItem = ({ Icon, title, description }: CraftItemProps) => {
  return (
    <div className="flex flex-1 flex-col items-center gap-5 px-6 py-8 text-center">
      <Icon />
      <h3 className="font-display text-xl font-medium tracking-wide">
        {title}
      </h3>
      <p className="text-[16px] leading-relaxed">{description}</p>
    </div>
  );
};
