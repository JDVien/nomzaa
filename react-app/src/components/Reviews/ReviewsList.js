import { get_all_reviews } from '../../store/reviews'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import EditReview from './EditReviewForm';

// import './reviewindex.css';

const Reviews = ({user, filteredReviews}) => {
  const dispatch = useDispatch()
  const reviews = useSelector(state => Object.values(state.reviews))

  useEffect(() => {
    dispatch(get_all_reviews())
  }, [dispatch])

  return (
    <>
    <div className="reviews-list-container">
        {filteredReviews?.map(review =>
        <div id='review-box' key={review.id}>
            <div className="user_box">
            <div className="profile_box">
                <p className='profile_img_link' href={`/`}>
                    <img id="profile_img_review" src='/static/images/default._CR0,0,1024,1024_SX48_.jpg' alt=""></img>
                </p>
                {/* <p id="profile_name_link" href={`/users/${user.id}`}> */}
                    <div id="profile_name_div">{review?.users.fullname}</div>
                {/* </p> */}
            </div>
            </div>
            <div className="review_content_box">
            <div className="review_recommendation">
                <div className="review-header">
                <div className="rating">
                  <p>rating: {review?.rating}</p>
                </div>
                <div className="review_title">
                <div id='review_title'>{review?.review_title} </div>
                </div>
                </div>
            </div>
                <div id="review_content">
                    {review.content}
                </div>
                <div className='review_owner_controls'>
                {user?.id === review?.user_id && (
                    <Link className='edit_review_link' to={{
                            pathname:`/reviews/${review?.id}/edit`, state: { fromReviews: review?.id }}
                        }><span>Edit</span>
                    </Link>
                )}
                {user?.id === review?.user_id && (
                    <Link className='delete_review_link' to={{
                        pathname:`/reviews/${review?.id}/delete`, state: { fromReviews: review?.id }}
                    }>
                        <span>Delete</span>
                    </Link>
                )}

                </div>
                </div>
        </div>
        )}
    </div>
    </>
)

}

export default Reviews
