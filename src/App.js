import "./styles.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { AddColor } from "./ColorBox";
import { useState } from "react";
import { NotFound } from "./NotFound";
import { MovieList } from "./MovieList";
import { MovieDetails } from "./MovieDetails";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useNavigate } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { EditMovie } from "./EditMovie";
import { AddMovie } from "./AddMovie";
import { useFormik } from "formik";
import * as yup from "yup";
// import { Movie } from "./Movie";

// const INTIAL_MOVIE_LIST = [
//   {
//     name: "RRR",
//     poster:
//       "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
//     rating: 8.8,
//     summary:
//       "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
//     trailer: "https://www.youtube.com/embed/f_vbAtFSEc0"
//   },
//   {
//     name: "Iron man 2",
//     poster:
//       "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
//     rating: 7,
//     summary:
//       "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
//     trailer: "https://www.youtube.com/embed/wKtcmiifycU"
//   },
//   {
//     name: "No Country for Old Men",
//     poster:
//       "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
//     rating: 8.1,
//     summary:
//       "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
//     trailer: "https://www.youtube.com/embed/38A__WT3-o0"
//   },
//   {
//     name: "Jai Bhim",
//     poster:
//       "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
//     summary:
//       "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
//     rating: 8.8,
//     trailer: "https://www.youtube.com/embed/nnXpbTFrqXA"
//   },
//   {
//     name: "The Avengers",
//     rating: 8,
//     summary:
//       "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
//     poster:
//       "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
//     trailer: "https://www.youtube.com/embed/eOrNdBpGMv8"
//   },
//   {
//     name: "Interstellar",
//     poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
//     rating: 8.6,
//     summary:
//       "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
//     trailer: "https://www.youtube.com/embed/zSWdZVtXT7E"
//   },
//   {
//     name: "Baahubali",
//     poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
//     rating: 8,
//     summary:
//       "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
//     trailer: "https://www.youtube.com/embed/sOEg_YZQsTI"
//   },
//   {
//     name: "Ratatouille",
//     poster:
//       "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
//     rating: 8,
//     summary:
//       "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
//     trailer: "https://www.youtube.com/embed/NgsQ8mVkN8w"
//   }
// ];

export default function App() {
  // lifting the state up -App parent

  const navigate = useNavigate();
  const [mode, setMode] = useState("light");
  const theme = createTheme({
    palette: {
      mode: mode
    }
  });
  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={3} style={{ minHeight: "100vh" }}>
        <div className="App">
          <AppBar position="static">
            <Toolbar>
              <Button color="inherit" onClick={() => navigate("/")}>
                Home
              </Button>
              <Button color="inherit" onClick={() => navigate("/movies")}>
                Movie
              </Button>
              <Button color="inherit" onClick={() => navigate("/movies/add")}>
                Add Movie{" "}
              </Button>
              <Button color="inherit" onClick={() => navigate("/colourbox")}>
                Color Game
              </Button>
              <Button
                style={{ marginLeft: "auto" }}
                startIcon={
                  mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />
                }
                color="inherit"
                onClick={() => setMode(mode === "dark" ? "light" : "dark")}
              >
                {mode === "dark" ? "light" : "dark"} mode
              </Button>
            </Toolbar>
          </AppBar>

          {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">MovieList</Link>
          </li>
          <li>
            <Link to="/movies/add">AddMovie</Link>
          </li>
          <li>
            <Link to="/colourbox">AddColor</Link>
          </li>
        </ul>
      </nav> */}

          <div className="route-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movies" element={<MovieList />} />
              {/* for redirect */}
              <Route
                path="/films"
                element={<Navigate replace to="/movies" />}
              />
              <Route path="*" element={<Navigate replace to="/404" />} />

              <Route path="/colourbox" element={<AddColor />} />
              <Route path="/basic-form" element={<BasicForm />} />
              <Route path="/movies/add" element={<AddMovie />} />
              <Route path="/movies/edit/:id" element={<EditMovie />} />
              <Route path="/movies/:id" element={<MovieDetails />} />
              <Route path="/404" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

function Home() {
  return <h1>welcome to react router</h1>;
}

// function BasicForm() {
//   const formik = useFormik({
//     initialValues: { email: "abc@gmail.com", password: "123" }
//   });
//   return (
//     <form onSubmit={formik.handleSubmit} className="user-form">
//       <input
//         name="email"
//         type="email"
//         placeholder="Enter email"
//         value={formik.values.email}
//         onChange={formik.handleChange}
//       />
//       <input
//         name="password"
//         type="password"
//         placeholder="Enter Password"
//         value={formik.values.password}
//         onChange={formik.handleChange}
//       />
//       <button type="sumbit">Sumbit</button>
//     </form>
//   );
// }
const formValidationSchema = yup.object({
  email: yup
    .string()
    .required("why not fill this email?")
    .min(5, "need a bigger email")
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "pattern not matched"),

  password: yup
    .string()
    .required("why not fill this password?")
    .min(8, "need a bigger password")
    .max(12, "too much password")
});
function BasicForm() {
  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    handleBlur,
    touched,
  } = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      console.log("Form values", values);
    }
  });
  return (
    <form onSubmit={handleSubmit} className="user-form">
      <input
        name="email"
        type="email"
        placeholder="Enter email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.email && touched.email ? errors.email : ""}
      <input
        name="password"
        type="password"
        placeholder="Enter Password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.password && touched.password ? errors.password : ""}
      <button type="sumbit">Sumbit</button>
      <pre>{JSON.stringify(values,null,2)}</pre>
      <pre>{JSON.stringify(touched)}</pre>
    </form>
  );
}
