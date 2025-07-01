import React from "react";
import FetchAllData from "../FetchData/FetchData";
import ProductDetails from "../../ProductDetails/ProductDetails";
import Events from "../../Rough/Events";
import Service from "../Services/Service";
import { Link, useNavigate } from "react-router-dom";
import LogIn from "../LoginPage/Login";

const HomePage = () => {
  const navigate = useNavigate();
  const handelNavigate = () => {
    navigate("/Signup");
  };
  return (
    <div>
      <h1>Home</h1>
      <FetchAllData />
      <ProductDetails />
      <Events />
      <Service />
      {/* <LogIn /> */}
      <div style={{ marginLeft: 100 }}>
        <a href="/Login">
          <button>Login Here</button>
        </a>
      </div>
      <div>
        <button>
          <Link to={"/Event"}> SignUp </Link>
        </button>
      </div>
      <div>
        <button onClick={handelNavigate}>New User? Click Here</button>
      </div>
    </div>
  );
};

export default HomePage;
