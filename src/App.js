import React from "react";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/user/john">User John</Link>
          </li>
          <li>
            <Link to="/user/peter">USer Peter</Link>
          </li>
        </ul>
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
