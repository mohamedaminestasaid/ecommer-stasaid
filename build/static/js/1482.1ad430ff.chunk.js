"use strict";(self.webpackChunkStickerify_react=self.webpackChunkStickerify_react||[]).push([[1482],{8043:function(e,s,a){var t=a(3024),i=a(579);s.A=function(e){var s=e.data,a=e.spaceBottomClass;return(0,i.jsx)("div",{className:(0,t.A)("single-brand-logo",a),children:(0,i.jsx)("img",{src:""+s.image,alt:""})})}},8032:function(e,s,a){a.d(s,{A:function(){return o}});var t=a(5544),i=a(3024),r=a(5043),n=function(e){var s=new Date(e).getTime(),a=(0,r.useState)(s-(new Date).getTime()),i=(0,t.A)(a,2),n=i[0],l=i[1];return(0,r.useEffect)((function(){if(!(n<=0)){var e=setInterval((function(){l(s-(new Date).getTime())}),1e3);return function(){return clearInterval(e)}}}),[s,n]),function(e){return e<=0?[0,0,0,0]:[Math.floor(e/864e5),Math.floor(e%864e5/36e5),Math.floor(e%36e5/6e4),Math.floor(e%6e4/1e3)]}(n)},l=a(579),c=function(e){var s=e.value,a=e.type;return(0,l.jsxs)("span",{className:"cdown",children:[s," ",(0,l.jsx)("p",{children:a})]})},o=function(e){var s=e.date,a=e.className,r=n(s),o=(0,t.A)(r,4),d=o[0],u=o[1],m=o[2],p=o[3];return(0,l.jsxs)("div",{className:(0,i.A)("timer timer-style",a),children:[(0,l.jsx)(c,{value:d,type:"days"}),(0,l.jsx)(c,{value:u,type:"hours"}),(0,l.jsx)(c,{value:m,type:"minutes"}),(0,l.jsx)(c,{value:p,type:"secs"})]})}},4943:function(e,s,a){var t=a(3024),i=a(9735),r=a(579),n=function(e){var s,a=e.status,i=e.message,n=e.onValidated,l=e.spaceTopClass,c=e.subscribeBtnClass;return(0,r.jsx)("div",{className:(0,t.A)("subscribe-form-3",l),children:(0,r.jsxs)("div",{className:"mc-form",children:[(0,r.jsx)("div",{children:(0,r.jsx)("input",{className:"email",ref:function(e){return s=e},type:"email",placeholder:"Your Email Address",required:!0})}),"sending"===a&&(0,r.jsx)("div",{style:{color:"#3498db",fontSize:"12px"},children:"sending..."}),"error"===a&&(0,r.jsx)("div",{style:{color:"#e74c3c",fontSize:"12px"},dangerouslySetInnerHTML:{__html:i}}),"success"===a&&(0,r.jsx)("div",{style:{color:"#2ecc71",fontSize:"12px"},dangerouslySetInnerHTML:{__html:i}}),(0,r.jsx)("div",{className:"clear-3 ".concat(c||""),children:(0,r.jsx)("button",{className:"button",onClick:function(){s&&s.value.indexOf("@")>-1&&n({EMAIL:s.value}),s.value=""},children:"SUBSCRIBE"})})]})})};s.A=function(e){var s=e.mailchimpUrl,a=e.spaceTopClass,t=e.subscribeBtnClass;return(0,r.jsx)("div",{children:(0,r.jsx)(i.A,{url:s,render:function(e){var s=e.subscribe,i=e.status,l=e.message;return(0,r.jsx)(n,{status:i,message:l,onValidated:function(e){return s(e)},spaceTopClass:a,subscribeBtnClass:t})}})})}},4829:function(e,s,a){var t=a(5043),i=a(7766),r=a(5896),n=a(6998),l=a(579);s.A=function(e){var s=e.children,a=e.headerContainerClass,c=e.headerTop,o=e.headerBorderStyle,d=e.headerPaddingClass;return(0,l.jsxs)(t.Fragment,{children:[(0,l.jsx)(i.A,{layout:a,top:c,borderStyle:o,headerPaddingClass:d}),s,(0,l.jsx)(r.A,{backgroundColorClass:"bg-gray",spaceTopClass:"pt-100",spaceBottomClass:"mb-70 pb-70",spaceLeftClass:"ml-70",spaceRightClass:"mr-70"}),(0,l.jsx)(n.A,{})]})}},1482:function(e,s,a){a.r(s),a.d(s,{default:function(){return y}});var t=a(5043),i=a(2168),r=a(4829),n=a(3024),l=a(8906),c=a(7362),o=JSON.parse('[{"id":1,"title":"Smart Products","subtitle":"Winter Offer 2024 Collection","image":"/assets/img/slider/slider-33.jpg","url":"/shop-grid-standard"},{"id":2,"title":"Smart Products","subtitle":"Summer Offer 2024 Collection","image":"/assets/img/slider/slider-33.jpg","url":"/shop-grid-standard"}]'),d=a(5475),u=a(579),m=function(e){var s=e.data;return(0,u.jsx)("div",{className:"single-slider slider-height-1 slider-height-res15 d-flex align-items-center slider-height-res bg-img",style:{backgroundImage:"url(".concat(""+s.image,")")},children:(0,u.jsx)("div",{className:"container",children:(0,u.jsx)("div",{className:"row",children:(0,u.jsx)("div",{className:"col-xl-6 col-lg-6 col-md-7",children:(0,u.jsxs)("div",{className:"slider-content slider-content-10 slider-animated-1",children:[(0,u.jsx)("h3",{className:"animated",children:s.title}),(0,u.jsx)("h1",{className:"animated",dangerouslySetInnerHTML:{__html:s.subtitle}}),(0,u.jsx)("div",{className:"slider-btn btn-hover btn-hover--blue",children:(0,u.jsx)(d.N_,{className:"animated",to:""+s.url,children:"SHOP NOW"})})]})})})})})},p={effect:"fade",fadeEffect:{crossFade:!0},modules:[l._R],loop:!0,speed:1e3,navigation:!0,autoHeight:!1},h=function(e){var s=e.spaceLeftClass,a=e.spaceRightClass,t=e.spaceBottomClass;return(0,u.jsx)("div",{className:(0,n.A)("slider-area",s,a,t),children:(0,u.jsx)("div",{className:"slider-active nav-style-3 nav-style-3--blue",children:o&&(0,u.jsx)(c.A,{options:p,children:o.map((function(e,s){return(0,u.jsx)(c.q,{children:(0,u.jsx)(m,{data:e})},s)}))})})})},g=a(3006),x=function(e){var s=e.spaceBottomClass;return(0,u.jsx)("div",{className:(0,n.A)("banner-area",s),children:(0,u.jsx)("div",{className:"container",children:(0,u.jsxs)("div",{className:"row",children:[(0,u.jsx)("div",{className:"col-lg-6 pb-30",children:(0,u.jsxs)("div",{className:"single-banner-3",children:[(0,u.jsx)(d.N_,{to:"/shop-grid-standard",children:(0,u.jsx)("img",{src:"/assets/img/banner/banner-46.jpg",alt:"",className:"img-fluid"})}),(0,u.jsxs)("div",{className:"banner-content-3 banner-content-3--white-content banner-content-3--right",children:[(0,u.jsxs)("h4",{children:["Up To 40% Off ",(0,u.jsx)("br",{})," All New Products"]}),(0,u.jsx)(d.N_,{to:"/shop-grid-standard",children:"Shop Now"})]})]})}),(0,u.jsx)("div",{className:"col-lg-6 pb-30",children:(0,u.jsxs)("div",{className:"single-banner-3",children:[(0,u.jsx)(d.N_,{to:"/shop-grid-standard",children:(0,u.jsx)("img",{src:"/assets/img/banner/banner-47.jpg",alt:"",className:"img-fluid"})}),(0,u.jsxs)("div",{className:"banner-content-3 banner-content-3--white-content",children:[(0,u.jsxs)("h4",{children:["Free Shipping & ",(0,u.jsx)("br",{})," The Best Items Granted"]}),(0,u.jsx)(d.N_,{to:"/shop-grid-standard",children:"Shop Now"})]})]})})]})})})},j=a(1730),b=a(6033),f=a(7638),v=a(4260),N=a(4943),C=function(e){var s=e.spaceTopClass,a=e.spaceBottomClass,t=e.spaceLeftClass,i=e.spaceRightClass,r=e.subscribeBtnClass,l=e.newsletterBg;return(0,u.jsx)("div",{className:(0,n.A)("subscribe-area-3 bg-img",s,a,t,i),style:{backgroundImage:"url(".concat(""+l,")")},children:(0,u.jsx)("div",{className:"container-fluid",children:(0,u.jsx)("div",{className:"row",children:(0,u.jsx)("div",{className:"col-xl-5 col-lg-7 col-md-10 ms-auto me-auto",children:(0,u.jsxs)("div",{className:"subscribe-style-3 subscribe-style-3--blue text-center",children:[(0,u.jsx)("h2",{children:"SUBSCRIBE NOW"}),(0,u.jsx)("p",{children:"Subscribe to our newsletter to receive news on update"}),(0,u.jsx)(N.A,{mailchimpUrl:"//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef",spaceTopClass:"mt-35",subscribeBtnClass:r})]})})})})})},y=function(){return(0,u.jsxs)(t.Fragment,{children:[(0,u.jsx)(i.A,{titleTemplate:"Furniture Shop Home",description:"Furniture shop home of Stickerify"}),(0,u.jsxs)(r.A,{headerTop:"visible",headerContainerClass:"container-fluid",headerBorderStyle:"fluid-border",headerPaddingClass:"header-padding-2",children:[(0,u.jsx)(h,{spaceLeftClass:"ml-70",spaceRightClass:"mr-70",spaceBottomClass:"pb-100"}),(0,u.jsx)(g.A,{spaceBottomClass:"pb-70",category:"furniture",productGridStyleClass:"product-wrap-10--style2 product-wrap-10--style2--blue"}),(0,u.jsx)(x,{spaceBottomClass:"pb-70"}),(0,u.jsx)(j.A,{spaceBottomClass:"pb-115",image:"/assets/img/banner/deal-10.png",dateTime:"November 13, 2023 12:12:00"}),(0,u.jsx)(b.A,{spaceTopClass:"pt-100",spaceBottomClass:"pb-95",spaceLeftClass:"ml-70",spaceRightClass:"mr-70",bgColorClass:"bg-gray-3",backgroundImage:"/assets/img/bg/testimonial-bg.jpg"}),(0,u.jsx)(v.A,{spaceTopClass:"pt-100",spaceBottomClass:"pb-70"}),(0,u.jsx)(C,{subscribeBtnClass:"dark-blue-subscribe",newsletterBg:"/assets/img/bg/newsletter-bg.jpg",spaceTopClass:"pt-100",spaceBottomClass:"pb-95",spaceLeftClass:"ml-70",spaceRightClass:"mr-70"}),(0,u.jsx)(f.A,{spaceBottomClass:"pb-100",spaceTopClass:"pt-100",noBorder:!0})]})]})}},4260:function(e,s,a){a.d(s,{A:function(){return o}});var t=a(3024),i=JSON.parse('[{"id":1,"image":"/assets/img/blog/blog-13.jpg","category":["lifestyle","men"],"title":"A guide to latest trends","url":"/blog-details-standard","author":"Admin","authorUrl":"/blog-standard"},{"id":2,"image":"/assets/img/blog/blog-14.jpg","category":["lifestyle"],"title":"Five ways to lead a happy life","url":"/blog-details-standard","author":"Admin","authorUrl":"/blog-standard"},{"id":3,"image":"/assets/img/blog/blog-15.jpg","category":["lifestyle"],"title":"Tips on having a happy life","url":"/blog-details-standard","author":"Admin","authorUrl":"/blog-standard"}]'),r=a(5475),n=a(579),l=function(e){var s=e.singlePost;return(0,n.jsxs)("div",{className:"blog-wrap-3 mb-30 scroll-zoom",children:[(0,n.jsx)("div",{className:"blog-img mb-30",children:(0,n.jsx)(r.N_,{to:""+s.url,children:(0,n.jsx)("img",{src:""+s.image,alt:""})})}),(0,n.jsxs)("div",{className:"blog-content-wrap",children:[(0,n.jsx)("div",{className:"blog-category-names blog-category-names--style2",children:s.category.map((function(e,s){return(0,n.jsx)("span",{className:"red",children:(s?", ":"")+e},s)}))}),(0,n.jsxs)("div",{className:"blog-content",children:[(0,n.jsx)("h3",{children:(0,n.jsx)(r.N_,{to:""+s.url,children:s.title})}),(0,n.jsx)("span",{children:(0,n.jsx)(r.N_,{to:""+s.url,children:"Read More"})})]})]})]})},c=a(7194),o=function(e){var s=e.spaceTopClass,a=e.spaceBottomClass;return(0,n.jsx)("div",{className:(0,t.A)("blog-area",s,a),children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)(c.A,{titleText:"Our Blog",positionClass:"text-center",borderClass:"bottom-border",spaceClass:"mb-55"}),(0,n.jsx)("div",{className:"row",children:null===i||void 0===i?void 0:i.map((function(e){return(0,n.jsx)("div",{className:"col-lg-4 col-sm-6",children:(0,n.jsx)(l,{singlePost:e})},e.id)}))})]})})}},7638:function(e,s,a){var t=a(3024),i=a(7362),r=a(8043),n=a(4885),l=a(579),c={loop:!0,autoplay:{delay:3e3,disableOnInteraction:!1},grabCursor:!0,breakpoints:{320:{slidesPerView:2},640:{slidesPerView:3},768:{slidesPerView:4},1024:{slidesPerView:5}}};s.A=function(e){var s=e.spaceBottomClass,a=e.spaceTopClass,o=e.noBorder;return(0,l.jsx)("div",{className:(0,t.A)("brand-logo-area",o?"":"border-top border-bottom",s,a),children:(0,l.jsx)("div",{className:"container-fluid",children:(0,l.jsx)("div",{className:"brand-logo-active",children:n&&(0,l.jsx)(i.A,{options:c,children:n.map((function(e,s){return(0,l.jsx)(i.q,{children:(0,l.jsx)(r.A,{data:e})},s)}))})})})})}},1730:function(e,s,a){var t=a(3024),i=a(5475),r=a(8032),n=a(579);s.A=function(e){var s=e.spaceTopClass,a=e.spaceBottomClass,l=e.bgImg,c=e.image,o=e.dateTime;return(0,n.jsx)("div",{className:(0,t.A)("funfact-area",s,a),style:{backgroundImage:"url(".concat(""+l,")")},children:(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"row align-items-center",children:[(0,n.jsx)("div",{className:"col-lg-6 mb-md-5",children:(0,n.jsxs)("div",{className:"funfact-content funfact-content--style2 text-center",children:[(0,n.jsx)("h2",{children:"Deal of the day"}),(0,n.jsx)("div",{className:"timer",children:(0,n.jsx)(r.A,{date:o})}),(0,n.jsx)("div",{className:"funfact-btn funfact-btn-brown btn-hover",children:(0,n.jsx)(i.N_,{to:"/shop-grid-standard",children:"SHOP NOW"})})]})}),(0,n.jsx)("div",{className:"col-lg-6",children:(0,n.jsx)("div",{className:"funfact-image text-center text-lg-end",children:(0,n.jsx)("img",{src:""+c,alt:"",className:"img-fluid"})})})]})})})}},3006:function(e,s,a){a.d(s,{A:function(){return v}});var t=a(3024),i=a(3702),r=a(8067),n=a(9456),l=a(7362),c=a(2821),o=a(5544),d=a(5043),u=a(5475),m=a(425),p=a(5721),h=a(4990),g=a(3492),x=a(579),j=function(e){var s=e.product,a=e.currency,i=e.cartItem,r=e.wishlistItem,l=e.compareItem,j=e.spaceBottomClass,b=e.colorClass,f=e.productGridStyleClass,v=(0,d.useState)(!1),N=(0,o.A)(v,2),C=N[0],y=N[1],A=(0,c.do)(s.price,s.discount),w=+(s.price*a.currencyRate).toFixed(2),S=+(A*a.currencyRate).toFixed(2),B=(0,n.wA)();return(0,x.jsxs)(d.Fragment,{children:[(0,x.jsxs)("div",{className:(0,t.A)("product-wrap-10",j,b,f),children:[(0,x.jsxs)("div",{className:"product-img",children:[(0,x.jsxs)(u.N_,{to:"/product/"+s.id,children:[(0,x.jsx)("img",{className:"default-img img-fluid",src:""+s.image[0],alt:""}),s.image.length>1?(0,x.jsx)("img",{className:"hover-img img-fluid",src:""+s.image[1],alt:""}):""]}),s.discount||s.new?(0,x.jsxs)("div",{className:"product-img-badges",children:[s.discount?(0,x.jsxs)("span",{children:["-",s.discount,"%"]}):"",s.new?(0,x.jsx)("span",{children:"New"}):""]}):"",(0,x.jsxs)("div",{className:"product-action-2",children:[s.affiliateLink?(0,x.jsxs)("a",{href:s.affiliateLink,rel:"noopener noreferrer",target:"_blank",title:"Buy now",children:[" ",(0,x.jsx)("i",{className:"fa fa-shopping-cart"})," "]}):s.variation&&s.variation.length>=1?(0,x.jsx)(u.N_,{to:"".concat("","/product/").concat(s.id),title:"Select options",children:(0,x.jsx)("i",{className:"fa fa-cog"})}):s.stock&&s.stock>0?(0,x.jsxs)("button",{onClick:function(){return B((0,p.bE)(s))},className:void 0!==i&&i.quantity>0?"active":"",disabled:void 0!==i&&i.quantity>0,title:void 0!==i?"Added to cart":"Add to cart",children:[" ",(0,x.jsx)("i",{className:"fa fa-shopping-cart"})," "]}):(0,x.jsx)("button",{disabled:!0,className:"active",title:"Out of stock",children:(0,x.jsx)("i",{className:"fa fa-shopping-cart"})}),(0,x.jsx)("button",{onClick:function(){return y(!0)},title:"Quick View",children:(0,x.jsx)("i",{className:"fa fa-eye"})}),(0,x.jsx)("button",{className:void 0!==l?"active":"",disabled:void 0!==l,title:void 0!==l?"Added to compare":"Add to compare",onClick:function(){return B((0,g.wL)(s))},children:(0,x.jsx)("i",{className:"fa fa-retweet"})}),(0,x.jsx)("button",{className:void 0!==r?"active":"",disabled:void 0!==r,title:void 0!==r?"Added to wishlist":"Add to wishlist",onClick:function(){return B((0,h.U4)(s))},children:(0,x.jsx)("i",{className:"fa fa-heart-o"})})]})]}),(0,x.jsx)("div",{className:"product-content-2",children:(0,x.jsxs)("div",{className:"title-price-wrap-2",children:[(0,x.jsx)("h3",{children:(0,x.jsx)(u.N_,{to:"/product/"+s.id,children:s.name})}),(0,x.jsx)("div",{className:"price-2",children:null!==A?(0,x.jsxs)(d.Fragment,{children:[(0,x.jsx)("span",{className:"old",children:a.currencySymbol+w}),(0,x.jsx)("span",{children:a.currencySymbol+S})," "]}):(0,x.jsxs)("span",{children:[a.currencySymbol+w," "]})})]})})]}),(0,x.jsx)(m.A,{show:C,onHide:function(){return y(!1)},product:s,currency:a,discountedPrice:A,finalProductPrice:w,finalDiscountedPrice:S,wishlistItem:r,compareItem:l})]})},b={loop:!1,slidesPerView:1,grabCursor:!0,spaceBetween:30,breakpoints:{320:{slidesPerView:1},576:{slidesPerView:2},768:{slidesPerView:3},1024:{slidesPerView:4}}},f=function(e){var s=e.spaceBottomClass,a=e.category,i=e.productGridStyleClass,r=e.type,o=(0,n.d4)((function(e){return e.product})).products,d=(0,n.d4)((function(e){return e.currency})),u=(0,n.d4)((function(e){return e.cart})).cartItems,m=(0,n.d4)((function(e){return e.wishlist})).wishlistItems,p=(0,n.d4)((function(e){return e.compare})).compareItems,h=(0,c.d$)(o,a,r,6);return null!==h&&void 0!==h&&h.length?(0,x.jsx)("div",{className:(0,t.A)("related-product-area",s),children:(0,x.jsx)(l.A,{options:b,children:h.map((function(e){return(0,x.jsx)(l.q,{children:(0,x.jsx)(j,{spaceBottomClass:s,productGridStyleClass:i,product:e,currency:d,cartItem:u.find((function(s){return s.id===e.id})),wishlistItem:m.find((function(s){return s.id===e.id})),compareItem:p.find((function(s){return s.id===e.id}))})},e.id)}))})}):(0,x.jsx)("p",{children:"No Products Found"})},v=function(e){var s=e.spaceTopClass,a=e.spaceBottomClass,n=e.category,l=e.productTabClass,c=e.productGridStyleClass;return(0,x.jsx)("div",{className:(0,t.A)("product-area",s,a),children:(0,x.jsx)("div",{className:"container",children:(0,x.jsxs)(i.A.Container,{defaultActiveKey:"bestSeller",children:[(0,x.jsxs)(r.A,{variant:"pills",className:"product-tab-list-7 justify-content-center mb-60 ".concat(l||""),children:[(0,x.jsx)(r.A.Item,{children:(0,x.jsx)(r.A.Link,{eventKey:"newArrival",children:(0,x.jsx)("h4",{children:"New Arrivals"})})}),(0,x.jsx)(r.A.Item,{children:(0,x.jsx)(r.A.Link,{eventKey:"bestSeller",children:(0,x.jsx)("h4",{children:"Best Sellers"})})}),(0,x.jsx)(r.A.Item,{children:(0,x.jsx)(r.A.Link,{eventKey:"saleItems",children:(0,x.jsx)("h4",{children:"Sale Items"})})})]}),(0,x.jsxs)(i.A.Content,{children:[(0,x.jsx)(i.A.Pane,{eventKey:"newArrival",children:(0,x.jsx)(f,{category:n,type:"new",spaceBottomClass:"mb-25",productGridStyleClass:c})}),(0,x.jsx)(i.A.Pane,{eventKey:"bestSeller",children:(0,x.jsx)(f,{category:n,type:"bestSeller",spaceBottomClass:"mb-25",productGridStyleClass:c})}),(0,x.jsx)(i.A.Pane,{eventKey:"saleItems",children:(0,x.jsx)(f,{category:n,type:"saleItems",spaceBottomClass:"mb-25",productGridStyleClass:c})})]})]})})})}},6033:function(e,s,a){a.d(s,{A:function(){return o}});var t=a(3024),i=a(7362),r=a(5672),n=a(579),l=function(e){var s=e.data;e.sliderClass;return(0,n.jsxs)("div",{className:"single-testimonial single-testimonial--style2 text-center",children:[(0,n.jsx)("img",{src:""+s.image,alt:""}),(0,n.jsx)("p",{children:s.content}),(0,n.jsxs)("div",{className:"client-info",children:[(0,n.jsx)("h5",{children:s.customerName}),(0,n.jsx)("span",{children:s.title})]})]})},c={slidesPerView:1,loop:!0,autoplay:!0},o=function(e){var s=e.spaceTopClass,a=e.spaceBottomClass,o=e.spaceLeftClass,d=e.spaceRightClass,u=e.bgColorClass,m=e.backgroundImage;return(0,n.jsx)("div",{className:(0,t.A)("testimonial-area bg-img",s,a,o,d,u),style:{backgroundImage:"url(".concat(""+m,")")},children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:"row",children:(0,n.jsx)("div",{className:"col-lg-10 ms-auto me-auto",children:(0,n.jsx)("div",{className:"testimonial-active nav-style-1 nav-testi-style",children:r&&(0,n.jsx)(i.A,{options:c,children:r.map((function(e,s){return(0,n.jsx)(i.q,{children:(0,n.jsx)(l,{data:e})},s)}))})})})})})})}},4885:function(e){e.exports=JSON.parse('[{"id":"1","image":"/assets/img/brand-logo/brand-logo-1.png"},{"id":"2","image":"/assets/img/brand-logo/brand-logo-2.png"},{"id":"3","image":"/assets/img/brand-logo/brand-logo-3.png"},{"id":"4","image":"/assets/img/brand-logo/brand-logo-4.png"},{"id":"5","image":"/assets/img/brand-logo/brand-logo-5.png"}]')},5672:function(e){e.exports=JSON.parse('[{"id":"1","image":"/assets/img/testimonial/testi-1.png","content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.","customerName":"Grace Alvarado","title":"customer"},{"id":"2","image":"/assets/img/testimonial/testi-1.png","content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.","customerName":"John Doe","title":"customer"}]')}}]);
//# sourceMappingURL=1482.1ad430ff.chunk.js.map