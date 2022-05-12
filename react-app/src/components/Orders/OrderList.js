import { get_all_products } from "../../store/product";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";

const OrderList = ({user}) => {
  const dispatch = useDispatch()
  const products = useSelector(state => Object.values(state.products))
  const cart_items = useSelector(state => Object.values(state.carts))
  const user_products = cart_items
    .filter(item => item.user_id === user.id && item.purchased).map(product => product.product)

  useEffect(() => {
    dispatch(get_all_products())
  }, [dispatch])

  return (
    <>
      <div id="order_container">
        <div id="order_content">
          <div id="order_item">
            {user_products?.map(product =>
              <div className="order_products" key={product?.id}>
                <div id="order_box">
                  <a href={`/products/${product?.id}`}>
                    <div className='product_'>
                      <img src={product?.img} alt="" />
                    </div>
                    <div id='order_product_title'>
                      {product?.title}
                    </div>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default OrderList;
