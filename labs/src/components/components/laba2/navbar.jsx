// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "10px" }}>
      <Link to="/">1 стр.</Link>
      <Link to="/about">2 стр.</Link>
      <Link to="/labs">Лабораторные</Link>
      <Link to="/hooks">useState и useEffect</Link>
      {/* <Link to="/page1">5 стр.</Link>
      <Link to="/page2">6 стр.</Link> */}
      <Link to="/counter">Счётчик</Link>
    </nav>
  );
}

export default Navbar;
