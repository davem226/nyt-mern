import React from "react";
import "./SaveBtn.css";

const SaveBtn = props => (
  <button className="save-btn" onClick={props.click}>
    Save
  </button>
);
export default SaveBtn;