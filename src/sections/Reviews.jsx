// import ReviewCard from "../components/ReviewCard";
import { useState } from "react";
import { reviews } from "../constants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,faStar
} from "@fortawesome/free-solid-svg-icons";

const Reviews = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const totalReviews = reviews.length;

  const nextReview = () => {
    setCurrentReviewIndex((currentReviewIndex + 1) % totalReviews);
  };

  const prevReview = () => {
    setCurrentReviewIndex(
      (currentReviewIndex - 1 + totalReviews) % totalReviews
    );
  };

  const currentReview = reviews[currentReviewIndex];

  return (
    <>
    <h2 className="font-tenor text-[32px] text-text pt-14  text-center">What our <span className=" text-primary">Swiftie&#39;s </span>say</h2>
    <div className="bg-white pt-6 pb-12  font-twentieth  flex items-center justify-between">
      {/* Left Navigation Icon */}
      <button onClick={prevReview} className="pl-44 text-[40px] text-primary hover:focus:outline-none">
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      {/* Review Content */}
      <div className="flex-1 text-center">
        <p className="text-text pb-2 text-[20px]">{currentReview.feedback}</p>
        <p className="text-[18px] text-text">-{currentReview.customerName}</p>
        <p className=" text-text "><FontAwesomeIcon className="text-[14px]" icon= {faStar} /> ({currentReview.rating})</p>
      </div>
      {/* Right Navigation Icon */}
      <button onClick={nextReview} className=" pr-44 text-[40px] text-primary hover:focus:outline-none">
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
    </>
  );
};

export default Reviews;
