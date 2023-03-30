---
id: setStatus
title: Set Project Status
sidebar_label: setStatus()
hide_table_of_contents: true
pagination_next: null
---

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

<Highlight color="#50e3c2">PATCH</Highlight> https://survey-api.cmix.com/projects/{"\{projectId\}"}

<br />
<br />

| Parameter | Type  | Required |
| --------- | ----- | -------- |
| projectId | `integer` | <Highlight color="#F93E3E">Required</Highlight> |
| status | `string` | <Highlight color="#F93E3E">Required</Highlight> |

**Returns:** [`Promise<ExpandedProject>`](/docs/properties#expanded-project)  

## Example Usage

```js
import API from "API/router";

const project = await API.CMIX.Project.setStatus(109834, "TEST");

// Response
// {
// 	"id": 109834,
// 	"name": "Project X",
// 	"clientId": 36585,
// 	"pUsrId": 29693,
// 	"sUsrId": null,
// 	"surveyId": 138665,
// 	"mxrId": null,
// 	"cxNumber": null,
// 	"token": "1D2E4B0B",
// 	"testToken": "5402762F",
// 	"libraryYn": false,
// 	"dateCreated": "2023-03-29T21:25:07+00:00",
// 	"dateModified": "2023-03-29T21:25:22+00:00",
// 	"pscId": 2,
// 	"externalId": null,
// 	"published": false,
// 	"draftSurveyId": 138665,
// 	"deployingYn": "N",
// 	"enableProjectQuotas": false,
// 	"status": "TEST",
// 	"surveys": [
// 		{
// 			"id": 138665,
// 			"mxrId": null,
// 			"dateCreated": "2023-03-29T21:25:07+00:00",
// 			"dateModified": "2023-03-30T17:57:45+00:00",
// 			"svsId": 2,
// 			"token": "1D2E4B0B",
// 			"name": "Project X",
// 			"clientId": 36585,
// 			"projectId": 109834,
// 			"cxNumber": null,
// 			"pUsrId": 29693,
// 			"sUsrId": null,
// 			"statusDate": "2023-03-30T17:57:45+00:00",
// 			"libraryYn": false,
// 			"externalId": null,
// 			"publishedYn": "N",
// 			"version": null,
// 			"cloningProgress": 100,
// 			"status": "TEST"
// 		}
// 	],
// 	"currentSurvey": {
// 		"id": 138665,
// 		"mxrId": null,
// 		"dateCreated": "2023-03-29T21:25:07+00:00",
// 		"dateModified": "2023-03-30T17:57:45+00:00",
// 		"svsId": 2,
// 		"token": "1D2E4B0B",
// 		"name": "Project X",
// 		"clientId": 36585,
// 		"projectId": 109834,
// 		"cxNumber": null,
// 		"pUsrId": 29693,
// 		"sUsrId": null,
// 		"statusDate": "2023-03-30T17:57:45+00:00",
// 		"libraryYn": false,
// 		"externalId": null,
// 		"publishedYn": "N",
// 		"version": null,
// 		"cloningProgress": 100,
// 		"status": "TEST"
// 	},
// 	"primaryProgrammer": {
// 		"id": 29693,
// 		"firstName": "Kaloyan",
// 		"lastName": "Shivergev",
// 		"profileImageUrl": null,
// 		"dateCreated": "2023-03-29 15:43:16-04",
// 		"dateModified": "2023-03-29 16:27:09-04",
// 		"authFail": 0,
// 		"dateLockout": null,
// 		"platformId": null,
// 		"keycloakId": null,
// 		"sessionToken": null,
// 		"profileThumbnailUrl": null,
// 		"status": "ACTIVE"
// 	},
// 	"secondaryProgrammer": null
// }
```