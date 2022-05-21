import { get_one_product } from "../../store/product";
import { get_all_reviews} from "../../store/reviews";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import Reviews from "../Reviews/ReviewsList";
import { useParams, useHistory, Link, useLocation } from "react-router-dom";
import { create_cart } from "../../store/cart";
import AddToCart from "../Cart/AddToCart";
import VertiCart from '../Cart/VertiCart';

import "./ppd.css";

const ProductDetails = ({ loaded }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const { fromFiltered } = location?.state;
  const sessionUser = useSelector((state) => state.session.user);
  // const { productId } = useParams();
  const  productId  = fromFiltered?.id;
  const product = useSelector((state) => state.products[productId]);
  const { reviewId } = useParams();
  // const review = useSelector((state) => state.reviews[reviewId]);
  const reviews = useSelector((state) => Object.values(state.reviews));
  const [user_quantity, setUser_Quantity] = useState(1)
  const [orderid, setOrderid] = useState(0);
  useEffect(() => {
    dispatch(get_all_reviews());
    dispatch(get_one_product(fromFiltered?.id));
  }, [dispatch]);

  let detailsList = product?.description.split(" . ");
  let decZero = product?.price.toString().split(".")[0]
  let decOne = product?.price.toString().split(".")[1]

  const filteredReviews = reviews.filter(
    (review) => review.product_id === +productId
  );

  const userReview = reviews.filter(
    (review) =>
      review?.user_id === sessionUser?.id && review?.product_id === +productId
  );


  const handleAddToCart = () => {
      const data = {
        user_id: sessionUser.id,
        product_id: product.id,
        purchased: false,
        saved: false,
        order_id: orderid,
        quantity: user_quantity,
      };
      dispatch(create_cart(data));
      return history.push("/cart");
  };

  return (
    <>
      <VertiCart />
      <div id="product_page_content_container">
        <div id='top_ad_bar'>.</div>
        <div id="ppd_top_section">
        <div id="ppd_left_box">
            <div className="s_product_img_container">
              <img
                className="main_detail_img"
                src={product?.img}

                alt=""
              ></img>
            </div>
          </div>

          <div id="ppd_center_column">
            <div className='ppd_title_sub_box'>
              <h2>{product?.title}</h2>
            </div>
            <div className='ppd_price_sub_box'>
              <p>$</p><h1>{decZero}</h1><p>{decOne}</p>
            </div>
            <div className='ppd_colors_sub_box'>
              <p>Color:</p>
            </div>
            <div className='ppd_desc_sub_box'>
            <h2 className='about_text'>About this item</h2>
              {detailsList?.map(detail =>
                  <ul id='details_list'>
                    <li className='list_detail_item'>
                      {detail}
                    </li>
                  </ul>
                )}
            </div>
          </div>
          <div id="ppd_right_box">
          <div className='ppd_price_sub_box' id='right_price_sub_box'>
              <p>$</p><h1>{decZero}</h1><p>{decOne}</p>
              <div><span id='ampersand'>& FREE Returns</span></div>
            </div>
              <div><span id='amp_free_prime'>FREE Prime delivery </span></div>
              <div><span id='amp_date_prime'>Wednesday, May 25. Order within </span></div>
              <div><span id='amp_deadline'> 2 hrs 50 mins</span></div>
              <div><span id='amp_location'>
              <i className='fas fa-map-marker-alt'></i>
                Deliver to {sessionUser?.fullname} -
                          {sessionUser?.city} {sessionUser?.zipcode
                    }</span></div>
            <form className='ppd_add_quantity'>
              <label className='label_select' htmlFor='quantity'>Qty:
              <select
                className='product_quantity_select'
                name="quantity"
                value={user_quantity}
                onChange={(e) => setUser_Quantity(e.target.value)}
              >
                <option defaultValue="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
              </label>
            </form>
            <h3 id='stock_left' className='stock_right'>Only {product?.stock} left in stock - order soon.</h3>
            <AddToCart handleAddToCart={handleAddToCart} />
            <button id='buy_bttn' onClick={handleAddToCart}>Buy Now</button>
          </div>
        </div>
        <div id="ppd_bottom_section">
          <div id='create_review_box'>
        <div id="customer_reviews_div"><h2>CUSTOMER REVIEWS</h2></div>
            <h2>Review this product</h2>
            <h4>Share your thoughts with other customers</h4>
            <div id="create_review_bttn_div">
            {sessionUser && sessionUser?.id === userReview[0]?.user_id ? (
                    <div>
                    <span>You've reviewed this product. View Your Review</span>
                    </div>
                  ) : (
                    <Link className="review-link-bttn" to={{
                      pathname:'/reviews/new', state: { fromProductDetails: product}
                    }}>
                    <span>
                      Write a customer review
                    </span>
                    </Link>
                  )}
            </div>
          </div>

          <div id="ppd_reviews_box">
          {filteredReviews.length ? (
                <>
                  <div className="reviews_container">
                    <Reviews user={sessionUser} filteredReviews={filteredReviews} />
                  </div>
                </>
              ) : (
                <></>
              )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
