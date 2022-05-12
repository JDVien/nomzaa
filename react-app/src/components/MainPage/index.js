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
        </div>
      </div>
      </div>
    </div>
  )

}

export default Main;
