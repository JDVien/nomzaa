import * as React from 'react';
import { get_all_products } from "../../store/product";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './index.css';


const Main = ({ user }) => {
  const dispatch = useDispatch();
  const products = useSelector(state => Object.values(state.products))
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }


  useEffect(() => {
    dispatch(get_all_products());
  }, [dispatch]);

  return (
    <div id="main">
      <div id="main_content_body">
      <div id="header_panel_content">
        <div id='header_banner'>
          <div className='banner_carousel'>
            <input
              type='checkbox'
              className='faux-ui-facia'
            >
            </input>
            <div className="slide" slide="5" annot='This is the fith slide title.'>
          <img className="main_banner_image" src="https://m.media-amazon.com/images/I/71d175R97YL._SX3000_.jpg" alt='slide 5' />
          </div>
            <input
              type='checkbox'
              className='faux-ui-facia'
            />
            <div className="slide" slide="4" annot='This is the fourth slide title.'>
          <img className="main_banner_image" src="https://m.media-amazon.com/images/I/71djFyt86eL._SX3000_.jpg" alt='slide 4' />
          </div>
            <input
              type='checkbox'
              className='faux-ui-facia'
            />
            <div className="slide" slide="3" annot='This is the 3rd slide title.'>
          <img className="main_banner_image" src="https://m.media-amazon.com/images/I/61MO8-l+5GL._SX3000_.jpg" alt='slide 3' />
          </div>
            <input
              type='checkbox'
              className='faux-ui-facia'
            />
            <div className="slide" slide="2" annot='This is the 2nd slide title.'>
          <img className="main_banner_image" src="https://m.media-amazon.com/images/I/71-OcHJsKLL._SX3000_.jpg" alt='slide 2' />
          </div>
        <div className="counter" count="5"> / 5</div>
        </div>
        </div>
        <div id='banner_fade_div'><span>.</span>
          <input type='checkbox' className='faux-ui-facia' />
        </div>

        <div className="a_boxes_container">
          <div className="a_box_left">
            <span className="a_box_title_text">
              <h3>Nomzaa Devices</h3>
              </span>
            <div className="a_box_left_content">
              <a href='/products'>
              <img
                className="a_box_img"
                src="https://m.media-amazon.com/images/I/711UZVBYXGL._AC_SL1000_.jpg"
                width="326"
                height="326"
                alt=""
              ></img>
              </a>
              <p className="shop_now_text">Shop Now</p>
            </div>
          </div>
          <div className="a_box_left">
            <span className="a_box_title_text">
            <h3>Pick Up Where You Left Off</h3>
              </span>
            <div className="b_box_left_content quad_box">
              <a href={`/products/${products[getRandomInt(30)]?.category}`}>
              <img
                className="b_box_img quad_img"
                src={products[getRandomInt(30)]?.img}
                width="120"
                height="auto"
                alt=""
              ></img>
              </a>
              <a href='/products'>
              <img
                className="b_box_img quad_img"
                src={products[getRandomInt(30)]?.img}
                width="120"
                height="auto"
                alt=""
              ></img>
              </a>
              <a href='/products'>
              <img
                className="b_box_img quad_img"
                src={products[getRandomInt(30)]?.img}
                width="120"
                height="auto"
                alt=""
              ></img>
              </a>
              <a href='/products'>
              <img
                className="b_box_img quad_img"
                src={products[getRandomInt(30)]?.img}
                width="120"
                height="auto"
                alt=""
              ></img>
              </a>
            </div>
              <p className="shop_now_text">See More</p>
          </div>
          <div className="a_box_left">
            <span className="a_box_title_text">
              <h3>Shop Everyday Essentials</h3>
              </span>
            <div className="a_box_left_content">
              {/* <a href='/products/groceries'> */}
              <img
                className="a_box_img"
                src="https://images-na.ssl-images-amazon.com/images/G/01/composer/uploads/FreshStoreEnhancedwidget-bodyfamily-pack/desktop/filename_x7p29bk._CB622367118_.jpg"
                width="326"
                height="326"
                alt=""
              ></img>
              <p className="shop_now_text">Shop Now</p>
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
                className="a_box_img"
                src="https://images-na.ssl-images-amazon.com/images/G/01/img20/pets/dog_shop_by_category/Storefront_440x440_New-Pet-Guide_-dog-_-EN.png"
                width="326"
                height="326"
                alt=""
              ></img>
              <p className="shop_now_text">Shop Now</p>
              {/* </a> */}
            </div>
          </div>
        </div>
      </div>

      <div id='mid_banner'>
          <img className="mid_banner_image" src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/CORE/SPRING_SALES/browse/browse-hero-macro-snd-DT.jpg" width='1500' height='600' alt='main_img' />
        </div>

        <div className="b_boxes_container">
          <div className="b_box_left">
            <span className="b_box_title_text">
              <h3>Distract From Existential Dread</h3>
              </span>
            <div className="b_box_left_content">
              <a href='/products'>
              <img
                className="b_box_img"
                src="https://m.media-amazon.com/images/I/61dSw2NAKTL._AC_.jpg"
                width="326"
                height="326"
                alt=""
              ></img>
              <p className="shop_now_text">Shop Now</p>
              </a>
            </div>
          </div>
          <div className="b_box_left">
            <span className="b_box_title_text">
              <h3>Featured in Home & Garden</h3>
              </span>
            <div className="b_box_left_content">
              {/* <a href='/products/fashion'> */}
              <img
                className="b_box_img"
                src="https://m.media-amazon.com/images/I/919JLjonqVL._AC_SX350_SY420_.jpg"
                width="326"
                height="326"
                alt=""
              ></img>
              <p className="shop_now_text">Shop Now</p>
              {/* </a> */}
            </div>
          </div>
          <div className="b_box_left">
            <span className="b_box_title_text">
              <h3>Luscious Looks</h3>
              </span>
            <div className="b_box_left_content">
              {/* <a href='/products/groceries'> */}
              <img
                className="b_box_img"
                src="https://m.media-amazon.com/images/S/stores-image-uploads-na-prod/6/AmazonStores/ATVPDKIKX0DER/ce14c83b4899156724d9bf76b796af3c.w2400.h2400._CR0%2C0%2C2400%2C2400_SX375_SY375_.jpg"
                width="326"
                height="326"
                alt=""
              ></img>
              <p className="shop_now_text">Shop Now</p>
              {/* </a> */}
            </div>
          </div>
          <div className="b_box_left">
            <span className="b_box_title_text">

            <h3>Spring Styles</h3>
              </span>
            <div className="a_box_left_content">
              {/* <a href='/products/fashion'> */}
              <img
                className="a_box_img"
                src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/BROWSE/CAROUSELS/SUB-HERO/mob/Fresh_kicks._CB620863518_.jpg"
                width="326"
                height="326"
                alt=""
              ></img>
              <p className="shop_now_text">Shop Now</p>
              {/* </a> */}
            </div>
          </div>
        </div>
      <div id='mid_banner_bottom'>
          <img className="mid_banner_image" src="https://images-na.ssl-images-amazon.com/images/G/01/omaha/images/merch/2020/WFM/Monthly/December/UFG/LandingPageHero/02151046_1_1500x300_R2.jpg" width='1500' alt='main_img' />
        </div>
      </div>
    </div>
  )

}

export default Main;
