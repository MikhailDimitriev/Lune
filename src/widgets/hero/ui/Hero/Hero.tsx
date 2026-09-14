import { Link } from "react-router";
import heroBg from "~/shared/assets/bg-images/hero-jewelry.png";

export const Hero = () => {
  return (
    <section
      className="inline-padding relative -mt-16 flex min-h-[85vh] items-center overflow-hidden bg-no-repeat bg-cover bg-center pt-16 lg:-mt-20 lg:pt-20"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-linear-to-r from-dark to-transparent" />

      <div className="custom-text-gold flex flex-col gap-12 justify-start items-start relative max-w-lg">
        <p className="star-after sm:text-[16px] max-w-1/2 tracking-wider">
          Jewelry that whispers your story
        </p>

        <h1 className="font-display text-5xl font-medium tracking-wide text-balance sm:text-6xl lg:text-8xl">
          BEAUTY IN EVERY
          <span className="italic"> detail</span>
        </h1>

        <Link to={"/catalog"} className="link-base star-after">
          Explore collection
        </Link>
      </div>
    </section>
  );
};