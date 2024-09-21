(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4322],{35134:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/verify_cert",function(){return r(4172)}])},90638:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(96856).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=l.default,o=(null==t?void 0:t.suspense)?{}:{loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};n(e,Promise)?o.loader=function(){return e}:"function"===typeof e?o.loader=e:"object"===typeof e&&(o=a({},o,e));!1;(o=a({},o,t)).suspense&&(delete o.ssr,delete o.loading);o.loadableGenerated&&delete(o=a({},o,o.loadableGenerated)).loadableGenerated;if("boolean"===typeof o.ssr&&!o.suspense){if(!o.ssr)return delete o.ssr,i(r,o);delete o.ssr}return r(o)},t.noSSR=i;var a=r(6495).Z,o=r(92648).Z,l=(o(r(67294)),o(r(14302)));function i(e,t){return delete t.webpack,delete t.modules,e(t)}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},16319:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var n=(0,r(92648).Z)(r(67294)).default.createContext(null);t.LoadableContext=n},14302:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(79658).Z,a=r(7222).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(6495).Z,l=(0,r(92648).Z)(r(67294)),i=r(16319),s=r(67294).useSyncExternalStore,u=[],d=[],c=!1;function f(e){var t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then((function(e){return r.loading=!1,r.loaded=e,e})).catch((function(e){throw r.loading=!1,r.error=e,e})),r}var m=function(){function e(t,r){n(this,e),this._loadFn=t,this._opts=r,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return a(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,r=this._opts;t.loading&&("number"===typeof r.delay&&(0===r.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),r.delay)),"number"===typeof r.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),r.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=o({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function x(e){return function(e,t){var r=function(){if(!u){var t=new m(e,a);u={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return u.promise()},n=function(){r();var e=l.default.useContext(i.LoadableContext);e&&Array.isArray(a.modules)&&a.modules.forEach((function(t){e(t)}))},a=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);a.suspense&&(a.lazy=l.default.lazy(a.loader));var u=null;if(!c){var f=a.webpack?a.webpack():a.modules;f&&d.push((function(e){var t=!0,n=!1,a=void 0;try{for(var o,l=f[Symbol.iterator]();!(t=(o=l.next()).done);t=!0){var i=o.value;if(-1!==e.indexOf(i))return r()}}catch(s){n=!0,a=s}finally{try{t||null==l.return||l.return()}finally{if(n)throw a}}}))}var x=a.suspense?function(e,t){return n(),l.default.createElement(a.lazy,o({},e,{ref:t}))}:function(e,t){n();var r=s(u.subscribe,u.getCurrentValue,u.getCurrentValue);return l.default.useImperativeHandle(t,(function(){return{retry:u.retry}}),[]),l.default.useMemo((function(){return r.loading||r.error?l.default.createElement(a.loading,{isLoading:r.loading,pastDelay:r.pastDelay,timedOut:r.timedOut,error:r.error,retry:u.retry}):r.loaded?l.default.createElement((t=r.loaded)&&t.__esModule?t.default:t,e):null;var t}),[e,r])};return x.preload=function(){return r()},x.displayName="LoadableComponent",l.default.forwardRef(x)}(f,e)}function b(e,t){for(var r=[];e.length;){var n=e.pop();r.push(n(t))}return Promise.all(r).then((function(){if(e.length)return b(e,t)}))}x.preloadAll=function(){return new Promise((function(e,t){b(u).then(e,t)}))},x.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var r=function(){return c=!0,t()};b(d,e).then(r,r)}))},window.__NEXT_PRELOADREADY=x.preloadReady;var p=x;t.default=p},4172:function(e,t,r){"use strict";r.r(t);var n=r(47568),a=r(97582),o=r(85893),l=r(65028),i=r(9008),s=r.n(i),u=r(67294),d=r(5152),c=r.n(d)()((function(){return Promise.all([r.e(5443),r.e(682),r.e(8764),r.e(9669),r.e(4242),r.e(5268)]).then(r.bind(r,5722))}),{loadableGenerated:{webpack:function(){return[5722]}},ssr:!1});t.default=function(){var e=(0,u.useState)(""),t=e[0],r=e[1],i=(0,u.useState)(""),d=i[0],f=i[1],m=(0,u.useState)("Contributor"),x=m[0],b=m[1],p=(0,u.useState)(!1),h=p[0],y=p[1],v=(0,u.useState)("2024"),_=v[0],g=v[1],k=(0,u.useState)(""),j=k[0],w=k[1],C=(0,u.useState)(""),S=C[0],N=C[1];return(0,u.useEffect)((function(){var e=function(){var e=(0,n.Z)((function(){var e,t,r;return(0,a.__generator)(this,(function(n){switch(n.label){case 0:if(!j)return[2];n.label=1;case 1:return n.trys.push([1,4,,5]),[4,fetch("/leaderboards/leaderboard24.json")];case 2:return[4,n.sent().json()];case 3:return e=n.sent(),-1===(t=e.leaderboard.findIndex((function(e){return e.login.toLowerCase()===j.toLowerCase()})))?(N(""),y(!1),[2]):(N(t+1),y(!0),[3,5]);case 4:return r=n.sent(),console.error("Error verifying GitHub ID:",r),N(""),y(!1),[3,5];case 5:return[2]}}))}));return function(){return e.apply(this,arguments)}}();e()}),[j]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s(),{children:[(0,o.jsx)("title",{children:"Verify Certifications | GirlScript Summer of Code 2024 | GirlScript Foundation India"}),(0,o.jsx)("meta",{name:"description",content:"GirlScript Summer of Code Certificates"})]}),(0,o.jsx)("div",{className:"items-center justify-center",children:(0,o.jsx)("div",{className:"font-sans text-center text-2xl font-extrabold text-black-100",children:(0,o.jsxs)("div",{className:"text-primary_orange-0 dark:text-white font-sans text-3xl md:text-5xl text center font-extrabold flex wrap justify-center flex-col md:flex-row mb-10 underline decoration-orange-500 underline-offset-8",children:[(0,o.jsx)("h1",{className:"text-primary_orange-0",children:"Verify\xa0"}),(0,o.jsx)("h1",{children:"Certifications"})]})})}),(0,o.jsx)(l.L,{mt:20}),(0,o.jsxs)("div",{className:"flex flex-col bg-white shadow-2xl dark:bg-black mb-10 rounded-md mx-2 sm:mx-10 md:mx-10 lg:mx-20 px-10 py-2",children:[(0,o.jsx)("label",{className:"text-black dark:text-primary_orange-0 font-semibold mt-3 text-lg",children:"Enter Registered Email*"}),(0,o.jsx)("input",{type:"text",className:"text-primary_orange-0 dark:text-white dark:border-slate-200 border-black border-2 rounded-md font-semibold mt-2 text-xs sm:text-sm md:text-lg",onChange:function(e){return r(e.target.value)},disabled:h}),(0,o.jsx)("label",{className:"text-black dark:text-primary_orange-0 font-semibold mt-3 text-lg",children:"Enter Name*"}),(0,o.jsx)("input",{type:"text",className:"text-primary_orange-0 dark:text-white dark:border-slate-200 border-black border-2 rounded-md font-semibold mt-2 text-xs sm:text-sm md:text-lg",value:d,onChange:function(e){return f(e.target.value)},disabled:h}),(0,o.jsx)("label",{className:"text-black dark:text-primary_orange-0 font-semibold mt-3 text-lg",children:"Select Year of Participation in GSSoC"}),(0,o.jsxs)("select",{className:"text-primary_orange-0 dark:text-white font-semibold mt-2 text-xs sm:text-sm md:text-lg",defaultValue:"2024",onChange:function(e){return g(e.target.value)},disabled:h,children:[(0,o.jsx)("option",{value:"2024",children:"2024"}),(0,o.jsx)("option",{value:"2023",children:"2023"})]}),(0,o.jsx)("label",{className:"text-black dark:text-primary_orange-0 font-semibold mt-3 text-lg",children:"Select Role in GSSoC ".concat(_)}),(0,o.jsxs)("select",{className:"text-primary_orange-0 dark:text-white font-semibold mt-2 text-xs sm:text-sm md:text-lg",defaultValue:"Contributor",onChange:function(e){return b(e.target.value)},disabled:h,children:[(0,o.jsx)("option",{value:"Contributor",children:"Contributor"}),(0,o.jsx)("option",{value:"Top Contributor",children:"Top 100 Contributor"}),(0,o.jsx)("option",{value:"Mentor",children:"Mentor"}),(0,o.jsx)("option",{value:"Project Admin",children:"Project Admin"}),(0,o.jsx)("option",{value:"Campus Ambassador",children:"Campus Ambassador"}),(0,o.jsx)("option",{value:"Speaker",children:"Speaker"}),(0,o.jsx)("option",{value:"Organizing Team",children:"Organizing Team"})]}),(0,o.jsx)(l.L,{mt:3}),(0,o.jsx)("label",{className:"text-black dark:text-primary_orange-0 font-semibold mt-3 text-lg",children:"Enter GitHub ID*"}),(0,o.jsx)("input",{type:"text",className:"text-primary_orange-0 dark:text-white dark:border-slate-200 border-black border-2 rounded-md font-semibold mt-2 text-xs sm:text-sm md:text-lg",value:j,onChange:function(e){return w(e.target.value)},disabled:h}),(0,o.jsx)("label",{className:"text-black dark:text-primary_orange-0 font-semibold mt-3 text-lg",children:"Rank"}),(0,o.jsx)("input",{type:"text",className:"text-primary_orange-0 dark:text-white dark:border-slate-200 border-black border-2 rounded-md font-semibold mt-2 text-xs sm:text-sm md:text-lg",value:S,disabled:!0}),(0,o.jsx)(c,{Name:d,Role:x,Email:t,Rank:S,verified:h,setVerified:function(){y(!0)},year:_})]})]})}},5152:function(e,t,r){e.exports=r(90638)},65028:function(e,t,r){"use strict";r.d(t,{L:function(){return n}});var n=(0,r(2169).m)("div",{baseStyle:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}});n.displayName="Spacer"},47568:function(e,t,r){"use strict";function n(e,t,r,n,a,o,l){try{var i=e[o](l),s=i.value}catch(u){return void r(u)}i.done?t(s):Promise.resolve(s).then(n,a)}function a(e){return function(){var t=this,r=arguments;return new Promise((function(a,o){var l=e.apply(t,r);function i(e){n(l,a,o,i,s,"next",e)}function s(e){n(l,a,o,i,s,"throw",e)}i(void 0)}))}}r.d(t,{Z:function(){return a}})}},function(e){e.O(0,[9774,2888,179],(function(){return t=35134,e(e.s=t);var t}));var t=e.O();_N_E=t}]);