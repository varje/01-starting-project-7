import { Link, useParams } from 'react-router-dom';

function ProductDetailPage() {
  const paramas = useParams();
  return (
    <>
      <h1>Product Details</h1>
      <p>{paramas.productId}</p>
      <p><Link to=".." relative='path'>Back</Link></p>
    </>
  );
}

export default ProductDetailPage;
