"use strict";(self.webpackChunkStickerify_react=self.webpackChunkStickerify_react||[]).push([[7174],{6801:function(e,s,r){var l=r(3024),n=r(5475),a=r(579);s.A=function(e){var s=e.footerLogo,r=e.spaceBottomClass,c=e.colorClass;return(0,a.jsxs)("div",{className:(0,l.A)("copyright",r,c),children:[(0,a.jsx)("div",{className:"footer-logo",children:(0,a.jsx)(n.N_,{to:"/",children:(0,a.jsx)("img",{alt:"",src:""+s})})}),(0,a.jsxs)("p",{children:["\xa9 ",(new Date).getFullYear()," ",(0,a.jsx)("a",{href:"https://hasthemes.com",rel:"noopener noreferrer",target:"_blank",children:"Stickerify"}),".",(0,a.jsx)("br",{})," All Rights Reserved"]})]})}},2304:function(e,s,r){r.d(s,{A:function(){return t}});var l=r(3024),n=r(9735),a=r(579),c=function(e){var s,r=e.status,l=e.message,n=e.onValidated;return(0,a.jsxs)("div",{className:"subscribe-form",children:[(0,a.jsxs)("div",{className:"mc-form",children:[(0,a.jsx)("div",{children:(0,a.jsx)("input",{id:"mc-form-email",className:"email",ref:function(e){return s=e},type:"email",placeholder:"Enter your email address..."})}),(0,a.jsx)("div",{className:"clear",children:(0,a.jsx)("button",{className:"button",onClick:function(){s&&s.value.indexOf("@")>-1&&n({EMAIL:s.value}),document.getElementById("mc-form-email").value=""},children:"SUBSCRIBE"})})]}),"sending"===r&&(0,a.jsx)("div",{style:{color:"#3498db",fontSize:"12px"},children:"sending..."}),"error"===r&&(0,a.jsx)("div",{style:{color:"#e74c3c",fontSize:"12px"},dangerouslySetInnerHTML:{__html:l}}),"success"===r&&(0,a.jsx)("div",{style:{color:"#2ecc71",fontSize:"12px"},dangerouslySetInnerHTML:{__html:l}})]})},i=function(e){var s=e.mailchimpUrl;return(0,a.jsx)("div",{children:(0,a.jsx)(n.A,{url:s,render:function(e){var s=e.subscribe,r=e.status,l=e.message;return(0,a.jsx)(c,{status:r,message:l,onValidated:function(e){return s(e)}})}})})},t=function(e){var s=e.spaceBottomClass,r=e.spaceLeftClass,n=e.sideMenu,c=e.colorClass,t=e.widgetColorClass;return(0,a.jsxs)("div",{className:(0,l.A)("footer-widget",s,n?"ml-ntv5":r,t),children:[(0,a.jsx)("div",{className:"footer-title",children:(0,a.jsx)("h3",{children:"SUBSCRIBE"})}),(0,a.jsxs)("div",{className:(0,l.A)("subscribe-style",c),children:[(0,a.jsx)("p",{children:"Get E-mail updates about our latest shop and special offers."}),(0,a.jsx)(i,{mailchimpUrl:"//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef"})]})]})}},3188:function(e,s,r){var l=r(3024),n=r(5475),a=r(579);s.A=function(e){var s=e.imageUrl,r=e.logoClass;return(0,a.jsx)("div",{className:(0,l.A)(r),children:(0,a.jsx)(n.N_,{to:"/",children:(0,a.jsx)("img",{alt:"",src:""+s})})})}},3468:function(e,s,r){var l=r(9456),n=r(4117),a=r(1682),c=r(579);s.A=function(e){var s=e.currency,r=(0,n.Bd)().i18n,i=(0,l.wA)(),t=function(e){var s=e.target.value;r.changeLanguage(s)},o=function(e){var s=e.target.value;i((0,a.M)(s))};return(0,c.jsxs)("div",{className:"language-currency-wrap",children:[(0,c.jsxs)("div",{className:"same-language-currency language-style",children:[(0,c.jsxs)("span",{children:["en"===r.resolvedLanguage?"English":"fn"===r.resolvedLanguage?"French":"de"===r.resolvedLanguage?"Germany":""," ",(0,c.jsx)("i",{className:"fa fa-angle-down"})]}),(0,c.jsx)("div",{className:"lang-car-dropdown",children:(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:(0,c.jsx)("button",{value:"en",onClick:function(e){return t(e)},children:"English"})}),(0,c.jsx)("li",{children:(0,c.jsx)("button",{value:"fn",onClick:function(e){return t(e)},children:"French"})}),(0,c.jsx)("li",{children:(0,c.jsx)("button",{value:"de",onClick:function(e){return t(e)},children:"Germany"})})]})})]}),(0,c.jsxs)("div",{className:"same-language-currency use-style",children:[(0,c.jsxs)("span",{children:[s.currencyName," ",(0,c.jsx)("i",{className:"fa fa-angle-down"})]}),(0,c.jsx)("div",{className:"lang-car-dropdown",children:(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:(0,c.jsx)("button",{value:"USD",onClick:function(e){return o(e)},children:"USD"})}),(0,c.jsx)("li",{children:(0,c.jsx)("button",{value:"EUR",onClick:function(e){return o(e)},children:"EUR"})}),(0,c.jsx)("li",{children:(0,c.jsx)("button",{value:"GBP",onClick:function(e){return o(e)},children:"GBP"})})]})})]}),(0,c.jsx)("div",{className:"same-language-currency"})]})}},6998:function(e,s,r){r.d(s,{A:function(){return i}});var l=r(5544),n=r(5043),a=function(){var e=(0,n.useState)(!1),s=(0,l.A)(e,2),r=s[0],a=s[1];return(0,n.useEffect)((function(){var e=function(){var e=window.pageYOffset;a(e>300)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[r]),{stick:r,onClickHandler:function(){window.scrollTo({top:0,behavior:"smooth"})}}},c=r(579),i=function(){var e=a(),s=e.stick,r=e.onClickHandler;return s?(0,c.jsx)("button",{"aria-label":"Scroll to top",type:"button",className:"scroll-top",onClick:r,children:(0,c.jsx)("i",{className:"fa fa-angle-double-up"})}):null}},8062:function(e,s,r){var l=r(5043),n=r(7766),a=r(5896),c=r(6998),i=r(579);s.A=function(e){var s=e.children,r=e.headerContainerClass,t=e.headerTop,o=e.headerPaddingClass,d=e.headerPositionClass;return(0,i.jsxs)(l.Fragment,{children:[(0,i.jsx)(n.A,{layout:r,top:t,headerPaddingClass:o,headerPositionClass:d}),s,(0,i.jsx)(a.A,{backgroundColorClass:"bg-gray",spaceTopClass:"pt-100",spaceBottomClass:"pb-70"}),(0,i.jsx)(c.A,{})]})}},7174:function(e,s,r){r.r(s);var l=r(9379),n=r(5544),a=r(5043),c=r(9456),i=r(3216),t=r(5475),o=r(2168),d=r(2821),h=r(8062),u=r(970),x=r(5721),m=r(579);s.default=function(){var e=0,s=(0,a.useState)(1),r=(0,n.A)(s,1)[0],j=(0,c.wA)(),p=(0,i.zy)().pathname,v=(0,c.d4)((function(e){return e.currency})),f=(0,c.d4)((function(e){return e.cart})).cartItems;return(0,m.jsxs)(a.Fragment,{children:[(0,m.jsx)(o.A,{titleTemplate:"Cart",description:"Cart page of Stickerify"}),(0,m.jsxs)(h.A,{headerTop:"visible",children:[(0,m.jsx)(u.A,{pages:[{label:"Home",path:"/"},{label:"Cart",path:""+p}]}),(0,m.jsx)("div",{className:"cart-main-area pt-90 pb-100",children:(0,m.jsx)("div",{className:"container",children:f&&f.length>=1?(0,m.jsxs)(a.Fragment,{children:[(0,m.jsx)("h3",{className:"cart-page-title",children:"Your cart items"}),(0,m.jsx)("div",{className:"row",children:(0,m.jsx)("div",{className:"col-12",children:(0,m.jsx)("div",{className:"table-content table-responsive cart-table-content",children:(0,m.jsxs)("table",{children:[(0,m.jsx)("thead",{children:(0,m.jsxs)("tr",{children:[(0,m.jsx)("th",{children:"Image"}),(0,m.jsx)("th",{children:"Product Name"}),(0,m.jsx)("th",{children:"Unit Price"}),(0,m.jsx)("th",{children:"Qty"}),(0,m.jsx)("th",{children:"Subtotal"}),(0,m.jsx)("th",{children:"action"})]})}),(0,m.jsx)("tbody",{children:f.map((function(s,n){var c=(0,d.do)(s.price,s.discount),i=(s.price*v.currencyRate).toFixed(2),o=(c*v.currencyRate).toFixed(2);return e+=null!=c?o*s.quantity:i*s.quantity,(0,m.jsxs)("tr",{children:[(0,m.jsx)("td",{className:"product-thumbnail",children:(0,m.jsx)(t.N_,{to:"/product/"+s.id,children:(0,m.jsx)("img",{className:"img-fluid",src:""+s.image[0],alt:""})})}),(0,m.jsxs)("td",{className:"product-name",children:[(0,m.jsx)(t.N_,{to:"/product/"+s.id,children:s.name}),s.selectedProductColor&&s.selectedProductSize?(0,m.jsxs)("div",{className:"cart-item-variation",children:[(0,m.jsxs)("span",{children:["Color: ",s.selectedProductColor]}),(0,m.jsxs)("span",{children:["Size: ",s.selectedProductSize]})]}):""]}),(0,m.jsx)("td",{className:"product-price-cart",children:null!==c?(0,m.jsxs)(a.Fragment,{children:[(0,m.jsx)("span",{className:"amount old",children:v.currencySymbol+i}),(0,m.jsx)("span",{className:"amount",children:v.currencySymbol+o})]}):(0,m.jsx)("span",{className:"amount",children:v.currencySymbol+i})}),(0,m.jsx)("td",{className:"product-quantity",children:(0,m.jsxs)("div",{className:"cart-plus-minus",children:[(0,m.jsx)("button",{className:"dec qtybutton",onClick:function(){return j((0,x.CG)(s))},children:"-"}),(0,m.jsx)("input",{className:"cart-plus-minus-box",type:"text",value:s.quantity,readOnly:!0}),(0,m.jsx)("button",{className:"inc qtybutton",onClick:function(){return j((0,x.bE)((0,l.A)((0,l.A)({},s),{},{quantity:r})))},disabled:void 0!==s&&s.quantity&&s.quantity>=(0,d.e1)(s,s.selectedProductColor,s.selectedProductSize),children:"+"})]})}),(0,m.jsx)("td",{className:"product-subtotal",children:null!==c?v.currencySymbol+(o*s.quantity).toFixed(2):v.currencySymbol+(i*s.quantity).toFixed(2)}),(0,m.jsx)("td",{className:"product-remove",children:(0,m.jsx)("button",{onClick:function(){return j((0,x.Yd)(s.cartItemId))},children:(0,m.jsx)("i",{className:"fa fa-times"})})})]},n)}))})]})})})}),(0,m.jsx)("div",{className:"row",children:(0,m.jsx)("div",{className:"col-lg-12",children:(0,m.jsxs)("div",{className:"cart-shiping-update-wrapper",children:[(0,m.jsx)("div",{className:"cart-shiping-update",children:(0,m.jsx)(t.N_,{to:"/shop-grid-standard",children:"Continue Shopping"})}),(0,m.jsx)("div",{className:"cart-clear",children:(0,m.jsx)("button",{onClick:function(){return j((0,x.XW)())},children:"Clear Shopping Cart"})})]})})}),(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,m.jsxs)("div",{className:"cart-tax",children:[(0,m.jsx)("div",{className:"title-wrap",children:(0,m.jsx)("h4",{className:"cart-bottom-title section-bg-gray",children:"Estimate Shipping And Tax"})}),(0,m.jsxs)("div",{className:"tax-wrapper",children:[(0,m.jsx)("p",{children:"Enter your destination to get a shipping estimate."}),(0,m.jsxs)("div",{className:"tax-select-wrapper",children:[(0,m.jsxs)("div",{className:"tax-select",children:[(0,m.jsx)("label",{children:"* Country"}),(0,m.jsxs)("select",{className:"email s-email s-wid",children:[(0,m.jsx)("option",{children:"Bangladesh"}),(0,m.jsx)("option",{children:"Albania"}),(0,m.jsx)("option",{children:"\xc5land Islands"}),(0,m.jsx)("option",{children:"Afghanistan"}),(0,m.jsx)("option",{children:"Belgium"})]})]}),(0,m.jsxs)("div",{className:"tax-select",children:[(0,m.jsx)("label",{children:"* Region / State"}),(0,m.jsxs)("select",{className:"email s-email s-wid",children:[(0,m.jsx)("option",{children:"Bangladesh"}),(0,m.jsx)("option",{children:"Albania"}),(0,m.jsx)("option",{children:"\xc5land Islands"}),(0,m.jsx)("option",{children:"Afghanistan"}),(0,m.jsx)("option",{children:"Belgium"})]})]}),(0,m.jsxs)("div",{className:"tax-select",children:[(0,m.jsx)("label",{children:"* Zip/Postal Code"}),(0,m.jsx)("input",{type:"text"})]}),(0,m.jsx)("button",{className:"cart-btn-2",type:"submit",children:"Get A Quote"})]})]})]})}),(0,m.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,m.jsxs)("div",{className:"discount-code-wrapper",children:[(0,m.jsx)("div",{className:"title-wrap",children:(0,m.jsx)("h4",{className:"cart-bottom-title section-bg-gray",children:"Use Coupon Code"})}),(0,m.jsxs)("div",{className:"discount-code",children:[(0,m.jsx)("p",{children:"Enter your coupon code if you have one."}),(0,m.jsxs)("form",{children:[(0,m.jsx)("input",{type:"text",required:!0,name:"name"}),(0,m.jsx)("button",{className:"cart-btn-2",type:"submit",children:"Apply Coupon"})]})]})]})}),(0,m.jsx)("div",{className:"col-lg-4 col-md-12",children:(0,m.jsxs)("div",{className:"grand-totall",children:[(0,m.jsx)("div",{className:"title-wrap",children:(0,m.jsx)("h4",{className:"cart-bottom-title section-bg-gary-cart",children:"Cart Total"})}),(0,m.jsxs)("h5",{children:["Total products"," ",(0,m.jsx)("span",{children:v.currencySymbol+e.toFixed(2)})]}),(0,m.jsxs)("h4",{className:"grand-totall-title",children:["Grand Total"," ",(0,m.jsx)("span",{children:v.currencySymbol+e.toFixed(2)})]}),(0,m.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"5px"},children:[(0,m.jsx)("input",{style:{fontSize:"14px"},checked:!0,type:"checkbox"}),(0,m.jsx)("p",{onClick:function(){return window.open("/return")},target:"_blank",href:"/return",style:{fontSize:"14px",margin:"0",textDecoration:"underline",color:"blue",whiteSpace:"nowrap",cursor:"pointer"},children:"I have read and agreed to the return policy"})]}),(0,m.jsx)(t.N_,{to:"/checkout"+"?dizf=".concat(1e3*e/3.6,"&tsx=3527235197"),children:"Proceed to Checkout"})]})})]})]}):(0,m.jsx)("div",{className:"row",children:(0,m.jsx)("div",{className:"col-lg-12",children:(0,m.jsxs)("div",{className:"item-empty-area text-center",children:[(0,m.jsx)("div",{className:"item-empty-area__icon mb-30",children:(0,m.jsx)("i",{className:"pe-7s-cart"})}),(0,m.jsxs)("div",{className:"item-empty-area__text",children:["No items found in cart ",(0,m.jsx)("br",{})," ",(0,m.jsx)(t.N_,{to:"/shop-grid-standard",children:"Shop Now"})]})]})})})})})]})]})}},970:function(e,s,r){var l=r(1778),n=r(5475),a=r(579);s.A=function(e){var s=e.pages;return(0,a.jsx)("div",{className:"breadcrumb-area pt-35 pb-35 bg-gray-3",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsx)(l.A,{children:null===s||void 0===s?void 0:s.map((function(e,r){var c=e.path,i=e.label;return r!==s.length-1?(0,a.jsx)(l.A.Item,{linkProps:{to:c},linkAs:n.N_,children:i},i):(0,a.jsx)(l.A.Item,{active:!0,children:i},i)}))})})})}},5896:function(e,s,r){var l=r(3024),n=r(5475),a=(r(6801),r(2304)),c=r(579);s.A=function(e){var s=e.backgroundColorClass,r=e.spaceTopClass,i=e.spaceBottomClass,t=e.spaceLeftClass,o=e.spaceRightClass,d=e.containerClass,h=e.extraFooterClass,u=e.sideMenu;return(0,c.jsx)("footer",{className:(0,l.A)("footer-area",s,r,i,h,t,o),children:(0,c.jsx)("div",{className:"".concat(d||"container"),children:(0,c.jsxs)("div",{className:"row",children:[(0,c.jsx)("div",{className:"".concat(u?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,c.jsx)("h1",{style:{fontWeight:600},children:"Stickerify"})}),(0,c.jsx)("div",{className:"".concat(u?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,c.jsxs)("div",{className:"footer-widget mb-30 ml-30",children:[(0,c.jsx)("div",{className:"footer-title",children:(0,c.jsx)("h3",{children:"ABOUT US"})}),(0,c.jsx)("div",{className:"footer-list",children:(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:(0,c.jsx)(n.N_,{to:"/about",children:"About us"})}),(0,c.jsx)("li",{children:(0,c.jsx)(n.N_,{to:"#/",children:"Store location"})}),(0,c.jsx)("li",{children:(0,c.jsx)(n.N_,{to:"/contact",children:"Contact"})}),(0,c.jsx)("li",{children:(0,c.jsx)(n.N_,{to:"#/",children:"Orders tracking"})})]})})]})}),(0,c.jsx)("div",{className:"".concat(u?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,c.jsxs)("div",{className:"".concat(u?"footer-widget mb-30 ml-95":"footer-widget mb-30 ml-50"),children:[(0,c.jsx)("div",{className:"footer-title",children:(0,c.jsx)("h3",{children:"USEFUL LINKS"})}),(0,c.jsx)("div",{className:"footer-list",children:(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{style:{fontWeight:"bold",textDecoration:"underline"},children:(0,c.jsx)(n.N_,{to:"/return",children:"Returns"})}),(0,c.jsx)("li",{children:(0,c.jsx)(n.N_,{to:"#/",children:"Support Policy"})}),(0,c.jsx)("li",{children:(0,c.jsx)(n.N_,{to:"#/",children:"Size guide"})}),(0,c.jsx)("li",{children:(0,c.jsx)(n.N_,{to:"#/",children:"FAQs"})})]})})]})}),(0,c.jsx)("div",{className:"".concat(u?"col-xl-3 col-sm-4":"col-lg-2 col-sm-6"),children:(0,c.jsxs)("div",{className:"".concat(u?"footer-widget mb-30 ml-145":"footer-widget mb-30 ml-75"),children:[(0,c.jsx)("div",{className:"footer-title",children:(0,c.jsx)("h3",{children:"FOLLOW US"})}),(0,c.jsx)("div",{className:"footer-list",children:(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:(0,c.jsx)("a",{href:"//www.facebook.com",target:"_blank",rel:"noopener noreferrer",children:"Facebook"})}),(0,c.jsx)("li",{children:(0,c.jsx)("a",{href:"//www.twitter.com",target:"_blank",rel:"noopener noreferrer",children:"Twitter"})}),(0,c.jsx)("li",{children:(0,c.jsx)("a",{href:"//www.instagram.com",target:"_blank",rel:"noopener noreferrer",children:"Instagram"})}),(0,c.jsx)("li",{children:(0,c.jsx)("a",{href:"//www.youtube.com",target:"_blank",rel:"noopener noreferrer",children:"Youtube"})})]})})]})}),(0,c.jsx)("div",{className:"".concat(u?"col-xl-3 col-sm-8":"col-lg-4 col-sm-6"),children:(0,c.jsx)(a.A,{spaceBottomClass:"mb-30",spaceLeftClass:"ml-70",sideMenu:u})})]})})})}},7766:function(e,s,r){r.d(s,{A:function(){return x}});var l=r(5544),n=r(5043),a=r(3024),c=(r(3188),r(3189)),i=r(6487),t=r(4993),o=r(9456),d=r(3468),h=r(579),u=function(e){var s=e.borderStyle,r=(0,o.d4)((function(e){return e.currency}));return(0,h.jsxs)("div",{className:(0,a.A)("header-top-wap","fluid-border"===s&&"border-bottom"),children:[(0,h.jsx)(d.A,{currency:r}),(0,h.jsx)("div",{className:"header-offer",children:(0,h.jsxs)("p",{children:["Free delivery on order over"," ",(0,h.jsx)("span",{children:r.currencySymbol+(200*r.currencyRate).toFixed(2)})]})})]})},x=function(e){var s=e.layout,r=e.top,o=e.borderStyle,d=e.headerPaddingClass,x=e.headerPositionClass,m=e.headerBgClass,j=(0,n.useState)(0),p=(0,l.A)(j,2),v=p[0],f=p[1],g=(0,n.useState)(0),N=(0,l.A)(g,2),b=N[0],y=N[1];(0,n.useEffect)((function(){var e=document.querySelector(".sticky-bar");return y(e.offsetTop),window.addEventListener("scroll",C),function(){window.removeEventListener("scroll",C)}}),[]);var C=function(){f(window.scrollY)};return(0,h.jsxs)("header",{className:(0,a.A)("header-area clearfix",m,x),children:[(0,h.jsx)("div",{className:(0,a.A)("header-top-area",d,"visible"===r?"d-none d-lg-block":"d-none","fluid-border"===o&&"border-none"),children:(0,h.jsx)("div",{className:"container-fluid"===s?s:"container",children:(0,h.jsx)(u,{borderStyle:o})})}),(0,h.jsxs)("div",{className:(0,a.A)(d,"sticky-bar header-res-padding clearfix",v>b&&"stick"),children:[(0,h.jsx)("div",{className:"container-fluid"===s?s:"container",children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)("div",{style:{display:"flex",alignItems:"center"},className:"col-xl-2 col-lg-2 col-md-6 col-4",children:(0,h.jsx)("h1",{style:{fontWeight:"600"},children:"Stickerify"})}),(0,h.jsx)("div",{className:"col-xl-8 col-lg-8 d-none d-lg-block",children:(0,h.jsx)(c.A,{})}),(0,h.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-6 col-8",children:(0,h.jsx)(i.A,{})})]})}),(0,h.jsx)(t.A,{})]})]})}},1778:function(e,s,r){r.d(s,{A:function(){return p}});var l=r(9379),n=r(45),a=r(8139),c=r.n(a),i=r(5043),t=r(7852),o=r(3372),d=r(579),h=["bsPrefix","active","children","className","as","linkAs","linkProps","href","title","target"],u=i.forwardRef((function(e,s){var r=e.bsPrefix,a=e.active,i=void 0!==a&&a,u=e.children,x=e.className,m=e.as,j=void 0===m?"li":m,p=e.linkAs,v=void 0===p?o.A:p,f=e.linkProps,g=void 0===f?{}:f,N=e.href,b=e.title,y=e.target,C=(0,n.A)(e,h),w=(0,t.oU)(r,"breadcrumb-item");return(0,d.jsx)(j,(0,l.A)((0,l.A)({ref:s},C),{},{className:c()(w,x,{active:i}),"aria-current":i?"page":void 0,children:i?u:(0,d.jsx)(v,(0,l.A)((0,l.A)({},g),{},{href:N,title:b,target:y,children:u}))}))}));u.displayName="BreadcrumbItem";var x=u,m=["bsPrefix","className","listProps","children","label","as"],j=i.forwardRef((function(e,s){var r=e.bsPrefix,a=e.className,i=e.listProps,o=void 0===i?{}:i,h=e.children,u=e.label,x=void 0===u?"breadcrumb":u,j=e.as,p=void 0===j?"nav":j,v=(0,n.A)(e,m),f=(0,t.oU)(r,"breadcrumb");return(0,d.jsx)(p,(0,l.A)((0,l.A)({"aria-label":x,className:a,ref:s},v),{},{children:(0,d.jsx)("ol",(0,l.A)((0,l.A)({},o),{},{className:c()(f,null==o?void 0:o.className),children:h}))}))}));j.displayName="Breadcrumb";var p=Object.assign(j,{Item:x})}}]);
//# sourceMappingURL=7174.17075881.chunk.js.map