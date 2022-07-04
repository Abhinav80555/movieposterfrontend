// import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { API } from "./global";
import * as yup from "yup";

const formValidationSchema = yup.object({
  name: yup.string().required("why not fill this name?"),
  poster: yup.string().required("why not fill this poster?").min(4),
  rating: yup.number().required("why not fill this rating?").min(0).max(10),
  summary: yup.string().required("why not fill this summary?").min(20),
  trailer: yup.string().required("why not fill this trailer?").min(4)
});

export function AddMovie() {
  // const [name, setName] = useState("");
  // const [poster, setPoster] = useState("");
  // const [rating, setRating] = useState("");
  // const [summary, setSummary] = useState("");
  // const [trailer, setTraier] = useState("");

  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    handleBlur,
    touched
  } = useFormik({
    initialValues: {
      name: "",
      poster: "",
      rating: "",
      summary: "",
      trailer: ""
    },

    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      console.log("Form values", values);
      addMovie(values);
    }
  });

  const navigate = useNavigate();
  // copy the movielist and add newmovie to it
  // setMovieList([...movieList, newMovie]);
  const addMovie = (newMovie) => {
    console.log(newMovie);
    //const newMovie = {
    //   name: name,
    //   poster: poster,
    //   rating: rating,
    //   summary: summary,
    //   trailer: trailer
    // };
    //post method - fetch
    //1.method -post
    //2.data(newMovie)-body & json
    //3.headers -json
    //after movie creation -> /movies
    // const API = "https://6281dfdaed9edf7bd87a260e.mockapi.io";
    // fetch("https://6281dfdaed9edf7bd87a260e.mockapi.io/movies", {
    fetch(`${API}/movies`, {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: { "Content-Type": "application/json" }
    }).then(() => navigate("/movies"));
  };
  return (
    <form onSubmit={handleSubmit} className="add-movie-form">
      <TextField
        name="name"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.name}
        // onChange={(event) => setName(event.target.value)}
        id="standard-basic"
        label="Name"
        variant="standard"
        error={errors.name && touched.name}
        helperText={errors.name && touched.name ? errors.name : ""}
      />{" "}
      <TextField
        name="poster"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.poster}
        // onChange={(event) => setPoster(event.target.value)}
        id="standard-basic"
        label="Poster"
        variant="standard"
        error={errors.poster && touched.poster}
        helperText={errors.poster && touched.poster ? errors.poster : ""}
      />{" "}
      <TextField
        name="rating"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.rating}
        // onChange={(event) => setRating(event.target.value)}
        id="standard-basic"
        label="Rating"
        variant="standard"
        error={errors.rating && touched.rating}
        helperText={errors.rating && touched.rating ? errors.rating : ""}
      />{" "}
      <TextField
        name="summary"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.summary}
        // onChange={(event) => setSummary(event.target.value)}
        id="standard-basic"
        label="Summary"
        variant="standard"
        error={errors.summary && touched.summary}
        helperText={errors.summary && touched.summary ? errors.summary : ""}
      />{" "}
      <TextField
        name="trailer"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.trailer}
        // onChange={(event) => setTraier(event.target.value)}
        id="standard-basic"
        label="Trailer"
        variant="standard"
        error={errors.trailer && touched.trailer}
        helperText={errors.trailer && touched.trailer ? errors.trailer : ""}
      />
      <Button type="sumbit" variant="outlined">
        Add movie
      </Button>
      <pre>{JSON.stringify(values, null, 2)}</pre>
      <pre>{JSON.stringify(touched)}</pre>
      <pre>{JSON.stringify(errors)}</pre>
    </form>
  );
}
