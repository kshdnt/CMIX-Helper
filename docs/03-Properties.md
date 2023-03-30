---
id: properties
title: List of Global Properties
sidebar_label: Properties
---

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

# Parameters

### Project Query String

| Name | Type  | Description |
| ---- | ----  | ---------------- |
| name | <code>string</code> | N/A |
| clientId | <code>integer</code> |  N/A |
| createdBefore | <code>string($date-time)</code> |  N/A |
| createdAfter | <code>string($date-time)</code> |  N/A |
| status | <code>string</code> | <code>DESIGN, TEST, LIVE, CLOSED, DELETED, CLONING</code> |
| statuses | <code>array[string,..]</code> | <code>DESIGN, TEST, LIVE, CLOSED, DELETED, CLONING</code> |

# Responses

### Project

| Name | Type  | Description |
| ---- | ----  | ---------------- |
| name | <code>string</code> | Project Name |
| status | <code>string</code> | Project Status |
| id | <code>integer</code> | Project ID |
| surveyId | <code>integer</code> | Survey ID |
| clientId | <code>integer</code> | Client ID |
| pUsrId | <code>integer</code> | Primary Programmer User ID |
| sUsrId | <code>integer</code> | Secondary Programmer User ID |
| dateCreated | <code>string($date-time)</code> |  Date and Time Project was Created |
| dateModified | <code>string($date-time)</code> |  Date and Time Project was Modified |

### Expanded Project

| Name | Type  | Description |
| ---- | ----  | ---------------- |
| name | <code>string</code> | Project Name |
| status | <code>string</code> | Project Status |
| id | <code>integer</code> | Project ID |
| surveyId | <code>integer</code> | Survey ID |
| clientId | <code>integer</code> | Client ID |
| pUsrId | <code>integer</code> | Primary Programmer User ID |
| sUsrId | <code>integer</code> | Secondary Programmer User ID |
| dateCreated | <code>string($date-time)</code> |  Date and Time Project was Created |
| dateModified | <code>string($date-time)</code> |  Date and Time Project was Modified |
| currentSurvey | [<code>Survey</code>](/docs/properties#survey) |  Survey Information |
| primaryProgrammer | [<code>Programmer</code>](/docs/properties#programmer) |  Primary Programmer Information |
| secondaryProgrammer | [<code>Programmer</code>](/docs/properties#programmer) |  Secondary Programmer Information |

### Short Project

| Name | Type  | Description |
| ---- | ----  | ---------------- |
| name | <code>string</code> | Project Name |
| id | <code>integer</code> | Project ID |
| surveyId | <code>integer</code> | Survey ID |

### Project Fielding Summary

| Name | Type  | Description |
| ---- | ----  | ---------------- |
| starts | <code>integer</code> | Number of Starts |
| completes | <code>integer</code> | Number of Completes |
| terminates | <code>integer</code> | Number of Terminates |
| inProcess | <code>integer</code> | Number of Currently in Process |
| abandons | <code>integer</code> | Number of Abandons |

### Survey

| Name | Type  | Description |
| ---- | ----  | ---------------- |
| name | <code>string</code> | Survey Name |
| status | <code>string</code> | Survey Status |
| statusDate | <code>string($date-time)</code> | Date and Time Status was Modified |
| id | <code>integer</code> | Survey ID |
| projectId | <code>integer</code> | Project ID |
| clientId | <code>integer</code> | Client ID |
| pUsrId | <code>integer</code> | Primary Programmer User ID |
| sUsrId | <code>integer</code> | Secondary Programmer User ID |
| dateCreated | <code>string($date-time)</code> |  Date and Time Survey was Created |
| dateModified | <code>string($date-time)</code> |  Date and Time Survey was Modified |
| cloningProgress | <code>integer\|null</code> | Cloning Progress |

### User Group

| Name | Type  | Description |
| ---- | ----  | ---------------- |
| id | <code>integer</code> | User Group ID |
| name | <code>string</code> | User Group Name |
| clientId | <code>integer</code> | Client ID |
| groupType | <code>string</code> | <code>[CLIENT, INTERNAL, USER]</code> |

### User Group Permissions

| Value | Type  | Description |
| ---- | ----  | ---------------- |
| DASHBOARD | <code>string</code> | |
| SAT | <code>string</code> | |
| DATA_DOWNLOAD | <code>string</code> | |
| CTABS | <code>string</code> | |
| USERS | <code>string</code> | |
| GROUPS | <code>string</code> | |
| TEMPLATE_READ | <code>string</code> | |
| TEMPLATE_WRITE | <code>string</code> | |
| MARKETSIGHT | <code>string</code> | |
| ADMIN | <code>string</code> | |
| EMAIL_CAMPAIGN | <code>string</code> | |

### User Group Roles

| Value | Type  | Description |
| ---- | ----  | ---------------- |
| ADMIN | <code>string</code> | |
| SUPER_ADMIN | <code>string</code> | |
| PROJECT_MANAGER | <code>string</code> | |
| SURVEY_AUTHOR | <code>string</code> | |
| QA_DP | <code>string</code> | |
| SAMPLE_PURVEYOR | <code>string</code> | |

### Programmer

| Name | Type  | Description |
| ---- | ----  | ---------------- |
| id | <code>integer</code> | User ID |
| firstName | <code>string</code> | User First Name |
| lastName | <code>string</code> | User Last Name |
| profileImageUrl | <code>string&#124;null</code> | User Profile Image |
| profileThumbnailUrl | <code>string\|null</code> | User Profile Thumbnail |
| dateCreated | <code>string($date-time)</code> |  Date and Time User was Created |
| dateModified | <code>string($date-time)</code> |  Date and Time User was Modified |
| status | <code>string</code> | <code>ACTIVE, UNCONFIRMED, DELETED</code> |