---
id: getSummary
title: Get a Project Fielding Summary
sidebar_label: getSummary()
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

<Highlight color="#61AFFE">GET</Highlight> https://reporting-api.cmix.com/surveys/{"\{surveyId\}"}/fielding-summary?respondentType=LIVE

<br />
<br />

| Parameter | Type  | Required |
| ---- | ----  | -------- |
| surveyId | `integer` | <Highlight color="#F93E3E">Required</Highlight> |

**Returns:** [`Promise<ProjectSummary>`](/docs/properties#project-fielding-summary)  

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