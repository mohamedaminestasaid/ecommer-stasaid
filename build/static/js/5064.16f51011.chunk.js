"use strict";(self.webpackChunkStickerify_react=self.webpackChunkStickerify_react||[]).push([[5064],{6801:function(e,s,a){var i=a(3024),l=a(5475),t=a(579);s.A=function(e){var s=e.footerLogo,a=e.spaceBottomClass,r=e.colorClass;return(0,t.jsxs)("div",{className:(0,i.A)("copyright",a,r),children:[(0,t.jsx)("div",{className:"footer-logo",children:(0,t.jsx)(l.N_,{to:"/",children:(0,t.jsx)("img",{alt:"",src:""+s})})}),(0,t.jsxs)("p",{children:["\xa9 ",(new Date).getFullYear()," ",(0,t.jsx)("a",{href:"https://hasthemes.com",rel:"noopener noreferrer",target:"_blank",children:"Stickerify"}),".",(0,t.jsx)("br",{})," All Rights Reserved"]})]})}},2304:function(e,s,a){a.d(s,{A:function(){return c}});var i=a(3024),l=a(9735),t=a(579),r=function(e){var s,a=e.status,i=e.message,l=e.onValidated;return(0,t.jsxs)("div",{className:"subscribe-form",children:[(0,t.jsxs)("div",{className:"mc-form",children:[(0,t.jsx)("div",{children:(0,t.jsx)("input",{id:"mc-form-email",className:"email",ref:function(e){return s=e},type:"email",placeholder:"Enter your email address..."})}),(0,t.jsx)("div",{className:"clear",children:(0,t.jsx)("button",{className:"button",onClick:function(){s&&s.value.indexOf("@")>-1&&l({EMAIL:s.value}),document.getElementById("mc-form-email").value=""},children:"SUBSCRIBE"})})]}),"sending"===a&&(0,t.jsx)("div",{style:{color:"#3498db",fontSize:"12px"},children:"sending..."}),"error"===a&&(0,t.jsx)("div",{style:{color:"#e74c3c",fontSize:"12px"},dangerouslySetInnerHTML:{__html:i}}),"success"===a&&(0,t.jsx)("div",{style:{color:"#2ecc71",fontSize:"12px"},dangerouslySetInnerHTML:{__html:i}})]})},n=function(e){var s=e.mailchimpUrl;return(0,t.jsx)("div",{children:(0,t.jsx)(l.A,{url:s,render:function(e){var s=e.subscribe,a=e.status,i=e.message;return(0,t.jsx)(r,{status:a,message:i,onValidated:function(e){return s(e)}})}})})},c=function(e){var s=e.spaceBottomClass,a=e.spaceLeftClass,l=e.sideMenu,r=e.colorClass,c=e.widgetColorClass;return(0,t.jsxs)("div",{className:(0,i.A)("footer-widget",s,l?"ml-ntv5":a,c),children:[(0,t.jsx)("div",{className:"footer-title",children:(0,t.jsx)("h3",{children:"SUBSCRIBE"})}),(0,t.jsxs)("div",{className:(0,i.A)("subscribe-style",r),children:[(0,t.jsx)("p",{children:"Get E-mail updates about our latest shop and special offers."}),(0,t.jsx)(n,{mailchimpUrl:"//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef"})]})]})}},3100:function(e,s,a){var i=a(3024),l=a(579);s.A=function(e){var s=e.data,a=e.testimonialClass;return(0,l.jsxs)("div",{className:(0,i.A)(a||"single-testimonial","text-center"),children:[(0,l.jsx)("img",{src:""+s.image,alt:""}),(0,l.jsx)("p",{children:s.content}),(0,l.jsxs)("div",{className:"client-info",children:[(0,l.jsx)("i",{className:"fa fa-map-signs"}),(0,l.jsx)("h5",{children:s.customerName}),(0,l.jsx)("span",{children:s.title})]})]})}},8062:function(e,s,a){var i=a(5043),l=a(7766),t=a(5896),r=a(6998),n=a(579);s.A=function(e){var s=e.children,a=e.headerContainerClass,c=e.headerTop,o=e.headerPaddingClass,d=e.headerPositionClass;return(0,n.jsxs)(i.Fragment,{children:[(0,n.jsx)(l.A,{layout:a,top:c,headerPaddingClass:o,headerPositionClass:d}),s,(0,n.jsx)(t.A,{backgroundColorClass:"bg-gray",spaceTopClass:"pt-100",spaceBottomClass:"pb-70"}),(0,n.jsx)(r.A,{})]})}},5064:function(e,s,a){a.r(s),a.d(s,{default:function(){return A}});var i=a(5043),l=a(2168),t=a(8062),r=a(8906),n=a(7362),c=JSON.parse('[{"id":1,"title":"Enjoy This Offer Today","subtitle":"New Collection <br>Sale 40%","image":"/assets/img/slider/slider-16.jpg","url":"/shop-grid-standard"},{"id":2,"title":"Enjoy This Offer Today","subtitle":"New Collection <br>Sale 20%","image":"/assets/img/slider/slider-16.jpg","url":"/shop-grid-standard"}]'),o=a(5475),d=a(579),m=function(e){var s=e.data;return(0,d.jsx)("div",{className:"single-slider-2 slider-height-2 d-flex align-items-center bg-img",style:{backgroundImage:"url(".concat(""+s.image,")")},children:(0,d.jsx)("div",{className:"container",children:(0,d.jsx)("div",{className:"row",children:(0,d.jsx)("div",{className:"col-xl-6 col-lg-7 col-md-8 col-12 ms-auto",children:(0,d.jsxs)("div",{className:"slider-content-2 slider-content-2--white slider-animated-1",children:[(0,d.jsx)("h3",{className:"animated no-style",children:s.title}),(0,d.jsx)("h1",{className:"animated",dangerouslySetInnerHTML:{__html:s.subtitle}}),(0,d.jsx)("div",{className:"slider-btn btn-hover",children:(0,d.jsx)(o.N_,{className:"animated rounden-btn",to:""+s.url,children:"SHOP NOW"})})]})})})})})},h={effect:"fade",fadeEffect:{crossFade:!0},modules:[r._R],loop:!0,speed:1e3,navigation:!0,autoHeight:!1},x=function(){return(0,d.jsx)("div",{className:"slider-area",children:(0,d.jsx)("div",{className:"slider-active nav-style-1",children:c&&(0,d.jsx)(n.A,{options:h,children:c.map((function(e,s){return(0,d.jsx)(n.q,{children:(0,d.jsx)(m,{data:e})},s)}))})})})},u=a(3024),j=JSON.parse('[{"id":1,"image":"/assets/img/banner/banner11.jpg","title":"Male Kids","subtitle":"Starting at","price":"$99.00","link":"/shop-grid-standard"},{"id":2,"image":"/assets/img/banner/banner12.jpg","title":"Female kids","subtitle":"Starting at","price":"$79.00","link":"/shop-grid-standard"},{"id":3,"image":"/assets/img/banner/banner13.jpg","title":"Featured","subtitle":"Starting at","price":"$29.00","link":"/shop-grid-standard"}]'),p=function(e){var s=e.data,a=e.spaceBottomClass;return(0,d.jsxs)("div",{className:(0,u.A)("single-banner",a),children:[(0,d.jsx)(o.N_,{to:""+s.link,children:(0,d.jsx)("img",{src:""+s.image,alt:""})}),(0,d.jsxs)("div",{className:"banner-content banner-pink",children:[(0,d.jsx)("h3",{children:s.title}),(0,d.jsxs)("h4",{children:[s.subtitle," ",(0,d.jsx)("span",{children:s.price})]}),(0,d.jsx)(o.N_,{to:s.link,children:(0,d.jsx)("i",{className:"fa fa-long-arrow-right"})})]})]})},g=function(e){var s=e.spaceTopClass,a=e.spaceBottomClass;return(0,d.jsx)("div",{className:(0,u.A)("banner-area",s,a),children:(0,d.jsx)("div",{className:"container",children:(0,d.jsx)("div",{className:"row",children:null===j||void 0===j?void 0:j.map((function(e,s){return(0,d.jsx)("div",{className:"col-lg-4 col-md-4",children:(0,d.jsx)(p,{data:e,spaceBottomClass:"mb-30"})},s)}))})})})},v=a(5540),f=a(4344),b=a(3038),N=a(3454),C=a(9340),A=function(){return(0,d.jsxs)(i.Fragment,{children:[(0,d.jsx)(l.A,{titleTemplate:"Kids Fashion Home",description:"Kids fashion home of Stickerify"}),(0,d.jsxs)(t.A,{headerTop:"visible",children:[(0,d.jsx)(x,{}),(0,d.jsx)(g,{spaceTopClass:"pt-95",spaceBottomClass:"pb-70"}),(0,d.jsx)(b.A,{category:"kids",spaceTopClass:"pt-100",spaceBottomClass:"pb-100",sectionTitle:"Featured Products",bgColorClass:"bg-gray-3"}),(0,d.jsx)(v.A,{spaceTopClass:"pt-95",spaceBottomClass:"pb-95",dateTime:"November 13, 2023 12:12:00",countDownImage:"/assets/img/banner/deal-4.jpg"}),(0,d.jsx)(f.A,{spaceTopClass:"pt-95",spaceBottomClass:"pb-95",spaceLeftClass:"ml-70",spaceRightClass:"mr-70",bgColorClass:"bg-gray-3"}),(0,d.jsx)(N.A,{category:"kids",spaceTopClass:"pt-95",sectionTitle:"Best Products"}),(0,d.jsx)(C.A,{spaceTopClass:"pt-80",spaceBottomClass:"pb-95",subscribeBtnClass:"dark-red-subscribe"})]})]})}},5540:function(e,s,a){var i=a(3024),l=a(5475),t=a(8032),r=a(579);s.A=function(e){var s=e.spaceTopClass,a=e.spaceBottomClass,n=e.dateTime,c=e.countDownImage;return(0,r.jsx)("div",{className:(0,i.A)("funfact-area",s,a),children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"row align-items-center",children:[(0,r.jsx)("div",{className:"col-md-8 col-lg-6 order-1 order-lg-2",children:(0,r.jsxs)("div",{className:"funfact-content funfact-res text-center",children:[(0,r.jsx)("h2",{children:"Deal of the day"}),(0,r.jsx)("div",{className:"timer",children:(0,r.jsx)(t.A,{date:n})}),(0,r.jsx)("div",{className:"funfact-btn funfact-btn--round-shape funfact-btn-red btn-hover",children:(0,r.jsx)(l.N_,{to:"/shop-grid-standard",children:"SHOP NOW"})})]})}),(0,r.jsx)("div",{className:"col-md-4 col-lg-6 order-2 order-lg-1",children:(0,r.jsx)("div",{className:"funfact-image",children:(0,r.jsx)(l.N_,{to:"/shop-grid-standard",children:(0,r.jsx)("img",{src:""+c,alt:"",className:"img-fluid"})})})})]})})})}},5896:function(e,s,a){var i=a(3024),l=a(5475),t=(a(6801),a(2304)),r=a(579);s.A=function(e){var s=e.backgroundColorClass,a=e.spaceTopClass,n=e.spaceBottomClass,c=e.spaceLeftClass,o=e.spaceRightClass,d=e.containerClass,m=e.extraFooterClass,h=e.sideMenu;return(0,r.jsx)("footer",{className:(0,i.A)("footer-area",s,a,n,m,c,o),children:(0,r.jsx)("div",{className:"".concat(d||"container"),children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"".concat(h?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,r.jsx)("h1",{style:{fontWeight:600},children:"Stickerify"})}),(0,r.jsx)("div",{className:"".concat(h?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,r.jsxs)("div",{className:"footer-widget mb-30 ml-30",children:[(0,r.jsx)("div",{className:"footer-title",children:(0,r.jsx)("h3",{children:"ABOUT US"})}),(0,r.jsx)("div",{className:"footer-list",children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)(l.N_,{to:"/about",children:"About us"})}),(0,r.jsx)("li",{children:(0,r.jsx)(l.N_,{to:"#/",children:"Store location"})}),(0,r.jsx)("li",{children:(0,r.jsx)(l.N_,{to:"/contact",children:"Contact"})}),(0,r.jsx)("li",{children:(0,r.jsx)(l.N_,{to:"#/",children:"Orders tracking"})})]})})]})}),(0,r.jsx)("div",{className:"".concat(h?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,r.jsxs)("div",{className:"".concat(h?"footer-widget mb-30 ml-95":"footer-widget mb-30 ml-50"),children:[(0,r.jsx)("div",{className:"footer-title",children:(0,r.jsx)("h3",{children:"USEFUL LINKS"})}),(0,r.jsx)("div",{className:"footer-list",children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{style:{fontWeight:"bold",textDecoration:"underline"},children:(0,r.jsx)(l.N_,{to:"/return",children:"Returns"})}),(0,r.jsx)("li",{children:(0,r.jsx)(l.N_,{to:"#/",children:"Support Policy"})}),(0,r.jsx)("li",{children:(0,r.jsx)(l.N_,{to:"#/",children:"Size guide"})}),(0,r.jsx)("li",{children:(0,r.jsx)(l.N_,{to:"#/",children:"FAQs"})})]})})]})}),(0,r.jsx)("div",{className:"".concat(h?"col-xl-3 col-sm-4":"col-lg-2 col-sm-6"),children:(0,r.jsxs)("div",{className:"".concat(h?"footer-widget mb-30 ml-145":"footer-widget mb-30 ml-75"),children:[(0,r.jsx)("div",{className:"footer-title",children:(0,r.jsx)("h3",{children:"FOLLOW US"})}),(0,r.jsx)("div",{className:"footer-list",children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"//www.facebook.com",target:"_blank",rel:"noopener noreferrer",children:"Facebook"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"//www.twitter.com",target:"_blank",rel:"noopener noreferrer",children:"Twitter"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"//www.instagram.com",target:"_blank",rel:"noopener noreferrer",children:"Instagram"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"//www.youtube.com",target:"_blank",rel:"noopener noreferrer",children:"Youtube"})})]})})]})}),(0,r.jsx)("div",{className:"".concat(h?"col-xl-3 col-sm-8":"col-lg-4 col-sm-6"),children:(0,r.jsx)(t.A,{spaceBottomClass:"mb-30",spaceLeftClass:"ml-70",sideMenu:h})})]})})})}},3038:function(e,s,a){var i=a(3024),l=a(3702),t=a(8067),r=a(6387),n=a(4315),c=a(579);s.A=function(e){var s=e.spaceTopClass,a=e.spaceBottomClass,o=e.bgColorClass,d=e.category,m=e.sectionTitle,h=e.bgShape,x=e.colorClass;return(0,c.jsxs)("div",{className:(0,i.A)("product-area product-area--style2",s,a,o),children:[(0,c.jsx)("div",{className:"container",children:(0,c.jsx)("div",{className:"product-tab-slider-wrapper position-relative",children:(0,c.jsxs)(l.A.Container,{defaultActiveKey:"saleItems",children:[(0,c.jsxs)("div",{className:"product-top-bar section-border mb-60",children:[(0,c.jsx)(r.A,{titleText:m}),(0,c.jsxs)(t.A,{variant:"pills",className:"product-tab-list-3 bg-gray-5 text-center",children:[(0,c.jsx)(t.A.Item,{children:(0,c.jsx)(t.A.Link,{eventKey:"newArrival",children:(0,c.jsx)("h4",{children:"New Arrivals"})})}),(0,c.jsx)(t.A.Item,{children:(0,c.jsx)(t.A.Link,{eventKey:"bestSeller",children:(0,c.jsx)("h4",{children:"Best Sellers"})})}),(0,c.jsx)(t.A.Item,{children:(0,c.jsx)(t.A.Link,{eventKey:"saleItems",children:(0,c.jsx)("h4",{children:"Sale Items"})})})]})]}),(0,c.jsxs)(l.A.Content,{children:[(0,c.jsx)(l.A.Pane,{eventKey:"newArrival",children:(0,c.jsx)(n.A,{category:d,type:"new",limit:8,spaceBottomClass:"mb-25",colorClass:x})}),(0,c.jsx)(l.A.Pane,{eventKey:"bestSeller",children:(0,c.jsx)(n.A,{category:d,type:"bestSeller",limit:8,spaceBottomClass:"mb-25",colorClass:x})}),(0,c.jsx)(l.A.Pane,{eventKey:"saleItems",children:(0,c.jsx)(n.A,{category:d,type:"saleItems",limit:8,spaceBottomClass:"mb-25",colorClass:x})})]})]})})}),h?(0,c.jsx)("div",{className:"bg-png-1",children:(0,c.jsx)("img",{src:"/assets/img/bg/shape-2.png",alt:""})}):""]})}},3454:function(e,s,a){var i=a(3024),l=a(3702),t=a(8067),r=a(6387),n=a(4315),c=a(579);s.A=function(e){var s=e.spaceTopClass,a=e.spaceBottomClass,o=e.bgColorClass,d=e.category,m=e.sectionTitle;return(0,c.jsx)("div",{className:(0,i.A)("product-area product-area--style2",s,a,o),children:(0,c.jsx)("div",{className:"container",children:(0,c.jsx)("div",{className:"product-tab-slider-wrapper position-relative",children:(0,c.jsxs)(l.A.Container,{defaultActiveKey:"newArrival",children:[(0,c.jsxs)("div",{className:"product-top-bar section-border mb-60",children:[(0,c.jsx)(r.A,{titleText:m}),(0,c.jsxs)(t.A,{variant:"pills",className:"product-tab-list-3 bg-gray-5 text-center",children:[(0,c.jsx)(t.A.Item,{children:(0,c.jsx)(t.A.Link,{eventKey:"newArrival",children:(0,c.jsx)("h4",{children:"New Arrivals"})})}),(0,c.jsx)(t.A.Item,{children:(0,c.jsx)(t.A.Link,{eventKey:"bestSeller",children:(0,c.jsx)("h4",{children:"Best Sellers"})})}),(0,c.jsx)(t.A.Item,{children:(0,c.jsx)(t.A.Link,{eventKey:"saleItems",children:(0,c.jsx)("h4",{children:"Sale Items"})})})]})]}),(0,c.jsxs)(l.A.Content,{children:[(0,c.jsx)(l.A.Pane,{eventKey:"newArrival",children:(0,c.jsx)(n.A,{category:d,type:"new",limit:8,spaceBottomClass:"mb-25"})}),(0,c.jsx)(l.A.Pane,{eventKey:"bestSeller",children:(0,c.jsx)(n.A,{category:d,type:"bestSeller",limit:8,spaceBottomClass:"mb-25"})}),(0,c.jsx)(l.A.Pane,{eventKey:"saleItems",children:(0,c.jsx)(n.A,{category:d,type:"saleItems",limit:8,spaceBottomClass:"mb-25",sliderClassName:"swiper-slide"})})]})]})})})})}},4344:function(e,s,a){var i=a(3024),l=a(7362),t=a(5672),r=a(3100),n=a(579),c={slidesPerView:1,loop:!0,autoplay:!0};s.A=function(e){var s=e.spaceTopClass,a=e.spaceBottomClass,o=e.spaceLeftClass,d=e.spaceRightClass,m=e.bgColorClass,h=e.testimonialClass;return(0,n.jsx)("div",{className:(0,i.A)("testimonial-area",s,a,o,d,m),children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:"row",children:(0,n.jsx)("div",{className:"col-lg-10 mx-auto",children:(0,n.jsx)("div",{className:"testimonial-active nav-style-1 nav-testi-style",children:t&&(0,n.jsx)(l.A,{options:c,children:t.map((function(e,s){return(0,n.jsx)(l.q,{children:(0,n.jsx)(r.A,{data:e,testimonialClass:h})},s)}))})})})})})})}},5672:function(e){e.exports=JSON.parse('[{"id":"1","image":"/assets/img/testimonial/testi-1.png","content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.","customerName":"Grace Alvarado","title":"customer"},{"id":"2","image":"/assets/img/testimonial/testi-1.png","content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.","customerName":"John Doe","title":"customer"}]')}}]);
//# sourceMappingURL=5064.16f51011.chunk.js.map