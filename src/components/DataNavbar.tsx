import React from "react";
// Importación de componentes de Material UI para construir la barra de navegación
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";

// Definición de las páginas y sus rutas asociadas
const pages = [
  { label: "Conversión de Imágenes", path: "/logIn" },
  { label: "Conversión de Videos", path: "/logIn" },
  { label: "Tutorial", path: "/tutorialBefore" },
];

function DataNavbar() {
  const navigate = useNavigate(); // Hook para navegación programática
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  ); // Estado para anclar el menú desplegable en móvil

  // Cierra el menú de navegación (modo móvil)
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      className="dataNavBar navBar-border"
      position="fixed"
      sx={{
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: "blueviolet", // Color de fondo personalizado
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", px: 2 }}>
        {/* Logo y título: redirige al inicio al hacer clic */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        >
          <img
            src="/LogoEasyConv.png"
            style={{
              height: "75px",
              width: "80px",
              marginRight: "30px",
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          />
        </Box>

        {/* Menú hamburguesa para pantallas pequeñas (xs) */}
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="menú de navegación"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={() => navigate("/")} // Por ahora redirige al home
            color="inherit"
          >
            <MenuIcon />
          </IconButton>

          {/* Menú desplegable móvil */}
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

        {/* Botones de navegación para pantallas grandes (md en adelante) */}
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          {pages.map(({ label, path }) => (
            <Button
              key={label}
              onClick={() => {
                handleCloseNavMenu();
                navigate(path);
              }}
              sx={{
                my: 2,
                color: "white",
                display: "block",
              }}
            >
              {label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default DataNavbar;
