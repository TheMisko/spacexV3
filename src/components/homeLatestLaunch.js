import React, { useState, useEffect } from "react";

const HomeLatestLaunch = () => {
  const [latestLaunchInfo, setLatestLaunchInfo] = useState(null);

  const [show, setShow] = useState(true);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await fetch(
        `https://api.spacexdata.com/v3/launches/latest`
      );
      const data = await response.json();
      setLatestLaunchInfo(data);

      console.log(data);
    } catch (error) {
      console.log("error:", error);
    }
  };
  return (
    <div className="latest-launch-container">
      {latestLaunchInfo ? (
        <div>
          {" "}
          <h1>Latest Launch</h1>{" "}
          <div className="latest-launch-info">
            <h2>Mission name : {latestLaunchInfo.mission_name}</h2>
            <h2>Rocket : {latestLaunchInfo.rocket.rocket_name}</h2>
            <h2>
              Launch date : {latestLaunchInfo.launch_date_utc.slice(0, 10)}
            </h2>
            <h2>Launch site : {latestLaunchInfo.launch_site.site_name_long}</h2>
            <p>{latestLaunchInfo.details}</p>
            <a
              style={{ textDecoration: "none" }}
              href={latestLaunchInfo.links.article_link}
            >
              More
            </a>
            <div className="latest-images">
              {latestLaunchInfo.links.flickr_images.map(images => (
                <img src={images} />
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default HomeLatestLaunch;
