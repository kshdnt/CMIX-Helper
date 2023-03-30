---
id: welcome
title: Setup Guide
sidebar_label: Welcome
hide_table_of_contents: true
pagination_next: null
---

export const Link = ({ children }) => (
  <span>
    <strong>{children}</strong>
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

# Welcome

## About

CMIX Helper is an automation suite built with [<Link>Electron</Link>](https://electronjs.org/) and [<Link>React.js</Link>](https://react.dev/), that allows you to easely interact with the [<Link>CMIX API</Link>](https://petstore.swagger.io/?url=https%3A%2F%2Fsurvey-api.cmix.com%2Fswagger.json#/) 

## Installation
:::info
Node.js 16.9.0 or newer is required.
:::  
```bash
git clone {link to public repo}
cd CMIX-Helper
npm i
```

## Start the development server

```bash
npm run dev
```
