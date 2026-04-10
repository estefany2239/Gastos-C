import React from 'react';
import { Box, Typography, Container, Grid, Link, IconButton, Divider } from '@mui/material';
import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(145deg, #e0e0e0 0%, #ffffff 50%, #bebebe 100%)',
        color: '#424242',
        py: 6,
        borderTop: '1px solid #bdbdbd',
        boxShadow: '0px -5px 20px rgba(0,0,0,0.05)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          
          <Grid item xs={12} md={4}>
            <Typography 
              variant="h6" 
              sx={{ fontWeight: 800, letterSpacing: 2, color: '#212121', mb: 2 }}
            >
              Gas <span style={{ fontWeight: 300 }}>Tos</span>
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8, lineHeight: 1.8 }}>
              Soluciones tecnológicas de alto nivel. Elevando el estándar de tus conexiones API con elegancia y precisión.
            </Typography>
          </Grid>

  
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>Navegación</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="#/beneficios" color="inherit" underline="none" sx={{ '&:hover': { color: '#000' } }}>Beneficios</Link>
              <Link href="#/precios" color="inherit" underline="none" sx={{ '&:hover': { color: '#000' } }}>Planes</Link>
              <Link href="#/apis" color="inherit" underline="none" sx={{ '&:hover': { color: '#000' } }}>Servicios API</Link>
            </Box>
          </Grid>

          <Grid item xs={12} md={3} sx={{ textAlign: { xs: 'left', md: 'right' } }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>Síguenos</Typography>
            <Box>
              <IconButton sx={{ color: '#424242', '&:hover': { color: '#9e9e9e' } }}><Facebook /></IconButton>
              <IconButton sx={{ color: '#424242', '&:hover': { color: '#9e9e9e' } }}><Instagram /></IconButton>
              <IconButton sx={{ color: '#424242', '&:hover': { color: '#9e9e9e' } }}><LinkedIn /></IconButton>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, backgroundColor: 'rgba(0,0,0,0.1)' }} />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
          <Typography variant="caption" sx={{ letterSpacing: 1 }}>
            © {new Date().getFullYear()} RYCAPIS. PREMIUM INTERFACE.
          </Typography>
          <Typography variant="caption" sx={{ fontWeight: 600 }}>
            DESIGNED FOR EXCELLENCE
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};