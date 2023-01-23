import React from "react";
import "./App.css";

const SearchResult = ({data, error}) => {
  //   console.log(data);

  return (
    <div className="Container">
      {data ? (
        <ul>
          {Object.keys(data).map((key) => (
            <li key={key}>
              {key}: {data[key]}
            </li>
          ))}
        </ul>
      ) : (
        <div className="Container">
          {error ? (
            <div>
              <h1>"Estos no son los droides que está buscando"</h1>
              <img
                src="https://static.wikia.nocookie.net/swfanon/images/e/e1/Obiwankenobi_dsws.jpg"
                alt="Obi-Wan Kenobi"
              />
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default SearchResult;
