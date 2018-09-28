import React from "react";
import "./Article.css";

const Article = props => (
    <div>
        <a href={`${props.link}`} target="_blank" className="card">
            <div className="card-body">
                <h5 className="card-title">
                    {props.title}
                </h5>
                <p className="card-text">{props.abstract}</p>
            </div>
        </a>
        {props.children}
    </div>
);
export default Article;