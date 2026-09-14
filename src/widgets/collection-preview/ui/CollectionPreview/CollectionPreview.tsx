import { Link } from "react-router";
import collectionLeft from "~/shared/assets/bg-images/collection-left.png";
import collectionRight from "~/shared/assets/bg-images/collection-right.png";

export const CollectionPreview = () => {
  return (
    <section className="custom-bg-gold inline-padding relative overflow-hidden py-12">
      <img
        src={collectionLeft}
        alt="Luxury jewelry collection"
        className="absolute left-0 top-0 h-full hidden md:w-1/5 lg:w-1/4 2xl:w-1/3 object-cover opacity-40"
      />
      <img
        src={collectionRight}
        alt="Luxury jewelry collection"
        className="absolute right-0 top-0 h-full hidden md:w-1/5 lg:w-1/4 2xl:w-1/3 object-cover opacity-40"
      />

      <div className="text-black relative mx-auto max-w-lg flex flex-col items-center gap-12 text-center">
        <p className="flex flex-col gap-2 text-sm tracking-widest uppercase">
          <span>✦</span>
          Collection
        </p>

        <h2>
          Timeless pieces for <span className="italic">dreamers</span>
        </h2>

        <p className="text-lg leading-relaxed">
          Each piece is inspired by fantasies, nature and the light of the moon
        </p>

        <Link to="/catalog" className="link-base star-after">
          Discover more
        </Link>
      </div>
    </section>
  );
};
