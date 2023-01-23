import React, {useState, useEffect} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import axios from "axios";

import MenuDropdown from "./components/MenuDropdown";
import SearchInput from "./components/SearchInput";
import SearchResult from "./components/SearchResult";
import People from "./components/People";

import "./components/App.css";

function App() {
  const [resource, setResource] = useState("people");
  const [id, setId] = useState("");

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id === "") return;

    axios
      .get(`https://swapi.dev/api/${resource}/${id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        // console.log(error);
        setData(null);
        setError(error);
      });
  }, [resource, id]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="Menu">
                  <MenuDropdown resource={resource} setResource={setResource} />
                  <SearchInput id={id} setId={setId} />
                </div>
                <SearchResult data={data} error={error} />
              </>
            }
          />
          <Route path="/:id" element={<People />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
