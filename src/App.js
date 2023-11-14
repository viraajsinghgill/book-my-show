import './App.css';
import axios from "axios";
// import .env from "dotenv"
//Routes
import {Routes,Route} from "react-router-dom";

// react slick CSS
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

//Pages
import HomePage from './pages/Home.page';
import PlayPage from './pages/Play.page';
import MoviePage from './pages/Movie.page';

axios.defaults.baseURL="https://api.themoviedb.org/3";
axios.defaults.params={};
axios.defaults.params["api_key"]=process.env.REACT_APP_API_KEY;
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/movie/:id" element={<MoviePage/>}/>
      <Route path="/plays" element={<PlayPage/>}/>
    </Routes>
  );
}

export default App;
