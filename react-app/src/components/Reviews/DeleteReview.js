import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { delete_review } from "../../store/reviews";

const DeleteReview = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const { fromReviews } = location.state;
  const reviewId = fromReviews;
  const review = useSelector((state) => state.reviews[reviewId]);
  const productId = review?.product_id;
  const handleDelete = () => {
    dispatch(delete_review(reviewId));
    history.push(`/reviews/delete`);
  };

  return (
    <>
      <div className="delete_review_container">
        <div className="actions_control_box">
          <span id="delete_confirm_text">
            ! Are you sure you want to delete your review?
          </span>
          <div className="delete_controls">
            <button className="delete_no">
              <a href={`/products/${productId}`}>No</a>
            </button>
            <button className="delete_yes" onClick={handleDelete}>
              Yes
            </button>
          </div>
          <div className="review_summary_box">
            <div className="rating_title_row">
              {review?.rating} {review?.review_title}
            </div>
            <div className="review_content_row">
              <p>{review?.content}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteReview;
