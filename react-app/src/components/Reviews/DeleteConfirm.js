// import { useEffect, useState } from "react";
import '../Orders/orders.css';

const DeleteConfirmation = () => {

  return (
    <>
      <div className='confirmation_box'>
        <div className='confirmation_main_actions'>
        <span>You have successfully deleted your review</span>
        <div className='confirmation_options'>
        <a href='/'>
          <span className='c_option'>Continue Shopping</span>
        </a>
        <a href='/orders'>
          <span className='c_option'>View Your Orders</span>
        </a><br/>
        </div>
        </div>
      </div>
    </>
  )
}

export default DeleteConfirmation;
