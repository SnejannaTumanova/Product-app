import { Product } from '@/types';
import ProductDetail from '../product/[id]/page';

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
    <div>
      {showProductDetail && selectedProduct ? (
        <ProductDetail product={selectedProduct} />
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>SKU</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(products) &&
              products.map((product) => (
                <tr key={product.id}>
                  <td onClick={() => openProductDetail(product)}>
                    {product.name}
                  </td>
                  <td>{product.price}</td>
                  <td>{product.sku}</td>
                  <td>
                    <button onClick={() => onEdit(product.id)}>Edit</button>
                    <button onClick={() => onDelete(product.id)}>Delete</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProductList;
