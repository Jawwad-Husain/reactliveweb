import React from "react";
import web from "../src/pictures/about.jpg";
import {NavLink} from "react-router-dom"
import Common from "./common";
const About = () => {
  return(
    <>
<Common 
name="Welcome To About Page"
imgsrc={web}
visit="/contact"
btname="Contact Now"
/>
</>
  );

};
export default About;