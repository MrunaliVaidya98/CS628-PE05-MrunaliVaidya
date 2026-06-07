import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Recipe Finder</Link>
        <div className="navbar-nav">
          <Link className="nav-link" to="/">Recipe List</Link>
          <Link className="nav-link" to="/add">Add Recipe</Link>
        </div>
      </div>
    </nav>
  );
}
