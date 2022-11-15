import React, { useState } from "react";
import Button from "../../UI/Button";
import "./AddUser.css";

const AddUser = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [ageValue, setAgeValue] = useState("");
  const [isValid, setIsValid] = useState(1);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const goalInputChangeHandlerr = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setAgeValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0 || ageValue.trim() < 0) {
      setIsValid((current) => !current);
      return;
    }

    props.onAddGoal(`${enteredValue} ( ${ageValue} year old )`);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? "invalid" : ""}`}>
        <label htmlFor="username"> UserName</label>
        <input
          id="username"
          value={enteredValue}
          onChange={goalInputChangeHandler}
          type="text"
        />
        <label>Age (Years)</label>
        <input
          value={ageValue}
          onChange={goalInputChangeHandlerr}
          type="number"
        />
      </div>

      <Button onClick={setIsValid} type="submit">
        Add User
      </Button>
      {!isValid && (
        <div className="invalidInput">
          <div className="header">
            <h1 id="header">Invalid Input</h1>
          </div>
          <div className="content">
            <span id="paragraph">
              Please enter a valid and age (non-empty values).
            </span>

            <button value={!isValid} className="okay" type="submit">
              Okay
            </button>
          </div>
        </div>
      )}
      {!isValid && ageValue.trim() < 0 && (
        <div className="invalidInput">
          <div className="header">
            <h1 id="header">Invalid Input</h1>
          </div>
          <div className="content">
            <p>
              <span id="paragraph">Please enter a valid age (&gt;0)</span>
            </p>
            <button value={!isValid} className="okay" type="submit">
              Okay
            </button>
          </div>
        </div>
      )}
    </form>
  );
};

export default AddUser;
