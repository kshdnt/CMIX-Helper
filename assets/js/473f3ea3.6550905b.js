"use strict";(self.webpackChunkcmix_helper_docs=self.webpackChunkcmix_helper_docs||[]).push([[405],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=p(n),m=l,g=s["".concat(c,".").concat(m)]||s[m]||u[m]||a;return n?r.createElement(g,o(o({ref:t},d),{},{components:n})):r.createElement(g,o({ref:t},d))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:l,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9892:(e,t,n)=>{n.r(t),n.d(t,{Highlight:()=>s,Link:()=>d,assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(7462),l=(n(7294),n(3905));const a={id:"clone",title:"Clone a Project",sidebar_label:"clone()",hide_table_of_contents:!0},o=void 0,i={unversionedId:"Projects/clone",id:"Projects/clone",title:"Clone a Project",description:"POST https://survey-api.cmix.com/surveys",source:"@site/docs/02-Projects/05-clone.md",sourceDirName:"02-Projects",slug:"/Projects/clone",permalink:"/CMIX-Helper/docs/Projects/clone",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"clone",title:"Clone a Project",sidebar_label:"clone()",hide_table_of_contents:!0},sidebar:"tutorialSidebar",previous:{title:"getSummary()",permalink:"/CMIX-Helper/docs/Projects/getSummary"},next:{title:"cloneReady()",permalink:"/CMIX-Helper/docs/Projects/cloneReady"}},c={},p=[{value:"Example Usage",id:"example-usage",level:2}],d=e=>{let{children:t}=e;return(0,l.kt)("span",null,t,(0,l.kt)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{display:"inline-block",verticalAlign:"middle",width:"1.25rem",height:"1.25rem",marginBottom:"0.25rem"},fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},(0,l.kt)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})))},s=e=>{let{children:t,color:n}=e;return(0,l.kt)("span",{style:{backgroundColor:n,borderRadius:"5px",color:"#fff",padding:"0.4rem"}},t)},u={toc:p,Link:d,Highlight:s},m="wrapper";function g(e){let{components:t,...n}=e;return(0,l.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(s,{color:"#49CC90",mdxType:"Highlight"},"POST")," https://survey-api.cmix.com/surveys",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cloneSurveyId"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"integer")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(s,{color:"#F93E3E",mdxType:"Highlight"},"Required"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(s,{color:"#F93E3E",mdxType:"Highlight"},"Required"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"clientId"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"integer")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)(s,{color:"#F93E3E",mdxType:"Highlight"},"Required"))))),(0,l.kt)("p",null,"//TODO Response is SurveyExpanded - add and update",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("a",{parentName:"p",href:"/docs/properties#survey"},(0,l.kt)(d,{mdxType:"Link"},(0,l.kt)("inlineCode",{parentName:"a"},"Promise<Survey>"))),"  "),(0,l.kt)("h2",{id:"example-usage"},"Example Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'import API from "API/router";\n\nconst project = await API.CMIX.Project.clone(138656, "Project X", 36585);\n\n// Response\n// {\n//  "id": 138665,\n//  "mxrId": null,\n//  "dateCreated": "2023-03-29T21:25:07+00:00",\n//  "dateModified": "2023-03-29T21:25:07+00:00",\n//  "svsId": 12,\n//  "token": "1D2E4B0B",\n//  "name": "Project X",\n//  "clientId": 36585,\n//  "projectId": 109834,\n//  "cxNumber": null,\n//  "pUsrId": 29693,\n//  "sUsrId": null,\n//  "statusDate": "2023-03-29T21:25:07+00:00",\n//  "libraryYn": false,\n//  "externalId": null,\n//  "publishedYn": "N",\n//  "version": null,\n//  "cloningProgress": 0,\n//  "status": "CLONING",\n//  "project": {\n//      "id": 109834,\n//      "name": "Project X",\n//      "clientId": 36585,\n//      "pUsrId": 29693,\n//      "sUsrId": null,\n//      "surveyId": null,\n//      "mxrId": null,\n//      "cxNumber": null,\n//      "token": "1D2E4B0B",\n//      "testToken": "5402762F",\n//      "libraryYn": false,\n//      "dateCreated": "2023-03-29T21:25:07+00:00",\n//      "dateModified": "2023-03-29T21:25:07+00:00",\n//      "pscId": 6,\n//      "externalId": null,\n//      "published": false,\n//      "draftSurveyId": null,\n//      "deployingYn": "N",\n//      "enableProjectQuotas": false\n//  }\n// }\n')))}g.isMDXComponent=!0}}]);