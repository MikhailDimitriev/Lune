import ReviewsList from "~/widgets/reviews/ui/ReviewsList/ReviewsList";

export const ReviewsSection = () => {
  return (
    <section className="custom-bg-gold inline-padding py-16">
      <div className="flex flex-col items-center gap-6 text-black">

        <p className="text-[16px] tracking-wider uppercase text-center">
          Reviews
        </p>

        <h2>They shine with Lune</h2>

        <ReviewsList />
      </div>
    </section>
  );
};