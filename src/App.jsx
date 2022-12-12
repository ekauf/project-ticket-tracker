import "./App.scss";

import teamArr from "./data/teamData";

import Tile from "./components/tile/Tile";

import { useState } from "react";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [searchRole, setSearchRole] = useState("All");

  const roleFiltered = teamArr.filter((employee) => {
    if (searchRole === "All") {
      return true;
    }

    return employee.role === searchRole;
  });

  const nameFiltered = roleFiltered.filter((employee) => {
    const lowerCaseName = employee.name.toLowerCase();

    return lowerCaseName.includes(searchTerm);
  });

  const teamTileJsx = nameFiltered.map(({ name, role, id }) => {
    return <Tile key={id} name={name} role={role} />;
  });

  const handleInput = (event) => {
    const userInput = event.target.value;

    setSearchTerm(userInput);
  };

  const handleChange = (event) => {
    setSearchRole(event.target.value);
  };

  return (
    <div>
      <h1 className="page-heading">Ticket Tracker</h1>

      <label htmlFor="username">Search Name: </label>

      <input onInput={handleInput} id="username" type="text" />

      <select onChange={handleChange} id="role">
        <option value="All">All</option>

        <option value="Junior Software Developer">
          Junior Software Developer
        </option>

        <option value="Software Developer">Software Developer</option>

        <option value="Senior Software Developer">
          Senior Software Developer
        </option>

        <option value="Project Manager">Project Manager</option>

        <option value="Tester">Tester</option>

        <option value="Hard Man">Hard Man</option>
      </select>

      <main className="tile-container">{teamTileJsx}</main>
    </div>
  );
};

export default App;

// create a new search box component
