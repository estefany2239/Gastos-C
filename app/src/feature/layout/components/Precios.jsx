import React from 'react';
import { Box, Container, Typography, Grid, Card, Button, Stack, Divider } from '@mui/material';
import { CheckCircleOutline } from '@mui/icons-material';

const GOLD_GRADIENT = 'linear-gradient(135deg, #a67c00 0%, #D4AF37 50%, #a67c00 100%)';

export const Precios = () => {
  return (
    <Box sx={{ py: 10, bgcolor: '#ffffff' }} id="precios">
      <Container maxWidth="md">
        <Typography variant="h3" sx={{ 
          textAlign: 'center', fontWeight: 900, mb: 2,
          background: GOLD_GRADIENT, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
        }}>
          PLANES A TU MEDIDA
        </Typography>
        <Typography variant="body1" align="center" sx={{ color: 'text.secondary', mb: 8 }}>
          Elige la experiencia que mejor se adapte a tus finanzas
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Card sx={{ 
              p: 5, borderRadius: '35px', position: 'relative',
              border: '2px solid #D4AF37',
              boxShadow: '0 20px 50px rgba(212, 175, 55, 0.15)',
              textAlign: 'center'
            }}>
              <Typography variant="h6" sx={{ color: '#D4AF37', fontWeight: 800, mb: 1 }}>MEMBRESÍA GOLD</Typography>
              <Typography variant="h2" sx={{ fontWeight: 900, mb: 4 }}>$0<span style={{ fontSize: '20px' }}>/mes</span></Typography>
              
              <Divider sx={{ mb: 4 }} />
              
              <Stack spacing={2} sx={{ mb: 4, textAlign: 'left' }}>
                <Stack direction="row" spacing={1}><CheckCircleOutline sx={{ color: '#D4AF37' }} /> <Typography>Registros Ilimitados</Typography></Stack>
                <Stack direction="row" spacing={1}><CheckCircleOutline sx={{ color: '#D4AF37' }} /> <Typography>Reportes en Tiempo Real</Typography></Stack>
                <Stack direction="row" spacing={1}><CheckCircleOutline sx={{ color: '#D4AF37' }} /> <Typography>Soporte 24/7</Typography></Stack>
              </Stack>

              <Button fullWidth sx={{ 
                background: GOLD_GRADIENT, color: '#fff', py: 2, borderRadius: '15px', 
                fontWeight: 800, fontSize: '1rem', boxShadow: '0 10px 20px rgba(166, 124, 0, 0.3)'
              }}>
                EMPEZAR AHORA
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};