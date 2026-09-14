import { Link } from "react-router";
import type {
  CollectionItemProps
} from "~/widgets/collections/model/collectionsLinks";

export const CollectionCard = ({ name, category, image }: CollectionItemProps) => {
  return (
    <article
      className="group aspect-3/4 overflow-hidden rounded-t-[25%] rounded-b-[10%] bg-cover bg-center p-5 flex flex-col items-center justify-end text-center transition-transform duration-500 hover:scale-105"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8), transparent), url(${image})`,
      }}
    >
      <Link
        to={`/catalog?category=${category}`}
        className="flex flex-col gap-2 text-[16px] font-semibold uppercase tracking-widest transition-colors hover:opacity-70"
      >
        {name}
        <span>✦</span>
      </Link>
    </article>
  );
};