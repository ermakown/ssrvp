import React from "react"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/components/laba2/navbar";
import Button from "./components/components/laba2/button";
import Container from "./components/components/laba2/container";
import LabsPage from "./pages/lab3_pages";
import { ThemeProvider } from "D:/React/ssrvp/labs/src/laba4/theme_context.jsx";
import ThemeToggle from "D:/React/ssrvp/labs/src/laba4/theme_toggle.jsx";
import UseHooksPage from "D:/React/ssrvp/labs/src/laba4/usehooks.jsx"; 
import CounterPage from "D:/React/ssrvp/labs/src/laba4/counter_page.jsx";
import AuthForm, { validateEmail } from "D:/React/ssrvp/labs/src/laba5/AuthForm.jsx";
import Feedback from "D:/React/ssrvp/labs/src/laba5/Feedback.jsx";
import ProfileEditor from "D:/React/ssrvp/labs/src/laba6/ProfileEditor.jsx";
import { Button as MuiButton, Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "D:/React/ssrvp/labs/src/laba6/authSlice.js";
import { Link } from "react-router-dom";
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
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("currentUserEmail");
    localStorage.removeItem("currentUserId");
    localStorage.setItem("isLoggedIn", "false");
  };

  if (!isLoggedIn) {
    return <AuthForm />;
  }

  return (
    <ThemeProvider>
      <Router>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 2,
          }}
        >
          <Navbar />
          <Box sx={{ display: "flex", gap: 2 }}>
            <MuiButton component={Link} to="/profile" variant="outlined">
              Профиль
            </MuiButton>
            <MuiButton variant="outlined" color="error" onClick={handleLogout}>
              Выйти
            </MuiButton>
          </Box>
        </Box>
        <ThemeToggle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/labs" element={<LabsPage />} />
          <Route path="/hooks" element={<UseHooksPage />} />
          <Route path="/counter" element={<CounterPage />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/profile" element={<ProfileEditor />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
