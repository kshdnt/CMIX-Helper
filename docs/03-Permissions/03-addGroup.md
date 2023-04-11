---
id: addGroup
title: Add Permission Group to Project
sidebar_label: addGroup()
hide_table_of_contents: true
pagination_next: null
---

import { Link, Highlight, ExampleResponse } from "../../src/components/DocsFeatures/index";

<Highlight color="#49cc90">POST</Highlight> https://survey-api.cmix.com/projects/{"\{projectId\}"}/groups

<br />
<br />

| Parameter | Type                                                                       | Required                                        |
| --------- | -------------------------------------------------------------------------- | ----------------------------------------------- |
| projectId | `integer`                                                                  | <Highlight color="#F93E3E">Required</Highlight> |
| groupId   | `groupId`                                                                  | <Highlight color="#F93E3E">Required</Highlight> |
| role      | [<Link>`string<UserGroupRoles>`</Link>](/docs/properties#user-group-roles) | <Highlight color="#F93E3E">Required</Highlight> |

**Returns:** [<Link>`Promise<[UserGroupPermissions,..]>`</Link>](/docs/properties#user-group-permissions)  

## Example Usage

```js
import API from "API/router";

const project = await API.CMIX.Permissions.addGroup(36585, 40335, "PROJECT_MANAGER");
```

<ExampleResponse> 

```json
[
	"DATA_DOWNLOAD",
	"RESPONDENT_ID",
	"GROUPS",
	"CTABS",
	"DASHBOARD",
	"EMAIL_CAMPAIGN",
	"GROUPS",
	"CTABS",
	"RESPONDENT_ID",
	"DATA_DOWNLOAD",
	"DASHBOARD",
	"SAT",
	"ADMIN"
]
```
</ExampleResponse>