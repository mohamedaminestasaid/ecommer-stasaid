"use strict";(self.webpackChunkStickerify_react=self.webpackChunkStickerify_react||[]).push([[2421],{2421:function(e,s,i){i.r(s);var l=i(5043),n=i(9456),r=i(3216),c=i(2168),a=i(8062),t=i(970),d=i(4226),o=i(2731),u=i(6827),m=i(579);s.default=function(){var e=(0,r.zy)().pathname,s=(0,r.g)().id,i=(0,n.d4)((function(e){return e.product})).products.find((function(e){return e.id===s}));return(0,m.jsxs)(l.Fragment,{children:[(0,m.jsx)(c.A,{titleTemplate:"Product Page",description:"Product Page of Stickerify"}),(0,m.jsxs)(a.A,{headerTop:"visible",children:[(0,m.jsx)(t.A,{pages:[{label:"Home",path:"/"},{label:"Shop Product",path:""+e}]}),(0,m.jsx)(u.A,{spaceTopClass:"pt-100",spaceBottomClass:"pb-100",product:i}),(0,m.jsx)(o.A,{spaceBottomClass:"pb-90",productFullDesc:i.fullDescription}),(0,m.jsx)(d.A,{spaceBottomClass:"pb-95",category:i.category[0]})]})]})}},6827:function(e,s,i){i.d(s,{A:function(){return v}});var l=i(9456),n=i(3024),r=i(2821),c=i(5544),a=i(5043),t=i(8906),d=i(5568),o=i(5459),u=i(4629),m=i(31),p=i(7362),x=i(579),h=function(e){var s,i,l=e.product,n=(0,a.useState)(null),r=(0,c.A)(n,2),h=r[0],g=r[1],f=(0,a.useState)(-1),j=(0,c.A)(f,2),v=j[0],N=j[1],w=null===l||void 0===l?void 0:l.image.map((function(e,s){return{src:""+e,key:s}})),A={spaceBetween:10,loop:!0,effect:"fade",fadeEffect:{crossFade:!0},thumbs:{swiper:h},modules:[t._R,t.WO]},b={onSwiper:g,spaceBetween:10,slidesPerView:4,touchRatio:.2,freeMode:!0,loop:!0,slideToClickedSlide:!0,navigation:!0};return(0,x.jsxs)(a.Fragment,{children:[(0,x.jsxs)("div",{className:"product-large-image-wrapper",children:[l.discount||l.new?(0,x.jsxs)("div",{className:"product-img-badges",children:[l.discount?(0,x.jsxs)("span",{className:"pink",children:["-",l.discount,"%"]}):"",l.new?(0,x.jsx)("span",{className:"purple",children:"New"}):""]}):"",null!==l&&void 0!==l&&null!==(s=l.image)&&void 0!==s&&s.length?(0,x.jsxs)(p.A,{options:A,children:[l.image.map((function(e,s){return(0,x.jsxs)(p.q,{children:[(0,x.jsx)("button",{className:"lightgallery-button",onClick:function(){return N(s)},children:(0,x.jsx)("i",{className:"pe-7s-expand1"})}),(0,x.jsx)("div",{className:"single-image",children:(0,x.jsx)("img",{src:""+e,className:"img-fluid",alt:""})})]},s)})),(0,x.jsx)(d.A,{open:v>=0,index:v,close:function(){return N(-1)},slides:w,plugins:[o.A,u.Ay,m.A]})]}):null]}),(0,x.jsx)("div",{className:"product-small-image-wrapper mt-15",children:null!==l&&void 0!==l&&null!==(i=l.image)&&void 0!==i&&i.length?(0,x.jsx)(p.A,{options:b,children:l.image.map((function(e,s){return(0,x.jsx)(p.q,{children:(0,x.jsx)("div",{className:"single-image",children:(0,x.jsx)("img",{src:""+e,className:"img-fluid",alt:""})})},s)}))}):null})]})},g=i(3546),f=function(e){var s,i,l=e.product,r=e.thumbPosition,h=(0,a.useState)(null),g=(0,c.A)(h,2),f=g[0],j=g[1],v=(0,a.useState)(-1),N=(0,c.A)(v,2),w=N[0],A=N[1],b=null===l||void 0===l?void 0:l.image.map((function(e,s){return{src:""+e,key:s}})),y={spaceBetween:10,loop:!0,effect:"fade",fadeEffect:{crossFade:!0},thumbs:{swiper:f},modules:[t._R,t.WO]},P={onSwiper:j,spaceBetween:10,slidesPerView:4,touchRatio:.2,loop:!0,slideToClickedSlide:!0,direction:"vertical",breakpoints:{320:{slidesPerView:4,direction:"horizontal"},640:{slidesPerView:4,direction:"horizontal"},768:{slidesPerView:4,direction:"horizontal"},992:{slidesPerView:4,direction:"horizontal"},1200:{slidesPerView:4,direction:"vertical"}}};return(0,x.jsx)(a.Fragment,{children:(0,x.jsxs)("div",{className:"row row-5 test",children:[(0,x.jsx)("div",{className:(0,n.A)(r&&"left"===r?"col-xl-10 order-1 order-xl-2":"col-xl-10"),children:(0,x.jsxs)("div",{className:"product-large-image-wrapper",children:[l.discount||l.new?(0,x.jsxs)("div",{className:"product-img-badges",children:[l.discount?(0,x.jsxs)("span",{className:"pink",children:["-",l.discount,"%"]}):"",l.new?(0,x.jsx)("span",{className:"purple",children:"New"}):""]}):"",null!==l&&void 0!==l&&null!==(s=l.image)&&void 0!==s&&s.length?(0,x.jsxs)(p.A,{options:y,children:[null===l||void 0===l?void 0:l.image.map((function(e,s){return(0,x.jsxs)(p.q,{children:[(0,x.jsx)("button",{className:"lightgallery-button",onClick:function(){return A(s)},children:(0,x.jsx)("i",{className:"pe-7s-expand1"})}),(0,x.jsx)("div",{className:"single-image",children:(0,x.jsx)("img",{src:""+e,className:"img-fluid",alt:""})})]},s)})),(0,x.jsx)(d.A,{open:w>=0,index:w,close:function(){return A(-1)},slides:b,plugins:[o.A,u.Ay,m.A]})]}):null]})}),(0,x.jsx)("div",{className:(0,n.A)(r&&"left"===r?"col-xl-2 order-2 order-xl-1":"col-xl-2"),children:(0,x.jsx)("div",{className:"product-small-image-wrapper product-small-image-wrapper--side-thumb",children:null!==l&&void 0!==l&&null!==(i=l.image)&&void 0!==i&&i.length?(0,x.jsx)(p.A,{options:P,children:l.image.map((function(e,s){return(0,x.jsx)(p.q,{children:(0,x.jsx)("div",{className:"single-image",children:(0,x.jsx)("img",{src:""+e,className:"img-fluid",alt:""})})},s)}))}):null})})]})})},j=function(e){var s=e.product;return(0,x.jsxs)("div",{className:"product-large-image-wrapper",children:[s.discount||s.new?(0,x.jsxs)("div",{className:"product-img-badges",children:[s.discount?(0,x.jsxs)("span",{className:"pink",children:["-",s.discount,"%"]}):"",s.new?(0,x.jsx)("span",{className:"purple",children:"New"}):""]}):"",(0,x.jsx)("div",{className:"product-fixed-image",children:s.image?(0,x.jsx)("img",{src:""+s.image[0],alt:"",className:"img-fluid"}):""})]})},v=function(e){var s=e.spaceTopClass,i=e.spaceBottomClass,c=e.galleryType,a=e.product,t=(0,l.d4)((function(e){return e.currency})),d=(0,l.d4)((function(e){return e.cart})).cartItems,o=(0,l.d4)((function(e){return e.wishlist})).wishlistItems,u=(0,l.d4)((function(e){return e.compare})).compareItems,m=o.find((function(e){return e.id===a.id})),p=u.find((function(e){return e.id===a.id})),v=(0,r.do)(a.price,a.discount),N=+(a.price*t.currencyRate).toFixed(2),w=+(v*t.currencyRate).toFixed(2);return(0,x.jsx)("div",{className:(0,n.A)("shop-area",s,i),children:(0,x.jsx)("div",{className:"container",children:(0,x.jsxs)("div",{className:"row",children:[(0,x.jsx)("div",{className:"col-lg-6 col-md-6",children:"leftThumb"===c?(0,x.jsx)(f,{product:a,thumbPosition:"left"}):"rightThumb"===c?(0,x.jsx)(f,{product:a}):"fixedImage"===c?(0,x.jsx)(j,{product:a}):(0,x.jsx)(h,{product:a})}),(0,x.jsx)("div",{className:"col-lg-6 col-md-6",children:(0,x.jsx)(g.A,{product:a,discountedPrice:v,currency:t,finalDiscountedPrice:w,finalProductPrice:N,cartItems:d,wishlistItem:m,compareItem:p})})]})})})}}}]);
//# sourceMappingURL=2421.d5871da5.chunk.js.map