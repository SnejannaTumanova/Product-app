import { Product } from '@/types';
import styles from './page.module.css';

const ProductDetail = ({ product }: { product: Product }) => {
  return (
    <div className={styles.product}>
      <h1 className={styles.name}>{product.name}</h1>
      <img
        src={
          product.photo
            ? `${process.env.NEXT_PUBLIC_API_URL}/uploads/${product.photo}`
            : '/placeholder.png'
        }
        alt={product.name}
      />
      <p className={styles.price}>
        <strong>Price:</strong> ${product.price}
      </p>
      <p className={styles.sku}>
        <strong>SKU:</strong> {product.sku}
      </p>
      <p className={styles.description}>
        <strong>Description:</strong> {product.description}
      </p>
    </div>
  );
};

export default ProductDetail;
