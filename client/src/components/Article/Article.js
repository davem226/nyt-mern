import React from "react";
import "./Article.css";

const Article = props => (
    <a href={`${props.link}`} className="card">
        <div className="card-body">
            <h5 className="card-title">
                {props.title}
            </h5>
            <p className="card-text">{props.abstract}</p>
        </div>
        {props.children}
    </a>
);
export default Article;