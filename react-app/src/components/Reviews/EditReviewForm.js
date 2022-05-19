import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams, useLocation } from "react-router-dom";
import { update_review } from '../../store/reviews';
import { get_one_product } from "../../store/product";
import { Rating } from 'react-simple-star-rating'

const EditReview = () => {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const{ fromReviews } = location.state
  const reviewId = fromReviews;
  const review = useSelector((state) => state.reviews[reviewId])
  const  productId  = review?.product_id
  const product = useSelector((state) => state.products[productId])
  const [review_title, setReview_Title] = useState(review?.review_title);
  const [content, setContent] = useState(review?.content);
  const [rating, setRating] = useState(review?.rating);
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [errors, setErrors] = useState([]);

    // Catch Rating value
    const handleRating = (rate) => {
      setRating(rate)
      // other logic
    }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setHasSubmitted(true);

    let formErrors = [];
    if (!review_title) formErrors.push("Please provide a title for you review")
    if (!content) formErrors.push("Please provide details")
    if (rating === null) formErrors.push("Please provide a rating")
    if (formErrors.length) {
      return setErrors(formErrors)
    }

    const updatedReview = {
      id: review.id,
      review_title,
      content,
      rating,
      user_id: sessionUser.id,
      product_id: productId,
    };
    await dispatch(update_review(updatedReview));
    setReview_Title("");
    setContent("");
    setRating("");
    setHasSubmitted(false);
    history.push(`/products/${productId}`)
  }

  return (
    <>
        <div className="create_review_container">
      {/* {hasSubmitted && ( */}
          <div className="create_form_top_box">
            <h2>Create Review</h2>
            <div className='product_title_box'>
              <img src={product?.img} width='90' height='90' alt="" />
              <span>{product?.title}</span>
            </div>
          </div>
            {/* <div className="error-modal">
              {errors.map((error, index) => (
                <div key={index}>{error}</div>
              ))}
            </div>
            <div className="modal-content-bttn-ok">
                <span onClick={e => setShowModal(false)}>OK</span>
            </div>
          </div>

        </Modal> */}
       {/* )} */}
      <div className="review-form-container">
        <form onSubmit={handleSubmit} className="review-content-container">

        <div className="rating-div">Overall rating</div>
          <div className='rating_container'>

            <button className='{style_rate_one}'
              type='button'
              value={rating}
              onClick={(e) => {
                setRating(1)

              }}
            >
              <span>
                1
              </span>
            </button>

            <button className='{style_rate_two}'
              type='button'
              value={rating}
              onClick={(e) => {
                setRating(2)
                // setStyle_Rec_No("recommend_clicked")
                // setStyle_Rec_Yes("recommend_yes")
              }}
            >
              <span>
                2
              </span>
            </button>
            {/* <button className={style_rate_three} */}
            <button className='{style_rate_three}'
              type='button'
              value={rating}
              onClick={(e) => {
                setRating(3)
                // setStyle_Rec_No("recommend_clicked")
                // setStyle_Rec_Yes("recommend_yes")
              }}
            >
              <span>
                3
              </span>
            </button>
            {/* <button className={style_rate_four} */}
            <button className='{style_rate_four}'
              type='button'
              value={rating}
              onClick={(e) => {
                setRating(4)
                // setStyle_Rec_No("recommend_clicked")
                // setStyle_Rec_Yes("recommend_yes")
              }}
            >
              <span>
                4
              </span>
            </button>
            {/* <button className={style_rate_five} */}
            <button className='{style_rate_five}'
              type='button'
              value={rating}
              onClick={(e) => {
                setRating(5)
                // setStyle_Rec_No("recommend_clicked")
                // setStyle_Rec_Yes("recommend_yes")
              }}
            >
              <span>
                5
              </span>
            </button>

          </div>
          <div className="review_title_div">
            <label htmlFor='review_title'>Add a headline</label>
            <input
              className="create_input"
              name="review_title"
              type="text"
              value={review_title}
              onChange={(e) => setReview_Title(e.target.value)}
              required={true}
            />
          </div>
          <div className="review_controls_body">
          <div className="review_controls_container">
            <h2>Add a photo</h2>
            <span>Shoppers find images more helpful than text alone</span>
          </div>
          </div>
          <div className="content-div">
            <label htmlFor='content'>
            </label>
            <textarea
              className='create_textbox'
              type='text'
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />

          <button className="button btn-submit-review" type="submit">
          <span>
            Post Review
            </span>
          </button>
          </div>
        </form>
      </div>
      </div>
    </>
  )
}

export default EditReview;
