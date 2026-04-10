import React, { useState } from 'react';
import { 
  AppBar, Toolbar, Typography, Button, IconButton, Badge, 
  Box, Stack, Avatar, Drawer, List, ListItem, ListItemButton, 
  ListItemIcon, ListItemText, Menu, MenuItem, Divider 
} from '@mui/material';
import { 
  Menu as MenuIcon, 
  HomeOutlined as HomeIcon,
  AutoAwesomeOutlined as BenefitsIcon,
  LocalOfferOutlined as PricesIcon,
  CodeOutlined as ApisIcon, 
  NotificationsOutlined as NotificationsIcon,
  LogoutOutlined as LogoutIcon,
  PersonOutline as PersonIcon
} from '@mui/icons-material';
import { NavLink, useNavigate } from 'react-router-dom';

export const Header = ({ notificacionesCount = 3, isAuthenticated, setIsAuthenticated }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  // Paleta de colores elegantes
  const colors = {
    cream: '#fffafb',       
    softGold: 'rgba(212, 175, 55, 0.1)',    
    goldGradient: 'linear-gradient(135deg, #a67c00 0%, #bf9b30 25%, #ffcf40 50%, #bf9b30 75%, #a67c00 100%)',
    goldSolid: '#D4AF37', 
    black: '#000000',          
    text: '#000000',          
    glass: 'rgba(255, 255, 255, 0.90)' 
  };

  const handleOpenUserMenu = (event) => setAnchorEl(event.currentTarget);
  const handleCloseUserMenu = () => setAnchorEl(null);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const handleLogout = () => {
    handleCloseUserMenu();
    setMobileOpen(false);
    if (setIsAuthenticated) {
      setIsAuthenticated(false);
      localStorage.removeItem('token'); 
    }
    navigate('/iniciar');
  };

  const menuItems = [
    { text: 'Inicio', to: '/', icon: <HomeIcon /> },
    { text: 'APIs', to: '/apis', icon: <ApisIcon /> }, 
    { text: 'Beneficios', to: '/beneficios', icon: <BenefitsIcon /> },
    { text: 'Precios', to: '/precios', icon: <PricesIcon /> },
  ];

  return (
    <header>
      <Box sx={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1300, display: 'flex', justifyContent: 'center', pt: 2 }}>
        <Box sx={{ 
          width: '94%', maxWidth: '1200px', bgcolor: colors.glass, 
          backdropFilter: 'blur(15px)', border: `2px solid ${colors.black}`, 
          borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', overflow: 'hidden'
        }}>
          <AppBar position="static" color="default" elevation={0} sx={{ bgcolor: 'transparent' }}>
            <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 5 }, minHeight: '70px' }}>
              
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton onClick={handleDrawerToggle} sx={{ mr: 1, display: { md: 'none' }, color: colors.black }}>
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" sx={{ fontWeight: 900, fontSize: '1.6rem', cursor: 'pointer' }} onClick={() => navigate('/')}>
                  <span style={{ background: colors.goldGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Gas</span>
                  <span style={{ color: colors.black }}>Tos</span>
                </Typography>
              </Box>

              {/* Menú Desktop */}
              <Stack direction="row" spacing={0.5} sx={{ display: { xs: 'none', md: 'flex' } }}>
                {menuItems.map((item) => (
                  <Button 
                    key={item.text} component={NavLink} to={item.to} startIcon={item.icon}
                    sx={{ 
                      fontSize: '0.85rem', fontWeight: 700, textTransform: 'none', color: colors.text,
                      borderRadius: '30px', px: 2,
                      '&.active': { background: colors.goldGradient, color: 'white', '& .MuiButton-startIcon': { color: 'white' } },
                      '&:hover': { bgcolor: colors.softGold }
                    }}
                  >
                    {item.text}
                  </Button>
                ))}
              </Stack>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IconButton sx={{ color: colors.black }}>
                  <Badge 
                    badgeContent={notificacionesCount} 
                    color="error"
                    sx={{ '& .MuiBadge-badge': { right: -2, top: 2, border: '2px solid white' } }}
                  >
                    <NotificationsIcon />
                  </Badge>
                </IconButton>

                {isAuthenticated ? (
                  <>
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar sx={{ 
                        width: 40, height: 40, background: colors.goldGradient, 
                        border: `2px solid ${colors.black}`, fontWeight: 'bold', color: '#fff'
                      }}>E</Avatar>
                    </IconButton>
                    
                    <Menu
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handleCloseUserMenu}
                      PaperProps={{ sx: { borderRadius: '15px', mt: 1.5, border: `1px solid ${colors.goldSolid}`, minWidth: '180px' } }}
                    >
                      <Box sx={{ px: 2, py: 1 }}>
                        <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>Estefany</Typography>
                        <Typography variant="caption" color="text.secondary">Software Developer</Typography>
                      </Box>
                      <Divider />
                      <MenuItem onClick={handleCloseUserMenu} component={NavLink} to="/perfil">
                        <ListItemIcon><PersonIcon fontSize="small" /></ListItemIcon>
                        Mi Perfil
                      </MenuItem>
                      <MenuItem onClick={handleLogout} sx={{ color: 'error.main' }}>
                        <ListItemIcon><LogoutIcon fontSize="small" sx={{ color: 'error.main' }} /></ListItemIcon>
                        Cerrar Sesión
                      </MenuItem>
                    </Menu>
                  </>
                ) : (
                  <Button 
                    component={NavLink} to="/iniciar" variant="contained" 
                    sx={{ 
                      borderRadius: '20px', textTransform: 'none', fontWeight: 800, 
                      background: colors.goldGradient, color: 'white'
                    }}
                  >
                    Iniciar Sesión
                  </Button>
                )}
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
      </Box>

      {/* Menú Móvil (Drawer) */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ '& .MuiDrawer-paper': { width: 280, borderRadius: '0 20px 20px 0', bgcolor: colors.cream } }}
      >
        <Box sx={{ p: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h6" sx={{ fontWeight: 900, mb: 3, textAlign: 'center' }}>MENÚ</Typography>
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton 
                  component={NavLink} to={item.to} onClick={handleDrawerToggle}
                  sx={{ borderRadius: '10px', mb: 1, '&.active': { bgcolor: colors.softGold, color: colors.goldSolid } }}
                >
                  <ListItemIcon sx={{ minWidth: 40 }}>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} primaryTypographyProps={{ fontWeight: 700 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Box sx={{ mt: 'auto', p: 1 }}>
            {isAuthenticated ? (
              <Button onClick={handleLogout} fullWidth startIcon={<LogoutIcon />} sx={{ color: 'error.main', fontWeight: 'bold' }}>
                Cerrar Sesión
              </Button>
            ) : (
              <Button 
                component={NavLink} to="/iniciar" fullWidth onClick={handleDrawerToggle}
                sx={{ borderRadius: '10px', background: colors.goldGradient, color: 'white', fontWeight: 'bold' }}
              >
                Iniciar Sesión
              </Button>
            )}
          </Box>
        </Box>
      </Drawer>
      
      <Box sx={{ height: '100px' }} />
    </header>
  );
};