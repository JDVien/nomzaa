import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { get_all_products } from "../../store/product";
import "./index.css";

const FilteredProducts = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  // const [filter, setFilter] = useState("")
  let filter;
  console.log(location.state, "location state");
  const { fromMainGroceries, fromMainElectronics, fromMainPets } = location.state;
  console.log((Object.values(location.state)[0]), "fromMainFilter")
  console.log(fromMainElectronics === Object.values(location.state)[0], "fromMainElectonics")
  const products = useSelector((state) => Object.values(state.products));
  const groceries = products?.filter(product => product?.category === 'groceries')
  const electronics = products?.filter(product => product?.category === 'electronics')
  const pet_supplies = products?.filter(product => product?.category === 'pet supplies')
  // (location.state === fromMainGroceries) ? setFilter(groceries) : setFilter(electonics)
  if (Object.values(location.state)[0] === fromMainGroceries) {
    filter = groceries
  } else if (Object.values(location.state)[0] === fromMainElectronics) {
    filter = electronics
  } else if (Object.values(location.state)[0] === fromMainPets) {
    filter = pet_supplies
  }
  console.log(filter, "filter")

  useEffect(() => {
    dispatch(get_all_products());
  }, [dispatch]);

  return (
    <>
    {filter?.map((product) => (
      <div key={product?.id}>
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
              <a href={`/products/${product?.id}`}>
                <h2>{product?.title}</h2>
              </a>
              <p>{product?.brand}</p>
              <p>{product?.price}</p>
            </div>
          </div>
        </div>
    ))}
    </>
  )
}

export default FilteredProducts;
