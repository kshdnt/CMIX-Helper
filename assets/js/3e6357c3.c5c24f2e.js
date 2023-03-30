"use strict";(self.webpackChunkcmix_helper_docs=self.webpackChunkcmix_helper_docs||[]).push([[945],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(f,l(l({ref:t},d),{},{components:n})):r.createElement(f,l({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9198:(e,t,n)=>{n.r(t),n.d(t,{Highlight:()=>d,assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={id:"cloneReady",title:"Check if Project is Cloned",sidebar_label:"cloneReady()",hide_table_of_contents:!0},l=void 0,i={unversionedId:"Projects/cloneReady",id:"Projects/cloneReady",title:"Check if Project is Cloned",description:'GET https://survey-api.cmix.com/projects/{"\\{projectId\\}"}',source:"@site/docs/02-Projects/06-cloneReady.md",sourceDirName:"02-Projects",slug:"/Projects/cloneReady",permalink:"/CMIX-Helper/docs/Projects/cloneReady",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"cloneReady",title:"Check if Project is Cloned",sidebar_label:"cloneReady()",hide_table_of_contents:!0},sidebar:"tutorialSidebar",previous:{title:"clone()",permalink:"/CMIX-Helper/docs/Projects/clone"},next:{title:"setStatus()",permalink:"/CMIX-Helper/docs/Projects/setStatus"}},c={},s=[{value:"Example Usage",id:"example-usage",level:2}],d=e=>{let{children:t,color:n}=e;return(0,a.kt)("span",{style:{backgroundColor:n,borderRadius:"5px",color:"#fff",padding:"0.4rem"}},t)},p={toc:s,Highlight:d},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(d,{color:"#61AFFE",mdxType:"Highlight"},"GET")," https://survey-api.cmix.com/projects/","{projectId}",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"projectId"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"integer")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)(d,{color:"#F93E3E",mdxType:"Highlight"},"Required"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")," ",(0,a.kt)("a",{parentName:"p",href:"/docs/properties#expanded-project"},(0,a.kt)("inlineCode",{parentName:"a"},"Promise<ExpandedProject>")),"  "),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The function will return once the cloning phase is complete. Wait for this function to return before proceeding with any further actions on the project.")),(0,a.kt)("h2",{id:"example-usage"},"Example Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import API from "API/router";\n\nconst project = await API.CMIX.Project.cloneReady(109834);\n\n// Response\n// {\n//  "id": 109834,\n//  "name": "Project X",\n//  "clientId": 36585,\n//  "pUsrId": 29693,\n//  "sUsrId": null,\n//  "surveyId": 138665,\n//  "mxrId": null,\n//  "cxNumber": null,\n//  "token": "1D2E4B0B",\n//  "testToken": "5402762F",\n//  "libraryYn": false,\n//  "dateCreated": "2023-03-29T21:25:07+00:00",\n//  "dateModified": "2023-03-29T21:25:22+00:00",\n//  "pscId": 1,\n//  "externalId": null,\n//  "published": false,\n//  "draftSurveyId": 138665,\n//  "deployingYn": "N",\n//  "enableProjectQuotas": false,\n//  "status": "DESIGN",\n//  "currentSurvey": {\n//      "id": 138665,\n//      "mxrId": null,\n//      "dateCreated": "2023-03-29T21:25:07+00:00",\n//      "dateModified": "2023-03-29T21:25:22+00:00",\n//      "svsId": 1,\n//      "token": "1D2E4B0B",\n//      "name": "Project X",\n//      "clientId": 36585,\n//      "projectId": 109834,\n//      "cxNumber": null,\n//      "pUsrId": 29693,\n//      "sUsrId": null,\n//      "statusDate": "2023-03-29T21:25:22+00:00",\n//      "libraryYn": false,\n//      "externalId": null,\n//      "publishedYn": "N",\n//      "version": null,\n//      "cloningProgress": 100,\n//      "testToken": "3cba83",\n//      "status": "DESIGN"\n//  },\n//  "primaryProgrammer": {\n//      "id": 29693,\n//      "firstName": "Kaloyan",\n//      "lastName": "Shivergev",\n//      "profileImageUrl": null,\n//      "dateCreated": "2023-03-29 15:43:16-04",\n//      "dateModified": "2023-03-29 16:27:09-04",\n//      "authFail": 0,\n//      "dateLockout": null,\n//      "platformId": null,\n//      "keycloakId": null,\n//      "sessionToken": null,\n//      "profileThumbnailUrl": null,\n//      "status": "ACTIVE"\n//  },\n//  "secondaryProgrammer": null\n// }\n')))}m.isMDXComponent=!0}}]);