import React, { useState } from 'react';
import { 
  Box, Container, Typography, Grid, Paper, TextField, 
  Button, MenuItem, Table, TableBody, TableCell, 
  TableContainer, TableHead, TableRow, Card, Stack, IconButton
} from '@mui/material';
import { 
  Save, AccountBalanceWallet, Logout, DeleteOutline 
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const GOLD_PRIMARY = '#D4AF37'; 
const GOLD_LIGHT = '#F9F6EE';   
const GOLD_DARK = '#996515';    
const GOLD_GRADIENT = 'linear-gradient(135deg, #a67c00 0%, #D4AF37 50%, #a67c00 100%)';

const Dashboard = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const [listaDeGastos, setListaDeGastos] = useState([]);
  const [form, setForm] = useState({
    fecha: '', categoria: '', descripcion: '', valor: '', responsable: ''
  });

  // --- FUNCIÓN DE CERRAR SESIÓN ---
  const handleLogout = () => {
    localStorage.removeItem('token'); // Borra la llave
    setIsAuthenticated(false);        // Apaga el estado global
    navigate('/iniciar', { replace: true }); // Expulsa al login
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleGuardar = () => {
    if (!form.fecha || !form.valor || !form.descripcion) {
      alert("¡Estefany, llena los campos antes de guardar!");
      return;
    }
    const nuevoRegistro = { ...form, id: Date.now() };
    setListaDeGastos([...listaDeGastos, nuevoRegistro]);
    setForm({ fecha: '', categoria: '', descripcion: '', valor: '', responsable: '' });
  };

  return (
    <Box sx={{ background: 'linear-gradient(180deg, #ffffff 0%, #fcfaf5 100%)', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="lg">
        
        {/* HEADER ELEGANTE */}
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 4 }}>
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 900, background: GOLD_GRADIENT, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              GASTOS DIARIOS
            </Typography>
            <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
              PANEL DE CONTROL PREMIUM
            </Typography>
          </Box>
          
          <Button 
            variant="contained" 
            startIcon={<Logout />}
            onClick={handleLogout}
            sx={{ 
              background: GOLD_GRADIENT, 
              borderRadius: '15px',
              px: 3,
              textTransform: 'none',
              fontWeight: 800,
              boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)',
              '&:hover': { opacity: 0.9 }
            }}
          >
            Cerrar Sesión
          </Button>
        </Stack>

        <Grid container spacing={3}>
          {/* FORMULARIO */}
          <Grid item xs={12} md={8}>
            <Paper elevation={0} sx={{ p: 4, borderRadius: '25px', border: '1px solid rgba(212, 175, 55, 0.2)', mb: 3, boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
              <Typography variant="h6" sx={{ mb: 3, color: GOLD_DARK, display: 'flex', alignItems: 'center', gap: 1, fontWeight: 700 }}>
                <AccountBalanceWallet sx={{ color: GOLD_PRIMARY }} /> Nuevo Registro
              </Typography>
              
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Fecha" type="date" name="fecha" value={form.fecha} onChange={handleChange} InputLabelProps={{ shrink: true }} variant="outlined" InputProps={{ sx: { borderRadius: '12px' }}} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth select label="Categoría" name="categoria" value={form.categoria} onChange={handleChange} variant="outlined" InputProps={{ sx: { borderRadius: '12px' }}}>
                    <MenuItem value="Comida">Comida</MenuItem>
                    <MenuItem value="Transporte">Transporte</MenuItem>
                    <MenuItem value="Servicios">Servicios</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Descripción" name="descripcion" value={form.descripcion} onChange={handleChange} variant="outlined" InputProps={{ sx: { borderRadius: '12px' }}} />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField fullWidth label="Valor" name="valor" type="number" value={form.valor} onChange={handleChange} variant="outlined" InputProps={{ sx: { borderRadius: '12px' }}} />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField fullWidth select label="Responsable" name="responsable" value={form.responsable} onChange={handleChange} variant="outlined" InputProps={{ sx: { borderRadius: '12px' }}}>
                    <MenuItem value="Estefany">Estefany</MenuItem>
                    <MenuItem value="Carlos">Carlos</MenuItem>
                    <MenuItem value="María">María</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={12} sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
                  <Button variant="contained" onClick={handleGuardar} startIcon={<Save />} sx={{ background: GOLD_GRADIENT, borderRadius: '12px', px: 4, fontWeight: 800 }}>
                    GUARDAR
                  </Button>
                </Grid>
              </Grid>
            </Paper>

            {/* TABLA */}
            <TableContainer component={Paper} elevation={0} sx={{ borderRadius: '25px', border: '1px solid rgba(0,0,0,0.05)', overflow: 'hidden' }}>
              <Table size="medium">
                <TableHead sx={{ bgcolor: GOLD_LIGHT }}>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 800, color: GOLD_DARK }}>Fecha</TableCell>
                    <TableCell sx={{ fontWeight: 800, color: GOLD_DARK }}>Categoría</TableCell>
                    <TableCell sx={{ fontWeight: 800, color: GOLD_DARK }}>Valor</TableCell>
                    <TableCell sx={{ fontWeight: 800, color: GOLD_DARK }}>Responsable</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {listaDeGastos.length === 0 ? (
                    <TableRow><TableCell colSpan={4} align="center" sx={{ py: 6, color: 'text.disabled', fontStyle: 'italic' }}>No hay registros disponibles</TableCell></TableRow>
                  ) : (
                    listaDeGastos.map((item) => (
                      <TableRow key={item.id} hover>
                        <TableCell sx={{ fontWeight: 600 }}>{item.fecha}</TableCell>
                        <TableCell>{item.categoria}</TableCell>
                        <TableCell sx={{ fontWeight: 800, color: GOLD_PRIMARY }}>${Number(item.valor).toLocaleString()}</TableCell>
                        <TableCell>{item.responsable}</TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>

          {/* RESUMEN */}
          <Grid item xs={12} md={4}>
            <Card elevation={0} sx={{ p: 4, borderRadius: '25px', border: `1.5px solid ${GOLD_PRIMARY}`, bgcolor: '#fff', boxShadow: '0 15px 40px rgba(212,175,55,0.1)' }}>
              <Typography variant="h6" sx={{ color: GOLD_DARK, mb: 3, fontWeight: 800 }}>Resumen de Cuenta</Typography>
              <Stack spacing={2}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography color="text.secondary">Registros:</Typography>
                  <Typography fontWeight={700}>{listaDeGastos.length}</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography color="text.secondary">Total Gastado:</Typography>
                  <Typography variant="h5" sx={{ fontWeight: 900, color: GOLD_PRIMARY }}>
                    ${listaDeGastos.reduce((acc, curr) => acc + Number(curr.valor), 0).toLocaleString()}
                  </Typography>
                </Box>
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Dashboard;