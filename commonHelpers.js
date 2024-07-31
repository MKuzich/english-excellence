import{S as m,A as f,a as p}from"./assets/vendor-e6517e64.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const c={mobileMenu:document.querySelector(".js-mobile-menu"),openMenuBtn:document.querySelector(".js-open-menu"),closeMenuBtn:document.querySelector(".js-close-menu"),backdrop:document.querySelector(".js-backdrop-menu")},l=()=>{const t=c.openMenuBtn.getAttribute("aria-expanded")==="true"||!1;c.mobileMenu.classList.toggle("is-open"),c.mobileMenu.setAttribute("aria-hidden",t),c.openMenuBtn.setAttribute("aria-expanded",!t),c.backdrop.classList.toggle("is-visible"),t?document.body.style.overflow="":document.body.style.overflow="hidden"};c.openMenuBtn.addEventListener("click",l);c.closeMenuBtn.addEventListener("click",l);c.backdrop.addEventListener("click",l);document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelectorAll(".nav-menu-item a");function o(){t.forEach(s=>{s.classList.remove("active")});const n=Array.from(t).find(s=>s.getAttribute("href")===window.location.hash);n&&n.classList.add("active")}window.addEventListener("hashchange",o),o()});document.addEventListener("DOMContentLoaded",function(){new m(".swiper",{modules:[f],loop:!0,spaceBetween:32,slidesPerView:1,grabCursor:!0,autoplay:{delay:3e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2},1280:{slidesPerView:3}}})});let h={threshold:1};const y=(t,o)=>{t.forEach(n=>{n.isIntersecting?n.target.classList.add("start"):n.target.classList.remove("start")})};let g=new IntersectionObserver(y,h);const u=document.querySelector(".usp-wrapper");u&&g.observe(u);const d=document.querySelector(".contact-form");d.addEventListener("submit",t=>{t.preventDefault();const o=new FormData(d),n=Object.fromEntries(o);console.log(n);const s=document.querySelector(".notification"),e=document.querySelector(".notification-title"),r=document.querySelector(".notification-main");s.classList.remove("hidden");const i=`Dear ${n["user-name"]}!`,a=`We are happy that you chose <strong>${n.teacher}</strong> at English Excellence. We will inform you via your email <strong>${n["user-email"]}</strong> or your phone <strong>${n["user-phone"]}</strong>. Your comment: <strong>"${n["user-comment"]}"</strong> has been received.`;e.textContent=i,r.innerHTML=a,s.classList.add("animate-notification"),setTimeout(()=>{s.classList.add("hidden"),s.classList.remove("animate-notification")},5e3),d.reset()});document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector(".header").offsetHeight;document.documentElement.style.setProperty("--header-height",`${o}px`),document.querySelectorAll(".section").forEach(s=>{s.style.paddingTop=`${o}px`})});function b(t,o,n,s){let e=null;const r=i=>{e||(e=i);const a=Math.min((i-e)/s,1);t.textContent=Math.floor(a*(n-o)+o),a<1&&window.requestAnimationFrame(r)};window.requestAnimationFrame(r)}function v(t){const o=document.querySelector(t);if(!o)return;new IntersectionObserver((s,e)=>{s.forEach(r=>{r.isIntersecting&&(b(o,0,parseInt(o.textContent,10),5e3),e.disconnect())})},{threshold:.1}).observe(o)}document.addEventListener("DOMContentLoaded",()=>{v(".contact-promo-title")});document.addEventListener("scroll",function(){const t=document.querySelector(".hero-link-circle");window.scrollY===0?(t.style.transform="rotate(0deg)",t.href="#footer-section"):(t.style.transform="rotate(180deg)",t.href="#hero-section")});p.init();
//# sourceMappingURL=commonHelpers.js.map
