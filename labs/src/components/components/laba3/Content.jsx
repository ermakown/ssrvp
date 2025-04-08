import { Paper, Typography } from '@mui/material';

export default function Content({ lab }) {
  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h5">{lab?.title || 'Выберите лабораторную работу'}</Typography>
      {lab && (
        <Typography variant="body1" sx={{ mt: 2 }}>
          Какое-то задание в {lab.title.toLowerCase()}.
        </Typography>
      )}
    </Paper>
  );
}
