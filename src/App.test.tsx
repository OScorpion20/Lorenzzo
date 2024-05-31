import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ProductProvider } from './contexts/ProductContext';
import App from './App';

test('renders navigation links', () => {
  render(
    <ProductProvider>
      <Router>
        <App />
      </Router>
    </ProductProvider>
  );

  const productosLink = screen.getByText(/Productos/i);
  const agregarProductoLink = screen.getByText(/Agregar Producto/i);
  expect(productosLink).toBeInTheDocument();
  expect(agregarProductoLink).toBeInTheDocument();
});

test('renders product list page by default', () => {
  render(
    <ProductProvider>
      <Router>
        <App />
      </Router>
    </ProductProvider>
  );

  const productListHeader = screen.getByText(/LORENZZO como estilo de vida/i);
  expect(productListHeader).toBeInTheDocument();
});
