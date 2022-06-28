import { useSelector } from "react-redux";

const ReviewBanner = ({ user }) => {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <div className="user_top_banner">
      <img
        id="profile_img_rev_banner"
        src="/static/images/default._CR0,0,1024,1024_SX48_.jpg"
        width="34"
        height="34"
        alt=""
      ></img>
      <p id="rev_prof_name">{sessionUser?.fullname}</p>
    </div>
  );
};

export default ReviewBanner;
