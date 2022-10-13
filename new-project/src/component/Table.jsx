import React, { useState } from "react";
import "./Table.style.css";

function PlayerForm(props) {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [goals, setGoals] = useState("");
  const [assists, setAssists] = useState("");
  const [yellowCards, setYellowCards] = useState("");
  const [redCards, setRedCards] = useState("");
  const [price, setPrice] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  const changeFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const changeLastName = (event) => {
    setLastName(event.target.value);
  };
  const changeDateOfBirth = (event) => {
    setDateOfBirth(event.target.value);
  };

  const changeGoals = (event) => {
    setGoals(event.target.value);
  };

  const changeAssists = (event) => {
    setAssists(event.target.value);
  };

  const changeYellowCards = (event) => {
    setYellowCards(event.target.value);
  };

  const changeRedCards = (event) => {
    setRedCards(event.target.value);
  };
  const changePrice = (event) => {
    setPrice(event.target.value);
  };

  const transferValue = (event) => {
    event.preventDefault();
    const val = {
      firstName,
      lastName,
      dateOfBirth,
      goals,
      assists,
      yellowCards,
      redCards,
      price,
    };
    props.func(val);
    clearState();
  };

  const clearState = () => {
    setFirstName("");
    setLastName("");
    setDateOfBirth("");
    setGoals("");
    setAssists("");
    setYellowCards("");
    setRedCards("");
    setPrice("");
  };

  
  
  const disabledButton = firstName.length > 0 && lastName.length > 0;


  return (
    <div className="inputForm">
      <input
        type="text"
        required="required"
        placeholder="Enter Name..."
        value={firstName}
        onChange={changeFirstName}
      />

      <input
        type="text"
        placeholder="Enter Last name"
        required="required"
        value={lastName}
        onChange={changeLastName}
      />
      <input
        type="date"
        required="required"
        value={dateOfBirth}
        onChange={changeDateOfBirth}
      />

      <input
        type="number"
        placeholder="Enter golas"
        value={goals}
        onChange={changeGoals}
      />

      <input
        type="number"
        value={assists}
        placeholder="Enter assists"
        onChange={changeAssists}
      />

      <input
        type="number"
        value={yellowCards}
        placeholder="Enter yellow cards "
        onChange={changeYellowCards}
      />

      <input
        type="number"
        value={redCards}
        placeholder="Enter red cards "
        onChange={changeRedCards}
      />

      <input
        type="number"
        value={price}
        placeholder="Enter price "
        onChange={changePrice}
      />
      <div className="submitButton">
        <button className="submitButton" onClick={transferValue} disabled={!disabledButton}>
        {" "}
        Add Player
      </button></div>
      
    </div>
  );
}

export default PlayerForm;
