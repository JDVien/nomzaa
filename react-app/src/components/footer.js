import { NavLink  } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import "./footer.css";

const Footer = () => {
  return (
    <div id='footer'>
      <div id='footer_head_top'>
        <span id='back_to_top' onClick={() => window.location.reload()}>Back to top</span>
      </div>
    <div id="footer_top">
      <div id='footer_top_logo_banner'>
      <div id='nom_nav_logo'>
            <NavLink className='navlink_nav_item' to='/'>
              <img id='nomzaa_logo_main_sm' src="/static/images/nomza_logo_main_lg.png"
                   alt="nomzaa logo"
                   width="120"
                   height="auto"
              />
            </NavLink>
            </div>
      </div>
    </div>

    <div id='footer_bottom'>
      <div className='bottom_about_row'>
      <span className='bottom_about_tag'>© 2022, Nomzaa.com, Inc. or its affiliates</span>
      <span className='bottom_about_tag_jdv'>Jason Vien - Github - LinkedIn</span>
      </div>
    </div>
    </div>
  );
};

export default Footer;
