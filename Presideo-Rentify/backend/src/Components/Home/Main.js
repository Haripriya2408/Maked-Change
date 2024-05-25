//importing react library from react in to this js file.
import React from "react";
//Outlet is used to render the content of nested route
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

//Arrow function short hand way of declare the function
const Main = () => {
  return (
    <div>
      {/**Rendering the Header component */}
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default Main;
