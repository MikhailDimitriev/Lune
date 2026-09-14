import { Link } from "react-router";
import CollectionsList
  from "~/widgets/collections/ui/CollectionsList/CollectionsList";

export const CollectionsSection = () => {
  return (
    <section className="inline-padding bg-dark py-16">
      <div className="custom-text-gold flex flex-col items-center gap-12">
        <div className="flex flex-col gap-4">
          <p className="text-[16px] tracking-wider uppercase text-center">
            Collections
          </p>

          <h2 className="font-display text-4xl font-medium tracking-wide text-balance sm:text-5xl">
            Find your magic
          </h2>
        </div>

        <CollectionsList />

        <Link to="/catalog" className="link-base star-after">
          View all collections
        </Link>
      </div>
    </section>
  );
};