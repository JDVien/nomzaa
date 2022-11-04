import { get_all_reviews } from "../../store/reviews";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";
import "./reviewindex.css";

const Reviews = ({ user, filteredReviews, avgRating }) => {
  const dispatch = useDispatch();
  const DATE_OPTIONS = { year: "numeric", month: "short", day: "numeric" };

  useEffect(() => {
    dispatch(get_all_reviews());
  }, [dispatch]);

  return (
    <>
      <div className="reviews-list-container">
        <h2 id="top_reviews_h">Top reviews from the United States </h2>
        {filteredReviews?.map((review) => (
          <div className="review-box" key={review.id}>
            <div className="user_box">
              <div className="profile_box">
                <p className="profile_img_link" href={`/`}>
                  <img
                    id="profile_img_review"
                    src="/static/images/default._CR0,0,1024,1024_SX48_.jpg"
                    alt=""
                  ></img>
                </p>
                <div id="profile_name_div">{review?.users.fullname}</div>
              </div>
            </div>
            <div className="review_content_box">
              <div className="review_recommendation">
                <div className="review-header">
                  <div className="rating">
                    <div className="rating_container_ppd">
                      <ReactStars
                        className="set_rating_stars"
                        count={5}
                        value={avgRating}
                        size={24}
                        color2={"#ffa41c"}
                        half={true}
                        edit={false}
                      />
                      <div className="review_title">
                        <span id="review_title">{review?.review_title} </span>
                      </div>
                    </div>
                    <span id="review_location_date">
                      Reviewed in {review?.users.city} on{" "}
                      {new Date(review?.created_at).toLocaleDateString(
                        "en-US",
                        DATE_OPTIONS
                      )}
                    </span>
                  </div>
                  <span id="verified">Verified Purchase</span>
                </div>
              </div>
              <div id="review_content">{review.content}</div>
              <div className="review_owner_controls">
                {user?.id === review?.user_id && (
                  <Link
                    className="edit_review_link"
                    to={{
                      pathname: `/reviews/${review?.id}/edit`,
                      state: { fromReviews: review?.id },
                    }}
                  >
                    <span className="rev_edit_span">Edit</span>
                  </Link>
                )}
                {user?.id === review?.user_id && (
                  <Link
                    className="delete_review_link"
                    to={{
                      pathname: `/reviews/${review?.id}/delete`,
                      state: { fromReviews: review?.id },
                    }}
                  >
                    <span className="rev_delete_span">Delete</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Reviews;
