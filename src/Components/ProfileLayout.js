import React from "react";
import "../Styles/Profile.css";
import img from "../assets/profile.jpg";
const ProfileLayout = () => {
  return (
    <div className="profile">
      <img src={img} alt=" hello"></img>
      <div className="profile-name">
        <h5>JP Singh</h5>
        <p>Web Developer</p>
      </div>
    </div>
  );
};

export default ProfileLayout;
