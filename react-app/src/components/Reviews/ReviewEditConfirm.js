import "./reviewform.css";
import ReviewBanner from "./ReviewBanner";

const ReviewConfirmation = () => {
  return (
    <>
      <ReviewBanner />
      <div className="confirmation_box_r">
        <div className="confirmation_main_actions_r">
          <h2 id="confirm_title">Review submitted, thanks</h2>
          <span>
            Processing can take a moment. You can view your review here:
          </span>
          <div className="confirmation_options_r">
            <a href="/">
              <span className="c_option_r">Continue</span>
            </a>
            <a href="/orders">
              <span className="c_option_r">View Your Orders</span>
            </a>
            <br />
          </div>
        </div>
      </div>
      <h1 id="confirm_title_bottom">Keep it up! Write another review.</h1>
    </>
  );
};

export default ReviewConfirmation;
