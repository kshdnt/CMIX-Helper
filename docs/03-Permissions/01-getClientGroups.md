---
id: getClientGroups
title: Get Client Permission Groups
sidebar_label: getClientGroups()
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

<Highlight color="#61AFFE">GET</Highlight> https://survey-api.cmix.com/clients/{"\{clientId\}"}/groups

<br />
<br />

| Parameter | Type  | Required |
| ---- | ----  | -------- |
| clientId | `integer` | <Highlight color="#F93E3E">Required</Highlight> |

**Returns:** [`Promise<[UserGroup,..]>`](/docs/properties#user-group)  

## Example Usage

```js
import API from "API/router";

const project = await API.CMIX.Permissions.getClientGroups(36585);

// Response
// [
// 	{
// 		"id": 40335,
// 		"name": "CMIX Helper Sandbox",
// 		"clientId": 36585,
// 		"groupType": "CLIENT",
// 		"clientAdminYn": false,
// 		"systemYn": false,
// 		"platformId": null
// 	}
// ]
```