import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";

//Opciones del menú principal
const pages = [
  { label: "Conversión de Imágenes", path: "/imgConv" },
  { label: "Conversión de Videos", path: "/vidConv" },
  { label: "Tutorial", path: "/tutorial" },
];
// Opciones del menú de usuario (avatar)
const settings = [
  { label: "Historial", path: "/historial" },
  { label: "Cerrar Sesión", path: "/" },
];

/**
 * Componente de barra de navegación superior.
 * Es completamente responsivo y permite acceso rápido a diferentes secciones
 * de la app, incluyendo opciones de usuario a través de un avatar.
 */
function NavBar() {
  const navigate = useNavigate();
  // Estados para controlar apertura de menús
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  // Abre menú del avatar de usuario
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  // Cierra menú de navegación
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // Cierra menú del usuario
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{ top: 0, left: 0, right: 0, backgroundColor: "blueviolet" }}
    >
      <Toolbar sx={{ justifyContent: "space-between", px: 2 }}>
        {/* Logo - clicable para volver al inicio después del login */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            paddingBottom: "none",
          }}
          onClick={() => navigate("/afterLogin")} // aquí rediriges a la página deseada
        >
          <img
            src="/LogoEasyConv.png"
            style={{
              height: "75px",
              width: "80px",
              marginRight: "15px",
              marginLeft: "none",
              cursor: "pointer",
            }}
            onClick={() => navigate("/afterLogin")}
          />
        </Box>
        {/* Menú de hamburguesa visible solo en móviles */}
        <Box
          sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          onClick={() => navigate("/afterLogin")}
        >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={() => navigate("/afterLogin")}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          {/* Menú desplegable solo para móviles */}
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            {pages.map(({ label, path }) => (
              <MenuItem
                key={label}
                onClick={() => {
                  handleCloseNavMenu();
                  navigate(path);
                }}
              >
                <Typography textAlign="center">{label}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        {/* Botones visibles solo en pantallas medianas/grandes */}
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          {pages.map(({ label, path }) => (
            <Button
              key={label}
              onClick={() => {
                handleCloseNavMenu();
                navigate(path);
              }}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {label}
            </Button>
          ))}
        </Box>
        {/* Avatar y menú del usuario */}
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Opciones de usuario">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="public/imgUsuarioblanco.png" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map(({ label, path }) => (
              <MenuItem
                key={label}
                onClick={() => {
                  handleCloseUserMenu();
                  navigate(path); // redirige a la ruta
                }}
              >
                <Typography sx={{ textAlign: "center" }}>{label}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

// Exportación del componente
export default NavBar;
