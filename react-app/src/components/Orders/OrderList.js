import { get_all_products } from "../../store/product";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import "./orders.css";

const OrderList = ({ user }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => Object.values(state.products));
  // all items in user order history and user cart combined
  const cart_items = useSelector((state) => Object.values(state.carts));
  console.log(cart_items, "cart_items in order list");
  // all items that have been purchsed and are in the users order history
  const user_products = cart_items
    .filter((item) => item.user_id === user.id && item.purchased)
    .map((product) => product.product);
  console.log(user_products, "user_products in order list");

  const user_order = user_products.filter(
    (item) => item.order_id === cart_items[user_products.length - 1].order_id
  );
  console.log(user_order, "user_order--------------------");
  console.log(user_products[cart_items.length - 1], "test group");
  let order_group = cart_items.filter(
    (order) => order.order_id === cart_items[cart_items.length - 1].order_id
  );

  let next_order = [];
  let an_order = [];
  for (let i = 0; i < cart_items.length; i++) {
    if (cart_items[i]?.order_id === cart_items[i + 1]?.order_id) {
      an_order.push(cart_items[i]);
      an_order.push(cart_items[i + 1]);
    } else {
      next_order.push(an_order);
      an_order = [];
    }
  }

  useEffect(() => {
    dispatch(get_all_products());
  }, [dispatch]);

  let i = next_order.length - 1;
  const add = () => i--;
  return (
    <>
      <div id="order_container">
        <h1>Your Orders</h1>
        {next_order?.map((item) => (
          <div className="order_by_num" key={item?.order_id}>
            <div id="order_content">
              <div id="order_item">
                <div className="order_item_details_banner">
                  <div className="order_date">
                    {/* <span>Order Placed</span> */}
                  </div>
                  <span className="order_number">
                    Order # 112-5435096-97610{i}
                  </span>
                </div>
                <div className="order_items_body">
                  {next_order[i]?.map((item) => (
                    <div className="order_products" key={item?.product?.id}>
                      <div className="order_box">
                        <a
                          className="product_link"
                          href={`/products/${item?.product?.id}`}
                        >
                          <div className="product_">
                            <img
                              src={item?.product?.img}
                              width="90"
                              height="90"
                              alt=""
                            />
                          </div>
                          <div id="order_product_title">
                            {item?.product?.title}
                          </div>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {add()}
          </div>
        ))}
      </div>
    </>
  );
};

export default OrderList;
