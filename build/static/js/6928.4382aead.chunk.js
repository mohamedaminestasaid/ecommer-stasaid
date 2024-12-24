"use strict";(self.webpackChunkStickerify_react=self.webpackChunkStickerify_react||[]).push([[6928],{6928:function(e,t,r){r.r(t);var s=r(5544),c=r(5043),n=r(4897),i=r(9456),o=r(3216),a=r(2821),l=r(2168),u=r(8062),d=r(970),h=r(623),p=r(7577),x=r(579);t.default=function(e){e.location;var t=(0,c.useState)("list two-column"),r=(0,s.A)(t,2),m=r[0],j=r[1],f=(0,c.useState)(""),g=(0,s.A)(f,2),v=g[0],S=g[1],N=(0,c.useState)(""),C=(0,s.A)(N,2),P=C[0],b=C[1],A=(0,c.useState)(""),w=(0,s.A)(A,2),k=w[0],L=w[1],y=(0,c.useState)(""),F=(0,s.A)(y,2),T=F[0],z=F[1],H=(0,c.useState)(0),_=(0,s.A)(H,2),G=_[0],D=_[1],E=(0,c.useState)(1),I=(0,s.A)(E,2),O=I[0],Q=I[1],R=(0,c.useState)([]),V=(0,s.A)(R,2),q=V[0],B=V[1],J=(0,c.useState)([]),K=(0,s.A)(J,2),M=K[0],U=K[1],W=(0,i.d4)((function(e){return e.product})).products,X=(0,o.zy)().pathname;return(0,c.useEffect)((function(){var e=(0,a.Gj)(W,v,P),t=(0,a.Gj)(e,k,T);U(e=t),B(e.slice(G,G+16))}),[G,W,v,P,k,T]),(0,x.jsxs)(c.Fragment,{children:[(0,x.jsx)(l.A,{titleTemplate:"Shop Page",description:"Shop page of Stickerify"}),(0,x.jsxs)(u.A,{headerTop:"visible",children:[(0,x.jsx)(d.A,{pages:[{label:"Home",path:"/"},{label:"Shop",path:""+X}]}),(0,x.jsx)("div",{className:"shop-area pt-95 pb-100",children:(0,x.jsx)("div",{className:"container-fluid",children:(0,x.jsx)("div",{className:"row",children:(0,x.jsxs)("div",{className:"col-lg-12",children:[(0,x.jsx)(h.A,{getLayout:function(e){j(e)},getFilterSortParams:function(e,t){L(e),z(t)},productCount:W.length,sortedProductCount:q.length,products:W,getSortParams:function(e,t){S(e),b(t)}}),(0,x.jsx)(p.A,{layout:m,products:q}),(0,x.jsx)("div",{className:"pro-pagination-style text-center mt-30",children:(0,x.jsx)(n.A,{totalRecords:M.length,pageLimit:16,pageNeighbours:2,setOffset:D,currentPage:O,setCurrentPage:Q,pageContainerClass:"mb-0 mt-0",pagePrevText:"\xab",pageNextText:"\xbb"})})]})})})})]})]})}},623:function(e,t,r){r.d(t,{A:function(){return a}});var s=r(5043),c=r(2821),n=r(579),i=function(e){var t=e.products,r=e.getSortParams,s=(0,c.SC)(t),i=(0,c.zf)(t),o=(0,c.ur)(t),a=(0,c.VI)(t);return(0,n.jsx)("div",{className:"product-filter-wrapper",id:"product-filter-wrapper",children:(0,n.jsx)("div",{className:"product-filter-wrapper__inner",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("div",{className:"col-md-3 col-sm-6 col-xs-12 mb-30",children:(0,n.jsxs)("div",{className:"product-filter",children:[(0,n.jsx)("h5",{children:"Categories"}),s?(0,n.jsx)("ul",{children:s.map((function(e,t){return(0,n.jsx)("li",{children:(0,n.jsx)("button",{onClick:function(t){r("category",e),(0,c.nL)(t)},children:e})},t)}))}):"No categories found"]})}),(0,n.jsx)("div",{className:"col-md-3 col-sm-6 col-xs-12 mb-30",children:(0,n.jsxs)("div",{className:"product-filter",children:[(0,n.jsx)("h5",{children:"Color"}),i?(0,n.jsx)("ul",{children:i.map((function(e,t){return(0,n.jsx)("li",{children:(0,n.jsx)("button",{onClick:function(t){r("color",e),(0,c.nL)(t)},children:e})},t)}))}):"No colors found"]})}),(0,n.jsx)("div",{className:"col-md-3 col-sm-6 col-xs-12 mb-30",children:(0,n.jsxs)("div",{className:"product-filter",children:[(0,n.jsx)("h5",{children:"Size"}),o?(0,n.jsx)("ul",{children:o.map((function(e,t){return(0,n.jsx)("li",{children:(0,n.jsx)("button",{className:"text-uppercase",onClick:function(t){r("size",e),(0,c.nL)(t)},children:e})},t)}))}):"No sizes found"]})}),(0,n.jsx)("div",{className:"col-md-3 col-sm-6 col-xs-12 mb-30",children:(0,n.jsxs)("div",{className:"product-filter product-filter--tag",children:[(0,n.jsx)("h5",{children:"Tag"}),a?(0,n.jsx)("ul",{children:a.map((function(e,t){return(0,n.jsx)("li",{children:(0,n.jsx)("button",{onClick:function(t){r("tag",e),(0,c.nL)(t)},children:e})},t)}))}):"No tags found"]})})]})})})},o=function(e){var t=e.getFilterSortParams,r=e.productCount,o=e.sortedProductCount,a=e.products,l=e.getSortParams;return(0,n.jsxs)(s.Fragment,{children:[(0,n.jsxs)("div",{className:"shop-top-bar mb-35",children:[(0,n.jsxs)("div",{className:"select-shoing-wrap",children:[(0,n.jsx)("div",{className:"shop-select",children:(0,n.jsxs)("select",{onChange:function(e){return t("filterSort",e.target.value)},children:[(0,n.jsx)("option",{value:"default",children:"Default"}),(0,n.jsx)("option",{value:"priceHighToLow",children:"Price - High to Low"}),(0,n.jsx)("option",{value:"priceLowToHigh",children:"Price - Low to High"})]})}),(0,n.jsxs)("p",{children:["Showing ",o," of ",r," result"]})]}),(0,n.jsx)("div",{className:"filter-active",children:(0,n.jsxs)("button",{onClick:function(e){return(0,c.sQ)(e)},children:[(0,n.jsx)("i",{className:"fa fa-plus"})," filter"]})})]}),(0,n.jsx)(i,{products:a,getSortParams:l})]})},a=function(e){var t=e.getLayout,r=e.getFilterSortParams,c=e.productCount,i=e.sortedProductCount,a=e.products,l=e.getSortParams;return(0,n.jsx)(s.Fragment,{children:(0,n.jsx)(o,{getLayout:t,getFilterSortParams:r,productCount:c,sortedProductCount:i,products:a,getSortParams:l})})}}}]);
//# sourceMappingURL=6928.4382aead.chunk.js.map