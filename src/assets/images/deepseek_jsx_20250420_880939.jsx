import React, { useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  useTheme,
  Avatar,
  Paper,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
} from "@mui/material";
import {
  SolarPower,
  MedicalServices,
  Groups,
  Calculate,
  CheckCircle,
  ArrowBack,
} from "@mui/icons-material";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import solarEnergy from "../assets/images/solar-energy-large.jpg";

const serviceData = {
  "solar-energy": {
    title: "Solar Energy Solutions",
    icon: <SolarPower fontSize="large" />,
    description:
      "Powering a Sustainable Future with Reliable, Clean, and Affordable Solar Energy for Homes, Businesses, and Institutions.",
    bannerHeading: "Powering a Sustainable Future",
    bannerSubheading:
      "Reliable, Clean, and Affordable Solar Energy for Homes, Businesses, and Institutions.",
    color: "#FF9800",
    image: solarEnergy,
    features: [
      "Solar Panels (Monocrystalline & Polycrystalline)",
      "Inverters & Charge Controllers",
      "Deep Cycle Batteries",
      "Solar Water Heaters & Pumps",
      "Solar Streetlights & Security Lighting",
      "Solar Backup & Hybrid Systems",
    ],
    services: [
      "Site Assessment & Solar Feasibility Studies",
      "Customized Solar Design & Sizing",
      "Professional Installation & Maintenance",
      "Energy Audit & Consumption Analysis",
      "Solar Financing Options & Leasing Models",
    ],
    benefits: [
      "Affordable, high-quality solar products",
      "Skilled and certified installation team",
      "End-to-end project support",
      "Ongoing maintenance & customer service",
      "Partnerships with top global solar brands",
    ],
    cta: "Join the solar revolution. Reduce your power bills and carbon footprint.",
  },
  // ... (other service data remains the same)
};

const ServiceDetail = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { serviceId } = useParams();
  const service = serviceData[serviceId];

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (!service) {
    return (
      <Box sx={{ py: 10, textAlign: "center" }}>
        <Typography variant="h4">Service not found</Typography>
        <Button onClick={() => navigate("/services")} sx={{ mt: 3 }}>
          Back to Services
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ mt: 10 }}>
      {/* Hero Section with Background Image */}
      <Box
        sx={{
          position: "relative",
          height: "70vh",
          minHeight: 500,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${service.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          color: "white",
          textAlign: "center",
          mb: 8,
        }}
      >
        <Container maxWidth="lg">
          <Button
            startIcon={<ArrowBack />}
            onClick={() => navigate("/#services")}
            sx={{
              mb: 4,
              color: "white",
              position: "absolute",
              top: 40,
              left: 40,
              borderColor: "white",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.1)",
              },
            }}
            variant="outlined"
          >
            Back to Services
          </Button>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 700,
                mb: 3,
                textShadow: "2px 2px 8px rgba(0,0,0,0.8)",
                fontFamily: "'Playfair Display', serif",
              }}
            >
              {service.bannerHeading}
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 400,
                maxWidth: 800,
                mx: "auto",
                textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                mb: 4,
              }}
            >
              {service.bannerSubheading}
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                px: 6,
                py: 2,
                fontSize: "1.1rem",
                backgroundColor: service.color,
                "&:hover": {
                  backgroundColor: service.color,
                  opacity: 0.9,
                },
              }}
            >
              Get Started
            </Button>
          </motion.div>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ mb: 10 }}>
        {/* Service Intro */}
        <Grid container spacing={6} sx={{ mb: 8 }}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 4,
                }}
              >
                <Avatar
                  sx={{
                    width: 80,
                    height: 80,
                    mr: 4,
                    bgcolor: `${service.color}20`,
                    color: service.color,
                  }}
                >
                  {service.icon}
                </Avatar>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    color: "text.primary",
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  {service.title}
                </Typography>
              </Box>
              <Typography
                variant="subtitle1"
                sx={{
                  color: "text.secondary",
                  mb: 4,
                  lineHeight: 1.8,
                  fontSize: "1.1rem",
                }}
              >
                {service.description}
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: "100%",
                  border: `1px solid ${theme.palette.divider}`,
                  borderRadius: 1,
                  backgroundColor: "rgba(255,255,255,0.7)",
                  backdropFilter: "blur(5px)",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    mb: 3,
                    color: service.color,
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  Why Choose Us
                </Typography>
                <List>
                  {service.benefits.slice(0, 5).map((benefit, index) => (
                    <ListItem key={index} sx={{ px: 0, py: 1 }}>
                      <ListItemIcon sx={{ minWidth: 40 }}>
                        <CheckCircle sx={{ color: service.color }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={benefit}
                        primaryTypographyProps={{ variant: "body1" }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>

        {/* Features and Services */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: "100%",
                  border: `1px solid ${theme.palette.divider}`,
                  borderRadius: 1,
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 600,
                    mb: 4,
                    color: service.color,
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  Our Solutions
                </Typography>
                <List>
                  {service.features.map((feature, index) => (
                    <ListItem key={index} sx={{ px: 0, py: 1 }}>
                      <ListItemIcon sx={{ minWidth: 40 }}>
                        <CheckCircle sx={{ color: service.color }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={feature}
                        primaryTypographyProps={{ variant: "body1" }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: "100%",
                  border: `1px solid ${theme.palette.divider}`,
                  borderRadius: 1,
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 600,
                    mb: 4,
                    color: service.color,
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  Our Services
                </Typography>
                <List>
                  {service.services.map((serviceItem, index) => (
                    <ListItem key={index} sx={{ px: 0, py: 1 }}>
                      <ListItemIcon sx={{ minWidth: 40 }}>
                        <CheckCircle sx={{ color: service.color }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={serviceItem}
                        primaryTypographyProps={{ variant: "body1" }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Paper
            elevation={0}
            sx={{
              p: 6,
              textAlign: "center",
              backgroundColor: `${service.color}10`,
              border: `1px solid ${theme.palette.divider}`,
              borderRadius: 1,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 600,
                mb: 3,
                color: service.color,
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Ready to Get Started?
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 4, maxWidth: 700, mx: "auto", fontSize: "1.1rem" }}
            >
              {service.cta || "Contact us today to learn more about how we can help you."}
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                px: 6,
                py: 2,
                fontSize: "1.1rem",
                backgroundColor: service.color,
                "&:hover": {
                  backgroundColor: service.color,
                  opacity: 0.9,
                },
              }}
            >
              Contact Us
            </Button>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ServiceDetail;