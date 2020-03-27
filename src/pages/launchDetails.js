import React, { useState, useEffect } from "react";
import Nav from "../components/nav";

const LaunchDetails = ({ match }) => {
  const [launch, setLaunch] = useState(null);

  const [backgroundImage, setBackgroundImage] = useState("");
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const response = await fetch(
        `https://api.spacexdata.com/v3/launches/${match.params.mission_id}`
      );
      const data = await response.json();
      setLaunch(data);
      setBackgroundImage(data.links.flickr_images[0]);
    } catch (error) {
      console.log("error:", error);
    }
  };
  console.log(launch);
  const changeBackground = img => {
    setBackgroundImage(img);
  };
  return (
    <div>
      {launch ? (
        <div>
          <div
            style={{
              backgroundImage: `url(${backgroundImage})`,
              width: "100vw",
              height: "fit-content",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover"
            }}
            className="launch-d-container"
          >
            {" "}
            <Nav />
            <div className="launch-d-info-container">
              <div className="launch-d-info">
                <h2>{launch.mission_name}</h2>
                <div className="card-success">
                  {launch.launch_success ? (
                    <div className="success">
                      <h3>Launch Successful</h3>
                    </div>
                  ) : (
                    <div className="epic-fail">
                      <h3>Launch Failed</h3>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="launch-d-d">
              <div className="launch-details">
                <h1> Mission name: {launch.mission_name}</h1>
                <h1> Launch site: {launch.launch_site.site_name}</h1>
                <h1> Launch date: {launch.launch_date_utc.slice(0, 10)}</h1>
                <p> {launch.details}</p>
                <div className="links">
                  <a href={launch.links.reddit_campaign}>
                    <img src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-reddit-circle-512.png" />
                  </a>
                  <a href={launch.links.presskit}>
                    <img src="https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/news-512.png" />
                  </a>
                  <a href={launch.links.video_link}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1280px-YouTube_full-color_icon_%282017%29.svg.png" />
                  </a>
                  <a href={launch.links.wikipedia}>
                    <img src="https://icons.iconarchive.com/icons/limav/flat-gradient-social/512/Wikipedia-icon.png" />
                  </a>
                </div>
              </div>
              <div className="launch-d-images">
                {launch.links.flickr_images.map(img => (
                  <img onClick={() => changeBackground(img)} src={img} />
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default LaunchDetails;
