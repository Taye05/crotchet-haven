import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import useSticky from "./hooks/useSticky.js";
import Welcome from "./components/Header/Welcome";
import Navbar from "./components/Header/Navbar";
import About from "./components/Header/About.js";
import Footer from "./components/Footer";

function App() {
  const { isSticky, element } = useSticky();
  return (
    <>
      <Navbar sticky={isSticky} />
      <Welcome element={element} />
      <BrowserRouter>
        <Switch>
          <Route path="/" element={element} exact component={Welcome} />
          <Route path="/about" element component={About} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
