// import { useEffect, useState } from "react";
import './reviewform.css';
// import { useSelector } from "react-redux";
// import { Link, useLocation } from "react-router-dom";
import ReviewBanner from './ReviewBanner';

const ReviewConfirmation = () => {
  // const location = useLocation();
  // const { fromReviewCreate } = location?.state;
  // const product = useSelector((state) => state.products[fromReviewCreate?.id]);
  // const product = fromReviewCreate;
  return (
    <>
      <ReviewBanner />
      <div className='confirmation_box_r'>
        <div className='confirmation_main_actions_r'>
        <h2 id='confirm_title'>Review submitted, thanks</h2>
        <span>Processing can take a moment. You can view your review here:</span>
        <div className='confirmation_options_r'>
        {/* <Link className="rev_confirm_link" to={{
              pathname: `/products/${product?.category}/${product?.id}`,
              state: { fromReviewConfirm : product}
          }}
         > */}
         <a href='/'>
          <span className='c_option_r'>Continue</span>
          </a>
        {/* </Link> */}
        <a href='/orders'>
          <span className='c_option_r'>View Your Orders</span>
        </a><br/>
        </div>
        </div>
      </div>
        <h1 id='confirm_title_bottom'>Keep it up! Write another review.</h1>
    </>
  )
}

export default ReviewConfirmation;
