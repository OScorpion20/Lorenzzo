# LORENZZO

Este proyecto es una aplicación web para la gestión y visualización de productos de una tienda de ropa. Utiliza React para el frontend y Node.js con Express y MongoDB para el backend.

## Descripción del Proyecto

La aplicación permite agregar, listar y ver detalles de productos. Los productos incluyen información como nombre, descripción, precio, stock, y una imagen.

### Estructura del Proyecto

- **frontend**: Contiene la aplicación React.
- **backend**: Contiene el servidor Express y la conexión a MongoDB.

### Uso del Proyecto

- **Página Principal**: Muestra una lista de productos.
- **Agregar Producto**: Formulario para agregar un nuevo producto.
- **Detalles del Producto**: Muestra detalles individuales de un producto seleccionado.

## Instrucciones de Instalación y Ejecución

### Requisitos Previos

- Node.js
- MongoDB

### Configuración del Backend

1. Clona el repositorio:
   ```bash
   git clone https://github.com/username/tienda-ropa.git
   cd tienda-ropa
   
### Instala las dependencias del frontend e inicia la aplicación:

   bash
   cd ../frontend
   npm install
   npm start

### Probar la Aplicación
Abre tu navegador web y navega a http://localhost:3000.

## Prototipos de la Vista y Cómo Utilizarlas
Página Principal
Muestra una lista de productos disponibles en la tienda.
Cada producto incluye su nombre, descripción, precio, stock y una imagen.
Agregar Producto
Formulario para agregar un nuevo producto a la tienda.
Campos requeridos: Nombre, Descripción, Precio, Stock, URL de la Imagen.
Al enviar el formulario, el producto se añade a la base de datos y se muestra en la página principal.
Detalles del Producto
Muestra detalles completos de un producto seleccionado.
Información mostrada: Nombre, Descripción, Precio, Stock, Imagen y Precio Antiguo (si aplica).

## Configuración de componentes

| Nombre del Componente | Descripción | Enlace |
|-----------------------|-------------|--------|
| ProductList           | Muestra la lista de productos con detalles como nombre, descripción, precio y stock. | [ProductList.tsx](src/views/ProductList.tsx) |
| AddProduct            | Formulario para añadir nuevos productos a la tienda. | [AddProduct.tsx](src/views/AddProduct.tsx) |
| App                   | Configuración de las rutas y contexto de la aplicación. | [App.tsx](src/App.tsx) |
| ProductContext        | Maneja el estado global de los productos utilizando Context API. | [ProductContext.tsx](src/contexts/ProductContext.tsx) |
| index.css             | Estilos globales de la aplicación. | [index.css](src/index.css) |
| index.js              | Configuración principal del servidor y conexión a MongoDB. | [index.js](src/index.js) |


## Ejemplos de Código
# Backend - Rutas de Productos
```bash
const express = require('express');
const router = express.Router();
const Product = require('../models/product.model');

router.route('/').get((req, res) => {
  Product.find()
    .then(products => res.json(products))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const { name, description, price, stock, imgUrl, oldPrice } = req.body;
  const newProduct = new Product({ name, description, price, stock, imgUrl, oldPrice });

  newProduct.save()
    .then(() => res.json('Product added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
# Frontend - ProductList Component

import React from 'react';
import { useProductContext } from '../contexts/ProductContext';

const ProductList: React.FC = () => {
  const { products } = useProductContext();

  return (
    <div className="product-list">
      <header>
        <h1>LORENZZO como estilo de vida</h1>
        <p>Las mejores marcas y atención para nuestros clientes en México</p>
      </header>
      <section className="new-products">
        <h2>Nuevos productos</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <img src={product.imgUrl} alt={product.name} />
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
