"use strict";(self.webpackChunkStickerify_react=self.webpackChunkStickerify_react||[]).push([[5446],{5425:function(n,e,t){t.d(e,{sE:function(){return a},y:function(){return i}});var r="data-rr-ui-",o="rrUi";function a(n){return"".concat(r).concat(n)}function i(n){return"".concat(o).concat(n)}},8187:function(n,e,t){var r=t(8894),o=t(3539),a=t(5043);e.A=function(n){var e=n.children,t=n.in,i=n.onExited,s=n.mountOnEnter,c=n.unmountOnExit,l=(0,a.useRef)(null),u=(0,a.useRef)(t),d=(0,r.A)(i);(0,a.useEffect)((function(){t?u.current=!0:d(l.current)}),[t,d]);var f=(0,o.A)(l,e.ref),v=(0,a.cloneElement)(e,{ref:f});return t?v:c||!u.current&&s?null:v}},3539:function(n,e,t){var r=t(5043),o=function(n){return n&&"function"!==typeof n?function(e){n.current=e}:n};e.A=function(n,e){return(0,r.useMemo)((function(){return function(n,e){var t=o(n),r=o(e);return function(n){t&&t(n),r&&r(n)}}(n,e)}),[n,e])}},3818:function(n,e,t){t.d(e,{A:function(){return o}});var r=Function.prototype.bind.call(Function.prototype.call,[].slice);function o(n,e){return r(n.querySelectorAll(e))}},8072:function(n,e,t){var r=t(9379),o=t(45),a=t(4467),i=t(8139),s=t.n(i),c=t(5043),l=t(9924),u=t(9791),d=t(1111),f=t(2643),v=t(865),m=t(579),h=["className","children","transitionClasses","onEnter"],p=(0,a.A)((0,a.A)({},l.ns,"show"),l._K,"show"),A=c.forwardRef((function(n,e){var t=n.className,a=n.children,i=n.transitionClasses,l=void 0===i?{}:i,A=n.onEnter,g=(0,o.A)(n,h),b=(0,r.A)({in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},g),E=(0,c.useCallback)((function(n,e){(0,f.A)(n),null==A||A(n,e)}),[A]);return(0,m.jsx)(v.A,(0,r.A)((0,r.A)({ref:e,addEndListener:d.A},b),{},{onEnter:E,childRef:(0,u.am)(a),children:function(n,e){return c.cloneElement(a,(0,r.A)((0,r.A)({},e),{},{className:s()("fade",t,a.props.className,p[n],l[n])}))}}))}));A.displayName="Fade",e.A=A},5446:function(n,e,t){t.d(e,{A:function(){return _n}});var r,o=t(5544),a=t(45),i=t(9379),s=t(8139),c=t.n(s),l=t(3043),u=t(8279),d=t(182),f=t(8260);function v(n){if((!r&&0!==r||n)&&u.A){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e),r=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return r}var m=t(5043);var h=function(n){var e=(0,m.useRef)(n);return(0,m.useEffect)((function(){e.current=n}),[n]),e};function p(n){var e=h(n);return(0,m.useCallback)((function(){return e.current&&e.current.apply(e,arguments)}),[e])}var A=t(8293);function g(n){var e=function(n){var e=(0,m.useRef)(n);return e.current=n,e}(n);(0,m.useEffect)((function(){return function(){return e.current()}}),[])}var b=t(4232);function E(n){void 0===n&&(n=(0,d.A)());try{var e=n.activeElement;return e&&e.nodeName?e:null}catch(t){return n.body}}function y(n,e){return n.contains?n.contains(e):n.compareDocumentPosition?n===e||!!(16&n.compareDocumentPosition(e)):void 0}var x=t(753),N=t(7950),k=t(2665);function w(n){var e=function(n){var e=(0,m.useRef)(n);return e.current=n,e}(n);(0,m.useEffect)((function(){return function(){return e.current()}}),[])}var R=t(4696),C=t(8894),O=t(436),j=t(4467),T=t(3029),S=t(2901),L=t(8747);var F=(0,t(5425).sE)("modal-open"),B=function(){return(0,S.A)((function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ownerDocument,r=e.handleContainerOverflow,o=void 0===r||r,a=e.isRTL,i=void 0!==a&&a;(0,T.A)(this,n),this.handleContainerOverflow=o,this.isRTL=i,this.modals=[],this.ownerDocument=t}),[{key:"getScrollbarWidth",value:function(){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,e=n.defaultView;return Math.abs(e.innerWidth-n.documentElement.clientWidth)}(this.ownerDocument)}},{key:"getElement",value:function(){return(this.ownerDocument||document).body}},{key:"setModalAttributes",value:function(n){}},{key:"removeModalAttributes",value:function(n){}},{key:"setContainerStyle",value:function(n){var e={overflow:"hidden"},t=this.isRTL?"paddingLeft":"paddingRight",r=this.getElement();n.style=(0,j.A)({overflow:r.style.overflow},t,r.style[t]),n.scrollBarWidth&&(e[t]="".concat(parseInt((0,L.A)(r,t)||"0",10)+n.scrollBarWidth,"px")),r.setAttribute(F,""),(0,L.A)(r,e)}},{key:"reset",value:function(){var n=this;(0,O.A)(this.modals).forEach((function(e){return n.remove(e)}))}},{key:"removeContainerStyle",value:function(n){var e=this.getElement();e.removeAttribute(F),Object.assign(e.style,n.style)}},{key:"add",value:function(n){var e=this.modals.indexOf(n);return-1!==e?e:(e=this.modals.length,this.modals.push(n),this.setModalAttributes(n),0!==e||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),e)}},{key:"remove",value:function(n){var e=this.modals.indexOf(n);-1!==e&&(this.modals.splice(e,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(n))}},{key:"isTopModal",value:function(n){return!!this.modals.length&&this.modals[this.modals.length-1]===n}}])}(),D=B,P=(0,m.createContext)(u.A?window:void 0);P.Provider;function M(){return(0,m.useContext)(P)}var H=function(n,e){return u.A?null==n?(e||(0,d.A)()).body:("function"===typeof n&&(n=n()),n&&"current"in n&&(n=n.current),n&&("nodeType"in n||n.getBoundingClientRect)?n:null):null};var W=t(3539),U=t(2677),I=t(8187),K=t(9791),z=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];var V=t(579),_=["component"];var $=m.forwardRef((function(n,e){var t=n.component,r=function(n){var e=n.onEnter,t=n.onEntering,r=n.onEntered,o=n.onExit,a=n.onExiting,i=n.onExited,s=n.addEndListener,c=n.children,l=function(n,e){if(null==n)return{};var t={};for(var r in n)if({}.hasOwnProperty.call(n,r)){if(e.indexOf(r)>=0)continue;t[r]=n[r]}return t}(n,z),u=(0,m.useRef)(null),d=(0,W.A)(u,(0,K.am)(c)),f=function(n){return function(e){n&&u.current&&n(u.current,e)}},v=(0,m.useCallback)(f(e),[e]),h=(0,m.useCallback)(f(t),[t]),p=(0,m.useCallback)(f(r),[r]),A=(0,m.useCallback)(f(o),[o]),g=(0,m.useCallback)(f(a),[a]),b=(0,m.useCallback)(f(i),[i]),E=(0,m.useCallback)(f(s),[s]);return Object.assign({},l,{nodeRef:u},e&&{onEnter:v},t&&{onEntering:h},r&&{onEntered:p},o&&{onExit:A},a&&{onExiting:g},i&&{onExited:b},s&&{addEndListener:E},{children:"function"===typeof c?function(n,e){return c(n,Object.assign({},e,{ref:d}))}:(0,m.cloneElement)(c,{ref:d})})}(function(n,e){if(null==n)return{};var t={};for(var r in n)if({}.hasOwnProperty.call(n,r)){if(e.indexOf(r)>=0)continue;t[r]=n[r]}return t}(n,_));return(0,V.jsx)(t,Object.assign({ref:e},r))}));function q(n){var e=n.children,t=n.in,r=n.onExited,a=n.onEntered,i=n.transition,s=(0,m.useState)(!t),c=(0,o.A)(s,2),l=c[0],u=c[1];t&&l&&u(!1);var d=function(n){var e=n.in,t=n.onTransition,r=(0,m.useRef)(null),o=(0,m.useRef)(!0),a=(0,C.A)(t);return(0,U.A)((function(){if(r.current){var n=!1;return a({in:e,element:r.current,initial:o.current,isStale:function(){return n}}),function(){n=!0}}}),[e,a]),(0,U.A)((function(){return o.current=!1,function(){o.current=!0}}),[]),r}({in:!!t,onTransition:function(n){Promise.resolve(i(n)).then((function(){n.isStale()||(n.in?null==a||a(n.element,n.initial):(u(!0),null==r||r(n.element)))}),(function(e){throw n.in||u(!0),e}))}}),f=(0,W.A)(d,e.ref);return l&&!t?null:(0,m.cloneElement)(e,{ref:f})}function G(n,e,t){return n?(0,V.jsx)($,Object.assign({},t,{component:n})):e?(0,V.jsx)(q,Object.assign({},t,{transition:e})):(0,V.jsx)(I.A,Object.assign({},t))}var J,Q=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function X(n){var e=M(),t=n||function(n){return J||(J=new D({ownerDocument:null==n?void 0:n.document})),J}(e),r=(0,m.useRef)({dialog:null,backdrop:null});return Object.assign(r.current,{add:function(){return t.add(r.current)},remove:function(){return t.remove(r.current)},isTopModal:function(){return t.isTopModal(r.current)},setDialogRef:(0,m.useCallback)((function(n){r.current.dialog=n}),[]),setBackdropRef:(0,m.useCallback)((function(n){r.current.backdrop=n}),[])})}var Y=(0,m.forwardRef)((function(n,e){var t=n.show,r=void 0!==t&&t,a=n.role,i=void 0===a?"dialog":a,s=n.className,c=n.style,l=n.children,d=n.backdrop,f=void 0===d||d,v=n.keyboard,h=void 0===v||v,p=n.onBackdropClick,A=n.onEscapeKeyDown,g=n.transition,b=n.runTransition,O=n.backdropTransition,j=n.runBackdropTransition,T=n.autoFocus,S=void 0===T||T,L=n.enforceFocus,F=void 0===L||L,B=n.restoreFocus,D=void 0===B||B,P=n.restoreFocusOptions,W=n.renderDialog,U=n.renderBackdrop,I=void 0===U?function(n){return(0,V.jsx)("div",Object.assign({},n))}:U,z=n.manager,_=n.container,$=n.onShow,q=n.onHide,J=void 0===q?function(){}:q,Y=n.onExit,Z=n.onExited,nn=n.onExiting,en=n.onEnter,tn=n.onEntering,rn=n.onEntered,on=function(n,e){if(null==n)return{};var t={};for(var r in n)if({}.hasOwnProperty.call(n,r)){if(e.indexOf(r)>=0)continue;t[r]=n[r]}return t}(n,Q),an=M(),sn=function(n,e){var t=M(),r=(0,m.useState)((function(){return H(n,null==t?void 0:t.document)})),a=(0,o.A)(r,2),i=a[0],s=a[1];if(!i){var c=H(n);c&&s(c)}return(0,m.useEffect)((function(){e&&i&&e(i)}),[e,i]),(0,m.useEffect)((function(){var e=H(n);e!==i&&s(e)}),[n,i]),i}(_),cn=X(z),ln=(0,k.A)(),un=(0,R.A)(r),dn=(0,m.useState)(!r),fn=(0,o.A)(dn,2),vn=fn[0],mn=fn[1],hn=(0,m.useRef)(null);(0,m.useImperativeHandle)(e,(function(){return cn}),[cn]),u.A&&!un&&r&&(hn.current=E(null==an?void 0:an.document)),r&&vn&&mn(!1);var pn=(0,C.A)((function(){if(cn.add(),xn.current=(0,x.A)(document,"keydown",En),yn.current=(0,x.A)(document,"focus",(function(){return setTimeout(gn)}),!0),$&&$(),S){var n,e,t=E(null!=(n=null==(e=cn.dialog)?void 0:e.ownerDocument)?n:null==an?void 0:an.document);cn.dialog&&t&&!y(cn.dialog,t)&&(hn.current=t,cn.dialog.focus())}})),An=(0,C.A)((function(){var n;(cn.remove(),null==xn.current||xn.current(),null==yn.current||yn.current(),D)&&(null==(n=hn.current)||null==n.focus||n.focus(P),hn.current=null)}));(0,m.useEffect)((function(){r&&sn&&pn()}),[r,sn,pn]),(0,m.useEffect)((function(){vn&&An()}),[vn,An]),w((function(){An()}));var gn=(0,C.A)((function(){if(F&&ln()&&cn.isTopModal()){var n=E(null==an?void 0:an.document);cn.dialog&&n&&!y(cn.dialog,n)&&cn.dialog.focus()}})),bn=(0,C.A)((function(n){n.target===n.currentTarget&&(null==p||p(n),!0===f&&J())})),En=(0,C.A)((function(n){h&&(0,K.v$)(n)&&cn.isTopModal()&&(null==A||A(n),n.defaultPrevented||J())})),yn=(0,m.useRef)(),xn=(0,m.useRef)();if(!sn)return null;var Nn=Object.assign({role:i,ref:cn.setDialogRef,"aria-modal":"dialog"===i||void 0},on,{style:c,className:s,tabIndex:-1}),kn=W?W(Nn):(0,V.jsx)("div",Object.assign({},Nn,{children:m.cloneElement(l,{role:"document"})}));kn=G(g,b,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!r,onExit:Y,onExiting:nn,onExited:function(){mn(!0),null==Z||Z.apply(void 0,arguments)},onEnter:en,onEntering:tn,onEntered:rn,children:kn});var wn=null;return f&&(wn=I({ref:cn.setBackdropRef,onClick:bn}),wn=G(O,j,{in:!!r,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:wn})),(0,V.jsx)(V.Fragment,{children:N.createPortal((0,V.jsxs)(V.Fragment,{children:[wn,kn]}),sn)})}));Y.displayName="Modal";var Z=Object.assign(Y,{Manager:D}),nn=t(9874),en=t(3954);function tn(){return tn="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(n,e,t){var r=function(n,e){for(;!{}.hasOwnProperty.call(n,e)&&null!==(n=(0,en.A)(n)););return n}(n,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?n:t):o.value}},tn.apply(null,arguments)}function rn(n,e,t,r){var o=tn((0,en.A)(1&r?n.prototype:n),e,t);return 2&r&&"function"==typeof o?function(n){return o.apply(t,n)}:o}var on=t(5501);var an=t(3818);function sn(n,e){return n.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var cn,ln=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",un=".sticky-top",dn=".navbar-toggler",fn=function(n){function e(){return(0,T.A)(this,e),(0,nn.A)(this,e,arguments)}return(0,on.A)(e,n),(0,S.A)(e,[{key:"adjustAndStore",value:function(n,e,t){var r=e.style[n];e.dataset[n]=r,(0,L.A)(e,(0,j.A)({},n,"".concat(parseFloat((0,L.A)(e,n))+t,"px")))}},{key:"restore",value:function(n,e){var t=e.dataset[n];void 0!==t&&(delete e.dataset[n],(0,L.A)(e,(0,j.A)({},n,t)))}},{key:"setContainerStyle",value:function(n){var t=this;rn(e,"setContainerStyle",this,3)([n]);var r,o,a=this.getElement();if(o="modal-open",(r=a).classList?r.classList.add(o):function(n,e){return n.classList?!!e&&n.classList.contains(e):-1!==(" "+(n.className.baseVal||n.className)+" ").indexOf(" "+e+" ")}(r,o)||("string"===typeof r.className?r.className=r.className+" "+o:r.setAttribute("class",(r.className&&r.className.baseVal||"")+" "+o)),n.scrollBarWidth){var i=this.isRTL?"paddingLeft":"paddingRight",s=this.isRTL?"marginLeft":"marginRight";(0,an.A)(a,ln).forEach((function(e){return t.adjustAndStore(i,e,n.scrollBarWidth)})),(0,an.A)(a,un).forEach((function(e){return t.adjustAndStore(s,e,-n.scrollBarWidth)})),(0,an.A)(a,dn).forEach((function(e){return t.adjustAndStore(s,e,n.scrollBarWidth)}))}}},{key:"removeContainerStyle",value:function(n){var t=this;rn(e,"removeContainerStyle",this,3)([n]);var r,o,a=this.getElement();o="modal-open",(r=a).classList?r.classList.remove(o):"string"===typeof r.className?r.className=sn(r.className,o):r.setAttribute("class",sn(r.className&&r.className.baseVal||"",o));var i=this.isRTL?"paddingLeft":"paddingRight",s=this.isRTL?"marginLeft":"marginRight";(0,an.A)(a,ln).forEach((function(n){return t.restore(i,n)})),(0,an.A)(a,un).forEach((function(n){return t.restore(s,n)})),(0,an.A)(a,dn).forEach((function(n){return t.restore(s,n)}))}}])}(D);var vn=t(8072),mn=t(7852),hn=["className","bsPrefix","as"],pn=m.forwardRef((function(n,e){var t=n.className,r=n.bsPrefix,o=n.as,s=void 0===o?"div":o,l=(0,a.A)(n,hn);return r=(0,mn.oU)(r,"modal-body"),(0,V.jsx)(s,(0,i.A)({ref:e,className:c()(t,r)},l))}));pn.displayName="ModalBody";var An=pn,gn=m.createContext({onHide:function(){}}),bn=["bsPrefix","className","contentClassName","centered","size","fullscreen","children","scrollable"],En=m.forwardRef((function(n,e){var t=n.bsPrefix,r=n.className,o=n.contentClassName,s=n.centered,l=n.size,u=n.fullscreen,d=n.children,f=n.scrollable,v=(0,a.A)(n,bn);t=(0,mn.oU)(t,"modal");var m="".concat(t,"-dialog"),h="string"===typeof u?"".concat(t,"-fullscreen-").concat(u):"".concat(t,"-fullscreen");return(0,V.jsx)("div",(0,i.A)((0,i.A)({},v),{},{ref:e,className:c()(m,r,l&&"".concat(t,"-").concat(l),s&&"".concat(m,"-centered"),f&&"".concat(m,"-scrollable"),u&&h),children:(0,V.jsx)("div",{className:c()("".concat(t,"-content"),o),children:d})}))}));En.displayName="ModalDialog";var yn=En,xn=["className","bsPrefix","as"],Nn=m.forwardRef((function(n,e){var t=n.className,r=n.bsPrefix,o=n.as,s=void 0===o?"div":o,l=(0,a.A)(n,xn);return r=(0,mn.oU)(r,"modal-footer"),(0,V.jsx)(s,(0,i.A)({ref:e,className:c()(t,r)},l))}));Nn.displayName="ModalFooter";var kn=Nn,wn=t(5173),Rn=t.n(wn),Cn=["className","variant","aria-label"],On={"aria-label":Rn().string,onClick:Rn().func,variant:Rn().oneOf(["white"])},jn=m.forwardRef((function(n,e){var t=n.className,r=n.variant,o=n["aria-label"],s=void 0===o?"Close":o,l=(0,a.A)(n,Cn);return(0,V.jsx)("button",(0,i.A)({ref:e,type:"button",className:c()("btn-close",r&&"btn-close-".concat(r),t),"aria-label":s},l))}));jn.displayName="CloseButton",jn.propTypes=On;var Tn=jn,Sn=["closeLabel","closeVariant","closeButton","onHide","children"],Ln=m.forwardRef((function(n,e){var t=n.closeLabel,r=void 0===t?"Close":t,o=n.closeVariant,s=n.closeButton,c=void 0!==s&&s,l=n.onHide,u=n.children,d=(0,a.A)(n,Sn),f=(0,m.useContext)(gn),v=p((function(){null==f||f.onHide(),null==l||l()}));return(0,V.jsxs)("div",(0,i.A)((0,i.A)({ref:e},d),{},{children:[u,c&&(0,V.jsx)(Tn,{"aria-label":r,variant:o,onClick:v})]}))})),Fn=["bsPrefix","className","closeLabel","closeButton"],Bn=m.forwardRef((function(n,e){var t=n.bsPrefix,r=n.className,o=n.closeLabel,s=void 0===o?"Close":o,l=n.closeButton,u=void 0!==l&&l,d=(0,a.A)(n,Fn);return t=(0,mn.oU)(t,"modal-header"),(0,V.jsx)(Ln,(0,i.A)((0,i.A)({ref:e},d),{},{className:c()(r,t),closeLabel:s,closeButton:u}))}));Bn.displayName="ModalHeader";var Dn,Pn=Bn,Mn=["className","bsPrefix","as"],Hn=(Dn="h4",m.forwardRef((function(n,e){return(0,V.jsx)("div",(0,i.A)((0,i.A)({},n),{},{ref:e,className:c()(n.className,Dn)}))}))),Wn=m.forwardRef((function(n,e){var t=n.className,r=n.bsPrefix,o=n.as,s=void 0===o?Hn:o,l=(0,a.A)(n,Mn);return r=(0,mn.oU)(r,"modal-title"),(0,V.jsx)(s,(0,i.A)({ref:e,className:c()(t,r)},l))}));Wn.displayName="ModalTitle";var Un=Wn,In=["bsPrefix","className","style","dialogClassName","contentClassName","children","dialogAs","data-bs-theme","aria-labelledby","aria-describedby","aria-label","show","animation","backdrop","keyboard","onEscapeKeyDown","onShow","onHide","container","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","onEntered","onExit","onExiting","onEnter","onEntering","onExited","backdropClassName","manager"];function Kn(n){return(0,V.jsx)(vn.A,(0,i.A)((0,i.A)({},n),{},{timeout:null}))}function zn(n){return(0,V.jsx)(vn.A,(0,i.A)((0,i.A)({},n),{},{timeout:null}))}var Vn=m.forwardRef((function(n,e){var t=n.bsPrefix,r=n.className,s=n.style,h=n.dialogClassName,E=n.contentClassName,y=n.children,x=n.dialogAs,N=void 0===x?yn:x,k=n["data-bs-theme"],w=n["aria-labelledby"],R=n["aria-describedby"],C=n["aria-label"],O=n.show,j=void 0!==O&&O,T=n.animation,S=void 0===T||T,L=n.backdrop,F=void 0===L||L,B=n.keyboard,D=void 0===B||B,P=n.onEscapeKeyDown,M=n.onShow,H=n.onHide,W=n.container,U=n.autoFocus,I=void 0===U||U,K=n.enforceFocus,z=void 0===K||K,_=n.restoreFocus,$=void 0===_||_,q=n.restoreFocusOptions,G=n.onEntered,J=n.onExit,Q=n.onExiting,X=n.onEnter,Y=n.onEntering,nn=n.onExited,en=n.backdropClassName,tn=n.manager,rn=(0,a.A)(n,In),on=(0,m.useState)({}),an=(0,o.A)(on,2),sn=an[0],ln=an[1],un=(0,m.useState)(!1),dn=(0,o.A)(un,2),vn=dn[0],hn=dn[1],pn=(0,m.useRef)(!1),An=(0,m.useRef)(!1),bn=(0,m.useRef)(null),En=(0,m.useState)(null),xn=(0,o.A)(En,2),Nn=xn[0],kn=xn[1],wn=(0,A.A)(e,kn),Rn=p(H),Cn=(0,mn.Wz)();t=(0,mn.oU)(t,"modal");var On=(0,m.useMemo)((function(){return{onHide:Rn}}),[Rn]);function jn(){return tn||(n={isRTL:Cn},cn||(cn=new fn(n)),cn);var n}function Tn(n){if(u.A){var e=jn().getScrollbarWidth()>0,t=n.scrollHeight>(0,d.A)(n).documentElement.clientHeight;ln({paddingRight:e&&!t?v():void 0,paddingLeft:!e&&t?v():void 0})}}var Sn=p((function(){Nn&&Tn(Nn.dialog)}));g((function(){(0,f.A)(window,"resize",Sn),null==bn.current||bn.current()}));var Ln=function(){pn.current=!0},Fn=function(n){pn.current&&Nn&&n.target===Nn.dialog&&(An.current=!0),pn.current=!1},Bn=function(){hn(!0),bn.current=(0,b.A)(Nn.dialog,(function(){hn(!1)}))},Dn=function(n){"static"!==F?An.current||n.target!==n.currentTarget?An.current=!1:null==H||H():function(n){n.target===n.currentTarget&&Bn()}(n)},Pn=(0,m.useCallback)((function(n){return(0,V.jsx)("div",(0,i.A)((0,i.A)({},n),{},{className:c()("".concat(t,"-backdrop"),en,!S&&"show")}))}),[S,en,t]),Mn=(0,i.A)((0,i.A)({},s),sn);Mn.display="block";return(0,V.jsx)(gn.Provider,{value:On,children:(0,V.jsx)(Z,{show:j,ref:wn,backdrop:F,container:W,keyboard:!0,autoFocus:I,enforceFocus:z,restoreFocus:$,restoreFocusOptions:q,onEscapeKeyDown:function(n){D?null==P||P(n):(n.preventDefault(),"static"===F&&Bn())},onShow:M,onHide:H,onEnter:function(n,e){n&&Tn(n),null==X||X(n,e)},onEntering:function(n,e){null==Y||Y(n,e),(0,l.Ay)(window,"resize",Sn)},onEntered:G,onExit:function(n){null==bn.current||bn.current(),null==J||J(n)},onExiting:Q,onExited:function(n){n&&(n.style.display=""),null==nn||nn(n),(0,f.A)(window,"resize",Sn)},manager:jn(),transition:S?Kn:void 0,backdropTransition:S?zn:void 0,renderBackdrop:Pn,renderDialog:function(n){return(0,V.jsx)("div",(0,i.A)((0,i.A)({role:"dialog"},n),{},{style:Mn,className:c()(r,t,vn&&"".concat(t,"-static"),!S&&"show"),onClick:F?Dn:void 0,onMouseUp:Fn,"data-bs-theme":k,"aria-label":C,"aria-labelledby":w,"aria-describedby":R,children:(0,V.jsx)(N,(0,i.A)((0,i.A)({},rn),{},{onMouseDown:Ln,className:h,contentClassName:E,children:y}))}))}})})}));Vn.displayName="Modal";var _n=Object.assign(Vn,{Body:An,Header:Pn,Title:Un,Footer:kn,Dialog:yn,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150})}}]);
//# sourceMappingURL=5446.db4d50a2.chunk.js.map