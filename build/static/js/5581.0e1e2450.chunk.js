"use strict";(self.webpackChunkStickerify_react=self.webpackChunkStickerify_react||[]).push([[5581],{1177:function(e,n,t){t.d(n,{A:function(){return q}});var o=t(9379),r=t(45),i=t(8139),a=t.n(i),s=t(5043),c=t(9106),l=t(7852),u=t(4467),f=t(8747),d=t(9924),p=t(9791),v=t(1111);var m=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.filter((function(e){return null!=e})).reduce((function(e,n){if("function"!==typeof n)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?n:function(){for(var t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];e.apply(this,o),n.apply(this,o)}}),null)},y=t(2643),h=t(865),A=t(579),x=["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","in","timeout","mountOnEnter","unmountOnExit","appear","getDimensionValue"],g={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function E(e,n){var t=n["offset".concat(e[0].toUpperCase()).concat(e.slice(1))],o=g[e];return t+parseInt((0,f.A)(n,o[0]),10)+parseInt((0,f.A)(n,o[1]),10)}var b=(0,u.A)((0,u.A)((0,u.A)((0,u.A)({},d.kp,"collapse"),d.ze,"collapsing"),d.ns,"collapsing"),d._K,"collapse show"),N=s.forwardRef((function(e,n){var t=e.onEnter,i=e.onEntering,c=e.onEntered,l=e.onExit,u=e.onExiting,f=e.className,d=e.children,g=e.dimension,N=void 0===g?"height":g,w=e.in,P=void 0!==w&&w,S=e.timeout,U=void 0===S?300:S,C=e.mountOnEnter,j=void 0!==C&&C,_=e.unmountOnExit,k=void 0!==_&&_,R=e.appear,W=void 0!==R&&R,K=e.getDimensionValue,O=void 0===K?E:K,D=(0,r.A)(e,x),F="function"===typeof N?N():N,I=(0,s.useMemo)((function(){return m((function(e){e.style[F]="0"}),t)}),[F,t]),B=(0,s.useMemo)((function(){return m((function(e){var n="scroll".concat(F[0].toUpperCase()).concat(F.slice(1));e.style[F]="".concat(e[n],"px")}),i)}),[F,i]),M=(0,s.useMemo)((function(){return m((function(e){e.style[F]=null}),c)}),[F,c]),T=(0,s.useMemo)((function(){return m((function(e){e.style[F]="".concat(O(F,e),"px"),(0,y.A)(e)}),l)}),[l,O,F]),L=(0,s.useMemo)((function(){return m((function(e){e.style[F]=null}),u)}),[F,u]);return(0,A.jsx)(h.A,(0,o.A)((0,o.A)({ref:n,addEndListener:v.A},D),{},{"aria-expanded":D.role?P:null,onEnter:I,onEntering:B,onEntered:M,onExit:T,onExiting:L,childRef:(0,p.am)(d),in:P,timeout:U,mountOnEnter:j,unmountOnExit:k,appear:W,children:function(e,n){return s.cloneElement(d,(0,o.A)((0,o.A)({},n),{},{className:a()(f,d.props.className,b[e],"width"===F&&"collapse-horizontal")}))}}))}));function w(e,n){return Array.isArray(e)?e.includes(n):e===n}var P=s.createContext({});P.displayName="AccordionContext";var S=P,U=["as","bsPrefix","className","children","eventKey"],C=s.forwardRef((function(e,n){var t=e.as,i=void 0===t?"div":t,c=e.bsPrefix,u=e.className,f=e.children,d=e.eventKey,p=(0,r.A)(e,U),v=(0,s.useContext)(S).activeEventKey;return c=(0,l.oU)(c,"accordion-collapse"),(0,A.jsx)(N,(0,o.A)((0,o.A)({ref:n,in:w(v,d)},p),{},{className:a()(u,c),children:(0,A.jsx)(i,{children:s.Children.only(f)})}))}));C.displayName="AccordionCollapse";var j=C,_=s.createContext({eventKey:""});_.displayName="AccordionItemContext";var k=_,R=["as","bsPrefix","className","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],W=s.forwardRef((function(e,n){var t=e.as,i=void 0===t?"div":t,c=e.bsPrefix,u=e.className,f=e.onEnter,d=e.onEntering,p=e.onEntered,v=e.onExit,m=e.onExiting,y=e.onExited,h=(0,r.A)(e,R);c=(0,l.oU)(c,"accordion-body");var x=(0,s.useContext)(k).eventKey;return(0,A.jsx)(j,{eventKey:x,onEnter:f,onEntering:d,onEntered:p,onExit:v,onExiting:m,onExited:y,children:(0,A.jsx)(i,(0,o.A)((0,o.A)({ref:n},h),{},{className:a()(u,c)}))})}));W.displayName="AccordionBody";var K=W,O=t(436),D=["as","bsPrefix","className","onClick"];var F=s.forwardRef((function(e,n){var t=e.as,i=void 0===t?"button":t,c=e.bsPrefix,u=e.className,f=e.onClick,d=(0,r.A)(e,D);c=(0,l.oU)(c,"accordion-button");var p=(0,s.useContext)(k).eventKey,v=function(e,n){var t=(0,s.useContext)(S),o=t.activeEventKey,r=t.onSelect,i=t.alwaysOpen;return function(t){var a=e===o?null:e;i&&(a=Array.isArray(o)?o.includes(e)?o.filter((function(n){return n!==e})):[].concat((0,O.A)(o),[e]):[e]),null==r||r(a,t),null==n||n(t)}}(p,f),m=(0,s.useContext)(S).activeEventKey;return"button"===i&&(d.type="button"),(0,A.jsx)(i,(0,o.A)((0,o.A)({ref:n,onClick:v},d),{},{"aria-expanded":Array.isArray(m)?m.includes(p):p===m,className:a()(u,c,!w(m,p)&&"collapsed")}))}));F.displayName="AccordionButton";var I=F,B=["as","aria-controls","bsPrefix","className","children","onClick"],M=s.forwardRef((function(e,n){var t=e.as,i=void 0===t?"h2":t,s=e["aria-controls"],c=e.bsPrefix,u=e.className,f=e.children,d=e.onClick,p=(0,r.A)(e,B);return c=(0,l.oU)(c,"accordion-header"),(0,A.jsx)(i,(0,o.A)((0,o.A)({ref:n},p),{},{className:a()(u,c),children:(0,A.jsx)(I,{onClick:d,"aria-controls":s,children:f})}))}));M.displayName="AccordionHeader";var T=M,L=["as","bsPrefix","className","eventKey"],z=s.forwardRef((function(e,n){var t=e.as,i=void 0===t?"div":t,c=e.bsPrefix,u=e.className,f=e.eventKey,d=(0,r.A)(e,L);c=(0,l.oU)(c,"accordion-item");var p=(0,s.useMemo)((function(){return{eventKey:f}}),[f]);return(0,A.jsx)(k.Provider,{value:p,children:(0,A.jsx)(i,(0,o.A)((0,o.A)({ref:n},d),{},{className:a()(u,c)}))})}));z.displayName="AccordionItem";var H=z,V=["as","activeKey","bsPrefix","className","onSelect","flush","alwaysOpen"],Z=s.forwardRef((function(e,n){var t=(0,c.Zw)(e,{activeKey:"onSelect"}),i=t.as,u=void 0===i?"div":i,f=t.activeKey,d=t.bsPrefix,p=t.className,v=t.onSelect,m=t.flush,y=t.alwaysOpen,h=(0,r.A)(t,V),x=(0,l.oU)(d,"accordion"),g=(0,s.useMemo)((function(){return{activeEventKey:f,onSelect:v,alwaysOpen:y}}),[f,v,y]);return(0,A.jsx)(S.Provider,{value:g,children:(0,A.jsx)(u,(0,o.A)((0,o.A)({ref:n},h),{},{className:a()(p,x,m&&"".concat(x,"-flush"))}))})}));Z.displayName="Accordion";var q=Object.assign(Z,{Button:I,Collapse:j,Item:H,Header:T,Body:K})},1778:function(e,n,t){t.d(n,{A:function(){return y}});var o=t(9379),r=t(45),i=t(8139),a=t.n(i),s=t(5043),c=t(7852),l=t(3372),u=t(579),f=["bsPrefix","active","children","className","as","linkAs","linkProps","href","title","target"],d=s.forwardRef((function(e,n){var t=e.bsPrefix,i=e.active,s=void 0!==i&&i,d=e.children,p=e.className,v=e.as,m=void 0===v?"li":v,y=e.linkAs,h=void 0===y?l.A:y,A=e.linkProps,x=void 0===A?{}:A,g=e.href,E=e.title,b=e.target,N=(0,r.A)(e,f),w=(0,c.oU)(t,"breadcrumb-item");return(0,u.jsx)(m,(0,o.A)((0,o.A)({ref:n},N),{},{className:a()(w,p,{active:s}),"aria-current":s?"page":void 0,children:s?d:(0,u.jsx)(h,(0,o.A)((0,o.A)({},x),{},{href:g,title:E,target:b,children:d}))}))}));d.displayName="BreadcrumbItem";var p=d,v=["bsPrefix","className","listProps","children","label","as"],m=s.forwardRef((function(e,n){var t=e.bsPrefix,i=e.className,s=e.listProps,l=void 0===s?{}:s,f=e.children,d=e.label,p=void 0===d?"breadcrumb":d,m=e.as,y=void 0===m?"nav":m,h=(0,r.A)(e,v),A=(0,c.oU)(t,"breadcrumb");return(0,u.jsx)(y,(0,o.A)((0,o.A)({"aria-label":p,className:i,ref:n},h),{},{children:(0,u.jsx)("ol",(0,o.A)((0,o.A)({},l),{},{className:a()(A,null==l?void 0:l.className),children:f}))}))}));m.displayName="Breadcrumb";var y=Object.assign(m,{Item:p})},5484:function(e,n,t){function o(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function r(e){this.setState(function(n){var t=this.constructor.getDerivedStateFromProps(e,n);return null!==t&&void 0!==t?t:null}.bind(this))}function i(e,n){try{var t=this.props,o=this.state;this.props=e,this.state=n,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(t,o)}finally{this.props=t,this.state=o}}function a(e){var n=e.prototype;if(!n||!n.isReactComponent)throw new Error("Can only polyfill class components");if("function"!==typeof e.getDerivedStateFromProps&&"function"!==typeof n.getSnapshotBeforeUpdate)return e;var t=null,a=null,s=null;if("function"===typeof n.componentWillMount?t="componentWillMount":"function"===typeof n.UNSAFE_componentWillMount&&(t="UNSAFE_componentWillMount"),"function"===typeof n.componentWillReceiveProps?a="componentWillReceiveProps":"function"===typeof n.UNSAFE_componentWillReceiveProps&&(a="UNSAFE_componentWillReceiveProps"),"function"===typeof n.componentWillUpdate?s="componentWillUpdate":"function"===typeof n.UNSAFE_componentWillUpdate&&(s="UNSAFE_componentWillUpdate"),null!==t||null!==a||null!==s){var c=e.displayName||e.name,l="function"===typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+c+" uses "+l+" but also contains the following legacy lifecycles:"+(null!==t?"\n  "+t:"")+(null!==a?"\n  "+a:"")+(null!==s?"\n  "+s:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"===typeof e.getDerivedStateFromProps&&(n.componentWillMount=o,n.componentWillReceiveProps=r),"function"===typeof n.getSnapshotBeforeUpdate){if("function"!==typeof n.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");n.componentWillUpdate=i;var u=n.componentDidUpdate;n.componentDidUpdate=function(e,n,t){var o=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:t;u.call(this,e,n,o)}}return e}t.r(n),t.d(n,{polyfill:function(){return a}}),o.__suppressDeprecationWarning=!0,r.__suppressDeprecationWarning=!0,i.__suppressDeprecationWarning=!0},9106:function(e,n,t){function o(){return o=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)({}).hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},o.apply(null,arguments)}t.d(n,{Zw:function(){return c}});var r=t(8587),i=t(5043);t(2740);function a(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function s(e){var n=function(e,n){if("object"!==typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var o=t.call(e,n||"default");if("object"!==typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"===typeof n?n:String(n)}function c(e,n){return Object.keys(n).reduce((function(t,c){var l,u=t,f=u[a(c)],d=u[c],p=(0,r.A)(u,[a(c),c].map(s)),v=n[c],m=function(e,n,t){var o=(0,i.useRef)(void 0!==e),r=(0,i.useState)(n),a=r[0],s=r[1],c=void 0!==e,l=o.current;return o.current=c,!c&&l&&a!==n&&s(n),[c?e:a,(0,i.useCallback)((function(e){for(var n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];t&&t.apply(void 0,[e].concat(o)),s(e)}),[t])]}(d,f,e[v]),y=m[0],h=m[1];return o({},p,((l={})[c]=y,l[v]=h,l))}),e)}t(5484)}}]);
//# sourceMappingURL=5581.0e1e2450.chunk.js.map