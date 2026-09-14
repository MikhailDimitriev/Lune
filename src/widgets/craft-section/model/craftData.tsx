import type { ReactNode } from "react";

export type CraftItemProps = {
  Icon: () => ReactNode;
  title: string;
  description: string;
};

const CrystalIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-10 w-10"
  >
    <path d="M6 3h12l4 6-10 13L2 9Z" />
    <path d="M11 3 8 9l4 13 4-13-3-6" />
    <path d="M2 9h20" />
  </svg>
);

const StarsIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-10 w-10"
  >
    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
    <path d="M12 8 9 14l-5 1 5-1-3-6 9 3-5 2 4 4-2 1 3 1" />
  </svg>
);

const HeartHandsIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-10 w-10"
  >
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    <path d="M6 10c0-1.5.5-3 1.5-4l1-1.5" />
    <path d="M18 10c0-1.5-.5-3-1.5-4l-1-1.5" />
    <path d="M5 15c-.5-1-1-2.5-1-4" />
    <path d="M19 15c.5-1 1-2.5 1-4" />
    <path d="M12 22v-8" />
  </svg>
);

const BagIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-10 w-10"
  >
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
    <path d="M3 6h18" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

export const craftItems: CraftItemProps[] = [
  {
    Icon: CrystalIcon,
    title: "Unique design",
    description: "Each piece is an original design, created with passion and care.",
  },
  {
    Icon: StarsIcon,
    title: "High Quality",
    description: "We use premium materials for lasting beauty and shine",
  },
  {
    Icon: HeartHandsIcon,
    title: "Handmade",
    description: "Every item is carefully handmade by skilled artisans",
  },
  {
    Icon: BagIcon,
    title: "Beautiful Packaging",
    description: "Your jewelry comes in luxurious packaging, perfect for gifts",
  },
];
