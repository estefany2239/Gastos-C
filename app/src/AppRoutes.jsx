import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Box } from '@mui/material';

// Importación de Layout
import { Header } from './feature/layout/components/Header';
import { Content } from './feature/layout/components/Content';
import { Footer } from './feature/layout/components/Footer';

// --- IMPORTA LOS NUEVOS COMPONENTES AQUÍ ---
import { Beneficios } from './feature/layout/components/Beneficios';
import { Precios } from './feature/layout/components/Precios';

// Importación de Autenticación
import Iniciar from './feature/auth/components/Iniciar';
import Registrar from './feature/auth/components/Registrar';

// Importación de Funcionalidades
import Dashboard from './feature/dashboard/pages/Dashboard';
import ApiRyc_Axios from './shared/components/ApiRyc_Axios';

export function AppRoutes() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return !!localStorage.getItem('token'); 
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  return (
    <HashRouter>
      <Header 
        isAuthenticated={isAuthenticated} 
        setIsAuthenticated={setIsAuthenticated} 
        notificacionesCount={3} 
      />

      <Box component="main" sx={{ pt: '20px', minHeight: '80vh' }}>
        <Routes>
          {/* --- RUTAS PÚBLICAS PRINCIPALES --- */}
          <Route path="/" element={<Content />} />
          
          {/* --- NUEVAS RUTAS QUE ME PEDISTE --- */}
          <Route path="/beneficios" element={<Beneficios />} />
          <Route path="/precios" element={<Precios />} />
          
          <Route 
            path="/iniciar" 
            element={!isAuthenticated ? <Iniciar setIsAuthenticated={setIsAuthenticated} /> : <Navigate to="/dashboard" />} 
          />
          
          <Route 
            path="/registrar" 
            element={!isAuthenticated ? <Registrar setIsAuthenticated={setIsAuthenticated} /> : <Navigate to="/dashboard" />} 
          />
          
          <Route path="/apis" element={<Box sx={{ p: 2 }}><ApiRyc_Axios /></Box>} />

          {/* --- RUTA PROTEGIDA --- */}
          <Route 
            path="/dashboard" 
            element={
              isAuthenticated ? (
                <Dashboard setIsAuthenticated={setIsAuthenticated} /> 
              ) : (
                <Navigate to="/iniciar" />
              )
            } 
          />
          
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Box>

      <Footer />
    </HashRouter>
  );
}

export default AppRoutes;