import { Product } from '@/types';
import ProductDetail from '../../product/[id]/page';
import styles from './ProductList.module.css';

const ProductList = ({
  products,
  onDelete,
  onEdit,
  openProductDetail,
  showProductDetail,
  selectedProduct,
}: {
  products: Product[];
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
  openProductDetail: (product: Product) => void;
  showProductDetail: boolean;
  selectedProduct: Product | null;
}) => {
  return (
    <div className={styles.list}>
      {showProductDetail && selectedProduct ? (
        <ProductDetail product={selectedProduct} />
      ) : (
        <div className={styles.table}>
          <div className={styles.rowHead}>
            <span>Name</span>
            <span>Price</span>
            <span>SKU</span>
            <span>Actions</span>
          </div>
          <div className={styles.column}>
            {Array.isArray(products) &&
              products.map((product) => (
                <div key={product.id} className={styles.row}>
                  <span
                    onClick={() => openProductDetail(product)}
                    className={styles.linkProduct}
                    title="To go to the product page - click"
                  >
                    {product.name}
                  </span>
                  <span>{product.price}</span>
                  <span>{product.sku}</span>
                  <span>
                    <button onClick={() => onEdit(product.id)}>Edit</button>
                    <button onClick={() => onDelete(product.id)}>Delete</button>
                  </span>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
