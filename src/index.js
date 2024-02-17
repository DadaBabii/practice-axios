import './styles/normalize.css';
import './styles/index.css';
// import axios from "axios";

// import apiInstance from './api';
import { renderAllProducts } from './services/renderMarcup';
import { refs } from './services/refs';
import { getProductById } from './requests/products';
import { getAllProducts } from './requests/products';
import { createMarkupProductById } from './services/markupService';
// renderAllProducts();

// ЗАВДАННЯ 1======================================================

refs.getAllProdBtn.addEventListener('click', onclickAllProdacts);

function onclickAllProdacts(e) {
  e.preventDefault();
  getAllProducts();
  renderAllProducts();
};

// ЗАВДАННЯ 2 =======================================

refs.singleProductForm.addEventListener('submit', onFormIdSubmit);

async function onFormIdSubmit(e) {
  e.preventDefault();
  const id = e.target.elements.id.value.trim();
  try {
    const product = await getProductById(id);
    const markup = createMarkupProductById(product);
    refs.singleProduct.innerHTML = markup;
  } catch (error) {
    console.log(error.message);
  }
    e.target.reset();
}

// ЗАВДАННЯ 3 ==============================================

import {createNewProduct} from './services/markupService';
import { postProd } from './requests/products';
refs.createProdForm.addEventListener('submit', onCreateElSubmit);

async function onCreateElSubmit(e) {
  e.preventDefault();
    
  const data = {
    title: e.target.elements.title.value.trim(),
    description: e.target.elements.description.value.trim(),
    price: e.target.elements.price.value.trim(),
  };
try {
  const newProdElem = await postProd(data);
  const markup = createNewProduct(newProdElem);
  refs.creatingProduct.insertAdjacentHTML('afterbegin', markup);
} catch (error) {
  console.log(error);
  }
  
  e.target.reset();

};

// ЗАВДАННЯ 4 ==============================================
import { deleteProd } from './requests/products';
refs.deletionProductForm.addEventListener('submit', onElDeleteById);

async function onElDeleteById(e) {
  e.preventDefault();
  const id = e.target.elements.deletionId.value.trim();
  // console.log(response.data);
  await deleteProd(id);
  const previousUser = document.querySelector(`[data-id="${id}"]`);
  
  previousUser.remove();
  e.target.reset();

};