import React from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap";
import { IoIosArrowBack } from "react-icons/io";
const Detail = () => {
  const { state } = useLocation();
  return (
    <div className="card" style={{ width: "15rem" }}>
      <img
        className="card-img-top"
        src={state !== null ? state.avatar : ""}
        alt=""
      />
      <div className="card-body">
        <h5 className="card-title">
          {state !== null ? state.first_name : ""}{" "}
          {state !== null ? state.last_name : ""}
        </h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          ID: {state !== null ? state.id : ""}
        </li>
        <li className="list-group-item">{state !== null ? state.email : ""}</li>
      </ul>
      <div className="card-body">
        <Link to={"/users"} style={{ textDecoration: "none" }}>
          <IoIosArrowBack />
          back
        </Link>
      </div>
    </div>
  );
};

export default Detail;
