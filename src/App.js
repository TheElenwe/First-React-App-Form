import React, { useState } from "react";

import AddUser from "./components/Users/AddUser/AddUser";
import AddUserList from "./components/Users/AddUserList/AddUserList";

import "./App.css";

const App = () => {
  const [user, addUser] = useState("");

  const addUserList = (enteredText) => {
    addUser((prevUser) => {
      const updatedUser = [...prevUser];
      updatedUser.push({ text: enteredText, number: enteredText });
      return updatedUser;
    });
  };

  let content;

  if (user.length > 0) {
    content = <AddUserList items={user} />;
  }

  return (
    <div>
      <section id="goal-form">
        <AddUser onAddGoal={addUserList} onSaveExpenseData={addUserList} />
      </section>
      <section id="goals">{content} </section>
    </div>
  );
};

export default App;
