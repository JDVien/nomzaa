import { get_all_products } from "../../store/product";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => Object.values(state.products));
  useEffect(() => {
    dispatch(get_all_products());
  }, [dispatch]);

  return (
    <div>
      <h1>Amazon Devices</h1>
      {products?.map((product) => (
        <div key={product?.id}>
          <div className="product_item_row_container">
            <div className="s_product_img_container">
              <img
                className=""
                src={product?.img}
                width="213"
                height="218"
                alt=""
              ></img>
            </div>
            <div className="product_item_detail_row_sub_container">
              <a href={`/products/${product?.id}`}>
                <h2>{product?.title}</h2>
              </a>
              <p>{product?.brand}</p>
              <p>${product?.price}</p>
              {/* <p>{product?.description}</p> */}
              {/* <p>{product?.details}</p> */}
              {/* <p>{product?.stock}</p> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
