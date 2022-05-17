import '../Products/ppd.css'

const AddToCart = ({ product, handleAddToCart}) => {
  return (
    <div id="add-cart-content">
      <div id="add-cart-item-action-div">
        <div id="add-cart-bttn">
          <button id="bttn-cartadd" type="button" onClick={handleAddToCart}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
