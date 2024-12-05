import { Product } from '@/types';

const ProductDetail = ({ product }: { product: Product }) => {
  return (
    <div>
      <h1>{product.name}</h1>
      <img
        src={
          product.photo
            ? `${process.env.NEXT_PUBLIC_API_URL}/uploads/${product.photo}`
            : '/placeholder.png'
        }
        alt={product.name}
      />
      <p>
        <strong>Price:</strong> ${product.price}
      </p>
      <p>
        <strong>SKU:</strong> {product.sku}
      </p>
      <p>
        <strong>Description:</strong> {product.description}
      </p>
    </div>
  );
};

export default ProductDetail;
