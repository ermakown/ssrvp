import React from "react";
import AuthForm, { validateEmail } from "D:/React/ssrvp/labs/src/laba5/AuthForm.jsx";
import { useLoginState } from "D:/React/ssrvp/labs/src/laba5/useLoginState.js";

export function useAuthHandlers() {
  const [isLoggedIn, setIsLoggedIn] = useLoginState();

  const handleLogin = (data) => {
    const emailValidation = validateEmail(data.email);
    if (emailValidation !== true) {
      alert(emailValidation);
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (user) => user.email === data.email && user.password === data.password
    );

    if (user) {
      setIsLoggedIn(true);
      localStorage.setItem("currentUserEmail", data.email);
    } else {
      alert("Неверный email или пароль");
    }
  };

  const handleRegister = (data) => {
    const emailValidation = validateEmail(data.email);
    if (emailValidation !== true) {
      alert(emailValidation);
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find((user) => user.email === data.email);

    if (existingUser) {
      alert("Этот email уже зарегистрирован");
      return;
    }

    const newUser = {
      email: data.email,
      password: data.password,
      feedbacks: [],
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Регистрация успешна! Теперь войдите.");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("currentUserEmail");
  };

  return { isLoggedIn, handleLogin, handleRegister, handleLogout };
}
