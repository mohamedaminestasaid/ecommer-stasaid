"use strict";(self.webpackChunkStickerify_react=self.webpackChunkStickerify_react||[]).push([[5310],{9182:function(e,r,s){s.r(r),s.d(r,{default:function(){return x}});var i=s(5043),c=s(9456),a=s(3216),t=s(2168),n=s(8062),l=s(970),d=s(4226),o=s(2731),u=s(3024),m=s(2821),p=s(3546),f=s(579),h=function(e){var r,s=e.product;return(0,f.jsxs)("div",{className:"product-large-image-wrapper product-large-image-wrapper--sticky",children:[s.discount||s.new?(0,f.jsxs)("div",{className:"product-img-badges",children:[s.discount?(0,f.jsxs)("span",{className:"pink",children:["-",s.discount,"%"]}):"",s.new?(0,f.jsx)("span",{className:"purple",children:"New"}):""]}):"",(0,f.jsx)("div",{className:"product-sticky-image mb--10",children:null===s||void 0===s||null===(r=s.image)||void 0===r?void 0:r.map((function(e,r){return(0,f.jsx)("div",{className:"product-sticky-image__single mb-10",children:(0,f.jsx)("img",{src:""+e,alt:"",className:"img-fluid"})},r)}))})]})},v=function(e){var r=e.spaceTopClass,s=e.spaceBottomClass,i=e.product,a=(0,c.d4)((function(e){return e.currency})),t=(0,c.d4)((function(e){return e.cart})).cartItems,n=(0,c.d4)((function(e){return e.wishlist})).wishlistItems,l=(0,c.d4)((function(e){return e.compare})).compareItems,d=n.find((function(e){return e.id===i.id})),o=l.find((function(e){return e.id===i.id})),v=(0,m.do)(i.price,i.discount),x=+(i.price*a.currencyRate).toFixed(2),b=+(v*a.currencyRate).toFixed(2);return(0,f.jsx)("div",{className:(0,u.A)("shop-area",r,s),children:(0,f.jsx)("div",{className:"container",children:(0,f.jsxs)("div",{className:"row",children:[(0,f.jsx)("div",{className:"col-lg-6 col-md-6",children:(0,f.jsx)(h,{product:i})}),(0,f.jsx)("div",{className:"col-lg-6 col-md-6",children:(0,f.jsx)("div",{style:{position:"sticky",top:"75px"},children:(0,f.jsx)(p.A,{product:i,discountedPrice:v,currency:a,finalDiscountedPrice:b,finalProductPrice:x,cartItems:t,wishlistItem:d,compareItem:o})})})]})})})},x=function(){var e=(0,a.zy)().pathname,r=(0,a.g)().id,s=(0,c.d4)((function(e){return e.product})).products.find((function(e){return e.id===r}));return(0,f.jsxs)(i.Fragment,{children:[(0,f.jsx)(t.A,{titleTemplate:"Product Page",description:"Product page of Stickerify"}),(0,f.jsxs)(n.A,{headerTop:"visible",children:[(0,f.jsx)(l.A,{pages:[{label:"Home",path:"/"},{label:"Shop Product",path:""+e}]}),(0,f.jsx)(v,{spaceTopClass:"mt-100",spaceBottomClass:"mb-100",product:s}),(0,f.jsx)(o.A,{spaceBottomClass:"pb-90",productFullDesc:s.fullDescription}),(0,f.jsx)(d.A,{spaceBottomClass:"pb-95",category:s.category[0]})]})]})}},1778:function(e,r,s){s.d(r,{A:function(){return v}});var i=s(9379),c=s(45),a=s(8139),t=s.n(a),n=s(5043),l=s(7852),d=s(3372),o=s(579),u=["bsPrefix","active","children","className","as","linkAs","linkProps","href","title","target"],m=n.forwardRef((function(e,r){var s=e.bsPrefix,a=e.active,n=void 0!==a&&a,m=e.children,p=e.className,f=e.as,h=void 0===f?"li":f,v=e.linkAs,x=void 0===v?d.A:v,b=e.linkProps,j=void 0===b?{}:b,g=e.href,N=e.title,A=e.target,y=(0,c.A)(e,u),k=(0,l.oU)(s,"breadcrumb-item");return(0,o.jsx)(h,(0,i.A)((0,i.A)({ref:r},y),{},{className:t()(k,p,{active:n}),"aria-current":n?"page":void 0,children:n?m:(0,o.jsx)(x,(0,i.A)((0,i.A)({},j),{},{href:g,title:N,target:A,children:m}))}))}));m.displayName="BreadcrumbItem";var p=m,f=["bsPrefix","className","listProps","children","label","as"],h=n.forwardRef((function(e,r){var s=e.bsPrefix,a=e.className,n=e.listProps,d=void 0===n?{}:n,u=e.children,m=e.label,p=void 0===m?"breadcrumb":m,h=e.as,v=void 0===h?"nav":h,x=(0,c.A)(e,f),b=(0,l.oU)(s,"breadcrumb");return(0,o.jsx)(v,(0,i.A)((0,i.A)({"aria-label":p,className:a,ref:r},x),{},{children:(0,o.jsx)("ol",(0,i.A)((0,i.A)({},d),{},{className:t()(b,null==d?void 0:d.className),children:u}))}))}));h.displayName="Breadcrumb";var v=Object.assign(h,{Item:p})}}]);
//# sourceMappingURL=5310.9996eca6.chunk.js.map