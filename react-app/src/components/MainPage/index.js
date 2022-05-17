import * as React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './index.css';


const Main = ({ user }) => {
  const dispatch = useDispatch();
  const products = useSelector(state => Object.values(state.products))

  // useEffect(() => {
  //   dispatch()
  // })

  return (
    <div id="main">
      <div id="main_content_body">
      <div id="header_panel_content">
        <div id='header_banner'>
          <img className="main_banner_image" src="https://m.media-amazon.com/images/I/71d175R97YL._SX3000_.jpg" alt='main_img' />
        </div>
        <div className="a_boxes_container">
          <div className="a_box_left">
            <span className="a_box_title_text">
              <h3>Nomzaa Devices</h3>
              </span>
            <div className="a_box_left_content">
              <a href='/products'>
              <img
                className=""
                src="https://m.media-amazon.com/images/I/711UZVBYXGL._AC_SL1000_.jpg"
                width="326"
                height="326"
                alt=""
              ></img>
              </a>
            </div>
          </div>
          <div className="a_box_left">
            <span className="a_box_title_text">
              <h3>Spring Styles</h3>
              </span>
            <div className="a_box_left_content">
              {/* <a href='/products/fashion'> */}
              <img
                className=""
                src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/BROWSE/CAROUSELS/SUB-HERO/mob/Fresh_kicks._CB620863518_.jpg"
                width="326"
                height="326"
                alt=""
              ></img>
              {/* </a> */}
            </div>
          </div>
          <div className="a_box_left">
            <span className="a_box_title_text">
              <h3>Shop Everyday Essentials</h3>
              </span>
            <div className="a_box_left_content">
              {/* <a href='/products/groceries'> */}
              <img
                className=""
                src="https://images-na.ssl-images-amazon.com/images/G/01/composer/uploads/FreshStoreEnhancedwidget-bodyfamily-pack/desktop/filename_x7p29bk._CB622367118_.jpg"
                width="326"
                height="326"
                alt=""
              ></img>
              {/* </a> */}
            </div>
          </div>
          <div className="a_box_left">
            <span className="a_box_title_text">
              <h3>Must-Have for Pets</h3>
              </span>
            <div className="a_box_left_content">
              {/* <a href='/products/pet supplies'> */}
              <img
                className=""
                src="https://images-na.ssl-images-amazon.com/images/G/01/img20/pets/dog_shop_by_category/Storefront_440x440_New-Pet-Guide_-dog-_-EN.png"
                width="326"
                height="326"
                alt=""
              ></img>
              {/* </a> */}
            </div>
          </div>
        </div>
      </div>
      <div id='mid_banner'>
          <img className="mid_banner_image" src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/CORE/SPRING_SALES/browse/browse-hero-macro-snd-DT.jpg" width='1500' height='600' alt='main_img' />
        </div>
      <div id='mid_banner'>
          <img className="mid_banner_image" src="https://images-na.ssl-images-amazon.com/images/G/01/omaha/images/merch/2020/WFM/Monthly/December/UFG/LandingPageHero/02151046_1_1500x300_R2.jpg" width='1500' alt='main_img' />
        </div>
      </div>
    </div>
  )

}

export default Main;
