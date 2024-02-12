import { createMarkupProduct } from './markupService';
import { getAllProducts } from '../requests/products';
import { refs } from './refs';

export async function renderAllProducts() {
  const data = await getAllProducts();
  const markup = data.products.map(createMarkupProduct).join('');
  refs.productsList.insertAdjacentHTML('beforeend', markup);
}
