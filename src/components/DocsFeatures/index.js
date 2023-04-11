import { useColorMode } from '@docusaurus/theme-common';
import React from 'react';

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

export const Highlight = ({ children, color }) => (
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

export const ExampleResponse = ({ children }) => {
    const isDarkTheme = useColorMode().colorMode === "dark";

    return (
        <details style={{ borderRadius: "5px", backgroundColor: isDarkTheme ? "#282a36" : "#f6f8fa" }}>
            <summary style={{ padding: "1.2rem", cursor: "pointer" }}>Returns</summary>
            {children}
        </details >
    )
};