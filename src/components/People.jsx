import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

const People = () => {
  const {id} = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/${id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, [id]);

  return (
    <div>
      {data ? (
        <ul>
          {Object.keys(data).map((key) => (
            <li key={key}>
              {key}: {data[key]}
            </li>
          ))}
        </ul>
      ) : (
        <div>
          {error ? (
            <div>
              <h1>"Estos no son los droides que está buscando"</h1>
              <img
                src="https://static.wikia.nocookie.net/swfanon/images/e/e1/Obiwankenobi_dsws.jpg"
                alt="Obi-Wan Kenobi"
              />
            </div>
          ) : (
            <p>Cargando...</p>
          )}
        </div>
      )}
    </div>
  );
};

export default People;
