import React from "react";
import "./Heading.css";

const Heading = (props) => (
    <div className="page-header">
        <h1>
            NYT Article Scrubber
            <small>
                Search for and save NYT articles!
            </small>
        </h1>
        {props.children}
    </div>
);
export default Heading;