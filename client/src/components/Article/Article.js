import React from "react";
import "./Article.css";

export const Article = props => (
    <a href={`${props.link}`} className="card" style="width: 60%;">
        <div className="card-body">
            <h5 className="card-title">
                {props.title}
            </h5>
            <p className="card-text">{props.abstract}</p>
        </div>
        {props.children}
    </a>
);