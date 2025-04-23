import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  List,
  ListItem,
  IconButton,
  ListItemText,
  CircularProgress,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFeedbacks,
  submitFeedback,
  removeFeedback,
} from "D:/React/ssrvp/labs/src/laba6/feedbackSlice.js";

export default function Feedback() {
  const dispatch = useDispatch();
  const { list: feedbacks, loading } = useSelector((state) => state.feedback);
  const currentUserEmail = useSelector((state) => state.auth.currentUserEmail);
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (currentUserEmail) {
      dispatch(fetchFeedbacks(currentUserEmail));
    }
  }, [dispatch, currentUserEmail]);

  const onSubmit = (data) => {
    if (!currentUserEmail) return;
    dispatch(submitFeedback({ userEmail: currentUserEmail, message: data.message }));
    reset();
  };

  const handleDelete = (id) => {
    dispatch(removeFeedback(id));
  };

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

      <Typography variant="h6" sx={{ mt: 4 }}>
        Мои отзывы
      </Typography>

      {loading ? (
        <CircularProgress sx={{ mt: 2 }} />
      ) : (
        <List>
          {feedbacks.map((fb) => (
            <ListItem
              key={fb.id}
              secondaryAction={
                <IconButton edge="end" onClick={() => handleDelete(fb.id)}>
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemText primary={fb.message} />
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
}
