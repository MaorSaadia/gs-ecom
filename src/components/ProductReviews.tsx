/* eslint-disable @next/next/no-img-element */
import { Star } from "lucide-react";

type ReviewData = {
  Country: string;
  Avatar?: string;
  Name: string;
  Rating: number;
  Images?: string;
  Review?: string;
  "Translation Review"?: string;
  "Date of Published": string;
};

const ReviewStats = ({ reviews }: { reviews: ReviewData[] }) => {
  const statsData = reviews.reduce(
    (acc, review) => {
      const rating = Number(review.Rating) / 20; // Convert 100-scale to 5-scale
      acc[Math.floor(rating)] = (acc[Math.floor(rating)] || 0) + 1;
      return acc;
    },
    {} as Record<number, number>
  );

  const totalReviews = reviews.length;
  const avgRating = (
    reviews.reduce((sum, review) => sum + Number(review.Rating), 0) /
    totalReviews /
    20
  ).toFixed(2);

  return (
    <div className="flex gap-8 mb-8">
      <div className="flex flex-col items-center">
        <div className="text-4xl font-bold">{avgRating}</div>
        <div className="flex gap-1 my-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`w-4 h-4 ${
                star <= Number(avgRating)
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-200"
              }`}
            />
          ))}
        </div>
        <div className="text-sm text-gray-500">{totalReviews} reviews</div>
      </div>

      <div className="flex-1">
        {[5, 4, 3, 2, 1].map((rating) => (
          <div key={rating} className="flex items-center gap-2 mb-1">
            <span className="text-sm w-3">{rating}</span>
            <Star className="w-4 h-4 text-yellow-400" />
            <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-yellow-400"
                style={{
                  width: `${((statsData[rating] || 0) / totalReviews) * 100}%`,
                }}
              />
            </div>
            <span className="text-sm text-gray-500 w-8">
              ({statsData[rating] || 0})
            </span>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="text-sm mb-2">Share your experience</div>
        <div className="flex gap-1 mb-3">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="w-5 h-5 text-gray-200" />
          ))}
        </div>
        <button className="bg-black text-white px-4 py-2 rounded-md text-sm">
          Write a Review
        </button>
      </div>
    </div>
  );
};

const ReviewCard = ({ review }: { review: ReviewData }) => {
  const rating = Number(review.Rating) / 20; // Convert 100-scale to 5-scale
  const images = review.Images?.split(",").filter(Boolean) || [];
  const date = new Date(review["Date of Published"]).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "2-digit",
    }
  );

  return (
    <div className="border-b border-gray-200 py-6">
      <div className="flex items-center gap-4 mb-4">
        {review.Avatar ? (
          <img
            src={review.Avatar}
            alt={review.Name}
            className="w-10 h-10 rounded-full object-cover"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
            {review.Name[0]}
          </div>
        )}
        <div>
          <div className="font-medium">{review.Name}</div>
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-4 h-4 ${
                    star <= rating
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-200"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-500">{date}</span>
          </div>
        </div>
      </div>

      {review.Review && (
        <p className="text-gray-700 mb-4">
          {review["Translation Review"] || review.Review}
        </p>
      )}

      {images.length > 0 && (
        <div className="flex gap-2 flex-wrap">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.trim()}
              alt={`Review ${index + 1}`}
              className="w-20 h-20 object-cover rounded-md"
            />
          ))}
        </div>
      )}
    </div>
  );
};

const ProductReviews = ({ reviews }: { reviews: ReviewData[] }) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <ReviewStats reviews={reviews} />
      <div className="divide-y divide-gray-200">
        {reviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>
    </div>
  );
};

export default ProductReviews;