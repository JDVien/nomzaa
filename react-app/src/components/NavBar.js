
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import './nav.css';

const NavBar = ({user}) => {
  const [showUserMenu, setShowUserMenu] = useState(false);

  const openMenu = () => {
    if (showUserMenu) return;
    setShowUserMenu(true);
  };


  return (
    <>
    <header id="navbar">
      <div className='nav_container'>
        <div id='nav_row_top'>Nomzaa
        </div>
        <div id='nav_row_bottom'>row of stuff
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
