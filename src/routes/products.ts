import express from "express";
import * as productsServices from '../services/productsServices';

const router = express.Router();

router.get('/', (_req, res) => {
    const products = productsServices.getProducts(); 
    res.json(products); 
});

router.post('/', (req, res) => {
    const newProductData = req.body; 
    newProductData.discount = newProductData.discount === 'true';
    const products = productsServices.getProducts();
    
    products.push(newProductData)

    productsServices.saveProducts(products);
  
    res.json({ message: 'Producto guardado con éxito' });
    
});

router.get('/:id', (req, res) => {
    const productId = req.params.id;
    const products = productsServices.getProducts();
    const productIdNumber = parseInt(productId, 10);
    const productIndex = products.findIndex(product => product.id === productIdNumber);
  
    if (productIndex !== -1) {
      products.splice(productIndex, 1);
      productsServices.deleteProducts(products);
      res.json({ message: 'Producto eliminado con éxito' });
    }
});

router.put('/:id', (req, res) => {
    const productId = req.params.id;
    const updatedProductData = req.body; 
    const productIdNumber = parseInt(productId, 10);
  
    const products = productsServices.getProducts();
  
    const productIndex = products.findIndex(product => product.id === productIdNumber);
  
    if (productIndex !== -1) {

        updatedProductData.discount = updatedProductData.discount === 'true';
      // Actualiza el producto con los nuevos datos
      products[productIndex] = {
        ...products[productIndex], // Mantén los datos anteriores
        ...updatedProductData,   // Reemplaza con los nuevos datos
      };
  
      productsServices.saveProducts(products);
  
      res.json({ message: 'Producto actualizado con éxito' });
    } else {
      res.status(404).json({ message: 'Producto no encontrado' });
    }
  });

export default router;
