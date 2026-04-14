import React, { useState } from 'react';
import { 
  Box, Container, Typography, Grid, Paper, TextField, 
  Button, MenuItem, Table, TableBody, TableCell, 
  TableContainer, TableHead, TableRow, Card, Stack, IconButton, Autocomplete, Chip
} from '@mui/material';
import { 
  Save, AccountBalanceWallet, Logout, DeleteOutline, Edit, Close, Add 
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const GOLD_PRIMARY = '#D4AF37'; 
const GOLD_LIGHT = '#F9F6EE';   
const GOLD_DARK = '#996515';    
const GOLD_GRADIENT = 'linear-gradient(135deg, #a67c00 0%, #D4AF37 50%, #a67c00 100%)';

// Lista extendida de categorías
const CATEGORIAS = [
  "Comida", "Transporte", "Servicios Públicos", "Salud", 
  "Educación", "Entretenimiento", "Hogar", "Ropa", "Otros"
];

// Nombres sugeridos (puedes agregar más aquí)
const NOMBRES_SUGERIDOS = ["Estefany", "Carlos", "María", "Juan", "Empresa"];

const Dashboard = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const [listaDeGastos, setListaDeGastos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  
  const [form, setForm] = useState({
    fecha: '', categoria: '', descripcion: '', valor: '', responsable: ''
  });

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    navigate('/iniciar', { replace: true });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleGuardar = () => {
    if (!form.fecha || !form.valor || !form.responsable) {
      alert("¡Por favor, completa los campos principales!");
      return;
    }

    if (isEditing) {
      const nuevaLista = listaDeGastos.map(item => 
        item.id === currentId ? { ...form, id: currentId } : item
      );
      setListaDeGastos(nuevaLista);
      setIsEditing(false);
      setCurrentId(null);
    } else {
      const nuevoRegistro = { ...form, id: Date.now() };
      setListaDeGastos([...listaDeGastos, nuevoRegistro]);
    }
    setForm({ fecha: '', categoria: '', descripcion: '', valor: '', responsable: '' });
  };

  const handleEliminar = (id) => {
    if (window.confirm("¿Deseas eliminar este registro?")) {
      setListaDeGastos(listaDeGastos.filter(item => item.id !== id));
    }
  };

  const handlePreparaEdicion = (item) => {
    setForm({ ...item });
    setIsEditing(true);
    setCurrentId(item.id);
  };

  return (
    <Box sx={{ background: 'linear-gradient(180deg, #ffffff 0%, #fcfaf5 100%)', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="lg">
        
        {/* HEADER */}
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 4 }}>
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 900, background: GOLD_GRADIENT, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              GASTOS DIARIOS
            </Typography>
            <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600, letterSpacing: 1 }}>
              GESTIÓN FINANCIERA PERSONALIZADA
            </Typography>
          </Box>
          <Button variant="contained" startIcon={<Logout />} onClick={handleLogout} sx={{ background: GOLD_GRADIENT, borderRadius: '15px', fontWeight: 800 }}>
            Salir
          </Button>
        </Stack>

        <Grid container spacing={3}>
          {/* FORMULARIO */}
          <Grid item xs={12} md={8}>
            <Paper elevation={0} sx={{ p: 4, borderRadius: '25px', border: '1px solid rgba(212, 175, 55, 0.2)', mb: 3 }}>
              <Typography variant="h6" sx={{ mb: 3, color: GOLD_DARK, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 1 }}>
                <Add sx={{ color: GOLD_PRIMARY }} /> {isEditing ? "Actualizar Información" : "Registrar Nuevo Gasto"}
              </Typography>
              
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Fecha" type="date" name="fecha" value={form.fecha} onChange={handleChange} InputLabelProps={{ shrink: true }} variant="outlined" InputProps={{ sx: { borderRadius: '12px' }}} />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField fullWidth select label="Categoría" name="categoria" value={form.categoria} onChange={handleChange} variant="outlined" InputProps={{ sx: { borderRadius: '12px' }}}>
                    {CATEGORIAS.map((cat) => (
                      <MenuItem key={cat} value={cat}>{cat}</MenuItem>
                    ))}
                  </TextField>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Descripción" name="descripcion" value={form.descripcion} onChange={handleChange} variant="outlined" placeholder="Ej: Pago de luz" InputProps={{ sx: { borderRadius: '12px' }}} />
                </Grid>

                <Grid item xs={12} sm={3}>
                  <TextField fullWidth label="Valor" name="valor" type="number" value={form.valor} onChange={handleChange} variant="outlined" InputProps={{ sx: { borderRadius: '12px' }}} />
                </Grid>

                {/* CAMPO DE NOMBRE DINÁMICO (Elegir o escribir) */}
                <Grid item xs={12} sm={3}>
                  <Autocomplete
                    freeSolo
                    options={NOMBRES_SUGERIDOS}
                    value={form.responsable}
                    onChange={(event, newValue) => setForm({ ...form, responsable: newValue || '' })}
                    onInputChange={(event, newInputValue) => setForm({ ...form, responsable: newInputValue })}
                    renderInput={(params) => (
                      <TextField {...params} label="Responsable" variant="outlined" InputProps={{ ...params.InputProps, sx: { borderRadius: '12px' }}} />
                    )}
                  />
                </Grid>

                <Grid item xs={12} sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                  {isEditing && (
                    <Button variant="outlined" onClick={() => { setIsEditing(false); setForm({ fecha: '', categoria: '', descripcion: '', valor: '', responsable: '' }); }} startIcon={<Close />} sx={{ borderRadius: '12px' }}>
                      Cancelar
                    </Button>
                  )}
                  <Button variant="contained" onClick={handleGuardar} startIcon={<Save />} sx={{ background: GOLD_GRADIENT, borderRadius: '12px', px: 4, fontWeight: 800 }}>
                    {isEditing ? "ACTUALIZAR" : "GUARDAR GASTO"}
                  </Button>
                </Grid>
              </Grid>
            </Paper>

            {/* TABLA DE REGISTROS */}
            <TableContainer component={Paper} elevation={0} sx={{ borderRadius: '25px', border: '1px solid rgba(0,0,0,0.05)' }}>
              <Table>
                <TableHead sx={{ bgcolor: GOLD_LIGHT }}>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 800 }}>Fecha</TableCell>
                    <TableCell sx={{ fontWeight: 800 }}>Categoría</TableCell>
                    <TableCell sx={{ fontWeight: 800 }}>Valor</TableCell>
                    <TableCell sx={{ fontWeight: 800 }}>Responsable</TableCell>
                    <TableCell align="center" sx={{ fontWeight: 800 }}>Acciones</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {listaDeGastos.map((item) => (
                    <TableRow key={item.id} hover>
                      <TableCell>{item.fecha}</TableCell>
                      <TableCell>
                        <Chip label={item.categoria} size="small" sx={{ bgcolor: GOLD_LIGHT, color: GOLD_DARK, fontWeight: 600 }} />
                      </TableCell>
                      <TableCell sx={{ fontWeight: 800, color: GOLD_PRIMARY }}>${Number(item.valor).toLocaleString()}</TableCell>
                      <TableCell>{item.responsable}</TableCell>
                      <TableCell align="center">
                        <IconButton onClick={() => handlePreparaEdicion(item)} color="primary"><Edit fontSize="small" /></IconButton>
                        <IconButton onClick={() => handleEliminar(item.id)} color="error"><DeleteOutline fontSize="small" /></IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>

          {/* RESUMEN LATERAL */}
          <Grid item xs={12} md={4}>
            <Card elevation={0} sx={{ p: 4, borderRadius: '25px', border: `1.5px solid ${GOLD_PRIMARY}`, position: 'sticky', top: 20 }}>
              <Typography variant="h6" sx={{ color: GOLD_DARK, mb: 3, fontWeight: 800 }}>Resumen</Typography>
              <Stack spacing={3}>
                <Box>
                  <Typography variant="body2" color="text.secondary">Total de movimientos</Typography>
                  <Typography variant="h5" fontWeight={800}>{listaDeGastos.length}</Typography>
                </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary">Gasto Acumulado</Typography>
                  <Typography variant="h4" sx={{ fontWeight: 900, color: GOLD_PRIMARY }}>
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