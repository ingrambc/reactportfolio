import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/About";
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
        <Header />
        <Wrapper>
          <Route exact path="/portfolio" component={ Portfolio } />
          <Route exact path="/contact" component={ Contact } />
          <Route exact path={["/", "/about"]} component={ About } />
        </Wrapper> 
        <Footer />

    </Router>
  );
}

export default App;