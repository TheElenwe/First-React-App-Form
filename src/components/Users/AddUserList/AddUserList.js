import React from "react";

import AddUserItem from "../AddUserItem/AddUserItem";
import "./AddUserList.css";
const AddUserList = (props) => {
  return (
    <ul className="goal-list">
      {props.items.map((user, index) => (
        <AddUserItem key={index} text={user.text} number={user.number}>
          {user.text}
        </AddUserItem>
      ))}
    </ul>
  );
};

export default AddUserList;
