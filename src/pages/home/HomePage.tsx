import type { Route } from "./+types/HomePage";

import { Hero } from "~/widgets/hero";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Luna" },
    { name: "description", content: "There you can find your dream jewelry" },
  ];
}

export default function HomePage() {
  return (
    <main>
      <Hero />
    </main>
  );
}