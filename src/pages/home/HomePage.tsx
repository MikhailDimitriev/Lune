import type { Route } from "./+types/HomePage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Luna" },
    { name: "description", content: "There you can find your dream jewelry" },
  ];
}

export default function HomePage() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <p className="text-gray-700 dark:text-gray-200">Home</p>
    </main>
  );
}