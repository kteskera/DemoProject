import React from "react";
import { useSelector } from "react-redux";
import "bootstrap";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="card">
      <div className="card-header">Profile</div>
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <p>{user !== null ? "Token key: " + user.token : "Prijavi se!"}</p>
        </blockquote>
      </div>
    </div>
  );
};
export default Profile;
