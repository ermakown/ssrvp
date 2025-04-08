import React, { useState } from "react";
import { Box, Container, Grid } from "@mui/material";
import Header from "../components/components/laba3/Header.jsx";
import Footer from "../components/components/laba3/Footer.jsx";
import Menu from "../components/components/laba3/Menu.jsx";
import Content from "../components/components/laba3/Content.jsx";

export default function LabsPage() {
  const [selectedLab, setSelectedLab] = useState(null);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header /> 
      <Container sx={{ flex: 1, mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Menu onSelect={setSelectedLab} />
          </Grid>
          <Grid item xs={12} md={9}>
            {selectedLab && <Content lab={selectedLab} />}
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Box>
  );
}
