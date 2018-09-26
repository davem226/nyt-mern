import React from "react";
import "./PageLink.css";

export const PageLink = props => (
    <a className="page-link">
        ${props.page}
    </a>
);