import React from "react";
import "./PageLink.css";

const PageLink = props => (
    <a className="page-link">
        {props.page}
    </a>
);
export default PageLink;