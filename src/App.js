import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
const App = () => {
  const [auth, setAuth] = useState({ loggedIn: false });

  const loginHandle = () => {
    setAuth({ loggedIn: !auth.loggedIn });
  };
  return (
    <Router>
      <div>
        <ul>
          <li>
            <NavLink to="/" exact activeStyle={{ color: "green" }}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" exact activeStyle={{ color: "green" }}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/user/john" exact activeStyle={{ color: "green" }}>
              User John
            </NavLink>
          </li>
          <li>
            <NavLink to="/user/peter" exact activeStyle={{ color: "green" }}>
              USer Peter
            </NavLink>
          </li>
        </ul>
        <input type="button" value="log in" onClick={loginHandle}></input>

        <Route
          exact
          path="/"
          render={() => {
            return <h1>Welcome Home</h1>;
          }}
        />
        <Route
          exact
          path="/about"
          render={() => {
            return <h1>Welcome About</h1>;
          }}
        />
        <Route exact path="/user/:username" component={User} />
      </div>
    </Router>
  );
};

const User = ({ match }) => {
  return <h1> Welcome User {match.params.username}</h1>;
};

export default App;
