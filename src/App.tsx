import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ProductList from './views/ProductList';
import AddProduct from './views/AddProduct';
import { ProductProvider } from './contexts/ProductContext';
import './App.css';

const App: React.FC = () => {
  return (
    <ProductProvider>
      <header className="app-header">
        <div className="logo">LORENZZO</div>
        <nav className="nav-links">
          <Link to="/">Productos</Link>
          <Link to="/add-product">Agregar Producto</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/add-product" element={<AddProduct />} />
        </Routes>
      </main>
    </ProductProvider>
  );
};

export default App;
