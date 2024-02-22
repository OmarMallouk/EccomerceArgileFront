import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/client-side/home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        {/* <Route path="" element={<Navbar />}></Route> */}

        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
