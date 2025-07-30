import { useParams } from 'react-router-dom';

function ProductDetailPage() {
  const paramas = useParams();
  return (
    <>
      <h1>Product Details</h1>
      <p>{paramas.productId}</p>
    </>
  );
}

export default ProductDetailPage;
