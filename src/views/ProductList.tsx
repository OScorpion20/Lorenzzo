import React from 'react';
import { useProductContext } from '../contexts/ProductContext';
import './ProductList.css';

const ProductList: React.FC = () => {
  const { products } = useProductContext();

  return (
    <div className="product-list">
      <header className="product-list-header">
        <h1>LORENZZO como estilo de vida</h1>
        <p>Las mejores marcas y atención para nuestros clientes en México</p>
      </header>
      <section className="new-products">
        <h2>Nuevos productos</h2>
        <ul className="product-grid">
          {products.map((product) => (
            <li key={product.id} className="product-item">
              <img src={product.imgUrl} alt={product.name} className="product-img" />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Precio: ${product.price}</p>
              <p>Stock: {product.stock}</p>
              {product.oldPrice && <p>Precio Antiguo: ${product.oldPrice}</p>}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ProductList;
