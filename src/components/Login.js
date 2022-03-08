import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../actions/auth";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/App.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  const onChangeUsername = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(email, password))
      .then(() => {
        setLoading(true);
        //TODO validations
      })
      .catch(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  });

  return (
    <div className="container" style={{ width: "18rem" }}>
      <div className="card-body text-center">
        <h4 className="card-title ">Login</h4>
        <hr />
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Email adress"
              value={email}
              onChange={onChangeUsername}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              className="form-control"
              name="password"
              value={password}
              onChange={onChangePassword}
              required
            />
          </div>

          <button className="btn btn-primary btn-lg btn-block mt-2">
            Login
          </button>

          {message && (
            <div className="form-group">
              <div className="alert alert-danger mt-2" role="alert">
                {"Login failed. Wrong username or password!"}
              </div>
            </div>
          )}
          <p>
            <br />
            Email: eve.holt@reqres.in
            <br />
            Password: cityslicka
          </p>
        </form>
      </div>
    </div>
  );
};
export default Login;
