// import React, { useState } from 'react';
import { useLocation, Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { get_all_products } from "../../store/product";
import VertiCart from "../Cart/VertiCart";
// import FiltersColumn from './FiltersColumn';
import ProductBanner from './ProductBanner';
import ReactStars from 'react-stars'
import "./index.css";
import "./filter.css";

const FilteredProducts = () => {
  const dispatch = useDispatch();
  // const history = useHistory();
  const location = useLocation();
  // const [filter, setFilter] = useState("")
  const [IsFiltered, setIsFilterd] = useState(false)

  let filter;
  let nom_type;
  const { fromMainGroceries } = location?.state;
  const { fromMainBeauty } = location?.state;
  const { fromMainElectronics } = location?.state;
  const { fromMainFashion } = location?.state;
  const { fromMainPets } = location?.state;
  const { fromMainHousehold } = location?.state;
  const { fromMainToys } = location?.state;
  const { fromMainImprovement } = location?.state;
  const getRandomInt = (min,max) => {  return Math.random() * (max - min) + min;};
  const products = useSelector((state) => Object.values(state?.products));
  const groceries = products?.filter(
    (product) => product?.category === "groceries"
  );
  const electronics = products?.filter(
    (product) => product?.category === "electronics"
  );
  const pet_supplies = products?.filter(
    (product) => product?.category === "pet supplies"
  );
  const fashion = products?.filter(
    (product) => product?.category === "fashion"
  );
  const beauty_personal = products?.filter(
    (product) => product?.category === "beauty&personal"
  );
  const household = products?.filter(
    (product) => product?.category === "household"
  );
  const toys = products?.filter(
    (product) => product?.category === "toys"
  );
  const home_improvement = products?.filter(
    (product) => product?.category === "home-improvement"
  );
  // (location.state === fromMainGroceries) ? setFilter(groceries) : setFilter(electonics)
  if (Object.values(location?.state)[0] === fromMainGroceries) {
    filter = groceries; nom_type = "fresh"
  } else if (Object.values(location?.state)[0] === fromMainElectronics) {
    filter = electronics; nom_type = "smart"
  } else if (Object.values(location?.state)[0] === fromMainPets) {
    filter = pet_supplies; nom_type = "pets"
  } else if (Object.values(location?.state)[0] === fromMainFashion) {
    filter = fashion; nom_type = "fashion"
  } else if (Object.values(location?.state)[0] === fromMainBeauty) {
    filter = beauty_personal; nom_type = "beauty"
  } else if (Object.values(location?.state)[0] === fromMainHousehold) {
    filter = household; nom_type = "home"
  } else if (Object.values(location?.state)[0] === fromMainToys) {
    filter = toys; nom_type = "toys"
  } else if (Object.values(location?.state)[0] === fromMainImprovement) {
    filter = home_improvement; nom_type = "hi"
  }
  let priceSetFifty;

  // const priceFilter = () => {
  //   priceSetFifty = filter?.filter((product) => product?.price < 50)

  //   setIsFilterd(true)
  //   return priceSetFifty;
  // }

  useEffect(() => {
    dispatch(get_all_products());
  }, [dispatch]);

  return (

    <>
        <>
      <div className='fpd_column_container'>
        {/* <div className='user_filter_options'>
          <input type="checkbox" className='brand_filter_checkbox' onClick={() => priceFilter()}/>
        </div> */}
      </div>
    </>
    <VertiCart />
        <ProductBanner type={nom_type} />
      <div className="filter_list_container">
        {/* <div className='price_filter'>
          {IsFiltered && (
            <div id='price_filtered_list'>
              {priceSetFifty?.map((item) => (
                <div className="filtered_item">
                  <h2 id="fpl_prod_title">{item?.title}</h2>
                </div>
              ))}
            </div>
          )}
        </div> */}
        {filter?.map((product) => (
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
                <span className="fpl_brand">{product?.brand}</span>
                <div className="fpl_price_sub_box">
                  <p>$</p>
                  <h2>{product?.price.toString().split(".")[0]}</h2>
                  <p id="fpl_price_p">
                    {product?.price.toString().split(".")[1]}
                  </p>
                  <div className="rating_container_fpl">
                <ReactStars
                  className="set_rating_stars"
                  count={5}
                  value={getRandomInt(2,5)}
                  size={32}
                  color2={"#ffa41c"}
                  half={true}
                  // onChange={updateRating}
                  edit={false}
                />
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
                <span className="fpl_item_age_limit">
                  Ages: 15 years and up
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FilteredProducts;
