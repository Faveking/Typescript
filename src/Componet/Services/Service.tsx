import React from "react";
import "./Service.css";
import { DataInfo } from "../Data/Data";
const Service = () => {
  return (
    <div>
      {/* fhf */}

      {DataInfo.map((item: any) => (
        <>
          <div className="images-section">
              <div className="images-display">
        <div className="our-services">
          <p>Our Blog</p>
          <div className="div-divider"></div>
        </div>


          <div>
            <img src={item.image} />
            <p className="heading-title">Web Design</p>
            <p className="heading-description">
              Focus on how you can help and benefit your user. Use simple words
              so that you don't confuse people.
            </p>
          </div>
      <div>
        <img src={item.img}alt="" />
        <p className="heading-title">{item.title}</p>
        <p className="heading-description">{item.description}</p>
      </div>


        </div>
      </div>
        </>
      ))}

      {/* bdudlu */}
    </div>
  );
};

export default Service;
