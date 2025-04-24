import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  useScrollTrigger,
  Slide,
  Fade,
  styled,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../assets/images/logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";

const StyledAppBar = styled(AppBar)(({ theme, scrolled }) => ({
  backgroundColor: scrolled
    ? "rgba(255, 255, 255, 0.95)"
    : "rgba(0, 0, 0, 0.2)",
  backdropFilter: scrolled ? "blur(10px)" : "blur(5px)",
  boxShadow: scrolled ? theme.shadows[4] : "none",
  transition: "all 0.3s ease",
  padding: scrolled ? theme.spacing(1, 0) : theme.spacing(2, 0),
  "& .MuiTypography-root, & .MuiButton-root": {
    textShadow: scrolled ? "none" : "0 1px 3px rgba(0,0,0,0.8)",
  },
}));

const LogoImage = styled("img")(({ theme }) => ({
  height: 48,
  [theme.breakpoints.up("md")]: {
    height: 64,
  },
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

const NavLink = styled(ScrollLink)(({ theme, scrolled }) => ({
  cursor: "pointer",
  padding: theme.spacing(1, 2),
  color: scrolled ? theme.palette.primary.dark : "white",
  fontWeight: 500,
  borderRadius: theme.shape.borderRadius,
  transition: "all 0.3s ease",
  "&:hover": {
    color: theme.palette.primary.main,
    backgroundColor: scrolled
      ? theme.palette.primary.light
      : "rgba(255,255,255,0.1)",
  },
  "&.active": {
    color: theme.palette.primary.main,
    fontWeight: 600,
    backgroundColor: scrolled
      ? theme.palette.action.selected
      : "rgba(255,255,255,0.2)",
  },
}));

const MobileMenuItem = styled(MenuItem)(({ theme }) => ({
  padding: theme.spacing(1.5, 3),
}));

const Header = () => {
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (sectionId) => {
    if (location.pathname === "/") {
      scroller.scrollTo(sectionId, {
        duration: 500,
        smooth: true,
        offset: -80,
      });
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About Us", to: "profile" },
    { name: "Our Sectors", to: "services" },
    { name: "Values", to: "values" },
    { name: "Contact Us", to: "contact" },
  ];

  const handleOpenMobileMenu = (event) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleCloseMobileMenu = () => {
    setMobileMenuAnchor(null);
  };

  return (
    <Slide direction="down" in={!useScrollTrigger()} appear={false}>
      <StyledAppBar position="fixed" scrolled={scrolled}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo/Branding */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <LogoImage src={logo} alt="APScope Limited" scrolled={scrolled} />
            <Typography
              variant="h6"
              sx={{
                ml: 2,
                display: { xs: "none", md: "block" },
                color: scrolled ? "primary.dark" : "white",
                fontWeight: "bold",
              }}
            >
              APScope{" "}
              <Typography
                component="span"
                color={scrolled ? "primary.main" : "white"}
                fontWeight="normal"
              >
                Limited
              </Typography>
            </Typography>
          </Box>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            {navLinks.map((link, index) => (
              <Fade in key={link.to} timeout={index * 200 + 500}>
                <div>
                  <NavLink
                    onClick={() => handleNavClick(link.to)}
                    to={link.to}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}
                    activeClass="active"
                    scrolled={scrolled}
                  >
                    {link.name}
                  </NavLink>
                </div>
              </Fade>
            ))}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            size="large"
            color="inherit"
            aria-label="menu"
            onClick={handleOpenMobileMenu}
            sx={{
              display: { md: "none" },
              color: scrolled ? "primary.dark" : "white",
            }}
          >
            {mobileMenuAnchor ? <CloseIcon /> : <MenuIcon />}
          </IconButton>

          {/* Mobile Menu */}
          <Menu
            anchorEl={mobileMenuAnchor}
            open={Boolean(mobileMenuAnchor)}
            onClose={handleCloseMobileMenu}
            sx={{ display: { md: "none" } }}
            PaperProps={{
              sx: {
                width: "100%",
                maxWidth: "none",
                mt: 6,
                px: 2,
                backgroundColor: "background.paper",
                backdropFilter: "blur(20px)",
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            {navLinks.map((link) => (
              <MobileMenuItem key={link.to} onClick={handleCloseMobileMenu}>
                <NavLink
                  onClick={handleCloseMobileMenu}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  activeClass="active"
                  sx={{ width: "100%" }}
                  scrolled={true} // Force scrolled style for mobile menu
                >
                  {link.name}
                </NavLink>
              </MobileMenuItem>
            ))}
          </Menu>
        </Toolbar>
      </StyledAppBar>
    </Slide>
  );
};

export default Header;
