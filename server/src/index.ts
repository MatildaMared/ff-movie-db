const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json()); //express body parser

//controllers section
app.get("/api/movies", (req: any, res: any) => {
  //Line 9
  res.json({
    movies: [
      { id: 1, title: "movie1" },
      { id: 2, title: "movie2" },
      { id: 3, title: "movie3" },
    ],
  });
  //res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});

app.post("/api/movies", (req: any, res: any) => {
  res.json({
    movies: req.body.movies,
  });
});

app.put("/api/movies/:id", (req: any, res: any) => {
  const moviesArray = [
    { id: 1, title: "movie1" },
    { id: 2, title: "movie2" },
    { id: 4, title: "movie3" },
  ];
  const id = req.params.id;
  let movieToUpdate = moviesArray.findIndex((movie: any) => movie.id === +id);
  if (movieToUpdate !== -1) {
    moviesArray[movieToUpdate] = req.body;
    res.json({
      movies: moviesArray,
    });
  } else {
    res.status(404).json({
      message: "Something went wrong",
    });
  }
});

app.delete("/api/movies/:id", (req: any, res: any) => {
  const moviesArray = [
    { id: 1, title: "movie1" },
    { id: 2, title: "movie2" },
    { id: 4, title: "movie3" },
  ];
  const id = req.params.id;
  let movieToDelete = moviesArray.findIndex((movie: any) => movie.id === +id);
  if (movieToDelete !== -1) {
    moviesArray.splice(movieToDelete, 1);
    res.json({
      movies: moviesArray,
    });
  } else {
    res.status(404).json({
      message: "Something went wrong",
    });
  }
});

app.listen(port, () => console.log(`Listening on port ${port}`));
