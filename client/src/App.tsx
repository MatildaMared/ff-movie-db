import React, { useEffect, useState } from "react";

import "./App.css";
interface Movie {
  id: number;
  title: string;
}

function App() {
  const [data, setData] = useState<Movie[]>([] as Movie[]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    getMovies();

    setIsLoading(false);
  }, [data.length]);

  const getMovies = async () => {
    setIsLoading(true);
    const response = await fetch("/api/movies");
    if (response.status === 200) {
      const data = await response.json();
      setData(data.movies);
    } else {
      setError("Error fetching movies");
    }
  };

  return (
    <div className="App">
      <p>Forefront movie database</p>
      {isLoading && <p>Loading...</p>}
      {data &&
        Array.from(data).map((movie) => <p key={movie.id}>{movie.title}</p>)}

      {error && !data && <p>{error}</p>}
    </div>
  );
}

export default App;
