(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[469],{89327:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sponsorUs",function(){return r(35885)}])},35885:function(e,t,r){"use strict";r.r(t);var s=r(47568),n=r(14924),o=r(26042),a=r(69396),i=r(97582),c=r(85893),l=r(67294),d=r(39715);t.default=function(){var e=(0,l.useState)({organizationName:"",organizationEmail:"",contactName:"",contactEmail:"",phoneNumber:"",notes:""}),t=e[0],r=e[1],u=(0,l.useState)(!1),m=(u[0],u[1]);(0,l.useEffect)((function(){window.scrollTo({top:document.body.scrollHeight/2-window.innerHeight/2,behavior:"smooth"})}),[]);var f=(0,l.useState)(!1),h=f[0],p=f[1],x=function(e){var t=e.target,s=t.id,i=t.value;r((function(e){return(0,a.Z)((0,o.Z)({},e),(0,n.Z)({},s,i))}))},b=function(){var e=(0,s.Z)((function(e){var s,n,o;return(0,i.__generator)(this,(function(a){switch(a.label){case 0:e.preventDefault(),m(!0),a.label=1;case 1:return a.trys.push([1,6,,7]),[4,fetch("https://gssoc-website-new-rho.vercel.app/api/sponsor/",{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},body:t})];case 2:return s=a.sent(),console.log(s),m(!1),200!=s.status?[3,3]:(p(!0),r({organizationName:"",organizationEmail:"",contactName:"",contactEmail:"",phoneNumber:"",notes:""}),[3,5]);case 3:return[4,s.json()];case 4:n=a.sent(),console.log("error",n),a.label=5;case 5:return[3,7];case 6:return o=a.sent(),console.error("Unexpected error",o),[3,7];case 7:return[2]}}))}));return function(t){return e.apply(this,arguments)}}();return(0,c.jsxs)("div",{className:"w-full h-full relative",children:[(0,c.jsx)("div",{className:"w-full h-full absolute",children:(0,c.jsxs)("div",{className:"relative h-full w-full",children:[(0,c.jsx)("img",{src:"https://github.com/user-attachments/assets/d22f4ba6-99c8-4f70-bebb-293e913b0403",className:"absolute bottom-12 right-12",alt:"Sponsor 1"}),(0,c.jsx)("img",{src:"https://github.com/user-attachments/assets/24f55e89-073f-4f60-a8da-9a8bd8f1fb22",className:"absolute top-52 left-8 max-sm:hidden",alt:"Sponsor 2"}),(0,c.jsx)("img",{src:"https://github.com/user-attachments/assets/79abccc7-f149-47c5-9718-0f2bad78ed05",className:"absolute bottom-0",alt:"Sponsor 3"}),(0,c.jsx)("img",{src:"https://github.com/user-attachments/assets/02c086cd-24ba-427e-b766-bd3aac3a6626",className:"absolute top-0 right-0 h-32 w-96",alt:"Sponsor 4"}),(0,c.jsx)("img",{src:"https://github.com/user-attachments/assets/7a87e4b9-de02-421b-852b-6d842171697e",className:"absolute top-0 right-80 h-12",alt:"Sponsor 5"})]})}),(0,c.jsxs)("div",{className:"flex min-h-screen flex-col justify-center items-center max-w-6xl mx-auto relative w-full py-20 max-sm:py-24 px-4 sm:px-6 lg:px-8",children:[(0,c.jsx)("div",{className:"text-lg text-center font-medium italic px-16 max-sm:px-8 mb-2",children:"GirlScript Summer of Code is a platform where students learn, contribute, and grow in the field of open-source development. By sponsoring GSSoC, you help empower future tech innovators, promote diversity, and contribute to creating a more inclusive community."}),(0,c.jsx)("div",{className:"text-3xl my-8 text-center font-medium",children:"OUR PREVIOUS SPONSORS"}),(0,c.jsxs)("div",{className:"flex w-full flex-wrap gap-12 justify-between max-lg:justify-center",children:[(0,c.jsx)("div",{className:"flex justify-center items-center w-36 h-40",children:(0,c.jsx)("img",{src:"/Sponsors/Postman.png",alt:"Postman"})}),(0,c.jsx)("div",{className:"flex justify-center items-center w-36 h-40",children:(0,c.jsx)("img",{src:"/Sponsors/Vercel.png",alt:""})}),(0,c.jsx)("div",{className:"flex justify-center items-center w-40 h-40",children:(0,c.jsx)("img",{src:"/Sponsors/BlueLearn.png",alt:""})}),(0,c.jsx)("div",{className:"flex justify-center items-center w-24 h-40",children:(0,c.jsx)("img",{src:"/Sponsors/dotXYZ.png",alt:""})}),(0,c.jsx)("div",{className:"flex justify-center items-center w-36 h-40",children:(0,c.jsx)("img",{src:"https://quine.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F156089b0-a252-474d-9a70-3ca3d1700807%2FProperty_1Variant4.svg?table=block&id=976f5669-d89e-449f-9d80-7aa14df8229c&spaceId=a8bb25df-0bb7-49ae-b3bb-6496fd5b7326&userId=&cache=v2",alt:""})})]}),(0,c.jsx)("div",{className:"text-3xl my-8 text-center font-medium",children:"WISH TO CONTRIBUTE IN OUR ENDEAVOUR? SPONSOR US"}),(0,c.jsx)("div",{className:"space-y-4",children:(0,c.jsxs)("form",{onSubmit:b,children:[(0,c.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[(0,c.jsxs)("div",{children:[(0,c.jsxs)("label",{htmlFor:"organizationName",className:"text-sm font-medium text-gray-700 flex gap-1",children:["ORGANIZATION/ INDIVIDUAL NAME"," ",(0,c.jsx)("span",{className:"text-xs text-red-500",children:"(required)"})]}),(0,c.jsx)("input",{type:"text",id:"organizationName",value:t.organizationName,onChange:x,className:"mt-1 px-2 block w-full h-10 border-black border-[1px] rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",required:!0})]}),(0,c.jsxs)("div",{children:[(0,c.jsxs)("label",{htmlFor:"organizationEmail",className:"text-sm font-medium text-gray-700 flex gap-1",children:["ORGANIZATION EMAIL ID"," ",(0,c.jsx)("span",{className:"text-xs text-red-500",children:"(required)"})]}),(0,c.jsx)("input",{type:"email",id:"organizationEmail",value:t.organizationEmail,onChange:x,className:"mt-1 px-2 block w-full h-10 border-black border-[1px] rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",required:!0})]}),(0,c.jsxs)("div",{children:[(0,c.jsxs)("label",{htmlFor:"contactName",className:"text-sm font-medium text-gray-700 flex gap-1",children:["NAME OF PERSON OF CONTACT"," ",(0,c.jsx)("span",{className:"text-xs text-red-500",children:"(required)"})]}),(0,c.jsx)("input",{type:"text",id:"contactName",value:t.contactName,onChange:x,className:"mt-1 px-2 block w-full h-10 border-black border-[1px] rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",required:!0})]})]}),(0,c.jsxs)("div",{className:"grid grid-cols-1 mt-4 md:grid-cols-3 gap-8",children:[(0,c.jsxs)("div",{children:[(0,c.jsxs)("label",{htmlFor:"contactEmail",className:"text-sm font-medium text-gray-700 flex gap-1",children:["POC EMAIL-ID"," ",(0,c.jsx)("span",{className:"text-xs text-red-500",children:"(required)"})]}),(0,c.jsx)("input",{type:"email",id:"contactEmail",value:t.contactEmail,onChange:x,className:"mt-1 px-2 block w-full h-10 border-black border-[1px] rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",required:!0})]}),(0,c.jsxs)("div",{children:[(0,c.jsxs)("label",{htmlFor:"phoneNumber",className:"text-sm font-medium text-gray-700 flex gap-1",children:["POC PHONE NUMBER"," ",(0,c.jsx)("span",{className:"text-xs text-red-500",children:"(required)"})]}),(0,c.jsx)("input",{type:"text",id:"phoneNumber",value:t.phoneNumber,onChange:x,className:"mt-1 px-2 block w-full h-10 border-black border-[1px] rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",required:!0})]}),(0,c.jsxs)("div",{children:[(0,c.jsxs)("label",{htmlFor:"notes",className:"text-sm font-medium text-gray-700 flex gap-1",children:["NOTES ",(0,c.jsx)("span",{className:"text-xs text-red-500",children:"(required)"})]}),(0,c.jsx)("input",{type:"text",id:"notes",value:t.notes,onChange:x,className:"mt-1 px-2 block w-full h-10 border-black border-[1px] rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",required:!0})]})]}),(0,c.jsx)("div",{className:"flex justify-end mt-4 max-md:justify-center",children:(0,c.jsx)("button",{type:"submit",className:"bg-[#df551a] hover:bg-[#e36b38] rounded-lg text-white text-lg font-medium w-36 py-2 px-4 text-center",children:"SUBMIT"})})]})}),(0,c.jsx)("div",{className:"mt-10",children:(0,c.jsxs)("div",{className:"flex flex-col justify-center items-center gap-5 p-5",children:[(0,c.jsx)("h5",{className:"font-bold text-lg text-center",children:"Want to support our organization? Sponsor us on GitHub through\xa0github\xa0sponsors"}),(0,c.jsx)("a",{href:"https://github.com/sponsors/GSSoC24",rel:"noreferrer",target:"_blank",className:" no-underline ",children:(0,c.jsxs)("button",{className:"bg-[#df551a] flex justify-center items-center gap-5 p-5 border-2 w-auto hover:bg-[#e36b38] rounded-lg text-white text-lg font-medium py-2 px-4 text-center",children:[(0,c.jsx)(d.She,{})," Sponsor Us"]})})]})})]}),h&&(0,c.jsx)("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50",children:(0,c.jsxs)("div",{className:"bg-white p-8 rounded-lg shadow-lg text-center relative border-2 border-black border-dotted",children:[(0,c.jsx)("div",{className:"h-40 overflow-hidden flex items-center justify-center",children:(0,c.jsx)("img",{src:"https://github.com/user-attachments/assets/c5a4d3b9-a507-499f-8909-e6b69abd9b8a",alt:"Banner",width:400})}),(0,c.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Thank You!"}),(0,c.jsx)("hr",{}),(0,c.jsxs)("p",{className:"text-lg mb-12 max-w-xl w-full",children:["We truly appreciate your interest in sponsoring us! Our team will get in touch with you within the next 5 days.",(0,c.jsx)("br",{}),"In the meantime, feel free to explore our"," ",(0,c.jsx)("strong",{children:"Sponsor Deck"})," to learn more about the exciting opportunities we offer."]}),(0,c.jsx)("a",{href:"https://github.com/user-attachments/files/16929232/GSSoC.24.Sponsorship.deck-indian.2.pdf",download:!0,className:"inline-block bg-[#F96727] hover:bg-[#e36b38] text-white py-2 px-4 rounded-lg mb-4 mr-2",children:"Download Sponsor Deck"}),(0,c.jsx)("button",{onClick:function(){p(!1),window.location.href="/"},className:"bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg",children:"Close"})]})})]})}},47568:function(e,t,r){"use strict";function s(e,t,r,s,n,o,a){try{var i=e[o](a),c=i.value}catch(l){return void r(l)}i.done?t(c):Promise.resolve(c).then(s,n)}function n(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){s(a,n,o,i,c,"next",e)}function c(e){s(a,n,o,i,c,"throw",e)}i(void 0)}))}}r.d(t,{Z:function(){return n}})},69396:function(e,t,r){"use strict";function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}r.d(t,{Z:function(){return s}})},25054:function(e,t,r){"use strict";r.d(t,{w_:function(){return f}});var s=r(67294),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=s.createContext&&s.createContext(n),a=["attr","size","title"];function i(e,t){if(null==e)return{};var r,s,n=function(e,t){if(null==e)return{};var r={};for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){if(t.indexOf(s)>=0)continue;r[s]=e[s]}return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)r=o[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},c.apply(this,arguments)}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var s=r.call(e,t||"default");if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e){return e&&e.map(((e,t)=>s.createElement(e.tag,d({key:t},e.attr),m(e.child))))}function f(e){return t=>s.createElement(h,c({attr:d({},e.attr)},t),m(e.child))}function h(e){var t=t=>{var r,{attr:n,size:o,title:l}=e,u=i(e,a),m=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),s.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,u,{className:r,style:d(d({color:e.color||t.color},t.style),e.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),l&&s.createElement("title",null,l),e.children)};return void 0!==o?s.createElement(o.Consumer,null,(e=>t(e))):t(n)}}},function(e){e.O(0,[151,774,888,179],(function(){return t=89327,e(e.s=t);var t}));var t=e.O();_N_E=t}]);