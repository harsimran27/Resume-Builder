import React from "react";
import { useHistory } from "react-router-dom";

let Login = () => {
  let history = useHistory();
  return (
    <>
      <div className="row">
        <div className="col-4 offset-4">
          <form className="mt-4">
            <h1 className="mt-4 mb-4">Login</h1>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <br />
            <button type="submit" className="btn btn-primary">
              Login
            </button>
            <br />
            <br />
            <button
              onClick={() => {
                history.push("/signup");
              }}
              class="btn btn-primary"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
