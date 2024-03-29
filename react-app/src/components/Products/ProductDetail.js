import { get_one_product } from "../../store/product";
import { create_cart, get_all_carts } from "../../store/cart";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import ReactImageZoom from "react-image-zoom";
import Reviews from "../Reviews/ReviewsList";
import { useHistory, Link, useLocation } from "react-router-dom";
import ReactStars from "react-stars";
import AddToCart from "../Cart/AddToCart";
import VertiCart from "../Cart/VertiCart";
import "./index.css";
import "./ppd.css";
import "./zoom.css";

const ProductDetails = ({ loaded, user }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const { fromFiltered } = location?.state;
  const productId = fromFiltered?.id;
  const product = useSelector((state) => state.products[productId]);
  const reviews = useSelector((state) => Object.values(state.reviews));
  const [user_quantity, setUser_Quantity] = useState(1);
  const [orderid, setOrderid] = useState(0);
  const [thisImg, setThisImg] = useState(product?.img);

  const [props, setProps] = useState({
    width: 300,
    zoomWidth: 700,
    img: thisImg,
  });

  useEffect(() => {
    dispatch(get_all_carts());
    dispatch(get_one_product(fromFiltered?.id));
  }, [dispatch]);

  let detailsList = product?.description.split(" . ");
  let decZero = product?.price.toString().split(".")[0];
  let decOne = product?.price.toString().split(".")[1];
  let upsellFract = (product?.price * 0.05).toFixed(2);
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  const filteredReviews = reviews.filter(
    (review) => review.product_id === +productId
  );
  let user_rating = 0.0;
  filteredReviews.forEach((rev) => {
    user_rating += rev?.rating;
  });
  let avgRating = 0;
  !filteredReviews.length
    ? (avgRating = 0)
    : (avgRating = user_rating / filteredReviews.length);
  const userReview = reviews.filter(
    (review) =>
      review?.user_id === user?.id && review?.product_id === +productId
  );

  const handleAddCartRedirect = () => {
    if (user) {
      const data = {
        user_id: user.id,
        product_id: product.id,
        purchased: false,
        saved: false,
        order_id: orderid,
        quantity: user_quantity,
      };
      dispatch(create_cart(data));
      return history.push("/cart");
    } else history.push("/login");
  };

  const handleAddToCart = () => {
    if (user) {
      const data = {
        user_id: user.id,
        product_id: product.id,
        purchased: false,
        saved: false,
        order_id: orderid,
        quantity: user_quantity,
      };
      dispatch(create_cart(data));
    } else history.push("/login");
  };

  return (
    <>
      <div id="product_page_content_container">
        <VertiCart />
        <div id="top_ad_bar">.</div>
        <div id="ppd_top_section">
          <div id="ppd_left_box">
            <div className="s_product_img_container">
              <div className="img-zoom-container">
                <div id="myresult" className="img-zoom-result">
                  <ReactImageZoom {...props} />
                  {document.querySelector(".image")}
                </div>
              </div>
            </div>
          </div>

          <div id="ppd_center_column">
            <div className="ppd_title_sub_box">
              <h2>{product?.title}</h2>
              <span className="ppd_brand_subtitle">from: {product?.brand}</span>
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
                <span className="ppd_num_ratings">
                  {filteredReviews?.length} ratings
                </span>
              </div>
            </div>
            <div className="ppd_price_sub_box">
              <p>$</p>
              <h1>{decZero}</h1>
              <p>{decOne}</p>
            </div>
            <div className="ppd_prime_del_div">
              <img
                id="prime_sm"
                src="/static/images/prime_sm_fpl.png"
                width="53"
                height="15"
                alt="prime"
              />
              <div>
                <span id="ppd_ampersand">& FREE Returns</span>
              </div>
            </div>
            <div className="ppd_cc_upsell_box">
              <span className="ppd_cc_upsell">
                {" "}
                Earn 5% back on this purchase (worth ${upsellFract} when
                redeemed)
              </span>
              <span className="ppd_cc_upsell_two">
                with your Nomzaa Store Card.{" "}
              </span>
            </div>
            <div className="ppd_list_details_box">
              <div className="desc_left_box">
                <span className="descriptor_left">Brand</span>
                <br />
                <span className="descriptor_left">Product type</span>
                <br />
                <span className="descriptor_left">Item dimensions</span>
                <br />
                <span className="ppd_colors_sub_box descriptor_left">
                  Colors:
                </span>
              </div>
              <div className="desc_right_box">
                <span className="descriptor_right">{product?.brand}</span>
                <br />
                <span className="descriptor_right">{product?.category}</span>
                <br />
                <span className="descriptor_right">
                  {getRandomInt(10)} x {getRandomInt(10)} x {getRandomInt(10)}
                </span>
                <br />
              </div>
            </div>
            <div className="ppd_desc_sub_box">
              <h2 className="about_text">About this item</h2>
              {detailsList?.map((detail) => (
                <ul id="details_list">
                  <li className="list_detail_item">{detail}</li>
                </ul>
              ))}
            </div>
          </div>
          <div id="ppd_right_box">
            <div className="ppd_price_sub_box" id="right_price_sub_box">
              <p>$</p>
              <h1>{decZero}</h1>
              <p>{decOne}</p>
            </div>
            <div className="prime_returns_box">
              <img
                id="v_prime_sm"
                src="/static/images/prime_sm_fpl.png"
                alt="prime"
              />
              <span id="ampersand">& FREE Returns</span>
            </div>
            <div>
              <span id="amp_free_prime">FREE delivery </span>
            </div>
            <div>
              <span id="amp_date_prime">Monday, June 6 . Order within</span>

              <span id="amp_deadline"> 2 hrs 50 mins</span>
            </div>
            <div>
              <span id="amp_location">
                <i className="fas fa-map-marker-alt"></i>
                Deliver to {user?.fullname} -{user?.city} {user?.zipcode}
              </span>
            </div>
            <form className="ppd_add_quantity">
              <label className="label_select" htmlFor="quantity">
                Qty:
                <select
                  className="product_quantity_select"
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

            <span id="stock_left" className="stock_right">
              <i className="fa-solid fa-lock"></i> Secure transaction
            </span>
            <AddToCart handleAddToCart={handleAddToCart} />

            <button id="buy_bttn" onClick={handleAddCartRedirect}>
              Buy Now
            </button>
            <div className="ppd_ship_details_box">
              <div className="desc_left_ship_box">
                <span className="descriptor_left_ship">Ships from</span>
                <br />
                <span className="descriptor_left_ship">Sold by</span>
                <br />
                <span className="descriptor_left_ship">Packaging</span>
                <br />
              </div>
              <div className="desc_right_ship_box">
                <span className="descriptor_right_ship">Nomzaa</span>
                <br />
                <span className="descriptor_right_ship">{product?.brand}</span>
                <br />
                <span className="descriptor_right_ship">Nomzaa Packaging</span>
                <br />
              </div>
            </div>
            <span className="details_text">Details</span>
            <div className="return_details_box">
              <span>Return policy:</span>
              <span className="return_blue_details">
                Eligible for Return, Refund or Replacement within 30 days of
                receipt
              </span>
            </div>
          </div>
        </div>
        <div id="ppd_bottom_section">
          <div id="create_review_box">
            <div id="customer_reviews_div">
              <h2>CUSTOMER REVIEWS</h2>
              <div className="rating_container_ppd">
                <ReactStars
                  className="set_rating_stars"
                  count={5}
                  value={avgRating}
                  size={32}
                  color2={"#ffa41c"}
                  half={true}
                  edit={false}
                />
                <span>{avgRating} out of 5</span>
              </div>
              <span className="ppd_num_ratings_reviews">
                {filteredReviews?.length} global ratings
              </span>
            </div>
            <h4>Review this product</h4>
            <span>Share your thoughts with other customers</span>
            <div id="create_review_bttn_div">
              {user && user?.id === userReview[0]?.user_id ? (
                <div>
                  <span>You've reviewed this product. Thank you!</span>
                </div>
              ) : (
                <Link
                  className="review-link-bttn"
                  to={{
                    pathname: "/reviews/new",
                    state: { fromProductDetails: product },
                  }}
                >
                  <span>Write a customer review</span>
                </Link>
              )}
            </div>
          </div>

          <div id="ppd_reviews_box">
            <div className="reviews_container">
              <Reviews
                user={user}
                filteredReviews={filteredReviews}
                avgRating={avgRating}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
