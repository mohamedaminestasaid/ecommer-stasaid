"use strict";(self.webpackChunkStickerify_react=self.webpackChunkStickerify_react||[]).push([[8109],{3468:function(e,s,i){var a=i(9456),r=i(4117),t=i(1682),n=i(579);s.A=function(e){var s=e.currency,i=(0,r.Bd)().i18n,c=(0,a.wA)(),l=function(e){var s=e.target.value;i.changeLanguage(s)},o=function(e){var s=e.target.value;c((0,t.M)(s))};return(0,n.jsxs)("div",{className:"language-currency-wrap",children:[(0,n.jsxs)("div",{className:"same-language-currency language-style",children:[(0,n.jsxs)("span",{children:["en"===i.resolvedLanguage?"English":"fn"===i.resolvedLanguage?"French":"de"===i.resolvedLanguage?"Germany":""," ",(0,n.jsx)("i",{className:"fa fa-angle-down"})]}),(0,n.jsx)("div",{className:"lang-car-dropdown",children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)("button",{value:"en",onClick:function(e){return l(e)},children:"English"})}),(0,n.jsx)("li",{children:(0,n.jsx)("button",{value:"fn",onClick:function(e){return l(e)},children:"French"})}),(0,n.jsx)("li",{children:(0,n.jsx)("button",{value:"de",onClick:function(e){return l(e)},children:"Germany"})})]})})]}),(0,n.jsxs)("div",{className:"same-language-currency use-style",children:[(0,n.jsxs)("span",{children:[s.currencyName," ",(0,n.jsx)("i",{className:"fa fa-angle-down"})]}),(0,n.jsx)("div",{className:"lang-car-dropdown",children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)("button",{value:"USD",onClick:function(e){return o(e)},children:"USD"})}),(0,n.jsx)("li",{children:(0,n.jsx)("button",{value:"EUR",onClick:function(e){return o(e)},children:"EUR"})}),(0,n.jsx)("li",{children:(0,n.jsx)("button",{value:"GBP",onClick:function(e){return o(e)},children:"GBP"})})]})})]}),(0,n.jsx)("div",{className:"same-language-currency"})]})}},4943:function(e,s,i){var a=i(3024),r=i(9735),t=i(579),n=function(e){var s,i=e.status,r=e.message,n=e.onValidated,c=e.spaceTopClass,l=e.subscribeBtnClass;return(0,t.jsx)("div",{className:(0,a.A)("subscribe-form-3",c),children:(0,t.jsxs)("div",{className:"mc-form",children:[(0,t.jsx)("div",{children:(0,t.jsx)("input",{className:"email",ref:function(e){return s=e},type:"email",placeholder:"Your Email Address",required:!0})}),"sending"===i&&(0,t.jsx)("div",{style:{color:"#3498db",fontSize:"12px"},children:"sending..."}),"error"===i&&(0,t.jsx)("div",{style:{color:"#e74c3c",fontSize:"12px"},dangerouslySetInnerHTML:{__html:r}}),"success"===i&&(0,t.jsx)("div",{style:{color:"#2ecc71",fontSize:"12px"},dangerouslySetInnerHTML:{__html:r}}),(0,t.jsx)("div",{className:"clear-3 ".concat(l||""),children:(0,t.jsx)("button",{className:"button",onClick:function(){s&&s.value.indexOf("@")>-1&&n({EMAIL:s.value}),s.value=""},children:"SUBSCRIBE"})})]})})};s.A=function(e){var s=e.mailchimpUrl,i=e.spaceTopClass,a=e.subscribeBtnClass;return(0,t.jsx)("div",{children:(0,t.jsx)(r.A,{url:s,render:function(e){var s=e.subscribe,r=e.status,c=e.message;return(0,t.jsx)(n,{status:r,message:c,onValidated:function(e){return s(e)},spaceTopClass:i,subscribeBtnClass:a})}})})}},1310:function(e,s,i){var a=i(5544),r=i(5043),t=i(3024),n=i(5475),c=i(9456),l=i(5913),o=i(2821),d=i(425),u=i(5721),m=i(4990),p=i(579);s.A=function(e){var s=e.product,i=e.currency,h=e.cartItem,x=e.wishlistItem,j=e.compareItem,g=e.spaceBottomClass,v=(0,r.useState)(!1),f=(0,a.A)(v,2),b=f[0],N=f[1],C=(0,o.do)(s.price,s.discount),y=+(s.price*i.currencyRate).toFixed(2),A=+(C*i.currencyRate).toFixed(2),w=(0,c.wA)();return(0,p.jsxs)(r.Fragment,{children:[(0,p.jsxs)("div",{className:(0,t.A)("product-wrap",g),children:[(0,p.jsxs)("div",{className:"product-img",children:[(0,p.jsxs)(n.N_,{to:"/product/"+s.id,children:[(0,p.jsx)("img",{className:"default-img",src:""+s.image[0],alt:""}),s.image.length>1?(0,p.jsx)("img",{className:"hover-img",src:""+s.image[1],alt:""}):""]}),s.discount||s.new?(0,p.jsxs)("div",{className:"product-img-badges",children:[s.discount?(0,p.jsxs)("span",{className:"pink",children:["-",s.discount,"%"]}):"",s.new?(0,p.jsx)("span",{className:"purple",children:"New"}):""]}):"",(0,p.jsxs)("div",{className:"product-action",children:[(0,p.jsx)("div",{className:"pro-same-action pro-wishlist",children:(0,p.jsx)("button",{className:void 0!==x?"active":"",disabled:void 0!==x,title:void 0!==x?"Added to wishlist":"Add to wishlist",onClick:function(){return w((0,m.U4)(s))},children:(0,p.jsx)("i",{className:"pe-7s-like"})})}),(0,p.jsx)("div",{className:"pro-same-action pro-cart",children:s.affiliateLink?(0,p.jsxs)("a",{href:s.affiliateLink,rel:"noopener noreferrer",target:"_blank",children:[" ","Buy now"," "]}):s.variation&&s.variation.length>=1?(0,p.jsx)(n.N_,{to:"".concat("","/product/").concat(s.id),children:"Select Option"}):s.stock&&s.stock>0?(0,p.jsxs)("button",{onClick:function(){return w((0,u.bE)(s))},className:void 0!==h&&h.quantity>0?"active":"",disabled:void 0!==h&&h.quantity>0,title:void 0!==h?"Added to cart":"Add to cart",children:[" ",(0,p.jsx)("i",{className:"pe-7s-cart"})," ",void 0!==h&&h.quantity>0?"Added":"Add to cart"]}):(0,p.jsx)("button",{disabled:!0,className:"active",children:"Out of Stock"})}),(0,p.jsx)("div",{className:"pro-same-action pro-quickview",children:(0,p.jsx)("button",{title:"Quick View",onClick:function(){return N(!0)},children:(0,p.jsx)("i",{className:"pe-7s-look"})})})]})]}),(0,p.jsxs)("div",{className:"product-content text-center",children:[(0,p.jsx)("h3",{children:(0,p.jsx)(n.N_,{to:"/product/"+s.id,children:s.name})}),s.rating&&s.rating>0?(0,p.jsx)("div",{className:"product-rating",children:(0,p.jsx)(l.A,{ratingValue:s.rating})}):"",(0,p.jsx)("div",{className:"product-price",children:null!==C?(0,p.jsxs)(r.Fragment,{children:[(0,p.jsx)("span",{children:i.currencySymbol+A})," ",(0,p.jsx)("span",{className:"old",children:i.currencySymbol+y})]}):(0,p.jsxs)("span",{children:[i.currencySymbol+y," "]})})]})]}),(0,p.jsx)(d.A,{show:b,onHide:function(){return N(!1)},product:s,currency:i,discountedPrice:C,finalProductPrice:y,finalDiscountedPrice:A,wishlistItem:x,compareItem:j})]})}},3100:function(e,s,i){var a=i(3024),r=i(579);s.A=function(e){var s=e.data,i=e.testimonialClass;return(0,r.jsxs)("div",{className:(0,a.A)(i||"single-testimonial","text-center"),children:[(0,r.jsx)("img",{src:""+s.image,alt:""}),(0,r.jsx)("p",{children:s.content}),(0,r.jsxs)("div",{className:"client-info",children:[(0,r.jsx)("i",{className:"fa fa-map-signs"}),(0,r.jsx)("h5",{children:s.customerName}),(0,r.jsx)("span",{children:s.title})]})]})}},4829:function(e,s,i){var a=i(5043),r=i(7766),t=i(5896),n=i(6998),c=i(579);s.A=function(e){var s=e.children,i=e.headerContainerClass,l=e.headerTop,o=e.headerBorderStyle,d=e.headerPaddingClass;return(0,c.jsxs)(a.Fragment,{children:[(0,c.jsx)(r.A,{layout:i,top:l,borderStyle:o,headerPaddingClass:d}),s,(0,c.jsx)(t.A,{backgroundColorClass:"bg-gray",spaceTopClass:"pt-100",spaceBottomClass:"mb-70 pb-70",spaceLeftClass:"ml-70",spaceRightClass:"mr-70"}),(0,c.jsx)(n.A,{})]})}},8109:function(e,s,i){i.r(s),i.d(s,{default:function(){return R}});var a=i(5043),r=i(2168),t=i(4829),n=i(8906),c=i(3024),l=i(7362),o=JSON.parse('[{"id":1,"title":"Natural & Healthy","subtitle":"100% Fresh <br /> Flower Collection","image":"/assets/img/slider/slider-28.jpg","url":"/shop-grid-standard"},{"id":2,"title":"Natural & Healthy","subtitle":"100% Fresh <br/> Flower Collection","image":"/assets/img/slider/slider-28.jpg","url":"/shop-grid-standard"}]'),d=i(5475),u=i(579),m=function(e){var s=e.data;return(0,u.jsx)("div",{className:"single-slider-2 slider-height-1 slider-height-res15 d-flex align-items-center slider-height-res bg-img",style:{backgroundImage:"url(".concat(""+s.image,")")},children:(0,u.jsx)("div",{className:"container",children:(0,u.jsx)("div",{className:"row",children:(0,u.jsx)("div",{className:"col-xl-6 col-lg-6 col-md-7 ms-auto",children:(0,u.jsxs)("div",{className:"slider-content-2 slider-content-flower slider-animated-1",children:[(0,u.jsx)("h3",{className:"animated",children:s.title}),(0,u.jsx)("h1",{className:"animated",dangerouslySetInnerHTML:{__html:s.subtitle}}),(0,u.jsx)("div",{className:"slider-btn btn-hover",children:(0,u.jsx)(d.N_,{className:"animated",to:""+s.url,children:"SHOP NOW"})})]})})})})})},p={effect:"fade",fadeEffect:{crossFade:!0},modules:[n._R],loop:!0,speed:1e3,navigation:!0,autoHeight:!1},h=function(e){var s=e.spaceLeftClass,i=e.spaceRightClass;return(0,u.jsx)("div",{className:(0,c.A)("slider-area",s,i),children:(0,u.jsx)("div",{className:"slider-active nav-style-1",children:o&&(0,u.jsx)(l.A,{options:p,children:o.map((function(e,s){return(0,u.jsx)(l.q,{children:(0,u.jsx)(m,{data:e})},s)}))})})})},x=i(900),j=i(3702),g=i(8067),v=i(3590),f=function(e){var s=e.spaceTopClass,i=e.spaceBottomClass,a=e.category,r=e.productTabClass;return(0,u.jsx)("div",{className:(0,c.A)("product-area",s,i),children:(0,u.jsxs)("div",{className:"container",children:[(0,u.jsxs)(j.A.Container,{defaultActiveKey:"bestSeller",children:[(0,u.jsxs)(g.A,{variant:"pills",className:"product-tab-list-2 mb-60 justify-content-center ".concat(r||""),children:[(0,u.jsx)(g.A.Item,{children:(0,u.jsx)(g.A.Link,{eventKey:"newArrival",children:(0,u.jsx)("h4",{children:"New Arrivals"})})}),(0,u.jsx)(g.A.Item,{children:(0,u.jsx)(g.A.Link,{eventKey:"bestSeller",children:(0,u.jsx)("h4",{children:"Best Sellers"})})}),(0,u.jsx)(g.A.Item,{children:(0,u.jsx)(g.A.Link,{eventKey:"saleItems",children:(0,u.jsx)("h4",{children:"Sale Items"})})})]}),(0,u.jsxs)(j.A.Content,{children:[(0,u.jsx)(j.A.Pane,{eventKey:"newArrival",children:(0,u.jsx)("div",{className:"row",children:(0,u.jsx)(v.A,{category:a,type:"new",limit:8,spaceBottomClass:"mb-25"})})}),(0,u.jsx)(j.A.Pane,{eventKey:"bestSeller",children:(0,u.jsx)("div",{className:"row",children:(0,u.jsx)(v.A,{category:a,type:"bestSeller",limit:8,spaceBottomClass:"mb-25"})})}),(0,u.jsx)(j.A.Pane,{eventKey:"saleItems",children:(0,u.jsx)("div",{className:"row",children:(0,u.jsx)(v.A,{category:a,type:"saleItems",limit:8,spaceBottomClass:"mb-25"})})})]})]}),(0,u.jsx)("div",{className:"view-more text-center mt-20 toggle-btn6 col-12",children:(0,u.jsx)(d.N_,{className:"loadMore6",to:"/shop-grid-standard",children:"VIEW MORE PRODUCTS"})})]})})},b=i(9456),N=i(5571),C=i(5544),y=i(5913),A=i(2821),w=i(425),k=i(5721),S=i(4990),I=function(e){var s=e.product,i=e.currency,r=e.cartItem,t=e.wishlistItem,n=e.compareItem,l=e.spaceBottomClass,o=(0,a.useState)(!1),m=(0,C.A)(o,2),p=m[0],h=m[1],x=(0,A.do)(s.price,s.discount),j=+(s.price*i.currencyRate).toFixed(2),g=+(x*i.currencyRate).toFixed(2),v=(0,b.wA)();return(0,u.jsxs)(a.Fragment,{children:[(0,u.jsxs)("div",{className:(0,c.A)("product-wrap",l),children:[(0,u.jsxs)("div",{className:"product-img",children:[(0,u.jsxs)(d.N_,{to:"/product/"+s.id,children:[(0,u.jsx)("img",{className:"default-img",src:""+s.image[0],alt:""}),s.image.length>1?(0,u.jsx)("img",{className:"hover-img",src:""+s.image[1],alt:""}):""]}),s.discount||s.new?(0,u.jsxs)("div",{className:"product-img-badges",children:[s.discount?(0,u.jsxs)("span",{className:"pink",children:["-",s.discount,"%"]}):"",s.new?(0,u.jsx)("span",{className:"purple",children:"New"}):""]}):"",(0,u.jsxs)("div",{className:"product-action",children:[(0,u.jsx)("div",{className:"pro-same-action pro-wishlist",children:(0,u.jsx)("button",{className:void 0!==t?"active":"",disabled:void 0!==t,title:void 0!==t?"Added to wishlist":"Add to wishlist",onClick:function(){return v((0,S.U4)(s))},children:(0,u.jsx)("i",{className:"pe-7s-like"})})}),(0,u.jsx)("div",{className:"pro-same-action pro-cart",children:s.affiliateLink?(0,u.jsxs)("a",{href:s.affiliateLink,rel:"noopener noreferrer",target:"_blank",children:[" ","Buy now"," "]}):s.variation&&s.variation.length>=1?(0,u.jsx)(d.N_,{to:"".concat("","/product/").concat(s.id),children:"Select Option"}):s.stock&&s.stock>0?(0,u.jsxs)("button",{onClick:function(){return v((0,k.bE)(s))},className:void 0!==r&&r.quantity>0?"active":"",disabled:void 0!==r&&r.quantity>0,title:void 0!==r?"Added to cart":"Add to cart",children:[" ",(0,u.jsx)("i",{className:"pe-7s-cart"})," ",void 0!==r&&r.quantity>0?"Added":"Add to cart"]}):(0,u.jsx)("button",{disabled:!0,className:"active",children:"Out of Stock"})}),(0,u.jsx)("div",{className:"pro-same-action pro-quickview",children:(0,u.jsx)("button",{title:"Quick View",onClick:function(){return h(!0)},children:(0,u.jsx)("i",{className:"pe-7s-look"})})})]})]}),(0,u.jsxs)("div",{className:"product-content text-center",children:[(0,u.jsx)("h3",{children:(0,u.jsx)(d.N_,{to:"/product/"+s.id,children:s.name})}),s.rating&&s.rating>0?(0,u.jsx)("div",{className:"product-rating",children:(0,u.jsx)(y.A,{ratingValue:s.rating})}):"",(0,u.jsx)("div",{className:"product-price",children:null!==x?(0,u.jsxs)(a.Fragment,{children:[(0,u.jsx)("span",{children:i.currencySymbol+g})," ",(0,u.jsx)("span",{className:"old",children:i.currencySymbol+j})]}):(0,u.jsxs)("span",{children:[i.currencySymbol+j," "]})})]})]}),(0,u.jsx)(w.A,{show:p,onHide:function(){return h(!1)},product:s,currency:i,discountedPrice:x,finalProductPrice:j,finalDiscountedPrice:g,wishlistItem:t,compareItem:n})]})},B={loop:!1,slidesPerView:4,grabCursor:!0,spaceBetween:30,breakpoints:{320:{slidesPerView:1},576:{slidesPerView:2},768:{slidesPerView:3},1024:{slidesPerView:4}}},P=function(e){var s=e.spaceBottomClass,i=e.category,a=(0,b.d4)((function(e){return e.product})).products,r=(0,b.d4)((function(e){return e.currency})),t=(0,b.d4)((function(e){return e.cart})).cartItems,n=(0,b.d4)((function(e){return e.wishlist})).wishlistItems,o=(0,b.d4)((function(e){return e.compare})).compareItems,d=(0,A.d$)(a,i,null,6);return(0,u.jsx)("div",{className:(0,c.A)("related-product-area",s),children:(0,u.jsxs)("div",{className:"container",children:[(0,u.jsx)(N.A,{titleText:"Our Products",positionClass:"text-center",spaceClass:"mb-55",borderClass:"no-border"}),null!==d&&void 0!==d&&d.length?(0,u.jsx)(l.A,{options:B,children:d.map((function(e){return(0,u.jsx)(l.q,{children:(0,u.jsx)(I,{product:e,currency:r,cartItem:t.find((function(s){return s.id===e.id})),wishlistItem:n.find((function(s){return s.id===e.id})),compareItem:o.find((function(s){return s.id===e.id}))})},e.id)}))}):null]})})},F=i(4344),L=i(9340),T=JSON.parse('[{"id":1,"image":"/assets/img/banner/banner-46.png","title":"Featured Products","subtitle":"Choose Your Products Here","link":"/shop-grid-standard","textAlign":"right"},{"id":2,"image":"/assets/img/banner/banner-47.png","title":"New Products","subtitle":"Choose Your Products Here","link":"/shop-grid-standard","textAlign":"left"}]'),_=function(e){var s=e.data,i=e.spaceBottomClass;return(0,u.jsxs)("div",{className:(0,c.A)("single-banner-2",i,"right"===s.textAlign&&"align_right"),children:[(0,u.jsx)(d.N_,{to:""+s.link,children:(0,u.jsx)("img",{src:""+s.image,alt:""})}),(0,u.jsxs)("div",{className:"banner-content-2 banner-content-2--style2 banner-content-2--style2--violet",children:[(0,u.jsx)("h3",{children:s.title}),(0,u.jsxs)("h4",{children:[s.subtitle," ",(0,u.jsx)("span",{children:s.price})]}),(0,u.jsx)(d.N_,{to:""+s.link,children:(0,u.jsx)("i",{className:"fa fa-long-arrow-right"})})]})]})},q=function(e){var s=e.spaceBottomClass,i=e.spaceTopClass;return(0,u.jsx)("div",{className:(0,c.A)("banner-area hm9-section-padding",i,s),children:(0,u.jsx)("div",{className:"container-fluid",children:(0,u.jsx)("div",{className:"row",children:null===T||void 0===T?void 0:T.map((function(e,s){return(0,u.jsx)("div",{className:"col-lg-6 col-md-6",children:(0,u.jsx)(_,{data:e,spaceBottomClass:"mb-30"})},s)}))})})})},R=function(){return(0,u.jsxs)(a.Fragment,{children:[(0,u.jsx)(r.A,{titleTemplate:"Flower Shop Home",description:"Flower Shop home of Stickerify"}),(0,u.jsxs)(t.A,{headerTop:"visible",headerContainerClass:"container-fluid",headerBorderStyle:"fluid-border",headerPaddingClass:"header-padding-2",children:[(0,u.jsx)(h,{spaceLeftClass:"ml-70",spaceRightClass:"mr-70"}),(0,u.jsx)(x.A,{spaceTopClass:"pt-10",spaceBottomClass:"pb-90",containerClass:"container-fluid",gutterClass:"padding-10-row-col"}),(0,u.jsx)(f,{category:"flower",spaceBottomClass:"pb-100"}),(0,u.jsx)(q,{spaceBottomClass:"pb-70"}),(0,u.jsx)(P,{category:"flower",spaceBottomClass:"pb-100"}),(0,u.jsx)(F.A,{spaceTopClass:"pt-100",spaceBottomClass:"pb-95",spaceLeftClass:"ml-70",spaceRightClass:"mr-70",bgColorClass:"bg-gray-3"}),(0,u.jsx)(L.A,{spaceTopClass:"pt-80",spaceBottomClass:"pb-95",subscribeBtnClass:"dark-red-subscribe"})]})]})}},900:function(e,s,i){i.d(s,{A:function(){return c}});var a=i(3024),r=JSON.parse('[{"id":1,"titleImage":"/assets/img/icon-img/support-8.png","title":"Free shipping on all order","iconImage":"/assets/img/icon-img/support-5.png","backgroundColor":"#ccfbe9"},{"id":2,"titleImage":"/assets/img/icon-img/support-9.png","title":"Back guarantee under 5 days","iconImage":"/assets/img/icon-img/support-6.png","backgroundColor":"#f2fbcc"},{"id":3,"titleImage":"/assets/img/icon-img/support-10.png","title":"On every order over $150","iconImage":"/assets/img/icon-img/support-7.png","backgroundColor":"#ddfbcc"}]'),t=i(579),n=function(e){var s=e.data,i=e.spaceBottomClass;return(0,t.jsxs)("div",{className:(0,a.A)("support-wrap-3 text-center",i),style:{backgroundColor:"".concat(s.backgroundColor)},children:[(0,t.jsx)("div",{className:"support-icon-2",children:(0,t.jsx)("img",{className:"animated",src:""+s.iconImage,alt:""})}),(0,t.jsxs)("div",{className:"support-content-3",children:[(0,t.jsx)("img",{src:""+s.titleImage,alt:""}),(0,t.jsx)("p",{children:s.title})]})]})},c=function(e){var s=e.spaceTopClass,i=e.spaceBottomClass,c=e.containerClass,l=e.gutterClass,o=e.responsiveClass,d=e.bgImg;return(0,t.jsx)("div",{className:(0,a.A)("support-area hm9-section-padding",s,i,o),style:d?{backgroundImage:"url(".concat(""+d,")")}:{},children:(0,t.jsx)("div",{className:(0,a.A)(c,l),children:(0,t.jsx)("div",{className:"row",children:null===r||void 0===r?void 0:r.map((function(e,s){return(0,t.jsx)("div",{className:"col-lg-4 col-md-6 col-sm-6",children:(0,t.jsx)(n,{data:e,spaceBottomClass:"mb-10"})},s)}))})})})}},7766:function(e,s,i){i.d(s,{A:function(){return p}});var a=i(5544),r=i(5043),t=i(3024),n=(i(3188),i(3189)),c=i(6487),l=i(4993),o=i(9456),d=i(3468),u=i(579),m=function(e){var s=e.borderStyle,i=(0,o.d4)((function(e){return e.currency}));return(0,u.jsxs)("div",{className:(0,t.A)("header-top-wap","fluid-border"===s&&"border-bottom"),children:[(0,u.jsx)(d.A,{currency:i}),(0,u.jsx)("div",{className:"header-offer",children:(0,u.jsxs)("p",{children:["Free delivery on order over"," ",(0,u.jsx)("span",{children:i.currencySymbol+(200*i.currencyRate).toFixed(2)})]})})]})},p=function(e){var s=e.layout,i=e.top,o=e.borderStyle,d=e.headerPaddingClass,p=e.headerPositionClass,h=e.headerBgClass,x=(0,r.useState)(0),j=(0,a.A)(x,2),g=j[0],v=j[1],f=(0,r.useState)(0),b=(0,a.A)(f,2),N=b[0],C=b[1];(0,r.useEffect)((function(){var e=document.querySelector(".sticky-bar");return C(e.offsetTop),window.addEventListener("scroll",y),function(){window.removeEventListener("scroll",y)}}),[]);var y=function(){v(window.scrollY)};return(0,u.jsxs)("header",{className:(0,t.A)("header-area clearfix",h,p),children:[(0,u.jsx)("div",{className:(0,t.A)("header-top-area",d,"visible"===i?"d-none d-lg-block":"d-none","fluid-border"===o&&"border-none"),children:(0,u.jsx)("div",{className:"container-fluid"===s?s:"container",children:(0,u.jsx)(m,{borderStyle:o})})}),(0,u.jsxs)("div",{className:(0,t.A)(d,"sticky-bar header-res-padding clearfix",g>N&&"stick"),children:[(0,u.jsx)("div",{className:"container-fluid"===s?s:"container",children:(0,u.jsxs)("div",{className:"row",children:[(0,u.jsx)("div",{style:{display:"flex",alignItems:"center"},className:"col-xl-2 col-lg-2 col-md-6 col-4",children:(0,u.jsx)("h1",{style:{fontWeight:"600"},children:"Stickerify"})}),(0,u.jsx)("div",{className:"col-xl-8 col-lg-8 d-none d-lg-block",children:(0,u.jsx)(n.A,{})}),(0,u.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-6 col-8",children:(0,u.jsx)(c.A,{})})]})}),(0,u.jsx)(l.A,{})]})]})}},9340:function(e,s,i){var a=i(3024),r=i(4943),t=i(579);s.A=function(e){var s=e.spaceTopClass,i=e.spaceBottomClass,n=e.subscribeBtnClass,c=e.bgColorClass,l=e.subscribeColorClass;return(0,t.jsx)("div",{className:(0,a.A)("subscribe-area-3",c,s,i),children:(0,t.jsx)("div",{className:"container-fluid",children:(0,t.jsx)("div",{className:"row",children:(0,t.jsx)("div",{className:"col-xl-5 col-lg-7 col-md-10 mx-auto",children:(0,t.jsxs)("div",{className:(0,a.A)("subscribe-style-3 text-center",l),children:[(0,t.jsx)("h2",{children:"Join With Us! "}),(0,t.jsx)("p",{children:"Subscribe to our newsletter to receive news on update"}),(0,t.jsx)(r.A,{mailchimpUrl:"//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef",spaceTopClass:"mt-35",subscribeBtnClass:n})]})})})})})}},3590:function(e,s,i){var a=i(5043),r=i(9456),t=i(2821),n=i(1310),c=i(579);s.A=function(e){var s=e.spaceBottomClass,i=e.category,l=e.type,o=e.limit,d=(0,r.d4)((function(e){return e.product})).products,u=(0,r.d4)((function(e){return e.currency})),m=(0,r.d4)((function(e){return e.cart})).cartItems,p=(0,r.d4)((function(e){return e.wishlist})).wishlistItems,h=(0,r.d4)((function(e){return e.compare})).compareItems,x=(0,t.d$)(d,i,l,o);return(0,c.jsx)(a.Fragment,{children:null===x||void 0===x?void 0:x.map((function(e){return(0,c.jsx)("div",{className:"col-xl-3 col-md-6 col-lg-4 col-sm-6",children:(0,c.jsx)(n.A,{spaceBottomClass:s,product:e,currency:u,cartItem:m.find((function(s){return s.id===e.id})),wishlistItem:p.find((function(s){return s.id===e.id})),compareItem:h.find((function(s){return s.id===e.id}))})},e.id)}))})}},4344:function(e,s,i){var a=i(3024),r=i(7362),t=i(5672),n=i(3100),c=i(579),l={slidesPerView:1,loop:!0,autoplay:!0};s.A=function(e){var s=e.spaceTopClass,i=e.spaceBottomClass,o=e.spaceLeftClass,d=e.spaceRightClass,u=e.bgColorClass,m=e.testimonialClass;return(0,c.jsx)("div",{className:(0,a.A)("testimonial-area",s,i,o,d,u),children:(0,c.jsx)("div",{className:"container",children:(0,c.jsx)("div",{className:"row",children:(0,c.jsx)("div",{className:"col-lg-10 mx-auto",children:(0,c.jsx)("div",{className:"testimonial-active nav-style-1 nav-testi-style",children:t&&(0,c.jsx)(r.A,{options:l,children:t.map((function(e,s){return(0,c.jsx)(r.q,{children:(0,c.jsx)(n.A,{data:e,testimonialClass:m})},s)}))})})})})})})}},5672:function(e){e.exports=JSON.parse('[{"id":"1","image":"/assets/img/testimonial/testi-1.png","content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.","customerName":"Grace Alvarado","title":"customer"},{"id":"2","image":"/assets/img/testimonial/testi-1.png","content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.","customerName":"John Doe","title":"customer"}]')}}]);
//# sourceMappingURL=8109.2f513daa.chunk.js.map