import React from "react";
import Products from "../Products/ProductsList";
import "../Orders/orders.css";

const Confirmation = () => {
  return (
    <>
      <div className="confirmation_box">
        <div className="confirmation_main_actions">
          <span id="success_order_text">
            Order Confirmed! Thank you for shopping with Nomzaa!
          </span>
          <div className="confirmation_options">
            <a href="/">
              <span className="c_option">Continue Shopping</span>
            </a>
            <a href="/orders">
              <span className="c_option">View Your Order</span>
            </a>
            <br />
          </div>
          <img
            className="confirm_order_img"
            src="/static/images/nomza_logo_confirm.png"
            alt=""
          />
        </div>
      </div>
      <div className="products_carousel" id="more_products_carousel">
      <h3 id="more_items_text">More items to consider</h3>
        <Products />
      </div>
    </>
  );
};

export default Confirmation;
