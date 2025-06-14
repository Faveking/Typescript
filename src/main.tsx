import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import Service from "./Componet/Services/Service.tsx";
import Events from "./Rough/Events.tsx";
// import Data from './Componet/Data/Data.tsx'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    {/* <Data/> */}
    <Events />
    <Service />
    <BrowserRouter />
  </StrictMode>
);
