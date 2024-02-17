export function createMarkupProduct({ id, title, thumbnail, price }) {
  return ` <li class="item">
  <div class ="thumb">
  <h1> ${id} </h1>
        <img class="item-img" src="${thumbnail}" alt="picture" />
        <p class="item-title">Tittle: ${title}</p>
        <p class="item-price">Price: ${price}</p>
      </li>
      </div>`;
};

export function createNewProduct({id, description, title, price }) {
  return ` <li class="item">
  <div class ="thumb">
  <h1> ${id} </h1>
        <p class="item-desc"> Description: ${description}</p>
        <p class="item-title">Tittle: ${title}</p>
        <p class="item-price">Price: ${price}</p>
      </li>
      </div>`;
};


export function createMarkupProductById({ id, title, thumbnail, price }) {
  return `
 
  <div class="item thumb">
  <h1> ${id} </h1>
    <img class="item-img" src="${thumbnail}" alt="picture" />
        <p class="item-title">${title}</p>
        <p class="item-price">${price}</p>
      </div>`;
}
