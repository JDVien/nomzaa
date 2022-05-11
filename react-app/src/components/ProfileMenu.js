import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../store/session';

const ProfileMenu = ({user}) => {
  const dispatch = useDispatch()
  const [showUserMenu, setShowUserMenu] = useState(false);

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

  let firstname = user.fullname.split(" ")[0];

  return (
    <>
      <div id="profile" onClick={openMenu}>Hello, {firstname}</div>
      {showUserMenu && (
        <>
          <div className='profile_dropdown_menu'>
            <div id='orders_'><a id='orders_a' href={`/`}>Orders</a></div>
            <div id='logout_'><a id='logout_a' onClick={onLogout} href="/">Sign Out</a></div>
          </div>
        </>
      )}
    </>
  )
}

export default ProfileMenu;
