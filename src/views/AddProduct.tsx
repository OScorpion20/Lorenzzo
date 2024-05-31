import React, { useState } from 'react';
import { useProductContext } from '../contexts/ProductContext';
import './AddProduct.css';

const AddProduct: React.FC = () => {
  const { addProduct } = useProductContext();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState<number | undefined>(undefined);
  const [stock, setStock] = useState<number | undefined>(undefined);
  const [imgUrl, setImgUrl] = useState('');
  const [oldPrice, setOldPrice] = useState<number | undefined>(undefined);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const newProduct = {
      name,
      description,
      price: price ?? 0, // Asegura que sea un número
      stock: stock ?? 0, // Asegura que sea un número
      imgUrl,
      oldPrice: oldPrice ?? 0, // Asegura que sea un número
    };
    console.log('Submitting product:', newProduct); // Verifica los datos antes de enviarlos
    addProduct(newProduct);
  };

  return (
    <div className="add-product">
      <h2>Agregar Nuevo Producto</h2>
      <form onSubmit={submitHandler}>
        <label>
          Nombre:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Descripción:
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </label>
        <label>
          Precio:
          <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} required />
        </label>
        <label>
          Stock:
          <input type="number" value={stock} onChange={(e) => setStock(Number(e.target.value))} required />
        </label>
        <label>
          URL de la Imagen:
          <input type="text" value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} required />
        </label>
        <label>
          Precio Antiguo:
          <input type="number" value={oldPrice} onChange={(e) => setOldPrice(Number(e.target.value))} />
        </label>
        <button type="submit">Agregar Producto</button>
      </form>
    </div>
  );
};

export default AddProduct;
