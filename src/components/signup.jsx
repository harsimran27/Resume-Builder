import { useState } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";

let Signup = () => {
  let history = useHistory();

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");

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
                value={email}
                onChange={(e) => {
                  setEmail(e.currentTarget.value);
                }}
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
                value={password}
                onChange={(e) => {
                  setPassword(e.currentTarget.value);
                }}
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
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.currentTarget.value);
                }}
                className="form-control"
                id="exampleInputPassword2"
              />
            </div>
            <br />
            <button
              onClick={(e) => {
                e.preventDefault();
                if (password === confirmPassword) {
                  auth.createUserWithEmailAndPassword(email, password);
                }
              }}
              class="btn btn-primary"
            >
              Sign Up
            </button>
            <br />
            <br />
            <button
              onClick={() => {
                history.push("/login");
              }}
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
