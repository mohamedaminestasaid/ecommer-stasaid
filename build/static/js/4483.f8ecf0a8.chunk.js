"use strict";(self.webpackChunkStickerify_react=self.webpackChunkStickerify_react||[]).push([[4483],{6801:function(e,s,r){var n=r(3024),l=r(5475),i=r(579);s.A=function(e){var s=e.footerLogo,r=e.spaceBottomClass,a=e.colorClass;return(0,i.jsxs)("div",{className:(0,n.A)("copyright",r,a),children:[(0,i.jsx)("div",{className:"footer-logo",children:(0,i.jsx)(l.N_,{to:"/",children:(0,i.jsx)("img",{alt:"",src:""+s})})}),(0,i.jsxs)("p",{children:["\xa9 ",(new Date).getFullYear()," ",(0,i.jsx)("a",{href:"https://hasthemes.com",rel:"noopener noreferrer",target:"_blank",children:"Stickerify"}),".",(0,i.jsx)("br",{})," All Rights Reserved"]})]})}},2304:function(e,s,r){r.d(s,{A:function(){return t}});var n=r(3024),l=r(9735),i=r(579),a=function(e){var s,r=e.status,n=e.message,l=e.onValidated;return(0,i.jsxs)("div",{className:"subscribe-form",children:[(0,i.jsxs)("div",{className:"mc-form",children:[(0,i.jsx)("div",{children:(0,i.jsx)("input",{id:"mc-form-email",className:"email",ref:function(e){return s=e},type:"email",placeholder:"Enter your email address..."})}),(0,i.jsx)("div",{className:"clear",children:(0,i.jsx)("button",{className:"button",onClick:function(){s&&s.value.indexOf("@")>-1&&l({EMAIL:s.value}),document.getElementById("mc-form-email").value=""},children:"SUBSCRIBE"})})]}),"sending"===r&&(0,i.jsx)("div",{style:{color:"#3498db",fontSize:"12px"},children:"sending..."}),"error"===r&&(0,i.jsx)("div",{style:{color:"#e74c3c",fontSize:"12px"},dangerouslySetInnerHTML:{__html:n}}),"success"===r&&(0,i.jsx)("div",{style:{color:"#2ecc71",fontSize:"12px"},dangerouslySetInnerHTML:{__html:n}})]})},c=function(e){var s=e.mailchimpUrl;return(0,i.jsx)("div",{children:(0,i.jsx)(l.A,{url:s,render:function(e){var s=e.subscribe,r=e.status,n=e.message;return(0,i.jsx)(a,{status:r,message:n,onValidated:function(e){return s(e)}})}})})},t=function(e){var s=e.spaceBottomClass,r=e.spaceLeftClass,l=e.sideMenu,a=e.colorClass,t=e.widgetColorClass;return(0,i.jsxs)("div",{className:(0,n.A)("footer-widget",s,l?"ml-ntv5":r,t),children:[(0,i.jsx)("div",{className:"footer-title",children:(0,i.jsx)("h3",{children:"SUBSCRIBE"})}),(0,i.jsxs)("div",{className:(0,n.A)("subscribe-style",a),children:[(0,i.jsx)("p",{children:"Get E-mail updates about our latest shop and special offers."}),(0,i.jsx)(c,{mailchimpUrl:"//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef"})]})]})}},3188:function(e,s,r){var n=r(3024),l=r(5475),i=r(579);s.A=function(e){var s=e.imageUrl,r=e.logoClass;return(0,i.jsx)("div",{className:(0,n.A)(r),children:(0,i.jsx)(l.N_,{to:"/",children:(0,i.jsx)("img",{alt:"",src:""+s})})})}},3468:function(e,s,r){var n=r(9456),l=r(4117),i=r(1682),a=r(579);s.A=function(e){var s=e.currency,r=(0,l.Bd)().i18n,c=(0,n.wA)(),t=function(e){var s=e.target.value;r.changeLanguage(s)},o=function(e){var s=e.target.value;c((0,i.M)(s))};return(0,a.jsxs)("div",{className:"language-currency-wrap",children:[(0,a.jsxs)("div",{className:"same-language-currency language-style",children:[(0,a.jsxs)("span",{children:["en"===r.resolvedLanguage?"English":"fn"===r.resolvedLanguage?"French":"de"===r.resolvedLanguage?"Germany":""," ",(0,a.jsx)("i",{className:"fa fa-angle-down"})]}),(0,a.jsx)("div",{className:"lang-car-dropdown",children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)("button",{value:"en",onClick:function(e){return t(e)},children:"English"})}),(0,a.jsx)("li",{children:(0,a.jsx)("button",{value:"fn",onClick:function(e){return t(e)},children:"French"})}),(0,a.jsx)("li",{children:(0,a.jsx)("button",{value:"de",onClick:function(e){return t(e)},children:"Germany"})})]})})]}),(0,a.jsxs)("div",{className:"same-language-currency use-style",children:[(0,a.jsxs)("span",{children:[s.currencyName," ",(0,a.jsx)("i",{className:"fa fa-angle-down"})]}),(0,a.jsx)("div",{className:"lang-car-dropdown",children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)("button",{value:"USD",onClick:function(e){return o(e)},children:"USD"})}),(0,a.jsx)("li",{children:(0,a.jsx)("button",{value:"EUR",onClick:function(e){return o(e)},children:"EUR"})}),(0,a.jsx)("li",{children:(0,a.jsx)("button",{value:"GBP",onClick:function(e){return o(e)},children:"GBP"})})]})})]}),(0,a.jsx)("div",{className:"same-language-currency"})]})}},6998:function(e,s,r){r.d(s,{A:function(){return c}});var n=r(5544),l=r(5043),i=function(){var e=(0,l.useState)(!1),s=(0,n.A)(e,2),r=s[0],i=s[1];return(0,l.useEffect)((function(){var e=function(){var e=window.pageYOffset;i(e>300)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[r]),{stick:r,onClickHandler:function(){window.scrollTo({top:0,behavior:"smooth"})}}},a=r(579),c=function(){var e=i(),s=e.stick,r=e.onClickHandler;return s?(0,a.jsx)("button",{"aria-label":"Scroll to top",type:"button",className:"scroll-top",onClick:r,children:(0,a.jsx)("i",{className:"fa fa-angle-double-up"})}):null}},8062:function(e,s,r){var n=r(5043),l=r(7766),i=r(5896),a=r(6998),c=r(579);s.A=function(e){var s=e.children,r=e.headerContainerClass,t=e.headerTop,o=e.headerPaddingClass,d=e.headerPositionClass;return(0,c.jsxs)(n.Fragment,{children:[(0,c.jsx)(l.A,{layout:r,top:t,headerPaddingClass:o,headerPositionClass:d}),s,(0,c.jsx)(i.A,{backgroundColorClass:"bg-gray",spaceTopClass:"pt-100",spaceBottomClass:"pb-70"}),(0,c.jsx)(a.A,{})]})}},4483:function(e,s,r){r.r(s);var n=r(5043),l=r(9456),i=r(3216),a=r(5475),c=r(2821),t=r(2168),o=r(8062),d=r(970),h=r(5721),u=r(4990),m=r(579);s.default=function(){var e=(0,l.wA)(),s=(0,i.zy)().pathname,r=(0,l.d4)((function(e){return e.currency})),x=(0,l.d4)((function(e){return e.wishlist})).wishlistItems,j=(0,l.d4)((function(e){return e.cart})).cartItems;return(0,m.jsxs)(n.Fragment,{children:[(0,m.jsx)(t.A,{titleTemplate:"Wishlist",description:"Wishlist page of Stickerify"}),(0,m.jsxs)(o.A,{headerTop:"visible",children:[(0,m.jsx)(d.A,{pages:[{label:"Home",path:"/"},{label:"Wishlist",path:""+s}]}),(0,m.jsx)("div",{className:"cart-main-area pt-90 pb-100",children:(0,m.jsx)("div",{className:"container",children:x&&x.length>=1?(0,m.jsxs)(n.Fragment,{children:[(0,m.jsx)("h3",{className:"cart-page-title",children:"Your wishlist items"}),(0,m.jsx)("div",{className:"row",children:(0,m.jsx)("div",{className:"col-12",children:(0,m.jsx)("div",{className:"table-content table-responsive cart-table-content",children:(0,m.jsxs)("table",{children:[(0,m.jsx)("thead",{children:(0,m.jsxs)("tr",{children:[(0,m.jsx)("th",{children:"Image"}),(0,m.jsx)("th",{children:"Product Name"}),(0,m.jsx)("th",{children:"Unit Price"}),(0,m.jsx)("th",{children:"Add To Cart"}),(0,m.jsx)("th",{children:"action"})]})}),(0,m.jsx)("tbody",{children:x.map((function(s,l){var i=(0,c.do)(s.price,s.discount),t=(s.price*r.currencyRate).toFixed(2),o=(i*r.currencyRate).toFixed(2),d=j.find((function(e){return e.id===s.id}));return(0,m.jsxs)("tr",{children:[(0,m.jsx)("td",{className:"product-thumbnail",children:(0,m.jsx)(a.N_,{to:"/product/"+s.id,children:(0,m.jsx)("img",{className:"img-fluid",src:""+s.image[0],alt:""})})}),(0,m.jsx)("td",{className:"product-name text-center",children:(0,m.jsx)(a.N_,{to:"/product/"+s.id,children:s.name})}),(0,m.jsx)("td",{className:"product-price-cart",children:null!==i?(0,m.jsxs)(n.Fragment,{children:[(0,m.jsx)("span",{className:"amount old",children:r.currencySymbol+t}),(0,m.jsx)("span",{className:"amount",children:r.currencySymbol+o})]}):(0,m.jsx)("span",{className:"amount",children:r.currencySymbol+t})}),(0,m.jsx)("td",{className:"product-wishlist-cart",children:s.affiliateLink?(0,m.jsxs)("a",{href:s.affiliateLink,rel:"noopener noreferrer",target:"_blank",children:[" ","Buy now"," "]}):s.variation&&s.variation.length>=1?(0,m.jsx)(a.N_,{to:"".concat("","/product/").concat(s.id),children:"Select option"}):s.stock&&s.stock>0?(0,m.jsx)("button",{onClick:function(){return e((0,h.bE)(s))},className:void 0!==d&&d.quantity>0?"active":"",disabled:void 0!==d&&d.quantity>0,title:void 0!==s?"Added to cart":"Add to cart",children:void 0!==d&&d.quantity>0?"Added":"Add to cart"}):(0,m.jsx)("button",{disabled:!0,className:"active",children:"Out of stock"})}),(0,m.jsx)("td",{className:"product-remove",children:(0,m.jsx)("button",{onClick:function(){return e((0,u.zN)(s.id))},children:(0,m.jsx)("i",{className:"fa fa-times"})})})]},l)}))})]})})})}),(0,m.jsx)("div",{className:"row",children:(0,m.jsx)("div",{className:"col-lg-12",children:(0,m.jsxs)("div",{className:"cart-shiping-update-wrapper",children:[(0,m.jsx)("div",{className:"cart-shiping-update",children:(0,m.jsx)(a.N_,{to:"/shop-grid-standard",children:"Continue Shopping"})}),(0,m.jsx)("div",{className:"cart-clear",children:(0,m.jsx)("button",{onClick:function(){return e((0,u.mL)())},children:"Clear Wishlist"})})]})})})]}):(0,m.jsx)("div",{className:"row",children:(0,m.jsx)("div",{className:"col-lg-12",children:(0,m.jsxs)("div",{className:"item-empty-area text-center",children:[(0,m.jsx)("div",{className:"item-empty-area__icon mb-30",children:(0,m.jsx)("i",{className:"pe-7s-like"})}),(0,m.jsxs)("div",{className:"item-empty-area__text",children:["No items found in wishlist ",(0,m.jsx)("br",{})," ",(0,m.jsx)(a.N_,{to:"/shop-grid-standard",children:"Add Items"})]})]})})})})})]})]})}},970:function(e,s,r){var n=r(1778),l=r(5475),i=r(579);s.A=function(e){var s=e.pages;return(0,i.jsx)("div",{className:"breadcrumb-area pt-35 pb-35 bg-gray-3",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsx)(n.A,{children:null===s||void 0===s?void 0:s.map((function(e,r){var a=e.path,c=e.label;return r!==s.length-1?(0,i.jsx)(n.A.Item,{linkProps:{to:a},linkAs:l.N_,children:c},c):(0,i.jsx)(n.A.Item,{active:!0,children:c},c)}))})})})}},5896:function(e,s,r){var n=r(3024),l=r(5475),i=(r(6801),r(2304)),a=r(579);s.A=function(e){var s=e.backgroundColorClass,r=e.spaceTopClass,c=e.spaceBottomClass,t=e.spaceLeftClass,o=e.spaceRightClass,d=e.containerClass,h=e.extraFooterClass,u=e.sideMenu;return(0,a.jsx)("footer",{className:(0,n.A)("footer-area",s,r,c,h,t,o),children:(0,a.jsx)("div",{className:"".concat(d||"container"),children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"".concat(u?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,a.jsx)("h1",{style:{fontWeight:600},children:"Stickerify"})}),(0,a.jsx)("div",{className:"".concat(u?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,a.jsxs)("div",{className:"footer-widget mb-30 ml-30",children:[(0,a.jsx)("div",{className:"footer-title",children:(0,a.jsx)("h3",{children:"ABOUT US"})}),(0,a.jsx)("div",{className:"footer-list",children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(l.N_,{to:"/about",children:"About us"})}),(0,a.jsx)("li",{children:(0,a.jsx)(l.N_,{to:"#/",children:"Store location"})}),(0,a.jsx)("li",{children:(0,a.jsx)(l.N_,{to:"/contact",children:"Contact"})}),(0,a.jsx)("li",{children:(0,a.jsx)(l.N_,{to:"#/",children:"Orders tracking"})})]})})]})}),(0,a.jsx)("div",{className:"".concat(u?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,a.jsxs)("div",{className:"".concat(u?"footer-widget mb-30 ml-95":"footer-widget mb-30 ml-50"),children:[(0,a.jsx)("div",{className:"footer-title",children:(0,a.jsx)("h3",{children:"USEFUL LINKS"})}),(0,a.jsx)("div",{className:"footer-list",children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{style:{fontWeight:"bold",textDecoration:"underline"},children:(0,a.jsx)(l.N_,{to:"/return",children:"Returns"})}),(0,a.jsx)("li",{children:(0,a.jsx)(l.N_,{to:"#/",children:"Support Policy"})}),(0,a.jsx)("li",{children:(0,a.jsx)(l.N_,{to:"#/",children:"Size guide"})}),(0,a.jsx)("li",{children:(0,a.jsx)(l.N_,{to:"#/",children:"FAQs"})})]})})]})}),(0,a.jsx)("div",{className:"".concat(u?"col-xl-3 col-sm-4":"col-lg-2 col-sm-6"),children:(0,a.jsxs)("div",{className:"".concat(u?"footer-widget mb-30 ml-145":"footer-widget mb-30 ml-75"),children:[(0,a.jsx)("div",{className:"footer-title",children:(0,a.jsx)("h3",{children:"FOLLOW US"})}),(0,a.jsx)("div",{className:"footer-list",children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"//www.facebook.com",target:"_blank",rel:"noopener noreferrer",children:"Facebook"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"//www.twitter.com",target:"_blank",rel:"noopener noreferrer",children:"Twitter"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"//www.instagram.com",target:"_blank",rel:"noopener noreferrer",children:"Instagram"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"//www.youtube.com",target:"_blank",rel:"noopener noreferrer",children:"Youtube"})})]})})]})}),(0,a.jsx)("div",{className:"".concat(u?"col-xl-3 col-sm-8":"col-lg-4 col-sm-6"),children:(0,a.jsx)(i.A,{spaceBottomClass:"mb-30",spaceLeftClass:"ml-70",sideMenu:u})})]})})})}},7766:function(e,s,r){r.d(s,{A:function(){return m}});var n=r(5544),l=r(5043),i=r(3024),a=(r(3188),r(3189)),c=r(6487),t=r(4993),o=r(9456),d=r(3468),h=r(579),u=function(e){var s=e.borderStyle,r=(0,o.d4)((function(e){return e.currency}));return(0,h.jsxs)("div",{className:(0,i.A)("header-top-wap","fluid-border"===s&&"border-bottom"),children:[(0,h.jsx)(d.A,{currency:r}),(0,h.jsx)("div",{className:"header-offer",children:(0,h.jsxs)("p",{children:["Free delivery on order over"," ",(0,h.jsx)("span",{children:r.currencySymbol+(200*r.currencyRate).toFixed(2)})]})})]})},m=function(e){var s=e.layout,r=e.top,o=e.borderStyle,d=e.headerPaddingClass,m=e.headerPositionClass,x=e.headerBgClass,j=(0,l.useState)(0),f=(0,n.A)(j,2),v=f[0],p=f[1],g=(0,l.useState)(0),b=(0,n.A)(g,2),N=b[0],y=b[1];(0,l.useEffect)((function(){var e=document.querySelector(".sticky-bar");return y(e.offsetTop),window.addEventListener("scroll",A),function(){window.removeEventListener("scroll",A)}}),[]);var A=function(){p(window.scrollY)};return(0,h.jsxs)("header",{className:(0,i.A)("header-area clearfix",x,m),children:[(0,h.jsx)("div",{className:(0,i.A)("header-top-area",d,"visible"===r?"d-none d-lg-block":"d-none","fluid-border"===o&&"border-none"),children:(0,h.jsx)("div",{className:"container-fluid"===s?s:"container",children:(0,h.jsx)(u,{borderStyle:o})})}),(0,h.jsxs)("div",{className:(0,i.A)(d,"sticky-bar header-res-padding clearfix",v>N&&"stick"),children:[(0,h.jsx)("div",{className:"container-fluid"===s?s:"container",children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)("div",{style:{display:"flex",alignItems:"center"},className:"col-xl-2 col-lg-2 col-md-6 col-4",children:(0,h.jsx)("h1",{style:{fontWeight:"600"},children:"Stickerify"})}),(0,h.jsx)("div",{className:"col-xl-8 col-lg-8 d-none d-lg-block",children:(0,h.jsx)(a.A,{})}),(0,h.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-6 col-8",children:(0,h.jsx)(c.A,{})})]})}),(0,h.jsx)(t.A,{})]})]})}},1778:function(e,s,r){r.d(s,{A:function(){return f}});var n=r(9379),l=r(45),i=r(8139),a=r.n(i),c=r(5043),t=r(7852),o=r(3372),d=r(579),h=["bsPrefix","active","children","className","as","linkAs","linkProps","href","title","target"],u=c.forwardRef((function(e,s){var r=e.bsPrefix,i=e.active,c=void 0!==i&&i,u=e.children,m=e.className,x=e.as,j=void 0===x?"li":x,f=e.linkAs,v=void 0===f?o.A:f,p=e.linkProps,g=void 0===p?{}:p,b=e.href,N=e.title,y=e.target,A=(0,l.A)(e,h),w=(0,t.oU)(r,"breadcrumb-item");return(0,d.jsx)(j,(0,n.A)((0,n.A)({ref:s},A),{},{className:a()(w,m,{active:c}),"aria-current":c?"page":void 0,children:c?u:(0,d.jsx)(v,(0,n.A)((0,n.A)({},g),{},{href:b,title:N,target:y,children:u}))}))}));u.displayName="BreadcrumbItem";var m=u,x=["bsPrefix","className","listProps","children","label","as"],j=c.forwardRef((function(e,s){var r=e.bsPrefix,i=e.className,c=e.listProps,o=void 0===c?{}:c,h=e.children,u=e.label,m=void 0===u?"breadcrumb":u,j=e.as,f=void 0===j?"nav":j,v=(0,l.A)(e,x),p=(0,t.oU)(r,"breadcrumb");return(0,d.jsx)(f,(0,n.A)((0,n.A)({"aria-label":m,className:i,ref:s},v),{},{children:(0,d.jsx)("ol",(0,n.A)((0,n.A)({},o),{},{className:a()(p,null==o?void 0:o.className),children:h}))}))}));j.displayName="Breadcrumb";var f=Object.assign(j,{Item:m})}}]);
//# sourceMappingURL=4483.f8ecf0a8.chunk.js.map