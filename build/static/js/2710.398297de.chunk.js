"use strict";(self.webpackChunkStickerify_react=self.webpackChunkStickerify_react||[]).push([[2710],{6801:function(e,s,i){var l=i(3024),n=i(5475),r=i(579);s.A=function(e){var s=e.footerLogo,i=e.spaceBottomClass,a=e.colorClass;return(0,r.jsxs)("div",{className:(0,l.A)("copyright",i,a),children:[(0,r.jsx)("div",{className:"footer-logo",children:(0,r.jsx)(n.N_,{to:"/",children:(0,r.jsx)("img",{alt:"",src:""+s})})}),(0,r.jsxs)("p",{children:["\xa9 ",(new Date).getFullYear()," ",(0,r.jsx)("a",{href:"https://hasthemes.com",rel:"noopener noreferrer",target:"_blank",children:"Stickerify"}),".",(0,r.jsx)("br",{})," All Rights Reserved"]})]})}},2304:function(e,s,i){i.d(s,{A:function(){return t}});var l=i(3024),n=i(9735),r=i(579),a=function(e){var s,i=e.status,l=e.message,n=e.onValidated;return(0,r.jsxs)("div",{className:"subscribe-form",children:[(0,r.jsxs)("div",{className:"mc-form",children:[(0,r.jsx)("div",{children:(0,r.jsx)("input",{id:"mc-form-email",className:"email",ref:function(e){return s=e},type:"email",placeholder:"Enter your email address..."})}),(0,r.jsx)("div",{className:"clear",children:(0,r.jsx)("button",{className:"button",onClick:function(){s&&s.value.indexOf("@")>-1&&n({EMAIL:s.value}),document.getElementById("mc-form-email").value=""},children:"SUBSCRIBE"})})]}),"sending"===i&&(0,r.jsx)("div",{style:{color:"#3498db",fontSize:"12px"},children:"sending..."}),"error"===i&&(0,r.jsx)("div",{style:{color:"#e74c3c",fontSize:"12px"},dangerouslySetInnerHTML:{__html:l}}),"success"===i&&(0,r.jsx)("div",{style:{color:"#2ecc71",fontSize:"12px"},dangerouslySetInnerHTML:{__html:l}})]})},c=function(e){var s=e.mailchimpUrl;return(0,r.jsx)("div",{children:(0,r.jsx)(n.A,{url:s,render:function(e){var s=e.subscribe,i=e.status,l=e.message;return(0,r.jsx)(a,{status:i,message:l,onValidated:function(e){return s(e)}})}})})},t=function(e){var s=e.spaceBottomClass,i=e.spaceLeftClass,n=e.sideMenu,a=e.colorClass,t=e.widgetColorClass;return(0,r.jsxs)("div",{className:(0,l.A)("footer-widget",s,n?"ml-ntv5":i,t),children:[(0,r.jsx)("div",{className:"footer-title",children:(0,r.jsx)("h3",{children:"SUBSCRIBE"})}),(0,r.jsxs)("div",{className:(0,l.A)("subscribe-style",a),children:[(0,r.jsx)("p",{children:"Get E-mail updates about our latest shop and special offers."}),(0,r.jsx)(c,{mailchimpUrl:"//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef"})]})]})}},3188:function(e,s,i){var l=i(3024),n=i(5475),r=i(579);s.A=function(e){var s=e.imageUrl,i=e.logoClass;return(0,r.jsx)("div",{className:(0,l.A)(i),children:(0,r.jsx)(n.N_,{to:"/",children:(0,r.jsx)("img",{alt:"",src:""+s})})})}},425:function(e,s,i){var l=i(9379),n=i(5544),r=i(5043),a=i(8906),c=i(5446),t=i(9456),o=i(5913),d=i(7362),u=i(2821),m=i(5721),h=i(4990),x=i(3492),j=i(579);s.A=function(e){var s=e.product,i=e.currency,p=e.discountedPrice,v=e.finalProductPrice,f=e.finalDiscountedPrice,N=e.show,g=e.onHide,b=e.wishlistItem,w=e.compareItem,A=(0,r.useState)(null),k=(0,n.A)(A,2),C=k[0],y=k[1],S=(0,t.wA)(),_=(0,t.d4)((function(e){return e.cart})).cartItems,z=(0,r.useState)(s.variation?s.variation[0].color:""),I=(0,n.A)(z,2),L=I[0],P=I[1],B=(0,r.useState)(s.variation?s.variation[0].size[0].name:""),E=(0,n.A)(B,2),q=E[0],U=E[1],F=(0,r.useState)(s.variation?s.variation[0].size[0].stock:s.stock),O=(0,n.A)(F,2),R=O[0],T=O[1],H=(0,r.useState)(1),M=(0,n.A)(H,2),V=M[0],D=M[1],W=(0,u.pQ)(_,s,L,q),Y={spaceBetween:10,loop:!0,effect:"fade",fadeEffect:{crossFade:!0},thumbs:{swiper:C},modules:[a._R,a.WO]},K={onSwiper:y,spaceBetween:10,slidesPerView:4,touchRatio:.2,freeMode:!0,loop:!0,slideToClickedSlide:!0,navigation:!0};return(0,j.jsxs)(c.A,{show:N,onHide:function(){y(null),g()},className:"product-quickview-modal-wrapper",children:[(0,j.jsx)(c.A.Header,{closeButton:!0}),(0,j.jsx)("div",{className:"modal-body",children:(0,j.jsxs)("div",{className:"row",children:[(0,j.jsxs)("div",{className:"col-md-5 col-sm-12 col-xs-12",children:[(0,j.jsx)("div",{className:"product-large-image-wrapper",children:(0,j.jsx)(d.A,{options:Y,children:s.image&&s.image.map((function(e,s){return(0,j.jsx)(d.q,{children:(0,j.jsx)("div",{className:"single-image",children:(0,j.jsx)("img",{src:""+e,className:"img-fluid",alt:"Product"})})},s)}))})}),(0,j.jsx)("div",{className:"product-small-image-wrapper mt-15",children:(0,j.jsx)(d.A,{options:K,children:s.image&&s.image.map((function(e,s){return(0,j.jsx)(d.q,{children:(0,j.jsx)("div",{className:"single-image",children:(0,j.jsx)("img",{src:""+e,className:"img-fluid",alt:""})})},s)}))})})]}),(0,j.jsx)("div",{className:"col-md-7 col-sm-12 col-xs-12",children:(0,j.jsxs)("div",{className:"product-details-content quickview-content",children:[(0,j.jsx)("h2",{children:s.name}),(0,j.jsx)("div",{className:"product-details-price",children:null!==p?(0,j.jsxs)(r.Fragment,{children:[(0,j.jsx)("span",{children:i.currencySymbol+f})," ",(0,j.jsx)("span",{className:"old",children:i.currencySymbol+v})]}):(0,j.jsxs)("span",{children:[i.currencySymbol+v," "]})}),s.rating&&s.rating>0?(0,j.jsx)("div",{className:"pro-details-rating-wrap",children:(0,j.jsx)("div",{className:"pro-details-rating",children:(0,j.jsx)(o.A,{ratingValue:s.rating})})}):"",(0,j.jsx)("div",{className:"pro-details-list",children:(0,j.jsx)("p",{children:s.shortDescription})}),s.variation?(0,j.jsxs)("div",{className:"pro-details-size-color",children:[(0,j.jsxs)("div",{className:"pro-details-color-wrap",children:[(0,j.jsx)("span",{children:"Color"}),(0,j.jsx)("div",{className:"pro-details-color-content",children:s.variation.map((function(e,s){return(0,j.jsxs)("label",{className:"pro-details-color-content--single ".concat(e.color),children:[(0,j.jsx)("input",{type:"radio",value:e.color,name:"product-color",checked:e.color===L?"checked":"",onChange:function(){P(e.color),U(e.size[0].name),T(e.size[0].stock),D(1)}}),(0,j.jsx)("span",{className:"checkmark"})]},s)}))})]}),(0,j.jsxs)("div",{className:"pro-details-size",children:[(0,j.jsx)("span",{children:"Size"}),(0,j.jsx)("div",{className:"pro-details-size-content",children:s.variation&&s.variation.map((function(e){return e.color===L?e.size.map((function(e,s){return(0,j.jsxs)("label",{className:"pro-details-size-content--single",children:[(0,j.jsx)("input",{type:"radio",value:e.name,checked:e.name===q?"checked":"",onChange:function(){U(e.name),T(e.stock),D(1)}}),(0,j.jsx)("span",{className:"size-name",children:e.name})]},s)})):""}))})]})]}):"",s.affiliateLink?(0,j.jsx)("div",{className:"pro-details-quality",children:(0,j.jsx)("div",{className:"pro-details-cart btn-hover",children:(0,j.jsx)("a",{href:s.affiliateLink,rel:"noopener noreferrer",target:"_blank",children:"Buy Now"})})}):(0,j.jsxs)("div",{className:"pro-details-quality",children:[(0,j.jsxs)("div",{className:"cart-plus-minus",children:[(0,j.jsx)("button",{onClick:function(){return D(V>1?V-1:1)},className:"dec qtybutton",children:"-"}),(0,j.jsx)("input",{className:"cart-plus-minus-box",type:"text",value:V,readOnly:!0}),(0,j.jsx)("button",{onClick:function(){return D(V<R-W?V+1:V)},className:"inc qtybutton",children:"+"})]}),(0,j.jsx)("div",{className:"pro-details-cart btn-hover",children:R&&R>0?(0,j.jsxs)("button",{onClick:function(){return S((0,m.bE)((0,l.A)((0,l.A)({},s),{},{quantity:V,selectedProductColor:L||(s.selectedProductColor?s.selectedProductColor:null),selectedProductSize:q||(s.selectedProductSize?s.selectedProductSize:null)})))},disabled:W>=R,children:[" ","Add To Cart"," "]}):(0,j.jsx)("button",{disabled:!0,children:"Out of Stock"})}),(0,j.jsx)("div",{className:"pro-details-wishlist",children:(0,j.jsx)("button",{className:void 0!==b?"active":"",disabled:void 0!==b,title:void 0!==b?"Added to wishlist":"Add to wishlist",onClick:function(){return S((0,h.U4)(s))},children:(0,j.jsx)("i",{className:"pe-7s-like"})})}),(0,j.jsx)("div",{className:"pro-details-compare",children:(0,j.jsx)("button",{className:void 0!==w?"active":"",disabled:void 0!==w,title:void 0!==w?"Added to compare":"Add to compare",onClick:function(){return S((0,x.wL)(s))},children:(0,j.jsx)("i",{className:"pe-7s-shuffle"})})})]})]})})]})})]})}},5913:function(e,s,i){var l=i(5043),n=i(579);s.A=function(e){for(var s=e.ratingValue,i=[],r=0;r<5;r++)i.push((0,n.jsx)("i",{className:"fa fa-star-o"},r));if(s&&s>0)for(var a=0;a<=s-1;a++)i[a]=(0,n.jsx)("i",{className:"fa fa-star-o yellow"},a);return(0,n.jsx)(l.Fragment,{children:i})}},6998:function(e,s,i){i.d(s,{A:function(){return c}});var l=i(5544),n=i(5043),r=function(){var e=(0,n.useState)(!1),s=(0,l.A)(e,2),i=s[0],r=s[1];return(0,n.useEffect)((function(){var e=function(){var e=window.pageYOffset;r(e>300)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[i]),{stick:i,onClickHandler:function(){window.scrollTo({top:0,behavior:"smooth"})}}},a=i(579),c=function(){var e=r(),s=e.stick,i=e.onClickHandler;return s?(0,a.jsx)("button",{"aria-label":"Scroll to top",type:"button",className:"scroll-top",onClick:i,children:(0,a.jsx)("i",{className:"fa fa-angle-double-up"})}):null}},5571:function(e,s,i){var l=i(3024),n=i(579);s.A=function(e){var s=e.titleText,i=e.subtitleText,r=e.subtitleColorClass,a=e.positionClass,c=e.spaceClass,t=e.borderClass;return(0,n.jsxs)("div",{className:(0,l.A)("section-title",a,c,t),children:[(0,n.jsx)("h2",{children:s}),(0,n.jsx)("p",{className:(0,l.A)(r),children:i})]})}},7362:function(e,s,i){i.d(s,{q:function(){return t.qr}});var l=i(436),n=i(9379),r=i(5043),a=i(3024),c=i(8906),t=i(4671),o=i(579),d=(0,r.forwardRef)((function(e,s){var i=e.options,r=e.prevIcon,d=e.nextIcon,u=e.children,m=e.className,h=e.navClass,x=void 0!==(null===i||void 0===i?void 0:i.modules)?i.modules:[],j="prev-".concat(h||"swiper-nav"),p="next-".concat(h||"swiper-nav"),v=(0,n.A)((0,n.A)({slidesPerView:1,spaceBetween:0,loop:!1,autoplay:!(null===i||void 0===i||!i.autoplay)&&{delay:2500,disableOnInteraction:!1},watchSlidesProgress:!0,autoHeight:!0,breakpoints:{}},i),{},{modules:[c.Vx,c.dK,c.Jq,c.Ij].concat((0,l.A)(x)),navigation:!(null===i||void 0===i||!i.navigation)&&{prevEl:".".concat(j),nextEl:".".concat(p)},pagination:!(null===i||void 0===i||!i.pagination)&&{clickable:!0}});return(0,o.jsxs)("div",{className:(0,a.A)("swiper-wrap",m),ref:s,children:[(0,o.jsx)(t.RC,(0,n.A)((0,n.A)({},v),{},{children:u})),(null===v||void 0===v?void 0:v.navigation)&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("button",{type:"button",className:"swiper-button-prev ht-swiper-button-nav ".concat(j),children:(0,o.jsx)("i",{className:(0,a.A)(r,"icon")})}),(0,o.jsx)("button",{type:"button",className:"swiper-button-next ht-swiper-button-nav ".concat(p),children:(0,o.jsx)("i",{className:(0,a.A)(d,"icon")})})]})]})}));d.defaultProps={prevIcon:"pe-7s-angle-left",nextIcon:"pe-7s-angle-right",navStyle:1,dotStyle:1},s.A=d},5896:function(e,s,i){var l=i(3024),n=i(5475),r=(i(6801),i(2304)),a=i(579);s.A=function(e){var s=e.backgroundColorClass,i=e.spaceTopClass,c=e.spaceBottomClass,t=e.spaceLeftClass,o=e.spaceRightClass,d=e.containerClass,u=e.extraFooterClass,m=e.sideMenu;return(0,a.jsx)("footer",{className:(0,l.A)("footer-area",s,i,c,u,t,o),children:(0,a.jsx)("div",{className:"".concat(d||"container"),children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"".concat(m?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,a.jsx)("h1",{style:{fontWeight:600},children:"Stickerify"})}),(0,a.jsx)("div",{className:"".concat(m?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,a.jsxs)("div",{className:"footer-widget mb-30 ml-30",children:[(0,a.jsx)("div",{className:"footer-title",children:(0,a.jsx)("h3",{children:"ABOUT US"})}),(0,a.jsx)("div",{className:"footer-list",children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(n.N_,{to:"/about",children:"About us"})}),(0,a.jsx)("li",{children:(0,a.jsx)(n.N_,{to:"#/",children:"Store location"})}),(0,a.jsx)("li",{children:(0,a.jsx)(n.N_,{to:"/contact",children:"Contact"})}),(0,a.jsx)("li",{children:(0,a.jsx)(n.N_,{to:"#/",children:"Orders tracking"})})]})})]})}),(0,a.jsx)("div",{className:"".concat(m?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,a.jsxs)("div",{className:"".concat(m?"footer-widget mb-30 ml-95":"footer-widget mb-30 ml-50"),children:[(0,a.jsx)("div",{className:"footer-title",children:(0,a.jsx)("h3",{children:"USEFUL LINKS"})}),(0,a.jsx)("div",{className:"footer-list",children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{style:{fontWeight:"bold",textDecoration:"underline"},children:(0,a.jsx)(n.N_,{to:"/return",children:"Returns"})}),(0,a.jsx)("li",{children:(0,a.jsx)(n.N_,{to:"#/",children:"Support Policy"})}),(0,a.jsx)("li",{children:(0,a.jsx)(n.N_,{to:"#/",children:"Size guide"})}),(0,a.jsx)("li",{children:(0,a.jsx)(n.N_,{to:"#/",children:"FAQs"})})]})})]})}),(0,a.jsx)("div",{className:"".concat(m?"col-xl-3 col-sm-4":"col-lg-2 col-sm-6"),children:(0,a.jsxs)("div",{className:"".concat(m?"footer-widget mb-30 ml-145":"footer-widget mb-30 ml-75"),children:[(0,a.jsx)("div",{className:"footer-title",children:(0,a.jsx)("h3",{children:"FOLLOW US"})}),(0,a.jsx)("div",{className:"footer-list",children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"//www.facebook.com",target:"_blank",rel:"noopener noreferrer",children:"Facebook"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"//www.twitter.com",target:"_blank",rel:"noopener noreferrer",children:"Twitter"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"//www.instagram.com",target:"_blank",rel:"noopener noreferrer",children:"Instagram"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"//www.youtube.com",target:"_blank",rel:"noopener noreferrer",children:"Youtube"})})]})})]})}),(0,a.jsx)("div",{className:"".concat(m?"col-xl-3 col-sm-8":"col-lg-4 col-sm-6"),children:(0,a.jsx)(r.A,{spaceBottomClass:"mb-30",spaceLeftClass:"ml-70",sideMenu:m})})]})})})}}}]);
//# sourceMappingURL=2710.398297de.chunk.js.map