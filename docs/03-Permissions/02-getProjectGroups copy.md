---
id: getProjectGroups
title: Get Project Permission Groups
sidebar_label: getProjectGroups()
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

<Highlight color="#61AFFE">GET</Highlight> https://survey-api.cmix.com/projects/{"\{projectId\}"}/groups

<br />
<br />

| Parameter | Type  | Required |
| ---- | ----  | -------- |
| projectId | `integer` | <Highlight color="#F93E3E">Required</Highlight> |

**Returns:** [`Promise<[UserGroup,..]>`](/docs/properties#user-group)  

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