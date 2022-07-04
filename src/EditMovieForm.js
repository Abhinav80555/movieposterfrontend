import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { API } from "./global";

export function EditMovieForm({ movie }) {
  const [name, setName] = useState(movie.name);
  const [poster, setPoster] = useState(movie.poster);
  const [rating, setRating] = useState(movie.rating);
  const [summary, setSummary] = useState(movie.summary);
  const [trailer, setTraier] = useState(movie.trailer);
  const navigate = useNavigate();
  // copy the movielist and add newmovie to it
  // setMovieList([...movieList, newMovie]);
  const editMovie = () => {
    const updatedMovie = {
      name: name,
      poster: poster,
      rating: rating,
      summary: summary,
      trailer: trailer
    };

    //post method - fetch
    //1.method -put & pass id
    //2.data(newMovie)-body & json
    //3.headers -json
    //after movie creation -> /movies
    fetch(`${API}/movies/${movie.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedMovie),
      headers: { "Content-Type": "application/json" }
    }).then(() => navigate("/movies"));
  };
  return (
    <div>
      <div className="add-movie-form">
        <TextField
          onChange={(event) => setName(event.target.value)}
          id="standard-basic"
          label="Name"
          variant="standard"
          value={name}
        />{" "}
        <TextField
          onChange={(event) => setPoster(event.target.value)}
          id="standard-basic"
          label="Poster"
          variant="standard"
          value={poster}
        />{" "}
        <TextField
          onChange={(event) => setRating(event.target.value)}
          id="standard-basic"
          label="Rating"
          variant="standard"
          value={rating}
        />{" "}
        <TextField
          onChange={(event) => setSummary(event.target.value)}
          id="standard-basic"
          label="Summary"
          variant="standard"
          value={summary}
        />{" "}
        <TextField
          onChange={(event) => setTraier(event.target.value)}
          id="standard-basic"
          label="Trailer"
          variant="standard"
          value={trailer}
        />
        {/* <input
              onChange={(event) => setName(event.target.value)}
              type="text"
              placeholder="Name"
            />
            <input
              onChange={(event) => setPoster(event.target.value)}
              type="text"
              placeholder="Poster"
            />
            <input
              onChange={(event) => setRating(event.target.value)}
              type="text"
              placeholder="Rating"
            />
            <input
              onChange={(event) => setSummary(event.target.value)}
              type="text"
              placeholder="Summary"
            />
            <input
              onChange={(event) => setTraier(event.target.value)}
              type="text"
              placeholder="Trailer"
            /> */}
        <Button color="success" variant="outlined" onClick={editMovie}>
          Save
        </Button>
      </div>
    </div>
  );
}
