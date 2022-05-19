import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { create_review } from '../../store/reviews';
import { get_one_product } from "../../store/product";
import ReactStars from 'react-stars'

// import './reviewindex.css';
import './reviewform.css';

const CreateReview = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation()
  const { fromProductDetails } = location.state
  const productId = fromProductDetails?.id
  console.log(fromProductDetails?.id, "fromProductDetails===============")
  const sessionUser = useSelector(state => state.session.user);
  const product = useSelector((state) => state.products[productId]);
  const [review_title, setReview_Title] = useState("");
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(1);
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [errors, setErrors] = useState([]);

  // Catch Rating value
  const updateRating = (val) => setRating(val)

  useEffect(() => {
    dispatch(get_one_product(productId));
  }, [dispatch, productId])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setHasSubmitted(true)

    let formErrors = [];
    if (!review_title) formErrors.push("Please provide a title for you review")
    if (!content) formErrors.push("Please provide details")
    if (rating === null) formErrors.push("Please provide a rating")
    if (formErrors.length) {
      return setErrors(formErrors)
    }

    const review = {
      review_title,
      content,
      rating,
      user_id: sessionUser.id,
      product_id: productId
    };
    let createReview = await dispatch(create_review(review))
    setReview_Title("")
    setContent("")
    setRating("")
    setHasSubmitted(false);
    history.push(`/products/${product?.category}/${productId}`)

  }


  return (
    <>
    <div className='user_top_banner'>
    <img id="profile_img_rev_banner" src='/static/images/default._CR0,0,1024,1024_SX48_.jpg' width='34' height='34' alt=""></img>
      <p id='rev_prof_name'>{sessionUser?.fullname}</p>
      </div>
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
          {errors?.review_title?.map(error => {
            return (
              <p className='error' key={error}>{error}</p>
            )
          })}
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
          {errors?.content?.map(error => {
            return (
              <p className='error' key={error}>{error}</p>
            )
          })}
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


export default CreateReview;
