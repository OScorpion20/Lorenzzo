// src/views/AddProduct.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AddProduct from './AddProduct';
import { ProductProvider } from '../contexts/ProductContext';

test('renders AddProduct form', () => {
  render(
    <ProductProvider>
      <AddProduct />
    </ProductProvider>
  );

  const nameInput = screen.getByLabelText(/Nombre/i);
  const priceInput = screen.getByLabelText(/Precio/i);
  const stockInput = screen.getByLabelText(/Stock/i);
  const submitButton = screen.getByRole('button', { name: /Agregar Producto/i });

  expect(nameInput).toBeInTheDocument();
  expect(priceInput).toBeInTheDocument();
  expect(stockInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

test('allows to submit the form', () => {
  render(
    <ProductProvider>
      <AddProduct />
    </ProductProvider>
  );

  const nameInput = screen.getByLabelText(/Nombre/i);
  const priceInput = screen.getByLabelText(/Precio/i);
  const stockInput = screen.getByLabelText(/Stock/i);
  const submitButton = screen.getByRole('button', { name: /Agregar Producto/i });

  fireEvent.change(nameInput, { target: { value: 'Nuevo Producto' } });
  fireEvent.change(priceInput, { target: { value: '100' } });
  fireEvent.change(stockInput, { target: { value: '10' } });

  fireEvent.click(submitButton);

  // Aquí puedes agregar más expectativas para verificar el comportamiento después de enviar el formulario
});
