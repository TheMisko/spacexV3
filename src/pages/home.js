import React from "react";
import Nav from "../components/nav";
import Quotes from "../components/quotes";
import HomeLatestLaunch from "../components/homeLatestLaunch";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <Nav />

        <Quotes />
        <div className="home-arrow">
          {" "}
          <a data-scroll href="#down">
            <div className="arrow"></div>
          </a>
        </div>
      </div>
      <div id="down">
        {" "}
        <HomeLatestLaunch />
      </div>
    </>
  );
};

export default Home;
