import React, { useEffect, useState } from "react";

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("/movies/list", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.movies);
        setMovies(data.movies);
      });
  }, []);

  return (
    <div>
      {movies.map((item, index) => {
        return (
      
            <li key={index}> {item.name}</li>
         
        );
      })}
    </div>
  );
};

export default App;
