import React, { createContext, useState } from "react";

export const MovieContext = createContext("");

const MovieProvider = ({children}) => {
  const [movie, setMovieContext] = useState({
    id: 0,
    original_title: "",
    overview: "",
    backdrop_path: "",
    poster_path: "",
  });

  return (
    <MovieContext.Provider value={ {movie,setMovieContext} }>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
