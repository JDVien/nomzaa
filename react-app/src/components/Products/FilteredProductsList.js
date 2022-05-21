// import React, { useState } from 'react';
import { useLocation, Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { get_all_products } from "../../store/product";
import VertiCart from '../Cart/VertiCart';
import "./index.css";

const FilteredProducts = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  // const [filter, setFilter] = useState("")
  let filter;
  // console.log(location.state, "location state");
  const { fromMainGroceries} = location?.state;
  const {fromMainBeauty} = location?.state;
  const {fromMainElectronics} = location?.state;
  const {fromMainFashion} =location?.state;
  const {fromMainPets} = location?.state;
  const {fromMainHousehold } = location?.state;
  console.log((Object.values(location?.state)[0]), "fromMainFilter")
  // console.log(fromMainElectronics === Object.values(location?.state)[0], "fromMainElectonics")
  const products = useSelector((state) => Object.values(state?.products));
  const groceries = products?.filter(product => product?.category === 'groceries')
  const electronics = products?.filter(product => product?.category === 'electronics')
  const pet_supplies = products?.filter(product => product?.category === 'pet supplies')
  const fashion = products?.filter(product => product?.category === 'fashion')
  const beauty_personal = products?.filter(product => product?.category === 'beauty&personal')
  const household = products?.filter(product => product?.category === 'household')
  // (location.state === fromMainGroceries) ? setFilter(groceries) : setFilter(electonics)
  if (Object.values(location?.state)[0] === fromMainGroceries) {
    filter = groceries
  } else if (Object.values(location?.state)[0] === fromMainElectronics) {
    filter = electronics
  } else if (Object.values(location?.state)[0] === fromMainPets) {
    filter = pet_supplies
  } else if (Object.values(location?.state)[0] === fromMainFashion) {
    filter = fashion
  } else if (Object.values(location?.state)[0] === fromMainBeauty) {
    filter = beauty_personal
  } else if (Object.values(location?.state)[0] === fromMainHousehold) {
    filter = household
  }



  console.log(filter, "filter")

  useEffect(() => {
    dispatch(get_all_products());
  }, [dispatch]);

  return (
    <>
     <VertiCart />
    <div className='filter_list_container'>
      {filter?.map((product) => (
        <div className='list_item_box' key={product?.id}>
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
                <Link className='fpl_link' to={{ pathname:`/products/${product?.category}/${product?.id}`, state: { fromFiltered: product }}}>
                  <h2 id='fpl_prod_title'>{product?.title}</h2>
                </Link>
                <span className='fpl_brand'>{product?.brand}</span>
                <div className='fpl_price_sub_box'>
                   <p>$</p><h2>{product?.price.toString().split(".")[0]}</h2><p id='fpl_price_p'>{product?.price.toString().split(".")[1]}</p>
                </div>
                <div className='fpl_prime_div'>
                <img id='prime_sm' src='/static/images/prime_sm_fpl.png' alt='prime'/>
                <span className='fpl_span'>FREE Delivery{":  "}<p className='fpl_delivery'> Wed, May 25</p></span><br />
                </div>
                <span className='fpl_stock'>Only {product?.stock} left in stock - order soon.</span><br />
                <span className='fpl_item_age_limit'>Ages: 15 years and up</span>
              </div>
            </div>
          </div>
      ))}
      </div>
    </>
  )
}

export default FilteredProducts;
