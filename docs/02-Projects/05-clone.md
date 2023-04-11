---
id: clone
title: Clone a Project
sidebar_label: clone()
hide_table_of_contents: true
---

import { Link, Highlight, ExampleResponse } from "../../src/components/DocsFeatures/index";

<Highlight color="#49CC90">POST</Highlight> https://survey-api.cmix.com/surveys

<br />
<br />

| Parameter     | Type      | Required                                        |
| ------------- | --------- | ----------------------------------------------- |
| cloneSurveyId | `integer` | <Highlight color="#F93E3E">Required</Highlight> |
| name          | `string`  | <Highlight color="#F93E3E">Required</Highlight> |
| clientId      | `integer` | <Highlight color="#F93E3E">Required</Highlight> |

//TODO Response is SurveyExpanded - add and update  
**Returns:** [<Link>`Promise<Survey>`</Link>](/docs/properties#survey)  

## Example Usage

```js
import API from "API/router";

const project = await API.CMIX.Project.clone(138656, "Project X", 36585);
```

<ExampleResponse> 

```json
{
	"id": 138665,
	"mxrId": null,
	"dateCreated": "2023-03-29T21:25:07+00:00",
	"dateModified": "2023-03-29T21:25:07+00:00",
	"svsId": 12,
	"token": "1D2E4B0B",
	"name": "Project X",
	"clientId": 36585,
	"projectId": 109834,
	"cxNumber": null,
	"pUsrId": 29693,
	"sUsrId": null,
	"statusDate": "2023-03-29T21:25:07+00:00",
	"libraryYn": false,
	"externalId": null,
	"publishedYn": "N",
	"version": null,
	"cloningProgress": 0,
	"status": "CLONING",
	"project": {
		"id": 109834,
		"name": "Project X",
		"clientId": 36585,
		"pUsrId": 29693,
		"sUsrId": null,
		"surveyId": null,
		"mxrId": null,
		"cxNumber": null,
		"token": "1D2E4B0B",
		"testToken": "5402762F",
		"libraryYn": false,
		"dateCreated": "2023-03-29T21:25:07+00:00",
		"dateModified": "2023-03-29T21:25:07+00:00",
		"pscId": 6,
		"externalId": null,
		"published": false,
		"draftSurveyId": null,
		"deployingYn": "N",
		"enableProjectQuotas": false
	}
}
```
</ExampleResponse>