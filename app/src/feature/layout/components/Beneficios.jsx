import React from 'react';
import { 
  Box, Container, Typography, Grid, Card, Stack, 
  Avatar, Chip, Paper, Divider 
} from '@mui/material';
import { 
  ShieldMoon, Speed, AutoAwesome, Insights,
  Language, AccountBalance, Psychology, Devices,
  CloudDone, CardMembership, SupportAgent, Bolt
} from '@mui/icons-material';

const GOLD_PRIMARY = '#D4AF37';
const GOLD_DARK = '#996515';
const GOLD_GRADIENT = 'linear-gradient(135deg, #a67c00 0%, #D4AF37 50%, #a67c00 100%)';

// AHORA SON 8 BENEFICIOS PARA LLENAR LA PANTALLA
const beneficiosPrincipales = [
  { t: "Seguridad Total", d: "Encriptación de grado bancario.", i: <ShieldMoon /> },
  { t: "Rapidez Extrema", d: "Registros en menos de 3 segundos.", i: <Speed /> },
  { t: "Reportes Pro", d: "Gráficos de ahorro inteligentes.", i: <Insights /> },
  { t: "Categorización IA", d: "Organización automática con IA.", i: <AutoAwesome /> },
  { t: "Sincronización", d: "Tus datos en todos tus dispositivos.", i: <Devices /> },
  { t: "Nube Privada", d: "Respaldo automático garantizado.", i: <CloudDone /> },
  { t: "Soporte 24/7", d: "Asistencia técnica especializada.", i: <SupportAgent /> },
  { t: "Modo Offline", d: "Registra incluso sin conexión.", i: <Bolt /> },
];

export const Beneficios = () => {
  return (
    <Box sx={{ pb: 10, pt: 8, bgcolor: '#ffffff', minHeight: '100vh' }}>
      <Container maxWidth="lg">
        
        {/* ENCABEZADO PRINCIPAL */}
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <Chip label="ELITE MEMBERSHIP" sx={{ mb: 2, fontWeight: 900, color: GOLD_DARK, borderColor: GOLD_PRIMARY, letterSpacing: 2 }} variant="outlined" />
          <Typography variant="h2" sx={{ 
            fontWeight: 900, 
            background: GOLD_GRADIENT, 
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent',
            fontSize: { xs: '2.5rem', md: '3.5rem' }
          }}>
            Todo lo que Necesitas
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mt: 2, fontWeight: 500 }}>
            La gestión financiera más avanzada diseñada para la comunidad SENA.
          </Typography>
        </Box>

        {/* REJILLA DE 8 TARJETAS (2 filas de 4) */}
        <Grid container spacing={3} justifyContent="center">
          {beneficiosPrincipales.map((item, index) => (
            <Grid item xs={12} sm={6} md={2.8} key={index} sx={{ display: 'flex' }}>
              <Card sx={{ 
                p: 3, 
                width: '100%', 
                minHeight: '220px', 
                borderRadius: '30px', 
                border: '1px solid rgba(212, 175, 55, 0.15)',
                boxShadow: '0 8px 25px rgba(0,0,0,0.02)',
                transition: '0.4s ease',
                background: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                '&:hover': { 
                  transform: 'translateY(-10px)', 
                  boxShadow: '0 15px 35px rgba(212, 175, 55, 0.15)',
                  borderColor: GOLD_PRIMARY
                }
              }}>
                <Stack spacing={2} alignItems="center" textAlign="center">
                  <Avatar sx={{ bgcolor: 'rgba(212, 175, 55, 0.06)', width: 55, height: 55 }}>
                    {React.cloneElement(item.i, { sx: { fontSize: 28, color: GOLD_PRIMARY } })}
                  </Avatar>
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 800, color: GOLD_DARK, mb: 0.5 }}>
                      {item.t}
                    </Typography>
                    <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 500 }}>
                      {item.d}
                    </Typography>
                  </Box>
                </Stack>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* NUEVA SECCIÓN: ESTADÍSTICAS Y CONFIANZA */}
        <Box sx={{ mt: 12, mb: 12 }}>
          <Grid container spacing={4} justifyContent="center">
             {[
               { n: "+10k", label: "Descargas" },
               { n: "4.9", label: "Estrellas" },
               { n: "100%", label: "Seguro" },
               { n: "Gratis", label: "Para Estudiantes" }
             ].map((stat, i) => (
               <Grid item xs={6} md={2} key={i} sx={{ textAlign: 'center' }}>
                 <Typography variant="h4" sx={{ fontWeight: 900, color: GOLD_DARK }}>{stat.n}</Typography>
                 <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.secondary', textTransform: 'uppercase' }}>{stat.label}</Typography>
               </Grid>
             ))}
          </Grid>
        </Box>

        {/* NUEVA SECCIÓN: TESTIMONIO DESTACADO */}
        <Paper elevation={0} sx={{ 
          p: { xs: 4, md: 8 }, 
          borderRadius: '50px', 
          background: GOLD_GRADIENT, 
          color: 'white',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography variant="h4" sx={{ fontWeight: 900, mb: 2 }}>
                "Cambié mi libreta de gastos por esta App y es lo mejor que he hecho."
              </Typography>
              <Typography variant="h6" sx={{ opacity: 0.9, fontWeight: 400 }}>
                Estefany - Desarrolladora FullStack
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
              <CardMembership sx={{ fontSize: 100, opacity: 0.3 }} />
            </Grid>
          </Grid>
        </Paper>

        {/* PRÓXIMAS INNOVACIONES ACHICADAS */}
        <Box sx={{ mt: 10 }}>
          <Typography variant="h6" sx={{ textAlign: 'center', fontWeight: 800, color: GOLD_DARK, mb: 4, opacity: 0.7 }}>
            PRÓXIMAMENTE
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {["Multi-moneda", "Inversiones IA", "Metas de Ahorro", "Exportar PDF"].map((text, i) => (
              <Grid item xs={6} sm={3} md={2} key={i}>
                <Box sx={{ 
                  p: 1.5, textAlign: 'center', borderRadius: '15px', 
                  border: '1px dashed #D4AF37', opacity: 0.6 
                }}>
                  <Typography variant="caption" sx={{ fontWeight: 700, color: GOLD_DARK }}>
                    {text}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

      </Container>
    </Box>
  );
};

export default Beneficios;