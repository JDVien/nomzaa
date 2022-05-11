import { get_all_products } from "../../store/product";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";

const Products = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => Object.values(state.products))
  useEffect(() => {
    dispatch(get_all_products())

  }, [dispatch])

  return (
    <div>
      {products?.map(product =>
        <div key={product?.id}>
          <h2>{product?.title}</h2>
          <p>{product?.brand}</p>
          <p>{product?.price}</p>
          <p>{product?.description}</p>
          <p>{product?.details}</p>
          <p>{product?.stock}</p>
          <img src={product?.img} alt=""></img>
        </div>
      )}
    </div>
  )
}

export default Products;
