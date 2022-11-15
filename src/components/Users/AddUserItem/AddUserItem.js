import React from "react";

import "./AddUserItem.css";

const AddUserItem = (props) => {
  return <li className="goal-item">{props.children}</li>;
};
export default AddUserItem;
