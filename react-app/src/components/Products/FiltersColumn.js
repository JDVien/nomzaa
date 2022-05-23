// import {
//   delete_cart,
//   update_cart,
//   create_cart,
//   get_all_carts
// } from "../../store/cart";
// import {
//   get_all_saved,
//   delete_saved,
//   create_saved,
// } from "../../store/saved.js";

// import { useDispatch, useSelector } from "react-redux";
// import { get_all_products } from "../../store/product";
// import React, { useState, useEffect } from "react";
// // import { useHistory, Link } from "react-router-dom";

// import "./filter.css";

// const FiltersColumn = () => {
//   const sessionUser = useSelector((state) => state.session.user);
//   const dispatch = useDispatch();
//   const saved_items = useSelector((state) => Object.values(state.saved));
//   const cart_items = useSelector((state) => Object.values(state.carts));
//   const user_cart = cart_items.filter(
//     (item) => item.user_id === sessionUser.id && !item.purchased);
//   const user_saved = saved_items.filter(
//     (item) => item.user_id === sessionUser.id);
//   let cart_subtotal = 0.0;
//   user_cart.forEach(
//     (item) => (cart_subtotal += item?.product?.price * item?.quantity));
//   // const [quantity, setQuantity] = useState(user_cart?.item?.quantity);
//   // const [isSaved, setIsSaved] = useState(false);
//   // const [yourItems, setYourItems] = useState([]);
//   let cart_total_quantity = 0;
//   user_cart.forEach((item) => (cart_total_quantity += item?.quantity));

//   useEffect(() => {
//     dispatch(get_all_products());
//     dispatch(get_all_saved())
//   }, [dispatch]);



//   return (
//     <>
//       <div className='fpd_column_container'>
//         <div className='user_filter_options'>
//           <input type="checkbox" className='brand_filter_checkbox' onClick={handleFilter}/>
//         </div>
//       </div>
//     </>
//   );
// };

// export default FiltersColumn;
