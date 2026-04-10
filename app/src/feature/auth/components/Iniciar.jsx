import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { iniciarSesion } from '../services/authApi';
import { 
  Box, Card, TextField, Button, Typography, 
  Container, Stack, InputAdornment, Divider 
} from '@mui/material';
import { EmailOutlined, LockOutlined, ChevronRight } from '@mui/icons-material';

const Iniciar = ({ setIsAuthenticated }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  // Colores Premium
  const GOLD_GRADIENT = 'linear-gradient(135deg, #a67c00 0%, #D4AF37 50%, #a67c00 100%)';
  const GOLD_SOLID = '#D4AF37';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await iniciarSesion(formData);
      if (data.token) {
        localStorage.setItem('token', data.token);
        setIsAuthenticated(true);
        navigate('/dashboard');
      }
    } catch (error) {
      alert(error.response?.data?.mensaje || "No se pudo iniciar sesión");
    }
  };

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      background: 'linear-gradient(180deg, #ffffff 0%, #fcfaf5 100%)' 
    }}>
      <Container maxWidth="xs">
        <Card sx={{ 
          p: { xs: 4, sm: 5 }, 
          borderRadius: '35px', 
          boxShadow: '0 25px 70px rgba(212, 175, 55, 0.12)', 
          border: '1px solid rgba(212, 175, 55, 0.2)',
          bgcolor: '#ffffff',
          textAlign: 'center',
          position: 'relative',
          overflow: 'visible'
        }}>
          
          {/* Logo o Icono decorativo superior */}
          <Box sx={{ 
            width: 60, height: 60, bgcolor: GOLD_SOLID, borderRadius: '20px', 
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '-70px auto 20px', boxShadow: '0 10px 25px rgba(212, 175, 55, 0.4)'
          }}>
            <LockOutlined sx={{ color: '#fff', fontSize: 30 }} />
          </Box>

          <Typography variant="h4" sx={{ 
            fontWeight: 900, mb: 1, background: GOLD_GRADIENT, 
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' 
          }}>
            ENTRAR
          </Typography>
          
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 4 }}>
            Bienvenida de nuevo, Estefany
          </Typography>

          <form onSubmit={handleSubmit}>
            <Stack spacing={2.5}>
              <TextField 
                label="Correo Electrónico" 
                name="email" 
                fullWidth 
                onChange={handleChange} 
                required 
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailOutlined sx={{ color: GOLD_SOLID }} />
                    </InputAdornment>
                  ),
                  sx: { borderRadius: '18px' }
                }}
              />

              <TextField 
                label="Contraseña" 
                name="password" 
                type="password" 
                fullWidth 
                onChange={handleChange} 
                required 
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockOutlined sx={{ color: GOLD_SOLID }} />
                    </InputAdornment>
                  ),
                  sx: { borderRadius: '18px' }
                }}
              />

              <Button 
                type="submit" 
                variant="contained" 
                fullWidth
                sx={{ 
                  background: GOLD_GRADIENT, py: 2, borderRadius: '18px', 
                  fontWeight: 800, fontSize: '0.95rem', mt: 1,
                  boxShadow: '0 8px 20px rgba(166, 124, 0, 0.25)',
                  '&:hover': { opacity: 0.9, transform: 'scale(1.02)' },
                  transition: 'all 0.3s'
                }}
              >
                INICIAR SESIÓN
              </Button>
            </Stack>
          </form>

          <Divider sx={{ my: 4, opacity: 0.6 }}>O</Divider>

          {/* --- AQUÍ ESTÁ EL ENLACE DE REGISTRO ELEGANTE --- */}
          <Box>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              ¿Aún no tienes una cuenta?
            </Typography>
            <NavLink 
              to="/registrar" 
              style={{ 
                color: GOLD_SOLID, 
                textDecoration: 'none', 
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                marginTop: '8px',
                fontSize: '1rem'
              }}
            >
              Regístrate ahora <ChevronRight sx={{ fontSize: 20 }} />
            </NavLink>
          </Box>
        </Card>
      </Container>
    </Box>
  );
};

export default Iniciar;