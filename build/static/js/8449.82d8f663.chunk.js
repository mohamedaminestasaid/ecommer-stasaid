"use strict";(self.webpackChunkStickerify_react=self.webpackChunkStickerify_react||[]).push([[8449],{6801:function(e,s,i){var n=i(3024),r=i(5475),c=i(579);s.A=function(e){var s=e.footerLogo,i=e.spaceBottomClass,a=e.colorClass;return(0,c.jsxs)("div",{className:(0,n.A)("copyright",i,a),children:[(0,c.jsx)("div",{className:"footer-logo",children:(0,c.jsx)(r.N_,{to:"/",children:(0,c.jsx)("img",{alt:"",src:""+s})})}),(0,c.jsxs)("p",{children:["\xa9 ",(new Date).getFullYear()," ",(0,c.jsx)("a",{href:"https://hasthemes.com",rel:"noopener noreferrer",target:"_blank",children:"Stickerify"}),".",(0,c.jsx)("br",{})," All Rights Reserved"]})]})}},2304:function(e,s,i){i.d(s,{A:function(){return t}});var n=i(3024),r=i(9735),c=i(579),a=function(e){var s,i=e.status,n=e.message,r=e.onValidated;return(0,c.jsxs)("div",{className:"subscribe-form",children:[(0,c.jsxs)("div",{className:"mc-form",children:[(0,c.jsx)("div",{children:(0,c.jsx)("input",{id:"mc-form-email",className:"email",ref:function(e){return s=e},type:"email",placeholder:"Enter your email address..."})}),(0,c.jsx)("div",{className:"clear",children:(0,c.jsx)("button",{className:"button",onClick:function(){s&&s.value.indexOf("@")>-1&&r({EMAIL:s.value}),document.getElementById("mc-form-email").value=""},children:"SUBSCRIBE"})})]}),"sending"===i&&(0,c.jsx)("div",{style:{color:"#3498db",fontSize:"12px"},children:"sending..."}),"error"===i&&(0,c.jsx)("div",{style:{color:"#e74c3c",fontSize:"12px"},dangerouslySetInnerHTML:{__html:n}}),"success"===i&&(0,c.jsx)("div",{style:{color:"#2ecc71",fontSize:"12px"},dangerouslySetInnerHTML:{__html:n}})]})},l=function(e){var s=e.mailchimpUrl;return(0,c.jsx)("div",{children:(0,c.jsx)(r.A,{url:s,render:function(e){var s=e.subscribe,i=e.status,n=e.message;return(0,c.jsx)(a,{status:i,message:n,onValidated:function(e){return s(e)}})}})})},t=function(e){var s=e.spaceBottomClass,i=e.spaceLeftClass,r=e.sideMenu,a=e.colorClass,t=e.widgetColorClass;return(0,c.jsxs)("div",{className:(0,n.A)("footer-widget",s,r?"ml-ntv5":i,t),children:[(0,c.jsx)("div",{className:"footer-title",children:(0,c.jsx)("h3",{children:"SUBSCRIBE"})}),(0,c.jsxs)("div",{className:(0,n.A)("subscribe-style",a),children:[(0,c.jsx)("p",{children:"Get E-mail updates about our latest shop and special offers."}),(0,c.jsx)(l,{mailchimpUrl:"//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef"})]})]})}},3188:function(e,s,i){var n=i(3024),r=i(5475),c=i(579);s.A=function(e){var s=e.imageUrl,i=e.logoClass;return(0,c.jsx)("div",{className:(0,n.A)(i),children:(0,c.jsx)(r.N_,{to:"/",children:(0,c.jsx)("img",{alt:"",src:""+s})})})}},3468:function(e,s,i){var n=i(9456),r=i(4117),c=i(1682),a=i(579);s.A=function(e){var s=e.currency,i=(0,r.Bd)().i18n,l=(0,n.wA)(),t=function(e){var s=e.target.value;i.changeLanguage(s)},o=function(e){var s=e.target.value;l((0,c.M)(s))};return(0,a.jsxs)("div",{className:"language-currency-wrap",children:[(0,a.jsxs)("div",{className:"same-language-currency language-style",children:[(0,a.jsxs)("span",{children:["en"===i.resolvedLanguage?"English":"fn"===i.resolvedLanguage?"French":"de"===i.resolvedLanguage?"Germany":""," ",(0,a.jsx)("i",{className:"fa fa-angle-down"})]}),(0,a.jsx)("div",{className:"lang-car-dropdown",children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)("button",{value:"en",onClick:function(e){return t(e)},children:"English"})}),(0,a.jsx)("li",{children:(0,a.jsx)("button",{value:"fn",onClick:function(e){return t(e)},children:"French"})}),(0,a.jsx)("li",{children:(0,a.jsx)("button",{value:"de",onClick:function(e){return t(e)},children:"Germany"})})]})})]}),(0,a.jsxs)("div",{className:"same-language-currency use-style",children:[(0,a.jsxs)("span",{children:[s.currencyName," ",(0,a.jsx)("i",{className:"fa fa-angle-down"})]}),(0,a.jsx)("div",{className:"lang-car-dropdown",children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)("button",{value:"USD",onClick:function(e){return o(e)},children:"USD"})}),(0,a.jsx)("li",{children:(0,a.jsx)("button",{value:"EUR",onClick:function(e){return o(e)},children:"EUR"})}),(0,a.jsx)("li",{children:(0,a.jsx)("button",{value:"GBP",onClick:function(e){return o(e)},children:"GBP"})})]})})]}),(0,a.jsx)("div",{className:"same-language-currency"})]})}},425:function(e,s,i){var n=i(9379),r=i(5544),c=i(5043),a=i(8906),l=i(5446),t=i(9456),o=i(5913),d=i(7362),u=i(2821),m=i(5721),h=i(4990),x=i(3492),j=i(579);s.A=function(e){var s=e.product,i=e.currency,v=e.discountedPrice,p=e.finalProductPrice,f=e.finalDiscountedPrice,g=e.show,N=e.onHide,b=e.wishlistItem,w=e.compareItem,y=(0,c.useState)(null),A=(0,r.A)(y,2),k=A[0],C=A[1],S=(0,t.wA)(),_=(0,t.d4)((function(e){return e.cart})).cartItems,I=(0,c.useState)(s.variation?s.variation[0].color:""),P=(0,r.A)(I,2),L=P[0],B=P[1],E=(0,c.useState)(s.variation?s.variation[0].size[0].name:""),F=(0,r.A)(E,2),q=F[0],z=F[1],U=(0,c.useState)(s.variation?s.variation[0].size[0].stock:s.stock),R=(0,r.A)(U,2),O=R[0],T=R[1],V=(0,c.useState)(1),D=(0,r.A)(V,2),H=D[0],M=D[1],G=(0,u.pQ)(_,s,L,q),W={spaceBetween:10,loop:!0,effect:"fade",fadeEffect:{crossFade:!0},thumbs:{swiper:k},modules:[a._R,a.WO]},Y={onSwiper:C,spaceBetween:10,slidesPerView:4,touchRatio:.2,freeMode:!0,loop:!0,slideToClickedSlide:!0,navigation:!0};return(0,j.jsxs)(l.A,{show:g,onHide:function(){C(null),N()},className:"product-quickview-modal-wrapper",children:[(0,j.jsx)(l.A.Header,{closeButton:!0}),(0,j.jsx)("div",{className:"modal-body",children:(0,j.jsxs)("div",{className:"row",children:[(0,j.jsxs)("div",{className:"col-md-5 col-sm-12 col-xs-12",children:[(0,j.jsx)("div",{className:"product-large-image-wrapper",children:(0,j.jsx)(d.A,{options:W,children:s.image&&s.image.map((function(e,s){return(0,j.jsx)(d.q,{children:(0,j.jsx)("div",{className:"single-image",children:(0,j.jsx)("img",{src:""+e,className:"img-fluid",alt:"Product"})})},s)}))})}),(0,j.jsx)("div",{className:"product-small-image-wrapper mt-15",children:(0,j.jsx)(d.A,{options:Y,children:s.image&&s.image.map((function(e,s){return(0,j.jsx)(d.q,{children:(0,j.jsx)("div",{className:"single-image",children:(0,j.jsx)("img",{src:""+e,className:"img-fluid",alt:""})})},s)}))})})]}),(0,j.jsx)("div",{className:"col-md-7 col-sm-12 col-xs-12",children:(0,j.jsxs)("div",{className:"product-details-content quickview-content",children:[(0,j.jsx)("h2",{children:s.name}),(0,j.jsx)("div",{className:"product-details-price",children:null!==v?(0,j.jsxs)(c.Fragment,{children:[(0,j.jsx)("span",{children:i.currencySymbol+f})," ",(0,j.jsx)("span",{className:"old",children:i.currencySymbol+p})]}):(0,j.jsxs)("span",{children:[i.currencySymbol+p," "]})}),s.rating&&s.rating>0?(0,j.jsx)("div",{className:"pro-details-rating-wrap",children:(0,j.jsx)("div",{className:"pro-details-rating",children:(0,j.jsx)(o.A,{ratingValue:s.rating})})}):"",(0,j.jsx)("div",{className:"pro-details-list",children:(0,j.jsx)("p",{children:s.shortDescription})}),s.variation?(0,j.jsxs)("div",{className:"pro-details-size-color",children:[(0,j.jsxs)("div",{className:"pro-details-color-wrap",children:[(0,j.jsx)("span",{children:"Color"}),(0,j.jsx)("div",{className:"pro-details-color-content",children:s.variation.map((function(e,s){return(0,j.jsxs)("label",{className:"pro-details-color-content--single ".concat(e.color),children:[(0,j.jsx)("input",{type:"radio",value:e.color,name:"product-color",checked:e.color===L?"checked":"",onChange:function(){B(e.color),z(e.size[0].name),T(e.size[0].stock),M(1)}}),(0,j.jsx)("span",{className:"checkmark"})]},s)}))})]}),(0,j.jsxs)("div",{className:"pro-details-size",children:[(0,j.jsx)("span",{children:"Size"}),(0,j.jsx)("div",{className:"pro-details-size-content",children:s.variation&&s.variation.map((function(e){return e.color===L?e.size.map((function(e,s){return(0,j.jsxs)("label",{className:"pro-details-size-content--single",children:[(0,j.jsx)("input",{type:"radio",value:e.name,checked:e.name===q?"checked":"",onChange:function(){z(e.name),T(e.stock),M(1)}}),(0,j.jsx)("span",{className:"size-name",children:e.name})]},s)})):""}))})]})]}):"",s.affiliateLink?(0,j.jsx)("div",{className:"pro-details-quality",children:(0,j.jsx)("div",{className:"pro-details-cart btn-hover",children:(0,j.jsx)("a",{href:s.affiliateLink,rel:"noopener noreferrer",target:"_blank",children:"Buy Now"})})}):(0,j.jsxs)("div",{className:"pro-details-quality",children:[(0,j.jsxs)("div",{className:"cart-plus-minus",children:[(0,j.jsx)("button",{onClick:function(){return M(H>1?H-1:1)},className:"dec qtybutton",children:"-"}),(0,j.jsx)("input",{className:"cart-plus-minus-box",type:"text",value:H,readOnly:!0}),(0,j.jsx)("button",{onClick:function(){return M(H<O-G?H+1:H)},className:"inc qtybutton",children:"+"})]}),(0,j.jsx)("div",{className:"pro-details-cart btn-hover",children:O&&O>0?(0,j.jsxs)("button",{onClick:function(){return S((0,m.bE)((0,n.A)((0,n.A)({},s),{},{quantity:H,selectedProductColor:L||(s.selectedProductColor?s.selectedProductColor:null),selectedProductSize:q||(s.selectedProductSize?s.selectedProductSize:null)})))},disabled:G>=O,children:[" ","Add To Cart"," "]}):(0,j.jsx)("button",{disabled:!0,children:"Out of Stock"})}),(0,j.jsx)("div",{className:"pro-details-wishlist",children:(0,j.jsx)("button",{className:void 0!==b?"active":"",disabled:void 0!==b,title:void 0!==b?"Added to wishlist":"Add to wishlist",onClick:function(){return S((0,h.U4)(s))},children:(0,j.jsx)("i",{className:"pe-7s-like"})})}),(0,j.jsx)("div",{className:"pro-details-compare",children:(0,j.jsx)("button",{className:void 0!==w?"active":"",disabled:void 0!==w,title:void 0!==w?"Added to compare":"Add to compare",onClick:function(){return S((0,x.wL)(s))},children:(0,j.jsx)("i",{className:"pe-7s-shuffle"})})})]})]})})]})})]})}},5913:function(e,s,i){var n=i(5043),r=i(579);s.A=function(e){for(var s=e.ratingValue,i=[],c=0;c<5;c++)i.push((0,r.jsx)("i",{className:"fa fa-star-o"},c));if(s&&s>0)for(var a=0;a<=s-1;a++)i[a]=(0,r.jsx)("i",{className:"fa fa-star-o yellow"},a);return(0,r.jsx)(n.Fragment,{children:i})}},6998:function(e,s,i){i.d(s,{A:function(){return l}});var n=i(5544),r=i(5043),c=function(){var e=(0,r.useState)(!1),s=(0,n.A)(e,2),i=s[0],c=s[1];return(0,r.useEffect)((function(){var e=function(){var e=window.pageYOffset;c(e>300)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[i]),{stick:i,onClickHandler:function(){window.scrollTo({top:0,behavior:"smooth"})}}},a=i(579),l=function(){var e=c(),s=e.stick,i=e.onClickHandler;return s?(0,a.jsx)("button",{"aria-label":"Scroll to top",type:"button",className:"scroll-top",onClick:i,children:(0,a.jsx)("i",{className:"fa fa-angle-double-up"})}):null}},7362:function(e,s,i){i.d(s,{q:function(){return t.qr}});var n=i(436),r=i(9379),c=i(5043),a=i(3024),l=i(8906),t=i(4671),o=i(579),d=(0,c.forwardRef)((function(e,s){var i=e.options,c=e.prevIcon,d=e.nextIcon,u=e.children,m=e.className,h=e.navClass,x=void 0!==(null===i||void 0===i?void 0:i.modules)?i.modules:[],j="prev-".concat(h||"swiper-nav"),v="next-".concat(h||"swiper-nav"),p=(0,r.A)((0,r.A)({slidesPerView:1,spaceBetween:0,loop:!1,autoplay:!(null===i||void 0===i||!i.autoplay)&&{delay:2500,disableOnInteraction:!1},watchSlidesProgress:!0,autoHeight:!0,breakpoints:{}},i),{},{modules:[l.Vx,l.dK,l.Jq,l.Ij].concat((0,n.A)(x)),navigation:!(null===i||void 0===i||!i.navigation)&&{prevEl:".".concat(j),nextEl:".".concat(v)},pagination:!(null===i||void 0===i||!i.pagination)&&{clickable:!0}});return(0,o.jsxs)("div",{className:(0,a.A)("swiper-wrap",m),ref:s,children:[(0,o.jsx)(t.RC,(0,r.A)((0,r.A)({},p),{},{children:u})),(null===p||void 0===p?void 0:p.navigation)&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("button",{type:"button",className:"swiper-button-prev ht-swiper-button-nav ".concat(j),children:(0,o.jsx)("i",{className:(0,a.A)(c,"icon")})}),(0,o.jsx)("button",{type:"button",className:"swiper-button-next ht-swiper-button-nav ".concat(v),children:(0,o.jsx)("i",{className:(0,a.A)(d,"icon")})})]})]})}));d.defaultProps={prevIcon:"pe-7s-angle-left",nextIcon:"pe-7s-angle-right",navStyle:1,dotStyle:1},s.A=d},8062:function(e,s,i){var n=i(5043),r=i(7766),c=i(5896),a=i(6998),l=i(579);s.A=function(e){var s=e.children,i=e.headerContainerClass,t=e.headerTop,o=e.headerPaddingClass,d=e.headerPositionClass;return(0,l.jsxs)(n.Fragment,{children:[(0,l.jsx)(r.A,{layout:i,top:t,headerPaddingClass:o,headerPositionClass:d}),s,(0,l.jsx)(c.A,{backgroundColorClass:"bg-gray",spaceTopClass:"pt-100",spaceBottomClass:"pb-70"}),(0,l.jsx)(a.A,{})]})}},970:function(e,s,i){var n=i(1778),r=i(5475),c=i(579);s.A=function(e){var s=e.pages;return(0,c.jsx)("div",{className:"breadcrumb-area pt-35 pb-35 bg-gray-3",children:(0,c.jsx)("div",{className:"container",children:(0,c.jsx)(n.A,{children:null===s||void 0===s?void 0:s.map((function(e,i){var a=e.path,l=e.label;return i!==s.length-1?(0,c.jsx)(n.A.Item,{linkProps:{to:a},linkAs:r.N_,children:l},l):(0,c.jsx)(n.A.Item,{active:!0,children:l},l)}))})})})}},5896:function(e,s,i){var n=i(3024),r=i(5475),c=(i(6801),i(2304)),a=i(579);s.A=function(e){var s=e.backgroundColorClass,i=e.spaceTopClass,l=e.spaceBottomClass,t=e.spaceLeftClass,o=e.spaceRightClass,d=e.containerClass,u=e.extraFooterClass,m=e.sideMenu;return(0,a.jsx)("footer",{className:(0,n.A)("footer-area",s,i,l,u,t,o),children:(0,a.jsx)("div",{className:"".concat(d||"container"),children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"".concat(m?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,a.jsx)("h1",{style:{fontWeight:600},children:"Stickerify"})}),(0,a.jsx)("div",{className:"".concat(m?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,a.jsxs)("div",{className:"footer-widget mb-30 ml-30",children:[(0,a.jsx)("div",{className:"footer-title",children:(0,a.jsx)("h3",{children:"ABOUT US"})}),(0,a.jsx)("div",{className:"footer-list",children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(r.N_,{to:"/about",children:"About us"})}),(0,a.jsx)("li",{children:(0,a.jsx)(r.N_,{to:"#/",children:"Store location"})}),(0,a.jsx)("li",{children:(0,a.jsx)(r.N_,{to:"/contact",children:"Contact"})}),(0,a.jsx)("li",{children:(0,a.jsx)(r.N_,{to:"#/",children:"Orders tracking"})})]})})]})}),(0,a.jsx)("div",{className:"".concat(m?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,a.jsxs)("div",{className:"".concat(m?"footer-widget mb-30 ml-95":"footer-widget mb-30 ml-50"),children:[(0,a.jsx)("div",{className:"footer-title",children:(0,a.jsx)("h3",{children:"USEFUL LINKS"})}),(0,a.jsx)("div",{className:"footer-list",children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{style:{fontWeight:"bold",textDecoration:"underline"},children:(0,a.jsx)(r.N_,{to:"/return",children:"Returns"})}),(0,a.jsx)("li",{children:(0,a.jsx)(r.N_,{to:"#/",children:"Support Policy"})}),(0,a.jsx)("li",{children:(0,a.jsx)(r.N_,{to:"#/",children:"Size guide"})}),(0,a.jsx)("li",{children:(0,a.jsx)(r.N_,{to:"#/",children:"FAQs"})})]})})]})}),(0,a.jsx)("div",{className:"".concat(m?"col-xl-3 col-sm-4":"col-lg-2 col-sm-6"),children:(0,a.jsxs)("div",{className:"".concat(m?"footer-widget mb-30 ml-145":"footer-widget mb-30 ml-75"),children:[(0,a.jsx)("div",{className:"footer-title",children:(0,a.jsx)("h3",{children:"FOLLOW US"})}),(0,a.jsx)("div",{className:"footer-list",children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"//www.facebook.com",target:"_blank",rel:"noopener noreferrer",children:"Facebook"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"//www.twitter.com",target:"_blank",rel:"noopener noreferrer",children:"Twitter"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"//www.instagram.com",target:"_blank",rel:"noopener noreferrer",children:"Instagram"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"//www.youtube.com",target:"_blank",rel:"noopener noreferrer",children:"Youtube"})})]})})]})}),(0,a.jsx)("div",{className:"".concat(m?"col-xl-3 col-sm-8":"col-lg-4 col-sm-6"),children:(0,a.jsx)(c.A,{spaceBottomClass:"mb-30",spaceLeftClass:"ml-70",sideMenu:m})})]})})})}},7766:function(e,s,i){i.d(s,{A:function(){return h}});var n=i(5544),r=i(5043),c=i(3024),a=(i(3188),i(3189)),l=i(6487),t=i(4993),o=i(9456),d=i(3468),u=i(579),m=function(e){var s=e.borderStyle,i=(0,o.d4)((function(e){return e.currency}));return(0,u.jsxs)("div",{className:(0,c.A)("header-top-wap","fluid-border"===s&&"border-bottom"),children:[(0,u.jsx)(d.A,{currency:i}),(0,u.jsx)("div",{className:"header-offer",children:(0,u.jsxs)("p",{children:["Free delivery on order over"," ",(0,u.jsx)("span",{children:i.currencySymbol+(200*i.currencyRate).toFixed(2)})]})})]})},h=function(e){var s=e.layout,i=e.top,o=e.borderStyle,d=e.headerPaddingClass,h=e.headerPositionClass,x=e.headerBgClass,j=(0,r.useState)(0),v=(0,n.A)(j,2),p=v[0],f=v[1],g=(0,r.useState)(0),N=(0,n.A)(g,2),b=N[0],w=N[1];(0,r.useEffect)((function(){var e=document.querySelector(".sticky-bar");return w(e.offsetTop),window.addEventListener("scroll",y),function(){window.removeEventListener("scroll",y)}}),[]);var y=function(){f(window.scrollY)};return(0,u.jsxs)("header",{className:(0,c.A)("header-area clearfix",x,h),children:[(0,u.jsx)("div",{className:(0,c.A)("header-top-area",d,"visible"===i?"d-none d-lg-block":"d-none","fluid-border"===o&&"border-none"),children:(0,u.jsx)("div",{className:"container-fluid"===s?s:"container",children:(0,u.jsx)(m,{borderStyle:o})})}),(0,u.jsxs)("div",{className:(0,c.A)(d,"sticky-bar header-res-padding clearfix",p>b&&"stick"),children:[(0,u.jsx)("div",{className:"container-fluid"===s?s:"container",children:(0,u.jsxs)("div",{className:"row",children:[(0,u.jsx)("div",{style:{display:"flex",alignItems:"center"},className:"col-xl-2 col-lg-2 col-md-6 col-4",children:(0,u.jsx)("h1",{style:{fontWeight:"600"},children:"Stickerify"})}),(0,u.jsx)("div",{className:"col-xl-8 col-lg-8 d-none d-lg-block",children:(0,u.jsx)(a.A,{})}),(0,u.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-6 col-8",children:(0,u.jsx)(l.A,{})})]})}),(0,u.jsx)(t.A,{})]})]})}},7577:function(e,s,i){i.d(s,{A:function(){return p}});var n=i(3024),r=i(5043),c=i(9456),a=i(5544),l=i(5475),t=i(2821),o=i(5913),d=i(425),u=i(5721),m=i(4990),h=i(3492),x=i(579),j=function(e){var s=e.product,i=e.currency,j=e.cartItem,v=e.wishlistItem,p=e.compareItem,f=e.spaceBottomClass,g=(0,r.useState)(!1),N=(0,a.A)(g,2),b=N[0],w=N[1],y=(0,t.do)(s.price,s.discount),A=+(s.price*i.currencyRate).toFixed(2),k=+(y*i.currencyRate).toFixed(2),C=(0,c.wA)();return(0,x.jsxs)(r.Fragment,{children:[(0,x.jsxs)("div",{className:(0,n.A)("product-wrap",f),children:[(0,x.jsxs)("div",{className:"product-img",children:[(0,x.jsxs)(l.N_,{to:"/product/"+s.id,children:[(0,x.jsx)("img",{className:"default-img",src:""+s.image[0],alt:""}),s.image.length>1?(0,x.jsx)("img",{className:"hover-img",src:""+s.image[1],alt:""}):""]}),s.discount||s.new?(0,x.jsxs)("div",{className:"product-img-badges",children:[s.discount?(0,x.jsxs)("span",{className:"pink",children:["-",s.discount,"%"]}):"",s.new?(0,x.jsx)("span",{className:"purple",children:"New"}):""]}):"",(0,x.jsxs)("div",{className:"product-action",children:[(0,x.jsx)("div",{className:"pro-same-action pro-wishlist",children:(0,x.jsx)("button",{className:void 0!==v?"active":"",disabled:void 0!==v,title:void 0!==v?"Added to wishlist":"Add to wishlist",onClick:function(){return C((0,m.U4)(s))},children:(0,x.jsx)("i",{className:"pe-7s-like"})})}),(0,x.jsx)("div",{className:"pro-same-action pro-cart",children:s.affiliateLink?(0,x.jsxs)("a",{href:s.affiliateLink,rel:"noopener noreferrer",target:"_blank",children:[" ","Buy now"," "]}):s.variation&&s.variation.length>=1?(0,x.jsx)(l.N_,{to:"".concat("","/product/").concat(s.id),children:"Select Option"}):s.stock&&s.stock>0?(0,x.jsxs)("button",{onClick:function(){return C((0,u.bE)(s))},className:void 0!==j&&j.quantity>0?"active":"",disabled:void 0!==j&&j.quantity>0,title:void 0!==j?"Added to cart":"Add to cart",children:[" ",(0,x.jsx)("i",{className:"pe-7s-cart"})," ",void 0!==j&&j.quantity>0?"Added":"Add to cart"]}):(0,x.jsx)("button",{disabled:!0,className:"active",children:"Out of Stock"})}),(0,x.jsx)("div",{className:"pro-same-action pro-quickview",children:(0,x.jsx)("button",{onClick:function(){return w(!0)},title:"Quick View",children:(0,x.jsx)("i",{className:"pe-7s-look"})})})]})]}),(0,x.jsxs)("div",{className:"product-content text-center",children:[(0,x.jsx)("h3",{children:(0,x.jsx)(l.N_,{to:"/product/"+s.id,children:s.name})}),s.rating&&s.rating>0?(0,x.jsx)("div",{className:"product-rating",children:(0,x.jsx)(o.A,{ratingValue:s.rating})}):"",(0,x.jsx)("div",{className:"product-price",children:null!==y?(0,x.jsxs)(r.Fragment,{children:[(0,x.jsx)("span",{children:i.currencySymbol+k})," ",(0,x.jsx)("span",{className:"old",children:i.currencySymbol+A})]}):(0,x.jsxs)("span",{children:[i.currencySymbol+A," "]})})]})]}),(0,x.jsx)("div",{className:"shop-list-wrap mb-30",children:(0,x.jsxs)("div",{className:"row",children:[(0,x.jsx)("div",{className:"col-xl-4 col-md-5 col-sm-6",children:(0,x.jsx)("div",{className:"product-list-image-wrap",children:(0,x.jsxs)("div",{className:"product-img",children:[(0,x.jsxs)(l.N_,{to:"/product/"+s.id,children:[(0,x.jsx)("img",{className:"default-img img-fluid",src:""+s.image[0],alt:""}),s.image.length>1?(0,x.jsx)("img",{className:"hover-img img-fluid",src:""+s.image[1],alt:""}):""]}),s.discount||s.new?(0,x.jsxs)("div",{className:"product-img-badges",children:[s.discount?(0,x.jsxs)("span",{className:"pink",children:["-",s.discount,"%"]}):"",s.new?(0,x.jsx)("span",{className:"purple",children:"New"}):""]}):""]})})}),(0,x.jsx)("div",{className:"col-xl-8 col-md-7 col-sm-6",children:(0,x.jsxs)("div",{className:"shop-list-content",children:[(0,x.jsx)("h3",{children:(0,x.jsx)(l.N_,{to:"/product/"+s.id,children:s.name})}),(0,x.jsx)("div",{className:"product-list-price",children:null!==y?(0,x.jsxs)(r.Fragment,{children:[(0,x.jsx)("span",{children:i.currencySymbol+k})," ",(0,x.jsx)("span",{className:"old",children:i.currencySymbol+A})]}):(0,x.jsxs)("span",{children:[i.currencySymbol+A," "]})}),s.rating&&s.rating>0?(0,x.jsx)("div",{className:"rating-review",children:(0,x.jsx)("div",{className:"product-list-rating",children:(0,x.jsx)(o.A,{ratingValue:s.rating})})}):"",s.shortDescription?(0,x.jsx)("p",{children:s.shortDescription}):"",(0,x.jsxs)("div",{className:"shop-list-actions d-flex align-items-center",children:[(0,x.jsx)("div",{className:"shop-list-btn btn-hover",children:s.affiliateLink?(0,x.jsxs)("a",{href:s.affiliateLink,rel:"noopener noreferrer",target:"_blank",children:[" ","Buy now"," "]}):s.variation&&s.variation.length>=1?(0,x.jsx)(l.N_,{to:"".concat("","/product/").concat(s.id),children:"Select Option"}):s.stock&&s.stock>0?(0,x.jsxs)("button",{onClick:function(){return C((0,u.bE)(s))},className:void 0!==j&&j.quantity>0?"active":"",disabled:void 0!==j&&j.quantity>0,title:void 0!==j?"Added to cart":"Add to cart",children:[" ",(0,x.jsx)("i",{className:"pe-7s-cart"})," ",void 0!==j&&j.quantity>0?"Added":"Add to cart"]}):(0,x.jsx)("button",{disabled:!0,className:"active",children:"Out of Stock"})}),(0,x.jsx)("div",{className:"shop-list-wishlist ml-10",children:(0,x.jsx)("button",{className:void 0!==v?"active":"",disabled:void 0!==v,title:void 0!==v?"Added to wishlist":"Add to wishlist",onClick:function(){return C((0,m.U4)(s))},children:(0,x.jsx)("i",{className:"pe-7s-like"})})}),(0,x.jsx)("div",{className:"shop-list-compare ml-10",children:(0,x.jsx)("button",{className:void 0!==p?"active":"",disabled:void 0!==p,title:void 0!==p?"Added to compare":"Add to compare",onClick:function(){return C((0,h.wL)(s))},children:(0,x.jsx)("i",{className:"pe-7s-shuffle"})})})]})]})})]})}),(0,x.jsx)(d.A,{show:b,onHide:function(){return w(!1)},product:s,currency:i,discountedPrice:y,finalProductPrice:A,finalDiscountedPrice:k,wishlistItem:v,compareItem:p})]})},v=function(e){var s=e.products,i=e.spaceBottomClass,n=(0,c.d4)((function(e){return e.currency})),a=(0,c.d4)((function(e){return e.cart})).cartItems,l=(0,c.d4)((function(e){return e.wishlist})).wishlistItems,t=(0,c.d4)((function(e){return e.compare})).compareItems;return(0,x.jsx)(r.Fragment,{children:null===s||void 0===s?void 0:s.map((function(e){return(0,x.jsx)("div",{className:"col-xl-4 col-sm-6",children:(0,x.jsx)(j,{spaceBottomClass:i,product:e,currency:n,cartItem:a.find((function(s){return s.id===e.id})),wishlistItem:l.find((function(s){return s.id===e.id})),compareItem:t.find((function(s){return s.id===e.id}))})},e.id)}))})},p=function(e){var s=e.products,i=e.layout;return(0,x.jsx)("div",{className:"shop-bottom-area mt-35",children:(0,x.jsx)("div",{className:(0,n.A)("row",i),children:(0,x.jsx)(v,{products:s,spaceBottomClass:"mb-25"})})})}}}]);
//# sourceMappingURL=8449.82d8f663.chunk.js.map