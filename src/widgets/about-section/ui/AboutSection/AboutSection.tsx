import { Link } from "react-router";
import jewelryBox from "~/shared/assets/about/jewelry-box.png";

export const AboutSection = () => {
  return (
    <section className="custom-bg-gold inline-padding py-16 relative overflow-hidden">
      <img
        src={jewelryBox}
        alt=""
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 md:block"
      />

      <div className="text-black flex w-1/3 flex-col gap-12 leading-relaxed text-balance relative z-10">
        <p className="text-sm tracking-widest uppercase">
          About Lune
        </p>

        <h2>
          Inspired by <span className="italic">moonlight</span>
        </h2>

        <p className="text-lg text-balance">
          LUNE is a jewelry brand born from a love of the moon, stars and
          everything that makes us feel alive
        </p>

        <p className="text-lg">
          We create pieces that are more than accessories - they are little
          talismans that accompany you on your journey
        </p>

        <Link to="/about" className="link-base star-after">
          Our story
        </Link>
      </div>
    </section>
  );
};