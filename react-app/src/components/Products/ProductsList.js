import { get_all_products } from "../../store/product";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";
import "./index.css";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => Object.values(state.products));
  const getRandomInt = (min,max) => {  return Math.random() * (max - min) + min;};
  useEffect(() => {
    dispatch(get_all_products());
  }, [dispatch]);

  return (
    <div className='all_products_list'>
      {products?.map((product) => (
                  <div className="list_item_box" key={product?.id}>
                  <div className="product_item_row_container">
                    <div className="s_product_img_container">
                      <img
                        className=""
                        src={product?.img}
                        width="213"
                        height="218"
                        alt=""
                      ></img>
                    </div>
                    <div className="product_item_detail_row_sub_container">
                      {/* <Link to={{ pathname:`/products/'${filter}'/${product?.id}`, state: { fromFiltered: product }}}> */}
                      <Link
                        className="fpl_link"
                        to={{
                          pathname: `/products/${product?.category}/${product?.id}`,
                          state: { fromFiltered: product },
                        }}
                      >
                        <h2 id="fpl_prod_title">{product?.title}</h2>
                      </Link>
                      {/* <span className="fpl_brand">{product?.brand}</span> */}
                      <div className="fpl_price_sub_box">
                        <p>$</p>
                        <h2>{product?.price.toString().split(".")[0]}</h2>
                        <p id="fpl_price_p">
                          {product?.price.toString().split(".")[1]}
                        </p>
                        <div className="rating">
                    <div className="rating_container_ppd">
                      <ReactStars
                        className="set_rating_stars"
                        count={5}
                        value={getRandomInt(2,5)}
                        size={24}
                        color2={"#ffa41c"}
                        half={true}
                        // onChange={updateRating}
                        edit={false}
                      />
                    </div>
                    </div>
                      </div>
                      <div className="fpl_prime_div">
                        <img
                          id="prime_sm"
                          src="/static/images/prime_sm_fpl.png"
                          alt="prime"
                        />
                        <span className="fpl_span">
                          FREE Delivery{":  "}
                          <p className="fpl_delivery"> Wed, May 25</p>
                        </span>
                        <br />
                      </div>
                      {/* <span className="fpl_stock">
                        Only {product?.stock} left in stock - order soon.
                      </span> */}
                      {/* <br />
                      <span className="fpl_item_age_limit">
                        Ages: 15 years and up
                      </span> */}
                    </div>
                  </div>
                </div>
        // <div className='all_prods_single_box' key={product?.id}>
        //   <div className="product_item_row_container">
        //     <div className="s_product_img_container">
        //       <img
        //         className=""
        //         src={product?.img}
        //         width="213"
        //         height="218"
        //         alt=""
        //       ></img>
        //     </div>
        //     <div className="product_item_detail_row_sub_container">
        //       <Link id="all_prods_single_link" to={{ pathname: `/products/${product?.category}/${product?.id}`, state: { fromFiltered: product}}}>
        //         <h4>{product?.title}</h4>
        //       </Link>
        //       <p>{product?.brand}</p>
        //       <p>${product?.price}</p>
        //     </div>
        //   </div>
        // </div>
      ))}
    </div>
  );
};

export default Products;
