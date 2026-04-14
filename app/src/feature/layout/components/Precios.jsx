import React, { useState } from 'react';
import { 
  Box, Container, Typography, Grid, Card, Button, 
  Stack, Divider, Switch, Chip, Avatar, useTheme
} from '@mui/material';
import { 
  Check, WorkspacePremium, AutoAwesome, 
  Security, Speed, PieChart, Star
} from '@mui/icons-material';

const GOLD_GRADIENT = 'linear-gradient(135deg, #a67c00 0%, #D4AF37 50%, #a67c00 100%)';
const GLASS_EFFECT = 'rgba(255, 255, 255, 0.8)';

export const Precios = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  // Estilo para los beneficios (más visual, menos texto aburrido)
  const Benefit = ({ text, highlight }) => (
    <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
      <Avatar sx={{ width: 28, height: 28, bgcolor: highlight ? '#D4AF37' : '#f0f0f0' }}>
        <Check sx={{ fontSize: 18, color: highlight ? '#fff' : '#bdbdbd' }} />
      </Avatar>
      <Typography sx={{ fontWeight: highlight ? 700 : 500, color: highlight ? '#222' : '#666' }}>
        {text}
      </Typography>
    </Stack>
  );

  return (
    <Box sx={{ 
      py: 12, 
      background: 'radial-gradient(circle at top right, #fffdf5, #ffffff)', 
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Elementos decorativos de fondo para que no se vea vacío */}
      <Box sx={{ position: 'absolute', top: -100, left: -100, width: 400, height: 400, borderRadius: '50%', background: 'rgba(212, 175, 55, 0.03)', filter: 'blur(80px)' }} />
      <Box sx={{ position: 'absolute', bottom: -50, right: -50, width: 300, height: 300, borderRadius: '50%', background: 'rgba(0, 0, 0, 0.02)', filter: 'blur(60px)' }} />

      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          
          {/* LADO IZQUIERDO: TEXTO Y PROPUESTA DE VALOR */}
          <Grid item xs={12} lg={5}>
            <Stack spacing={3}>
              <Chip 
                icon={<AutoAwesome sx={{ color: '#D4AF37 !important' }} />} 
                label="MEMBRESÍAS 2026" 
                sx={{ width: 'fit-content', fontWeight: 900, bgcolor: 'rgba(212, 175, 55, 0.1)', color: '#996515', border: '1px solid rgba(212, 175, 55, 0.2)' }} 
              />
              <Typography variant="h2" sx={{ fontWeight: 900, lineHeight: 1.1 }}>
                Eleva tu <span style={{ background: GOLD_GRADIENT, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Estatus</span> Financiero
              </Typography>
              <Typography variant="h6" sx={{ color: 'text.secondary', fontWeight: 400, pr: { lg: 5 } }}>
                No es solo una app de gastos, es tu asistente personal de lujo para dominar cada moneda.
              </Typography>

              {/* Mini cards de características rápidas */}
              <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={6}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Security sx={{ color: '#D4AF37' }} />
                    <Typography variant="caption" fontWeight={700}>Cifrado 256-bit</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={6}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Speed sx={{ color: '#D4AF37' }} />
                    <Typography variant="caption" fontWeight={700}>Sincronización Cloud</Typography>
                  </Stack>
                </Grid>
              </Grid>

              <Stack direction="row" alignItems="center" spacing={2} sx={{ mt: 4, p: 1, bgcolor: '#f5f5f5', borderRadius: '50px', width: 'fit-content' }}>
                <Button 
                  onClick={() => setIsAnnual(false)}
                  sx={{ borderRadius: '50px', px: 3, bgcolor: !isAnnual ? '#fff' : 'transparent', color: '#000', boxShadow: !isAnnual ? '0 4px 10px rgba(0,0,0,0.1)' : 'none', fontWeight: 800 }}
                >
                  Mensual
                </Button>
                <Button 
                  onClick={() => setIsAnnual(true)}
                  sx={{ borderRadius: '50px', px: 3, bgcolor: isAnnual ? '#000' : 'transparent', color: isAnnual ? '#fff' : '#000', boxShadow: isAnnual ? '0 4px 10px rgba(0,0,0,0.2)' : 'none', fontWeight: 800 }}
                >
                  Anual -20%
                </Button>
              </Stack>
            </Stack>
          </Grid>

          {/* LADO DERECHO: LAS TARJETAS (DISEÑO FLOTANTE) */}
          <Grid item xs={12} lg={7}>
            <Box sx={{ position: 'relative', display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3, alignItems: 'center' }}>
              
              {/* CARD FREE - GLASSMORPHISM */}
              <Card sx={{ 
                p: 4, width: '100%', maxWidth: 320, borderRadius: '40px', 
                bgcolor: GLASS_EFFECT, backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.3)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.03)',
                zIndex: 1
              }}>
                <Typography variant="h6" fontWeight={900}>Básico</Typography>
                <Typography variant="h3" sx={{ my: 2, fontWeight: 900 }}>$0</Typography>
                <Divider sx={{ mb: 3 }} />
                <Benefit text="50 registros mensuales" />
                <Benefit text="Reportes semanales" />
                <Benefit text="Soporte por email" />
                <Button fullWidth variant="outlined" sx={{ mt: 2, borderRadius: '20px', py: 1.5, fontWeight: 800, color: '#000', borderColor: '#000' }}>
                  ELEGIR
                </Button>
              </Card>

              {/* CARD PREMIUM - DISEÑO "OVERLAP" (Sobresale) */}
              <Card sx={{ 
                p: 5, width: '100%', maxWidth: 360, borderRadius: '40px', 
                bgcolor: '#000', color: '#fff',
                boxShadow: '0 40px 80px rgba(212, 175, 55, 0.25)',
                transform: { md: 'scale(1.1)' },
                zIndex: 2,
                position: 'relative',
                overflow: 'visible'
              }}>
                {/* Badge flotante */}
                <Box sx={{ 
                  position: 'absolute', top: -20, left: '50%', transform: 'translateX(-50%)',
                  background: GOLD_GRADIENT, px: 3, py: 1, borderRadius: '50px',
                  display: 'flex', alignItems: 'center', gap: 1, boxShadow: '0 10px 20px rgba(166,124,0,0.4)'
                }}>
                  <Star sx={{ fontSize: 18 }} />
                  <Typography variant="caption" fontWeight={900}>RECOMENDADO</Typography>
                </Box>

                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Typography variant="h5" sx={{ color: '#D4AF37', fontWeight: 900 }}>GOLD ELITE</Typography>
                  <WorkspacePremium sx={{ color: '#D4AF37', fontSize: 40 }} />
                </Stack>

                <Stack direction="row" alignItems="baseline" spacing={1} sx={{ mt: 3, mb: 1 }}>
                  <Typography variant="h2" sx={{ fontWeight: 900 }}>{isAnnual ? '$79' : '$9'}</Typography>
                  <Typography variant="h6" sx={{ opacity: 0.6 }}>{isAnnual ? '/año' : '/mes'}</Typography>
                </Stack>
                <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)', mb: 4, display: 'block' }}>
                  *Acceso total a todas las herramientas futuras.
                </Typography>

                <Stack spacing={0.5} sx={{ mb: 4 }}>
                  <Benefit text="Registros ilimitados" highlight />
                  <Benefit text="Inteligencia Artificial" highlight />
                  <Benefit text="Exportación VIP (Excel/PDF)" highlight />
                  <Benefit text="Gestión de Patrimonio" highlight />
                </Stack>

                <Button fullWidth sx={{ 
                  background: GOLD_GRADIENT, color: '#fff', py: 2, borderRadius: '20px', 
                  fontWeight: 900, fontSize: '1rem', transition: '0.3s',
                  '&:hover': { transform: 'translateY(-3px)', boxShadow: '0 15px 30px rgba(166,124,0,0.5)' }
                }}>
                  OBTENER GOLD ELITE
                </Button>
              </Card>
            </Box>
          </Grid>
        </Grid>

        {/* SECCIÓN DE GRÁFICA MUESTRA (Solo visual) */}
        <Card sx={{ 
          mt: 12, p: 4, borderRadius: '50px', bgcolor: '#fafafa', border: '1px solid #eee',
          display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center', gap: 4
        }}>
          <Stack alignItems="center">
            <Typography variant="h4" fontWeight={900} sx={{ color: '#D4AF37' }}>+15k</Typography>
            <Typography variant="caption" fontWeight={700}>Usuarios Activos</Typography>
          </Stack>
          <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', md: 'block' } }} />
          <Stack alignItems="center">
            <Typography variant="h4" fontWeight={900} sx={{ color: '#D4AF37' }}>99.9%</Typography>
            <Typography variant="caption" fontWeight={700}>Uptime del Servidor</Typography>
          </Stack>
          <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', md: 'block' } }} />
          <Stack alignItems="center">
            <PieChart sx={{ fontSize: 40, color: '#D4AF37', mb: 1 }} />
            <Typography variant="caption" fontWeight={700}>Análisis Predictivo</Typography>
          </Stack>
        </Card>
      </Container>
    </Box>
  );
};