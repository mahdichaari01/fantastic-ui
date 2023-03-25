import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import { LandingPage } from "./pages/LandingPage/LandingPage";
import CreatePage from "./pages/Create/Create";
import DeployPage from "./pages/Deploy/Deploy";
import UpdatePage from "./pages/Update/Update";
import { Dapp } from "./pages/Dapp/Dapp";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<LandingPage />} />
        <Route path="/Create" element={<CreatePage />} />
        <Route path="/Update" element={<UpdatePage />} />
        <Route path="/Deploy" element={<DeployPage />} />
        <Route
          path="/visit"
          element={
            <Dapp
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
              name="modernMash"
              imgSrc="https://i.seadn.io/gcs/files/c3bde3d8552abf7e8bc037c0284f5943.jpg?auto=format&w=1000"
              remaining={450}
              price="0.015"
              DarkVibrant="#286f7b"
              Vibrant="#fff3cb"
              Function="Presale"
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
