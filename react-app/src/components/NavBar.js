import { get_all_carts } from '../store/cart';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, Link, useHistory} from 'react-router-dom';
// import LogoutButton from './auth/LogoutButton';
// import SearchBar from "./Search/Searchbar";
import ProfileMenu from './ProfileMenu'
import VertiCart from './Cart/VertiCart';

import './nav.css';

const NavBar = ({user}) => {
  const dispatch = useDispatch();
  const cart_items = useSelector(state => Object.values(state.carts)); // Object.values for list of carts
  const user_cart = cart_items.filter(item => item.user_id === user.id && !item.purchased)
  // const [showUserMenu, setShowUserMenu] = useState(false);
  const firstname = user?.fullname.split(" ");
  const history = useHistory()
  const [showCart, setShowCart] = useState(false);
  const products = useSelector(state => state.products)
  const productlist = Object.values(products).map(product => [product.title, product])

  const [filteredList, setFilteredList] = useState([])
  const [searchWord, setSearchWord] = useState("")

  useEffect(() => {
    if (user) {
      dispatch(get_all_carts())
    }
      setFilteredList(productlist.filter(product => product[0].toLowerCase().includes(searchWord.toLowerCase())))
  }, [searchWord, dispatch])

  function handleSubmit(e) {
      e.preventDefault();
      if (filteredList.length > 0) {
          history.push(`/products/${filteredList[0][2]}`)
      }
      setSearchWord("")
  }

  // const openMenu = () => {
  //   if (showUserMenu) return;
  //   setShowUserMenu(true);
  // };

  const handleShowVertiCart = () => {
    setShowCart(true)
    return (
      <>
        <div className='set_verticart_div'>
          <VertiCart />
        </div>
      </>
    )
  }

  return (
    <>
    <header id="navbar">
      <div className='nav_container'>
        <div id='nav_row_top'>
          <div className="nav_top_left">
            <div id='nom_nav_logo'>
            <NavLink className='navlink_nav_item' to='/'>
              <img id='nomzaa_logo_main_sm' src="/static/images/nomza_logo_main_lg.png"
                   alt="nomzaa logo"
                   width="120"
                   height="auto"
              />
            </NavLink>
            </div>
              {user && (
            <div id='nav_user_location'>

              <span id='user_deliver_text'>Deliver to {user?.fullname}</span>
              <br/>
              <i className='fas fa-map-marker-alt'></i>
              <span id='user_city_zip_text'>{user?.city}{" "}{user?.zipcode}</span>
            </div>
              )}
          </div>
          <div className="nav_search_center">
            <form id="nav_search_form" onSubmit={e => handleSubmit(e)}>
            <div id='nav_search_filter_drop_select'>All</div>
            <div className='nav_search_field_bar'>
            <input
                type="text"
                value={searchWord}
                onChange={e => setSearchWord(e.target.value)}
                className='nav_input'
                placeholder='Search for products'
            />
            {searchWord !== '' && filteredList.length > 0 && (
                <div className='search_result_body'>
                    <ul className='search_result_list'>
                        {filteredList.map((product) => (
                            <li className='search_result_li'
                                key={product.id}
                                value={product.long_name}
                                onClick={() => (
                                  setFilteredList([])
                                )}
                            >
                                <Link className='search_to_link'
                                      to={{ pathname:`/products/${product[1]?.category}/${product[1]?.id}`,
                                      state: { fromFiltered: product[1]}}}>
                                      {product[0]}
                                </Link>
                              </li>
                        ))}
                    </ul>
                </div>
            )}
              {/* <input
                className='nav_input'
                type='text'
                defaultValue=""
                placeholder=""
              /> */}
            </div>
              <button className="search_bttn">
                <i className='fas fa-search'></i>
              </button>

          </form>
          </div>
          <div className="nav_top_right">
            <img id='region_flag_icon' src="/static/images/nom_nav_flag.png" width="24" height="20" alt="flag"/>
            {user ? (
            <div className='nav_top_right_profile'>
              <ProfileMenu user={user} />
            </div>
            ) : ( <div className='nav_top_right_profile'>
                    <NavLink className='navlink_nav_item ' to="/login">
                      <span id='orders_'>Hello, Sign in</span>
                    </NavLink>
                  </div>
              )}
            <div className='nav_top_right_orders'>
              <NavLink className='navlink_nav_item ' to="/orders">
                <span id='orders_'>Orders</span>
              </NavLink>
            </div>
            <div className='nav_top_right_cart'>
            <i className='fas fa-shopping-cart'></i>
            <NavLink className='navlink_nav_item ' to="/cart">
                {(user_cart.length ? `Cart (${user_cart.length})` : "Cart")}
                {/* <span id='cart_text'>Cart</span> */}
              </NavLink>
            </div>
          </div>
        </div>
        <div id='nav_row_bottom'>
          <Link className='filter_link' to='/products'>
          <span className='subnav_category'>
              <img id='nav_all_burger' onClick={() => handleShowVertiCart()} src='/static/images/nav-sprite-burger.png' alt='burger' />
          All</span>
        {/* <button  >set verticart</button> */}
        {/* {showCart ? (
                  <VertiCart />
        ) : (
          <>
          </>
        )} */}
          </Link>
          <Link className='filter_link' to={{ pathname:'/products/electronics', state: { fromMainElectronics: "electronics"}}}>
          <span className='subnav_category'>Nomzaa Basics</span>
          </Link>
          <Link className='filter_link' to={{ pathname: '/products/home-improvment', state: { fromMainImprovement: "home-improvement"}}}>
          <span className='subnav_category'>Home Improvement</span>
          </Link>
          <Link className='filter_link' to={{ pathname:'/products/pet supplies', state: { fromMainPets: "pet supplies"}}}>
          <span className='subnav_category'>Pet Supplies</span>
          </Link>
          <Link className='filter_link' to={{ pathname:'/products/groceries', state: { fromMainGroceries: "groceries"}}}>
          <span className='subnav_category'>Groceries</span>
          </Link>
          <Link className='filter_link' to={{ pathname:'/products/household', state: { fromMainHousehold: "household"}}}>
          <span className='subnav_category'>Home & Kitchen</span>
          </Link>
          <Link className='filter_link' to={{ pathname:'/products/beauty&personal', state: { fromMainBeauty: "beauty&personal"}}}>
          <span className='subnav_category'>Beauty & Personal Care</span>
          </Link>
          <Link className='filter_link' to={{ pathname:'/products/fashion', state: { fromMainFashion: "fashion"}}}>
          <span className='subnav_category'>Fashion</span>
          </Link>
          <Link className='filter_link' to={{ pathname:'/products/toys', state: { fromMainToys: "toys"}}}>
          <span className='subnav_category'>Toys & Games</span>
          </Link>
          <Link className='filter_link' to={{ pathname:'/products/electronics', state: { fromMainElectronics: "electronics"}}}>
          <span className='subnav_category'>Smart Devices</span>
          </Link>
          {/* <Link className='filter_link' to='/products'>
          <span className='subnav_category'>Today's Deals</span>
          </Link> */}
          {/* <span className='subnav_category'>Best Sellers</span> */}
          <span className='subnav_category'>
          <a className='subnav_jd_github_a' href='https://github.com/JDVien/nomzaa'>
            <i className='fab fa-github'/>
          </a>
          </span>
          <span className='subnav_category'>
          <a className='subnav_jd_github_a' href='https://www.linkedin.com/in/jd-v-52a595237/'>
            <i className="fab fa-linkedin-in"></i>
          </a>
          </span>
        </div>
      </div>
    </header>
    </>
  );
}

export default NavBar;
