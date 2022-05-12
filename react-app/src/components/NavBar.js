
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import ProfileMenu from './ProfileMenu'
import './nav.css';

const NavBar = ({user}) => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  // const firstname = user?.fullname.split(" ");
  const openMenu = () => {
    if (showUserMenu) return;
    setShowUserMenu(true);
  };


  return (
    <>
    <header id="navbar">
      <div className='nav_container'>
        <div id='nav_row_top'>
          <div className="nav_top_left">
            <div id='nom_nav_logo'>
              <h2>Nomzaa</h2>
            </div>
            <div id='nav_user_location'>
              <span id='user_deliver_text'>Deliver to user</span>
              <br/>
              <span id='user_city_zip_text'>{user?.city}{" "}{user?.zipcode}</span>
            </div>
          </div>
          <div className="nav_search_center">
            <form id="nav_search_form">
            <div id='nav_search_filter_drop_select'>All</div>
            <div className='nav_search_field_bar'>
              <input
                className='nav_input'
                type='text'
                defaultValue=""
                placeholder=""
              />
            </div>
          </form>
          </div>
          <div className="nav_top_right">
            <div className='nav_top_right_profile'>
              <ProfileMenu user={user} />
            </div>
            <div className='nav_top_right_orders'>
              <span id='orders_'>Orders</span>
            </div>
            <div className='nav_top_right_cart'>
              <a id='cart_a' href="/cart">
                <span id='cart_text'>Cart</span>
              </a>
            </div>
          </div>
        </div>
        <div id='nav_row_bottom'>
          this sub navbar will contain links to maximize your consumerist tendencies with ease and convenience wow modern life really is something special just try not to think too hard about it or you'll go insanse
        </div>
      </div>
    </header>
    </>
  );
}

export default NavBar;

{/* <nav>
<ul>
  <li>
    <NavLink to='/' exact={true} activeClassName='active'>
      Home
    </NavLink>
  </li>
  <li>
    <NavLink to='/login' exact={true} activeClassName='active'>
      Login
    </NavLink>
  </li>
  <li>
    <NavLink to='/sign-up' exact={true} activeClassName='active'>
      Sign Up
    </NavLink>
  </li>
  <li>
    <NavLink to='/users' exact={true} activeClassName='active'>
      Users
    </NavLink>
  </li>
  <li>
    <NavLink to='/products' exact={true} activeClassName='active'>
      Products
    </NavLink>
  </li>
  <li>
    <LogoutButton />
  </li>
</ul>
</nav> */}
