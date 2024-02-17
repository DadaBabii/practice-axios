import apiInstance from './api';

export async function getAllProducts() {
  const result = await apiInstance.get('/products?limit=15');
  console.log(result.data);
  return result.data;
};

export async function getProductById(id) {
  const result = await apiInstance.get(`/products/${id}`);
  return result.data;
};

export async function postProd(data) {
  const response = await apiInstance.post('/products/add', data);
  return response.data; 
}



   
  


