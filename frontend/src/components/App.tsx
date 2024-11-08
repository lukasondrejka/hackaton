import './App.css'
import axios from "axios";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home.tsx";

function App() {
  axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL as string;
  axios.defaults.timeout = 5000;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
