import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// We created a component with a simple arrow function.
const Header = props => {
  const { title = "Welcome to React", url = "http://localhost:3000" } = props;

  return (
    <header className="App-header">
      <h1 className="App-title">{title}</h1>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </header>
  );
};

// Even with Functional Components we are able to validate our PropTypes.
Header.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string
};

export default Header;
