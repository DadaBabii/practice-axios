import{a}from"./assets/vendor-a2e8d7fa.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();function d({id:t,title:r,thumbnail:n,price:c}){return` <li class="item">
  <div class ="thumb">
  <h1> ${t} </h1>
        <img class="item-img" src="${n}" alt="picture" />
        <p class="item-title">Tittle: ${r}</p>
        <p class="item-price">Price: ${c}</p>
      </li>
      </div>`}function m({id:t,title:r,thumbnail:n,price:c}){return`
 
  <div class="item thumb">
  <h1> ${t} </h1>
    <img class="item-img" src="${n}" alt="picture" />
        <p class="item-title">${r}</p>
        <p class="item-price">${c}</p>
      </div>`}const l=a.create({baseURL:"https://dummyjson.com"});async function u(){const t=await l.get("/products?limit=15");return console.log(t.data),t.data}async function p(t){return(await l.get(`/products/${t}`)).data}const s={productsList:document.querySelector("#allProducts"),getAllProdBtn:document.querySelector(".download-btn"),singleProductForm:document.querySelector("#singleProductForm"),singleProduct:document.querySelector("#singleProduct")};async function f(){const r=(await u()).products.map(d).join("");s.productsList.insertAdjacentHTML("beforeend",r)}s.getAllProdBtn.addEventListener("click",g);function g(t){t.preventDefault(),u(),f()}s.singleProductForm.addEventListener("submit",y);async function y(t){t.preventDefault();const r=t.target.elements.id.value.trim();try{const n=await p(r),c=m(n);s.singleProduct.innerHTML=c}catch(n){console.log(n.message)}t.target.reset}
//# sourceMappingURL=commonHelpers.js.map
