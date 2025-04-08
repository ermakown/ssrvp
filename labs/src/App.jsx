import React, { useState } from "react"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/components/laba2/navbar";
import Button from "./components/components/laba2/button";
import Container from "./components/components/laba2/container";
import LabsPage from "./pages/lab3_pages";
import "./App.css";

function Home() {
  return (
    <Container>
      <h1>Hello World</h1>
      <p>Как будто бы информация на первой странице сайта</p>
      <Button />
    </Container>
  );
}

function About() {
  return (
    <Container>
      <h1>2 страница</h1>
      <p>Как будто бы информация на второй странице сайта</p>
      <Button />
    </Container>
  );
}

function App() {
  const [selectedLab, setSelectedLab] = useState(null);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/labs" element={<LabsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
