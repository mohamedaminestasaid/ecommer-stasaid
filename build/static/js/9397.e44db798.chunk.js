"use strict";(self.webpackChunkStickerify_react=self.webpackChunkStickerify_react||[]).push([[9397],{8032:function(e,s,a){a.d(s,{A:function(){return d}});var i=a(5544),t=a(3024),r=a(5043),n=function(e){var s=new Date(e).getTime(),a=(0,r.useState)(s-(new Date).getTime()),t=(0,i.A)(a,2),n=t[0],l=t[1];return(0,r.useEffect)((function(){if(!(n<=0)){var e=setInterval((function(){l(s-(new Date).getTime())}),1e3);return function(){return clearInterval(e)}}}),[s,n]),function(e){return e<=0?[0,0,0,0]:[Math.floor(e/864e5),Math.floor(e%864e5/36e5),Math.floor(e%36e5/6e4),Math.floor(e%6e4/1e3)]}(n)},l=a(579),c=function(e){var s=e.value,a=e.type;return(0,l.jsxs)("span",{className:"cdown",children:[s," ",(0,l.jsx)("p",{children:a})]})},d=function(e){var s=e.date,a=e.className,r=n(s),d=(0,i.A)(r,4),o=d[0],m=d[1],u=d[2],p=d[3];return(0,l.jsxs)("div",{className:(0,t.A)("timer timer-style",a),children:[(0,l.jsx)(c,{value:o,type:"days"}),(0,l.jsx)(c,{value:m,type:"hours"}),(0,l.jsx)(c,{value:u,type:"minutes"}),(0,l.jsx)(c,{value:p,type:"secs"})]})}},5371:function(e,s,a){var i=a(5475),t=a(579);s.A=function(e){var s=e.data;return(0,t.jsx)("div",{className:"single-image",children:(0,t.jsx)(i.N_,{to:""+s.link,children:(0,t.jsx)("img",{src:""+s.image,alt:""})})})}},3100:function(e,s,a){var i=a(3024),t=a(579);s.A=function(e){var s=e.data,a=e.testimonialClass;return(0,t.jsxs)("div",{className:(0,i.A)(a||"single-testimonial","text-center"),children:[(0,t.jsx)("img",{src:""+s.image,alt:""}),(0,t.jsx)("p",{children:s.content}),(0,t.jsxs)("div",{className:"client-info",children:[(0,t.jsx)("i",{className:"fa fa-map-signs"}),(0,t.jsx)("h5",{children:s.customerName}),(0,t.jsx)("span",{children:s.title})]})]})}},8062:function(e,s,a){var i=a(5043),t=a(7766),r=a(5896),n=a(6998),l=a(579);s.A=function(e){var s=e.children,a=e.headerContainerClass,c=e.headerTop,d=e.headerPaddingClass,o=e.headerPositionClass;return(0,l.jsxs)(i.Fragment,{children:[(0,l.jsx)(t.A,{layout:a,top:c,headerPaddingClass:d,headerPositionClass:o}),s,(0,l.jsx)(r.A,{backgroundColorClass:"bg-gray",spaceTopClass:"pt-100",spaceBottomClass:"pb-70"}),(0,l.jsx)(n.A,{})]})}},9397:function(e,s,a){a.r(s),a.d(s,{default:function(){return A}});var i=a(5043),t=a(2168),r=a(8062),n=a(3024),l=a(8906),c=a(7362),d=JSON.parse('[{"id":1,"title":"Furniture <br /> Collection <span>2020</span>","subtitle":"Sale up to <span>40% off</span>","image":"/assets/img/slider/slider-34.jpg","url":"/shop-grid-standard"},{"id":2,"title":"Furniture <br /> Collection <span>2020</span>","subtitle":"Sale up to <span>30% off</span>","image":"/assets/img/slider/slider-34.jpg","url":"/shop-grid-standard"}]'),o=a(5475),m=a(579),u=function(e){var s=e.data;return(0,m.jsx)("div",{className:"single-slider-2 slider-height-2 d-flex align-items-center bg-img",style:{backgroundImage:"url(".concat(""+s.image,")")},children:(0,m.jsx)("div",{className:"container",children:(0,m.jsx)("div",{className:"row",children:(0,m.jsx)("div",{className:"col-lg-7 col-md-8 col-12",children:(0,m.jsxs)("div",{className:"slider-content-blue slider-content-2 slider-content-2--white slider-animated-1",children:[(0,m.jsx)("h3",{className:"animated no-style",dangerouslySetInnerHTML:{__html:s.title}}),(0,m.jsx)("h1",{className:"animated",dangerouslySetInnerHTML:{__html:s.subtitle}}),(0,m.jsx)("div",{className:"slider-btn-blue btn-hover",children:(0,m.jsx)(o.N_,{className:"animated",to:""+s.url,children:"SHOP NOW"})})]})})})})})},p={effect:"fade",fadeEffect:{crossFade:!0},modules:[l._R],loop:!0,speed:1e3,navigation:!0},g=function(e){var s=e.spaceLeftClass,a=e.spaceRightClass,i=e.spaceBottomClass;return(0,m.jsx)("div",{className:(0,n.A)("slider-area",s,a,i),children:(0,m.jsx)("div",{className:"slider-active nav-style-3 nav-style-3--blue",children:d&&(0,m.jsx)(c.A,{options:p,className:"overflow-hidden",children:d.map((function(e,s){return(0,m.jsx)(c.q,{children:(0,m.jsx)(u,{data:e})},s)}))})})})},h=JSON.parse('[{"id":1,"image":"/assets/img/icon-img/support-1.png","title":"Free Home Delivery"},{"id":2,"image":"/assets/img/icon-img/support-12.png","title":"Secure Payment"},{"id":3,"image":"/assets/img/icon-img/support-4.png","title":"Order Discount"},{"id":4,"image":"/assets/img/icon-img/support-11.png","title":"24 x 7 Online Support"}]'),x=function(e){var s=e.data,a=e.spaceBottomClass,i=e.textAlignClass;return(0,m.jsxs)("div",{className:(0,n.A)("support-wrap-7 support-shape",a,i),children:[(0,m.jsx)("div",{className:"support-icon-7",children:(0,m.jsx)("img",{src:""+s.image,alt:""})}),(0,m.jsx)("div",{className:"support-content-7",children:(0,m.jsx)("h5",{children:s.title})})]})},j=function(e){var s=e.spaceBottomClass;return(0,m.jsx)("div",{className:(0,n.A)("support-area-7",s),children:(0,m.jsx)("div",{className:"container",children:(0,m.jsx)("div",{className:"row",children:null===h||void 0===h?void 0:h.map((function(e,s){return(0,m.jsx)("div",{className:"col-lg-3 col-md-6 col-sm-6",children:(0,m.jsx)(x,{data:e,spaceBottomClass:"mb-30"})},s)}))})})})},v=a(3006),f=a(4344),N=a(1730),b=a(4260),y=a(4668),C=function(e){var s=e.spaceTopClass,a=e.spaceBottomClass;return(0,m.jsx)("div",{className:(0,n.A)("cta-area bg-img",s,a),style:{backgroundImage:"url(".concat("/assets/img/bg/cta-bg.jpg",")")},children:(0,m.jsx)("div",{className:"container",children:(0,m.jsx)("div",{className:"row",children:(0,m.jsx)("div",{className:"col-lg-6 ms-auto me-auto",children:(0,m.jsxs)("div",{className:"cta-content text-center",children:[(0,m.jsxs)("h2",{className:"title",children:["Every Piece Comes With ",(0,m.jsx)("br",{})," a 10 Year Guarantee"]}),(0,m.jsxs)("p",{className:"text",children:["All Products Sale Up To ",(0,m.jsx)("span",{children:"40% Off"})]}),(0,m.jsx)(o.N_,{className:"cta-btn",to:"/shop-grid-standard",children:"SHOP NOW"})]})})})})})},A=function(){return(0,m.jsxs)(i.Fragment,{children:[(0,m.jsx)(t.A,{titleTemplate:"Furniture Home",description:"Furniture home of Stickerify"}),(0,m.jsxs)(r.A,{headerContainerClass:"container",headerPaddingClass:"header-padding-1",children:[(0,m.jsx)(g,{spaceBottomClass:"pb-100"}),(0,m.jsx)(j,{spaceBottomClass:"pb-100"}),(0,m.jsx)(v.A,{spaceBottomClass:"pb-70",category:"furniture",productGridStyleClass:"product-wrap-10--style2 product-wrap-10--style2--blue"}),(0,m.jsx)(C,{spaceTopClass:"pt-120",spaceBottomClass:"pb-120"}),(0,m.jsx)(f.A,{spaceBottomClass:"pb-95",spaceTopClass:"pt-100"}),(0,m.jsx)(N.A,{spaceTopClass:"pt-115",spaceBottomClass:"pb-115",bgImg:"/assets/img/bg/bg-6.jpg",image:"/assets/img/banner/deal-10.png",dateTime:"November 13, 2023 12:12:00"}),(0,m.jsx)(b.A,{spaceTopClass:"pt-100",spaceBottomClass:"pb-70"}),(0,m.jsx)(y.A,{})]})]})}},4260:function(e,s,a){a.d(s,{A:function(){return d}});var i=a(3024),t=JSON.parse('[{"id":1,"image":"/assets/img/blog/blog-13.jpg","category":["lifestyle","men"],"title":"A guide to latest trends","url":"/blog-details-standard","author":"Admin","authorUrl":"/blog-standard"},{"id":2,"image":"/assets/img/blog/blog-14.jpg","category":["lifestyle"],"title":"Five ways to lead a happy life","url":"/blog-details-standard","author":"Admin","authorUrl":"/blog-standard"},{"id":3,"image":"/assets/img/blog/blog-15.jpg","category":["lifestyle"],"title":"Tips on having a happy life","url":"/blog-details-standard","author":"Admin","authorUrl":"/blog-standard"}]'),r=a(5475),n=a(579),l=function(e){var s=e.singlePost;return(0,n.jsxs)("div",{className:"blog-wrap-3 mb-30 scroll-zoom",children:[(0,n.jsx)("div",{className:"blog-img mb-30",children:(0,n.jsx)(r.N_,{to:""+s.url,children:(0,n.jsx)("img",{src:""+s.image,alt:""})})}),(0,n.jsxs)("div",{className:"blog-content-wrap",children:[(0,n.jsx)("div",{className:"blog-category-names blog-category-names--style2",children:s.category.map((function(e,s){return(0,n.jsx)("span",{className:"red",children:(s?", ":"")+e},s)}))}),(0,n.jsxs)("div",{className:"blog-content",children:[(0,n.jsx)("h3",{children:(0,n.jsx)(r.N_,{to:""+s.url,children:s.title})}),(0,n.jsx)("span",{children:(0,n.jsx)(r.N_,{to:""+s.url,children:"Read More"})})]})]})]})},c=a(7194),d=function(e){var s=e.spaceTopClass,a=e.spaceBottomClass;return(0,n.jsx)("div",{className:(0,i.A)("blog-area",s,a),children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)(c.A,{titleText:"Our Blog",positionClass:"text-center",borderClass:"bottom-border",spaceClass:"mb-55"}),(0,n.jsx)("div",{className:"row",children:null===t||void 0===t?void 0:t.map((function(e){return(0,n.jsx)("div",{className:"col-lg-4 col-sm-6",children:(0,n.jsx)(l,{singlePost:e})},e.id)}))})]})})}},1730:function(e,s,a){var i=a(3024),t=a(5475),r=a(8032),n=a(579);s.A=function(e){var s=e.spaceTopClass,a=e.spaceBottomClass,l=e.bgImg,c=e.image,d=e.dateTime;return(0,n.jsx)("div",{className:(0,i.A)("funfact-area",s,a),style:{backgroundImage:"url(".concat(""+l,")")},children:(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"row align-items-center",children:[(0,n.jsx)("div",{className:"col-lg-6 mb-md-5",children:(0,n.jsxs)("div",{className:"funfact-content funfact-content--style2 text-center",children:[(0,n.jsx)("h2",{children:"Deal of the day"}),(0,n.jsx)("div",{className:"timer",children:(0,n.jsx)(r.A,{date:d})}),(0,n.jsx)("div",{className:"funfact-btn funfact-btn-brown btn-hover",children:(0,n.jsx)(t.N_,{to:"/shop-grid-standard",children:"SHOP NOW"})})]})}),(0,n.jsx)("div",{className:"col-lg-6",children:(0,n.jsx)("div",{className:"funfact-image text-center text-lg-end",children:(0,n.jsx)("img",{src:""+c,alt:"",className:"img-fluid"})})})]})})})}},4668:function(e,s,a){a.d(s,{A:function(){return c}});var i=a(7362),t=a(5371),r=JSON.parse('[{"id":"1","image":"/assets/img/image-slider/image-slider-6.jpg","link":"/shop-grid-standard"},{"id":"2","image":"/assets/img/image-slider/image-slider-7.jpg","link":"/shop-grid-standard"},{"id":"3","image":"/assets/img/image-slider/image-slider-8.jpg","link":"/shop-grid-standard"},{"id":"4","image":"/assets/img/image-slider/image-slider-9.jpg","link":"/shop-grid-standard"},{"id":"5","image":"/assets/img/image-slider/image-slider-10.jpg","link":"/shop-grid-standard"},{"id":"6","image":"/assets/img/image-slider/image-slider-11.jpg","link":"/shop-grid-standard"},{"id":"7","image":"/assets/img/image-slider/image-slider-12.jpg","link":"/shop-grid-standard"},{"id":"8","image":"/assets/img/image-slider/image-slider-13.jpg","link":"/shop-grid-standard"}]'),n=a(579),l={loop:!1,grabCursor:!0,breakpoints:{320:{slidesPerView:2},640:{slidesPerView:3},768:{slidesPerView:4},1024:{slidesPerView:8}}},c=function(){return(0,n.jsx)("div",{className:"image-slider-area",children:(0,n.jsx)("div",{className:"image-slider-active",children:r&&(0,n.jsx)(i.A,{options:l,children:r.map((function(e,s){return(0,n.jsx)(i.q,{children:(0,n.jsx)(t.A,{data:e})},s)}))})})})}},3006:function(e,s,a){a.d(s,{A:function(){return N}});var i=a(3024),t=a(3702),r=a(8067),n=a(9456),l=a(7362),c=a(2821),d=a(5544),o=a(5043),m=a(5475),u=a(425),p=a(5721),g=a(4990),h=a(3492),x=a(579),j=function(e){var s=e.product,a=e.currency,t=e.cartItem,r=e.wishlistItem,l=e.compareItem,j=e.spaceBottomClass,v=e.colorClass,f=e.productGridStyleClass,N=(0,o.useState)(!1),b=(0,d.A)(N,2),y=b[0],C=b[1],A=(0,c.do)(s.price,s.discount),w=+(s.price*a.currencyRate).toFixed(2),S=+(A*a.currencyRate).toFixed(2),k=(0,n.wA)();return(0,x.jsxs)(o.Fragment,{children:[(0,x.jsxs)("div",{className:(0,i.A)("product-wrap-10",j,v,f),children:[(0,x.jsxs)("div",{className:"product-img",children:[(0,x.jsxs)(m.N_,{to:"/product/"+s.id,children:[(0,x.jsx)("img",{className:"default-img img-fluid",src:""+s.image[0],alt:""}),s.image.length>1?(0,x.jsx)("img",{className:"hover-img img-fluid",src:""+s.image[1],alt:""}):""]}),s.discount||s.new?(0,x.jsxs)("div",{className:"product-img-badges",children:[s.discount?(0,x.jsxs)("span",{children:["-",s.discount,"%"]}):"",s.new?(0,x.jsx)("span",{children:"New"}):""]}):"",(0,x.jsxs)("div",{className:"product-action-2",children:[s.affiliateLink?(0,x.jsxs)("a",{href:s.affiliateLink,rel:"noopener noreferrer",target:"_blank",title:"Buy now",children:[" ",(0,x.jsx)("i",{className:"fa fa-shopping-cart"})," "]}):s.variation&&s.variation.length>=1?(0,x.jsx)(m.N_,{to:"".concat("","/product/").concat(s.id),title:"Select options",children:(0,x.jsx)("i",{className:"fa fa-cog"})}):s.stock&&s.stock>0?(0,x.jsxs)("button",{onClick:function(){return k((0,p.bE)(s))},className:void 0!==t&&t.quantity>0?"active":"",disabled:void 0!==t&&t.quantity>0,title:void 0!==t?"Added to cart":"Add to cart",children:[" ",(0,x.jsx)("i",{className:"fa fa-shopping-cart"})," "]}):(0,x.jsx)("button",{disabled:!0,className:"active",title:"Out of stock",children:(0,x.jsx)("i",{className:"fa fa-shopping-cart"})}),(0,x.jsx)("button",{onClick:function(){return C(!0)},title:"Quick View",children:(0,x.jsx)("i",{className:"fa fa-eye"})}),(0,x.jsx)("button",{className:void 0!==l?"active":"",disabled:void 0!==l,title:void 0!==l?"Added to compare":"Add to compare",onClick:function(){return k((0,h.wL)(s))},children:(0,x.jsx)("i",{className:"fa fa-retweet"})}),(0,x.jsx)("button",{className:void 0!==r?"active":"",disabled:void 0!==r,title:void 0!==r?"Added to wishlist":"Add to wishlist",onClick:function(){return k((0,g.U4)(s))},children:(0,x.jsx)("i",{className:"fa fa-heart-o"})})]})]}),(0,x.jsx)("div",{className:"product-content-2",children:(0,x.jsxs)("div",{className:"title-price-wrap-2",children:[(0,x.jsx)("h3",{children:(0,x.jsx)(m.N_,{to:"/product/"+s.id,children:s.name})}),(0,x.jsx)("div",{className:"price-2",children:null!==A?(0,x.jsxs)(o.Fragment,{children:[(0,x.jsx)("span",{className:"old",children:a.currencySymbol+w}),(0,x.jsx)("span",{children:a.currencySymbol+S})," "]}):(0,x.jsxs)("span",{children:[a.currencySymbol+w," "]})})]})})]}),(0,x.jsx)(u.A,{show:y,onHide:function(){return C(!1)},product:s,currency:a,discountedPrice:A,finalProductPrice:w,finalDiscountedPrice:S,wishlistItem:r,compareItem:l})]})},v={loop:!1,slidesPerView:1,grabCursor:!0,spaceBetween:30,breakpoints:{320:{slidesPerView:1},576:{slidesPerView:2},768:{slidesPerView:3},1024:{slidesPerView:4}}},f=function(e){var s=e.spaceBottomClass,a=e.category,t=e.productGridStyleClass,r=e.type,d=(0,n.d4)((function(e){return e.product})).products,o=(0,n.d4)((function(e){return e.currency})),m=(0,n.d4)((function(e){return e.cart})).cartItems,u=(0,n.d4)((function(e){return e.wishlist})).wishlistItems,p=(0,n.d4)((function(e){return e.compare})).compareItems,g=(0,c.d$)(d,a,r,6);return null!==g&&void 0!==g&&g.length?(0,x.jsx)("div",{className:(0,i.A)("related-product-area",s),children:(0,x.jsx)(l.A,{options:v,children:g.map((function(e){return(0,x.jsx)(l.q,{children:(0,x.jsx)(j,{spaceBottomClass:s,productGridStyleClass:t,product:e,currency:o,cartItem:m.find((function(s){return s.id===e.id})),wishlistItem:u.find((function(s){return s.id===e.id})),compareItem:p.find((function(s){return s.id===e.id}))})},e.id)}))})}):(0,x.jsx)("p",{children:"No Products Found"})},N=function(e){var s=e.spaceTopClass,a=e.spaceBottomClass,n=e.category,l=e.productTabClass,c=e.productGridStyleClass;return(0,x.jsx)("div",{className:(0,i.A)("product-area",s,a),children:(0,x.jsx)("div",{className:"container",children:(0,x.jsxs)(t.A.Container,{defaultActiveKey:"bestSeller",children:[(0,x.jsxs)(r.A,{variant:"pills",className:"product-tab-list-7 justify-content-center mb-60 ".concat(l||""),children:[(0,x.jsx)(r.A.Item,{children:(0,x.jsx)(r.A.Link,{eventKey:"newArrival",children:(0,x.jsx)("h4",{children:"New Arrivals"})})}),(0,x.jsx)(r.A.Item,{children:(0,x.jsx)(r.A.Link,{eventKey:"bestSeller",children:(0,x.jsx)("h4",{children:"Best Sellers"})})}),(0,x.jsx)(r.A.Item,{children:(0,x.jsx)(r.A.Link,{eventKey:"saleItems",children:(0,x.jsx)("h4",{children:"Sale Items"})})})]}),(0,x.jsxs)(t.A.Content,{children:[(0,x.jsx)(t.A.Pane,{eventKey:"newArrival",children:(0,x.jsx)(f,{category:n,type:"new",spaceBottomClass:"mb-25",productGridStyleClass:c})}),(0,x.jsx)(t.A.Pane,{eventKey:"bestSeller",children:(0,x.jsx)(f,{category:n,type:"bestSeller",spaceBottomClass:"mb-25",productGridStyleClass:c})}),(0,x.jsx)(t.A.Pane,{eventKey:"saleItems",children:(0,x.jsx)(f,{category:n,type:"saleItems",spaceBottomClass:"mb-25",productGridStyleClass:c})})]})]})})})}},4344:function(e,s,a){var i=a(3024),t=a(7362),r=a(5672),n=a(3100),l=a(579),c={slidesPerView:1,loop:!0,autoplay:!0};s.A=function(e){var s=e.spaceTopClass,a=e.spaceBottomClass,d=e.spaceLeftClass,o=e.spaceRightClass,m=e.bgColorClass,u=e.testimonialClass;return(0,l.jsx)("div",{className:(0,i.A)("testimonial-area",s,a,d,o,m),children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row",children:(0,l.jsx)("div",{className:"col-lg-10 mx-auto",children:(0,l.jsx)("div",{className:"testimonial-active nav-style-1 nav-testi-style",children:r&&(0,l.jsx)(t.A,{options:c,children:r.map((function(e,s){return(0,l.jsx)(t.q,{children:(0,l.jsx)(n.A,{data:e,testimonialClass:u})},s)}))})})})})})})}},5672:function(e){e.exports=JSON.parse('[{"id":"1","image":"/assets/img/testimonial/testi-1.png","content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.","customerName":"Grace Alvarado","title":"customer"},{"id":"2","image":"/assets/img/testimonial/testi-1.png","content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.","customerName":"John Doe","title":"customer"}]')}}]);
//# sourceMappingURL=9397.e44db798.chunk.js.map