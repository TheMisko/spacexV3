import React, { useState } from "react";

const LaunchInfoImages = ({ images, show, setShow }) => {
  const [mainImage, setMainImage] = useState("");

  const setImage = img => {
    setMainImage(img);
    setShow(true);
  };
  console.log(show);
  return (
    <div className="images-container">
      {show ? (
        <div>
          {" "}
          <div className="main-img">
            <div className="small-images">
              <div onClick={() => setShow(false)} className="close2">
                <button>Close</button>
              </div>
              {images.map(smallImg => (
                <div className="background">
                  <img onClick={() => setMainImage(smallImg)} src={smallImg} />
                </div>
              ))}
              <div onClick={() => setShow(false)} className="close"></div>
            </div>
            <img src={mainImage} />
          </div>
        </div>
      ) : null}

      {images.map(img => (
        <div className="images">
          <img onClick={() => setImage(img)} src={img} />
        </div>
      ))}
    </div>
  );
};

export default LaunchInfoImages;
