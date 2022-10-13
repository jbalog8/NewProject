import React, { useState } from "react";
import jsonData from "./data.json";
import PlayerData from "./Table";
import "./Form.style.css";

function TableData() {
  const [playerData, setPlayerData] = useState(jsonData);

  

  function handleDelete(id) {
    const newPlayers = playerData.filter((info) => info.id !== id);
    setPlayerData(newPlayers);
  }

  const tableRows = playerData.map((info) => {
    return (
      <tr key={info.id}>
        <td>{info.id}</td>
        <td>{info.firstName}</td>
        <td>{info.lastName}</td>
        <td>{info.dateOfBirth}</td>
        <td>{info.goals}</td>
        <td>{info.assists}</td>
        <td>{info.yellowCards}</td>
        <td>{info.redCards}</td>
        <td>{info.price} mil.€</td>
        <td>
          <button>Edit</button>{" "}
          <button onClick={() => handleDelete(info.id)}>Delete</button>
        </td>
      </tr>
    );
  });

  const addRows = (data) => {
    const totalPlayerData = playerData.length;
    data.id = totalPlayerData + 1;
    const updatePlayerData = [...playerData];
    updatePlayerData.push(data);
    setPlayerData(updatePlayerData);
  };

  return (
    <div>
      <div className="form">
        <PlayerData func={addRows} />
      </div>
      <div className="table">
        <table className="table table-stripped">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Date of Birth</th>
              <th>Goals</th>
              <th>Assists</th>
              <th>Yellow Cards</th>
              <th>Red Cards</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </table>
      </div>
    </div>
  );
}

export default TableData;
