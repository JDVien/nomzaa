import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useHistory, useLocation } from 'react-router-dom';
import { delete_cart } from '../../store/cart';


const CancelOrder = ({ user }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [reason, setReason] = useState("");
  const { fromOrders } = location.state;
  console.log(fromOrders, "fromOrders")
  const orderId = fromOrders;
  console.log(orderId, "orderId")

  const cart_items = useSelector((state) => Object.values(state.carts));
  console.log(cart_items, "cart_items in delete +++++++++++++")
  const user_products = cart_items
    .filter((item) =>  item.purchased && item?.order_id === orderId)
    // .map((product) => product.product);
  console.log(user_products, 'user_products in delete orders --------------------')
  // const user_order = user_products.filter(
  //   (item) => item.order_id === cart_items[user_products.length - 1].order_id
  // );


  // const cart_item = user_products[user_products.length - 1]

  user_products.forEach(item => (
    console.log(item?.id, "item_id")
  ))

  const handleOrderCancel = () => {
    user_products.forEach(product => (
    dispatch(delete_cart(product?.id))

    ))
    history.push(`/confirm`)
  }


  return (
    <>
      <div className='cancel_order_page_container'>
        <div className='user_path_header'>
          <span>Your Account > Your Orders > Order Summary # > Cancel</span>
        </div>
        <div className='user_confirm_text'>
          <span>Are you sure you want to cancel this order?</span>
        </div>
        <div className='order_cancel_action_box'>
          <span>Items Ordered</span>
          <div className='active_order_container'>
            <div className='order_item_title_price_qty'>
            <span>1 of:</span><span>price</span>
            </div>
            <div className='other_order_item_details'>
              <span>Condition: new</span>
              <span>Sold by: brand</span>
            </div>
            <div className='cancel_reason_selectfield'>
            <form className='cancel_reason'>
              <label htmlFor='reason'>Select Cancellation Reason
              <select
                className='reason_select'
                name="reason"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
              >
                <option defaultValue="Select Cancellation Reason">Select Cancellation Reason</option>
                <option value="Order Created By Mistake">Order Created By Mistake</option>
                <option value="Item(s) Would Not Arrive On Time">Item(s) Would Not Arrive On Time</option>
                <option value="Shipping Cost Too High">Shipping Cost Too High</option>
                <option value="Item Price Too High">Item Price Too High</option>
                <option value="Found Cheaper Someplace Else">Found Cheaper Someplace Else</option>
                <option value="Item Sold By Third Party">Item Sold By Third Party</option>
                <option value="Need To Change Shipping Speed">Need To Change Shipping Speed</option>
                <option value="Need To Change Payment Method">Need To Change Payment Method</option>
                <option value="Other">Other</option>
              </select>
              </label>
            </form>
            </div>
            <div className='delete_controls'>
            <button className='delete_no'>
              <a href={`/orders`}>Return to order summary</a>
            </button>
            <button className='delete_yes' onClick={() => handleOrderCancel()}>Cancel Item</button>
          </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default CancelOrder;
