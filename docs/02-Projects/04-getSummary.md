---
id: getSummary
title: Get a Project Fielding Summary
sidebar_label: getSummary()
hide_table_of_contents: true
---

import { Link, Highlight, ExampleResponse } from "../../src/components/DocsFeatures/index";

<Highlight color="#61AFFE">GET</Highlight> https://reporting-api.cmix.com/surveys/{"\{surveyId\}"}/fielding-summary?respondentType=LIVE

<br />
<br />

| Parameter | Type      | Required                                        |
| --------- | --------- | ----------------------------------------------- |
| surveyId  | `integer` | <Highlight color="#F93E3E">Required</Highlight> |

**Returns:** [<Link>`Promise<ProjectSummary>`</Link>](/docs/properties#project-fielding-summary)  

## Example Usage

```js
import API from "API/router";

const project = await API.CMIX.Project.getSummary(109820);
```

<ExampleResponse> 

```json
{
	"starts": 0,
	"completes": 0,
	"terminates": 0,
	"inProcess": 0,
	"abandons": 0
}
```
</ExampleResponse>