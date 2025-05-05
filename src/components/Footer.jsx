import React from "react";
import { Link as ScrollLink } from "react-scroll";
import {
  Box,
  Container,
  Grid,
  Typography,
  Divider,
  Link,
  IconButton,
  useTheme,
} from "@mui/material";
import {
  Facebook,
  Instagram,
  Twitter,
  LinkedIn,
  LocationOn,
  Phone,
  Email,
} from "@mui/icons-material";
import logo from "../assets/images/logo.png";

const Footer = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Facebook />, url: "#" },
    { icon: <Instagram />, url: "#" },
    { icon: <Twitter />, url: "#" },
    { icon: <LinkedIn />, url: "#" },
  ];

  const quickLinks = [
    { text: "Home", to: "home" },
    { text: "Company Profile", to: "profile" },
    { text: "Our Services", to: "services" },
  ];

  const servicesLinks = [
    { text: "Health Products", url: "/services/health-pharma" },
    { text: "Solar Energy", url: "/services/solar-energy" },
    { text: "HR & Talent", url: "/services/hr-talent" },
    { text: "Accounting Solutions", url: "/services/accounting-software" },
  ];

  const companyLinks = [
    { text: "About Us", url: "/#services" },
    { text: "Vision & Mission", url: "/#profile" },
    { text: "Core Values", url: "/#values" }
  ];

  const contactInfo = [
    {
      icon: <LocationOn fontSize="small" />,
      text: "Karen Plains Arcade, Level 2, Karen Plains Road",
    },
    { icon: <Phone fontSize="small" />, text: "+254 (0)202323622" },
    { icon: <Email fontSize="small" />, text: "info@apscopelimited.com" },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "primary.dark",
        color: "primary.contrastText",
        py: 2,
        [theme.breakpoints.up("md")]: {
          py: 3,
        },
      }}
    >
      <Container maxWidth="lg">
        {/* Top Section */}
        <Grid container spacing={6} sx={{ mb: 6 }}>
          {/* Logo and Social */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 4,
                [theme.breakpoints.down("md")]: {
                  justifyContent: "center",
                },
              }}
            >
              <Box
                component="img"
                src={logo}
                alt="Apscope Limited"
                sx={{
                  height: 50,
                  mr: 3,
                  [theme.breakpoints.up("md")]: {
                    height: 60,
                  },
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  fontSize: "1.5rem",
                }}
              >
                Apscope Limited
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                [theme.breakpoints.down("md")]: {
                  justifyContent: "center",
                },
              }}
            >
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "primary.contrastText",
                    "&:hover": {
                      color: "secondary.light",
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.3s ease",
                    mx: 1,
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Footer Links */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={4}>
              <Grid item xs={6} sm={3}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                  Quick Links
                </Typography>
                <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <ScrollLink
                        to={link.to}
                        smooth={true}
                        duration={500}
                        style={{
                          color: "inherit",
                          textDecoration: "none",
                          display: "block",
                          mb: 1,
                          "&:hover": {
                            color: "secondary.light",
                          },
                        }}
                        sx={{
                          color: "primary.contrastText",
                          mb: 1,
                          cursor: "pointer",
                          "&:hover": {
                            color: "secondary.light",
                          },
                          transition: "color 0.3s ease",
                        }}
                      >
                        {link.text}
                      </ScrollLink>
                    </li>
                  ))}
                </Box>
              </Grid>

              <Grid item xs={6} sm={3}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                  Services
                </Typography>
                <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
                  {servicesLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.url}
                        sx={{
                          color: "primary.contrastText",
                          textDecoration: "none",
                          display: "block",
                          mb: 1,
                          "&:hover": {
                            color: "secondary.light",
                          },
                          transition: "color 0.3s ease",
                        }}
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </Box>
              </Grid>

              <Grid item xs={6} sm={3}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                  Company
                </Typography>
                <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
                  {companyLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.url}
                        sx={{
                          color: "primary.contrastText",
                          textDecoration: "none",
                          display: "block",
                          mb: 1,
                          "&:hover": {
                            color: "secondary.light",
                          },
                          transition: "color 0.3s ease",
                        }}
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </Box>
              </Grid>

              <Grid item xs={6} sm={3}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                  Contact
                </Typography>
                <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
                  {contactInfo.map((info, index) => (
                    <Box
                      key={index}
                      component="li"
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        mb: 2,
                      }}
                    >
                      <Box
                        sx={{
                          color: "secondary.light",
                          mr: 1.5,
                          mt: "2px",
                        }}
                      >
                        {info.icon}
                      </Box>
                      <Typography variant="body2">{info.text}</Typography>
                    </Box>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* Divider */}
        <Divider
          sx={{
            borderColor: "primary.light",
            mb: 4,
          }}
        />

        {/* Copyright */}
        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            color: "primary.contrastText",
            opacity: 0.8,
          }}
        >
          &copy; {currentYear} Apscope Limited. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
