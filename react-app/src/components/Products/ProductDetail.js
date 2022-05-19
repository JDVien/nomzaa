import { get_one_product } from "../../store/product";
import { get_all_reviews, get_one_review } from "../../store/reviews";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
// import CreateReview from '../Reviews/CreateReviewForm';
import Reviews from "../Reviews/ReviewsList";
import { useParams, useHistory, Link, useLocation } from "react-router-dom";
import { create_cart } from "../../store/cart";
import AddToCart from "../Cart/AddToCart";

import "./ppd.css";

const ProductDetails = ({ loaded }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const { fromFiltered } = location?.state;
  console.log(fromFiltered, "fromFiltered------------------")
  const sessionUser = useSelector((state) => state.session.user);
  // const { productId } = useParams();
  const  productId  = fromFiltered?.id;
  console.log(productId, 'productId-------------')
  const product = useSelector((state) => state.products[productId]);
  const { reviewId } = useParams();
  const review = useSelector((state) => state.reviews[reviewId]);
  const reviews = useSelector((state) => Object.values(state.reviews));
  const [user_quantity, setUser_Quantity] = useState(1)
  const [orderid, setOrderid] = useState(0);
  useEffect(() => {
    dispatch(get_all_reviews());
    dispatch(get_one_product(fromFiltered?.id));
  }, [dispatch]);

  const filteredReviews = reviews.filter(
    (review) => review.product_id === +productId
  );

  const userReview = reviews.filter(
    (review) =>
      review?.user_id === sessionUser?.id && review?.product_id === +productId
  );
  console.log(userReview, 'userReview-------------------')

  const handleAddToCart = () => {
    // console.log(user_quantity, "user_quantity")
      const data = {
        user_id: sessionUser.id,
        product_id: product.id,
        purchased: false,
        order_id: orderid,
        quantity: user_quantity,
      };
      dispatch(create_cart(data));
      return history.push("/cart");
  };

  return (
    <>

      <div id="product_page_content_container">
        <div id="ppd_top_section">
        <div id="ppd_left_box">
            <div className="s_product_img_container">
              <img
                className=""
                src={product?.img}
                width="213"
                height="218"
                alt=""
              ></img>
            </div>
          </div>

          <div id="ppd_center_column">
            <div className='ppd_title_sub_box'>
              <h2>{product?.title}</h2>
            </div>
            <div className='ppd_price_sub_box'>
              <h3>${product?.price}</h3>
            </div>
            <div className='ppd_colors_sub_box'>
              <p>Color:</p>
            </div>
            <div className='ppd_desc_sub_box'>
              <p>{product?.description}</p>
            </div>
          </div>
          <div id="ppd_right_box">
            <h3>${product?.price}</h3>
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
            <AddToCart
              product={product}
              handleAddToCart={handleAddToCart}
            />
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
