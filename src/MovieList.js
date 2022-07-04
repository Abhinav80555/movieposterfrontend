import { Movie } from "./Movie";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import { API } from "./global";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";

export function MovieList() {
  // const movieList = INTIAL_MOVIE_LIST;
  // const [name, setName] = useState("");
  // const [poster, setPoster] = useState("");
  // const [rating, setRating] = useState("");
  // const [summary, setSummary] = useState("");
  // const [trailer, setTraier] = useState("");
  const [movieList, setMovieList] = useState([]);

  const getMovies = () => {
    fetch(`${API}/movies`, {
      method: "GET"
    })
      .then((data) => data.json())
      .then((movies) => setMovieList(movies));
  };

  useEffect(() => {
    getMovies();
  }, []);

  //delete =>refresh movie list
  const deleteMovie = (id) => {
    console.log("Deleting movie: ", id);
    fetch(`${API}/movies/${id}`, {
      method: "DELETE"
    }).then(() => getMovies());
  };
  const navigate = useNavigate();

  return (
    <div>
      {/* <div className="add-movie-form">
        <TextField
          onChange={(event) => setName(event.target.value)}
          id="standard-basic"
          label="Name"
          variant="standard"
        />{" "}
        <TextField
          onChange={(event) => setPoster(event.target.value)}
          id="standard-basic"
          label="Poster"
          variant="standard"
        />{" "}
        <TextField
          onChange={(event) => setRating(event.target.value)}
          id="standard-basic"
          label="Rating"
          variant="standard"
        />{" "}
        <TextField
          onChange={(event) => setSummary(event.target.value)}
          id="standard-basic"
          label="Summary"
          variant="standard"
        />{" "}
        <TextField
          onChange={(event) => setTraier(event.target.value)}
          id="standard-basic"
          label="Trailer"
          variant="standard"
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
      {/* <Button
          variant="outlined"
          onClick={() => {
            const newMovie = {
              name: name,
              poster: poster,
              rating: rating,
              summary: summary,
              trailer: trailer
            };
            // copy the movielist and add newmovie to it
            setMovieList([...movieList, newMovie]);
          }}
        >
          Add movie
        </Button>
      </div> */}
      <div className="movie-list">
        {movieList.map((mv) => (
          <Movie
            key={mv.id}
            movie={mv}
            id={mv.id}
            deleteButton={
              <IconButton
                style={{ marginLeft: "auto" }}
                color="error"
                onClick={() => deleteMovie(mv.id)}
                aria-label="delete"
              >
                <DeleteIcon />
              </IconButton>
            }
            editButton={
              <IconButton
                onClick={() => navigate(`/movies/edit/${mv.id}`)}
                color="secondary"
                aria-label="edit"
              >
                <EditIcon />
              </IconButton>
            }
          />
        ))}
      </div>
    </div>
  );
}
