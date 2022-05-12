import { get_all_products, get_one_product } from "../../store/product";
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
  console.log(product);
  useEffect(() => {
    dispatch(get_one_product(productId));
  }, [dispatch, productId]);

  const handleAddToCart = () => {
      const data = {
        user_id: sessionUser.id,
        product_id: product.id,
        purchased: false,
        quantity: 1,
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
            <p>Qty: 1</p>
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
