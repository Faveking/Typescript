import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import "./main";
import Login from "./Componet/LoginPage/Login";
import HomePage from "./Componet/HomePage/HomePage";
import ProductDetails from "./ProductDetails/ProductDetails";
import Signup from "./User Data/Signup/Signup";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/ProductDetails/:id" element={<ProductDetails />} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Signup" element={<Signup/>} />
      </Routes>
    </div>
  );
}

export default App;
