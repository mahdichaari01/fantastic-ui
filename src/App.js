import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Page } from "./components/Page";
import { ShowcaseSection } from "./components/Showcase";
import CreatePage from "./pages/Create/Create";
import DeployPage from "./pages/Deploy/Deploy";
import UpdatePage from "./pages/Update/Update";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={
            <Page>
              <ShowcaseSection />
            </Page>
          }
        />
        <Route path="/Create" element={<CreatePage />} />
        <Route path="/Update" element={<UpdatePage />} />
        <Route path="/Deploy" element={<DeployPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
