import{a as l,i,S as c}from"./assets/vendor-CZCqCKWq.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const a of e.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(t){if(t.ep)return;t.ep=!0;const e=n(t);fetch(t.href,e)}})();function p(s){return l("https://pixabay.com/api/",{params:{key:"49113920-f9af0cc3a936c3f1f6e808981",q:encodeURIComponent(s),image_type:"photo",orientation:"horizontal",safesearch:!0}})}function u(s){const r=s.data.hits,n=document.querySelector(".gallery");if(r.length===0){i.show({messageColor:"#FAFAFB",messageSize:"16px",backgroundColor:"#EF4040",iconUrl:errorIcon,transitionIn:"bounceInLeft",position:"topRight",displayMode:"replace",closeOnClick:!0,message:"Sorry, there are no images matching your search query. Please, try again!"}),n.innerHTML="";return}const o=r.map(e=>`<li class='gallery-item'>
                    <a class='gallery-link' href="${e.largeImageURL}">
                        <img class='gallery-img' src="${e.webformatURL}" alt="${e.tags}" />
                        <div class="grid">
                            <p>Likes</p>
                            <p>Views</p>
                            <p>Comment</p>
                            <p>Downloads</p>
                            <span>${e.likes}</span>
                            <span>${e.views}</span>
                            <span>${e.comments}</span>
                            <span>${e.downloads}</span>
                        </div>
                    </a>
                </li>`).join(" ");n.innerHTML=o,new c(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const d=document.querySelector(".form");d.addEventListener("submit",f);function f(s){s.preventDefault();const r=document.querySelector(".user-input").value.trim(),n=document.querySelector(".gallery");r!==""&&(n.innerHTML='<p>Loading images, please wait...</p><span class="loader"></span>',p(r).then(o=>u(o)).catch(o=>{i.show({messageColor:"#FAFAFB",messageSize:"16px",backgroundColor:"#EF4040",iconUrl:errorIcon,transitionIn:"bounceInLeft",position:"topRight",displayMode:"replace",closeOnClick:!0,message:"Something went wrong. Please, try again."}),n.innerHTML="",console.log(o)}))}
//# sourceMappingURL=index.js.map
