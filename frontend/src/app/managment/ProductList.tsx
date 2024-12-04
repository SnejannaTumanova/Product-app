import Link from 'next/link'; // Импортируем Link для перехода по ссылке
import { Product } from '@/types';

const ProductList = ({
  products,
  onDelete,
  onEdit,
}: {
  products: Product[];
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}) => {
  return (
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
        {products.map((product) => (
          <tr key={product.id}>
            <td>
              <Link
                href={`${process.env.NEXT_PUBLIC_API_URL}/products/${product.id}`}
              >
                {product.name}
              </Link>
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
  );
};

export default ProductList;
