---
id: addGroup
title: Add Permission Group to Project
sidebar_label: addGroup()
hide_table_of_contents: true
pagination_next: null
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

<Highlight color="#49cc90">POST</Highlight> https://survey-api.cmix.com/projects/{"\{projectId\}"}/groups

<br />
<br />

| Parameter | Type  | Required |
| ---- | ----  | -------- |
| projectId | `integer` | <Highlight color="#F93E3E">Required</Highlight> |
| groupId | `groupId` | <Highlight color="#F93E3E">Required</Highlight> |
| role | [<Link>`string<UserGroupRoles>`</Link>](/docs/properties#user-group-roles) | <Highlight color="#F93E3E">Required</Highlight> |

**Returns:** [<Link>`Promise<[UserGroupPermissions,..]>`</Link>](/docs/properties#user-group-permissions)  

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