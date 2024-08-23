import React from "react";
import Header from "./components/header/header";
import "./App.css";
import Home from "./components/home/home";
import Graph from "./components/graph/graph";
import Work from "./components/work/work";
import Brands from "./components/brands/brands";
import Timeline from "./components/timeline/timeline";
import Footer from "./components/footer/footer";
import Social from "./components/social/social";

function App() {

  return (
    <>
      <div className="hidden-scrollbar app-parent-section ">
        <div className="hidden-scrollbar app-child-1" >
          <Header />
          <div style={{ marginTop: "7rem" }} >
            <div> <Home /> </div>
            <div> <Graph /> </div>
            <div> <Work /> </div>
            <div> <Brands /> </div>
            <div> <Timeline /> </div>
          </div>
        </div>
        <div> <Footer /> </div>
        <div> <Social /> </div>
      </div>
    </>
  );
}

export default App;
