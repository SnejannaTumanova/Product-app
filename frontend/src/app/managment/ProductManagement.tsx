import { useState, useEffect } from 'react';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';
import ProductList from './ProductList';
import { Product } from '@/types';

const ProductManagement = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [editingProductId, setEditingProductId] = useState<number | null>(null);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:3000/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Failed to fetch products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id: number) => {
    await fetch(`http://localhost:3000/products/${id}`, {
      method: 'DELETE',
    });
    fetchProducts();
  };

  const handleAdd = () => {
    fetchProducts();
  };

  const handleEdit = () => {
    fetchProducts();
    setEditingProductId(null);
  };

  const handleEditStart = (id: number) => {
    setEditingProductId(id);
  };

  return (
    <div>
      <AddProduct onAdd={handleAdd} />
      {editingProductId && (
        <EditProduct productId={editingProductId} onEdit={handleEdit} />
      )}
      <ProductList
        products={products}
        onDelete={handleDelete}
        onEdit={handleEditStart}
      />
    </div>
  );
};

export default ProductManagement;
