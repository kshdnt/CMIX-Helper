---
id: getSingle
title: Get a single Project
sidebar_label: getSingle()
hide_table_of_contents: true
---

export const Link = ({ children }) => (
  <span>
    {children}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        display: "inline-block",
        verticalAlign: "middle",
        width: "1.25rem",
        height: "1.25rem",
        marginBottom: "0.25rem"
      }}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
    </svg>
  </span>
);

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '5px',
      color: '#fff',
      padding: '0.4rem',
    }}>
    {children}
  </span>
);

<Highlight color="#61AFFE">GET</Highlight> https://survey-api.cmix.com/projects/{"\{projectId\}"}

<br />
<br />

| Parameter | Type  | Required |
| ---- | ----  | -------- |
| projectId | `integer` | <Highlight color="#F93E3E">Required</Highlight> |

**Returns:** [<Link>`Promise<ExpandedProject>`</Link>](/docs/properties#expanded-project)  

## Example Usage

```js
import API from "API/router";

const project = await API.CMIX.Project.getSingle(109820);

// Response
// {
// 	"id": 109820,
// 	"name": "Project Venato - US - Wave 1",
// 	"clientId": 36585,
// 	"pUsrId": 29693,
// 	"sUsrId": null,
// 	"surveyId": 138651,
// 	"mxrId": null,
// 	"cxNumber": null,
// 	"token": "08069251",
// 	"testToken": "c18539",
// 	"libraryYn": false,
// 	"dateCreated": "2023-03-29T19:07:24+00:00",
// 	"dateModified": "2023-03-29T19:48:46+00:00",
// 	"pscId": 1,
// 	"externalId": null,
// 	"published": false,
// 	"draftSurveyId": 138651,
// 	"deployingYn": "N",
// 	"enableProjectQuotas": false,
// 	"status": "DESIGN",
// 	"currentSurvey": {
// 		"id": 138651,
// 		"mxrId": null,
// 		"dateCreated": "2023-03-29T19:07:24+00:00",
// 		"dateModified": "2023-03-29T19:48:46+00:00",
// 		"svsId": 1,
// 		"token": "08069251",
// 		"name": "Project Venato - US - Wave 1",
// 		"clientId": 36585,
// 		"projectId": 109820,
// 		"cxNumber": null,
// 		"pUsrId": 29693,
// 		"sUsrId": null,
// 		"statusDate": "2023-03-29T19:07:24+00:00",
// 		"libraryYn": false,
// 		"externalId": null,
// 		"publishedYn": "N",
// 		"version": null,
// 		"cloningProgress": null,
// 		"testToken": "c18539",
// 		"status": "DESIGN"
// 	},
// 	"primaryProgrammer": {
// 		"id": 29693,
// 		"firstName": "Kaloyan",
// 		"lastName": "Shivergev",
// 		"profileImageUrl": null,
// 		"dateCreated": "2023-03-29 15:43:16-04",
// 		"dateModified": "2023-03-29 15:46:42-04",
// 		"authFail": 6,
// 		"dateLockout": "2023-03-29 15:46:10-04",
// 		"platformId": null,
// 		"keycloakId": null,
// 		"sessionToken": null,
// 		"profileThumbnailUrl": null,
// 		"status": "ACTIVE"
// 	},
// 	"secondaryProgrammer": null
// }
```