import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <div>
        <Route
          exact
          path="/"
          render={() => {
            return <h1>Welcome Home</h1>;
          }}
        />
        <Route
          path="/about"
          render={() => {
            return <h1>Welcome About</h1>;
          }}
        />
      </div>
    </Router>
  );
};

export default App;
