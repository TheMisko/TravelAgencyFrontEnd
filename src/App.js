import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import "./App.css";
import Destinacija from "./pages/destinacija";
import Home from "./pages/home";
import Pretrazi from "./pages/pretrazi";
import Onama from "./pages/o_nama";
import Destinacije from "./pages/destinacije";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/pretrazi" component={Pretrazi} />
        <Route exact path="/o_nama" component={Onama} />
        <Route exact path="/destinacija/:id" component={Destinacija} />
        <Route exact path="/destinacije" component={Destinacije} />
      </div>
    </BrowserRouter>
  );
}

export default App;
