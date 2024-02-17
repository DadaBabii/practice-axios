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
  
  try {
     const response = await apiInstance.post('/products/add', data);
  return response.data;
  } catch (error) {
    console.log(error);
  } 
  
};

export async function deleteProd(id) {
  
  try {
    const response = await apiInstance.delete(`/products/${id}`);
    console.log(response.data);
  return response.data;
  } catch (error) {
    console.log(error);
  } 
  
};


   
  


