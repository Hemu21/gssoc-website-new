(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[907],{34508:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/registration",function(){return n(70533)}])},70533:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return S}});var a=n(47568),l=n(14924),o=n(26042),i=n(69396),s=n(97582),t=n(85893),d=n(67294),c=n(9669),m=n.n(c),u=n(11163),h=n(97795),b=n(97043),g=n(17984),x=function(e){var r=e.onCountryChange,n=e.onStateChange,a=(0,d.useState)(null),l=a[0],o=a[1],i=(0,d.useState)(null),s=i[0],c=i[1],m=(0,d.useMemo)((function(){return b.Z.getAllCountries().map((function(e){return{value:e.isoCode,label:e.name}}))}),[]),u=(0,d.useMemo)((function(){return l?g.ZP.getStatesOfCountry(l.value).map((function(e){return{value:e.isoCode,label:e.name}})):[]}),[l]);return(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:"mb-6",children:[(0,t.jsx)("label",{className:"block text-sm font-semibold text-gray-800 mb-2",children:"Country"}),(0,t.jsx)(h.ZP,{options:m,value:l,onChange:function(e){o(e),c(null),r(e)},placeholder:"Select a country",isSearchable:!0})]}),(0,t.jsxs)("div",{className:"mb-6",children:[(0,t.jsx)("label",{className:"block text-sm font-semibold text-gray-800 mb-2",children:"State"}),(0,t.jsx)(h.ZP,{options:u,value:s,onChange:function(e){c(e),n(e)},placeholder:l?"Select a state":"Select a country first",isSearchable:!0,isDisabled:!l})]})]})},f=n(45697),p=n.n(f),j=n(67555),C=n.n(j),y=(n(86408),function(e){var r=e.label,n=e.name,a=e.type,l=void 0===a?"text":a,o=e.placeholder,i=void 0===o?"":o,s=e.handleChange,d=void 0===s?function(){}:s,c=e.error,m=e.required,u=void 0===m||m;return(0,t.jsxs)("div",{className:"mb-6",children:[(0,t.jsx)("label",{htmlFor:n,className:"block text-sm font-semibold text-gray-800 mb-2",children:r}),(0,t.jsx)("input",{id:n,type:l,name:n,placeholder:i,className:"block w-full py-1 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ".concat(c?"border-red-500 focus:border-red-500":"focus:border-indigo-500"),onChange:d,"aria-invalid":!!c,"aria-describedby":c?"".concat(n,"-error"):void 0,required:u}),c&&(0,t.jsx)("p",{id:"".concat(n,"-error"),className:"mt-1 text-xs text-red-600",children:c})]})});y.propTypes={label:p().string.isRequired,name:p().string.isRequired,type:p().string,placeholder:p().string,handleChange:p().func,error:p().string};var N=function(e){var r=e.label,n=e.name,a=e.options,l=e.handleChange,o=void 0===l?function(){}:l,i=e.error,s=e.required,d=void 0===s||s;return(0,t.jsxs)("div",{className:"mb-6",children:[(0,t.jsx)("label",{htmlFor:n,className:"block text-sm font-semibold text-gray-800 mb-2",children:r}),(0,t.jsx)("select",{id:n,name:n,className:"block w-full py-1 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ".concat(i?"border-red-500 focus:border-red-500":"focus:border-indigo-500"),onChange:o,"aria-invalid":!!i,"aria-describedby":i?"".concat(n,"-error"):void 0,required:d,children:a.map((function(e){return(0,t.jsx)("option",{value:e,children:e},e)}))}),i&&(0,t.jsx)("p",{id:"".concat(n,"-error"),className:"mt-1 text-xs text-red-600",children:i})]})};N.propTypes={label:p().string.isRequired,name:p().string.isRequired,options:p().arrayOf(p().string).isRequired,handleChange:p().func,error:p().string};var v=function(e){var r=e.label,n=e.name,a=e.placeholder,l=void 0===a?"":a,o=e.handleChange,i=void 0===o?function(){}:o,s=e.error,d=e.required,c=void 0===d||d;return(0,t.jsxs)("div",{className:"mb-6",children:[(0,t.jsx)("label",{htmlFor:n,className:"block text-sm font-semibold text-gray-800 mb-2",children:r}),(0,t.jsx)("textarea",{id:n,name:n,placeholder:l,className:"block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ".concat(s?"border-red-500 focus:border-red-500":"focus:border-indigo-500"),onChange:i,"aria-invalid":!!s,"aria-describedby":s?"".concat(n,"-error"):void 0,required:c}),s&&(0,t.jsx)("p",{id:"".concat(n,"-error"),className:"mt-1 text-xs text-red-600",children:s})]})};v.propTypes={label:p().string.isRequired,name:p().string.isRequired,placeholder:p().string,handleChange:p().func,error:p().string};var S=function(){var e=(0,d.useState)(""),r=e[0],n=e[1],c=(0,d.useState)({}),h=c[0],b=c[1],g=(0,d.useState)(!1),f=g[0],p=g[1],j=(0,d.useState)(!1),S=j[0],P=j[1],k=(0,d.useState)({}),O=k[0],U=k[1],w=(0,u.useRouter)(),q=(0,d.useState)(!1),R=q[0],Z=(q[1],function(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}),F=function(e){b((function(r){return(0,i.Z)((0,o.Z)({},r),{country:e?e.label:"",state:""})}))},Y=function(e){b((function(r){return(0,i.Z)((0,o.Z)({},r),{state:e?e.label:""})}))},D=function(e){var r=e.target,n=r.name,a=r.value;b((0,i.Z)((0,o.Z)({},h),(0,l.Z)({},n,a))),"email"!==n||Z(a)?U((0,i.Z)((0,o.Z)({},O),(0,l.Z)({},n,""))):U((0,i.Z)((0,o.Z)({},O),{email:"Please enter a valid email address."}))},L=function(e){b((function(r){return(0,i.Z)((0,o.Z)({},r),{phoneNumber:e})}))},I=function(){var e=(0,a.Z)((function(e){var n,a,l,t;return(0,s.__generator)(this,(function(s){switch(s.label){case 0:if(e.preventDefault(),p(!0),console.log("Form data before validation:",h),n={},h.gender||(n.gender="Gender is required."),h.year||(n.year="Year is required."),h.state||(n.state="State is required."),h.country||(n.country="Country is required."),h.discordUsername||(n.discordUsername="Discord username is required."),Z(h.email)||(n.email="Please enter a valid email address."),Object.keys(n).length>0)return console.log("Validation errors:",n),U(n),p(!1),[2];a=(0,i.Z)((0,o.Z)({role:r},h),{linkedInProfileUrl:h.linkedInProfileUrl||"",experience:h.experience||"",referral:h.referral||"",projectDescription:h.projectDescription||"",organizationName:h.organizationName||"",organizationDescription:h.organizationDescription||"",expectedMentors:h.expectedMentors||"",referralCode:h.referralCode||""}),console.log("Form data after validation and before submission:",a),s.label=1;case 1:return s.trys.push([1,3,4,5]),[4,m().post("/api/registration",a)];case 2:return l=s.sent(),console.log("Server response:",l),P(!0),setTimeout((function(){w.push("/")}),3e3),[3,5];case 3:return t=s.sent(),console.error("Error submitting form:",t),alert("Error registering. Please try again."),[3,5];case 4:return p(!1),[7];case 5:return[2]}}))}));return function(r){return e.apply(this,arguments)}}();return R?(0,t.jsx)("div",{className:"min-h-screen p-10 bg-gray-100 flex items-center justify-center",children:(0,t.jsxs)("div",{className:"bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full",children:[(0,t.jsx)("h1",{className:"text-2xl font-semibold text-center mb-6",children:"Register"}),(0,t.jsxs)("form",{onSubmit:I,children:[(0,t.jsxs)("div",{className:"mb-6",children:[(0,t.jsx)("label",{className:"block mb-2 text-sm font-medium text-gray-700",children:"Select Role"}),(0,t.jsxs)("select",{className:"block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500",onChange:function(e){n(e.target.value),b({})},value:r,children:[(0,t.jsx)("option",{value:"",disabled:!0,children:"Select your role"}),(0,t.jsx)("option",{value:"CA",children:"CA (Campus Ambassador)"})]})]}),function(){switch(r){case"CA":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(y,{label:"Name",name:"name",handleChange:D,error:O.name}),(0,t.jsx)(N,{label:"Gender",name:"gender",options:["Select Gender","Male","Female","Others"],handleChange:D,error:O.gender}),(0,t.jsx)(y,{label:"Email",name:"email",handleChange:D,error:O.email}),(0,t.jsxs)("div",{className:"mb-6",children:[(0,t.jsx)("label",{className:"block text-sm font-semibold text-gray-800 mb-2",children:"Phone Number"}),(0,t.jsx)(C(),{country:"india",value:h.phoneNumber||"",onChange:L,inputProps:{name:"phoneNumber",required:!0,autoFocus:!0},inputStyle:{width:"100%",padding:"10px 50px"}}),O.phoneNumber&&(0,t.jsx)("span",{className:"error",children:O.phoneNumber})]}),(0,t.jsx)(x,{onCountryChange:F,onStateChange:Y}),(0,t.jsx)(y,{label:"City",name:"city",handleChange:D,error:O.city}),(0,t.jsx)(y,{label:"College/Office Name",name:"collegeOrOffice",handleChange:D,error:O.collegeOrOffice}),(0,t.jsx)(N,{label:"Year",name:"year",options:["Select Year","1st Year","2nd Year","3rd Year","4th Year"],handleChange:D,error:O.year}),(0,t.jsx)(y,{label:"Field of Study",name:"fieldOfStudy",handleChange:D,error:O.fieldOfStudy}),(0,t.jsx)(y,{label:"GitHub Profile URL",name:"gitHubProfileUrl",handleChange:D,error:O.gitHubProfileUrl}),(0,t.jsx)(y,{label:"LinkedIn Profile URL",name:"linkedInProfileUrl",handleChange:D,error:O.linkedInProfileUrl}),(0,t.jsx)(y,{label:"Discord Username",name:"discordUsername",handleChange:D,error:O.discordUsername}),(0,t.jsx)(v,{label:"Experience (Optional)",name:"experience",handleChange:D,error:O.experience,required:!1}),(0,t.jsx)(v,{label:"Reason",name:"reason",handleChange:D,error:O.reason})]});case"Contributor":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(y,{label:"Name",name:"name",handleChange:D,error:O.name}),(0,t.jsx)(N,{label:"Gender",name:"gender",options:["Select Gender","Male","Female","Others"],handleChange:D,error:O.gender}),(0,t.jsx)(y,{label:"Email",name:"email",handleChange:D,error:O.email}),(0,t.jsxs)("div",{className:"mb-6",children:[(0,t.jsx)("label",{className:"block text-sm font-semibold text-gray-800 mb-2",children:"Phone Number"}),(0,t.jsx)(C(),{country:"in",value:h.phoneNumber||"",onChange:L,inputProps:{name:"phoneNumber",required:!0,autoFocus:!0},inputStyle:{width:"100%",padding:"10px 50px"}}),O.phoneNumber&&(0,t.jsx)("span",{className:"error",children:O.phoneNumber})]}),(0,t.jsx)(x,{onCountryChange:F,onStateChange:Y}),(0,t.jsx)(y,{label:"City",name:"city",handleChange:D,error:O.city}),(0,t.jsx)(y,{label:"College/Office Name",name:"collegeOrOffice",handleChange:D,error:O.collegeOrOffice}),(0,t.jsx)(N,{label:"Year",name:"year",options:["Select Year","1st Year","2nd Year","3rd Year","4th Year"],handleChange:D,error:O.year}),(0,t.jsx)(y,{label:"Field of Study",name:"fieldOfStudy",handleChange:D,error:O.fieldOfStudy}),(0,t.jsx)(y,{label:"GitHub Profile URL",name:"gitHubProfileUrl",handleChange:D,error:O.gitHubProfileUrl}),(0,t.jsx)(y,{label:"LinkedIn Profile URL (Optional)",name:"linkedInProfileUrl",handleChange:D,error:O.linkedInProfileUrl,required:!1}),(0,t.jsx)(y,{label:"Discord Username",name:"discordUsername",handleChange:D,error:O.discordUsername}),(0,t.jsx)(v,{label:"Reason",name:"reason",handleChange:D,error:O.reason}),(0,t.jsx)(v,{label:"Have you been part of any of the program before?",name:"partOfProgramBefore",handleChange:D,error:O.partOfProgramBefore}),(0,t.jsx)(y,{label:"Referral Code (Optional)",name:"referral",handleChange:D,error:O.referral,required:!1})]});case"Mentor":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(y,{label:"Name",name:"name",handleChange:D,error:O.name}),(0,t.jsx)(N,{label:"Gender",name:"gender",options:["Select Gender","Male","Female","Others"],handleChange:D,error:O.gender}),(0,t.jsx)(y,{label:"Email",name:"email",handleChange:D,error:O.email}),(0,t.jsxs)("div",{className:"mb-6",children:[(0,t.jsx)("label",{className:"block text-sm font-semibold text-gray-800 mb-2",children:"Phone Number"}),(0,t.jsx)(C(),{country:"in",value:h.phoneNumber||"",onChange:L,inputProps:{name:"phoneNumber",required:!0,autoFocus:!0},inputStyle:{width:"100%",padding:"10px 50px"}}),O.phoneNumber&&(0,t.jsx)("span",{className:"error",children:O.phoneNumber})]}),(0,t.jsx)(y,{label:"College/Office Name",name:"collegeOrOffice",handleChange:D,error:O.collegeOrOffice}),(0,t.jsx)(x,{onCountryChange:F,onStateChange:Y}),(0,t.jsx)(y,{label:"GitHub Profile URL",name:"gitHubProfileUrl",handleChange:D,error:O.gitHubProfileUrl}),(0,t.jsx)(y,{label:"LinkedIn Profile URL (Optional)",name:"linkedInProfileUrl",handleChange:D,error:O.linkedInProfileUrl}),(0,t.jsx)(y,{label:"Discord Username",name:"discordUsername",handleChange:D,error:O.discordUsername}),(0,t.jsx)(N,{label:"Year",name:"year",options:["Select Year","1st Year","2nd Year","3rd Year","4th Year"],handleChange:D,error:O.year}),(0,t.jsx)(v,{label:"Tech Stacks (Required)",name:"techStacks",handleChange:D,error:O.techStacks}),(0,t.jsx)(v,{label:"Reason",name:"reason",handleChange:D,error:O.reason}),(0,t.jsx)(y,{label:"Referral Code (Optional)",name:"referralCode",handleChange:D,error:O.referralCode,required:!1})]});case"ProjectAdmin":return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(y,{label:"Name",name:"name",handleChange:D,error:O.name}),(0,t.jsx)(N,{label:"Gender",name:"gender",options:["Select Gender","Male","Female","Others"],handleChange:D,error:O.gender}),(0,t.jsx)(y,{label:"Email",name:"email",handleChange:D,error:O.email}),(0,t.jsxs)("div",{className:"mb-6",children:[(0,t.jsx)("label",{className:"block text-sm font-semibold text-gray-800 mb-2",children:"Phone Number"}),(0,t.jsx)(C(),{country:"in",value:h.phoneNumber||"",onChange:L,inputProps:{name:"phoneNumber",required:!0,autoFocus:!0},inputStyle:{width:"100%",padding:"10px 50px"}}),O.phoneNumber&&(0,t.jsx)("span",{className:"error",children:O.phoneNumber})]}),(0,t.jsx)(y,{label:"GitHub Profile URL",name:"gitHubProfileUrl",handleChange:D,error:O.gitHubProfileUrl}),(0,t.jsx)(y,{label:"LinkedIn Profile URL (Optional)",name:"linkedInProfileUrl",handleChange:D,error:O.linkedInProfileUrl,required:!1}),(0,t.jsx)(y,{label:"Discord Username",name:"discordUsername",handleChange:D,error:O.discordUsername}),(0,t.jsx)(x,{onCountryChange:F,onStateChange:Y}),(0,t.jsx)(v,{label:"Tech Stacks",name:"techStacks",handleChange:D,error:O.techStacks}),(0,t.jsx)(y,{label:"Project Name",name:"projectName",handleChange:D,error:O.projectName}),(0,t.jsx)(v,{label:"Project Description (Optional)",name:"projectDescription",handleChange:D,error:O.projectDescription,required:!1}),(0,t.jsx)(y,{label:"Organization Name (Optional)",name:"organizationName",handleChange:D,error:O.organizationName,required:!1}),(0,t.jsx)(v,{label:"Organization Description (Optional)",name:"organizationDescription",handleChange:D,error:O.organizationDescription,required:!1}),(0,t.jsx)(y,{label:"Repository URL",name:"repositoryUrl",handleChange:D,error:O.repositoryUrl}),(0,t.jsx)(y,{label:"Deployment Link",name:"deploymentLink",handleChange:D,error:O.deploymentLink}),(0,t.jsx)(y,{label:"Expected Number of Mentors/Reviewers (Optional)",name:"expectedMentors",handleChange:D,error:O.expectedMentors,required:!1}),(0,t.jsx)(y,{label:"Referral Code (Optional)",name:"referralCode",handleChange:D,error:O.referralCode,required:!1})]});default:return null}}(),(0,t.jsx)("div",{className:"mt-6",children:(0,t.jsx)("button",{type:"submit",className:"w-full bg-[#f57d33] text-white py-2 px-4 rounded-lg shadow hover:bg-[#F26611] ".concat(f?"opacity-50 cursor-not-allowed":""),disabled:f,children:f?"Submitting...":"Submit"})})]}),S&&(0,t.jsx)("div",{className:"fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-35",children:(0,t.jsx)("div",{className:"bg-white shadow-lg rounded-lg p-6 max-w-sm w-full",children:(0,t.jsx)("h2",{className:"text-xl font-semibold mb-4",children:"Registration Successful!"})})})]})}):(0,t.jsx)("div",{className:"min-h-screen bg-gray-100 p-10 flex items-center justify-center",children:(0,t.jsxs)("div",{className:"bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full",children:[(0,t.jsx)("h1",{className:"text-2xl font-semibold text-center mb-6",children:"Coming Soon"}),(0,t.jsx)("p",{className:"text-center text-gray-700",children:"Registrations are not open at the moment. Please check back later."})]})})}}},function(e){e.O(0,[755,495,669,351,389,774,888,179],(function(){return r=34508,e(e.s=r);var r}));var r=e.O();_N_E=r}]);