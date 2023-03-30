---
id: addGroup
title: Add Permission Group to Project
sidebar_label: addGroup()
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

<Highlight color="#49cc90">POST</Highlight> https://survey-api.cmix.com/projects/{"\{projectId\}"}/groups

<br />
<br />

| Parameter | Type  | Required |
| ---- | ----  | -------- |
| projectId | `integer` | <Highlight color="#F93E3E">Required</Highlight> |
| groupId | `groupId` | <Highlight color="#F93E3E">Required</Highlight> |
| role | `string` | <Highlight color="#F93E3E">Required</Highlight> |

**Returns:** [`Promise<[UserGroupPermissions,..]>`](/docs/properties#user-group-permissions)  

## Example Usage

```js
import API from "API/router";

const project = await API.CMIX.Permissions.addGroup(36585, 40335, "PROJECT_MANAGER");

// Response
// [
// 	"DATA_DOWNLOAD",
// 	"RESPONDENT_ID",
// 	"GROUPS",
// 	"CTABS",
// 	"DASHBOARD",
// 	"EMAIL_CAMPAIGN",
// 	"GROUPS",
// 	"CTABS",
// 	"RESPONDENT_ID",
// 	"DATA_DOWNLOAD",
// 	"DASHBOARD",
// 	"SAT",
// 	"ADMIN"
// ]
```