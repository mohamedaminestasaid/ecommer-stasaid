"use strict";(self.webpackChunkStickerify_react=self.webpackChunkStickerify_react||[]).push([[3110],{3110:function(e,n,t){t.r(n);var r=t(5043),i=(t(1972),t(579));n.default=function(){return(0,r.useEffect)((function(){document.title="Payment Successful!"}),[]),(0,i.jsxs)("div",{style:{height:"100vh",width:"100vw",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},children:[(0,i.jsx)("h1",{children:"Payment Failed... :("}),(0,i.jsx)("p",{children:"Your Payment Failed, You can now close this window "})]})}},1972:function(e,n,t){t.d(n,{c:function(){return l}});var r="https://js.stripe.com/v3",i=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,o="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",c=null,a=function(e){return null!==c||(c=new Promise((function(n,t){if("undefined"!==typeof window&&"undefined"!==typeof document)if(window.Stripe&&e&&console.warn(o),window.Stripe)n(window.Stripe);else try{var c=function(){for(var e=document.querySelectorAll('script[src^="'.concat(r,'"]')),n=0;n<e.length;n++){var t=e[n];if(i.test(t.src))return t}return null}();c&&e?console.warn(o):c||(c=function(e){var n=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",t=document.createElement("script");t.src="".concat(r).concat(n);var i=document.head||document.body;if(!i)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return i.appendChild(t),t}(e)),c.addEventListener("load",(function(){window.Stripe?n(window.Stripe):t(new Error("Stripe.js not available"))})),c.addEventListener("error",(function(){t(new Error("Failed to load Stripe.js"))}))}catch(a){return void t(a)}else n(null)}))),c},s=Promise.resolve().then((function(){return a(null)})),u=!1;s.catch((function(e){u||console.warn(e)}));var l=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];u=!0;var r=Date.now();return s.then((function(e){return function(e,n,t){if(null===e)return null;var r=e.apply(void 0,n);return function(e,n){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"1.54.2",startTime:n})}(r,t),r}(e,n,r)}))}}}]);
//# sourceMappingURL=3110.966bb5c5.chunk.js.map