import { useParams, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import { useState, useEffect } from "react";
import { API } from "./global";

export function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetch(`${API}/movies/${id}`)
      .then((data) => data.json())
      .then((mv) => setMovie(mv));

    // async function getMovie(){
    // const data=await fetch(`${`https://6281dfdaed9edf7bd87a260e.mockapi.io/movies/${id}`}`)
    // const mv= await data.json());
    // setMovie(mv);
    // }
    // getMovie();
  }, [id]);

  const navigate = useNavigate();

  const styles = {
    color: movie.rating > 8 ? "green" : "red"
  };
  const star = {
    color: "orange"
  };

  return (
    <div>
      <iframe
        width="100%"
        height="570"
        src={movie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="movie-detail-container">
        <div className="movie-specs">
          <h2 className="movie-name"> {movie.name}</h2>
          <p style={styles} className="movie-rating">
            <span style={star}>&#9733;</span>
            {movie.rating}{" "}
          </p>
        </div>
        <p className="movie-summary"> {movie.summary} </p>
        <Button
          variant="outlined"
          startIcon={<ArrowBackIosOutlinedIcon />}
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
      </div>
    </div>
  );
}
