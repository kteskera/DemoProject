import React from "react";
const Home = () => {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src="https://reactjs.org/logo-og.png"
          alt="logo"
        />
        <div className="card-body">
          <h5 className="card-title">Demo app</h5>
          <p className="card-text" style={{ "text-align": "justify" }}>
            Welcome! This is a demo project. Used api is free Reqres. Check the
            link down below for more info.
          </p>
          <a href="https://reqres.in/" className="btn btn-primary ">
            Reqres
          </a>
        </div>
      </div>
    </div>
  );
};
export default Home;
