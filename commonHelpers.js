import{S as l,A as d}from"./assets/vendor-04e4c901.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",function(){new l(".swiper",{modules:[d],loop:!0,spaceBetween:32,autoplay:{delay:3e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2},1280:{slidesPerView:3}}})});document.querySelector(".js-open-btn");document.querySelector(".js-close-btn");const n={mobileMenu:document.querySelector(".js-mobile-menu"),openMenuBtn:document.querySelector(".js-open-menu"),closeMenuBtn:document.querySelector(".js-close-menu")},u=()=>{const o=n.openMenuBtn.getAttribute("aria-expanded")==="true"||!1;n.mobileMenu.classList.toggle("is-open"),n.mobileMenu.setAttribute("aria-hidden",o),n.openMenuBtn.setAttribute("aria-expanded",!o)};console.log(n);n.openMenuBtn.addEventListener("click",u);n.closeMenuBtn.addEventListener("click",u);
//# sourceMappingURL=commonHelpers.js.map
