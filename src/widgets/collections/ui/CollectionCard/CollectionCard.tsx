import { Link } from "react-router";
import type {
  CollectionItemProps
} from "~/widgets/collections/model/collectionsLinks";

export const CollectionCard = ({ name, category, image }: CollectionItemProps) => {
  return (
    <article className="h-full">
      <Link
        to={`/catalog?category=${category}`}
        className="group flex aspect-3/4 w-full flex-col items-center justify-end overflow-hidden rounded-t-[25%] rounded-b-[10%] bg-cover bg-center p-5 text-center transition-transform duration-500 hover:scale-105"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.6), transparent), url(${image})`,
        }}
      >
        <span className="flex flex-col gap-2 text-[16px] font-semibold uppercase tracking-widest transition-colors">
          {name}
          <span>✦</span>
        </span>
      </Link>
    </article>
  );
};