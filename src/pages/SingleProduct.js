import { Link, useParams } from "react-router-dom";
import products from "../data"

const SingleProduct = () => {
  const { productId } = useParams()
  const product = products.find(item => item.id === productId)
  return (
    <section className='section product'>
      <img src={product?.image} alt={product?.name} />
      <h5>{product?.name}</h5>
      <Link to="/products">Back to Products</Link>
    </section>
  );
};

export default SingleProduct;
