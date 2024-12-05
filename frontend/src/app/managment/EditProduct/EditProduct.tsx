import { useEffect, useState } from 'react';
import styles from './EditProduct.module.css';

const EditProduct = ({
  productId,
  onEdit,
}: {
  productId: number;
  onEdit: () => void;
}) => {
  const [product, setProduct] = useState<any>(null);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [sku, setSku] = useState('');
  const [photo, setPhoto] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(
        `http://localhost:3000/products/${productId}`
      );
      const data = await response.json();
      setProduct(data);
      setName(data.name || '');
      setPrice(data.price || '');
      setDescription(data.description || '');
      setSku(data.sku || '');
      setPhoto(data.photo || '');
    };
    fetchProduct();
  }, [productId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const updatedProduct = {
      name,
      price: parseFloat(price),
      description,
      sku,
      photo,
    };

    const response = await fetch(
      `http://localhost:3000/products/${productId}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProduct),
      }
    );

    if (response.ok) {
      onEdit();
    } else {
      console.error('Error editing product');
    }
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className={styles.edit}>
      <span>Changing the product - {name}</span>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
          />
        </label>
        <label>
          SKU:
          <input
            type="text"
            value={sku}
            onChange={(e) => setSku(e.target.value)}
            placeholder="SKU"
            required
          />
        </label>
        <label>
          Photo URL:
          <input
            type="text"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            placeholder="Photo URL"
          />
        </label>
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
};

export default EditProduct;
