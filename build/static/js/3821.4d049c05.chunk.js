"use strict";(self.webpackChunkStickerify_react=self.webpackChunkStickerify_react||[]).push([[3821],{6801:function(e,r,s){var n=s(3024),a=s(5475),l=s(579);r.A=function(e){var r=e.footerLogo,s=e.spaceBottomClass,c=e.colorClass;return(0,l.jsxs)("div",{className:(0,n.A)("copyright",s,c),children:[(0,l.jsx)("div",{className:"footer-logo",children:(0,l.jsx)(a.N_,{to:"/",children:(0,l.jsx)("img",{alt:"",src:""+r})})}),(0,l.jsxs)("p",{children:["\xa9 ",(new Date).getFullYear()," ",(0,l.jsx)("a",{href:"https://hasthemes.com",rel:"noopener noreferrer",target:"_blank",children:"Stickerify"}),".",(0,l.jsx)("br",{})," All Rights Reserved"]})]})}},2304:function(e,r,s){s.d(r,{A:function(){return t}});var n=s(3024),a=s(9735),l=s(579),c=function(e){var r,s=e.status,n=e.message,a=e.onValidated;return(0,l.jsxs)("div",{className:"subscribe-form",children:[(0,l.jsxs)("div",{className:"mc-form",children:[(0,l.jsx)("div",{children:(0,l.jsx)("input",{id:"mc-form-email",className:"email",ref:function(e){return r=e},type:"email",placeholder:"Enter your email address..."})}),(0,l.jsx)("div",{className:"clear",children:(0,l.jsx)("button",{className:"button",onClick:function(){r&&r.value.indexOf("@")>-1&&a({EMAIL:r.value}),document.getElementById("mc-form-email").value=""},children:"SUBSCRIBE"})})]}),"sending"===s&&(0,l.jsx)("div",{style:{color:"#3498db",fontSize:"12px"},children:"sending..."}),"error"===s&&(0,l.jsx)("div",{style:{color:"#e74c3c",fontSize:"12px"},dangerouslySetInnerHTML:{__html:n}}),"success"===s&&(0,l.jsx)("div",{style:{color:"#2ecc71",fontSize:"12px"},dangerouslySetInnerHTML:{__html:n}})]})},i=function(e){var r=e.mailchimpUrl;return(0,l.jsx)("div",{children:(0,l.jsx)(a.A,{url:r,render:function(e){var r=e.subscribe,s=e.status,n=e.message;return(0,l.jsx)(c,{status:s,message:n,onValidated:function(e){return r(e)}})}})})},t=function(e){var r=e.spaceBottomClass,s=e.spaceLeftClass,a=e.sideMenu,c=e.colorClass,t=e.widgetColorClass;return(0,l.jsxs)("div",{className:(0,n.A)("footer-widget",r,a?"ml-ntv5":s,t),children:[(0,l.jsx)("div",{className:"footer-title",children:(0,l.jsx)("h3",{children:"SUBSCRIBE"})}),(0,l.jsxs)("div",{className:(0,n.A)("subscribe-style",c),children:[(0,l.jsx)("p",{children:"Get E-mail updates about our latest shop and special offers."}),(0,l.jsx)(i,{mailchimpUrl:"//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef"})]})]})}},3188:function(e,r,s){var n=s(3024),a=s(5475),l=s(579);r.A=function(e){var r=e.imageUrl,s=e.logoClass;return(0,l.jsx)("div",{className:(0,n.A)(s),children:(0,l.jsx)(a.N_,{to:"/",children:(0,l.jsx)("img",{alt:"",src:""+r})})})}},3468:function(e,r,s){var n=s(9456),a=s(4117),l=s(1682),c=s(579);r.A=function(e){var r=e.currency,s=(0,a.Bd)().i18n,i=(0,n.wA)(),t=function(e){var r=e.target.value;s.changeLanguage(r)},o=function(e){var r=e.target.value;i((0,l.M)(r))};return(0,c.jsxs)("div",{className:"language-currency-wrap",children:[(0,c.jsxs)("div",{className:"same-language-currency language-style",children:[(0,c.jsxs)("span",{children:["en"===s.resolvedLanguage?"English":"fn"===s.resolvedLanguage?"French":"de"===s.resolvedLanguage?"Germany":""," ",(0,c.jsx)("i",{className:"fa fa-angle-down"})]}),(0,c.jsx)("div",{className:"lang-car-dropdown",children:(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:(0,c.jsx)("button",{value:"en",onClick:function(e){return t(e)},children:"English"})}),(0,c.jsx)("li",{children:(0,c.jsx)("button",{value:"fn",onClick:function(e){return t(e)},children:"French"})}),(0,c.jsx)("li",{children:(0,c.jsx)("button",{value:"de",onClick:function(e){return t(e)},children:"Germany"})})]})})]}),(0,c.jsxs)("div",{className:"same-language-currency use-style",children:[(0,c.jsxs)("span",{children:[r.currencyName," ",(0,c.jsx)("i",{className:"fa fa-angle-down"})]}),(0,c.jsx)("div",{className:"lang-car-dropdown",children:(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:(0,c.jsx)("button",{value:"USD",onClick:function(e){return o(e)},children:"USD"})}),(0,c.jsx)("li",{children:(0,c.jsx)("button",{value:"EUR",onClick:function(e){return o(e)},children:"EUR"})}),(0,c.jsx)("li",{children:(0,c.jsx)("button",{value:"GBP",onClick:function(e){return o(e)},children:"GBP"})})]})})]}),(0,c.jsx)("div",{className:"same-language-currency"})]})}},5913:function(e,r,s){var n=s(5043),a=s(579);r.A=function(e){for(var r=e.ratingValue,s=[],l=0;l<5;l++)s.push((0,a.jsx)("i",{className:"fa fa-star-o"},l));if(r&&r>0)for(var c=0;c<=r-1;c++)s[c]=(0,a.jsx)("i",{className:"fa fa-star-o yellow"},c);return(0,a.jsx)(n.Fragment,{children:s})}},6998:function(e,r,s){s.d(r,{A:function(){return i}});var n=s(5544),a=s(5043),l=function(){var e=(0,a.useState)(!1),r=(0,n.A)(e,2),s=r[0],l=r[1];return(0,a.useEffect)((function(){var e=function(){var e=window.pageYOffset;l(e>300)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[s]),{stick:s,onClickHandler:function(){window.scrollTo({top:0,behavior:"smooth"})}}},c=s(579),i=function(){var e=l(),r=e.stick,s=e.onClickHandler;return r?(0,c.jsx)("button",{"aria-label":"Scroll to top",type:"button",className:"scroll-top",onClick:s,children:(0,c.jsx)("i",{className:"fa fa-angle-double-up"})}):null}},8062:function(e,r,s){var n=s(5043),a=s(7766),l=s(5896),c=s(6998),i=s(579);r.A=function(e){var r=e.children,s=e.headerContainerClass,t=e.headerTop,o=e.headerPaddingClass,d=e.headerPositionClass;return(0,i.jsxs)(n.Fragment,{children:[(0,i.jsx)(a.A,{layout:s,top:t,headerPaddingClass:o,headerPositionClass:d}),r,(0,i.jsx)(l.A,{backgroundColorClass:"bg-gray",spaceTopClass:"pt-100",spaceBottomClass:"pb-70"}),(0,i.jsx)(c.A,{})]})}},3821:function(e,r,s){s.r(r);var n=s(5043),a=s(3216),l=s(5475),c=s(9456),i=s(2821),t=s(2168),o=s(8062),d=s(970),u=s(5913),m=s(5721),h=s(3492),x=s(579);r.default=function(){var e=(0,c.wA)(),r=(0,a.zy)().pathname,s=(0,c.d4)((function(e){return e.currency})),j=(0,c.d4)((function(e){return e.compare})).compareItems,f=(0,c.d4)((function(e){return e.cart})).cartItems;return(0,x.jsxs)(n.Fragment,{children:[(0,x.jsx)(t.A,{titleTemplate:"Compare",description:"Compare page of Stickerify"}),(0,x.jsxs)(o.A,{headerTop:"visible",children:[(0,x.jsx)(d.A,{pages:[{label:"Home",path:"/"},{label:"Compare",path:""+r}]}),(0,x.jsx)("div",{className:"compare-main-area pt-90 pb-100",children:(0,x.jsx)("div",{className:"container",children:j&&j.length>=1?(0,x.jsx)("div",{className:"row",children:(0,x.jsx)("div",{className:"col-lg-12",children:(0,x.jsx)("div",{className:"compare-page-content",children:(0,x.jsx)("div",{className:"compare-table table-responsive",children:(0,x.jsx)("table",{className:"table table-bordered mb-0",children:(0,x.jsxs)("tbody",{children:[(0,x.jsxs)("tr",{children:[(0,x.jsx)("th",{className:"title-column",children:"Product Info"}),j.map((function(r,s){var n=f.find((function(e){return e.id===r.id}));return(0,x.jsxs)("td",{className:"product-image-title",children:[(0,x.jsx)("div",{className:"compare-remove",children:(0,x.jsx)("button",{onClick:function(){return e((0,h.RE)(r.id))},children:(0,x.jsx)("i",{className:"pe-7s-trash"})})}),(0,x.jsx)(l.N_,{to:"/product/"+r.id,className:"image",children:(0,x.jsx)("img",{className:"img-fluid",src:""+r.image[0],alt:""})}),(0,x.jsx)("div",{className:"product-title",children:(0,x.jsx)(l.N_,{to:"/product/"+r.id,children:r.name})}),(0,x.jsx)("div",{className:"compare-btn",children:r.affiliateLink?(0,x.jsxs)("a",{href:r.affiliateLink,rel:"noopener noreferrer",target:"_blank",children:[" ","Buy now"," "]}):r.variation&&r.variation.length>=1?(0,x.jsx)(l.N_,{to:"".concat("","/product/").concat(r.id),children:"Select Option"}):r.stock&&r.stock>0?(0,x.jsx)("button",{onClick:function(){return e((0,m.bE)(r))},className:void 0!==n&&n.quantity>0?"active":"",disabled:void 0!==n&&n.quantity>0,title:void 0!==r?"Added to cart":"Add to cart",children:void 0!==n&&n.quantity>0?"Added":"Add to cart"}):(0,x.jsx)("button",{disabled:!0,className:"active",children:"Out of Stock"})})]},s)}))]}),(0,x.jsxs)("tr",{children:[(0,x.jsx)("th",{className:"title-column",children:"Price"}),j.map((function(e,r){var a=(0,i.do)(e.price,e.discount),l=(e.price*s.currencyRate).toFixed(2),c=(a*s.currencyRate).toFixed(2);return(0,x.jsx)("td",{className:"product-price",children:null!==a?(0,x.jsxs)(n.Fragment,{children:[(0,x.jsx)("span",{className:"amount old",children:s.currencySymbol+l}),(0,x.jsx)("span",{className:"amount",children:s.currencySymbol+c})]}):(0,x.jsx)("span",{className:"amount",children:s.currencySymbol+l})},r)}))]}),(0,x.jsxs)("tr",{children:[(0,x.jsx)("th",{className:"title-column",children:"Description"}),j.map((function(e,r){return(0,x.jsx)("td",{className:"product-desc",children:(0,x.jsx)("p",{children:e.shortDescription?e.shortDescription:"N/A"})},r)}))]}),(0,x.jsxs)("tr",{children:[(0,x.jsx)("th",{className:"title-column",children:"Rating"}),j.map((function(e,r){return(0,x.jsx)("td",{className:"product-rating",children:(0,x.jsx)(u.A,{ratingValue:e.rating})},r)}))]})]})})})})})}):(0,x.jsx)("div",{className:"row",children:(0,x.jsx)("div",{className:"col-lg-12",children:(0,x.jsxs)("div",{className:"item-empty-area text-center",children:[(0,x.jsx)("div",{className:"item-empty-area__icon mb-30",children:(0,x.jsx)("i",{className:"pe-7s-shuffle"})}),(0,x.jsxs)("div",{className:"item-empty-area__text",children:["No items found in compare ",(0,x.jsx)("br",{})," ",(0,x.jsx)(l.N_,{to:"/shop-grid-standard",children:"Add Items"})]})]})})})})})]})]})}},970:function(e,r,s){var n=s(1778),a=s(5475),l=s(579);r.A=function(e){var r=e.pages;return(0,l.jsx)("div",{className:"breadcrumb-area pt-35 pb-35 bg-gray-3",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)(n.A,{children:null===r||void 0===r?void 0:r.map((function(e,s){var c=e.path,i=e.label;return s!==r.length-1?(0,l.jsx)(n.A.Item,{linkProps:{to:c},linkAs:a.N_,children:i},i):(0,l.jsx)(n.A.Item,{active:!0,children:i},i)}))})})})}},5896:function(e,r,s){var n=s(3024),a=s(5475),l=(s(6801),s(2304)),c=s(579);r.A=function(e){var r=e.backgroundColorClass,s=e.spaceTopClass,i=e.spaceBottomClass,t=e.spaceLeftClass,o=e.spaceRightClass,d=e.containerClass,u=e.extraFooterClass,m=e.sideMenu;return(0,c.jsx)("footer",{className:(0,n.A)("footer-area",r,s,i,u,t,o),children:(0,c.jsx)("div",{className:"".concat(d||"container"),children:(0,c.jsxs)("div",{className:"row",children:[(0,c.jsx)("div",{className:"".concat(m?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,c.jsx)("h1",{style:{fontWeight:600},children:"Stickerify"})}),(0,c.jsx)("div",{className:"".concat(m?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,c.jsxs)("div",{className:"footer-widget mb-30 ml-30",children:[(0,c.jsx)("div",{className:"footer-title",children:(0,c.jsx)("h3",{children:"ABOUT US"})}),(0,c.jsx)("div",{className:"footer-list",children:(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:(0,c.jsx)(a.N_,{to:"/about",children:"About us"})}),(0,c.jsx)("li",{children:(0,c.jsx)(a.N_,{to:"#/",children:"Store location"})}),(0,c.jsx)("li",{children:(0,c.jsx)(a.N_,{to:"/contact",children:"Contact"})}),(0,c.jsx)("li",{children:(0,c.jsx)(a.N_,{to:"#/",children:"Orders tracking"})})]})})]})}),(0,c.jsx)("div",{className:"".concat(m?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4"),children:(0,c.jsxs)("div",{className:"".concat(m?"footer-widget mb-30 ml-95":"footer-widget mb-30 ml-50"),children:[(0,c.jsx)("div",{className:"footer-title",children:(0,c.jsx)("h3",{children:"USEFUL LINKS"})}),(0,c.jsx)("div",{className:"footer-list",children:(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{style:{fontWeight:"bold",textDecoration:"underline"},children:(0,c.jsx)(a.N_,{to:"/return",children:"Returns"})}),(0,c.jsx)("li",{children:(0,c.jsx)(a.N_,{to:"#/",children:"Support Policy"})}),(0,c.jsx)("li",{children:(0,c.jsx)(a.N_,{to:"#/",children:"Size guide"})}),(0,c.jsx)("li",{children:(0,c.jsx)(a.N_,{to:"#/",children:"FAQs"})})]})})]})}),(0,c.jsx)("div",{className:"".concat(m?"col-xl-3 col-sm-4":"col-lg-2 col-sm-6"),children:(0,c.jsxs)("div",{className:"".concat(m?"footer-widget mb-30 ml-145":"footer-widget mb-30 ml-75"),children:[(0,c.jsx)("div",{className:"footer-title",children:(0,c.jsx)("h3",{children:"FOLLOW US"})}),(0,c.jsx)("div",{className:"footer-list",children:(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:(0,c.jsx)("a",{href:"//www.facebook.com",target:"_blank",rel:"noopener noreferrer",children:"Facebook"})}),(0,c.jsx)("li",{children:(0,c.jsx)("a",{href:"//www.twitter.com",target:"_blank",rel:"noopener noreferrer",children:"Twitter"})}),(0,c.jsx)("li",{children:(0,c.jsx)("a",{href:"//www.instagram.com",target:"_blank",rel:"noopener noreferrer",children:"Instagram"})}),(0,c.jsx)("li",{children:(0,c.jsx)("a",{href:"//www.youtube.com",target:"_blank",rel:"noopener noreferrer",children:"Youtube"})})]})})]})}),(0,c.jsx)("div",{className:"".concat(m?"col-xl-3 col-sm-8":"col-lg-4 col-sm-6"),children:(0,c.jsx)(l.A,{spaceBottomClass:"mb-30",spaceLeftClass:"ml-70",sideMenu:m})})]})})})}},7766:function(e,r,s){s.d(r,{A:function(){return h}});var n=s(5544),a=s(5043),l=s(3024),c=(s(3188),s(3189)),i=s(6487),t=s(4993),o=s(9456),d=s(3468),u=s(579),m=function(e){var r=e.borderStyle,s=(0,o.d4)((function(e){return e.currency}));return(0,u.jsxs)("div",{className:(0,l.A)("header-top-wap","fluid-border"===r&&"border-bottom"),children:[(0,u.jsx)(d.A,{currency:s}),(0,u.jsx)("div",{className:"header-offer",children:(0,u.jsxs)("p",{children:["Free delivery on order over"," ",(0,u.jsx)("span",{children:s.currencySymbol+(200*s.currencyRate).toFixed(2)})]})})]})},h=function(e){var r=e.layout,s=e.top,o=e.borderStyle,d=e.headerPaddingClass,h=e.headerPositionClass,x=e.headerBgClass,j=(0,a.useState)(0),f=(0,n.A)(j,2),v=f[0],p=f[1],g=(0,a.useState)(0),N=(0,n.A)(g,2),b=N[0],y=N[1];(0,a.useEffect)((function(){var e=document.querySelector(".sticky-bar");return y(e.offsetTop),window.addEventListener("scroll",A),function(){window.removeEventListener("scroll",A)}}),[]);var A=function(){p(window.scrollY)};return(0,u.jsxs)("header",{className:(0,l.A)("header-area clearfix",x,h),children:[(0,u.jsx)("div",{className:(0,l.A)("header-top-area",d,"visible"===s?"d-none d-lg-block":"d-none","fluid-border"===o&&"border-none"),children:(0,u.jsx)("div",{className:"container-fluid"===r?r:"container",children:(0,u.jsx)(m,{borderStyle:o})})}),(0,u.jsxs)("div",{className:(0,l.A)(d,"sticky-bar header-res-padding clearfix",v>b&&"stick"),children:[(0,u.jsx)("div",{className:"container-fluid"===r?r:"container",children:(0,u.jsxs)("div",{className:"row",children:[(0,u.jsx)("div",{style:{display:"flex",alignItems:"center"},className:"col-xl-2 col-lg-2 col-md-6 col-4",children:(0,u.jsx)("h1",{style:{fontWeight:"600"},children:"Stickerify"})}),(0,u.jsx)("div",{className:"col-xl-8 col-lg-8 d-none d-lg-block",children:(0,u.jsx)(c.A,{})}),(0,u.jsx)("div",{className:"col-xl-2 col-lg-2 col-md-6 col-8",children:(0,u.jsx)(i.A,{})})]})}),(0,u.jsx)(t.A,{})]})]})}},1778:function(e,r,s){s.d(r,{A:function(){return f}});var n=s(9379),a=s(45),l=s(8139),c=s.n(l),i=s(5043),t=s(7852),o=s(3372),d=s(579),u=["bsPrefix","active","children","className","as","linkAs","linkProps","href","title","target"],m=i.forwardRef((function(e,r){var s=e.bsPrefix,l=e.active,i=void 0!==l&&l,m=e.children,h=e.className,x=e.as,j=void 0===x?"li":x,f=e.linkAs,v=void 0===f?o.A:f,p=e.linkProps,g=void 0===p?{}:p,N=e.href,b=e.title,y=e.target,A=(0,a.A)(e,u),w=(0,t.oU)(s,"breadcrumb-item");return(0,d.jsx)(j,(0,n.A)((0,n.A)({ref:r},A),{},{className:c()(w,h,{active:i}),"aria-current":i?"page":void 0,children:i?m:(0,d.jsx)(v,(0,n.A)((0,n.A)({},g),{},{href:N,title:b,target:y,children:m}))}))}));m.displayName="BreadcrumbItem";var h=m,x=["bsPrefix","className","listProps","children","label","as"],j=i.forwardRef((function(e,r){var s=e.bsPrefix,l=e.className,i=e.listProps,o=void 0===i?{}:i,u=e.children,m=e.label,h=void 0===m?"breadcrumb":m,j=e.as,f=void 0===j?"nav":j,v=(0,a.A)(e,x),p=(0,t.oU)(s,"breadcrumb");return(0,d.jsx)(f,(0,n.A)((0,n.A)({"aria-label":h,className:l,ref:r},v),{},{children:(0,d.jsx)("ol",(0,n.A)((0,n.A)({},o),{},{className:c()(p,null==o?void 0:o.className),children:u}))}))}));j.displayName="Breadcrumb";var f=Object.assign(j,{Item:h})}}]);
//# sourceMappingURL=3821.4d049c05.chunk.js.map