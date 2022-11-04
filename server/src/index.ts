const express = require("express"); //Line 1
const app = express(); //Line 2
const port = process.env.PORT || 5000; //Line 3

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

// create a GET route
app.get("/api/movies", (req: any, res: any) => {
  //Line 9
  res.json({
    movies: [
      { id: 1, title: "movie1" },
      { id: 2, title: "movie2" },
      { id: 3, title: "movie3" },
    ],
  }); //Line 10
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" }); //Line 10
}); //
