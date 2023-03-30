---
id: getShort
title: Get a list of Projects
sidebar_label: getShort()
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

<Highlight color="#61AFFE">GET</Highlight> https://survey-api.cmix.com/projects

<br />
<br />

| Parameter | Type  | Required |
| ---- | ----  | -------- |
| qs | [<Link>`QueryString`</Link>](/docs/properties#project-query-string) | <Highlight color="#F93E3E">Required</Highlight> |

**Returns:** [<Link>`Promise<[ShortProject,..]>`</Link>](/docs/properties#short-project)  

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