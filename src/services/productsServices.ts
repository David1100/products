import productsData from './products.json'
import fs from 'fs';

export const getProducts = () => productsData

export const saveProducts = (datos: any[]) => {
    const jsonProducts = JSON.stringify(datos, null, 2);
  
    fs.writeFileSync('./src/services/products.json', jsonProducts);
}
export const deleteProducts = (datos: any[]) => {
    const jsonProducts = JSON.stringify(datos, null, 2);
  
    fs.writeFileSync('./src/services/products.json', jsonProducts);
}

