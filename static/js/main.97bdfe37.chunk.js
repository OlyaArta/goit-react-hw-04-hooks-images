(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{15:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__39pZ6",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__3mdGI"}},16:function(e,t,a){e.exports={Overlay:"Modal_Overlay__FwAU3",Modal:"Modal_Modal__33UfI"}},28:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__3k1mJ"}},30:function(e,t,a){e.exports={Button:"Button_Button__2paGf"}},35:function(e,t,a){},37:function(e,t,a){},7:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__36kdR",SearchForm:"Searchbar_SearchForm__3owqr",SearchFormButton:"Searchbar_SearchFormButton__1hwo0",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__1G_YF",SearchFormInput:"Searchbar_SearchFormInput__1vm67"}},78:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(5),o=a.n(c),i=(a(35),a(6)),s=a.n(i),u=a(17),l=a(13),m=a(4),b=a(9),j=(a(18),a(37),a(7)),h=a.n(j),f=a(1);function p(e){var t=e.onSubmit,a=Object(r.useState)(""),n=Object(m.a)(a,2),c=n[0],o=n[1];return Object(f.jsx)("header",{className:h.a.Searchbar,children:Object(f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==c.trim()?(t(c),o("")):Object(b.b)("Empty input!")},className:h.a.SearchForm,children:[Object(f.jsx)("button",{type:"submit",className:h.a.SearchFormButton,children:Object(f.jsx)("span",{className:h.a.SearchFormButtonLabel,children:"Search"})}),Object(f.jsx)("input",{className:h.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:c,onChange:function(e){o(e.currentTarget.value.toLowerCase())}})]})})}var g="https://pixabay.com/api",d="22999065-3fa49f66c111c7f1f9c9e2a79",O=a(27),v=a.n(O);function I(){return(I=Object(l.a)(s.a.mark((function e(t,a){var r,n,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(g,"/?q=").concat(t,"&page=").concat(a,"&key=").concat(d,"&image_type=photo&orientation=horizontal&per_page=12"),e.next=3,v.a.get(r);case 3:return n=e.sent,c=n.data,console.log(c),e.abrupt("return",c.hits);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var _=function(e,t){return I.apply(this,arguments)},x=a(15),S=a.n(x);function y(e){var t=e.webformatURL,a=e.largeImageURL,r=e.onClick;return Object(f.jsx)("li",{className:S.a.ImageGalleryItem,children:Object(f.jsx)("img",{src:t,alt:a,className:S.a.ImageGalleryItemImage,onClick:r})})}var w=a(28),k=a.n(w);var F=function(e){var t=e.img,a=e.clickImages;return Object(f.jsx)("ul",{className:k.a.ImageGallery,children:t.map((function(e){var t=e.id,r=e.webformatURL,n=e.largeImageURL;return Object(f.jsx)(y,{webformatURL:r,largeImageURL:n,onClick:a},t)}))})},G=a(16),C=a.n(G),L=document.querySelector("#modal-root");function B(e){var t=e.onClick,a=e.largeImage;Object(r.useEffect)((function(){return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}));var n=function(e){"Escape"===e.code&&t()};return Object(c.createPortal)(Object(f.jsx)("div",{className:C.a.Overlay,onClick:function(e){e.currentTarget===e.target&&t()},children:Object(f.jsx)("div",{className:C.a.Modal,children:Object(f.jsx)("img",{src:a,alt:""})})}),L)}var N=a(29),E=a.n(N);a(77);function U(){return Object(f.jsx)(E.a,{type:"TailSpin",color:"#00BFFF",height:80,width:80,timeout:3e3})}var M=a(30),R=a.n(M);function T(e){var t=e.onClick;return Object(f.jsx)("button",{type:"button",className:R.a.Button,onClick:t,children:"Load More"})}function q(){var e=Object(r.useState)(""),t=Object(m.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)([]),o=Object(m.a)(c,2),i=o[0],j=o[1],h=Object(r.useState)(1),g=Object(m.a)(h,2),d=g[0],O=g[1],v=Object(r.useState)(!1),I=Object(m.a)(v,2),x=I[0],S=I[1],y=Object(r.useState)(!1),w=Object(m.a)(y,2),k=w[0],G=w[1],C=Object(r.useState)(""),L=Object(m.a)(C,2),N=L[0],E=L[1];Object(r.useEffect)((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,G(!0),e.next=4,_(a,d);case 4:t=e.sent,j((function(e){return[].concat(Object(u.a)(e),Object(u.a)(t))})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),b.b.error(e.t0.message,{theme:"colored"});case 11:return e.prev=11,d>1&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),e.finish(11);case 14:G(!1);case 15:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})))).apply(this,arguments)}a&&function(){e.apply(this,arguments)}()}),[a,d]);var M=function(){n(""),O(1),j([]),S(!1)};return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(p,{onSubmit:function(e){M(),n(e)}}),i.length>0&&Object(f.jsx)(F,{img:i,clickImages:function(e){var t=e.currentTarget.alt;S(!0),E(t)}}),i.length>1&&Object(f.jsx)(T,{onClick:function(){O((function(e){return e+1}))}}),x&&Object(f.jsx)(B,{onClick:function(){S(!x)},largeImage:N}),k&&Object(f.jsx)(U,{}),Object(f.jsx)(b.a,{autoClose:2500})]})}o.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(q,{})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.97bdfe37.chunk.js.map