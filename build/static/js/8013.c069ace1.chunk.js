"use strict";(self.webpackChunkStickerify_react=self.webpackChunkStickerify_react||[]).push([[8013],{1310:function(e,s,i){var a=i(5544),c=i(5043),t=i(3024),r=i(5475),n=i(9456),l=i(5913),o=i(2821),d=i(425),m=i(5721),u=i(4990),h=i(579);s.A=function(e){var s=e.product,i=e.currency,x=e.cartItem,j=e.wishlistItem,p=e.compareItem,f=e.spaceBottomClass,v=(0,c.useState)(!1),b=(0,a.A)(v,2),g=b[0],N=b[1],w=(0,o.do)(s.price,s.discount),A=+(s.price*i.currencyRate).toFixed(2),k=+(w*i.currencyRate).toFixed(2),y=(0,n.wA)();return(0,h.jsxs)(c.Fragment,{children:[(0,h.jsxs)("div",{className:(0,t.A)("product-wrap",f),children:[(0,h.jsxs)("div",{className:"product-img",children:[(0,h.jsxs)(r.N_,{to:"/product/"+s.id,children:[(0,h.jsx)("img",{className:"default-img",src:""+s.image[0],alt:""}),s.image.length>1?(0,h.jsx)("img",{className:"hover-img",src:""+s.image[1],alt:""}):""]}),s.discount||s.new?(0,h.jsxs)("div",{className:"product-img-badges",children:[s.discount?(0,h.jsxs)("span",{className:"pink",children:["-",s.discount,"%"]}):"",s.new?(0,h.jsx)("span",{className:"purple",children:"New"}):""]}):"",(0,h.jsxs)("div",{className:"product-action",children:[(0,h.jsx)("div",{className:"pro-same-action pro-wishlist",children:(0,h.jsx)("button",{className:void 0!==j?"active":"",disabled:void 0!==j,title:void 0!==j?"Added to wishlist":"Add to wishlist",onClick:function(){return y((0,u.U4)(s))},children:(0,h.jsx)("i",{className:"pe-7s-like"})})}),(0,h.jsx)("div",{className:"pro-same-action pro-cart",children:s.affiliateLink?(0,h.jsxs)("a",{href:s.affiliateLink,rel:"noopener noreferrer",target:"_blank",children:[" ","Buy now"," "]}):s.variation&&s.variation.length>=1?(0,h.jsx)(r.N_,{to:"".concat("","/product/").concat(s.id),children:"Select Option"}):s.stock&&s.stock>0?(0,h.jsxs)("button",{onClick:function(){return y((0,m.bE)(s))},className:void 0!==x&&x.quantity>0?"active":"",disabled:void 0!==x&&x.quantity>0,title:void 0!==x?"Added to cart":"Add to cart",children:[" ",(0,h.jsx)("i",{className:"pe-7s-cart"})," ",void 0!==x&&x.quantity>0?"Added":"Add to cart"]}):(0,h.jsx)("button",{disabled:!0,className:"active",children:"Out of Stock"})}),(0,h.jsx)("div",{className:"pro-same-action pro-quickview",children:(0,h.jsx)("button",{title:"Quick View",onClick:function(){return N(!0)},children:(0,h.jsx)("i",{className:"pe-7s-look"})})})]})]}),(0,h.jsxs)("div",{className:"product-content text-center",children:[(0,h.jsx)("h3",{children:(0,h.jsx)(r.N_,{to:"/product/"+s.id,children:s.name})}),s.rating&&s.rating>0?(0,h.jsx)("div",{className:"product-rating",children:(0,h.jsx)(l.A,{ratingValue:s.rating})}):"",(0,h.jsx)("div",{className:"product-price",children:null!==w?(0,h.jsxs)(c.Fragment,{children:[(0,h.jsx)("span",{children:i.currencySymbol+k})," ",(0,h.jsx)("span",{className:"old",children:i.currencySymbol+A})]}):(0,h.jsxs)("span",{children:[i.currencySymbol+A," "]})})]})]}),(0,h.jsx)(d.A,{show:g,onHide:function(){return N(!1)},product:s,currency:i,discountedPrice:w,finalProductPrice:A,finalDiscountedPrice:k,wishlistItem:j,compareItem:p})]})}},1600:function(e,s,i){var a=i(3024),c=i(579);s.A=function(e){var s=e.spaceTopClass,i=e.spaceBottomClass;return(0,c.jsx)("div",{className:(0,a.A)("welcome-area",s,i),children:(0,c.jsx)("div",{className:"container",children:(0,c.jsxs)("div",{className:"welcome-content text-center",children:[(0,c.jsx)("h5",{children:"Who Are We"}),(0,c.jsx)("h1",{children:"Welcome To Stickerify"}),(0,c.jsxs)("p",{children:["Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labor et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo consequat irure"," "]})]})})})}},8013:function(e,s,i){i.r(s),i.d(s,{default:function(){return y}});var a=i(5043),c=i(2168),t=i(4770),r=i(5896),n=i(6998),l=i(579),o=function(e){var s=e.children;return(0,l.jsxs)(a.Fragment,{children:[(0,l.jsx)(t.A,{layout:"container-fluid"}),s,(0,l.jsx)(r.A,{spaceTopClass:"pt-100",spaceBottomClass:"pb-70"}),(0,l.jsx)(n.A,{})]})},d=i(8906),m=i(7362),u=JSON.parse('[{"id":1,"title":"Welcome to Stickerify","subtitle":"30% off Summer Vacation","image":"/assets/img/slider/slider-5.jpg","url":"/shop-grid-standard"},{"id":2,"title":"Smart Products","subtitle":"40% off Summer Vacation","image":"/assets/img/slider/slider-5-1.jpg","url":"/shop-grid-standard"}]'),h=i(5475),x=function(e){var s=e.data;return(0,l.jsx)("div",{className:"slider-height-5 d-flex align-items-center bg-img",style:{backgroundImage:"url(".concat(""+s.image,")")},children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row",children:(0,l.jsx)("div",{className:"col-xl-12 col-lg-12 col-md-12 col-12",children:(0,l.jsxs)("div",{className:"slider-content-6 slider-animated-1 text-center",children:[(0,l.jsx)("h1",{className:"animated",children:s.title}),(0,l.jsx)("p",{className:"animated",children:s.subtitle}),(0,l.jsx)("div",{className:"slider-btn-5 btn-hover",children:(0,l.jsx)(h.N_,{className:"animated",to:""+s.url,children:"SHOP NOW"})})]})})})})})},j={effect:"fade",fadeEffect:{crossFade:!0},modules:[d._R],loop:!0,speed:1e3,navigation:!0,autoHeight:!1},p=function(){return(0,l.jsx)("div",{className:"slider-area",children:(0,l.jsx)("div",{className:"slider-active-2 nav-style-3",children:(0,l.jsx)(m.A,{options:j,className:"overflow-hidden",children:null===u||void 0===u?void 0:u.map((function(e,s){return(0,l.jsx)(m.q,{children:(0,l.jsx)(x,{data:e})},s)}))})})})},f=i(1600),v=i(3024),b=i(3702),g=i(8067),N=i(3590),w=function(e){var s=e.spaceTopClass,i=e.spaceBottomClass,a=e.bgColorClass,c=e.category;return(0,l.jsx)("div",{className:(0,v.A)("product-area",s,i,a),children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)(b.A.Container,{defaultActiveKey:"bestSeller",children:[(0,l.jsxs)(g.A,{variant:"pills",className:"product-tab-list pb-55 text-center",children:[(0,l.jsx)(g.A.Item,{children:(0,l.jsx)(g.A.Link,{eventKey:"newArrival",children:(0,l.jsx)("h4",{children:"New Arrivals"})})}),(0,l.jsx)(g.A.Item,{children:(0,l.jsx)(g.A.Link,{eventKey:"bestSeller",children:(0,l.jsx)("h4",{children:"Best Sellers"})})}),(0,l.jsx)(g.A.Item,{children:(0,l.jsx)(g.A.Link,{eventKey:"saleItems",children:(0,l.jsx)("h4",{children:"Sale Items"})})})]}),(0,l.jsxs)(b.A.Content,{children:[(0,l.jsx)(b.A.Pane,{eventKey:"newArrival",children:(0,l.jsx)("div",{className:"row",children:(0,l.jsx)(N.A,{category:c,type:"new",limit:8,spaceBottomClass:"mb-25"})})}),(0,l.jsx)(b.A.Pane,{eventKey:"bestSeller",children:(0,l.jsx)("div",{className:"row",children:(0,l.jsx)(N.A,{category:c,type:"bestSeller",limit:8,spaceBottomClass:"mb-25"})})}),(0,l.jsx)(b.A.Pane,{eventKey:"saleItems",children:(0,l.jsx)("div",{className:"row",children:(0,l.jsx)(N.A,{category:c,type:"saleItems",limit:8,spaceBottomClass:"mb-25"})})})]})]})})})},A=i(8902),k=i(6974),y=function(){return(0,l.jsxs)(a.Fragment,{children:[(0,l.jsx)(c.A,{titleTemplate:"Fashion Home",description:"Fashion home of Stickerify"}),(0,l.jsxs)(o,{children:[(0,l.jsx)(p,{}),(0,l.jsx)(f.A,{spaceTopClass:"pt-95",spaceBottomClass:"pb-90"}),(0,l.jsx)(w,{spaceBottomClass:"pb-70",category:"fashion",sectionTitle:!1}),(0,l.jsx)(A.A,{spaceBottomClass:"pb-100"}),(0,l.jsx)(k.A,{})]})]})}},4770:function(e,s,i){i.d(s,{A:function(){return h}});var a=i(5544),c=i(5043),t=i(3024),r=i(5475),n=i(6487),l=i(4993),o=i(579),d=function(){return(0,o.jsx)("div",{className:"side-social",children:(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:(0,o.jsx)("a",{className:"facebook",href:"//www.facebook.com",target:"_blank",rel:"noopener noreferrer",children:(0,o.jsx)("i",{className:"fa fa-facebook"})})}),(0,o.jsx)("li",{children:(0,o.jsx)("a",{className:"dribbble",href:"//www.dribbble.com",target:"_blank",rel:"noopener noreferrer",children:(0,o.jsx)("i",{className:"fa fa-dribbble"})})}),(0,o.jsx)("li",{children:(0,o.jsx)("a",{className:"pinterest",href:"//www.pinterest.com",target:"_blank",rel:"noopener noreferrer",children:(0,o.jsx)("i",{className:"fa fa-pinterest-p"})})}),(0,o.jsx)("li",{children:(0,o.jsx)("a",{className:"twitter",href:"//www.twitter.com",target:"_blank",rel:"noopener noreferrer",children:(0,o.jsx)("i",{className:"fa fa-twitter"})})}),(0,o.jsx)("li",{children:(0,o.jsx)("a",{className:"linkedin",href:"//www.linkedin.com",target:"_blank",rel:"noopener noreferrer",children:(0,o.jsx)("i",{className:"fa fa-linkedin"})})})]})})},m=i(3189),u=function(e){var s=e.activeState,i=e.getActiveState;return(0,o.jsxs)("div",{className:(0,t.A)("clickable-mainmenu",s?"inside":""),children:[(0,o.jsx)("div",{className:"clickable-mainmenu-icon",children:(0,o.jsx)("button",{className:"clickable-mainmenu-close",onClick:function(){return i(!1)},children:(0,o.jsx)("span",{className:"pe-7s-close"})})}),(0,o.jsx)("div",{className:"side-logo",children:(0,o.jsx)(r.N_,{to:"/",children:(0,o.jsx)("img",{alt:"",src:"/assets/img/logo/logo.png"})})}),(0,o.jsx)(m.A,{sidebarMenu:!0}),(0,o.jsx)(d,{})]})},h=function(e){var s=e.layout,i=e.headerPaddingClass,d=e.headerBgClass,m=(0,c.useState)(0),h=(0,a.A)(m,2),x=h[0],j=h[1],p=(0,c.useState)(0),f=(0,a.A)(p,2),v=f[0],b=f[1],g=(0,c.useState)(!1),N=(0,a.A)(g,2),w=N[0],A=N[1];(0,c.useEffect)((function(){var e=document.querySelector(".sticky-bar");return b(e.offsetTop),window.addEventListener("scroll",k),function(){window.removeEventListener("scroll",k)}}),[]);var k=function(){j(window.scrollY)};return(0,o.jsxs)("header",{className:(0,t.A)("header-area sticky-bar header-padding-3 header-res-padding clearfix transparent-bar header-hm-7",d,i,x>v&&"stick"),children:[(0,o.jsx)("div",{className:"container-fluid"===s?s:"container",children:(0,o.jsxs)("div",{className:"row",children:[(0,o.jsx)("div",{className:"col-xl-5 col-lg-6 d-none d-lg-block",children:(0,o.jsx)("div",{className:"clickable-menu clickable-mainmenu-active",children:(0,o.jsx)("button",{onClick:function(){A(!0)},children:(0,o.jsx)("i",{className:"pe-7s-menu"})})})}),(0,o.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-6 col-6",children:(0,o.jsxs)("div",{className:"logo text-center logo-hm5",children:[(0,o.jsx)(r.N_,{className:"sticky-none",to:"/",children:(0,o.jsx)("img",{alt:"",src:"assets/img/logo/logo-2.png"})}),(0,o.jsx)(r.N_,{className:"sticky-block",to:"/",children:(0,o.jsx)("img",{alt:"",src:"assets/img/logo/logo.png"})})]})}),(0,o.jsx)("div",{className:"col-xl-5 col-lg-4 col-md-6 col-6",children:(0,o.jsx)(n.A,{iconWhiteClass:"header-right-wrap-white"})})]})}),(0,o.jsx)(u,{activeState:w,getActiveState:function(e){A(e)}}),(0,o.jsx)(l.A,{})]})}},8902:function(e,s,i){var a=i(3024),c=i(4943),t=i(579);s.A=function(e){var s=e.spaceTopClass,i=e.spaceBottomClass,r=e.subscribeBtnClass;return(0,t.jsx)("div",{className:(0,a.A)("subscribe-area-3",s,i),children:(0,t.jsx)("div",{className:"container-fluid",children:(0,t.jsx)("div",{className:"row",children:(0,t.jsx)("div",{className:"col-xl-5 col-lg-7 col-md-10 ms-auto me-auto",children:(0,t.jsxs)("div",{className:"subscribe-style-3 text-center",children:[(0,t.jsx)("h2",{children:"Subscribe "}),(0,t.jsx)("p",{children:"Subscribe to our newsletter to receive news on update"}),(0,t.jsx)(c.A,{mailchimpUrl:"//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef",spaceTopClass:"mt-35",subscribeBtnClass:r})]})})})})})}},3590:function(e,s,i){var a=i(5043),c=i(9456),t=i(2821),r=i(1310),n=i(579);s.A=function(e){var s=e.spaceBottomClass,i=e.category,l=e.type,o=e.limit,d=(0,c.d4)((function(e){return e.product})).products,m=(0,c.d4)((function(e){return e.currency})),u=(0,c.d4)((function(e){return e.cart})).cartItems,h=(0,c.d4)((function(e){return e.wishlist})).wishlistItems,x=(0,c.d4)((function(e){return e.compare})).compareItems,j=(0,t.d$)(d,i,l,o);return(0,n.jsx)(a.Fragment,{children:null===j||void 0===j?void 0:j.map((function(e){return(0,n.jsx)("div",{className:"col-xl-3 col-md-6 col-lg-4 col-sm-6",children:(0,n.jsx)(r.A,{spaceBottomClass:s,product:e,currency:m,cartItem:u.find((function(s){return s.id===e.id})),wishlistItem:h.find((function(s){return s.id===e.id})),compareItem:x.find((function(s){return s.id===e.id}))})},e.id)}))})}}}]);
//# sourceMappingURL=8013.c069ace1.chunk.js.map