import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home";
import { useDispatch } from "react-redux";
import {userCreator} from "./redux/userAction"

import Login from "./components/login";
import Navbar from "./components/navbar";
import SignUp from "./components/signup";
import { auth, firestore } from "./firebase";

let App = () => {

  let dispatch = useDispatch();

  useEffect(() => {

    let unsub = auth.onAuthStateChanged(async (user) => {
      dispatch(userCreator(user));
      if (user) {
        let { uid, email } = user;
        let docRef = firestore.collection("users").doc(uid);

        let doc = await docRef.get();

        if (!doc.exists) {
          docRef.set({
            email,
          })
        }
      }
    })

    return () => {
      unsub();
    }

  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;