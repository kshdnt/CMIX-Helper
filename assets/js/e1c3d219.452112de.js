"use strict";(self.webpackChunkcmix_helper_docs=self.webpackChunkcmix_helper_docs||[]).push([[952],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3627:(e,t,n)=>{n.d(t,{rU:()=>l,vk:()=>i,y$:()=>o});var r=n(2949),a=n(7294);const l=e=>{let{children:t}=e;return a.createElement("span",null,t,a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",style:{display:"inline-block",verticalAlign:"middle",width:"1.25rem",height:"1.25rem",marginBottom:"0.25rem"},fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},a.createElement("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})))},o=e=>{let{children:t,color:n}=e;return a.createElement("span",{style:{backgroundColor:n,borderRadius:"5px",color:"#fff",padding:"0.4rem"}},t)},i=e=>{let{children:t}=e;const n="dark"===(0,r.I)().colorMode;return a.createElement("details",{style:{borderRadius:"5px",backgroundColor:n?"#282a36":"#f6f8fa"}},a.createElement("summary",{style:{padding:"1.2rem",cursor:"pointer"}},"Returns"),t)}},8917:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905)),l=n(3627);const o={id:"getSingle",title:"Get a single Project",sidebar_label:"getSingle()",hide_table_of_contents:!0},i=void 0,s={unversionedId:"projects/getSingle",id:"projects/getSingle",title:"Get a single Project",description:'GET https://survey-api.cmix.com/projects/{"\\{projectId\\}"}',source:"@site/docs/02-projects/03-getSingle.md",sourceDirName:"02-projects",slug:"/projects/getSingle",permalink:"/CMIX-Helper/docs/projects/getSingle",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"getSingle",title:"Get a single Project",sidebar_label:"getSingle()",hide_table_of_contents:!0},sidebar:"tutorialSidebar",previous:{title:"getShort()",permalink:"/CMIX-Helper/docs/projects/getShort"},next:{title:"getSummary()",permalink:"/CMIX-Helper/docs/projects/getSummary"}},c={},p=[{value:"Example Usage",id:"example-usage",level:2}],d={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(l.y$,{color:"#61AFFE",mdxType:"Highlight"},"GET")," https://survey-api.cmix.com/projects/","{projectId}",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"projectId"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"integer")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)(l.y$,{color:"#F93E3E",mdxType:"Highlight"},"Required"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," ",(0,a.kt)("a",{parentName:"p",href:"/docs/properties#expanded-project"},(0,a.kt)(l.rU,{mdxType:"Link"},(0,a.kt)("inlineCode",{parentName:"a"},"Promise<ExpandedProject>"))),"  "),(0,a.kt)("h2",{id:"example-usage"},"Example Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import API from "API/router";\n\nconst project = await API.CMIX.Project.getSingle(109820);\n')),(0,a.kt)(l.vk,{mdxType:"ExampleResponse"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 109820,\n    "name": "Project Venato - US - Wave 1",\n    "clientId": 36585,\n    "pUsrId": 29693,\n    "sUsrId": null,\n    "surveyId": 138651,\n    "mxrId": null,\n    "cxNumber": null,\n    "token": "08069251",\n    "testToken": "c18539",\n    "libraryYn": false,\n    "dateCreated": "2023-03-29T19:07:24+00:00",\n    "dateModified": "2023-03-29T19:48:46+00:00",\n    "pscId": 1,\n    "externalId": null,\n    "published": false,\n    "draftSurveyId": 138651,\n    "deployingYn": "N",\n    "enableProjectQuotas": false,\n    "status": "DESIGN",\n    "currentSurvey": {\n        "id": 138651,\n        "mxrId": null,\n        "dateCreated": "2023-03-29T19:07:24+00:00",\n        "dateModified": "2023-03-29T19:48:46+00:00",\n        "svsId": 1,\n        "token": "08069251",\n        "name": "Project Venato - US - Wave 1",\n        "clientId": 36585,\n        "projectId": 109820,\n        "cxNumber": null,\n        "pUsrId": 29693,\n        "sUsrId": null,\n        "statusDate": "2023-03-29T19:07:24+00:00",\n        "libraryYn": false,\n        "externalId": null,\n        "publishedYn": "N",\n        "version": null,\n        "cloningProgress": null,\n        "testToken": "c18539",\n        "status": "DESIGN"\n    },\n    "primaryProgrammer": {\n        "id": 29693,\n        "firstName": "Kaloyan",\n        "lastName": "Shivergev",\n        "profileImageUrl": null,\n        "dateCreated": "2023-03-29 15:43:16-04",\n        "dateModified": "2023-03-29 15:46:42-04",\n        "authFail": 6,\n        "dateLockout": "2023-03-29 15:46:10-04",\n        "platformId": null,\n        "keycloakId": null,\n        "sessionToken": null,\n        "profileThumbnailUrl": null,\n        "status": "ACTIVE"\n    },\n    "secondaryProgrammer": null\n}\n'))))}m.isMDXComponent=!0}}]);