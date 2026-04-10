import React, { useState } from 'react';
import { 
  Box, Card, TextField, Button, Typography, 
  Container, Stack, InputAdornment, Divider 
} from '@mui/material';
import { 
  PersonOutline, EmailOutlined, LockOutlined, ChevronLeft 
} from '@mui/icons-material';
import { useNavigate, NavLink } from 'react-router-dom';
import { registrarUsuario } from '../services/authApi';

const Registrar = ({ setIsAuthenticated }) => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  // Colores Premium Sincronizados
  const GOLD_GRADIENT = 'linear-gradient(135deg, #a67c00 0%, #D4AF37 50%, #a67c00 100%)';
  const GOLD_SOLID = '#D4AF37';

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await registrarUsuario(formData);
      if (data.token) {
        localStorage.setItem('token', data.token);
        setIsAuthenticated(true);
        navigate('/dashboard');
      }
    } catch (error) {
      alert(error.response?.data?.mensaje || "Error al crear cuenta");
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
          
          {/* Icono decorativo superior */}
          <Box sx={{ 
            width: 60, height: 60, bgcolor: GOLD_SOLID, borderRadius: '20px', 
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '-70px auto 20px', boxShadow: '0 10px 25px rgba(212, 175, 55, 0.4)'
          }}>
            <PersonOutline sx={{ color: '#fff', fontSize: 30 }} />
          </Box>

          <Typography variant="h4" sx={{ 
            fontWeight: 900, mb: 1, background: GOLD_GRADIENT, 
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' 
          }}>
            UNIRSE
          </Typography>
          
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 4 }}>
            Crea tu cuenta personalizada hoy
          </Typography>
          
          <form onSubmit={handleSubmit}>
            <Stack spacing={2.5}>
              <TextField 
                name="name" 
                placeholder="Nombre Completo" 
                fullWidth 
                onChange={handleChange} 
                required 
                InputProps={{ 
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonOutline sx={{ color: GOLD_SOLID }} />
                    </InputAdornment>
                  ),
                  sx: { borderRadius: '18px' } 
                }} 
              />
              
              <TextField 
                name="email" 
                placeholder="Correo Electrónico" 
                type="email" 
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
                name="password" 
                placeholder="Contraseña" 
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
                  background: GOLD_GRADIENT, 
                  py: 2, 
                  borderRadius: '18px', 
                  fontWeight: 800, 
                  fontSize: '0.95rem',
                  mt: 1,
                  boxShadow: '0 8px 20px rgba(166, 124, 0, 0.25)',
                  '&:hover': { opacity: 0.9, transform: 'scale(1.02)' },
                  transition: 'all 0.3s'
                }}
              >
                REGISTRARME
              </Button>
            </Stack>
          </form>

          <Divider sx={{ my: 4, opacity: 0.6 }}>O</Divider>

          <Box>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              ¿Ya tienes una cuenta?
            </Typography>
            <NavLink 
              to="/iniciar" 
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
              <ChevronLeft sx={{ fontSize: 20 }} /> Iniciar Sesión
            </NavLink>
          </Box>
        </Card>
      </Container>
    </Box>
  );
};

export default Registrar;