import React from "react";
import { useHistory } from "react-router-dom";

let Signup = () => {
  let history = useHistory();
  return (
    <>
      <div className="row">
        <div className="col-4 offset-4">
          <form className="mt-4">
            <h1 className="mt-4 mb-4">SignUp</h1>
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

            <div className="mb-3">
              <label for="exampleInputPassword2" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword2"
              />
            </div>
            <br />
            <button type="submit" className="btn btn-primary">
              SignUp
            </button>
            <br />
            <br />
            <button
              onClick={() => {
                history.push("/login");
              }}
              type="submit"
              className="btn btn-primary"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
