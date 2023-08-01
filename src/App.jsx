import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Component/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PizzaDetails from "./Component/PizzaDetails";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/pizza/:id"
          element={

            <PizzaDetails />

          }
        />
      </Routes>

    </>
  );
}

export default App;
