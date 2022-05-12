import { get_one_product } from "../../store/product";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { create_cart } from "../../store/cart";
import AddToCart from "../Cart/AddToCart";

import "./ppd.css";

const ProductDetails = ({ loaded }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const { productId } = useParams();
  const product = useSelector((state) => state.products[productId]);
  const [user_quantity, setUser_Quantity] = useState(1)
  console.log(product);
  useEffect(() => {
    dispatch(get_one_product(productId));
  }, [dispatch, productId]);

  const handleAddToCart = () => {
    console.log(user_quantity, "user_quantity")
      const data = {
        user_id: sessionUser.id,
        product_id: product.id,
        purchased: false,
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
            <h3>{product?.price}</h3>
            <form className='ppd_add_quantity'>
              <label htmlFor='quantity'>Qty:
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
            <button>Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
