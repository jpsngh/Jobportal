import React, { useContext } from "react";

import "../Styles/FullDetail.css";

import DetailContext from "../DetailContext";
const FullDetail = () => {
  const { detailState } = useContext(DetailContext);
 
  return (
    <div className="detail"  >
      <b className="detail-close">x</b>
      <div className="detail-header">
        <img src={detailState.data.image} alt=""></img>
        <h2>{detailState.data.company}</h2>
        <p>{detailState.data.field}</p>
      </div>
      <hr className="divider"></hr>
      <div className="detail-desc">
        <div className="about">
          <h4>Job Description</h4>
          <p> {detailState.data.desc} </p>
          <span> </span>
          <a href=" ">read more...</a>
          <hr className="divider"></hr>
          <h4>Qualifications</h4>
          <p> {detailState.data.qualification}</p>

          <div className="btn-apply">
            <a href={detailState.data.link}>
            <button className="btn"> Apply Now </button></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullDetail;
