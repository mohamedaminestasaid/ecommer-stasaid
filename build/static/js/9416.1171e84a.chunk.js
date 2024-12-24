"use strict";(self.webpackChunkStickerify_react=self.webpackChunkStickerify_react||[]).push([[9416],{5901:function(n,e,t){t.d(e,{u:function(){return o}});var r=t(5043).createContext(null),o=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return null!=n?String(n):e||null};e.A=r},8466:function(n,e,t){var r=t(5043).createContext(null);e.A=r},8067:function(n,e,t){t.d(e,{A:function(){return z}});var r=t(4467),o=t(9379),i=t(45),a=t(8139),l=t.n(a),u=t(5043),c=t(9106),s=t(3818),d=t(5544);var f=t(3539),v=u.createContext(null);v.displayName="NavContext";var p=v,m=t(5901),y=t(8466),x=t(5425),E=t(8894),b=t(4140),A=t(579),h=["as","active","eventKey"];function g(n){var e=n.key,t=n.onClick,r=n.active,o=n.id,i=n.role,a=n.disabled,l=(0,u.useContext)(m.A),c=(0,u.useContext)(p),s=(0,u.useContext)(y.A),d=r,f={role:i};if(c){i||"tablist"!==c.role||(f.role="tab");var v=c.getControllerId(null!=e?e:null),b=c.getControlledId(null!=e?e:null);f[(0,x.sE)("event-key")]=e,f.id=v||o,!(d=null==r&&null!=e?c.activeKey===e:r)&&(null!=s&&s.unmountOnExit||null!=s&&s.mountOnEnter)||(f["aria-controls"]=b)}return"tab"===f.role&&(f["aria-selected"]=d,d||(f.tabIndex=-1),a&&(f.tabIndex=-1,f["aria-disabled"]=!0)),f.onClick=(0,E.A)((function(n){a||(null==t||t(n),null!=e&&l&&!n.isPropagationStopped()&&l(e,n))})),[f,{isActive:d}]}var C=u.forwardRef((function(n,e){var t=n.as,r=void 0===t?b.Ay:t,o=n.active,i=n.eventKey,a=function(n,e){if(null==n)return{};var t={};for(var r in n)if({}.hasOwnProperty.call(n,r)){if(e.indexOf(r)>=0)continue;t[r]=n[r]}return t}(n,h),l=g(Object.assign({key:(0,m.u)(i,a.href),active:o},a)),u=(0,d.A)(l,2),c=u[0],s=u[1];return c[(0,x.sE)("active")]=s.isActive,(0,A.jsx)(r,Object.assign({},a,c,{ref:e}))}));C.displayName="NavItem";var S=C,w=["as","onSelect","activeKey","role","onKeyDown"];var O=function(){},N=(0,x.sE)("event-key"),P=u.forwardRef((function(n,e){var t,r,o=n.as,i=void 0===o?"div":o,a=n.onSelect,l=n.activeKey,c=n.role,v=n.onKeyDown,E=function(n,e){if(null==n)return{};var t={};for(var r in n)if({}.hasOwnProperty.call(n,r)){if(e.indexOf(r)>=0)continue;t[r]=n[r]}return t}(n,w),b=function(){var n=(0,u.useReducer)((function(n){return n+1}),0);return(0,d.A)(n,2)[1]}(),h=(0,u.useRef)(!1),g=(0,u.useContext)(m.A),C=(0,u.useContext)(y.A);C&&(c=c||"tablist",l=C.activeKey,t=C.getControlledId,r=C.getControllerId);var S=(0,u.useRef)(null),P=function(n){var e=S.current;if(!e)return null;var t=(0,s.A)(e,"[".concat(N,"]:not([aria-disabled=true])")),r=e.querySelector("[aria-selected=true]");if(!r||r!==document.activeElement)return null;var o=t.indexOf(r);if(-1===o)return null;var i=o+n;return i>=t.length&&(i=0),i<0&&(i=t.length-1),t[i]},j=function(n,e){null!=n&&(null==a||a(n,e),null==g||g(n,e))};(0,u.useEffect)((function(){if(S.current&&h.current){var n=S.current.querySelector("[".concat(N,"][aria-selected=true]"));null==n||n.focus()}h.current=!1}));var _=(0,f.A)(e,S);return(0,A.jsx)(m.A.Provider,{value:j,children:(0,A.jsx)(p.Provider,{value:{role:c,activeKey:(0,m.u)(l),getControlledId:t||O,getControllerId:r||O},children:(0,A.jsx)(i,Object.assign({},E,{onKeyDown:function(n){if(null==v||v(n),C){var e;switch(n.key){case"ArrowLeft":case"ArrowUp":e=P(-1);break;case"ArrowRight":case"ArrowDown":e=P(1);break;default:return}e&&(n.preventDefault(),j(e.dataset[(0,x.y)("EventKey")]||null,n),h.current=!0,b())}},ref:_,role:c}))})})}));P.displayName="Nav";var j=Object.assign(P,{Item:S}),_=t(7852),I=u.createContext(null);I.displayName="NavbarContext";var U=I,R=u.createContext(null);R.displayName="CardHeaderContext";var K=R,k=["className","bsPrefix","as"],W=u.forwardRef((function(n,e){var t=n.className,r=n.bsPrefix,a=n.as,u=void 0===a?"div":a,c=(0,i.A)(n,k);return r=(0,_.oU)(r,"nav-item"),(0,A.jsx)(u,(0,o.A)({ref:e,className:l()(t,r)},c))}));W.displayName="NavItem";var D=W,F=t(3372),T=["bsPrefix","className","as","active","eventKey","disabled"],M=u.forwardRef((function(n,e){var t=n.bsPrefix,r=n.className,a=n.as,u=void 0===a?F.A:a,c=n.active,s=n.eventKey,f=n.disabled,v=void 0!==f&&f,p=(0,i.A)(n,T);t=(0,_.oU)(t,"nav-link");var y=g((0,o.A)({key:(0,m.u)(s,p.href),active:c,disabled:v},p)),x=(0,d.A)(y,2),E=x[0],b=x[1];return(0,A.jsx)(u,(0,o.A)((0,o.A)((0,o.A)({},p),E),{},{ref:e,disabled:v,className:l()(r,t,v&&"disabled",b.isActive&&"active")}))}));M.displayName="NavLink";var B=M,L=["as","bsPrefix","variant","fill","justify","navbar","navbarScroll","className","activeKey"],q=u.forwardRef((function(n,e){var t,a,s=(0,c.Zw)(n,{activeKey:"onSelect"}),d=s.as,f=void 0===d?"div":d,v=s.bsPrefix,p=s.variant,m=s.fill,y=void 0!==m&&m,x=s.justify,E=void 0!==x&&x,b=s.navbar,h=s.navbarScroll,g=s.className,C=s.activeKey,S=(0,i.A)(s,L),w=(0,_.oU)(v,"nav"),O=!1,N=(0,u.useContext)(U),P=(0,u.useContext)(K);return N?(t=N.bsPrefix,O=null==b||b):P&&(a=P.cardHeaderBsPrefix),(0,A.jsx)(j,(0,o.A)({as:f,ref:e,activeKey:C,className:l()(g,(0,r.A)((0,r.A)((0,r.A)((0,r.A)((0,r.A)((0,r.A)((0,r.A)({},w,!O),"".concat(t,"-nav"),O),"".concat(t,"-nav-scroll"),O&&h),"".concat(a,"-").concat(p),!!a),"".concat(w,"-").concat(p),!!p),"".concat(w,"-fill"),y),"".concat(w,"-justified"),E))},S))}));q.displayName="Nav";var z=Object.assign(q,{Item:D,Link:B})},3702:function(n,e,t){t.d(e,{A:function(){return Q}});var r=t(5173),o=t.n(r),i=t(9379),a=t(45),l=t(5043),u=t(5544),c=t(436);function s(n,e,t){var r=(0,l.useRef)(void 0!==n),o=(0,l.useState)(e),i=(0,u.A)(o,2),a=i[0],s=i[1],d=void 0!==n,f=r.current;return r.current=d,!d&&f&&a!==e&&s(e),[d?n:a,(0,l.useCallback)((function(){for(var n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];var o=e[0],i=e.slice(1),a=null==t?void 0:t.apply(void 0,[o].concat((0,c.A)(i)));return s(o),a}),[t])]}var d={prefix:String(Math.round(1e10*Math.random())),current:0},f=l.createContext(d),v=l.createContext(!1);var p=Boolean("undefined"!==typeof window&&window.document&&window.document.createElement),m=new WeakMap;function y(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=(0,l.useContext)(f),t=(0,l.useRef)(null);if(null===t.current&&!n){var r,o,i=null===(o=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)||void 0===o||null===(r=o.ReactCurrentOwner)||void 0===r?void 0:r.current;if(i){var a=m.get(i);null==a?m.set(i,{id:e.current,state:i.memoizedState}):i.memoizedState!==a.state&&(e.current=a.id,m.delete(i))}t.current=++e.current}return t.current}var x="function"===typeof l.useId?function(n){var e=l.useId(),t=(0,l.useState)("function"===typeof l.useSyncExternalStore?l.useSyncExternalStore(A,E,b):(0,l.useContext)(v)),r=(0,u.A)(t,1)[0]?"react-aria":"react-aria".concat(d.prefix);return n||"".concat(r,"-").concat(e)}:function(n){var e=(0,l.useContext)(f);e!==d||p||console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");var t=y(!!n),r="react-aria".concat(e.prefix);return n||"".concat(r,"-").concat(t)};function E(){return!1}function b(){return!0}function A(n){return function(){}}var h=t(8466),g=t(5901),C=t(8187),S=t(579),w=["active","eventKey","mountOnEnter","transition","unmountOnExit","role","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],O=["activeKey","getControlledId","getControllerId"],N=["as"];function P(n,e){if(null==n)return{};var t={};for(var r in n)if({}.hasOwnProperty.call(n,r)){if(e.indexOf(r)>=0)continue;t[r]=n[r]}return t}function j(n){var e=n.active,t=n.eventKey,r=n.mountOnEnter,o=n.transition,i=n.unmountOnExit,a=n.role,u=void 0===a?"tabpanel":a,c=n.onEnter,s=n.onEntering,d=n.onEntered,f=n.onExit,v=n.onExiting,p=n.onExited,m=P(n,w),y=(0,l.useContext)(h.A);if(!y)return[Object.assign({},m,{role:u}),{eventKey:t,isActive:e,mountOnEnter:r,transition:o,unmountOnExit:i,onEnter:c,onEntering:s,onEntered:d,onExit:f,onExiting:v,onExited:p}];var x=y.activeKey,E=y.getControlledId,b=y.getControllerId,A=P(y,O),C=(0,g.u)(t);return[Object.assign({},m,{role:u,id:E(t),"aria-labelledby":b(t)}),{eventKey:t,isActive:null==e&&null!=C?(0,g.u)(x)===C:e,transition:o||A.transition,mountOnEnter:null!=r?r:A.mountOnEnter,unmountOnExit:null!=i?i:A.unmountOnExit,onEnter:c,onEntering:s,onEntered:d,onExit:f,onExiting:v,onExited:p}]}var _=l.forwardRef((function(n,e){var t=n.as,r=void 0===t?"div":t,o=j(P(n,N)),i=(0,u.A)(o,2),a=i[0],l=i[1],c=l.isActive,s=l.onEnter,d=l.onEntering,f=l.onEntered,v=l.onExit,p=l.onExiting,m=l.onExited,y=l.mountOnEnter,x=l.unmountOnExit,E=l.transition,b=void 0===E?C.A:E;return(0,S.jsx)(h.A.Provider,{value:null,children:(0,S.jsx)(g.A.Provider,{value:null,children:(0,S.jsx)(b,{in:c,onEnter:s,onEntering:d,onEntered:f,onExit:v,onExiting:p,onExited:m,mountOnEnter:y,unmountOnExit:x,children:(0,S.jsx)(r,Object.assign({},a,{ref:e,hidden:!c,"aria-hidden":!c}))})})})}));_.displayName="TabPanel";var I=function(n){var e=n.id,t=n.generateChildId,r=n.onSelect,o=n.activeKey,i=n.defaultActiveKey,a=n.transition,c=n.mountOnEnter,d=n.unmountOnExit,f=n.children,v=s(o,i,r),p=(0,u.A)(v,2),m=p[0],y=p[1],E=x(e),b=(0,l.useMemo)((function(){return t||function(n,e){return E?"".concat(E,"-").concat(e,"-").concat(n):null}}),[E,t]),A=(0,l.useMemo)((function(){return{onSelect:y,activeKey:m,transition:a,mountOnEnter:c||!1,unmountOnExit:d||!1,getControlledId:function(n){return b(n,"tabpane")},getControllerId:function(n){return b(n,"tab")}}}),[y,m,a,c,d,b]);return(0,S.jsx)(h.A.Provider,{value:A,children:(0,S.jsx)(g.A.Provider,{value:y||null,children:f})})};I.Panel=_;var U=I,R=t(8072);function K(n){return"boolean"===typeof n?n?R.A:C.A:n}var k=["transition"],W=function(n){var e=n.transition,t=(0,a.A)(n,k);return(0,S.jsx)(U,(0,i.A)((0,i.A)({},t),{},{transition:K(e)}))};W.displayName="TabContainer";var D=W,F=t(8139),T=t.n(F),M=t(7852),B=["className","bsPrefix","as"],L=l.forwardRef((function(n,e){var t=n.className,r=n.bsPrefix,o=n.as,l=void 0===o?"div":o,u=(0,a.A)(n,B);return r=(0,M.oU)(r,"tab-content"),(0,S.jsx)(l,(0,i.A)({ref:e,className:T()(t,r)},u))}));L.displayName="TabContent";var q=L,z=["bsPrefix","transition"],H=["className","as"],Z=l.forwardRef((function(n,e){var t=n.bsPrefix,r=n.transition,o=(0,a.A)(n,z),l=j((0,i.A)((0,i.A)({},o),{},{transition:K(r)})),c=(0,u.A)(l,2),s=c[0],d=s.className,f=s.as,v=void 0===f?"div":f,p=(0,a.A)(s,H),m=c[1],y=m.isActive,x=m.onEnter,E=m.onEntering,b=m.onEntered,A=m.onExit,C=m.onExiting,w=m.onExited,O=m.mountOnEnter,N=m.unmountOnExit,P=m.transition,_=void 0===P?R.A:P,I=(0,M.oU)(t,"tab-pane");return(0,S.jsx)(h.A.Provider,{value:null,children:(0,S.jsx)(g.A.Provider,{value:null,children:(0,S.jsx)(_,{in:y,onEnter:x,onEntering:E,onEntered:b,onExit:A,onExiting:C,onExited:w,mountOnEnter:O,unmountOnExit:N,children:(0,S.jsx)(v,(0,i.A)((0,i.A)({},p),{},{ref:e,className:T()(d,I,y&&"active")}))})})})}));Z.displayName="TabPane";var Y=Z,G={eventKey:o().oneOfType([o().string,o().number]),title:o().node.isRequired,disabled:o().bool,tabClassName:o().string,tabAttrs:o().object},J=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")};J.propTypes=G;var Q=Object.assign(J,{Container:D,Content:q,Pane:Y})},5484:function(n,e,t){function r(){var n=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==n&&void 0!==n&&this.setState(n)}function o(n){this.setState(function(e){var t=this.constructor.getDerivedStateFromProps(n,e);return null!==t&&void 0!==t?t:null}.bind(this))}function i(n,e){try{var t=this.props,r=this.state;this.props=n,this.state=e,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(t,r)}finally{this.props=t,this.state=r}}function a(n){var e=n.prototype;if(!e||!e.isReactComponent)throw new Error("Can only polyfill class components");if("function"!==typeof n.getDerivedStateFromProps&&"function"!==typeof e.getSnapshotBeforeUpdate)return n;var t=null,a=null,l=null;if("function"===typeof e.componentWillMount?t="componentWillMount":"function"===typeof e.UNSAFE_componentWillMount&&(t="UNSAFE_componentWillMount"),"function"===typeof e.componentWillReceiveProps?a="componentWillReceiveProps":"function"===typeof e.UNSAFE_componentWillReceiveProps&&(a="UNSAFE_componentWillReceiveProps"),"function"===typeof e.componentWillUpdate?l="componentWillUpdate":"function"===typeof e.UNSAFE_componentWillUpdate&&(l="UNSAFE_componentWillUpdate"),null!==t||null!==a||null!==l){var u=n.displayName||n.name,c="function"===typeof n.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+u+" uses "+c+" but also contains the following legacy lifecycles:"+(null!==t?"\n  "+t:"")+(null!==a?"\n  "+a:"")+(null!==l?"\n  "+l:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"===typeof n.getDerivedStateFromProps&&(e.componentWillMount=r,e.componentWillReceiveProps=o),"function"===typeof e.getSnapshotBeforeUpdate){if("function"!==typeof e.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");e.componentWillUpdate=i;var s=e.componentDidUpdate;e.componentDidUpdate=function(n,e,t){var r=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:t;s.call(this,n,e,r)}}return n}t.r(e),t.d(e,{polyfill:function(){return a}}),r.__suppressDeprecationWarning=!0,o.__suppressDeprecationWarning=!0,i.__suppressDeprecationWarning=!0},9106:function(n,e,t){function r(){return r=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},r.apply(null,arguments)}t.d(e,{Zw:function(){return u}});var o=t(8587),i=t(5043);t(2740);function a(n){return"default"+n.charAt(0).toUpperCase()+n.substr(1)}function l(n){var e=function(n,e){if("object"!==typeof n||null===n)return n;var t=n[Symbol.toPrimitive];if(void 0!==t){var r=t.call(n,e||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(n)}(n,"string");return"symbol"===typeof e?e:String(e)}function u(n,e){return Object.keys(e).reduce((function(t,u){var c,s=t,d=s[a(u)],f=s[u],v=(0,o.A)(s,[a(u),u].map(l)),p=e[u],m=function(n,e,t){var r=(0,i.useRef)(void 0!==n),o=(0,i.useState)(e),a=o[0],l=o[1],u=void 0!==n,c=r.current;return r.current=u,!u&&c&&a!==e&&l(e),[u?n:a,(0,i.useCallback)((function(n){for(var e=arguments.length,r=new Array(e>1?e-1:0),o=1;o<e;o++)r[o-1]=arguments[o];t&&t.apply(void 0,[n].concat(r)),l(n)}),[t])]}(f,d,n[p]),y=m[0],x=m[1];return r({},v,((c={})[u]=y,c[p]=x,c))}),n)}t(5484)}}]);
//# sourceMappingURL=9416.1171e84a.chunk.js.map