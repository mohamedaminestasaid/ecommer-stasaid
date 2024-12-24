"use strict";(self.webpackChunkStickerify_react=self.webpackChunkStickerify_react||[]).push([[686],{3813:function(e,s,i){var a=i(5475),n=i(579);s.A=function(e){var s=e.singlePost;return(0,n.jsxs)("div",{className:"blog-wrap mb-30 scroll-zoom",children:[(0,n.jsxs)("div",{className:"blog-img",children:[(0,n.jsx)(a.N_,{to:""+s.url,children:(0,n.jsx)("img",{src:""+s.image,alt:""})}),(0,n.jsx)("div",{className:"blog-category-names",children:s.category.map((function(e,s){return(0,n.jsx)("span",{className:"purple",children:e},s)}))})]}),(0,n.jsx)("div",{className:"blog-content-wrap",children:(0,n.jsxs)("div",{className:"blog-content text-center",children:[(0,n.jsx)("h3",{children:(0,n.jsx)(a.N_,{to:""+s.url,children:s.title})}),(0,n.jsxs)("span",{children:["By"," ",(0,n.jsx)(a.N_,{to:""+s.authorUrl,children:s.author})]})]})})]})}},3468:function(e,s,i){var a=i(9456),n=i(4117),r=i(1682),t=i(579);s.A=function(e){var s=e.currency,i=(0,n.Bd)().i18n,l=(0,a.wA)(),c=function(e){var s=e.target.value;i.changeLanguage(s)},d=function(e){var s=e.target.value;l((0,r.M)(s))};return(0,t.jsxs)("div",{className:"language-currency-wrap",children:[(0,t.jsxs)("div",{className:"same-language-currency language-style",children:[(0,t.jsxs)("span",{children:["en"===i.resolvedLanguage?"English":"fn"===i.resolvedLanguage?"French":"de"===i.resolvedLanguage?"Germany":""," ",(0,t.jsx)("i",{className:"fa fa-angle-down"})]}),(0,t.jsx)("div",{className:"lang-car-dropdown",children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)("button",{value:"en",onClick:function(e){return c(e)},children:"English"})}),(0,t.jsx)("li",{children:(0,t.jsx)("button",{value:"fn",onClick:function(e){return c(e)},children:"French"})}),(0,t.jsx)("li",{children:(0,t.jsx)("button",{value:"de",onClick:function(e){return c(e)},children:"Germany"})})]})})]}),(0,t.jsxs)("div",{className:"same-language-currency use-style",children:[(0,t.jsxs)("span",{children:[s.currencyName," ",(0,t.jsx)("i",{className:"fa fa-angle-down"})]}),(0,t.jsx)("div",{className:"lang-car-dropdown",children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)("button",{value:"USD",onClick:function(e){return d(e)},children:"USD"})}),(0,t.jsx)("li",{children:(0,t.jsx)("button",{value:"EUR",onClick:function(e){return d(e)},children:"EUR"})}),(0,t.jsx)("li",{children:(0,t.jsx)("button",{value:"GBP",onClick:function(e){return d(e)},children:"GBP"})})]})})]}),(0,t.jsx)("div",{className:"same-language-currency"})]})}},1310:function(e,s,i){var a=i(5544),n=i(5043),r=i(3024),t=i(5475),l=i(9456),c=i(5913),d=i(2821),o=i(425),u=i(5721),m=i(4990),h=i(579);s.A=function(e){var s=e.product,i=e.currency,x=e.cartItem,p=e.wishlistItem,g=e.compareItem,j=e.spaceBottomClass,v=(0,n.useState)(!1),f=(0,a.A)(v,2),b=f[0],N=f[1],y=(0,d.do)(s.price,s.discount),A=+(s.price*i.currencyRate).toFixed(2),w=+(y*i.currencyRate).toFixed(2),C=(0,l.wA)();return(0,h.jsxs)(n.Fragment,{children:[(0,h.jsxs)("div",{className:(0,r.A)("product-wrap",j),children:[(0,h.jsxs)("div",{className:"product-img",children:[(0,h.jsxs)(t.N_,{to:"/product/"+s.id,children:[(0,h.jsx)("img",{className:"default-img",src:""+s.image[0],alt:""}),s.image.length>1?(0,h.jsx)("img",{className:"hover-img",src:""+s.image[1],alt:""}):""]}),s.discount||s.new?(0,h.jsxs)("div",{className:"product-img-badges",children:[s.discount?(0,h.jsxs)("span",{className:"pink",children:["-",s.discount,"%"]}):"",s.new?(0,h.jsx)("span",{className:"purple",children:"New"}):""]}):"",(0,h.jsxs)("div",{className:"product-action",children:[(0,h.jsx)("div",{className:"pro-same-action pro-wishlist",children:(0,h.jsx)("button",{className:void 0!==p?"active":"",disabled:void 0!==p,title:void 0!==p?"Added to wishlist":"Add to wishlist",onClick:function(){return C((0,m.U4)(s))},children:(0,h.jsx)("i",{className:"pe-7s-like"})})}),(0,h.jsx)("div",{className:"pro-same-action pro-cart",children:s.affiliateLink?(0,h.jsxs)("a",{href:s.affiliateLink,rel:"noopener noreferrer",target:"_blank",children:[" ","Buy now"," "]}):s.variation&&s.variation.length>=1?(0,h.jsx)(t.N_,{to:"".concat("","/product/").concat(s.id),children:"Select Option"}):s.stock&&s.stock>0?(0,h.jsxs)("button",{onClick:function(){return C((0,u.bE)(s))},className:void 0!==x&&x.quantity>0?"active":"",disabled:void 0!==x&&x.quantity>0,title:void 0!==x?"Added to cart":"Add to cart",children:[" ",(0,h.jsx)("i",{className:"pe-7s-cart"})," ",void 0!==x&&x.quantity>0?"Added":"Add to cart"]}):(0,h.jsx)("button",{disabled:!0,className:"active",children:"Out of Stock"})}),(0,h.jsx)("div",{className:"pro-same-action pro-quickview",children:(0,h.jsx)("button",{title:"Quick View",onClick:function(){return N(!0)},children:(0,h.jsx)("i",{className:"pe-7s-look"})})})]})]}),(0,h.jsxs)("div",{className:"product-content text-center",children:[(0,h.jsx)("h3",{children:(0,h.jsx)(t.N_,{to:"/product/"+s.id,children:s.name})}),s.rating&&s.rating>0?(0,h.jsx)("div",{className:"product-rating",children:(0,h.jsx)(c.A,{ratingValue:s.rating})}):"",(0,h.jsx)("div",{className:"product-price",children:null!==y?(0,h.jsxs)(n.Fragment,{children:[(0,h.jsx)("span",{children:i.currencySymbol+w})," ",(0,h.jsx)("span",{className:"old",children:i.currencySymbol+A})]}):(0,h.jsxs)("span",{children:[i.currencySymbol+A," "]})})]})]}),(0,h.jsx)(o.A,{show:b,onHide:function(){return N(!1)},product:s,currency:i,discountedPrice:y,finalProductPrice:A,finalDiscountedPrice:w,wishlistItem:p,compareItem:g})]})}},8062:function(e,s,i){var a=i(5043),n=i(7766),r=i(5896),t=i(6998),l=i(579);s.A=function(e){var s=e.children,i=e.headerContainerClass,c=e.headerTop,d=e.headerPaddingClass,o=e.headerPositionClass;return(0,l.jsxs)(a.Fragment,{children:[(0,l.jsx)(n.A,{layout:i,top:c,headerPaddingClass:d,headerPositionClass:o}),s,(0,l.jsx)(r.A,{backgroundColorClass:"bg-gray",spaceTopClass:"pt-100",spaceBottomClass:"pb-70"}),(0,l.jsx)(t.A,{})]})}},686:function(e,s,i){i.r(s),i.d(s,{default:function(){return f}});var a=i(5043),n=i(2168),r=i(8062),t=i(8906),l=i(7362),c=JSON.parse('[{"id":1,"title":"Smart Products","subtitle":"Buy Your Programming Stickers","image":"https://media.discordapp.net/attachments/778253313035599883/1292238589232680990/wireless-headphone-isolated-on-transparent-background-high-quality-bluetooth-headphone-for-advertising-and-product-catalogs-generative-ai-png.png?ex=67030278&is=6701b0f8&hm=844b68eff2b877d9aa9f15be9fdb2b15bab05a35a22b4e66944b5926c64f757e&=&format=webp&quality=lossless&width=1000&height=1000","url":"/shop-grid-standard"}]'),d=i(5475),o=i(579),u=function(e){var s=e.data;return(0,o.jsx)("div",{className:"single-slider slider-height-1 bg-purple",children:(0,o.jsx)("div",{className:"container",children:(0,o.jsxs)("div",{className:"row",children:[(0,o.jsx)("div",{className:"col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6",children:(0,o.jsxs)("div",{className:"slider-content slider-animated-1",children:[(0,o.jsx)("h3",{className:"animated",children:s.title}),(0,o.jsx)("h1",{className:"animated",children:s.subtitle}),(0,o.jsx)("div",{className:"slider-btn btn-hover",children:(0,o.jsx)(d.N_,{className:"animated",to:""+s.url,children:"SHOP NOW"})})]})}),(0,o.jsx)("div",{className:"col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6",children:(0,o.jsx)("div",{className:"slider-single-img slider-animated-1",children:(0,o.jsx)("img",{className:"animated img-fluid",src:""+s.image,alt:""})})})]})})})},m={effect:"fade",fadeEffect:{crossFade:!0},modules:[t._R],loop:!0,speed:1e3,navigation:!0},h=function(){return(0,o.jsx)("div",{className:"slider-area",children:(0,o.jsx)("div",{className:"slider-active nav-style-1",children:c&&(0,o.jsx)(l.A,{options:m,children:c.map((function(e,s){return(0,o.jsx)(l.q,{children:(0,o.jsx)(u,{data:e})},s)}))})})})},x=i(3024),p=JSON.parse('[{"id":1,"image":"/assets/img/icon-img/support-1.png","title":"Free Shipping","subtitle":"Free shipping on all order"},{"id":2,"image":"/assets/img/icon-img/support-2.png","title":"Support 24/7","subtitle":"Free shipping on all order"},{"id":3,"image":"/assets/img/icon-img/support-3.png","title":"Money Return","subtitle":"Free shipping on all order"},{"id":4,"image":"/assets/img/icon-img/support-4.png","title":"Order Discount","subtitle":"Free shipping on all order"}]'),g=function(e){var s=e.singleFeature;return(0,o.jsxs)("div",{className:"support-wrap mb-30",children:[(0,o.jsx)("div",{className:"support-icon",children:(0,o.jsx)("img",{className:"animated",src:""+s.image,alt:""})}),(0,o.jsxs)("div",{className:"support-content",children:[(0,o.jsx)("h5",{children:s.title}),(0,o.jsx)("p",{children:s.subtitle})]})]})},j=function(e){var s=e.spaceTopClass,i=e.spaceBottomClass;return(0,o.jsx)("div",{className:(0,x.A)("support-area",s,i),children:(0,o.jsx)("div",{className:"container",children:(0,o.jsx)("div",{className:"row",children:null===p||void 0===p?void 0:p.map((function(e){return(0,o.jsx)("div",{className:"col-lg-3 col-sm-6",children:(0,o.jsx)(g,{singleFeature:e})},e.id)}))})})})},v=i(1591),f=(i(5489),function(){return(0,o.jsxs)(a.Fragment,{children:[(0,o.jsx)(n.A,{titleTemplate:"Home",description:"Home of Stickerify"}),(0,o.jsxs)(r.A,{headerContainerClass:"container-fluid",headerPaddingClass:"header-padding-1",children:[(0,o.jsx)(h,{}),(0,o.jsx)(j,{spaceTopClass:"pt-100",spaceBottomClass:"pb-60"}),(0,o.jsx)(v.A,{spaceBottomClass:"pb-60",category:"fashion"})]})]})})},5489:function(e,s,i){var a=i(3024),n=i(5513),r=i(3813),t=i(5571),l=i(579);s.A=function(e){var s=e.spaceTopClass,i=e.spaceBottomClass;return(0,l.jsx)("div",{className:(0,a.A)("blog-area",s,i),children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)(t.A,{titleText:"OUR BLOG",positionClass:"text-center",spaceClass:"mb-55"}),(0,l.jsx)("div",{className:"row",children:null===n||void 0===n?void 0:n.map((function(e){return(0,l.jsx)("div",{className:"col-lg-4 col-sm-6",children:(0,l.jsx)(r.A,{singlePost:e})},e.id)}))})]})})}},7766:function(e,s,i){i.d(s,{A:function(){return h}});var a=i(5544),n=i(5043),r=i(3024),t=(i(3188),i(3189)),l=i(6487),c=i(4993),d=i(9456),o=i(3468),u=i(579),m=function(e){var s=e.borderStyle,i=(0,d.d4)((function(e){return e.currency}));return(0,u.jsxs)("div",{className:(0,r.A)("header-top-wap","fluid-border"===s&&"border-bottom"),children:[(0,u.jsx)(o.A,{currency:i}),(0,u.jsx)("div",{className:"header-offer",children:(0,u.jsxs)("p",{children:["Free delivery on order over"," ",(0,u.jsx)("span",{children:i.currencySymbol+(200*i.currencyRate).toFixed(2)})]})})]})},h=function(e){var s=e.layout,i=e.top,d=e.borderStyle,o=e.headerPaddingClass,h=e.headerPositionClass,x=e.headerBgClass,p=(0,n.useState)(0),g=(0,a.A)(p,2),j=g[0],v=g[1],f=(0,n.useState)(0),b=(0,a.A)(f,2),N=b[0],y=b[1];(0,n.useEffect)((function(){var e=document.querySelector(".sticky-bar");return y(e.offsetTop),window.addEventListener("scroll",A),function(){window.removeEventListener("scroll",A)}}),[]);var A=function(){v(window.scrollY)};return(0,u.jsxs)("header",{className:(0,r.A)("header-area clearfix",x,h),children:[(0,u.jsx)("div",{className:(0,r.A)("header-top-area",o,"visible"===i?"d-none d-lg-block":"d-none","fluid-border"===d&&"border-none"),children:(0,u.jsx)("div",{className:"container-fluid"===s?s:"container",children:(0,u.jsx)(m,{borderStyle:d})})}),(0,u.jsxs)("div",{className:(0,r.A)(o,"sticky-bar header-res-padding clearfix",j>N&&"stick"),children:[(0,u.jsx)("div",{className:"container-fluid"===s?s:"container",children:(0,u.jsxs)("div",{className:"row",children:[(0,u.jsx)("div",{style:{display:"flex",alignItems:"center"},className:"col-xl-2 col-lg-2 col-md-6 col-4",children:(0,u.jsx)("h1",{style:{fontWeight:"600"},children:"Stickerify"})}),(0,u.jsx)("div",{className:"col-xl-8 col-lg-8 d-none d-lg-block",children:(0,u.jsx)(t.A,{})}),(0,u.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-6 col-8",children:(0,u.jsx)(l.A,{})})]})}),(0,u.jsx)(c.A,{})]})]})}},3590:function(e,s,i){var a=i(5043),n=i(9456),r=i(2821),t=i(1310),l=i(579);s.A=function(e){var s=e.spaceBottomClass,i=e.category,c=e.type,d=e.limit,o=(0,n.d4)((function(e){return e.product})).products,u=(0,n.d4)((function(e){return e.currency})),m=(0,n.d4)((function(e){return e.cart})).cartItems,h=(0,n.d4)((function(e){return e.wishlist})).wishlistItems,x=(0,n.d4)((function(e){return e.compare})).compareItems,p=(0,r.d$)(o,i,c,d);return(0,l.jsx)(a.Fragment,{children:null===p||void 0===p?void 0:p.map((function(e){return(0,l.jsx)("div",{className:"col-xl-3 col-md-6 col-lg-4 col-sm-6",children:(0,l.jsx)(t.A,{spaceBottomClass:s,product:e,currency:u,cartItem:m.find((function(s){return s.id===e.id})),wishlistItem:h.find((function(s){return s.id===e.id})),compareItem:x.find((function(s){return s.id===e.id}))})},e.id)}))})}},1591:function(e,s,i){var a=i(3024),n=i(3702),r=i(8067),t=i(5571),l=i(3590),c=i(579);s.A=function(e){var s=e.spaceTopClass,i=e.spaceBottomClass,d=e.bgColorClass,o=e.category;return(0,c.jsx)("div",{className:(0,a.A)("product-area",s,i,d),children:(0,c.jsxs)("div",{className:"container",children:[(0,c.jsx)(t.A,{titleText:"DAILY DEALS!",positionClass:"text-center"}),(0,c.jsxs)(n.A.Container,{defaultActiveKey:"bestSeller",children:[(0,c.jsxs)(r.A,{variant:"pills",className:"product-tab-list pt-30 pb-55 text-center",children:[(0,c.jsx)(r.A.Item,{children:(0,c.jsx)(r.A.Link,{eventKey:"newArrival",children:(0,c.jsx)("h4",{children:"New Arrivals"})})}),(0,c.jsx)(r.A.Item,{children:(0,c.jsx)(r.A.Link,{eventKey:"bestSeller",children:(0,c.jsx)("h4",{children:"Best Sellers"})})}),(0,c.jsx)(r.A.Item,{children:(0,c.jsx)(r.A.Link,{eventKey:"saleItems",children:(0,c.jsx)("h4",{children:"Sale Items"})})})]}),(0,c.jsxs)(n.A.Content,{children:[(0,c.jsx)(n.A.Pane,{eventKey:"newArrival",children:(0,c.jsx)("div",{className:"row",children:(0,c.jsx)(l.A,{category:o,type:"new",limit:8,spaceBottomClass:"mb-25"})})}),(0,c.jsx)(n.A.Pane,{eventKey:"bestSeller",children:(0,c.jsx)("div",{className:"row",children:(0,c.jsx)(l.A,{category:o,type:"bestSeller",limit:8,spaceBottomClass:"mb-25"})})}),(0,c.jsx)(n.A.Pane,{eventKey:"saleItems",children:(0,c.jsx)("div",{className:"row",children:(0,c.jsx)(l.A,{category:o,type:"saleItems",limit:8,spaceBottomClass:"mb-25"})})})]})]})]})})}},5513:function(e){e.exports=JSON.parse('[{"id":1,"image":"/assets/img/blog/blog-1.jpg","category":["lifestyle","men"],"title":"A guide to latest trends","url":"/blog-details-standard","author":"Admin","authorUrl":"/blog-standard"},{"id":2,"image":"/assets/img/blog/blog-2.jpg","category":["lifestyle"],"title":"Five ways to lead a happy life","url":"/blog-details-standard","author":"Admin","authorUrl":"/blog-standard"},{"id":3,"image":"/assets/img/blog/blog-3.jpg","category":["lifestyle"],"title":"Tips on having a happy life","url":"/blog-details-standard","author":"Admin","authorUrl":"/blog-standard"}]')}}]);
//# sourceMappingURL=686.5aefac8b.chunk.js.map