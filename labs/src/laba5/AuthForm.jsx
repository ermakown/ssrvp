import React from "react";
import { useForm } from "react-hook-form";
import { Button, TextField, Typography, Container, Box, Stack } from "@mui/material";

export const validateEmail = (email) => {
  const re = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
  return re.test(email) || "Введите нормальный email";
};

export default function AuthForm({ onLogin, onRegister }) {
  const { register, handleSubmit, formState: { errors }, getValues } = useForm();

  return (
    <Container maxWidth="xs">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" align="center">Авторизация / Регистрация</Typography>
        <TextField
          fullWidth
          label="Email"
          margin="normal"
          {...register("email", { 
            required: "Email обязателен",
            validate: validateEmail
          })}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          fullWidth
          label="Пароль"
          type="password"
          margin="normal"
          {...register("password", { required: "Пароль обязателен" })}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
          <Button fullWidth variant="contained" onClick={() => onLogin(getValues())}>
            Войти
          </Button>
          <Button fullWidth variant="outlined" onClick={() => onRegister(getValues())}>
            Зарегистрироваться
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}