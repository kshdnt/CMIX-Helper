---
id: getSummary
title: Get a Project Fielding Summary
sidebar_label: getSummary()
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

<Highlight color="#61AFFE">GET</Highlight> https://reporting-api.cmix.com/surveys/{"\{surveyId\}"}/fielding-summary?respondentType=LIVE

<br />
<br />

| Parameter | Type  | Required |
| ---- | ----  | -------- |
| surveyId | `integer` | <Highlight color="#F93E3E">Required</Highlight> |

**Returns:** [<Link>`Promise<ProjectSummary>`</Link>](/docs/properties#project-fielding-summary)  

## Example Usage

```js
import API from "API/router";

const project = await API.CMIX.Project.getSummary(109820);

// Response
// {
// 	"starts": 0,
// 	"completes": 0,
// 	"terminates": 0,
// 	"inProcess": 0,
// 	"abandons": 0
// }
```