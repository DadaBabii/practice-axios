import{a as u}from"./assets/vendor-a2e8d7fa.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();function d({id:t,title:e,thumbnail:r,price:c}){return` <li class="item">
  <div class ="thumb">
  <h1> ${t} </h1>
        <img class="item-img" src="${r}" alt="picture" />
        <p class="item-title">Tittle: ${e}</p>
        <p class="item-price">Price: ${c}</p>
      </li>
      </div>`}function m({id:t,description:e,title:r,price:c}){return` <li class="item">
  <div class ="thumb">
  <h1> ${t} </h1>
        <p class="item-desc"> Description: ${e}</p>
        <p class="item-title">Tittle: ${r}</p>
        <p class="item-price">Price: ${c}</p>
      </li>
      </div>`}function p({id:t,title:e,thumbnail:r,price:c}){return`
 
  <div class="item thumb">
  <h1> ${t} </h1>
    <img class="item-img" src="${r}" alt="picture" />
        <p class="item-title">${e}</p>
        <p class="item-price">${c}</p>
      </div>`}const a=u.create({baseURL:"https://dummyjson.com"});async function l(){const t=await a.get("/products?limit=15");return console.log(t.data),t.data}async function f(t){return(await a.get(`/products/${t}`)).data}async function g(t){return(await a.post("/products/add",t)).data}const i={productsList:document.querySelector("#allProducts"),getAllProdBtn:document.querySelector(".download-btn"),singleProductForm:document.querySelector("#singleProductForm"),singleProduct:document.querySelector("#singleProduct"),createProdForm:document.querySelector("#createNewProductForm"),creatingProduct:document.querySelector("#newProductSection")};async function P(){const e=(await l()).products.map(d).join("");i.productsList.insertAdjacentHTML("beforeend",e)}i.getAllProdBtn.addEventListener("click",y);function y(t){t.preventDefault(),l(),P()}i.singleProductForm.addEventListener("submit",h);async function h(t){t.preventDefault();const e=t.target.elements.id.value.trim();try{const r=await f(e),c=p(r);i.singleProduct.innerHTML=c}catch(r){console.log(r.message)}t.target.reset()}i.createProdForm.addEventListener("submit",v);async function v(t){t.preventDefault();const e={title:t.target.elements.title.value.trim(),description:t.target.elements.description.value.trim(),price:t.target.elements.price.value.trim()};try{const r=await g(e),c=m(r);i.creatingProduct.insertAdjacentHTML("afterbegin",c)}catch(r){console.log(r)}t.target.reset()}
//# sourceMappingURL=commonHelpers.js.map
