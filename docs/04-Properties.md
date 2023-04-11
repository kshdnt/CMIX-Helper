---
id: properties
title: Shared Properties
sidebar_label: Shared Properties
---

import { Link, Highlight } from "../src/components/DocsFeatures/index";

export const CheckTrue = () => (
	<svg
	xmlns="http://www.w3.org/2000/svg"
	style={{
	  display: "inline-block",
	  verticalAlign: "middle",
	  width: "1.25rem",
	  height: "1.25rem",
	  marginBottom: "0.25rem"
	}}
	fill="#49AE59"
	viewBox="0 0 32 32">
	<path
		d="M16 3c-7.18 0-13 5.82-13 13s5.82 13 13 13 13-5.82 13-13-5.82-13-13-13zM23.258 12.307l-9.486 9.485c-0.238 0.237-0.623 0.237-0.861 0l-0.191-0.191-0.001 0.001-5.219-5.256c-0.238-0.238-0.238-0.624 0-0.862l1.294-1.293c0.238-0.238 0.624-0.238 0.862 0l3.689 3.716 7.756-7.756c0.238-0.238 0.624-0.238 0.862 0l1.294 1.294c0.239 0.237 0.239 0.623 0.001 0.862z">
	</path>
</svg>
);

export const CheckFalse = () => (
	<svg
	xmlns="http://www.w3.org/2000/svg"
	style={{
	  display: "inline-block",
	  verticalAlign: "middle",
	  width: "1.25rem",
	  height: "1.25rem",
	  marginBottom: "0.25rem"
	}}
	fill="#E33134"
	viewBox="0 0 32 32">
	<path
		d="M16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13zM21.961 12.209c0.244-0.244 0.244-0.641 0-0.885l-1.328-1.327c-0.244-0.244-0.641-0.244-0.885 0l-3.761 3.761-3.761-3.761c-0.244-0.244-0.641-0.244-0.885 0l-1.328 1.327c-0.244 0.244-0.244 0.641 0 0.885l3.762 3.762-3.762 3.76c-0.244 0.244-0.244 0.641 0 0.885l1.328 1.328c0.244 0.244 0.641 0.244 0.885 0l3.761-3.762 3.761 3.762c0.244 0.244 0.641 0.244 0.885 0l1.328-1.328c0.244-0.244 0.244-0.641 0-0.885l-3.762-3.76 3.762-3.762z">
	</path>
</svg>
);

---

### Project Query String

- **Type:** `object`
- **Usage:** [<Link>`get()`</Link>](/docs/projects/get), [<Link>`getShort()`</Link>](/docs/projects/getShort)

| Name          | Type                            | Description                                               |
| ------------- | ------------------------------- | --------------------------------------------------------- |
| name          | <code>string</code>             | N/A                                                       |
| clientId      | <code>integer</code>            | N/A                                                       |
| createdBefore | <code>string($date-time)</code> | N/A                                                       |
| createdAfter  | <code>string($date-time)</code> | N/A                                                       |
| status        | <code>string</code>             | <code>DESIGN, TEST, LIVE, CLOSED, DELETED, CLONING</code> |
| statuses      | <code>array[string,..]</code>   | <code>DESIGN, TEST, LIVE, CLOSED, DELETED, CLONING</code> |

---

### Project

- **Type:** `object`
- **Usage:** [<Link>`get()`</Link>](/docs/projects/get)

| Name         | Type                            | Description                        |
| ------------ | ------------------------------- | ---------------------------------- |
| name         | <code>string</code>             | Project Name                       |
| status       | <code>string</code>             | Project Status                     |
| id           | <code>integer</code>            | Project ID                         |
| surveyId     | <code>integer</code>            | Survey ID                          |
| clientId     | <code>integer</code>            | Client ID                          |
| pUsrId       | <code>integer</code>            | Primary Programmer User ID         |
| sUsrId       | <code>integer</code>            | Secondary Programmer User ID       |
| dateCreated  | <code>string($date-time)</code> | Date and Time Project was Created  |
| dateModified | <code>string($date-time)</code> | Date and Time Project was Modified |

---

### Expanded Project

- **Type:** `object`
- **Usage:** [<Link>`getSingle()`</Link>](/docs/projects/getSingle), [<Link>`cloneReady()`</Link>](/docs/projects/cloneReady), [<Link>`setStatus()`</Link>](/docs/projects/setStatus)

