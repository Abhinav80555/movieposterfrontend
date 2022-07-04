import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { EditMovieForm } from "./EditMovieForm";
import { API } from "./global";
export function EditMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // fetch(`https://6281dfdaed9edf7bd87a260e.mockapi.io/movies/${id}`)
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
  return (
    <div>
      {/* <pre>{JSON.stringify(movie, null, 2)}</pre> */}
      {movie ? <EditMovieForm movie={movie} /> : "Loading..."}
    </div>
  );
}
