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

const pages = [
  { label: "Conversión de Imágenes", path: "/imgConv" },
  { label: "Conversión de Videos", path: "/vidConv" },
  { label: "Tutorial", path: "/tutorial" },
];
const settings = [
  { label: "Perfil", path: "/perfilUsuario" },
  { label: "Cerrar Sesión", path: "/home" },
];

function NavBar() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{ top: 0, left: 0, right: 0, backgroundColor: "blueviolet" }}
    >
      <Toolbar sx={{ justifyContent: "space-between", px: 2 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            paddingBottom: "none",
          }}
          onClick={() => navigate("/home")} // aquí rediriges a la página deseada
        >
          <img
            src="/LogoEasyConv.png"
            style={{ height: "40px", marginRight: "10px", cursor: "pointer" }}
            onClick={() => navigate("/home")}
          />
        </Box>
        <Box
          sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          onClick={() => navigate("/home")}
        >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={() => navigate("/home")}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
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
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Opciones de usuario">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="imgUsuario.png" />
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

export default NavBar;
