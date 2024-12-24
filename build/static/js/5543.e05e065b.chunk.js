/*! For license information please see 5543.e05e065b.chunk.js.LICENSE.txt */
(self.webpackChunkStickerify_react=self.webpackChunkStickerify_react||[]).push([[5543],{4943:function(e,s,t){"use strict";var i=t(3024),r=t(9735),n=t(579),a=function(e){var s,t=e.status,r=e.message,a=e.onValidated,c=e.spaceTopClass,o=e.subscribeBtnClass;return(0,n.jsx)("div",{className:(0,i.A)("subscribe-form-3",c),children:(0,n.jsxs)("div",{className:"mc-form",children:[(0,n.jsx)("div",{children:(0,n.jsx)("input",{className:"email",ref:function(e){return s=e},type:"email",placeholder:"Your Email Address",required:!0})}),"sending"===t&&(0,n.jsx)("div",{style:{color:"#3498db",fontSize:"12px"},children:"sending..."}),"error"===t&&(0,n.jsx)("div",{style:{color:"#e74c3c",fontSize:"12px"},dangerouslySetInnerHTML:{__html:r}}),"success"===t&&(0,n.jsx)("div",{style:{color:"#2ecc71",fontSize:"12px"},dangerouslySetInnerHTML:{__html:r}}),(0,n.jsx)("div",{className:"clear-3 ".concat(o||""),children:(0,n.jsx)("button",{className:"button",onClick:function(){s&&s.value.indexOf("@")>-1&&a({EMAIL:s.value}),s.value=""},children:"SUBSCRIBE"})})]})})};s.A=function(e){var s=e.mailchimpUrl,t=e.spaceTopClass,i=e.subscribeBtnClass;return(0,n.jsx)("div",{children:(0,n.jsx)(r.A,{url:s,render:function(e){var s=e.subscribe,r=e.status,c=e.message;return(0,n.jsx)(a,{status:r,message:c,onValidated:function(e){return s(e)},spaceTopClass:t,subscribeBtnClass:i})}})})}},425:function(e,s,t){"use strict";var i=t(9379),r=t(5544),n=t(5043),a=t(8906),c=t(5446),o=t(9456),l=t(5913),d=t(7362),u=t(2821),m=t(5721),f=t(4990),p=t(3492),x=t(579);s.A=function(e){var s=e.product,t=e.currency,h=e.discountedPrice,v=e.finalProductPrice,j=e.finalDiscountedPrice,g=e.show,N=e.onHide,b=e.wishlistItem,w=e.compareItem,y=(0,n.useState)(null),A=(0,r.A)(y,2),k=A[0],C=A[1],S=(0,o.wA)(),I=(0,o.d4)((function(e){return e.cart})).cartItems,B=(0,n.useState)(s.variation?s.variation[0].color:""),P=(0,r.A)(B,2),E=P[0],T=P[1],q=(0,n.useState)(s.variation?s.variation[0].size[0].name:""),z=(0,r.A)(q,2),L=z[0],_=z[1],O=(0,n.useState)(s.variation?s.variation[0].size[0].stock:s.stock),F=(0,r.A)(O,2),R=F[0],H=F[1],V=(0,n.useState)(1),U=(0,r.A)(V,2),W=U[0],D=U[1],M=(0,u.pQ)(I,s,E,L),Y={spaceBetween:10,loop:!0,effect:"fade",fadeEffect:{crossFade:!0},thumbs:{swiper:k},modules:[a._R,a.WO]},J={onSwiper:C,spaceBetween:10,slidesPerView:4,touchRatio:.2,freeMode:!0,loop:!0,slideToClickedSlide:!0,navigation:!0};return(0,x.jsxs)(c.A,{show:g,onHide:function(){C(null),N()},className:"product-quickview-modal-wrapper",children:[(0,x.jsx)(c.A.Header,{closeButton:!0}),(0,x.jsx)("div",{className:"modal-body",children:(0,x.jsxs)("div",{className:"row",children:[(0,x.jsxs)("div",{className:"col-md-5 col-sm-12 col-xs-12",children:[(0,x.jsx)("div",{className:"product-large-image-wrapper",children:(0,x.jsx)(d.A,{options:Y,children:s.image&&s.image.map((function(e,s){return(0,x.jsx)(d.q,{children:(0,x.jsx)("div",{className:"single-image",children:(0,x.jsx)("img",{src:""+e,className:"img-fluid",alt:"Product"})})},s)}))})}),(0,x.jsx)("div",{className:"product-small-image-wrapper mt-15",children:(0,x.jsx)(d.A,{options:J,children:s.image&&s.image.map((function(e,s){return(0,x.jsx)(d.q,{children:(0,x.jsx)("div",{className:"single-image",children:(0,x.jsx)("img",{src:""+e,className:"img-fluid",alt:""})})},s)}))})})]}),(0,x.jsx)("div",{className:"col-md-7 col-sm-12 col-xs-12",children:(0,x.jsxs)("div",{className:"product-details-content quickview-content",children:[(0,x.jsx)("h2",{children:s.name}),(0,x.jsx)("div",{className:"product-details-price",children:null!==h?(0,x.jsxs)(n.Fragment,{children:[(0,x.jsx)("span",{children:t.currencySymbol+j})," ",(0,x.jsx)("span",{className:"old",children:t.currencySymbol+v})]}):(0,x.jsxs)("span",{children:[t.currencySymbol+v," "]})}),s.rating&&s.rating>0?(0,x.jsx)("div",{className:"pro-details-rating-wrap",children:(0,x.jsx)("div",{className:"pro-details-rating",children:(0,x.jsx)(l.A,{ratingValue:s.rating})})}):"",(0,x.jsx)("div",{className:"pro-details-list",children:(0,x.jsx)("p",{children:s.shortDescription})}),s.variation?(0,x.jsxs)("div",{className:"pro-details-size-color",children:[(0,x.jsxs)("div",{className:"pro-details-color-wrap",children:[(0,x.jsx)("span",{children:"Color"}),(0,x.jsx)("div",{className:"pro-details-color-content",children:s.variation.map((function(e,s){return(0,x.jsxs)("label",{className:"pro-details-color-content--single ".concat(e.color),children:[(0,x.jsx)("input",{type:"radio",value:e.color,name:"product-color",checked:e.color===E?"checked":"",onChange:function(){T(e.color),_(e.size[0].name),H(e.size[0].stock),D(1)}}),(0,x.jsx)("span",{className:"checkmark"})]},s)}))})]}),(0,x.jsxs)("div",{className:"pro-details-size",children:[(0,x.jsx)("span",{children:"Size"}),(0,x.jsx)("div",{className:"pro-details-size-content",children:s.variation&&s.variation.map((function(e){return e.color===E?e.size.map((function(e,s){return(0,x.jsxs)("label",{className:"pro-details-size-content--single",children:[(0,x.jsx)("input",{type:"radio",value:e.name,checked:e.name===L?"checked":"",onChange:function(){_(e.name),H(e.stock),D(1)}}),(0,x.jsx)("span",{className:"size-name",children:e.name})]},s)})):""}))})]})]}):"",s.affiliateLink?(0,x.jsx)("div",{className:"pro-details-quality",children:(0,x.jsx)("div",{className:"pro-details-cart btn-hover",children:(0,x.jsx)("a",{href:s.affiliateLink,rel:"noopener noreferrer",target:"_blank",children:"Buy Now"})})}):(0,x.jsxs)("div",{className:"pro-details-quality",children:[(0,x.jsxs)("div",{className:"cart-plus-minus",children:[(0,x.jsx)("button",{onClick:function(){return D(W>1?W-1:1)},className:"dec qtybutton",children:"-"}),(0,x.jsx)("input",{className:"cart-plus-minus-box",type:"text",value:W,readOnly:!0}),(0,x.jsx)("button",{onClick:function(){return D(W<R-M?W+1:W)},className:"inc qtybutton",children:"+"})]}),(0,x.jsx)("div",{className:"pro-details-cart btn-hover",children:R&&R>0?(0,x.jsxs)("button",{onClick:function(){return S((0,m.bE)((0,i.A)((0,i.A)({},s),{},{quantity:W,selectedProductColor:E||(s.selectedProductColor?s.selectedProductColor:null),selectedProductSize:L||(s.selectedProductSize?s.selectedProductSize:null)})))},disabled:M>=R,children:[" ","Add To Cart"," "]}):(0,x.jsx)("button",{disabled:!0,children:"Out of Stock"})}),(0,x.jsx)("div",{className:"pro-details-wishlist",children:(0,x.jsx)("button",{className:void 0!==b?"active":"",disabled:void 0!==b,title:void 0!==b?"Added to wishlist":"Add to wishlist",onClick:function(){return S((0,f.U4)(s))},children:(0,x.jsx)("i",{className:"pe-7s-like"})})}),(0,x.jsx)("div",{className:"pro-details-compare",children:(0,x.jsx)("button",{className:void 0!==w?"active":"",disabled:void 0!==w,title:void 0!==w?"Added to compare":"Add to compare",onClick:function(){return S((0,p.wL)(s))},children:(0,x.jsx)("i",{className:"pe-7s-shuffle"})})})]})]})})]})})]})}},5913:function(e,s,t){"use strict";var i=t(5043),r=t(579);s.A=function(e){for(var s=e.ratingValue,t=[],n=0;n<5;n++)t.push((0,r.jsx)("i",{className:"fa fa-star-o"},n));if(s&&s>0)for(var a=0;a<=s-1;a++)t[a]=(0,r.jsx)("i",{className:"fa fa-star-o yellow"},a);return(0,r.jsx)(i.Fragment,{children:t})}},6998:function(e,s,t){"use strict";t.d(s,{A:function(){return c}});var i=t(5544),r=t(5043),n=function(){var e=(0,r.useState)(!1),s=(0,i.A)(e,2),t=s[0],n=s[1];return(0,r.useEffect)((function(){var e=function(){var e=window.pageYOffset;n(e>300)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[t]),{stick:t,onClickHandler:function(){window.scrollTo({top:0,behavior:"smooth"})}}},a=t(579),c=function(){var e=n(),s=e.stick,t=e.onClickHandler;return s?(0,a.jsx)("button",{"aria-label":"Scroll to top",type:"button",className:"scroll-top",onClick:t,children:(0,a.jsx)("i",{className:"fa fa-angle-double-up"})}):null}},7362:function(e,s,t){"use strict";t.d(s,{q:function(){return o.qr}});var i=t(436),r=t(9379),n=t(5043),a=t(3024),c=t(8906),o=t(4671),l=t(579),d=(0,n.forwardRef)((function(e,s){var t=e.options,n=e.prevIcon,d=e.nextIcon,u=e.children,m=e.className,f=e.navClass,p=void 0!==(null===t||void 0===t?void 0:t.modules)?t.modules:[],x="prev-".concat(f||"swiper-nav"),h="next-".concat(f||"swiper-nav"),v=(0,r.A)((0,r.A)({slidesPerView:1,spaceBetween:0,loop:!1,autoplay:!(null===t||void 0===t||!t.autoplay)&&{delay:2500,disableOnInteraction:!1},watchSlidesProgress:!0,autoHeight:!0,breakpoints:{}},t),{},{modules:[c.Vx,c.dK,c.Jq,c.Ij].concat((0,i.A)(p)),navigation:!(null===t||void 0===t||!t.navigation)&&{prevEl:".".concat(x),nextEl:".".concat(h)},pagination:!(null===t||void 0===t||!t.pagination)&&{clickable:!0}});return(0,l.jsxs)("div",{className:(0,a.A)("swiper-wrap",m),ref:s,children:[(0,l.jsx)(o.RC,(0,r.A)((0,r.A)({},v),{},{children:u})),(null===v||void 0===v?void 0:v.navigation)&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("button",{type:"button",className:"swiper-button-prev ht-swiper-button-nav ".concat(x),children:(0,l.jsx)("i",{className:(0,a.A)(n,"icon")})}),(0,l.jsx)("button",{type:"button",className:"swiper-button-next ht-swiper-button-nav ".concat(h),children:(0,l.jsx)("i",{className:(0,a.A)(d,"icon")})})]})]})}));d.defaultProps={prevIcon:"pe-7s-angle-left",nextIcon:"pe-7s-angle-right",navStyle:1,dotStyle:1},s.A=d},4980:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return T}});var i=t(5043),r=t(2168),n=t(5544),a=t(5475),c=t(3024),o=t(3189),l=t(6487),d=t(4993),u=t(579),m=function(){var e=(0,i.useState)(0),s=(0,n.A)(e,2),t=s[0],r=s[1],m=(0,i.useState)(0),f=(0,n.A)(m,2),p=f[0],x=f[1];(0,i.useEffect)((function(){var e=document.querySelector(".sticky-bar");return x(e.offsetTop),window.addEventListener("scroll",h),function(){window.removeEventListener("scroll",h)}}),[]);var h=function(){r(window.scrollY)};return(0,u.jsx)("header",{className:(0,c.A)("header-area sticky-bar header-padding-3 header-res-padding clearfix transparent-bar",t>p&"stick"),children:(0,u.jsxs)("div",{className:"container-fluid",children:[(0,u.jsxs)("div",{className:"row",children:[(0,u.jsx)("div",{className:"col-xl-5 col-lg-6 d-none d-lg-block",children:(0,u.jsx)(o.A,{menuWhiteClass:"menu-white"})}),(0,u.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-6 col-4",children:(0,u.jsxs)("div",{className:"logo text-center logo-hm5",children:[(0,u.jsx)(a.N_,{className:"sticky-none",to:"/",children:(0,u.jsx)("img",{alt:"",src:"assets/img/logo/logo-2.png"})}),(0,u.jsx)(a.N_,{className:"sticky-block",to:"/",children:(0,u.jsx)("img",{alt:"",src:"assets/img/logo/logo.png"})})]})}),(0,u.jsx)("div",{className:"col-xl-5 col-lg-4 col-md-6 col-8",children:(0,u.jsx)(l.A,{iconWhiteClass:"header-right-wrap-white"})})]}),(0,u.jsx)(d.A,{})]})})},f=t(3854),p=t(6998),x=function(e){var s=e.children;return(0,u.jsxs)("div",{className:"wrapper",children:[(0,u.jsx)(m,{}),s,(0,u.jsx)(f.A,{backgroundColorClass:"bg-black",footerTopBackgroundColorClass:"bg-black",footerTopSpaceTopClass:"pt-80",spaceBottomClass:"pb-25",footerLogo:"/assets/img/logo/logo-2.png"}),(0,u.jsx)(p.A,{})]})},h=t(8906),v=t(7362),j=JSON.parse('[{"id":1,"title":"New Arrival","subtitle":"Final Sale","text":"30% off Summer Vacation","image":"/assets/img/slider/slider-3.jpg","url":"/shop-grid-standard"},{"id":2,"title":"New Arrival","subtitle":"Final Sale","text":"40% off Summer Vacation","image":"/assets/img/slider/slider-4.jpg","url":"/shop-grid-standard"}]'),g=function(e){var s=e.data;return(0,u.jsx)("div",{className:(0,c.A)("slider-height-4 d-flex align-items-center bg-img"),style:{backgroundImage:"url(".concat(""+s.image,")")},children:(0,u.jsx)("div",{className:"container",children:(0,u.jsx)("div",{className:"row",children:(0,u.jsx)("div",{className:"col-xl-12 col-lg-12 col-md-12 col-12",children:(0,u.jsxs)("div",{className:"slider-content-5 slider-animated-1 text-center",children:[(0,u.jsx)("h3",{className:"animated",children:s.title}),(0,u.jsx)("h1",{className:"animated",children:s.subtitle}),(0,u.jsx)("p",{className:"animated",children:s.text}),(0,u.jsx)("div",{className:"slider-btn-5 btn-hover",children:(0,u.jsx)(a.N_,{className:"animated",to:""+s.url,children:"SHOP NOW"})})]})})})})})},N={effect:"fade",fadeEffect:{crossFade:!0},modules:[h._R],loop:!0,speed:1e3,navigation:!0,autoHeight:!1},b=function(){return(0,u.jsx)("div",{className:"slider-area",children:(0,u.jsx)("div",{className:"slider-active-2 nav-style-2",children:(0,u.jsx)(v.A,{options:N,children:null===j||void 0===j?void 0:j.map((function(e,s){return(0,u.jsx)(v.q,{children:(0,u.jsx)(g,{data:e})},s)}))})})})},w=t(8902),y=t(9456),A=t(2821),k=t(425),C=t(5721),S=t(4990),I=t(3492),B=function(e){var s=e.product,t=e.currency,r=e.cartItem,o=e.wishlistItem,l=e.compareItem,d=e.spaceBottomClass,m=(0,i.useState)(!1),f=(0,n.A)(m,2),p=f[0],x=f[1],h=(0,A.do)(s.price,s.discount),v=+(s.price*t.currencyRate).toFixed(2),j=+(h*t.currencyRate).toFixed(2),g=(0,y.wA)();return(0,u.jsxs)(i.Fragment,{children:[(0,u.jsx)("div",{className:(0,c.A)("product-wrap-3 scroll-zoom",d),children:(0,u.jsxs)("div",{className:"product-img",children:[(0,u.jsx)(a.N_,{to:"/product/"+s.id,children:(0,u.jsx)("img",{className:"default-img",src:""+s.image[0],alt:""})}),s.discount||s.new?(0,u.jsxs)("div",{className:"product-img-badges",children:[s.discount?(0,u.jsxs)("span",{className:"pink",children:["-",s.discount,"%"]}):"",s.new?(0,u.jsx)("span",{className:"purple",children:"New"}):""]}):"",(0,u.jsx)("div",{className:"product-content-3-wrap",children:(0,u.jsxs)("div",{className:"product-content-3",children:[(0,u.jsx)("div",{className:"product-title",children:(0,u.jsx)("h3",{children:(0,u.jsx)(a.N_,{to:"/product/"+s.id,children:s.name})})}),(0,u.jsx)("div",{className:"price-3",children:null!==h?(0,u.jsxs)(i.Fragment,{children:[(0,u.jsx)("span",{children:t.currencySymbol+j})," ",(0,u.jsx)("span",{className:"old",children:t.currencySymbol+v})]}):(0,u.jsxs)("span",{children:[t.currencySymbol+v," "]})}),(0,u.jsxs)("div",{className:"product-action-3",children:[(0,u.jsx)("div",{className:"pro-same-action pro-wishlist",children:(0,u.jsx)("button",{className:void 0!==o?"active":"",disabled:void 0!==o,title:void 0!==o?"Added to wishlist":"Add to wishlist",onClick:function(){return g((0,S.U4)(s))},children:(0,u.jsx)("i",{className:"fa fa-heart-o"})})}),(0,u.jsx)("div",{className:"pro-same-action pro-cart",children:s.affiliateLink?(0,u.jsxs)("a",{href:s.affiliateLink,rel:"noopener noreferrer",target:"_blank",title:"Buy now",children:[" ",(0,u.jsx)("i",{className:"fa fa-shopping-cart"})," "]}):s.variation&&s.variation.length>=1?(0,u.jsx)(a.N_,{to:"".concat("","/product/").concat(s.id),title:"Select options",children:(0,u.jsx)("i",{class:"fa fa-cog"})}):s.stock&&s.stock>0?(0,u.jsxs)("button",{onClick:function(){return g((0,C.bE)(s))},className:void 0!==r&&r.quantity>0?"active":"",disabled:void 0!==r&&r.quantity>0,title:void 0!==r?"Added to cart":"Add to cart",children:[" ",(0,u.jsx)("i",{className:"fa fa-shopping-cart"})," "]}):(0,u.jsx)("button",{disabled:!0,className:"active",title:"Out of stock",children:(0,u.jsx)("i",{className:"fa fa-shopping-cart"})})}),(0,u.jsx)("div",{className:"pro-same-action pro-compare",children:(0,u.jsx)("button",{className:void 0!==l?"active":"",disabled:void 0!==l,title:void 0!==l?"Added to compare":"Add to compare",onClick:function(){return g((0,I.wL)(s))},children:(0,u.jsx)("i",{className:"fa fa-retweet"})})}),(0,u.jsx)("div",{className:"pro-same-action pro-quickview",children:(0,u.jsx)("button",{onClick:function(){return x(!0)},title:"Quick View",children:(0,u.jsx)("i",{className:"fa fa-eye"})})})]})]})})]})}),(0,u.jsx)(k.A,{show:p,onHide:function(){return x(!1)},product:s,currency:t,discountedPrice:h,finalProductPrice:v,finalDiscountedPrice:j,wishlistItem:o,compareItem:l})]})},P=function(e){var s=e.sliderClassName,t=e.spaceBottomClass,r=e.category,n=e.type,a=e.limit,c=(0,y.d4)((function(e){return e.product})).products,o=(0,y.d4)((function(e){return e.currency})),l=(0,y.d4)((function(e){return e.cart})).cartItems,d=(0,y.d4)((function(e){return e.wishlist})).wishlistItems,m=(0,y.d4)((function(e){return e.compare})).compareItems,f=(0,A.d$)(c,r,n,a);return(0,u.jsx)(i.Fragment,{children:null===f||void 0===f?void 0:f.map((function(e){return(0,u.jsx)("div",{className:"col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12",children:(0,u.jsx)(B,{sliderClassName:s,spaceBottomClass:t,product:e,currency:o,cartItem:l.find((function(s){return s.id===e.id})),wishlistItem:d.find((function(s){return s.id===e.id})),compareItem:m.find((function(s){return s.id===e.id}))})},e.id)}))})},E=function(e){var s=e.spaceTopClass,t=e.spaceBottomClass,i=e.category;return(0,u.jsx)("div",{className:(0,c.A)("product-area hm5-section-padding",s,t),children:(0,u.jsx)("div",{className:"container-fluid",children:(0,u.jsx)("div",{className:"row",children:(0,u.jsx)(P,{category:i,limit:12,spaceBottomClass:"mb-20"})})})})},T=function(){return(0,u.jsxs)(i.Fragment,{children:[(0,u.jsx)(r.A,{titleTemplate:"Fashion Home",description:"Fashion home of Stickerify"}),(0,u.jsxs)(x,{children:[(0,u.jsx)(b,{}),(0,u.jsx)(E,{spaceTopClass:"pt-100",spaceBottomClass:"pb-100",category:"accessories"}),(0,u.jsx)(w.A,{spaceBottomClass:"pb-100"})]})]})}},3854:function(e,s,t){"use strict";var i=t(3024),r=t(5475),n=t(579);s.A=function(e){var s=e.backgroundColorClass,t=e.copyrightColorClass,a=e.spaceLeftClass,c=e.spaceRightClass,o=e.footerTopBackgroundColorClass,l=e.footerTopSpaceTopClass,d=e.footerTopSpaceBottomClass,u=e.footerLogo,m=e.backgroundImage;return(0,n.jsxs)("footer",{className:(0,i.A)("footer-area",s,a,c,m&&"bg-img"),style:{backgroundImage:" ".concat(m?"url(".concat(""+m,")"):"url()")},children:[(0,n.jsx)("div",{className:(0,i.A)("footer-top text-center",o,l,d),children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)("div",{className:"footer-logo",children:(0,n.jsx)(r.N_,{to:"",children:(0,n.jsx)("img",{alt:"",src:""+"".concat(u||"/assets/img/logo/logo.png")})})}),(0,n.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"}),(0,n.jsx)("div",{className:"footer-social",children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"//www.facebook.com",children:(0,n.jsx)("i",{className:"fa fa-facebook"})})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"//www.dribbble.com",children:(0,n.jsx)("i",{className:"fa fa-dribbble"})})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"//www.pinterest.com",children:(0,n.jsx)("i",{className:"fa fa-pinterest-p"})})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"//www.twitter.com",children:(0,n.jsx)("i",{className:"fa fa-twitter"})})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"//www.linkedin.com",children:(0,n.jsx)("i",{className:"fa fa-linkedin"})})})]})})]})}),(0,n.jsx)("div",{className:"footer-bottom text-center",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:(0,i.A)("copyright-2",t),children:(0,n.jsxs)("p",{children:["\xa9 ",(new Date).getFullYear()," ",(0,n.jsx)("a",{href:"//www.hasthemes.com",rel:"noopener noreferrer",target:"_blank",children:"Stickerify"}),". All Rights Reserved."]})})})})]})}},8902:function(e,s,t){"use strict";var i=t(3024),r=t(4943),n=t(579);s.A=function(e){var s=e.spaceTopClass,t=e.spaceBottomClass,a=e.subscribeBtnClass;return(0,n.jsx)("div",{className:(0,i.A)("subscribe-area-3",s,t),children:(0,n.jsx)("div",{className:"container-fluid",children:(0,n.jsx)("div",{className:"row",children:(0,n.jsx)("div",{className:"col-xl-5 col-lg-7 col-md-10 ms-auto me-auto",children:(0,n.jsxs)("div",{className:"subscribe-style-3 text-center",children:[(0,n.jsx)("h2",{children:"Subscribe "}),(0,n.jsx)("p",{children:"Subscribe to our newsletter to receive news on update"}),(0,n.jsx)(r.A,{mailchimpUrl:"//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef",spaceTopClass:"mt-35",subscribeBtnClass:a})]})})})})})}},6218:function(e,s,t){"use strict";var i=t(5043);s.A=function(e){var s=(0,i.useRef)(e);return(0,i.useEffect)((function(){s.current=e}),[e]),s}},8894:function(e,s,t){"use strict";t.d(s,{A:function(){return n}});var i=t(5043),r=t(6218);function n(e){var s=(0,r.A)(e);return(0,i.useCallback)((function(){return s.current&&s.current.apply(s,arguments)}),[s])}},2677:function(e,s,t){"use strict";var i=t(5043),r="undefined"!==typeof t.g&&t.g.navigator&&"ReactNative"===t.g.navigator.product,n="undefined"!==typeof document;s.A=n||r?i.useLayoutEffect:i.useEffect},2665:function(e,s,t){"use strict";t.d(s,{A:function(){return r}});var i=t(5043);function r(){var e=(0,i.useRef)(!0),s=(0,i.useRef)((function(){return e.current}));return(0,i.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),s.current}},4696:function(e,s,t){"use strict";t.d(s,{A:function(){return r}});var i=t(5043);function r(e){var s=(0,i.useRef)(null);return(0,i.useEffect)((function(){s.current=e})),s.current}},7852:function(e,s,t){"use strict";t.d(s,{Wz:function(){return c},oU:function(){return a}});var i=t(5043),r=(t(579),["xxl","xl","lg","md","sm","xs"]),n=i.createContext({prefixes:{},breakpoints:r,minBreakpoint:"xs"});n.Consumer,n.Provider;function a(e,s){var t=(0,i.useContext)(n).prefixes;return e||t[s]||s}function c(){return"rtl"===(0,i.useContext)(n).dir}},8139:function(e,s){var t;!function(){"use strict";var i={}.hasOwnProperty;function r(){for(var e="",s=0;s<arguments.length;s++){var t=arguments[s];t&&(e=a(e,n(t)))}return e}function n(e){if("string"===typeof e||"number"===typeof e)return e;if("object"!==typeof e)return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var s="";for(var t in e)i.call(e,t)&&e[t]&&(s=a(s,t));return s}function a(e,s){return s?e?e+" "+s:e+s:e}e.exports?(r.default=r,e.exports=r):void 0===(t=function(){return r}.apply(s,[]))||(e.exports=t)}()},45:function(e,s,t){"use strict";t.d(s,{A:function(){return r}});var i=t(8587);function r(e,s){if(null==e)return{};var t,r,n=(0,i.A)(e,s);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],s.includes(t)||{}.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}},8587:function(e,s,t){"use strict";function i(e,s){if(null==e)return{};var t={};for(var i in e)if({}.hasOwnProperty.call(e,i)){if(s.includes(i))continue;t[i]=e[i]}return t}t.d(s,{A:function(){return i}})}}]);
//# sourceMappingURL=5543.e05e065b.chunk.js.map