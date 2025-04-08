import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav>
      <Link to="/">1 страница</Link> | <Link to="/about">2 страница</Link> | <Link to="/labs">Лабораторные</Link>
    </nav>
  );
}

export default Navbar;
