import { delete_cart, update_cart } from '../../store/cart'
import { useDispatch, useSelector } from 'react-redux'
import { get_all_products } from '../../store/product';
import React, { useState, useEffect } from 'react';
import './index.css'
import { Link } from 'react-router-dom';


const Cart = () => {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const [wasDeleted, setWasDeleted] = useState(false);

  const products = useSelector(state => Object.values(state.products))

  const cart_items = useSelector(state => Object.values(state.carts))

  const user_cart = cart_items.filter(item => item.user_id === sessionUser.id && !item.purchased)

  let total = 0.00;

  user_cart.forEach(item => total += item?.game?.price)

  useEffect(() => {
    dispatch(get_all_products())
  }, [dispatch])

  const removeCartItem = (id) => {
    setWasDeleted(true);
    dispatch(delete_cart(id))
  }

  const handlePurchaseCart = () => {
    if (user_cart.length) {
      dispatch(update_cart(user_cart))
    }
  }

  return (
    <>
      <div className='cart_page_container'>
        <div className='main_page_body'>
          <div id='left_cart_col_container' className='cart_left_container'>
            <div id='ad_banner_body'>this is an advertisement</div>
            <div id='main_shopping_cart_container'>
              <div id='shopping_cart_text_div'>Shopping Cart</div>
              <div id='active_shopping_cart_body'>
                {user_cart?.map(item =>
                  <div className='cart_item_container' key={item.product_id}>
                    <div className="cart_item_image">
                      <a href={`/products/${item?.product_id}`}>
                        <img alt='product' src={item?.product?.img} />
                      </a>
                    </div>
                    <div className='cart_item_content_group'>
                      <ul className='cart_item_details_list'>
                        <li className='li_spacing'>
                          <span className='item_title_text'>
                            <a className='item_title_a' href={`/products/${item?.product_id}`}>
                              {item.product.title}
                            </a>
                          </span>
                        </li>
                      </ul>

                    </div>

                  </div>


                )}
              </div>
            </div>

          </div>

          <div id='right_cart_col_container' className='cart_right_column'>
            <div id='checkout_box'>
              <div className='subtotal_row'>
                <span id='subtotal_text_quantity'>Subtotal ({cart_items.length}):</span>
                <span id='subtotal_price'>$</span>
                <button id='checkout_proceed_bttn'>Proceed to checkout</button>
              </div>
            </div>
            <div id='recent_viewed_items_box'>
              <span id='recent_views_text'>Your recently viewed items</span>

            </div>
          </div>
        </div>
      </div>
    </>
  )

}

export default Cart;
