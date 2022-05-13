import { get_all_carts, delete_cart, update_cart } from '../../store/cart'
import { useDispatch, useSelector } from 'react-redux'
import { get_all_products } from '../../store/product';
import React, { useState, useEffect } from 'react';
import './index.css'
// import { Link } from 'react-router-dom';


const Cart = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const [isDeleted, setIsDeleted] = useState(false);
  const [hasCheckedOut, setHasCheckedOut] = useState(false);
  // const products = useSelector(state => Object.values(state.products))
  const cart_items = useSelector(state => Object.values(state.carts))
  const user_cart = cart_items.filter(item => item.user_id === sessionUser.id && !item.purchased)
  let cart_subtotal = 0.00;
  user_cart.forEach(item => cart_subtotal += item?.product?.price)
  const [user_quantity, setUser_Quantity] = useState(user_cart?.item?.quantity)
  let cart_total_quantity = 0;
  console.log(user_quantity, "user_quantity")
  user_cart.forEach(item => cart_total_quantity += user_quantity)

  useEffect(() => {
    dispatch(get_all_products())
  }, [dispatch])

  const removeCartItem = (id) => {
    setIsDeleted(true);
    dispatch(delete_cart(id))
  }

  const handlePurchaseCart = () => {
    if (user_cart.length) {
      setHasCheckedOut(true);
      dispatch(update_cart(user_cart))
    }
  }

const handleQuantity = (e) => {
  setUser_Quantity(e.target.value)
}

console.log('cart_items', cart_items)
console.log('user_cart', user_cart)

  return (
    <>
      <div className='cart_page_container'>
            <div id='ad_banner_body'>
            <h2>this is an advertisement</h2>
            </div>
        <div className='main_page_body'>
          <div id='left_cart_col_container' className='cart_left_container'>
            <div id='main_shopping_cart_container'>
              <div id='shopping_cart_text_div'>
                <h1>Shopping Cart</h1>
              </div>
              <div id='active_shopping_cart_body'>
              {isDeleted && <div id="removed-cart-item">Your item has been removed!</div>}
                {user_cart?.map(item =>
                  <div className='cart_item_container' key={item.product_id}>
                    <div className="cart_item_image">
                      <a href={`/products/${item?.product_id}`}>
                        <img alt='product' src={item?.product?.img} width='180' height='180' />
                      </a>
                    </div>
                    <div className='cart_item_content_group'>
                      <div className='cart_item_details_list'>
                          <span className='item_title_text'>
                            <a className='item_title_a' href={`/products/${item?.product_id}`}>
                              {item.product.title}
                            </a>
                          </span>
                          <div id='cart_item_price'>{" "}{item.product.price}</div>
                          <div id='cart_item_stock'><span>Only {item.product.stock} left - order soon.</span></div>
                          <div id='cart_item_brand'><span>Shipped from: {item.product.brand}</span></div>
                          <span>Gift options not available. Learn More</span><br/>
                          <div id='cart_item_user_options'>
                            {/* <span className='cart_item_option cart_item_quantity_select'>Qty: {item.quantity}</span> */}
                            <form className='ppd_add_quantity'>
                              <label htmlFor='quantity'>Qty:
                              <select
                                className='product_quantity_select'
                                name="quantity"
                                value={user_quantity}
                                onChange={(e) => handleQuantity(e)}
                              >
                                <option defaultValue={item?.quantity}>{item?.quantity}</option>
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
                            <span className='cart_options_separator'>|</span>
                            <span id='cart_item_delete_bttn' className='cart_item_option' onClick={() => removeCartItem(item.id)}>Delete</span>
                            <span className='cart_options_separator'>|</span>
                            <span className='cart_item_option cart_save'>Save for Later</span>

                          </div>
                      </div>
                    </div>

                  </div>
                )}
              </div>
            </div>

          </div>

          <div id='right_cart_col_container' className='cart_right_column'>
            <div id='checkout_box'>
              <div className='subtotal_row'>
                <span id='subtotal_text_quantity'>Subtotal ({cart_total_quantity}):</span><br/>
                <span id='subtotal_price'>$ {cart_subtotal}</span><br/>
                <button id='checkout_proceed_bttn' onClick={handlePurchaseCart}>Proceed to checkout</button>
              </div>
            </div>
            <div id='recent_viewed_items_box'>
              <span id='recent_views_text'>Your recently viewed items</span>
            </div>
          </div>
          {hasCheckedOut && <div id="removed-cart-item">Order Confirmed! Thank you for your purchase!</div>}
        </div>
      </div>
    </>
  )

}

export default Cart;
