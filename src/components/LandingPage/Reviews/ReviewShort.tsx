import Paragraph from "@/components/Sections/Paragraph";
import { GoogleIcon, StarGained } from "../../icons";
import { ReviewType } from "./types";

type ReviewShortPropsType = {
  review: ReviewType;
};

const ReviewShort: React.FC<ReviewShortPropsType> = ({ review }) => {
  return (
    <a
      data-testid="review_short"
      className="flex h-fit cursor-pointer items-center rounded-xl bg-white p-4 shadow-sm transition-shadow duration-300 hover:shadow-md"
      href={review.link}
      target="_blank"
    >
      {/* <Image
        src={review.author_photo}
        alt="review author's photo"
        width={72}
        height={72}
      /> */}
      <div className="ml-2 flex h-full flex-col justify-between">
        {/* <Paragraph className="font-medium leading-none">
          {review.author}
        </Paragraph> */}
        {/* <Paragraph className="font-normal leading-none">
          {new Date(review.date).toLocaleDateString("es-ES", {
            year: "numeric",
            month: "long",
          })}
        </Paragraph> */}
        <div className="flex items-center space-x-1">
          <StarGained />
          <Paragraph className="font-medium leading-tight">
            {review.rating.toFixed(1)}
          </Paragraph>
          <GoogleIcon />
        </div>
      </div>
    </a>
  );
};

export default ReviewShort;
