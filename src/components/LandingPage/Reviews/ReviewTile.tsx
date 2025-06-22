import Paragraph from "@/components/Sections/Paragraph";
import { StarGained, StarNotGained } from "../../icons";
import { ReviewType } from "./types";

type ReviewTilePropsType = {
  review: ReviewType;
};

const ReviewTile: React.FC<ReviewTilePropsType> = ({ review }) => (
  <a data-testid="review_tile" href={review.link} target="_blank">
    <article className="flex h-full cursor-pointer flex-col space-y-4 rounded-xl border border-[#DDDDDD] p-8 transition-all duration-300 highlight-none hover-hover:hover:border-primary">
      <div className="flex items-center">
        {Array.from(Array(review.rating)).map((_, i) => (
          <StarGained key={i} />
        ))}
        {Array.from(Array(5 - review.rating)).map((_, i) => (
          <StarNotGained key={i} />
        ))}
      </div>
      <Paragraph className="grow leading-normal webkit-line-clamp-5 review-text-content">
        {review.description}
      </Paragraph>
      <Paragraph className="font-medium leading-none">
        {new Date(review.date).toLocaleDateString("es-ES", {
          year: "numeric",
          month: "long",
        })}
      </Paragraph>
    </article>
  </a>
);

export default ReviewTile;
