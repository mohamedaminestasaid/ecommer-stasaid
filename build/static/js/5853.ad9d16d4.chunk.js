"use strict";(self.webpackChunkStickerify_react=self.webpackChunkStickerify_react||[]).push([[5853],{3813:function(e,s,i){var a=i(5475),n=i(579);s.A=function(e){var s=e.singlePost;return(0,n.jsxs)("div",{className:"blog-wrap mb-30 scroll-zoom",children:[(0,n.jsxs)("div",{className:"blog-img",children:[(0,n.jsx)(a.N_,{to:""+s.url,children:(0,n.jsx)("img",{src:""+s.image,alt:""})}),(0,n.jsx)("div",{className:"blog-category-names",children:s.category.map((function(e,s){return(0,n.jsx)("span",{className:"purple",children:e},s)}))})]}),(0,n.jsx)("div",{className:"blog-content-wrap",children:(0,n.jsxs)("div",{className:"blog-content text-center",children:[(0,n.jsx)("h3",{children:(0,n.jsx)(a.N_,{to:""+s.url,children:s.title})}),(0,n.jsxs)("span",{children:["By"," ",(0,n.jsx)(a.N_,{to:""+s.authorUrl,children:s.author})]})]})})]})}},3468:function(e,s,i){var a=i(9456),n=i(4117),r=i(1682),t=i(579);s.A=function(e){var s=e.currency,i=(0,n.Bd)().i18n,c=(0,a.wA)(),l=function(e){var s=e.target.value;i.changeLanguage(s)},d=function(e){var s=e.target.value;c((0,r.M)(s))};return(0,t.jsxs)("div",{className:"language-currency-wrap",children:[(0,t.jsxs)("div",{className:"same-language-currency language-style",children:[(0,t.jsxs)("span",{children:["en"===i.resolvedLanguage?"English":"fn"===i.resolvedLanguage?"French":"de"===i.resolvedLanguage?"Germany":""," ",(0,t.jsx)("i",{className:"fa fa-angle-down"})]}),(0,t.jsx)("div",{className:"lang-car-dropdown",children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)("button",{value:"en",onClick:function(e){return l(e)},children:"English"})}),(0,t.jsx)("li",{children:(0,t.jsx)("button",{value:"fn",onClick:function(e){return l(e)},children:"French"})}),(0,t.jsx)("li",{children:(0,t.jsx)("button",{value:"de",onClick:function(e){return l(e)},children:"Germany"})})]})})]}),(0,t.jsxs)("div",{className:"same-language-currency use-style",children:[(0,t.jsxs)("span",{children:[s.currencyName," ",(0,t.jsx)("i",{className:"fa fa-angle-down"})]}),(0,t.jsx)("div",{className:"lang-car-dropdown",children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)("button",{value:"USD",onClick:function(e){return d(e)},children:"USD"})}),(0,t.jsx)("li",{children:(0,t.jsx)("button",{value:"EUR",onClick:function(e){return d(e)},children:"EUR"})}),(0,t.jsx)("li",{children:(0,t.jsx)("button",{value:"GBP",onClick:function(e){return d(e)},children:"GBP"})})]})})]}),(0,t.jsx)("div",{className:"same-language-currency"})]})}},448:function(e,s,i){var a=i(5544),n=i(5043),r=i(3024),t=i(5475),c=i(9456),l=i(2821),d=i(425),o=i(5721),m=i(4990),u=i(3492),h=i(579);s.A=function(e){var s=e.product,i=e.currency,x=e.cartItem,p=e.wishlistItem,j=e.compareItem,g=e.spaceBottomClass,v=e.colorClass,f=e.titlePriceClass,b=(0,n.useState)(!1),N=(0,a.A)(b,2),y=N[0],C=N[1],w=(0,l.do)(s.price,s.discount),A=+(s.price*i.currencyRate).toFixed(2),k=+(w*i.currencyRate).toFixed(2),S=(0,c.wA)();return(0,h.jsxs)(n.Fragment,{children:[(0,h.jsxs)("div",{className:(0,r.A)("product-wrap-2",g,v),children:[(0,h.jsxs)("div",{className:"product-img",children:[(0,h.jsxs)(t.N_,{to:"/product/"+s.id,children:[(0,h.jsx)("img",{className:"default-img",src:""+s.image[0],alt:""}),s.image.length>1?(0,h.jsx)("img",{className:"hover-img",src:""+s.image[1],alt:""}):""]}),s.discount||s.new?(0,h.jsxs)("div",{className:"product-img-badges",children:[s.discount?(0,h.jsxs)("span",{className:"pink",children:["-",s.discount,"%"]}):"",s.new?(0,h.jsx)("span",{className:"purple",children:"New"}):""]}):"",(0,h.jsxs)("div",{className:"product-action-2",children:[s.affiliateLink?(0,h.jsxs)("a",{href:s.affiliateLink,rel:"noopener noreferrer",target:"_blank",title:"Buy now",children:[" ",(0,h.jsx)("i",{className:"fa fa-shopping-cart"})," "]}):s.variation&&s.variation.length>=1?(0,h.jsx)(t.N_,{to:"".concat("","/product/").concat(s.id),title:"Select options",children:(0,h.jsx)("i",{className:"fa fa-cog"})}):s.stock&&s.stock>0?(0,h.jsxs)("button",{onClick:function(){return S((0,o.bE)(s))},className:void 0!==x&&x.quantity>0?"active":"",disabled:void 0!==x&&x.quantity>0,title:void 0!==x?"Added to cart":"Add to cart",children:[" ",(0,h.jsx)("i",{className:"fa fa-shopping-cart"})," "]}):(0,h.jsx)("button",{disabled:!0,className:"active",title:"Out of stock",children:(0,h.jsx)("i",{className:"fa fa-shopping-cart"})}),(0,h.jsx)("button",{onClick:function(){return C(!0)},title:"Quick View",children:(0,h.jsx)("i",{className:"fa fa-eye"})}),(0,h.jsx)("button",{className:void 0!==j?"active":"",disabled:void 0!==j,title:void 0!==j?"Added to compare":"Add to compare",onClick:function(){return S((0,u.wL)(s))},children:(0,h.jsx)("i",{className:"fa fa-retweet"})})]})]}),(0,h.jsxs)("div",{className:"product-content-2",children:[(0,h.jsxs)("div",{className:"title-price-wrap-2 ".concat(f||""),children:[(0,h.jsx)("h3",{children:(0,h.jsx)(t.N_,{to:"/product/"+s.id,children:s.name})}),(0,h.jsx)("div",{className:"price-2",children:null!==w?(0,h.jsxs)(n.Fragment,{children:[(0,h.jsx)("span",{children:i.currencySymbol+k})," ",(0,h.jsx)("span",{className:"old",children:i.currencySymbol+A})]}):(0,h.jsxs)("span",{children:[i.currencySymbol+A," "]})})]}),(0,h.jsx)("div",{className:"pro-wishlist-2",children:(0,h.jsx)("button",{className:void 0!==p?"active":"",disabled:void 0!==p,title:void 0!==p?"Added to wishlist":"Add to wishlist",onClick:function(){return S((0,m.U4)(s))},children:(0,h.jsx)("i",{className:"fa fa-heart-o"})})})]})]}),(0,h.jsx)(d.A,{show:y,onHide:function(){return C(!1)},product:s,currency:i,discountedPrice:w,finalProductPrice:A,finalDiscountedPrice:k,wishlistItem:p,compareItem:j})]})}},8062:function(e,s,i){var a=i(5043),n=i(7766),r=i(5896),t=i(6998),c=i(579);s.A=function(e){var s=e.children,i=e.headerContainerClass,l=e.headerTop,d=e.headerPaddingClass,o=e.headerPositionClass;return(0,c.jsxs)(a.Fragment,{children:[(0,c.jsx)(n.A,{layout:i,top:l,headerPaddingClass:d,headerPositionClass:o}),s,(0,c.jsx)(r.A,{backgroundColorClass:"bg-gray",spaceTopClass:"pt-100",spaceBottomClass:"pb-70"}),(0,c.jsx)(t.A,{})]})}},5853:function(e,s,i){i.r(s),i.d(s,{default:function(){return E}});var a=i(5043),n=i(2168),r=i(8062),t=i(8906),c=i(7362),l=JSON.parse('[{"id":1,"title":"Covid - 19 Collection","subtitle":"Medicine & PPE Stay Safe","image":"/assets/img/slider/slider-26.jpg","url":"/shop-grid-standard"},{"id":2,"title":"Covid - 19 Collection","subtitle":"Medicine & PPE Stay Safe","image":"/assets/img/slider/slider-27.jpg","url":"/shop-grid-standard"}]'),d=i(5475),o=i(579),m=function(e){var s=e.data;return(0,o.jsx)("div",{className:"single-slider-2 slider-height-2 d-flex align-items-center bg-img",style:{backgroundImage:"url(".concat(""+s.image,")")},children:(0,o.jsx)("div",{className:"container",children:(0,o.jsx)("div",{className:"row",children:(0,o.jsx)("div",{className:"col-xl-6 col-lg-7 col-md-8 col-12",children:(0,o.jsxs)("div",{className:"slider-content-medical slider-content-2 slider-content-2--white slider-animated-1",children:[(0,o.jsx)("h3",{className:"animated no-style",children:s.title}),(0,o.jsx)("h1",{className:"animated",dangerouslySetInnerHTML:{__html:s.subtitle}}),(0,o.jsx)("div",{className:"slider-btn-medical btn-hover",children:(0,o.jsx)(d.N_,{className:"animated",to:""+s.url,children:"SHOP NOW"})})]})})})})})},u={effect:"fade",fadeEffect:{crossFade:!0},modules:[t._R],loop:!0,speed:1e3,navigation:!0,autoHeight:!1},h=function(){return(0,o.jsx)("div",{className:"slider-area",children:(0,o.jsx)("div",{className:"slider-active nav-style-1",children:l&&(0,o.jsx)(c.A,{options:u,children:null===l||void 0===l?void 0:l.map((function(e,s){return(0,o.jsx)(c.q,{children:(0,o.jsx)(m,{data:e})},s)}))})})})},x=i(3024),p=JSON.parse('[{"id":1,"image":"/assets/img/banner/banner-40.png","title":"Covid - 19","subtitle":"Medicine <br>& Equipment","text":"20% OFF","link":"/shop-grid-standard"},{"id":2,"image":"/assets/img/banner/banner-41.png","title":"Covid - 19","subtitle":"Medix Mask <br>& Sanitizer","text":"30% OFF","link":"/shop-grid-standard"},{"id":3,"image":"/assets/img/banner/banner-42.png","title":"Covid - 19","subtitle":"Hand Gloves <br>& Sanitizer","text":"40% OFF","link":"/shop-grid-standard"}]'),j=function(e){var s=e.data,i=e.spaceBottomClass;return(0,o.jsxs)("div",{className:(0,x.A)("single-banner",i),children:[(0,o.jsx)(d.N_,{to:""+s.link,children:(0,o.jsx)("img",{src:""+s.image,alt:""})}),(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{className:"banner-content-33",children:[(0,o.jsx)("h3",{children:s.title}),(0,o.jsx)("h2",{dangerouslySetInnerHTML:{__html:s.subtitle}})]}),(0,o.jsx)("div",{className:"banner-33-offer",children:(0,o.jsx)("h2",{children:s.text})})]})]})},g=function(e){var s=e.spaceTopClass,i=e.spaceBottomClass;return(0,o.jsx)("div",{className:(0,x.A)("banner-area hm9-section-padding",s,i),children:(0,o.jsx)("div",{className:"container-fluid",children:(0,o.jsx)("div",{className:"row",children:null===p||void 0===p?void 0:p.map((function(e,s){return(0,o.jsx)("div",{className:"col-lg-4",children:(0,o.jsx)(j,{data:e,spaceBottomClass:"mb-30"})},s)}))})})})},v=JSON.parse('[{"id":1,"image":"/assets/img/icon-img/support-1.png","title":"Free Shipping","subtitle":"ALL ORDER OVER $30"},{"id":2,"image":"/assets/img/icon-img/support-2.png","title":"Online support","subtitle":"SUPPORT 24/7"},{"id":3,"image":"/assets/img/icon-img/support-3.png","title":"100% money back","subtitle":"100% SECURITY"}]'),f=function(e){var s=e.data,i=e.spaceBottomClass;return(0,o.jsxs)("div",{className:(0,x.A)("support-wrap-4",i),children:[(0,o.jsx)("div",{className:"support-icon-4",children:(0,o.jsx)("img",{className:"animated",src:""+s.image,alt:""})}),(0,o.jsxs)("div",{className:"support-content-4",children:[(0,o.jsx)("h5",{children:s.title}),(0,o.jsx)("p",{children:s.subtitle})]})]})},b=function(e){var s=e.spaceBottomClass;return(0,o.jsx)("div",{className:(0,x.A)("support-area",s),children:(0,o.jsx)("div",{className:"container",children:(0,o.jsx)("div",{className:"support-wrap-4-border",children:(0,o.jsx)("div",{className:"row",children:v.map((function(e,s){return(0,o.jsx)("div",{className:"col-lg-4 col-md-4 col-sm-6",children:(0,o.jsx)(f,{data:e,spaceBottomClass:"mb-30"})},s)}))})})})})},N=i(3702),y=i(8067),C=i(861),w=i(5571),A=function(e){var s=e.spaceTopClass,i=e.spaceBottomClass,a=e.category,n=e.productTabClass;return(0,o.jsx)("div",{className:(0,x.A)("product-area",s,i),children:(0,o.jsxs)("div",{className:"container",children:[(0,o.jsx)(w.A,{titleText:"Our Products",positionClass:"text-center",spaceClass:"mb-30",borderClass:"no-border"}),(0,o.jsxs)(N.A.Container,{defaultActiveKey:"bestSeller",children:[(0,o.jsxs)(y.A,{variant:"pills",className:(0,x.A)("product-tab-list-5 mb-60 justify-content-center",n),children:[(0,o.jsx)(y.A.Item,{children:(0,o.jsx)(y.A.Link,{eventKey:"newArrival",children:(0,o.jsx)("h4",{children:"New Arrivals"})})}),(0,o.jsx)(y.A.Item,{children:(0,o.jsx)(y.A.Link,{eventKey:"bestSeller",children:(0,o.jsx)("h4",{children:"Best Sellers"})})}),(0,o.jsx)(y.A.Item,{children:(0,o.jsx)(y.A.Link,{eventKey:"saleItems",children:(0,o.jsx)("h4",{children:"Sale Items"})})})]}),(0,o.jsxs)(N.A.Content,{children:[(0,o.jsx)(N.A.Pane,{eventKey:"newArrival",children:(0,o.jsx)("div",{className:"row",children:(0,o.jsx)(C.A,{category:a,type:"new",limit:8,spaceBottomClass:"mb-25",colorClass:"pro-puce-color"})})}),(0,o.jsx)(N.A.Pane,{eventKey:"bestSeller",children:(0,o.jsx)("div",{className:"row",children:(0,o.jsx)(C.A,{category:a,type:"bestSeller",limit:8,spaceBottomClass:"mb-25",colorClass:"pro-puce-color"})})}),(0,o.jsx)(N.A.Pane,{eventKey:"saleItems",children:(0,o.jsx)("div",{className:"row",children:(0,o.jsx)(C.A,{category:a,type:"saleItems",limit:8,spaceBottomClass:"mb-25",colorClass:"pro-puce-color"})})})]})]})]})})},k=JSON.parse('[{"id":1,"image":"/assets/img/blog/blog-10.jpg","category":["lifestyle","men"],"title":"A guide to latest trends","url":"/blog-details-standard","author":"Admin","authorUrl":"/blog-standard"},{"id":2,"image":"/assets/img/blog/blog-11.jpg","category":["lifestyle"],"title":"Five ways to lead a happy life","url":"/blog-details-standard","author":"Admin","authorUrl":"/blog-standard"},{"id":3,"image":"/assets/img/blog/blog-12.jpg","category":["lifestyle"],"title":"Tips on having a happy life","url":"/blog-details-standard","author":"Admin","authorUrl":"/blog-standard"}]'),S=i(3813),P=function(e){var s=e.spaceTopClass,i=e.spaceBottomClass;return(0,o.jsx)("div",{className:(0,x.A)("blog-area",s,i),children:(0,o.jsxs)("div",{className:"container",children:[(0,o.jsx)(w.A,{titleText:"Latest News",subtitleText:"But I must explain to you how all this mistaken idea of denouncing.",positionClass:"text-center",spaceClass:"mb-55",borderClass:"no-border"}),(0,o.jsx)("div",{className:"row",children:null===k||void 0===k?void 0:k.map((function(e){return(0,o.jsx)("div",{className:"col-lg-4 col-sm-6",children:(0,o.jsx)(S.A,{singlePost:e})},e.id)}))})]})})},I=function(){return(0,o.jsx)("div",{className:"medical-contact-area bg-img",style:{backgroundImage:"url(".concat("/assets/img/bg/medicine-bg.jpg",")")},children:(0,o.jsx)("div",{className:"container",children:(0,o.jsxs)("div",{className:"row align-items-center",children:[(0,o.jsx)("div",{className:"col-lg-6 col-md-5",children:(0,o.jsxs)("div",{className:"medical-contact-text",children:[(0,o.jsx)("h3",{children:"Please Call "}),(0,o.jsx)("h2",{children:"Emergency Order"})]})}),(0,o.jsx)("div",{className:"col-lg-6 col-md-7",children:(0,o.jsxs)("div",{className:"row align-items-center",children:[(0,o.jsx)("div",{className:"col-lg-3 col-md-2",children:(0,o.jsx)("div",{className:"medical-shape-img",children:(0,o.jsx)("img",{src:"/assets/img/icon-img/medical-contact-shape.png",alt:""})})}),(0,o.jsx)("div",{className:"col-lg-9 col-md-10",children:(0,o.jsxs)("div",{className:"medical-contact-number-wrap",children:[(0,o.jsx)("div",{className:"medical-contact-img",children:(0,o.jsx)("img",{src:"/assets/img/icon-img/medical-contact.png",alt:""})}),(0,o.jsx)("div",{className:"medical-contact-number",children:(0,o.jsx)("h2",{children:"+88 254 254 123"})})]})})]})})]})})})},B=function(e){var s=e.spaceBottomClass;return(0,o.jsx)("div",{className:(0,x.A)("banner-area",s),children:(0,o.jsx)("div",{className:"container-fluid p-0",children:(0,o.jsxs)("div",{className:"row no-gutters",children:[(0,o.jsx)("div",{className:"col-width-banner33-1",children:(0,o.jsxs)("div",{className:"single-banner mb-30",children:[(0,o.jsx)("a",{href:"product-details.html",children:(0,o.jsx)("img",{src:"/assets/img/banner/banner-43.png",alt:""})}),(0,o.jsxs)("div",{className:"banner-content-33-2 banner-content-33-2-position1",children:[(0,o.jsx)("h4",{children:"Covid - 19"}),(0,o.jsxs)("h2",{children:["Medix Mask ",(0,o.jsx)("br",{}),"Up To 40% Off"]}),(0,o.jsx)(d.N_,{to:"/shop-grid-standard",children:"Shop Now"})]})]})}),(0,o.jsx)("div",{className:"col-width-banner33-2",children:(0,o.jsxs)("div",{className:"single-banner mb-30",children:[(0,o.jsx)("a",{href:"product-details.html",children:(0,o.jsx)("img",{src:"/assets/img/banner/banner-44.png",alt:""})}),(0,o.jsxs)("div",{className:"banner-content-33-2 banner-content-33-2-position2",children:[(0,o.jsxs)("h2",{children:["Hand Gloves ",(0,o.jsx)("br",{}),"Up To 30% Off"]}),(0,o.jsx)(d.N_,{to:"/shop-grid-standard",children:"Shop Now"})]})]})}),(0,o.jsx)("div",{className:"col-width-banner33-1",children:(0,o.jsxs)("div",{className:"single-banner mb-30",children:[(0,o.jsx)("a",{href:"product-details.html",children:(0,o.jsx)("img",{src:"/assets/img/banner/banner-45.png",alt:""})}),(0,o.jsxs)("div",{className:"banner-content-33-2 banner-content-33-2-position3",children:[(0,o.jsx)("h4",{children:"Covid - 19"}),(0,o.jsxs)("h2",{children:["Hand Sanitizer ",(0,o.jsx)("br",{}),"Up To 40% Off"]}),(0,o.jsx)(d.N_,{to:"/shop-grid-standard",children:"Shop Now"})]})]})})]})})})},F=i(9456),T=i(2821),_=i(448),O={loop:!1,slidesPerView:4,spaceBetween:30,grabCursor:!0,breakpoints:{320:{slidesPerView:1},576:{slidesPerView:2},768:{slidesPerView:3},1024:{slidesPerView:4}}},L=function(e){var s=e.spaceBottomClass,i=e.category,a=(0,F.d4)((function(e){return e.product})).products,n=(0,F.d4)((function(e){return e.currency})),r=(0,F.d4)((function(e){return e.cart})).cartItems,t=(0,F.d4)((function(e){return e.wishlist})).wishlistItems,l=(0,F.d4)((function(e){return e.compare})).compareItems,d=(0,T.d$)(a,i,null,6);return(0,o.jsx)("div",{className:(0,x.A)("related-product-area",s),children:(0,o.jsxs)("div",{className:"container",children:[(0,o.jsx)(w.A,{titleText:"Our Products",positionClass:"text-center",spaceClass:"mb-55",borderClass:"no-border"}),null!==d&&void 0!==d&&d.length?(0,o.jsx)(c.A,{options:O,children:d.map((function(e){return(0,o.jsx)(c.q,{children:(0,o.jsx)(_.A,{spaceBottomClass:s,colorClass:"pro-puce-color",product:e,currency:n,cartItem:r.find((function(s){return s.id===e.id})),wishlistItem:t.find((function(s){return s.id===e.id})),compareItem:l.find((function(s){return s.id===e.id}))})},e.id)}))}):null]})})},E=function(){return(0,o.jsxs)(a.Fragment,{children:[(0,o.jsx)(n.A,{titleTemplate:"Medical Equipment Home",description:"Medical Equipment home of Stickerify"}),(0,o.jsxs)(r.A,{headerContainerClass:"container-fluid",headerPaddingClass:"header-padding-2",headerTop:"visible",children:[(0,o.jsx)(h,{}),(0,o.jsx)(g,{spaceTopClass:"pt-60",spaceBottomClass:"pb-70"}),(0,o.jsx)(b,{spaceBottomClass:"pb-100"}),(0,o.jsx)(A,{spaceBottomClass:"pb-70",category:"medical"}),(0,o.jsx)(B,{spaceBottomClass:"pb-70"}),(0,o.jsx)(L,{category:"medical"}),(0,o.jsx)(P,{spaceBottomClass:"pb-55",spaceTopClass:"pt-95"}),(0,o.jsx)(I,{})]})]})}},7766:function(e,s,i){i.d(s,{A:function(){return h}});var a=i(5544),n=i(5043),r=i(3024),t=(i(3188),i(3189)),c=i(6487),l=i(4993),d=i(9456),o=i(3468),m=i(579),u=function(e){var s=e.borderStyle,i=(0,d.d4)((function(e){return e.currency}));return(0,m.jsxs)("div",{className:(0,r.A)("header-top-wap","fluid-border"===s&&"border-bottom"),children:[(0,m.jsx)(o.A,{currency:i}),(0,m.jsx)("div",{className:"header-offer",children:(0,m.jsxs)("p",{children:["Free delivery on order over"," ",(0,m.jsx)("span",{children:i.currencySymbol+(200*i.currencyRate).toFixed(2)})]})})]})},h=function(e){var s=e.layout,i=e.top,d=e.borderStyle,o=e.headerPaddingClass,h=e.headerPositionClass,x=e.headerBgClass,p=(0,n.useState)(0),j=(0,a.A)(p,2),g=j[0],v=j[1],f=(0,n.useState)(0),b=(0,a.A)(f,2),N=b[0],y=b[1];(0,n.useEffect)((function(){var e=document.querySelector(".sticky-bar");return y(e.offsetTop),window.addEventListener("scroll",C),function(){window.removeEventListener("scroll",C)}}),[]);var C=function(){v(window.scrollY)};return(0,m.jsxs)("header",{className:(0,r.A)("header-area clearfix",x,h),children:[(0,m.jsx)("div",{className:(0,r.A)("header-top-area",o,"visible"===i?"d-none d-lg-block":"d-none","fluid-border"===d&&"border-none"),children:(0,m.jsx)("div",{className:"container-fluid"===s?s:"container",children:(0,m.jsx)(u,{borderStyle:d})})}),(0,m.jsxs)("div",{className:(0,r.A)(o,"sticky-bar header-res-padding clearfix",g>N&&"stick"),children:[(0,m.jsx)("div",{className:"container-fluid"===s?s:"container",children:(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{style:{display:"flex",alignItems:"center"},className:"col-xl-2 col-lg-2 col-md-6 col-4",children:(0,m.jsx)("h1",{style:{fontWeight:"600"},children:"Stickerify"})}),(0,m.jsx)("div",{className:"col-xl-8 col-lg-8 d-none d-lg-block",children:(0,m.jsx)(t.A,{})}),(0,m.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-6 col-8",children:(0,m.jsx)(c.A,{})})]})}),(0,m.jsx)(l.A,{})]})]})}},861:function(e,s,i){i.d(s,{A:function(){return p}});var a=i(5043),n=i(9456),r=i(2821),t=i(5544),c=i(5475),l=i(3024),d=i(425),o=i(5721),m=i(4990),u=i(3492),h=i(579),x=function(e){var s=e.product,i=e.currency,x=e.cartItem,p=e.wishlistItem,j=e.compareItem,g=e.spaceBottomClass,v=e.colorClass,f=e.titlePriceClass,b=(0,a.useState)(!1),N=(0,t.A)(b,2),y=N[0],C=N[1],w=(0,r.do)(s.price,s.discount),A=+(s.price*i.currencyRate).toFixed(2),k=+(w*i.currencyRate).toFixed(2),S=(0,n.wA)();return(0,h.jsxs)(a.Fragment,{children:[(0,h.jsxs)("div",{className:(0,l.A)("product-wrap-2",g,v),children:[(0,h.jsxs)("div",{className:"product-img",children:[(0,h.jsxs)(c.N_,{to:"/product/"+s.id,children:[(0,h.jsx)("img",{className:"default-img",src:""+s.image[0],alt:""}),s.image.length>1?(0,h.jsx)("img",{className:"hover-img",src:""+s.image[1],alt:""}):""]}),s.discount||s.new?(0,h.jsxs)("div",{className:"product-img-badges",children:[s.discount?(0,h.jsxs)("span",{className:"pink",children:["-",s.discount,"%"]}):"",s.new?(0,h.jsx)("span",{className:"purple",children:"New"}):""]}):"",(0,h.jsxs)("div",{className:"product-action-2",children:[s.affiliateLink?(0,h.jsxs)("a",{href:s.affiliateLink,rel:"noopener noreferrer",target:"_blank",title:"Buy now",children:[" ",(0,h.jsx)("i",{className:"fa fa-shopping-cart"})," "]}):s.variation&&s.variation.length>=1?(0,h.jsx)(c.N_,{to:"".concat("","/product/").concat(s.id),title:"Select options",children:(0,h.jsx)("i",{className:"fa fa-cog"})}):s.stock&&s.stock>0?(0,h.jsxs)("button",{onClick:function(){return S((0,o.bE)(s))},className:void 0!==x&&x.quantity>0?"active":"",disabled:void 0!==x&&x.quantity>0,title:void 0!==x?"Added to cart":"Add to cart",children:[" ",(0,h.jsx)("i",{className:"fa fa-shopping-cart"})," "]}):(0,h.jsx)("button",{disabled:!0,className:"active",title:"Out of stock",children:(0,h.jsx)("i",{className:"fa fa-shopping-cart"})}),(0,h.jsx)("button",{onClick:function(){return C(!0)},title:"Quick View",children:(0,h.jsx)("i",{className:"fa fa-eye"})}),(0,h.jsx)("button",{className:void 0!==j?"active":"",disabled:void 0!==j,title:void 0!==j?"Added to compare":"Add to compare",onClick:function(){return S((0,u.wL)(s))},children:(0,h.jsx)("i",{className:"fa fa-retweet"})})]})]}),(0,h.jsxs)("div",{className:"product-content-2",children:[(0,h.jsxs)("div",{className:"title-price-wrap-2 ".concat(f||""),children:[(0,h.jsx)("h3",{children:(0,h.jsx)(c.N_,{to:"/product/"+s.id,children:s.name})}),(0,h.jsx)("div",{className:"price-2",children:null!==w?(0,h.jsxs)(a.Fragment,{children:[(0,h.jsx)("span",{children:i.currencySymbol+k})," ",(0,h.jsx)("span",{className:"old",children:i.currencySymbol+A})]}):(0,h.jsxs)("span",{children:[i.currencySymbol+A," "]})})]}),(0,h.jsx)("div",{className:"pro-wishlist-2",children:(0,h.jsx)("button",{className:void 0!==p?"active":"",disabled:void 0!==p,title:void 0!==p?"Added to wishlist":"Add to wishlist",onClick:function(){return S((0,m.U4)(s))},children:(0,h.jsx)("i",{className:"fa fa-heart-o"})})})]})]}),(0,h.jsx)(d.A,{show:y,onHide:function(){return C(!1)},product:s,currency:i,discountedPrice:w,finalProductPrice:A,finalDiscountedPrice:k,wishlistItem:p,compareItem:j})]})},p=function(e){var s=e.spaceBottomClass,i=e.colorClass,t=e.titlePriceClass,c=e.category,l=e.type,d=e.limit,o=(0,n.d4)((function(e){return e.product})).products,m=(0,n.d4)((function(e){return e.currency})),u=(0,n.d4)((function(e){return e.cart})).cartItems,p=(0,n.d4)((function(e){return e.wishlist})).wishlistItems,j=(0,n.d4)((function(e){return e.compare})).compareItems,g=(0,r.d$)(o,c,l,d);return(0,h.jsx)(a.Fragment,{children:null===g||void 0===g?void 0:g.map((function(e){return(0,h.jsx)("div",{className:"col-xl-3 col-md-6 col-lg-4 col-sm-6",children:(0,h.jsx)(x,{spaceBottomClass:s,colorClass:i,product:e,currency:m,cartItem:u.find((function(s){return s.id===e.id})),wishlistItem:p.find((function(s){return s.id===e.id})),compareItem:j.find((function(s){return s.id===e.id})),titlePriceClass:t})},e.id)}))})}}}]);
//# sourceMappingURL=5853.ad9d16d4.chunk.js.map