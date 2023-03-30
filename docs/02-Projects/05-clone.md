---
id: clone
title: Clone a Project
sidebar_label: clone()
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

<Highlight color="#49CC90">POST</Highlight> https://survey-api.cmix.com/surveys

<br />
<br />

| Parameter | Type  | Required |
| --------- | ----- | -------- |
| cloneSurveyId | `integer` | <Highlight color="#F93E3E">Required</Highlight> |
| name | `string` | <Highlight color="#F93E3E">Required</Highlight> |
| clientId | `integer` | <Highlight color="#F93E3E">Required</Highlight> |

//TODO Response is SurveyExpanded - add and update  
**Returns:** [<Link>`Promise<Survey>`</Link>](/docs/properties#survey)  

## Example Usage

```js
import API from "API/router";

const project = await API.CMIX.Project.clone(138656, "Project X", 36585);

// Response
// {
// 	"id": 138665,
// 	"mxrId": null,
// 	"dateCreated": "2023-03-29T21:25:07+00:00",
// 	"dateModified": "2023-03-29T21:25:07+00:00",
// 	"svsId": 12,
// 	"token": "1D2E4B0B",
// 	"name": "Project X",
// 	"clientId": 36585,
// 	"projectId": 109834,
// 	"cxNumber": null,
// 	"pUsrId": 29693,
// 	"sUsrId": null,
// 	"statusDate": "2023-03-29T21:25:07+00:00",
// 	"libraryYn": false,
// 	"externalId": null,
// 	"publishedYn": "N",
// 	"version": null,
// 	"cloningProgress": 0,
// 	"status": "CLONING",
// 	"project": {
// 		"id": 109834,
// 		"name": "Project X",
// 		"clientId": 36585,
// 		"pUsrId": 29693,
// 		"sUsrId": null,
// 		"surveyId": null,
// 		"mxrId": null,
// 		"cxNumber": null,
// 		"token": "1D2E4B0B",
// 		"testToken": "5402762F",
// 		"libraryYn": false,
// 		"dateCreated": "2023-03-29T21:25:07+00:00",
// 		"dateModified": "2023-03-29T21:25:07+00:00",
// 		"pscId": 6,
// 		"externalId": null,
// 		"published": false,
// 		"draftSurveyId": null,
// 		"deployingYn": "N",
// 		"enableProjectQuotas": false
// 	}
// }
```