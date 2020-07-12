import React from "react";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Navbar } from "./components/Navbar";

import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function RouteConfig() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="*" component={() => <h2>Error 404</h2>} />
        </Routes>
      </Router>
    </div>
  );
}
export default RouteConfig;
