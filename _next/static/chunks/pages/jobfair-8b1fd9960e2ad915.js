(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[710],{2711:function(e){e.exports=function(e){function t(r){if(o[r])return o[r].exports;var n=o[r]={exports:{},id:r,loaded:!1};return e[r].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var o={};return t.m=e,t.c=o,t.p="dist/",t(0)}([function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},i=(r(o(1)),o(6)),a=r(i),s=r(o(7)),c=r(o(8)),l=r(o(9)),d=r(o(10)),u=r(o(11)),f=r(o(14)),p=[],h=!1,m={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},b=function(){if(arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(h=!0),h)return p=(0,u.default)(p,m),(0,d.default)(p,m.once),p},g=function(){p=(0,f.default)(),b()},v=function(){p.forEach((function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")}))},w=function(e){return!0===e||"mobile"===e&&l.default.mobile()||"phone"===e&&l.default.phone()||"tablet"===e&&l.default.tablet()||"function"==typeof e&&!0===e()},x=function(e){m=n(m,e),p=(0,f.default)();var t=document.all&&!window.atob;return w(m.disable)||t?v():(m.disableMutationObserver||c.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),m.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",m.easing),document.querySelector("body").setAttribute("data-aos-duration",m.duration),document.querySelector("body").setAttribute("data-aos-delay",m.delay),"DOMContentLoaded"===m.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?b(!0):"load"===m.startEvent?window.addEventListener(m.startEvent,(function(){b(!0)})):document.addEventListener(m.startEvent,(function(){b(!0)})),window.addEventListener("resize",(0,s.default)(b,m.debounceDelay,!0)),window.addEventListener("orientationchange",(0,s.default)(b,m.debounceDelay,!0)),window.addEventListener("scroll",(0,a.default)((function(){(0,d.default)(p,m.once)}),m.throttleDelay)),m.disableMutationObserver||c.default.ready("[data-aos]",g),p)};e.exports={init:x,refresh:b,refreshHard:g}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function o(e,t,o){function r(t){var o=m,r=b;return m=b=void 0,S=t,v=e.apply(r,o)}function i(e){return S=e,w=setTimeout(d,t),N?r(e):v}function a(e){var o=t-(e-x);return C?k(o,g-(e-S)):o}function c(e){var o=e-x;return void 0===x||o>=t||o<0||C&&e-S>=g}function d(){var e=j();return c(e)?u(e):void(w=setTimeout(d,a(e)))}function u(e){return w=void 0,G&&m?r(e):(m=b=void 0,v)}function f(){void 0!==w&&clearTimeout(w),S=0,m=x=b=w=void 0}function p(){return void 0===w?v:u(j())}function h(){var e=j(),o=c(e);if(m=arguments,b=this,x=e,o){if(void 0===w)return i(x);if(C)return w=setTimeout(d,t),r(x)}return void 0===w&&(w=setTimeout(d,t)),v}var m,b,g,v,w,x,S=0,N=!1,C=!1,G=!0;if("function"!=typeof e)throw new TypeError(l);return t=s(t)||0,n(o)&&(N=!!o.leading,g=(C="maxWait"in o)?y(s(o.maxWait)||0,t):g,G="trailing"in o?!!o.trailing:G),h.cancel=f,h.flush=p,h}function r(e,t,r){var i=!0,a=!0;if("function"!=typeof e)throw new TypeError(l);return n(r)&&(i="leading"in r?!!r.leading:i,a="trailing"in r?!!r.trailing:a),o(e,t,{leading:i,maxWait:t,trailing:a})}function n(e){var t="undefined"==typeof e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==("undefined"==typeof e?"undefined":c(e))}function a(e){return"symbol"==("undefined"==typeof e?"undefined":c(e))||i(e)&&x.call(e)==u}function s(e){if("number"==typeof e)return e;if(a(e))return d;if(n(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=n(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(f,"");var o=h.test(e);return o||m.test(e)?b(e.slice(2),o?2:8):p.test(e)?d:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l="Expected a function",d=NaN,u="[object Symbol]",f=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,h=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,g="object"==("undefined"==typeof t?"undefined":c(t))&&t&&t.Object===Object&&t,v="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,w=g||v||Function("return this")(),x=Object.prototype.toString,y=Math.max,k=Math.min,j=function(){return w.Date.now()};e.exports=r}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function o(e,t,o){function n(t){var o=m,r=b;return m=b=void 0,S=t,v=e.apply(r,o)}function i(e){return S=e,w=setTimeout(d,t),N?n(e):v}function s(e){var o=t-(e-j);return C?y(o,g-(e-S)):o}function l(e){var o=e-j;return void 0===j||o>=t||o<0||C&&e-S>=g}function d(){var e=k();return l(e)?u(e):void(w=setTimeout(d,s(e)))}function u(e){return w=void 0,G&&m?n(e):(m=b=void 0,v)}function f(){void 0!==w&&clearTimeout(w),S=0,m=j=b=w=void 0}function p(){return void 0===w?v:u(k())}function h(){var e=k(),o=l(e);if(m=arguments,b=this,j=e,o){if(void 0===w)return i(j);if(C)return w=setTimeout(d,t),n(j)}return void 0===w&&(w=setTimeout(d,t)),v}var m,b,g,v,w,j,S=0,N=!1,C=!1,G=!0;if("function"!=typeof e)throw new TypeError(c);return t=a(t)||0,r(o)&&(N=!!o.leading,g=(C="maxWait"in o)?x(a(o.maxWait)||0,t):g,G="trailing"in o?!!o.trailing:G),h.cancel=f,h.flush=p,h}function r(e){var t="undefined"==typeof e?"undefined":s(e);return!!e&&("object"==t||"function"==t)}function n(e){return!!e&&"object"==("undefined"==typeof e?"undefined":s(e))}function i(e){return"symbol"==("undefined"==typeof e?"undefined":s(e))||n(e)&&w.call(e)==d}function a(e){if("number"==typeof e)return e;if(i(e))return l;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(u,"");var o=p.test(e);return o||h.test(e)?m(e.slice(2),o?2:8):f.test(e)?l:+e}var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",l=NaN,d="[object Symbol]",u=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,h=/^0o[0-7]+$/i,m=parseInt,b="object"==("undefined"==typeof t?"undefined":s(t))&&t&&t.Object===Object&&t,g="object"==("undefined"==typeof self?"undefined":s(self))&&self&&self.Object===Object&&self,v=b||g||Function("return this")(),w=Object.prototype.toString,x=Math.max,y=Math.min,k=function(){return v.Date.now()};e.exports=o}).call(t,function(){return this}())},function(e,t){"use strict";function o(e){var t=void 0,r=void 0;for(t=0;t<e.length;t+=1){if((r=e[t]).dataset&&r.dataset.aos)return!0;if(r.children&&o(r.children))return!0}return!1}function r(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function n(){return!!r()}function i(e,t){var o=window.document,n=new(r())(a);s=t,n.observe(o.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function a(e){e&&e.forEach((function(e){var t=Array.prototype.slice.call(e.addedNodes),r=Array.prototype.slice.call(e.removedNodes);if(o(t.concat(r)))return s()}))}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){};t.default={isSupported:n,ready:i}},function(e,t){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),i=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,l=function(){function e(){o(this,e)}return n(e,[{key:"phone",value:function(){var e=r();return!(!i.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=r();return!(!s.test(e)&&!c.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new l},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e,t,o){var r=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof r&&("false"===r||!o&&"true"!==r)&&e.node.classList.remove("aos-animate")},r=function(e,t){var r=window.pageYOffset,n=window.innerHeight;e.forEach((function(e,i){o(e,n+r,t)}))};t.default=r},function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(o(12)),i=function(e,t){return e.forEach((function(e,o){e.node.classList.add("aos-init"),e.position=(0,n.default)(e.node,t.offset)})),e};t.default=i},function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(o(13)),i=function(e,t){var o=0,r=0,i=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(r=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),o=(0,n.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":o+=e.offsetHeight/2;break;case"bottom-bottom":o+=e.offsetHeight;break;case"top-center":o+=i/2;break;case"bottom-center":o+=i/2+e.offsetHeight;break;case"center-center":o+=i/2+e.offsetHeight/2;break;case"top-top":o+=i;break;case"bottom-top":o+=e.offsetHeight+i;break;case"center-top":o+=e.offsetHeight/2+i}return a.anchorPlacement||a.offset||isNaN(t)||(r=t),o+r};t.default=i},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){for(var t=0,o=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),o+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:o,left:t}};t.default=o},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,(function(e){return{node:e}}))};t.default=o}])},29685:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/jobfair",function(){return o(24753)}])},23745:function(e,t,o){"use strict";var r=o(85893),n=o(82010),i=o(67294);t.Z=function(){var e=(0,i.useState)(!1),t=e[0],o=e[1],a=(0,n.F)(),s=a.theme;return a.setTheme,(0,i.useEffect)((function(){o(!0)}),[]),t?(0,r.jsx)("div",{children:"light"===s?(0,r.jsx)("img",{className:"w-full",src:"https://user-images.githubusercontent.com/64256342/152588880-e94c9c2f-b16b-4a29-859e-503b6232709c.png",alt:"bg-hex-light"}):(0,r.jsx)("div",{children:(0,r.jsx)("img",{className:"w-full",src:"https://user-images.githubusercontent.com/64256342/152649740-d146a725-dc81-4d5b-a908-1d860674b931.png",alt:"bg-hex"})})}):null}},82601:function(e,t,o){"use strict";var r=o(85893);t.Z=function(){return(0,r.jsx)("div",{children:(0,r.jsx)("div",{children:(0,r.jsx)("img",{src:"https://user-images.githubusercontent.com/64256342/152584869-03187e72-436e-40eb-b778-4a8baf381417.png",alt:"ellipse-15"})})})}},18339:function(e,t,o){"use strict";var r=o(85893);o(67294);t.Z=function(){return(0,r.jsx)("div",{children:(0,r.jsx)("div",{children:(0,r.jsx)("img",{src:"https://user-images.githubusercontent.com/64256342/152584858-0c5b724e-e9d1-463c-8a5c-373def48921c.png",alt:"ellipse-14"})})})}},35040:function(e,t,o){"use strict";var r=o(85893),n=o(82010),i=o(67294);t.Z=function(){var e=(0,i.useState)(!1),t=e[0],o=e[1],a=(0,n.F)(),s=a.theme;return a.setTheme,(0,i.useEffect)((function(){o(!0)}),[]),t?(0,r.jsx)("div",{children:"light"===s?(0,r.jsx)("img",{src:"https://user-images.githubusercontent.com/64256342/152650045-df82c3ea-e3ac-4bf2-acaa-14d80729384d.png",alt:"small-hex-light"}):(0,r.jsx)("div",{children:(0,r.jsx)("div",{children:(0,r.jsx)("img",{src:"https://user-images.githubusercontent.com/64256342/152649557-7948e286-a251-499f-bac8-8cefda0afe7f.png",alt:"small-hex-dark"})})})}):null}},14211:function(e,t,o){"use strict";var r=o(85893),n=o(82010),i=o(67294);t.Z=function(){var e=(0,i.useState)(!1),t=e[0],o=e[1],a=(0,n.F)(),s=a.theme;return a.setTheme,(0,i.useEffect)((function(){o(!0)}),[]),t?(0,r.jsx)("div",{children:"light"===s?(0,r.jsx)("img",{src:"https://user-images.githubusercontent.com/64256342/152650042-40a281d5-4bdc-40a0-bd06-d907023f1a04.png",alt:"small-hex-light"}):(0,r.jsx)("div",{children:(0,r.jsx)("div",{children:(0,r.jsx)("img",{src:"https://user-images.githubusercontent.com/64256342/152649559-ca1a548c-268f-4f55-9ac6-4a4a40143361.png",alt:"small-hex-dark"})})})}):null}},89840:function(e,t,o){"use strict";var r=o(85893),n=o(82010),i=o(67294);t.Z=function(){var e=(0,i.useState)(!1),t=e[0],o=e[1],a=(0,n.F)(),s=a.theme;return a.setTheme,(0,i.useEffect)((function(){o(!0)}),[]),t?(0,r.jsx)("div",{children:"light"===s?(0,r.jsx)("img",{src:"https://user-images.githubusercontent.com/64256342/152588822-2cb7c0fe-4361-40bb-891a-5c8b4d615ec2.png",alt:"small-hex-light"}):(0,r.jsx)("div",{children:(0,r.jsx)("div",{children:(0,r.jsx)("img",{src:"https://user-images.githubusercontent.com/64256342/152585664-d547484c-2ac2-4fda-99a3-c38e9668c43f.png",alt:"small-hex-dark"})})})}):null}},15586:function(e,t,o){"use strict";var r=o(85893),n=o(82215),i=o(88087),a=o(64071),s=o(87334),c=o(53891),l=o(67294),d=o(82010),u=o(52091),f=o(11163);t.Z=function(e){var t=e.question,o=e.answer,p="dark"===(0,d.F)().theme,h=(0,f.useRouter)(),m=(0,l.useState)(!1),b=m[0],g=m[1];return(0,l.useEffect)((function(){h.asPath.startsWith("/wob")?g(!0):g(!1)}),[h.asPath]),(0,r.jsx)(r.Fragment,{children:b?(0,r.jsx)(n.U,{allowToggle:!0,className:"drop-shadow-xl",children:(0,r.jsxs)(i.Q,{m:3,color:p?"#50508E":"#FFF",backgroundColor:p?"#131313":"#85C6DC",className:"flex flex-col w-full sm:w-11/12 md:w-4/5 lg:w-3/4 xl:w-2/3 border !mx-auto my-[5px] p-2.5 rounded-tl-[20px] rounded-br-[20px] border-solid border-[#ccc]",children:[(0,r.jsxs)(a.K,{className:"w-full flex flex-row items-center justify-between",children:[(0,r.jsxs)("div",{className:"flex flex-row justify-between items-center",children:[(0,r.jsx)(u.MXt,{className:"relative mr-[20px]"}),t]}),(0,r.jsx)(s.X,{className:"ml-[30px]"})]}),(0,r.jsx)(c.H,{pb:4,className:"w-full text-left",color:p?"#CCCCCC":"#FFF",backgroundColor:p?"#131313":"transparent",children:o})]})}):(0,r.jsx)(n.U,{allowToggle:!0,className:"drop-shadow-xl",children:(0,r.jsxs)(i.Q,{m:3,color:p?"#FFA500":"#FFF",backgroundColor:p?"#131313":"#F97316",className:"flex flex-col w-full sm:w-11/12 md:w-4/5 lg:w-3/4 xl:w-2/3 border !mx-auto my-[5px] p-2.5 rounded-tl-[20px] rounded-br-[20px] border-solid border-[#ccc]",children:[(0,r.jsxs)(a.K,{className:"w-full flex flex-row items-center justify-between",children:[(0,r.jsxs)("div",{className:"flex flex-row justify-between items-center",children:[(0,r.jsx)(u.MXt,{className:"relative mr-[20px]"}),t]}),(0,r.jsx)(s.X,{className:"ml-[30px]"})]}),(0,r.jsx)(c.H,{pb:4,className:"w-full text-left",color:p?"#CCCCCC":"#FFF",backgroundColor:p?"#131313":"transparent",children:o})]})})})}},44104:function(e,t,o){"use strict";o.d(t,{Z:function(){return d}});var r=o(85893),n=o(67294),i=o(99603),a=o(2711),s=o.n(a),c=(o(28279),o(93024)),l=o(11163);function d(){var e=(0,l.useRouter)(),t=(0,n.useState)(!1),o=t[0],a=t[1];return(0,n.useEffect)((function(){e.asPath.startsWith("/wob")?a(!0):a(!1)}),[e.asPath]),(0,n.useEffect)((function(){s().init({duration:2e3})}),[]),(0,r.jsx)(r.Fragment,{children:o?(0,r.jsxs)("div",{"data-aos":"right",className:"fixed object-right text-xs text-right right-0 pr-4 pl-4 hidden sm:block z-50",children:[(0,r.jsx)("a",{href:"https://www.instagram.com/wob__girlscript/",target:"_blank",className:"dark:transition-colors transition-colors bg-transparent dark:text-[#ffff] dark:hover:text-pink-600 dark:ease-linear dark:hover:ease-in block text-center text-gray-700 py-2 px-2 text-base hover:text-pink-600 ease-linear hover:ease-in",rel:"noreferrer",children:(0,r.jsx)(i.G,{className:"w-10 h-10",icon:c.Zzi,size:"2x"})}),(0,r.jsx)("a",{href:"https://www.linkedin.com/company/winter-of-blockchains/",target:"_blank",className:"dark:transition-colors transition-colors bg-transparent dark:text-[#ffff] dark:hover:text-linkedin-0 dark:ease-linear dark:hover:ease-in block text-center text-gray-700 py-2 px-2 text-base hover:text-blue-700 ease-linear hover:ease-in",rel:"noreferrer",children:(0,r.jsx)(i.G,{className:"w-10 h-10",icon:c.D9H,size:"2x"})}),(0,r.jsx)("a",{href:"https://x.com/WoB__girlscript",target:"_blank",className:"dark:transition-colors transition-colors bg-transparent dark:text-[#ffff] dark:hover:text-twitter-0 dark:ease-linear dark:hover:ease-in block text-center text-gray-700 py-2 px-2 text-base hover:text-blue-400 ease-linear hover:ease-in",rel:"noreferrer",children:(0,r.jsx)(i.G,{className:"w-10 h-10",icon:c.NCc,size:"2x"})}),(0,r.jsx)("a",{href:"https://www.youtube.com/channel/UCBOlJtDcWNh0aUkS2CfI8Aw",target:"_blank",className:"dark:transition-colors transition-colors bg-transparent dark:text-[#ffff] dark:hover:text-youtube-0 dark:ease-linear dark:hover:ease-in block text-center text-gray-700 py-2 px-2 text-base hover:text-red-600 ease-linear hover:ease-in rounded-b-md",rel:"noreferrer",children:(0,r.jsx)(i.G,{className:"w-10 h-10",icon:c.opf,size:"2x"})})]}):(0,r.jsxs)("div",{"data-aos":"right",className:"fixed object-right text-xs text-right right-0 pr-4 pl-4 hidden sm:block z-50",children:[(0,r.jsx)("a",{href:"https://www.facebook.com/girlscriptsoc/",target:"_blank",className:"dark:transition-colors transition-colors bg-transparent dark:text-[#ffff] dark:hover:text-facebook-0 dark:ease-linear dark:hover:ease-in block text-center text-gray-700 py-2 px-2 text-base hover:text-blue-600 ease-linear hover:ease-in rounded-t-md",rel:"noreferrer",children:(0,r.jsx)(i.G,{className:"w-10 h-10",icon:c.neY,size:"2x"})}),(0,r.jsx)("a",{href:"https://www.instagram.com/girlscriptsummerofcode/?hl=en",target:"_blank",className:"dark:transition-colors transition-colors bg-transparent dark:text-[#ffff] dark:hover:text-pink-600 dark:ease-linear dark:hover:ease-in block text-center text-gray-700 py-2 px-2 text-base hover:text-pink-600 ease-linear hover:ease-in",rel:"noreferrer",children:(0,r.jsx)(i.G,{className:"w-10 h-10",icon:c.Zzi,size:"2x"})}),(0,r.jsx)("a",{href:"https://www.linkedin.com/company/girlscriptsoc/mycompany/",target:"_blank",className:"dark:transition-colors transition-colors bg-transparent dark:text-[#ffff] dark:hover:text-linkedin-0 dark:ease-linear dark:hover:ease-in block text-center text-gray-700 py-2 px-2 text-base hover:text-blue-700 ease-linear hover:ease-in",rel:"noreferrer",children:(0,r.jsx)(i.G,{className:"w-10 h-10",icon:c.D9H,size:"2x"})}),(0,r.jsx)("a",{href:"https://x.com/girlscriptsoc",target:"_blank",className:"dark:transition-colors transition-colors bg-transparent dark:text-[#ffff] dark:hover:text-twitter-0 dark:ease-linear dark:hover:ease-in block text-center text-gray-700 py-2 px-2 text-base hover:text-blue-400 ease-linear hover:ease-in",rel:"noreferrer",children:(0,r.jsx)(i.G,{className:"w-10 h-10",icon:c.NCc,size:"2x"})}),(0,r.jsx)("a",{href:"https://www.youtube.com/channel/UCBOlJtDcWNh0aUkS2CfI8Aw",target:"_blank",className:"dark:transition-colors transition-colors bg-transparent dark:text-[#ffff] dark:hover:text-youtube-0 dark:ease-linear dark:hover:ease-in block text-center text-gray-700 py-2 px-2 text-base hover:text-red-600 ease-linear hover:ease-in rounded-b-md",rel:"noreferrer",children:(0,r.jsx)(i.G,{className:"w-10 h-10",icon:c.opf,size:"2x"})})]})})}},50813:function(e,t,o){"use strict";o.d(t,{B:function(){return r}});var r=[{id:1,question:"Will a beginner, with absolutely no knowledge of github, gain anything fruitful?",answer:"Yeah, definitely. The organization is meant to assist the beginners grow in the field of development. We'll have distinct projects appropriate both for beginners as well as the accolades and thereby we'll make sure that each and every participant gets to learn something new from the projects he or she is contributing for. "},{id:2,question:"Is there any registration fee?",answer:"No, there is no registration fees for participation. It is absolutely free of cost. "},{id:3,question:"Any age limit for participation?",answer:"No, there is no age limit for participation in GSSoC. It is open for all. "},{id:4,question:"How will we receive the prizes (if won) and certificate?",answer:"We'll be providing all the participants with the digital certificate. The prize money to all the concerned students will be sent to their bank accounts. We'll ask for the bank account details via an email after the conclusion of the event. "},{id:5,question:"By what time will the result come?",answer:"The results will be declared in the second week of August. "},{id:6,question:"What benefits do participants get from joining GSSoC?",answer:"Participants in GSSoC gain valuable experience in open source development, mentorship from experienced developers, opportunities to collaborate on real-world projects, and the chance to improve their coding skills. Additionally, participants receive digital certificates and may be eligible for prizes."},{id:7,question:"Can international students participate in GSSoC?",answer:"Yes, GSSoC is open to participants from around the world. There are no geographical restrictions for joining the program."},{id:8,question:"What is the duration of the GSSoC program?",answer:"GSSoC typically runs for a duration of three months, providing ample time for participants to contribute to projects, learn new skills, and engage with mentors and peers."},{id:9,question:"How can organizations or projects get involved with GSSoC?",answer:"Organizations or project maintainers interested in participating in GSSoC can apply to have their projects included in the program. There are no such conditions that the projects need to satisfy for open source contributions."},{id:10,question:"What support is available for beginners in GSSoC?",answer:"Beginners in GSSoC receive extensive support, including access to learning resources, tutorials, and guidance from mentors. The program is designed to be beginner-friendly, ensuring that participants with no prior experience in open source can still make meaningful contributions."},{id:11,question:"What minimum conditions should the project satisfy?",answer:"There are no such conditions that the projects need to satisfy. The mentors can propose the idea in any field that they specifically expertise in. "},{id:12,question:"Is it strictly for girls or can boys also participate?",answer:"GirlScript aims to assist anyone who is new in the field of development and it specifically supports an inclusive environment. Thereby GSSoC is open both for girls and for boys. Everyone can participate and contribute their part in the development of open source community and our initiative. "},{id:13,question:"What kind of projects are included in GSSoC?",answer:"GSSoC includes a wide variety of projects across different domains such as web development, mobile app development, machine learning, data science, and more. Projects are selected to cater to different skill levels, from beginners to advanced contributors."},{id:14,question:"Where do we start as a beginner to contribute properly in the projects?",answer:"We'll be providing you with the links on our official website to start with Github and various other development to make sure that everyone is able to aptly contribute for the projects. "},{id:15,question:"How will participants communicate with mentors and admins?",answer:"All communication will happen on the corresponding channel for the particular project in the official GSSoC '24 Discord server. "},{id:16,question:"How will I know that I am selected?",answer:"The participants will be notified through email and the invite to the Discord server will be sent to them. "},{id:17,question:"What is the criterion for selection as a participant?",answer:"This program is for beginners to get started with open source. The only criterion for selection are your dedication and enthusiasm to contribute to open source. "},{id:18,question:"Want to learn GitHub? Start here!",answer:"If you want to learn GitHub independently, you can start by referring to the official documentation available at: https://guides.github.com/introduction/flow/. Additionally, there are step-by-step tutorials available that provide a comprehensive understanding of how GitHub works."},{id:19,question:"What are the other programs provided by GirlScript besides GSSoC (GirlScript Summer of Code)?",answer:"GirlScript organizes several other programs including the GirlScript Winter of Contributing (GWOC), GirlScript Winter of Blockchain (WoB), and various other initiatives aimed at promoting tech education and open source contributions."},{id:20,question:"How can I become a mentor for GSSoC or other GirlScript programs?",answer:"To become a mentor for GSSoC or other GirlScript programs, you can apply through the official GirlScript website during the mentor application period. You'll need to provide details about your expertise and experience in the field you wish to mentor."},{id:21,question:"What is the role of a mentor and how do they assist?",answer:"A mentor is an experienced individual who helps you navigate and solve any challenges you encounter during your contribution journey in GSSoC. \n        They provide guidance, support, and expertise to ensure you have a fulfilling learning experience."},{id:22,question:"Can I contribute to multiple projects?",answer:"Yes, you can contribute to multiple projects. However, we recommend that you focus on one project at a time to ensure you have a fulfilling learning experience."},{id:23,question:"Are projects assigned to us or can we freely choose?",answer:"You can freely choose the project you want to contribute to here - https://gssoc.girlscript.tech/project."},{id:24,question:"Where can I find projects eligible for GSSoC'24?",answer:"You can find the list of projects eligible for GSSoC'24 here - https://gssoc.girlscript.tech/project."},{id:25,question:"What are Discord roles?",answer:'Discord roles are assigned to participants based on their involvement in GSSoC. If you are a contributor, you are required to add "| Contributor" to your name, and similar guidelines apply to other roles. These roles help facilitate communication and collaboration within the community. The specific rules regarding Discord roles are clearly outlined in the Discord channel. If you have multiple roles, such as being both a contributor and a mentor, prioritize the role that holds greater significance for you.'},{id:26,question:"What should I do after completing GSSoC?",answer:"Congratulations on successfully finishing GSSoC! Give yourself a pat on the back, as it is an incredible achievement. Be proud of yourself! \n        Now, as you continue your open-source journey, you have various options. You can contribute to larger projects on GitHub, collaborate with other developers, or even create your own projects to address specific problems. The possibilities are endless, and this is just the beginning of your exciting journey in the world of open source."},{id:27,question:"Can I be a contributor to projects too if I am a core team member?",answer:"Yes, you can be a contributor as well."},{id:28,question:"Can we switch our roles after getting onboarded?",answer:"Sadly, No. You can't switch. If there is a requirement and your skillset matches, we may ask you to contribute to different teams."},{id:29,question:"How can the core members contribute to GSSoC's program?",answer:"The roadmap has been shared above, can look into it. PMs will be in touch with you regarding the tasks."},{id:30,question:"If we want to add something in GitHub org as our suggestion, do we need to raise a PR?",answer:"Yes, ideally that's the right way if you want to learn how things work refer https://recodehive.com/github-tutorials/"},{id:31,question:"Registration form asks for a referral code. What should I fill in if I don't have one?",answer:"Referral codes are optional, it's the campus ambassador who passes on the referral codes. You can go ahead; this doesn't affect your application."},{id:32,question:"Is your question not listed here?",answer:"If you cannot find the answer to your question in the FAQ section, please reach out to us via email, and we will respond as soon as possible. You can email us at gssoc@girlscript.tech. Additionally, you can also ask your question in the official GSSoC Discord channel, in the respective channel dedicated to discussions and queries."}]},24753:function(e,t,o){"use strict";o.r(t);var r=o(85893),n=o(9008),i=o.n(n),a=o(67294),s=(o(15586),o(50813)),c=(o(23745),o(35040),o(14211),o(18339)),l=o(82601),d=o(89840),u=o(44104);o(25675);t.default=function(){return(0,a.useState)(s.B)[0],(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i(),{children:[(0,r.jsx)("title",{children:"Job Fair | GirlScript Summer of Code 2024 | GirlScript Foundation India"}),(0,r.jsx)("meta",{name:"description",content:"Job Fair of GirlScript Summer of Code"})]}),(0,r.jsxs)("div",{className:"hidden -z-10 lg:block 3xl:hidden pt-12",children:[(0,r.jsx)("div",{className:"absolute bottom-[60rem] right-0",children:(0,r.jsx)("img",{src:"https://user-images.githubusercontent.com/64256342/152650376-d285b39d-3b06-4c46-afad-c15b90074358.svg",alt:"bg"})}),(0,r.jsx)("div",{className:"absolute blur-sm top-0 left-48",children:(0,r.jsx)(c.Z,{})}),(0,r.jsx)("div",{className:"absolute top-10 -left-20",children:(0,r.jsx)(l.Z,{})}),(0,r.jsx)("div",{className:"blur-md absolute top-0",children:(0,r.jsx)(d.Z,{})})]}),(0,r.jsx)(u.Z,{}),(0,r.jsxs)("section",{className:"flex flex-col mb-24 items-center",children:[(0,r.jsxs)("div",{className:"w-3/4 flex justify-between items-center rounded-2xl flex-wrap mb-24 bg-[#FFECDE] dark:bg-[#1A1A1B]",children:[(0,r.jsxs)("div",{className:"dark:bg-black rounded-2xl basis-full p-6 md:basis-6/12 md:order-last lg:basis-1/2 lg:order-last relative",children:[(0,r.jsxs)("div",{className:"text-black dark:text-white font-semibold text-4xl 2.25rem 3rem mb-5 font-sans",children:["About"," ",(0,r.jsxs)("span",{className:"text-primary_orange-0",children:["GirlScript Summer of Code 2024"," "]}),"Job Fair"]}),(0,r.jsx)("p",{className:"dark:text-white font-serif text-1xl p-2 text-black-100",children:"At GSSoC 2024 Job Fair, we believe in inclusivity and diversity. That's why the event is open to all students from different academic backgrounds. Whether you're a tech nerd, a creative genius, a marketing maven, or a business aficionado, there are opportunities waiting for you. Don't miss this extraordinary opportunity to kickstart your career in the technology world."}),(0,r.jsx)("p",{className:"dark:text-white font-serif font-bold text-1xl p-2 text-black-100",children:"Register for the GSSoC 2024 Job Fair and open doors to limitless possibilities."}),(0,r.jsx)("button",{className:"mt-10",children:(0,r.jsx)("a",{href:"https://docs.google.com/forms/d/e/1FAIpQLScl2zoD7dOYnftAc9csfY4SD72WJbM1c0XMWAq-4Z7X5k45NA/viewform",target:"_blank",rel:"noopener noreferrer",className:"bg-primary_orange-0 text-white font-bold py-2 px-4 rounded-full mt-10",children:"Register Now"})})]}),(0,r.jsx)("div",{className:"border-8 rounded drop-shadow-xl border-black dark:border-white","data-aos":"flip-left","data-aos-duration":"700",children:(0,r.jsx)("img",{src:"https://github.com/nawed2611/nawed2611/assets/83456083/be3532cf-368b-425e-8c23-1e81243b8ead",width:500,height:500,alt:"GirlScript Job Fair Photo"})})]}),(0,r.jsx)("div",{className:"flex flex-row justify-center px-3 mb-10",id:"Sponsors",children:(0,r.jsx)("div",{className:"sponsors__wrapper flex flex-col",children:(0,r.jsxs)("div",{"data-aos":"fade-up","data-aos-anchor-placement":"top-bottom","data-aos-duration":"400",className:"dark:bg-orange-100 bg-white other__sponsors px-9 py-9 shadow-xl rounded flex flex-col justify-center items-center",children:[(0,r.jsx)("h3",{className:" dark:text-gray-800 text-[#ff7a19] font-sans font-semibold text-3xl mt-10 mb-5 place-content-center",children:"Hiring Partners"}),(0,r.jsx)("div",{className:"flex flex-col sm:flex-row flex-wrap gap-x-28 justify-center items-center mb-5",children:(0,r.jsx)("a",{href:"https://www.zs.com/",children:(0,r.jsx)("img",{"data-aos":"fade-up","data-aos-anchor-placement":"top-bottom",className:"h-16",src:"./Sponsors/zslogo.jpeg",alt:"zs"})})})]})})})]})]})}},28279:function(){}},function(e){e.O(0,[948,365,870,360,124,774,888,179],(function(){return t=29685,e(e.s=t);var t}));var t=e.O();_N_E=t}]);