| Name                | Type                                                   | Description                        |
| ------------------- | ------------------------------------------------------ | ---------------------------------- |
| name                | <code>string</code>                                    | Project Name                       |
| status              | <code>string</code>                                    | Project Status                     |
| id                  | <code>integer</code>                                   | Project ID                         |
| surveyId            | <code>integer</code>                                   | Survey ID                          |
| clientId            | <code>integer</code>                                   | Client ID                          |
| pUsrId              | <code>integer</code>                                   | Primary Programmer User ID         |
| sUsrId              | <code>integer</code>                                   | Secondary Programmer User ID       |
| dateCreated         | <code>string($date-time)</code>                        | Date and Time Project was Created  |
| dateModified        | <code>string($date-time)</code>                        | Date and Time Project was Modified |
| currentSurvey       | [<code>Survey</code>](/docs/properties#survey)         | Survey Information                 |
| primaryProgrammer   | [<code>Programmer</code>](/docs/properties#programmer) | Primary Programmer Information     |
| secondaryProgrammer | [<code>Programmer</code>](/docs/properties#programmer) | Secondary Programmer Information   |

---

### Short Project

- **Type:** `object`
- **Usage:** [<Link>`getShort()`</Link>](/docs/projects/getShort)

| Name     | Type                 | Description  |
| -------- | -------------------- | ------------ |
| name     | <code>string</code>  | Project Name |
| id       | <code>integer</code> | Project ID   |
| surveyId | <code>integer</code> | Survey ID    |

---

### Project Fielding Summary

- **Type:** `object`
- **Usage:** [<Link>`getSummary()`</Link>](/docs/projects/getSummary)

| Name       | Type                 | Description                    |
| ---------- | -------------------- | ------------------------------ |
| starts     | <code>integer</code> | Number of Starts               |
| completes  | <code>integer</code> | Number of Completes            |
| terminates | <code>integer</code> | Number of Terminates           |
| inProcess  | <code>integer</code> | Number of Currently in Process |
| abandons   | <code>integer</code> | Number of Abandons             |

---

### Survey

- **Type:** `object`
- **Usage:** [<Link>`clone()`</Link>](/docs/projects/clone)

| Name            | Type                            | Description                       |
| --------------- | ------------------------------- | --------------------------------- |
| name            | <code>string</code>             | Survey Name                       |
| status          | <code>string</code>             | Survey Status                     |
| statusDate      | <code>string($date-time)</code> | Date and Time Status was Modified |
| id              | <code>integer</code>            | Survey ID                         |
| projectId       | <code>integer</code>            | Project ID                        |
| clientId        | <code>integer</code>            | Client ID                         |
| pUsrId          | <code>integer</code>            | Primary Programmer User ID        |
| sUsrId          | <code>integer</code>            | Secondary Programmer User ID      |
| dateCreated     | <code>string($date-time)</code> | Date and Time Survey was Created  |
| dateModified    | <code>string($date-time)</code> | Date and Time Survey was Modified |
| cloningProgress | <code>integer\|null</code>      | Cloning Progress                  |

---

### User Group

- **Type:** `object`
- **Usage:** [<Link>`getClientGroups()`</Link>](/docs/permissions/getClientGroups), [<Link>`getProjectGroups()`</Link>](/docs/permissions/getProjectGroups)

| Name      | Type                 | Description                           |
| --------- | -------------------- | ------------------------------------- |
| id        | <code>integer</code> | User Group ID                         |
| name      | <code>string</code>  | User Group Name                       |
| clientId  | <code>integer</code> | Client ID                             |
| groupType | <code>string</code>  | <code>[CLIENT, INTERNAL, USER]</code> |

---

### User Group Permissions

- **Type:** `array`
- **Usage:** [<Link>`addGroup()`</Link>](/docs/permissions/addGroup)
- **Value:** `ADMIN`, `SAT`, `DASHBOARD`, `DATA_DOWNLOAD`, `GROUPS`, `CTABS`, `RESPONDENT_ID`

---

### User Group Roles

- **Type:** `string`
- **Usage:** [<Link>`addGroup()`</Link>](/docs/permissions/addGroup)
- **Value:** `SUPER_ADMIN`, `ADMIN`, `PROJECT_MANAGER`, `SURVEY_AUTHOR`, `QA_DP`, `SAMPLE_PURVEYOR`

| Role                | Admin          | Build & Edit   | Dashboard     | Data Download  | Manage Groups  | Marketsight    | Respondent Records |
| ------------------- | -------------- | -------------- | ------------- | -------------- | -------------- | -------------- | ------------------ |
| **SUPER_ADMIN**     | <CheckTrue />  | <CheckTrue />  | <CheckTrue /> | <CheckTrue />  | <CheckTrue />  | <CheckTrue />  | <CheckTrue />      |
| **ADMIN**           | <CheckTrue />  | <CheckTrue />  | <CheckTrue /> | <CheckTrue />  | <CheckTrue />  | <CheckTrue />  | <CheckTrue />      |
| **PROJECT_MANAGER** | <CheckFalse /> | <CheckFalse /> | <CheckTrue /> | <CheckTrue />  | <CheckTrue />  | <CheckTrue />  | <CheckTrue />      |
| **SURVEY_AUTHOR**   | <CheckFalse /> | <CheckTrue />  | <CheckTrue /> | <CheckTrue />  | <CheckTrue />  | <CheckTrue />  | <CheckTrue />      |
| **QA_DP**           | <CheckFalse /> | <CheckFalse /> | <CheckTrue /> | <CheckTrue />  | <CheckFalse /> | <CheckTrue />  | <CheckTrue />      |
| **SAMPLE_PURVEYOR** | <CheckFalse /> | <CheckFalse /> | <CheckTrue /> | <CheckFalse /> | <CheckFalse /> | <CheckFalse /> | <CheckFalse />     |

---

### Programmer

- **Type:** `object`
- **Usage:** [<Link>`getSingle()`</Link>](/docs/projects/getSingle)

| Name                | Type                            | Description                               |
| ------------------- | ------------------------------- | ----------------------------------------- |
| id                  | <code>integer</code>            | User ID                                   |
| firstName           | <code>string</code>             | User First Name                           |
| lastName            | <code>string</code>             | User Last Name                            |
| profileImageUrl     | <code>string&#124;null</code>   | User Profile Image                        |
| profileThumbnailUrl | <code>string\|null</code>       | User Profile Thumbnail                    |
| dateCreated         | <code>string($date-time)</code> | Date and Time User was Created            |
| dateModified        | <code>string($date-time)</code> | Date and Time User was Modified           |
| status              | <code>string</code>             | <code>ACTIVE, UNCONFIRMED, DELETED</code> |