import{S as d,A as m}from"./assets/vendor-04e4c901.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const s={mobileMenu:document.querySelector(".js-mobile-menu"),openMenuBtn:document.querySelector(".js-open-menu"),closeMenuBtn:document.querySelector(".js-close-menu"),backdrop:document.querySelector(".js-backdrop-menu")},u=()=>{const r=s.openMenuBtn.getAttribute("aria-expanded")==="true"||!1;s.mobileMenu.classList.toggle("is-open"),s.mobileMenu.setAttribute("aria-hidden",r),s.openMenuBtn.setAttribute("aria-expanded",!r),s.backdrop.classList.toggle("is-visible"),r?document.body.style.overflow="":document.body.style.overflow="hidden"};s.openMenuBtn.addEventListener("click",u);s.closeMenuBtn.addEventListener("click",u);s.backdrop.addEventListener("click",u);document.addEventListener("DOMContentLoaded",()=>{const r=document.querySelectorAll(".nav-menu-item a");function i(){r.forEach(o=>{o.classList.remove("active")});const n=Array.from(r).find(o=>o.getAttribute("href")===window.location.hash);n&&n.classList.add("active")}window.addEventListener("hashchange",i),i()});document.addEventListener("DOMContentLoaded",function(){new d(".swiper",{modules:[m],loop:!0,spaceBetween:32,slidesPerView:1,grabCursor:!0,autoplay:{delay:3e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2},1280:{slidesPerView:3}}})});const a=document.querySelector(".contact-form");a.addEventListener("submit",r=>{r.preventDefault();const i=new FormData(a),n=Object.fromEntries(i);console.log(n);const o=document.querySelector(".notification"),e=document.querySelector(".notification-title"),t=document.querySelector(".notification-main");o.classList.remove("hidden");const c=`Dear ${n["user-name"]}!`,l=`We are happy that you chose <strong>${n.teacher}</strong> at English Excellence. We will inform you via your email <strong>${n["user-email"]}</strong> or your phone <strong>${n["user-phone"]}</strong>. Your comment: <strong>"${n["user-comment"]}"</strong> has been received.`;e.textContent=c,t.innerHTML=l,o.classList.add("animate-notification"),setTimeout(()=>{o.classList.add("hidden"),o.classList.remove("animate-notification")},5e3),a.reset()});
//# sourceMappingURL=commonHelpers.js.map