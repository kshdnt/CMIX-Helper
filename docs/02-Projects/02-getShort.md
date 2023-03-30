---
id: getShort
title: Get a list of Projects
sidebar_label: getShort()
hide_table_of_contents: true
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

**Returns:** [`Promise<[ShortProject,..]>`](/docs/properties#short-project)  

## Example Usage

```js
import API from "API/router";

const projects = await API.CMIX.Project.getShort({
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
// 		"surveyId": 138651
// 	},
// 	{
// 		"id": 109821,
// 		"name": "Project Venato - UK - Wave 1",
// 		"surveyId": 138652
// 	},..
// ]
```