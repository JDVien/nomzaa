import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams, useLocation } from "react-router-dom";
import { update_review } from '../../store/reviews';
import { get_one_product } from "../../store/product";
import ReactStars from 'react-stars'
import ReviewBanner from './ReviewBanner';
import './reviewform.css';

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
  const updateRating = (val) => setRating(val)

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
    history.push(`/reviews/confirm`)
  }

  return (
    <>
    <ReviewBanner />
      <div className='top_level_page'>
        <div className="create_review_container">
          <div className="create_form_top_box">
            <h1>Create Review</h1>
            <div className='product_title_box'>
              <img src={product?.img} width='90' height='90' alt="" />
              <span className='product_title_text'>{product?.title}</span>
            </div>
          </div>
      <div className="review-form-container">
        <form onSubmit={handleSubmit} className="review-content-container">
        <div className="rating-div"><h2>Overall rating</h2></div>
          <div className='rating_container'>
          <ReactStars
            className='set_rating_stars'
            count={5}
            value={rating}
            color2={'#FCD200'}
            half={false}
            size={50}
            onChange={updateRating}
          />
          </div>
          <div className="review_title_div">
            <label htmlFor='review_title'>
              <h2>Add a headline</h2>
              </label>
            <input
              className="create_input"
              name="review_title"
              type="text"
              placeholder="What's most important to know?"
              value={review_title}
              onChange={(e) => setReview_Title(e.target.value)}
            />
            <div>
            {errors.length > 0 && (
                   errors[0]
                )}
          </div>
          </div>
          {/* <div className="review_controls_body">
          <div className="review_controls_container">
            <h2>Add a photo</h2>
            <span>Shoppers find images more helpful than text alone</span>
          </div>
          </div> */}
          <div className="content_div">
            <label htmlFor='content'>
            <h2>Add a written review</h2>
            </label>
            <textarea
              className='create_textbox'
              type='text'
              placeholder='What did you like or dislike? What did you use this product for?'
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <div>
            {errors.length > 0 && (
                   errors[1]
                )}
          </div>
          </div>
          <div className='submit_bttn_rev'>
          <button className="button btn-submit-review" type="submit">
            Submit
          </button>
          </div>
        </form>
      </div>
      </div>
      </div>
    </>
  )
}

export default EditReview;
