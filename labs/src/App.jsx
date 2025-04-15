import React, { useState } from "react"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/components/laba2/navbar";
import Button from "./components/components/laba2/button";
import Container from "./components/components/laba2/container";
import LabsPage from "./pages/lab3_pages";
import { ThemeProvider } from "D:/React/ssrvp/labs/src/laba4/theme_context.jsx";
import ThemeToggle from "D:/React/ssrvp/labs/src/laba4/theme_toggle.jsx";
import UseHooksPage from "D:/React/ssrvp/labs/src/laba4/usehooks.jsx";
import Page1 from "D:/React/ssrvp/labs/src/laba4/page1.jsx";  
import Page2 from "D:/React/ssrvp/labs/src/laba4/page2.jsx";  
import CounterPage from "D:/React/ssrvp/labs/src/laba4/counter_page.jsx";
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
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <ThemeToggle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/labs" element={<LabsPage />} />
          <Route path="/hooks" element={<UseHooksPage />} />
          <Route path="/page1" element={<Page1 />} />  
          <Route path="/page2" element={<Page2 />} />  
          <Route path="/counter" element={<CounterPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}


export default App;
