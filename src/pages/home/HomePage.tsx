import type { Route } from "./+types/HomePage";
import { AboutSection } from "~/widgets/about-section";
import { CollectionPreview } from "~/widgets/collection-preview";
import { CollectionsSection } from "~/widgets/collections";
import { CraftSection } from "~/widgets/craft-section";
import { Hero } from "~/widgets/hero";
import { ReviewsSection } from "~/widgets/reviews";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Lune" },
    { name: "description", content: "There you can find your dream jewelry." },
  ];
}

export default function HomePage() {
  return (
    <main>
      <Hero />

      <CollectionPreview />

      <CollectionsSection />

      <AboutSection />

      <CraftSection />

      <ReviewsSection />
    </main>
  );
}