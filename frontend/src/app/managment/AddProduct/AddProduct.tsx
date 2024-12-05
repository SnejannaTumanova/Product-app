import { useState } from 'react';
import styles from './AddProduct.module.css';

const AddProduct = ({ onAdd }: { onAdd: () => void }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [sku, setSku] = useState('');
  const [photo, setPhoto] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newProduct = { name, price, description, sku, photo };

    const response = await fetch('http://localhost:3000/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    });

    if (response.ok) {
      onAdd();
      setName('');
      setPrice('');
      setDescription('');
      setSku('');
      setPhoto('');
    } else {
      console.error('Error adding product');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Product name"
        required
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <input
        type="text"
        value={sku}
        onChange={(e) => setSku(e.target.value)}
        placeholder="SKU"
        required
      />
      <input
        type="text"
        value={photo}
        onChange={(e) => setPhoto(e.target.value)}
        placeholder="Photo URL"
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProduct;
