import './index.css';
const ProductBanner = ({ type }) => {

  return (
    <>
    <div id="mid_banner">
      <img
        className="fpd_top_banner_dyna"
        src={`/static/images/nom_${type}_tb1.jpg`}
        width="1256"
        height="auto"
        alt="banner_img"
      />
  </div>
  </>
  )
}

export default ProductBanner;
