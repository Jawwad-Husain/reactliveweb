  import React from "react";
  import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
  import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
  import { Switch ,Route,Redirect } from "react-router-dom";
  import Home from "./Home";
  import About from "./About";
  import Contact from "./Contact";
  import Service from "./Service";
  import Contact2 from "./Contact2";
  import Navbar from "./Navbar";
  import Footer from "./Footer";
  const App = () => {
    return(
      <>
      <Navbar/>
      <Switch>
        <Route  exact path="/" component={Home}/>
        <Route  exact path="/About" component={About}/>
        <Route  exact path="/Contact" component={Contact}/>
        <Route  exact path="/Service" component={Service}/>
     <Redirect  to="/" />
      </Switch>
      <Contact2/>
      <Footer/>
      </>
    );

  };
  export default App;