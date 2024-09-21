"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2360],{53891:function(e,n,t){t.d(n,{H:function(){return b}});var r=t(76571),i=t(27993),o=t(16554),s=t(2169),a=t(52094),l=t(25432),c=t(21190),u=t(75814),d=t(67294),f=t(85893),h={exit:{height:{duration:.2,ease:a.Lj.ease},opacity:{duration:.3,ease:a.Lj.ease}},enter:{height:{duration:.3,ease:a.Lj.ease},opacity:{duration:.4,ease:a.Lj.ease}}},m={exit:({animateOpacity:e,startingHeight:n,transition:t,transitionEnd:r,delay:i})=>{var o,s;return{...e&&{opacity:(s=n,null!=s&&parseInt(s.toString(),10)>0?1:0)},height:n,transitionEnd:null==r?void 0:r.exit,transition:null!=(o=null==t?void 0:t.exit)?o:a.p$.exit(h.exit,i)}},enter:({animateOpacity:e,endingHeight:n,transition:t,transitionEnd:r,delay:i})=>{var o;return{...e&&{opacity:1},height:n,transitionEnd:null==r?void 0:r.enter,transition:null!=(o=null==t?void 0:t.enter)?o:a.p$.enter(h.enter,i)}}},p=(0,d.forwardRef)(((e,n)=>{const{in:t,unmountOnExit:r,animateOpacity:i=!0,startingHeight:o=0,endingHeight:s="auto",style:a,className:h,transition:p,transitionEnd:b,...v}=e,[y,g]=(0,d.useState)(!1);(0,d.useEffect)((()=>{const e=setTimeout((()=>{g(!0)}));return()=>clearTimeout(e)}),[]),(0,l.ZK)({condition:Number(o)>0&&!!r,message:"startingHeight and unmountOnExit are mutually exclusive. You can't use them together"});const x=parseFloat(o.toString())>0,O={startingHeight:o,endingHeight:s,animateOpacity:i,transition:y?p:{enter:{duration:0}},transitionEnd:{enter:null==b?void 0:b.enter,exit:r?null==b?void 0:b.exit:{...null==b?void 0:b.exit,display:x?"block":"none"}}},N=!r||t,E=t||r?"enter":"exit";return(0,f.jsx)(c.M,{initial:!1,custom:O,children:N&&(0,f.jsx)(u.E.div,{ref:n,...v,className:(0,l.cx)("chakra-collapse",h),style:{overflow:"hidden",display:"block",...a},custom:O,variants:m,initial:!!r&&"exit",animate:E,exit:"exit"})})}));p.displayName="Collapse";var b=(0,o.G)((function(e,n){const{className:t,motionProps:o,...a}=e,{reduceMotion:c}=(0,r.EF)(),{getPanelProps:u,isOpen:d}=(0,i.bB)(),h=u(a,n),m=(0,l.cx)("chakra-accordion__panel",t),b=(0,i.YO)();c||delete h.hidden;const v=(0,f.jsx)(s.m.div,{...h,__css:b.panel,className:m});return c?v:(0,f.jsx)(p,{in:d,...o,children:v})}));b.displayName="AccordionPanel"},76571:function(e,n,t){t.d(n,{a2:function(){return u},As:function(){return c},EF:function(){return d},Zl:function(){return f}});var r=t(27993),i=t(55227),o=t(67294),s=t(35155);var a=t(81103),l=t(25432);function c(e){const{onChange:n,defaultIndex:t,index:i,allowMultiple:a,allowToggle:c,...u}=e;!function(e){const n=e.index||e.defaultIndex,t=null!=n&&!Array.isArray(n)&&e.allowMultiple;(0,l.ZK)({condition:!!t,message:`If 'allowMultiple' is passed, then 'index' or 'defaultIndex' must be an array. You passed: ${typeof n},`})}(e),function(e){(0,l.ZK)({condition:!(!e.allowMultiple||!e.allowToggle),message:"If 'allowMultiple' is passed, 'allowToggle' will be ignored. Either remove 'allowToggle' or 'allowMultiple' depending on whether you want multiple accordions visible or not"})}(e);const d=(0,r._v)(),[f,h]=(0,o.useState)(-1);(0,o.useEffect)((()=>()=>{h(-1)}),[]);const[m,p]=function(e){const{value:n,defaultValue:t,onChange:r,shouldUpdate:i=((e,n)=>e!==n)}=e,a=(0,s.W)(r),l=(0,s.W)(i),[c,u]=(0,o.useState)(t),d=void 0!==n,f=d?n:c,h=(0,s.W)((e=>{const n="function"===typeof e?e(f):e;l(f,n)&&(d||u(n),a(n))}),[d,a,f,l]);return[f,h]}({value:i,defaultValue:()=>a?null!=t?t:[]:null!=t?t:-1,onChange:n});return{index:m,setIndex:p,htmlProps:u,getAccordionItemProps:e=>{let n=!1;null!==e&&(n=Array.isArray(m)?m.includes(e):m===e);return{isOpen:n,onChange:n=>{if(null!==e)if(a&&Array.isArray(m)){const t=n?m.concat(e):m.filter((n=>n!==e));p(t)}else n?p(e):c&&p(-1)}}},focusedIndex:f,setFocusedIndex:h,descendants:d}}var[u,d]=(0,i.k)({name:"AccordionContext",hookName:"useAccordionContext",providerName:"Accordion"});function f(e){const{isDisabled:n,isFocusable:t,id:i,...s}=e,{getAccordionItemProps:c,setFocusedIndex:u}=d(),f=(0,o.useRef)(null),h=(0,o.useId)(),m=null!=i?i:h,p=`accordion-button-${m}`,b=`accordion-panel-${m}`;!function(e){(0,l.ZK)({condition:!(!e.isFocusable||e.isDisabled),message:"Using only 'isFocusable', this prop is reserved for situations where you pass 'isDisabled' but you still want the element to receive focus (A11y). Either remove it or pass 'isDisabled' as well.\n    "})}(e);const{register:v,index:y,descendants:g}=(0,r.mc)({disabled:n&&!t}),{isOpen:x,onChange:O}=c(-1===y?null:y);!function(e){(0,l.ZK)({condition:e.isOpen&&!!e.isDisabled,message:"Cannot open a disabled accordion item"})}({isOpen:x,isDisabled:n});const N=(0,o.useCallback)((()=>{null==O||O(!x),u(y)}),[y,u,x,O]),E=(0,o.useCallback)((e=>{const n={ArrowDown:()=>{const e=g.nextEnabled(y);null==e||e.node.focus()},ArrowUp:()=>{const e=g.prevEnabled(y);null==e||e.node.focus()},Home:()=>{const e=g.firstEnabled();null==e||e.node.focus()},End:()=>{const e=g.lastEnabled();null==e||e.node.focus()}}[e.key];n&&(e.preventDefault(),n(e))}),[g,y]),I=(0,o.useCallback)((()=>{u(y)}),[u,y]),w=(0,o.useCallback)((function(e={},t=null){return{...e,type:"button",ref:(0,a.lq)(v,f,t),id:p,disabled:!!n,"aria-expanded":!!x,"aria-controls":b,onClick:(0,l.v0)(e.onClick,N),onFocus:(0,l.v0)(e.onFocus,I),onKeyDown:(0,l.v0)(e.onKeyDown,E)}}),[p,n,x,N,I,E,b,v]),C=(0,o.useCallback)((function(e={},n=null){return{...e,ref:n,role:"region",id:b,"aria-labelledby":p,hidden:!x}}),[p,x,b]);return{isOpen:x,isDisabled:n,isFocusable:t,onOpen:()=>{null==O||O(!0)},onClose:()=>{null==O||O(!1)},getButtonProps:w,getPanelProps:C,htmlProps:s}}},82215:function(e,n,t){t.d(n,{U:function(){return f}});var r=t(76571),i=t(27993),o=t(16554),s=t(77030),a=t(33179),l=t(2169),c=t(25432),u=t(67294),d=t(85893),f=(0,o.G)((function({children:e,reduceMotion:n,...t},o){const f=(0,s.jC)("Accordion",t),h=(0,a.Lr)(t),{htmlProps:m,descendants:p,...b}=(0,r.As)(h),v=(0,u.useMemo)((()=>({...b,reduceMotion:!!n})),[b,n]);return(0,d.jsx)(i.di,{value:p,children:(0,d.jsx)(r.a2,{value:v,children:(0,d.jsx)(i.lh,{value:f,children:(0,d.jsx)(l.m.div,{ref:o,...m,className:(0,c.cx)("chakra-accordion",t.className),__css:f.root,children:e})})})})}));f.displayName="Accordion"},88087:function(e,n,t){t.d(n,{Q:function(){return u}});var r=t(76571),i=t(27993),o=t(16554),s=t(2169),a=t(25432),l=t(67294),c=t(85893),u=(0,o.G)((function(e,n){const{children:t,className:o}=e,{htmlProps:u,...d}=(0,r.Zl)(e),f={...(0,i.YO)().container,overflowAnchor:"none"},h=(0,l.useMemo)((()=>d),[d]);return(0,c.jsx)(i.ec,{value:h,children:(0,c.jsx)(s.m.div,{ref:n,...u,className:(0,a.cx)("chakra-accordion__item",o),__css:f,children:"function"===typeof t?t({isExpanded:!!d.isOpen,isDisabled:!!d.isDisabled}):t})})}));u.displayName="AccordionItem"},64071:function(e,n,t){t.d(n,{K:function(){return l}});var r=t(27993),i=t(16554),o=t(2169),s=t(25432),a=t(85893),l=(0,i.G)((function(e,n){const{getButtonProps:t}=(0,r.bB)(),i=t(e,n),l={display:"flex",alignItems:"center",width:"100%",outline:0,...(0,r.YO)().button};return(0,a.jsx)(o.m.button,{...i,className:(0,s.cx)("chakra-accordion__button",e.className),__css:l})}));l.displayName="AccordionButton"},27993:function(e,n,t){t.d(n,{di:function(){return g},ec:function(){return v},lh:function(){return p},mc:function(){return N},_v:function(){return O},bB:function(){return y},YO:function(){return b}});var r=t(67294),i=Object.defineProperty,o=(e,n,t)=>(((e,n,t)=>{n in e?i(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t})(e,"symbol"!==typeof n?n+"":n,t),t);function s(e){return e.sort(((e,n)=>{const t=e.compareDocumentPosition(n);if(t&Node.DOCUMENT_POSITION_FOLLOWING||t&Node.DOCUMENT_POSITION_CONTAINED_BY)return-1;if(t&Node.DOCUMENT_POSITION_PRECEDING||t&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)throw Error("Cannot sort the given nodes.");return 0}))}function a(e,n,t){let r=e+1;return t&&r>=n&&(r=0),r}function l(e,n,t){let r=e-1;return t&&r<0&&(r=n),r}var c="undefined"!==typeof window?r.useLayoutEffect:r.useEffect,u=t(55227),d=t(81103);function f(){const e=(0,r.useRef)(new class{constructor(){o(this,"descendants",new Map),o(this,"register",(e=>{var n;if(null!=e)return"object"==typeof(n=e)&&"nodeType"in n&&n.nodeType===Node.ELEMENT_NODE?this.registerNode(e):n=>{this.registerNode(n,e)}})),o(this,"unregister",(e=>{this.descendants.delete(e);const n=s(Array.from(this.descendants.keys()));this.assignIndex(n)})),o(this,"destroy",(()=>{this.descendants.clear()})),o(this,"assignIndex",(e=>{this.descendants.forEach((n=>{const t=e.indexOf(n.node);n.index=t,n.node.dataset.index=n.index.toString()}))})),o(this,"count",(()=>this.descendants.size)),o(this,"enabledCount",(()=>this.enabledValues().length)),o(this,"values",(()=>Array.from(this.descendants.values()).sort(((e,n)=>e.index-n.index)))),o(this,"enabledValues",(()=>this.values().filter((e=>!e.disabled)))),o(this,"item",(e=>{if(0!==this.count())return this.values()[e]})),o(this,"enabledItem",(e=>{if(0!==this.enabledCount())return this.enabledValues()[e]})),o(this,"first",(()=>this.item(0))),o(this,"firstEnabled",(()=>this.enabledItem(0))),o(this,"last",(()=>this.item(this.descendants.size-1))),o(this,"lastEnabled",(()=>{const e=this.enabledValues().length-1;return this.enabledItem(e)})),o(this,"indexOf",(e=>{var n,t;return e&&null!=(t=null==(n=this.descendants.get(e))?void 0:n.index)?t:-1})),o(this,"enabledIndexOf",(e=>null==e?-1:this.enabledValues().findIndex((n=>n.node.isSameNode(e))))),o(this,"next",((e,n=!0)=>{const t=a(e,this.count(),n);return this.item(t)})),o(this,"nextEnabled",((e,n=!0)=>{const t=this.item(e);if(!t)return;const r=a(this.enabledIndexOf(t.node),this.enabledCount(),n);return this.enabledItem(r)})),o(this,"prev",((e,n=!0)=>{const t=l(e,this.count()-1,n);return this.item(t)})),o(this,"prevEnabled",((e,n=!0)=>{const t=this.item(e);if(!t)return;const r=l(this.enabledIndexOf(t.node),this.enabledCount()-1,n);return this.enabledItem(r)})),o(this,"registerNode",((e,n)=>{if(!e||this.descendants.has(e))return;const t=s(Array.from(this.descendants.keys()).concat(e));(null==n?void 0:n.disabled)&&(n.disabled=!!n.disabled);const r={node:e,index:-1,...n};this.descendants.set(e,r),this.assignIndex(t)}))}});return c((()=>()=>e.current.destroy())),e.current}var[h,m]=(0,u.k)({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"});var[p,b]=(0,u.k)({name:"AccordionStylesContext",hookName:"useAccordionStyles",providerName:"<Accordion />"}),[v,y]=(0,u.k)({name:"AccordionItemContext",hookName:"useAccordionItemContext",providerName:"<AccordionItem />"}),[g,x,O,N]=[h,()=>m(),()=>f(),e=>function(e){const n=m(),[t,i]=(0,r.useState)(-1),o=(0,r.useRef)(null);c((()=>()=>{o.current&&n.unregister(o.current)}),[]),c((()=>{if(!o.current)return;const e=Number(o.current.dataset.index);t==e||Number.isNaN(e)||i(e)}));const s=e?n.register(e):n.register;return{descendants:n,index:t,enabledIndex:n.enabledIndexOf(o.current),register:(0,d.lq)(s,o)}}(e)]},87334:function(e,n,t){t.d(n,{X:function(){return l}});var r=t(76571),i=t(27993),o=t(36948),s=t(25432),a=t(85893);function l(e){const{isOpen:n,isDisabled:t}=(0,i.bB)(),{reduceMotion:l}=(0,r.EF)(),c=(0,s.cx)("chakra-accordion__icon",e.className),u={opacity:t?.4:1,transform:n?"rotate(-180deg)":void 0,transition:l?void 0:"transform 0.2s",transformOrigin:"center",...(0,i.YO)().icon};return(0,a.jsx)(o.J,{viewBox:"0 0 24 24","aria-hidden":!0,className:c,__css:u,...e,children:(0,a.jsx)("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})})}l.displayName="AccordionIcon"},52094:function(e,n,t){t.d(n,{Lj:function(){return r},Sh:function(){return i},p$:function(){return o}});var r={ease:[.25,.1,.25,1],easeIn:[.4,0,1,1],easeOut:[0,0,.2,1],easeInOut:[.4,0,.2,1]};var i={enter:{duration:.2,ease:r.easeOut},exit:{duration:.1,ease:r.easeIn}},o={enter:(e,n)=>({...e,delay:"number"===typeof n?n:null==n?void 0:n.enter}),exit:(e,n)=>({...e,delay:"number"===typeof n?n:null==n?void 0:n.exit})}},25054:function(e,n,t){t.d(n,{w_:function(){return h}});var r=t(67294),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=r.createContext&&r.createContext(i),s=["attr","size","title"];function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function l(){return l=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},l.apply(this,arguments)}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){d(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n,t){return(n=function(e){var n=function(e,n){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,n||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"==typeof n?n:n+""}(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function f(e){return e&&e.map(((e,n)=>r.createElement(e.tag,u({key:n},e.attr),f(e.child))))}function h(e){return n=>r.createElement(m,l({attr:u({},e.attr)},n),f(e.child))}function m(e){var n=n=>{var t,{attr:i,size:o,title:c}=e,d=a(e,s),f=o||n.size||"1em";return n.className&&(t=n.className),e.className&&(t=(t?t+" ":"")+e.className),r.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,i,d,{className:t,style:u(u({color:e.color||n.color},n.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),e.children)};return void 0!==o?r.createElement(o.Consumer,null,(e=>n(e))):n(i)}}}]);