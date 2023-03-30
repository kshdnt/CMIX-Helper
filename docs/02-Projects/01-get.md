---
id: get
title: Get a list of Projects
sidebar_label: get()
hide_table_of_contents: true
pagination_prev: null
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

<Highlight color="#61AFFE">GET</Highlight> https://survey-api.cmix.com/projects

<br />
<br />

| Parameter | Type  | Required |
| ---- | ----  | -------- |
| qs | [`QueryString`](/docs/properties#project-query-string) | <Highlight color="#F93E3E">Required</Highlight> |

**Returns:** [`Promise<[Project,..]>`](/docs/properties#project)  

## Example Usage

```js
import API from "API/router";

const projects = await API.CMIX.Project.get({
    name: "Venato",
    clientId: 36585,
    status: "DESIGN",
    sortColumn: "DATE_CREATED",
    sortDirection: "asc"
});


// Response
// [
// 	{
// 		"id": 109820,
// 		"name": "Project Venato - US - Wave 1",
// 		"clientId": 36585,
// 		"pUsrId": 29693,
// 		"sUsrId": null,
// 		"surveyId": 138651,
// 		"mxrId": null,
// 		"cxNumber": null,
// 		"token": "08069251",
// 		"testToken": "c18539",
// 		"libraryYn": false,
// 		"dateCreated": "2023-03-29T19:07:24+00:00",
// 		"dateModified": "2023-03-29T19:48:46+00:00",
// 		"pscId": 1,
// 		"externalId": null,
// 		"published": false,
// 		"draftSurveyId": 138651,
// 		"deployingYn": "N",
// 		"enableProjectQuotas": false,
// 		"status": "DESIGN"
// 	},
// 	{
// 		"id": 109821,
// 		"name": "Project Venato - UK - Wave 1",
// 		"clientId": 36585,
// 		"pUsrId": 29693,
// 		"sUsrId": null,
// 		"surveyId": 138652,
// 		"mxrId": null,
// 		"cxNumber": null,
// 		"token": "0ABD20FB",
// 		"testToken": "22136b",
// 		"libraryYn": false,
// 		"dateCreated": "2023-03-29T19:08:17+00:00",
// 		"dateModified": "2023-03-29T19:49:10+00:00",
// 		"pscId": 1,
// 		"externalId": null,
// 		"published": false,
// 		"draftSurveyId": 138652,
// 		"deployingYn": "N",
// 		"enableProjectQuotas": false,
// 		"status": "DESIGN"
// 	},..
// ]
```