import React, { useState, useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  List,
  ListItem,
} from "@mui/material";

export default function Feedback() {
  const { register, handleSubmit, reset } = useForm();
  const [feedbacks, setFeedbacks] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const email = localStorage.getItem("currentUserEmail");
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = storedUsers.find((user) => user.email === email);
  
    if (foundUser) {
      setCurrentUser(foundUser);
      setFeedbacks(foundUser.feedbacks || []);
    }
  }, []);

  const onSubmit = useCallback(
    (data) => {
      if (!currentUser) return;

      const updatedFeedbacks = [...feedbacks, data.message];
      setFeedbacks(updatedFeedbacks);

      const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

      const updatedUsers = storedUsers.map((user) =>
        user.email === currentUser.email
          ? { ...user, feedbacks: updatedFeedbacks }
          : user
      );

      localStorage.setItem("users", JSON.stringify(updatedUsers));
      reset();
    },
    [currentUser, feedbacks, reset]
  );

  return (
    <Container maxWidth="sm">
      <Typography variant="h5" sx={{ mt: 4 }}>
        Форма обратной связи
      </Typography>
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          fullWidth
          label="Ваш отзыв"
          multiline
          rows={4}
          margin="normal"
          {...register("message", { required: true })}
        />
        <Button type="submit" variant="contained">
          Отправить
        </Button>
      </Box>
      <List>
        {feedbacks.map((msg, idx) => (
          <ListItem key={idx}>{msg}</ListItem>
        ))}
      </List>
    </Container>
  );
}
