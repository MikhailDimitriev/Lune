import CraftList from "~/widgets/craft-section/ui/CraftList/CraftList";

export const CraftSection = () => {
  return (
    <section className="bg-dark inline-padding py-16">
      <div className="custom-text-gold flex flex-col items-center gap-12">
        <p className="text-[16px] tracking-wider uppercase text-center">
          Crafted with love
        </p>

        <CraftList />
      </div>
    </section>
  );
};
