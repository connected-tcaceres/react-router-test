import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, NavLink, Redirect, Prompt } from "react-router-dom";
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
              User Peter
            </NavLink>
          </li>
        </ul>
        <Prompt
          when={!auth.loggedIn}
          message={location => {
            return location.pathname.startsWith("/user") ? "Are you sure?" : true;
          }}
        ></Prompt>
        <input type="button" value={auth.loggedIn ? "logout" : "login"} onClick={loginHandle}></input>

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
        <Route
          exact
          path="/user/:username"
          render={({ match }) => (auth.loggedIn ? <User username={match.params.username} /> : <Redirect to="/" />)}
        />
      </div>
    </Router>
  );
};

const User = ({ username }) => {
  return <h1> Welcome User {username}</h1>;
};

export default App;
