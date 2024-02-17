import{a as d}from"./assets/vendor-a2e8d7fa.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();function u({id:e,title:t,thumbnail:r,price:c}){return` <li class="item" data-id="${e}">
  <div class ="thumb">
  <h1 > ${e} </h1>
        <img class="item-img" src="${r}" alt="picture" />
        <p class="item-title">Tittle: ${t}</p>
        <p class="item-price">Price: ${c}</p>
      </li>
      </div>`}function m({id:e,description:t,title:r,price:c}){return` <li class="item">
  <div class ="thumb">
  <h1> ${e} </h1>
        <p class="item-desc"> Description: ${t}</p>
        <p class="item-title">Tittle: ${r}</p>
        <p class="item-price">Price: ${c}</p>
      </li>
      </div>`}function p({id:e,title:t,thumbnail:r,price:c}){return`
 
  <div class="item thumb">
  <h1> ${e} </h1>
    <img class="item-img" src="${r}" alt="picture" />
        <p class="item-title">${t}</p>
        <p class="item-price">${c}</p>
      </div>`}const i=d.create({baseURL:"https://dummyjson.com"});async function l(){const e=await i.get("/products?limit=15");return console.log(e.data),e.data}async function f(e){return(await i.get(`/products/${e}`)).data}async function g(e){try{return(await i.post("/products/add",e)).data}catch(t){console.log(t)}}async function y(e){try{const t=await i.delete(`/products/${e}`);return console.log(t.data),t.data}catch(t){console.log(t)}}const s={productsList:document.querySelector("#allProducts"),getAllProdBtn:document.querySelector(".download-btn"),singleProductForm:document.querySelector("#singleProductForm"),singleProduct:document.querySelector("#singleProduct"),createProdForm:document.querySelector("#createNewProductForm"),creatingProduct:document.querySelector("#newProductSection"),deletionProductForm:document.querySelector("#deletionProductForm")};async function P(){const t=(await l()).products.map(u).join("");s.productsList.insertAdjacentHTML("beforeend",t)}s.getAllProdBtn.addEventListener("click",v);function v(e){e.preventDefault(),l(),P()}s.singleProductForm.addEventListener("submit",h);async function h(e){e.preventDefault();const t=e.target.elements.id.value.trim();try{const r=await f(t),c=p(r);s.singleProduct.innerHTML=c}catch(r){console.log(r.message)}e.target.reset()}s.createProdForm.addEventListener("submit",L);async function L(e){e.preventDefault();const t={title:e.target.elements.title.value.trim(),description:e.target.elements.description.value.trim(),price:e.target.elements.price.value.trim()};try{const r=await g(t),c=m(r);s.creatingProduct.insertAdjacentHTML("afterbegin",c)}catch(r){console.log(r)}e.target.reset()}s.deletionProductForm.addEventListener("submit",$);async function $(e){e.preventDefault();const t=e.target.elements.deletionId.value.trim();await y(t),document.querySelector(`[data-id="${t}"]`).remove(),e.target.reset()}
//# sourceMappingURL=commonHelpers.js.map
