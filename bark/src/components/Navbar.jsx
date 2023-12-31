import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link, NavLink } from "react-router-dom";

const pages = [
  // { page: "Services", url: "/services" },
];

const sellerPages = [
  { page: "Dashboard", url: "/sellers/home" },
  { page: "Leads", url: "/sellers/leads" },
  { page: "My Responses", url: "/sellers/my-responses" },
  { page: "Settings", url: "/sellers/settings" },
];

const buyerPages = [{ page: "My Requests", url: "/my-requests" }];

import { useAuth } from "../context/AuthContext";

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const { user, logout, changeSellerStatus } = useAuth();

  const isUser = user;

  const menuPages = [
    ...pages,
    ...(user?.sellerStatus ? sellerPages : user ? buyerPages : []),
  ];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Bark
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
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
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {menuPages.map(({ page, url }) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link to={url}>
                    <Typography textAlign="center">{page}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map(({ page, url }) => (
              <Link key={page} to={url}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {isUser && user.sellerStatus ? (
              <>
                {sellerPages.map(({ page, url }) => (
                  <NavLink to={url} key={page}>
                    <Button sx={{ my: 2, color: "white", display: "block" }}>
                      {page}
                    </Button>
                  </NavLink>
                ))}

                <NavLink to="/help">
                  <Button sx={{ my: 2, color: "white", display: "block" }}>
                    Help
                  </Button>
                </NavLink>
              </>
            ) : isUser ? (
              <NavLink to="/my-requests">
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  My Requests
                </Button>
              </NavLink>
            ) : (
              <>
                <NavLink to="/signin">
                  <Button sx={{ my: 2, color: "white", display: "block" }}>
                    Login
                  </Button>
                </NavLink>
                <NavLink to="/signin">
                  <Button
                    sx={{
                      my: 2,
                      color: "white",
                      display: "block",
                      borderRadius: "20px",
                      backgroundColor: "#4CAF50",
                      "&:hover": {
                        backgroundColor: "#45a049",
                      },
                    }}
                  >
                    Join as a Professional
                  </Button>
                </NavLink>
              </>
            )}
          </Box>

          {/* If user logged in display avatar */}
          {isUser && (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
                <MenuItem onClick={changeSellerStatus}>
                  <Typography textAlign="center" onClick={handleCloseUserMenu}>
                    {user.sellerStatus ? "Switch to Buyer" : "Switch to Seller"}
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                    View Public Profile
                  </Typography>
                </MenuItem>
                <MenuItem onClick={logout}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
