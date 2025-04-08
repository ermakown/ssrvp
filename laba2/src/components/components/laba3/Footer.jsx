import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box component="footer" sx={{ p: 2, mt: 'auto', textAlign: 'center', bgcolor: '#eee' }}>
      <Typography variant="body2">© 2025 Учебный проект</Typography>
    </Box>
  );
}
