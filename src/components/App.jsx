import React from "react";
import "./app.less";
import { Route, Routes } from "react-router-dom";
import Main from "./main/Main";
import { Card } from "./card/Card";
import ErrorPage from "./errorPage/ErrorPage";

const App = () => {
  return (
    <div className="container">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/song" element={<Card />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
    </div>
  );
};

export default App;
