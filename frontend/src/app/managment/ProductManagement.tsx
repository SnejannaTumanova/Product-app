import { useState, useEffect } from 'react';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';
import ProductList from './ProductList';
import { Product } from '@/types';

const ProductManagement = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [editingProductId, setEditingProductId] = useState<number | null>(null);
  const [showProductDetail, setShowProductDetail] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:3000/products');
      const responseData = await response.json();
      setProducts(responseData.data);
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

  const openProductDetail = (product: Product) => {
    setSelectedProduct(product);
    setShowProductDetail(true);
  };

  const closeProductDetail = () => {
    setShowProductDetail(false);
    setSelectedProduct(null);
  };

  return (
    <div>
      {showProductDetail ? (
        <div>
          <button onClick={closeProductDetail}>Back</button>
          {selectedProduct && (
            <ProductList
              products={[]}
              onDelete={handleDelete}
              onEdit={handleEditStart}
              openProductDetail={openProductDetail}
              showProductDetail={showProductDetail}
              selectedProduct={selectedProduct}
            />
          )}
        </div>
      ) : (
        <>
          <AddProduct onAdd={handleAdd} />
          {editingProductId && (
            <EditProduct productId={editingProductId} onEdit={handleEdit} />
          )}
          <ProductList
            products={products}
            onDelete={handleDelete}
            onEdit={handleEditStart}
            openProductDetail={openProductDetail}
            showProductDetail={showProductDetail}
            selectedProduct={selectedProduct}
          />
        </>
      )}
    </div>
  );
};

export default ProductManagement;
