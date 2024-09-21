(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5268],{5722:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var a=n(47568),r=n(97582),i=n(85893),o=n(67294),s=(n(80147),n(65028)),c=n(87544),l=n(28928),m=n(77294),d=(n(94648),n(2162),JSON.parse('[{"inputs":[],"name":"merkleRoot100Contributors","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"merkleRootCampusAmbassadors","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"merkleRootContributors","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"merkleRootMentors","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"merkleRootOpenSourceAdvocates","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"merkleRootOrganizingTeam","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"merkleRootProjectAdmins","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32[]","name":"merkleProof","type":"bytes32[]"},{"internalType":"string","name":"participant","type":"string"}],"name":"verifyCAs","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32[]","name":"merkleProof","type":"bytes32[]"},{"internalType":"string","name":"participant","type":"string"}],"name":"verifyContributors","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32[]","name":"merkleProof","type":"bytes32[]"},{"internalType":"string","name":"participant","type":"string"}],"name":"verifyMentors","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32[]","name":"merkleProof","type":"bytes32[]"},{"internalType":"string","name":"participant","type":"string"}],"name":"verifyOpenSourceAdvocates","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32[]","name":"merkleProof","type":"bytes32[]"},{"internalType":"string","name":"participant","type":"string"}],"name":"verifyOrgTeam","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32[]","name":"merkleProof","type":"bytes32[]"},{"internalType":"string","name":"participant","type":"string"}],"name":"verifyPAs","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32[]","name":"merkleProof","type":"bytes32[]"},{"internalType":"string","name":"participant","type":"string"}],"name":"verifyTop100","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]')),u=n(40725),p=n.n(u),f=(n(9669),n(61120)),b=n.n(f),y=function(e){var t=(0,o.useState)(!1),n=t[0],u=t[1],f=o.createRef(),y=(0,o.useState)([]),g=y[0],h=y[1],v=(0,o.useState)([]),x=v[0],_=v[1],j=(0,o.useState)([]),N=j[0],k=j[1],C=(0,o.useState)([]),w=C[0],S=C[1],T=(0,o.useState)([]),R=T[0],A=T[1],D=(0,o.useState)([]),I=D[0],M=D[1],P=(0,o.useState)([]),E=P[0],O=P[1],G=(0,o.useState)(""),L=G[0],U=G[1];(0,o.useEffect)((function(){var t=function(){var t=(0,a.Z)((function(){var t,n,a,i,o,s,c,l;return(0,r.__generator)(this,(function(r){switch(r.label){case 0:return r.trys.push([0,15,,16]),[4,fetch("/certificatesData/".concat(e.year,"/CampusAmbassadors.json"))];case 1:return[4,r.sent().json()];case 2:return t=r.sent(),[4,fetch("/certificatesData/".concat(e.year,"/Contributors.json"))];case 3:return[4,r.sent().json()];case 4:return n=r.sent(),[4,fetch("/certificatesData/".concat(e.year,"/Mentors.json"))];case 5:return[4,r.sent().json()];case 6:return a=r.sent(),[4,fetch("/certificatesData/".concat(e.year,"/OpenSourceAdvocates.json"))];case 7:return[4,r.sent().json()];case 8:return i=r.sent(),[4,fetch("/certificatesData/".concat(e.year,"/OrganizingTeam.json"))];case 9:return[4,r.sent().json()];case 10:return o=r.sent(),[4,fetch("/certificatesData/".concat(e.year,"/ProjectAdmins.json"))];case 11:return[4,r.sent().json()];case 12:return s=r.sent(),[4,fetch("/certificatesData/".concat(e.year,"/Top100.json"))];case 13:return[4,r.sent().json()];case 14:return c=r.sent(),h(t),_(n),k(a),S(i),A(o),M(s),O(c),[3,16];case 15:return l=r.sent(),console.log(l),[3,16];case 16:return[2]}}))}));return function(){return t.apply(this,arguments)}}();t()}),[e.year]);var X=new c.r(""),V=new l.w5("0x2183467634e8e797c30f4a502ec8eab1a6e648ab8256668300092c4768bffc1d",X),z=(new m.CH("0x0E2195E4292458eaA9Ee30242Fce440b5a722944",d,X).connect(V),function(){e.setVerified()}),F=function(t){var n=t.toLowerCase();if("Contributor"===e.Role)for(var a=0;a<x.length;a++){var r;if(x[a].email.toLowerCase()===n)return U(null===(r=x[a])||void 0===r?void 0:r.cert_id),z(),!0}if("Top Contributor"===e.Role)for(var i=0;i<E.length;i++){var o;if(E[i].email.toLowerCase()===n)return U(null===(o=E[i])||void 0===o?void 0:o.cert_id),z(),!0}if("Mentor"===e.Role)for(var s=0;s<N.length;s++){var c,l,m,d;if(console.log(null===(c=N[s])||void 0===c?void 0:c.email),(null===(l=N[s])||void 0===l||null===(m=l.email)||void 0===m?void 0:m.toLowerCase())===n)return U(null===(d=N[s])||void 0===d?void 0:d.cert_id),z(),!0}if("Project Admin"===e.Role)for(var u=0;u<I.length;u++){var p;if(I[u].email.toLowerCase()===n)return U(null===(p=I[u])||void 0===p?void 0:p.cert_id),z(),!0}if("Campus Ambassador"===e.Role)for(var f=0;f<g.length;f++){var b;if(g[f].email.toLowerCase()===n)return U(null===(b=g[f])||void 0===b?void 0:b.cert_id),z(),!0}if("Speaker"===e.Role)for(var y=0;y<w.length;y++){var h;if(w[y].email.toLowerCase()===n)return U(null===(h=w[y])||void 0===h?void 0:h.cert_id),z(),!0}if("Organizing Team"===e.Role)for(var v=0;v<R.length;v++){var _;if(R[v].email.toLowerCase()===n)return U(null===(_=R[v])||void 0===_?void 0:_.cert_id),z(),!0}return!1};function H(){return(H=(0,a.Z)((function(t){var n;return(0,r.__generator)(this,(function(a){return F(t)?(z(),console.log("GG OP EZ"),"Verification successful.\n Achievement Unlocked \ud83c\udf8a!!! \n Proceed to download your hard-earned certificate from below. \n\nHope you had a great time learning & contributing with us. All the best for your future endeavors.",alert("Verification successful.\n Achievement Unlocked \ud83c\udf8a!!! \n Proceed to download your hard-earned certificate from below. \n\nHope you had a great time learning & contributing with us. All the best for your future endeavors."),u(!0),setTimeout((function(){u(!1)}),8e3)):(console.log("Never gonna give you up..."),n="Verification failed.\ud83d\udc80\nPlease recheck if you have entered the correct email (used to register in GSSoC'".concat(null===e||void 0===e?void 0:e.year.slice(2),") & selected the appropriate role from the dropdown. \n\nIf you still feel something is wrong, feel free to make a ticket on the official server regarding the same."),alert(n)),[2]}))}))).apply(this,arguments)}return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"flex justify-center relative overflow-hidden",id:"cert",children:"Contributor"===e.Role?(0,i.jsxs)("div",{style:{backgroundImage:"url(/certificates/".concat(e.year,"/GSSoC_Contrib_Cert.png)")},className:"banner cert-contrib bg-no-repeat",ref:f,children:[(0,i.jsx)("div",{id:"contrib_name",className:"".concat(2024==e.year?"contrib_name_2024":"contrib_name_2023"," text-big-orange"),children:e.verified?e.Name:"X".repeat(e.Name.length)}),(0,i.jsx)("div",{id:"rank_display",className:"rank_display_2024 text-big-black",children:e.verified?"Rank: ".concat(e.Rank):"Rank: X".repeat(e.Rank.length)}),(0,i.jsxs)("h5",{className:"cert_id_2024 text-sm font-bold",children:["Certificate ID: ",(0,i.jsx)("span",{className:"font-normal",children:L})]}),(0,i.jsxs)("h5",{className:"issue_2024 text-sm font-bold",children:["ISSUED: ",(0,i.jsx)("span",{className:"font-normal",children:"August 2024"})]})]}):"Top Contributor"===e.Role?(0,i.jsxs)("div",{style:{backgroundImage:"url(/certificates/".concat(e.year,"/GSSoC_TopContrib_Cert.png)")},className:"banner cert-topcontrib bg-no-repeat",ref:f,children:[(0,i.jsx)("div",{id:"contrib_name",className:"".concat(2024==e.year?"contrib_name_2024":"contrib_name_2023"," text-big-orange"),children:e.verified?e.Name:"X".repeat(e.Name.length)}),(0,i.jsx)("div",{id:"rank_display",className:"toprank_display_2024 text-big-black",children:e.verified?"Rank: ".concat(e.Rank):"Rank: X".repeat(e.Rank.length)}),(0,i.jsxs)("h5",{className:"cert_id_2024 text-sm font-bold",children:["Certificate ID: ",(0,i.jsx)("span",{className:"font-normal",children:L})]}),(0,i.jsxs)("h5",{className:"issue_2024 text-sm font-bold",children:["ISSUED: ",(0,i.jsx)("span",{className:"font-normal",children:"August 2024"})]})]}):"Mentor"===e.Role?(0,i.jsxs)("div",{style:{backgroundImage:"url(/certificates/".concat(e.year,"/GSSoC_Mentor_Cert.png)")},className:"banner cert-mentor bg-no-repeat",ref:f,children:[(0,i.jsx)("div",{id:"contrib_name",className:"".concat(2024==e.year?"contrib_name_2024":"contrib_name_2023"," text-big-orange"),children:e.verified?e.Name:"X".repeat(e.Name.length)}),(0,i.jsxs)("h5",{className:"cert_id_2024 text-sm font-bold",children:["Certificate ID: ",(0,i.jsx)("span",{className:"font-normal",children:L})]}),(0,i.jsxs)("h5",{className:"issue_2024 text-sm font-bold",children:["ISSUED: ",(0,i.jsx)("span",{className:"font-normal",children:"August 2024"})]})]}):"Project Admin"===e.Role?(0,i.jsxs)("div",{style:{backgroundImage:"url(/certificates/".concat(e.year,"/GSSoC_PA_Cert.png)")},className:"banner cert-pa bg-no-repeat",ref:f,children:[(0,i.jsx)("div",{id:"contrib_name",className:"".concat(2024==e.year?"contrib_name_2024":"contrib_name_2023"," text-big-orange"),children:e.verified?e.Name:"X".repeat(e.Name.length)}),(0,i.jsxs)("h5",{className:"cert_id_2024 text-sm font-bold",children:["Certificate ID: ",(0,i.jsx)("span",{className:"font-normal",children:L})]}),(0,i.jsxs)("h5",{className:"issue_2024 text-sm font-bold",children:["ISSUED: ",(0,i.jsx)("span",{className:"font-normal",children:"August 2024"})]})]}):"Campus Ambassador"===e.Role?(0,i.jsxs)("div",{style:{backgroundImage:"url(/certificates/".concat(e.year,"/GSSoC_CA_Cert.png)")},className:"banner cert-ca bg-no-repeat",ref:f,children:[(0,i.jsx)("div",{id:"contrib_name",className:"".concat(2024==e.year?"contrib_name_2024":"contrib_name_2023"," text-big-orange"),children:e.verified?e.Name:"X".repeat(e.Name.length)}),(0,i.jsxs)("h5",{className:"cert_id_2024 text-sm font-bold",children:["Certificate ID: ",(0,i.jsx)("span",{className:"font-normal",children:L})]}),(0,i.jsxs)("h5",{className:"issue_2024 text-sm font-bold",children:["ISSUED: ",(0,i.jsx)("span",{className:"font-normal",children:"August 2024"})]})]}):"Speaker"===e.Role?(0,i.jsxs)("div",{style:{backgroundImage:"url(/certificates/".concat(e.year,"/GSSoC_OSAdvocate_Cert.png)")},className:"banner cert-speaker bg-no-repeat",ref:f,children:[(0,i.jsx)("div",{id:"contrib_name",className:"".concat(2024==e.year?"contrib_name_2024":"contrib_name_2023"," text-big-orange"),children:e.verified?e.Name:"X".repeat(e.Name.length)}),(0,i.jsxs)("h5",{className:"cert_id_2024 text-sm font-bold",children:["Certificate ID: ",(0,i.jsx)("span",{className:"font-normal",children:L})]}),(0,i.jsxs)("h5",{className:"issue_2024 text-sm font-bold",children:["ISSUED: ",(0,i.jsx)("span",{className:"font-normal",children:"August 2024"})]})]}):"Organizing Team"===e.Role?(0,i.jsxs)("div",{style:{backgroundImage:"url(/certificates/".concat(e.year,"/GSSoC_Organiser_Cert.png)")},className:"banner cert-orgteam bg-no-repeat",ref:f,children:[(0,i.jsx)("div",{id:"contrib_name",className:"".concat(2024==e.year?"contrib_name_2024":"contrib_name_2023"," text-big-orange"),children:e.verified?e.Name:"X".repeat(e.Name.length)}),(0,i.jsxs)("h5",{className:"cert_id_2024 text-sm font-bold",children:["Certificate ID: ",(0,i.jsx)("span",{className:"font-normal",children:L})]}),(0,i.jsxs)("h5",{className:"issue_2024 text-sm font-bold",children:["ISSUED: ",(0,i.jsx)("span",{className:"font-normal",children:"August 2024"})]})]}):(0,i.jsx)(i.Fragment,{})}),(0,i.jsx)("h6",{id:"no-mobile-alert",className:"text-black dark:text-white",children:"* Please download the certificate on the desktop website"}),(0,i.jsx)(s.L,{mt:20}),(0,i.jsx)("button",{type:"button",className:e.verified?"dark:text-black bg-gradient-to-b from-slate-600 to-orange-400 text-md text-white w-full font-medium py-3 px-5 rounded mb-3 text-md text-white font-bold px-5 py-1 rounded md:text-xl md:py-3":"bg-gradient-to-b from-primary_orange-0 to-orange-600 text-md  dark:text-black font-medium rounded-b-md hover:bg-gradient-to-t hover:from-primary_orange-0 hover:to-orange-600 text-md text-white font-bold px-5 py-1 rounded md:text-xl md:py-3",onClick:function(){!function(e){H.apply(this,arguments)}(e.Email)},disabled:!e.verified,children:"Verify"}),(0,i.jsx)(s.L,{mt:5}),(0,i.jsx)("button",{type:"button",className:e.verified?"bg-gradient-to-b from-primary_orange-0 to-orange-600 text-md dark:text-black  rounded-b-md hover:bg-gradient-to-t hover:from-primary_orange-0 hover:to-orange-600 text-md text-white font-bold px-5 py-1 rounded md:text-xl md:py-3":"dark:text-black bg-gradient-to-b from-slate-600 to-orange-400 text-md text-white w-full font-medium py-3 px-5 rounded mb-3 text-md text-white font-bold px-5 py-1 rounded md:text-xl md:py-3",onClick:function(t){t.preventDefault(),!0===e.verified&&b()(f.current).then((function(t){var n=t.toDataURL("image/png"),a=document.createElement("a");a.setAttribute("href",n),a.setAttribute("download",e.Name+"_Cert_"+e.Role+"_GSSoC".concat(e.year,".png")),a.click(),a.remove()})).catch((function(e){return console.log(e)}))},disabled:!e.verified,children:"Download Certificate"}),n&&(0,i.jsx)(p(),{className:"fullscreen"})]})}},46601:function(){},52361:function(){},94616:function(){}}]);