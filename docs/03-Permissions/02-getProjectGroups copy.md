---
id: getProjectGroups
title: Get Project Permission Groups
sidebar_label: getProjectGroups()
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

<Highlight color="#61AFFE">GET</Highlight> https://survey-api.cmix.com/projects/{"\{projectId\}"}/groups

<br />
<br />

| Parameter | Type  | Required |
| ---- | ----  | -------- |
| projectId | `integer` | <Highlight color="#F93E3E">Required</Highlight> |

**Returns:** [<Link>`Promise<[UserGroup,..]>`</Link>](/docs/properties#user-group)  

## Example Usage

```js
import API from "API/router";

const project = await API.CMIX.Permissions.getProjectGroups(36585);

// Response
// [
// 	{
// 		"id": 40335,
// 		"name": "CMIX Helper Sandbox",
// 		"clientId": 36585,
// 		"groupType": "CLIENT",
// 		"clientAdminYn": false,
// 		"systemYn": false,
// 		"platformId": null,
// 		"permissions": [
// 			"DASHBOARD",
// 			"CTABS",
// 			"GROUPS",
// 			"RESPONDENT_ID",
// 			"DATA_DOWNLOAD",
// 			"SAT",
// 			"ADMIN",
// 			"EMAIL_CAMPAIGN"
// 		]
// 	},
// 	{
// 		"id": 40336,
// 		"name": "kaloyan.shivergev@cmixhelper.com's group",
// 		"clientId": null,
// 		"groupType": "USER",
// 		"clientAdminYn": false,
// 		"systemYn": false,
// 		"platformId": null,
// 		"permissions": [
// 			"DASHBOARD",
// 			"CTABS",
// 			"GROUPS",
// 			"RESPONDENT_ID",
// 			"DATA_DOWNLOAD",
// 			"SAT",
// 			"ADMIN"
// 		]
// 	}
// ]
```