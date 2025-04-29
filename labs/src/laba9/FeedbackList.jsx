import React from 'react';
import { useGetFeedbacksQuery } from 'D:/React/ssrvp/labs/src/laba9/feedbacksApi.js';
import { CircularProgress, Alert, List, ListItem, ListItemText, Container, Typography } from '@mui/material';

export default function FeedbackList() {
  const { data, isError, isLoading, isFetching } = useGetFeedbacksQuery();

  if (isLoading || isFetching) {
    return (
      <Container sx={{ mt: 4, textAlign: 'center' }}>
        <CircularProgress />
      </Container>
    );
  }

  if (isError) {
    return (
      <Container sx={{ mt: 4 }}>
        <Alert severity="error">Ошибка при загрузке отзывов</Alert>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>Отзывы пользователей</Typography>
      <List>
        {data.length > 0 ? (
          data.map((fb) => (
            <ListItem key={fb.id}>
              <ListItemText
                primary={fb.message}
                secondary={`От пользователя: ${fb.userEmail}`}
              />
            </ListItem>
          ))
        ) : (
          <Typography variant="body1">Отзывов пока нет.</Typography>
        )}
      </List>
    </Container>
  );
}
