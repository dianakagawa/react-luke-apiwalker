import React from "react";
import "./MenuDropdown.css";

function MenuDropdown({resource, setResource}) {
  return (
    <select
      className="Select"
      value={resource}
      onChange={(event) => setResource(event.target.value)}
    >
      <option className="SelectToggle" value="people">
        People
      </option>
      <option className="SelectToggle" value="films">
        Films
      </option>
      <option className="SelectToggle" value="starships">
        Starships
      </option>
      <option className="SelectToggle" value="vehicles">
        Vehicles
      </option>
      <option className="SelectToggle" value="species">
        Species
      </option>
      <option className="SelectToggle" value="planets">
        Planets
      </option>
    </select>
  );
}

export default MenuDropdown;
