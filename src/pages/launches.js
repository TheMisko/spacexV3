import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LaunchesCard from "../components/launchesCard";
import Nav from "../components/nav";
import Loader from "../components/loader";

const Launches = () => {
  const [launches, setLaunches] = useState(null);
  const [firstIndex, setFirstIndex] = useState(0);
  const [secondIndex, setSecondIndex] = useState(10);

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const response = await fetch(`https://api.spacexdata.com/v3/launches`);
      const data = await response.json();
      setLaunches(data);

      console.log(data);
    } catch (error) {
      console.log("error:", error);
      //   setInfo("INFORAMTION NOT FOUND");
    }
  };

  const paginationIndex = [
    { first: 0, second: 10 },
    { first: 11, second: 21 },
    { first: 22, second: 32 },
    { first: 33, second: 43 },
    { first: 44, second: 54 },
    { first: 55, second: 65 },
    { first: 66, second: 76 },
    { first: 77, second: 87 },
    { first: 88, second: 98 }
  ];
  const change = (first, second) => {
    setFirstIndex(first);
    setSecondIndex(second);
  };

  console.log(launches);
  return (
    <>
      {" "}
      <div className="nejmar">
        <Nav />
        <div className="pagination">
          {paginationIndex.map((page, index) => (
            <a
              onClick={() => change(page.first, page.second)}
              className="button1"
            >
              {index + 1}
            </a>
          ))}
        </div>
        {launches ? (
          <div>
            {" "}
            <div className="lauches-container">
              <div className="launches-flex">
                {launches.slice(firstIndex, secondIndex).map(launch => (
                  <Link
                    to={`/launchDetails/${launch.flight_number}`}
                    style={{ textDecoration: "none" }}
                  >
                    {" "}
                    <div className="details-margin">
                      <LaunchesCard data={launch} />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="loading">
            <div className="block"></div>
            <Loader />
          </div>
        )}
      </div>
    </>
  );
};

export default Launches;
