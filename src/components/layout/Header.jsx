import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AuthLinks from "./AuthLinks";
import useAuth from "../../hooks/useAuth";
import logo from "../../assets/logo-offshore.png";
import "../../App.css";
import CartLink from "../cart/CartLink";

function Header() {
  const { isAuthenticated } = useAuth();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const location = useLocation();

  const pages = [
    { name: "Home", path: "/", show: true },
    { name: "Boutique", path: "/products", show: true },
  ];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "white" }}>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          color: "#636363",
          justifyContent: "space-around",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            fontWeight: "bolder",
            textAlign: "center",
            fontSize: "1.2rem",
          }}
        >
          <img src={logo} alt="logo" />
          <Box>
            <p className="pt-serif-bold">Off shore</p>
            <p className="pt-serif-bold">clothing</p>
          </Box>
        </Box>

        <Toolbar disableGutters>
          {isAuthenticated && (
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton size="large" onClick={handleOpenNavMenu}>
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                keepMounted
                transformOrigin={{ vertical: "top", horizontal: "left" }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {pages
                  .filter((page) => page.show)
                  .map((page) => (
                    <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                      <Typography
                      color={location.pathname === page.path ? "#027E23" : "inherit"}
                        sx={{
                          textAlign: "center",
                          textTransform: "capitalize",
                          fontWeight: location.pathname === page.path ? "bold" : "normal",
                        }}
                        component={Link}
                        to={page.path}
                        style={{ textDecoration: "none" }}
                      >
                        {page.name}
                      </Typography>
                    </MenuItem>
                  ))}
              </Menu>
            </Box>
          )}

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages
              .filter((page) => page.show)
              .map((page) => (
                <Button
                  key={page.name}
                  component={Link}
                  to={page.path}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: location.pathname === page.path ? "#027E23" : "#2E2E2E",
                    background: "none",
                    display: "block",
                    textTransform: "capitalize",
                    textAlign: "center",
                    fontWeight: "bolder",
                    fontFamily: "PT Serif",
                    fontSize: "1.2rem",
                    margin: "0 15px",
                    "&:hover": { color: "#027E23" },
                  }}
                >
                  {page.name}
                </Button>
              ))}
          </Box>
        </Toolbar>
        <AuthLinks />
        <CartLink />
      </Container>
    </AppBar>
  );
}

export default Header;
