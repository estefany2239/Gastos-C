import React from 'react';
import { 
  Box, Typography, Button, Container, Grid, Paper, Stack, Card, CardContent, Divider 
} from '@mui/material';
import { 
  PersonAddOutlined as UserIcon, 
  AppRegistrationOutlined as RegisterIcon, 
  AssessmentOutlined as AnalysisIcon,
  SecurityOutlined as SecurityIcon, 
  TimerOutlined as SpeedIcon,
  AutoGraphOutlined as AnalyticsIcon,
  DiamondOutlined as DiamondIcon,
  Facebook,
  Instagram,
  LinkedIn
} from '@mui/icons-material';

export const Content = () => {
  const goldGradient = 'linear-gradient(45deg, #8A6E2F 7%, #CBB276 30%, #E1C57E 52%, #CBB276 71%, #8A6E2F 95%)';
  const blackDark = '#000000';
  const goldSolid = '#D4AF37';

  const pasos = [
    { id: 1, title: "PASO 1", text: "Regístrate o inicia sesión. Crea tu cuenta en segundos.", icon: <UserIcon /> },
    { id: 2, title: "PASO 2", text: "Registra tus gastos. Monto, categoría, fecha y nota.", icon: <RegisterIcon />, highlight: true },
    { id: 3, title: "PASO 3", text: "Analiza y decide. Reportes mensuales y recomendaciones.", icon: <AnalysisIcon /> }
  ];

  const features = [
    { 
      title: "Seguridad Nivel Oro", 
      desc: "Tus datos financieros están protegidos con encriptación de grado bancario.",
      icon: <SecurityIcon sx={{ fontSize: 40 }} />
    },
    { 
      title: "Sincronización Real", 
      desc: "Accede a tu información desde cualquier dispositivo en tiempo real.",
      icon: <SpeedIcon sx={{ fontSize: 40 }} />
    },
    { 
      title: "Análisis Inteligente", 
      desc: "IA personalizada que te ayuda a identificar fugas de capital innecesarias.",
      icon: <AnalyticsIcon sx={{ fontSize: 40 }} />
    },
    { 
      title: "Membresía VIP", 
      desc: "Accede a beneficios exclusivos y asesoría financiera personalizada.",
      icon: <DiamondIcon sx={{ fontSize: 40 }} />
    }
  ];

  return (
    <Box sx={{ bgcolor: '#ffffff', overflowX: 'hidden' }}>
      <Container maxWidth="lg" sx={{ py: 10 }}>
        
        {/* --- SECCIÓN 1: HERO (PASOS) --- */}
        <Grid container spacing={5} alignItems="center" sx={{ mb: 12 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h2" sx={{ 
              fontWeight: 900, 
              fontFamily: "'Playfair Display', serif",
              color: blackDark,
              lineHeight: 1.1,
              mb: 3
            }}>
              En 3 pasos <br /> sencilla y 
              <span style={{ 
                background: goldGradient,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginLeft: '10px'
              }}>
                eficaz
              </span>
            </Typography>

            <Stack spacing={2} sx={{ mb: 4 }}>
              {pasos.map((paso) => (
                <Paper key={paso.id} elevation={0} sx={{ 
                  p: 2, 
                  borderRadius: '15px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 2,
                  border: paso.highlight ? `2px solid ${goldSolid}` : '1px solid #eee',
                  boxShadow: paso.highlight ? '0 10px 20px rgba(212, 175, 55, 0.2)' : 'none'
                }}>
                  <Box sx={{ 
                    background: goldGradient, 
                    p: 1.5, 
                    borderRadius: '10px', 
                    color: 'white',
                    display: 'flex'
                  }}>
                    {paso.icon}
                  </Box>
                  <Box>
                    <Typography sx={{ 
                      fontWeight: 900, 
                      fontSize: '0.7rem', 
                      background: goldGradient,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
                      {paso.title}
                    </Typography>
                    <Typography sx={{ fontWeight: 600, color: '#333' }}>{paso.text}</Typography>
                  </Box>
                </Paper>
              ))}
            </Stack>

            <Button sx={{ 
              background: goldGradient, 
              color: 'white', 
              fontWeight: 'bold', 
              px: 5, py: 2, 
              borderRadius: '50px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
              '&:hover': { filter: 'brightness(1.1)', transform: 'translateY(-2px)' },
              transition: 'all 0.3s ease'
            }}>
              Empezar ahora
            </Button>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ 
              position: 'relative',
              p: 1,
              background: goldGradient,
              borderRadius: '40px',
              maxWidth: '100%'
            }}>
              <Box component="img" src="/img/find.jpg" sx={{ 
                width: '100%',
                borderRadius: '35px', 
                display: 'block' 
              }} />
            </Box>
          </Grid>
        </Grid>

        {/* --- SECCIÓN 2: MÉTRICAS (FRANJA NEGRA) --- */}
        <Box sx={{ 
          bgcolor: blackDark, 
          borderRadius: '30px', 
          p: 6, 
          mb: 12, 
          color: 'white',
          textAlign: 'center',
          border: `1px solid ${goldSolid}`
        }}>
          <Grid container spacing={4} justifyContent="center">
            {[
              { label: "Usuarios Activos", val: "10K+" },
              { label: "Gastos Analizados", val: "$2M+" },
              { label: "Ahorro Promedio", val: "25%" },
              { label: "Beneficios Exclusivos", val: "50+" },
              { label: "Reportes Generados", val: "100K+" },
            ].map((stat, i) => (
              <Grid item xs={12} sm={4} md={2.4} key={i}>
                <Typography variant="h4" sx={{ 
                  fontWeight: 900, 
                  background: goldGradient, 
                  WebkitBackgroundClip: 'text', 
                  WebkitTextFillColor: 'transparent' 
                }}>
                  {stat.val}
                </Typography>
                <Typography variant="caption" sx={{ color: '#aaa', letterSpacing: 1, textTransform: 'uppercase' }}>
                  {stat.label}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* --- SECCIÓN 3: CARACTERÍSTICAS (TARJETAS ALINEADAS) --- */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h4" sx={{ fontWeight: 900, fontFamily: "'Playfair Display', serif", mb: 2 }}>
            Aquí estamos <span style={{ color: '#8A6E2F' }}>Para ti</span>
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mb: 12 }}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index} sx={{ display: 'flex' }}>
              <Card sx={{ 
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '25px',
                border: '2px solid rgba(255, 213, 117, 0.3)',
                bgcolor: 'rgba(255, 255, 255, 0.6)',
                backdropFilter: 'blur(10px)',
                transition: '0.3s',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '0 20px 40px rgba(138, 110, 47, 0.15)',
                  border: `2px solid ${goldSolid}`
                }
              }}>
                <CardContent sx={{ textAlign: 'center', p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <Box sx={{ 
                    mb: 2, 
                    display: 'inline-flex',
                    background: goldGradient,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    {feature.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 800, mb: 1, color: blackDark, fontSize: '1rem' }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666', lineHeight: 1.6 }}>
                    {feature.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', py: 8, borderTop: '1px solid #eee' }}>
          <Typography variant="h3" sx={{ fontWeight: 900, mb: 3, fontFamily: "'Playfair Display', serif" }}>
            Eleva tu estilo de vida <br /> financiero
          </Typography>
          <Typography sx={{ color: '#777', mb: 5, maxWidth: '600px', mx: 'auto' }}>
            Únete a la élite que ya controla sus gastos con precisión y elegancia. 
            El éxito financiero comienza con una decisión inteligente.
          </Typography>
          <Button sx={{ 
            border: '2px solid black',
            color: 'black',
            fontWeight: 'bold',
            px: 6, py: 2,
            borderRadius: '15px',
            '&:hover': { bgcolor: 'black', color: 'white' },
            transition: '0.3s'
          }}>
            SOLICITAR ACCESO
          </Button>
        </Box>

      </Container>
    </Box>
  );
};

export default Content;