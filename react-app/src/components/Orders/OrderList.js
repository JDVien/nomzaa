import { get_all_products } from "../../store/product";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { create_cart } from "../../store/cart";
import "./orders.css";

const OrderList = ({ user }) => {
  const dispatch = useDispatch();
  const [user_quantity, setUser_Quantity] = useState(1);
  const [orderid, setOrderid] = useState(0);
  const cart_items = useSelector((state) => Object.values(state.carts));
  // all items that have been purchsed and are in the users order history
  const user_products = cart_items.filter(
    (item) => item.user_id === user.id && item.purchased);
  const DATE_OPTIONS = { year: "numeric", month: "short", day: "numeric" };
  const DAY_OPTIONS = { weekday: "long", month: "short", day: "numeric" };

  const handleTotalCost = (price) => {
    let total_price = 0.0;
    total_price += price;
    return total_price;
  };

  let next_order = [];
  let an_order = [];
  for (let i = 0; i < user_products.length; i++) {
    if (
      user_products[i + 1] &&
      user_products[i]?.order_id === user_products[i + 1]?.order_id
    ) {
      an_order.push(user_products[i]);
    } else {
      an_order.push(user_products[i]);
      next_order.push(an_order);
      an_order = [];
    }
  }

  useEffect(() => {
    dispatch(get_all_products());
  }, [dispatch]);

  let k = next_order.length - 1;
  const add = () => k--;

  const handleAddToCart = async (item) => {
    const data = {
      user_id: user.id,
      product_id: item?.product?.id,
      purchased: false,
      saved: false,
      order_id: orderid,
      quantity: user_quantity,
    };
    await dispatch(create_cart(data));
  };
  return (
    <>
      <div id="order_container">
        <h1 id="your_orders_text">Your Orders</h1>
        {next_order?.map((item) => (
          <>
            <div className="order_by_num" key={item?.order_id}>
              <div id="order_content">
                <div id="order_item">
                  <div className="order_item_details_banner">
                    <div className="order_summary_text">
                      <span>ORDER PLACED</span>
                      <br />
                      <span>
                        {new Date(item[0]?.created_at).toLocaleDateString(
                          "en-US",
                          DATE_OPTIONS
                        )}
                      </span>
                    </div>
                    <div className="order_summary_text">
                      <span>
                        TOTAL <br /> ${handleTotalCost(item[0]?.product?.price)}
                      </span>
                    </div>
                    <div className="order_summary_text">
                      <span>
                        SHIP TO <br />
                        {user?.fullname}
                      </span>
                    </div>
                    <div className="order_date">
                      <span className="order_number order_summary_text">
                        Order # 112-5435096-97610{k}
                      </span>
                    </div>
                  </div>
                  <span id="order_status_text">
                    <h2>
                      Arriving by{" "}
                      {new Date(item[0]?.created_at).toLocaleDateString(
                        "en-US",
                        DAY_OPTIONS
                      )}
                    </h2>
                  </span>
                  <div className="order_items_body">
                    <div className="order_items_active">
                      {next_order[k]?.map((item) => (
                        <div className="order_products" key={item?.product?.id}>
                          <div className="order_box">
                            <Link
                              className="item_title_a product_link"
                              to={{
                                pathname: `/products/${item?.product?.category}/${item?.product_id}`,
                                state: { fromFiltered: item?.product },
                              }}
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
                            </Link>
                            <div className="buy_again_div">
                              <button
                                className="buy_again_bttn"
                                onClick={() => handleAddToCart(item)}
                              >
                                <img
                                  className="bttn_img"
                                  src="/static/images/buy_again_circ.png"
                                  alt=""
                                  width="25"
                                  height="25"
                                />
                                <span className="buy_again_span">
                                  Buy it again
                                </span>
                              </button>
                              <span id="order_item_qty">
                                Qty: {item?.quantity}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="delete_link_box">
                      <Link
                        className="delete_order_link"
                        to={{
                          pathname: `/orders/${next_order[k][0]?.order_id}/delete`,
                          state: { fromOrders: next_order[k][0]?.order_id },
                        }}
                      >
                        <span id="order_cancel_bttn">Cancel Order</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {add()}
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default OrderList;
