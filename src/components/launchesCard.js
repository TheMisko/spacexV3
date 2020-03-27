import React from "react";

const LaunchesCard = ({ data }) => {
  console.log(data);
  return (
    <div className="card-container">
      <div className="card-img">
        <img src={data.links.mission_patch_small} />
      </div>

      <div className="card-info">
        <div className="name">
          <h3>{data.mission_name}</h3>
        </div>
        <div className="card-success">
          {data.launch_success ? (
            <div className="success">
              <p>Launch Successful</p>
            </div>
          ) : (
            <div className="epic-fail">
              <p>Launch Failed</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LaunchesCard;
