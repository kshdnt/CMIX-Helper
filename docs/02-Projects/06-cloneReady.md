---
id: cloneReady
title: Check if Project is Cloned
sidebar_label: cloneReady()
hide_table_of_contents: true
---

import { Link, Highlight, ExampleResponse } from "../../src/components/DocsFeatures/index";

<Highlight color="#61AFFE">GET</Highlight> https://survey-api.cmix.com/projects/{"\{projectId\}"}

<br />
<br />

| Parameter | Type      | Required                                        |
| --------- | --------- | ----------------------------------------------- |
| projectId | `integer` | <Highlight color="#F93E3E">Required</Highlight> |

**Returns:** [<Link>`Promise<ExpandedProject>`</Link>](/docs/properties#expanded-project)  

:::tip
The function will return once the cloning phase is complete. Wait for this function to return before proceeding with any further actions on the project.
:::

## Example Usage

```js
import API from "API/router";

const project = await API.CMIX.Project.cloneReady(109834);
```

<ExampleResponse> 

```json
{
	"id": 109834,
	"name": "Project X",
	"clientId": 36585,
	"pUsrId": 29693,
	"sUsrId": null,
	"surveyId": 138665,
	"mxrId": null,
	"cxNumber": null,
	"token": "1D2E4B0B",
	"testToken": "5402762F",
	"libraryYn": false,
	"dateCreated": "2023-03-29T21:25:07+00:00",
	"dateModified": "2023-03-29T21:25:22+00:00",
	"pscId": 1,
	"externalId": null,
	"published": false,
	"draftSurveyId": 138665,
	"deployingYn": "N",
	"enableProjectQuotas": false,
	"status": "DESIGN",
	"currentSurvey": {
		"id": 138665,
		"mxrId": null,
		"dateCreated": "2023-03-29T21:25:07+00:00",
		"dateModified": "2023-03-29T21:25:22+00:00",
		"svsId": 1,
		"token": "1D2E4B0B",
		"name": "Project X",
		"clientId": 36585,
		"projectId": 109834,
		"cxNumber": null,
		"pUsrId": 29693,
		"sUsrId": null,
		"statusDate": "2023-03-29T21:25:22+00:00",
		"libraryYn": false,
		"externalId": null,
		"publishedYn": "N",
		"version": null,
		"cloningProgress": 100,
		"testToken": "3cba83",
		"status": "DESIGN"
	},
	"primaryProgrammer": {
		"id": 29693,
		"firstName": "Kaloyan",
		"lastName": "Shivergev",
		"profileImageUrl": null,
		"dateCreated": "2023-03-29 15:43:16-04",
		"dateModified": "2023-03-29 16:27:09-04",
		"authFail": 0,
		"dateLockout": null,
		"platformId": null,
		"keycloakId": null,
		"sessionToken": null,
		"profileThumbnailUrl": null,
		"status": "ACTIVE"
	},
	"secondaryProgrammer": null
}
```
</ExampleResponse>