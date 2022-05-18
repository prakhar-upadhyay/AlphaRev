import React from "react";
import "./App.css";
import SideMenu from "../component/SideMenu";
import Header from "../component/Header";
import Option_but from "../component/Option_but";

import Dashboard from "../component/Dashboard";
import Reviewed_Alerts from "../component/Reviewed_Alerts";

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <SideMenu />
      <Header />
      {/* <Lex_but/> */}
      {/* <Option_but/> */}
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/review_alert" element={<Reviewed_Alerts />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
