import {
  delete_cart,
  update_cart,
  create_cart,
  get_all_carts
} from "../../store/cart";
import {
  get_all_saved,
  delete_saved,
  create_saved,
} from "../../store/saved.js";

import { useDispatch, useSelector } from "react-redux";
import { get_all_products } from "../../store/product";
import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";

import "./side.css";

const VertiCart = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const total = [];
  const [isDeleted, setIsDeleted] = useState(false);
  let [hasCheckedOut, setHasCheckedOut] = useState(false);
  const saved_items = useSelector((state) => Object.values(state.saved));
  const cart_items = useSelector((state) => Object.values(state.carts));
  const user_cart = cart_items.filter(
    (item) => item.user_id === sessionUser.id && !item.purchased);
  const user_saved = saved_items.filter(
    (item) => item.user_id === sessionUser.id);
  let cart_subtotal = 0.0;
  user_cart.forEach(
    (item) => (cart_subtotal += item?.product?.price * item?.quantity));
  const [quantity, setQuantity] = useState(user_cart?.item?.quantity);
  const [isSaved, setIsSaved] = useState(false);
  const [yourItems, setYourItems] = useState([]);
  let cart_total_quantity = 0;
  user_cart.forEach((item) => (cart_total_quantity += item?.quantity));

  useEffect(() => {
    dispatch(get_all_products());
    dispatch(get_all_saved())
  }, [dispatch]);

  const removeCartItem = (item) => {
    setIsDeleted(true);
    dispatch(delete_cart(item?.id));
  };

  const removeSavedItem = (item) => {
    // const newItem = yourItems?.findIndex((i) => i.id === item?.id);
    // setIsDeleted(true);
    // const temp = [...yourItems];
    // temp.splice(newItem, 1);
    // setYourItems(temp);
    setIsSaved(false);
    dispatch(delete_saved(item?.id));
  };

  const handleUpdateCart = async (e, item) => {
    const data = {
      user_id: sessionUser.id,
      product_id: item?.product_id,
      purchased: false,
      saved: false,
      order_id: item?.order_id,
      quantity: e.target.value,
    };
    if (data) {
      removeCartItem(item)
      await dispatch(create_cart(data));
    }
  };

  const handleAddToCart = async (item) => {
    const newItem = yourItems?.findIndex((i) => i.id === item?.id);
    const data = {
      user_id: sessionUser.id,
      product_id: item?.product_id,
      purchased: false,
      saved: false,
      order_id: item?.order_id,
      quantity: item?.quantity,
    };
    // history.push('/cart')
    const temp = [...yourItems];
    temp.splice(newItem, 1);
    setYourItems(temp);
    await dispatch(create_cart(data));
    setIsSaved(false);
    removeSavedItem(item)
  };

  const handleSave = async (item) => {
    const sList = [...yourItems];
    setIsSaved(true);
    sList.push(item);
    const data = {
      user_id: sessionUser.id,
      product_id: item?.product_id,
      purchased: false,
      cartitem_id: item?.id,
      saved: true,
      order_id: item?.order_id,
      quantity: item?.quantity
    };
    if (sList.length) {
      await dispatch(create_saved(data));
      dispatch(delete_cart(item?.id));
      return setYourItems(sList);
    }
  };

  const handlePurchaseCart = () => {
    total.push(cart_subtotal);
    if (user_cart.length) {
      setHasCheckedOut(true);
      setIsSaved(false)
      dispatch(update_cart(user_cart));
    }
  };


  return (
    <>
      <div className="vcart_page_container">
        <div className="v_page_body">
          <div id="v_cart_col_container" className="vcart_container">
            <div id="shopping_vcart_container">
              <div id="shopping_vcart_text_div">
                <h2>-   Shopping Cart   -</h2>

                <div id="vcheckout_box">
              <div className="vsubtotal_row">
                <span id="vsubtotal_text_quantity">
                  Subtotal ({cart_total_quantity}):{" "}
                </span>
                <span id="vsubtotal_price">$ {cart_subtotal.toFixed(2)}</span>
                <br />
              </div>
                <button
                  id="checkout_proceed_bttn" className='v_checkout_bttn'
                  onClick={() => handlePurchaseCart()}
                >
                  Proceed to checkout
                </button>
            </div>
              </div>
              <div id="active_shopping_vcart_body">
                {/* {hasCheckedOut && (
                  <>
                    <div id="removed-cart-item">
                      Order Confirmed! Thank you for your purchase!
                    </div>
                    <div id="order_to_link">
                      <a id="order_link_a" href="/orders">
                        <span id="view_order_link">View your order here</span>
                      </a>
                    </div>
                  </>
                )} */}
                {/* {isDeleted && (
                  <div id="removed-cart-item"><h3>Your item has been removed!</h3></div>
                )}
                {isSaved && (
                  <div id="removed-cart-item"><h3>Your item has has saved below!</h3></div>
                )} */}
                {user_cart?.map((item) => (
                    <div className="vcart_item_container" key={item?.id}>
                      <div className="vcart_item_image">
                        <a href={`/products/${item?.product_id}`}>
                          <img id='v_img'
                            alt="product"
                            src={item?.product?.img}
                            width="50"
                            height="auto"
                          />
                        </a>
                      </div>
                      <div className="vcart_item_content_group">
                        <div className="vcart_item_details_list">
                          <span className="item_title_text">
                            <Link
                              className="item_title_a"
                              to={{
                                pathname: `/products/${item?.product?.category}/${item?.product_id}`,
                                state: { fromFiltered: item?.product },
                              }}
                            >
                              {item.product.title}
                            </Link>
                          </span>
                          <div id="cart_item_price" className='vcart_price'>
                             ${item.product.price}
                            <img id='v_prime_sm' src='/static/images/prime_sm_fpl.png' alt='prime'/>
                          </div>
                          <div id="cart_item_stock" className='vcart_stock'>
                            <span>
                              Only {item?.product?.stock} left - order soon.
                            </span>
                          </div>
                          <br />
                          <div id="cart_item_user_options" className="v_cart_options">

                             <form className='v_add_quantity'>
                                <label htmlFor='quantity'>Qty:
                                <select
                                  key={item?.quantity}
                                  className='v_quantity_select'
                                  name="quantity"
                                  value={quantity}
                                  onChange={(e) => handleUpdateCart(e, item)}
                                >
                                  <option defaultValue="">{item?.quantity}</option>
                                  <option value="1">1</option>
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
                            <span className="cart_options_separator">|</span>
                            <span
                              id="cart_item_delete_bttn"
                              className="vcart_item_option"
                              onClick={() => removeCartItem(item)}
                            >
                              Delete
                            </span>
                            <span className="vcart_options_separator">|</span>
                            <span
                              className="vcart_item_option cart_save"
                              onClick={() => handleSave(item)}
                            >
                              Save for Later
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* <div className="your_items_container">
          <div className="saved_items_banner_text">
            <h2>Saved for later</h2>
          </div>
          <div className="page_lower_container">
            <div className="saved_items_box_left">
              {/* {yourItems.map((item) => ( */}
              {/* {user_saved?.map((item) => (
                <div
                  className="cart_item_container"
                  id="saved_box"
                  key={item?.id}
                >
                  <div className="cart_item_image">
                    <a href={`/products/${item?.product_id}`}>
                      <img
                        alt="product"
                        src={item?.product?.img}
                        width="180"
                        height="180"
                      />
                    </a>
                  </div>
                  <div className="cart_item_content_group">
                    <div className="cart_item_details_list">
                      <span className="item_title_text">
                        <Link
                          className="item_title_a"
                          to={{
                            pathname: `/products/${item?.product?.category}/${item?.product_id}`,
                            state: { fromFiltered: item?.product },
                          }}
                        >
                          {item.product.title}
                        </Link>
                      </span>
                      <div id="cart_item_price"> ${item?.product?.price}</div>
                      <div id="cart_item_stock">
                        <span>
                          Only {item?.product?.stock} left - order soon.
                        </span>
                      </div>
                      <div id="cart_item_brand">
                        <span>Shipped from: {item?.product?.brand}</span>
                      </div>
                      <div id="cart_item_user_options">
                        <button
                          id="buy_bttn"
                          className="move_to_cart_bttn"
                          onClick={() => handleAddToCart(item)}
                        >
                          Move to cart
                        </button>
                        <span
                          id="saved_item_delete_bttn"
                          className="cart_item_option_del"
                          onClick={() => removeSavedItem(item)}
                        >
                          Delete
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        {/* </div> */}
      </div>
    </>
  );
};

export default VertiCart;
