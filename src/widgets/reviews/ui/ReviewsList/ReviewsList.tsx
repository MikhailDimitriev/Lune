import { reviews } from "~/widgets/reviews/model/reviewsData";
import { ReviewsItem } from "~/widgets/reviews/ui/ReviewsItem";

const ReviewsList = () => {
  return (
    <div className="flex w-full flex-col divide-y-2 divide-black lg:flex-row lg:divide-x-2 lg:divide-y-0">
      {reviews.map((review) => (
        <ReviewsItem key={review.name} {...review} />
      ))}
    </div>
  );
};

export default ReviewsList;