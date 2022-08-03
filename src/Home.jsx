import React from "react";
import web from "../src/pictures/img1-removebg-preview.png"
import {NavLink} from "react-router-dom"
import Sdata from "./Sdata";
import Card from "./Card";
import Common from "./common";
const Home = () => {
  return(
    <>
<Common
name="Grow Your Bussiness With"
imgsrc={web}
visit="/service"
btname="Get Started"
/>
<Common 
name="Welcome To About Page"
imgsrc={web}
visit="/contact"
btname="Contact Now"
/>

<div className="my-5">
      <h1 className="text-center">
        Our Services
      </h1>
    </div>
<div className="container-fluid mb-5">
<div className="row">
<div className="col-10 mx-auto">
<div className="row gy-4">
{
  Sdata.map(( val, ind ) =>{
    return <Card
    key={ind}
    imgsrc={val.imgsrc} 
    title={val.title}  
    />
  })
}
</div>
</div>
</div>
</div>

    </>
  );

};
export default Home;