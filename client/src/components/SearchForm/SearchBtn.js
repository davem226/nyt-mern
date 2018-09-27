import React from "react";

export const SearchBtn = props => (
  <button {...props} className="btn btn-success">
    {props.children}
  </button>
);
