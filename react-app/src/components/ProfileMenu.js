import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../store/session';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';

import './nav.css';

const ProfileMenu = ({user}) => {
  const dispatch = useDispatch()
  const [showUserMenu, setShowUserMenu] = useState(false);
  let nameSplit = user?.fullname.split(" ");
  // console.log(nameSplit[0])
  const onLogout = async (e) => {
    dispatch(logout());
  };

  const openMenu = () => {
    if (showUserMenu) return;
    setShowUserMenu(true);
  };

  useEffect(() => {
    if (!showUserMenu) return;
    const closeMenu = () => {
      setShowUserMenu(false);
    };

    document.addEventListener('click', closeMenu)

    return () => document.removeEventListener('click', closeMenu);
  }, [showUserMenu]);



  return (
    <>
      <div id="profile" onClick={openMenu}>Hello, {nameSplit[0]}</div>
      {showUserMenu && (
        <>
          <div className='profile_dropdown_menu'>
            <div id='orders_'><a id='orders_a' href={`/`}>Orders</a></div>
            {/* <div id='logout_'><a id='logout_a' onClick={onLogout} href="/">Sign Out</a></div> */}
            <LogoutButton />
            {!user && (
            <NavLink to='/login' exact={true} activeClassName='active'>
              Login
            </NavLink>
            )}
          </div>
        </>
      )}
    </>
  )
}

export default ProfileMenu;
