import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Divider,
  Grid,
  Card,
  CardContent,
  Button,
  useTheme,
  useMediaQuery,
  Avatar,
  IconButton,
  styled,
  Paper,
} from "@mui/material";
import {
  MedicalServices,
  Groups,
  SolarPower,
  Calculate,
  ArrowForward,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Styled components
const ClassicCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  transition: "all 0.3s ease",
  borderRadius: "4px",
  boxShadow: "none",
  border: `1px solid ${theme.palette.divider}`,
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: theme.shadows[4],
    borderColor: theme.palette.primary.main,
  },
}));

const SectionHeader = styled(Typography)(({ theme }) => ({
  fontFamily: "'Playfair Display', serif",
  fontWeight: 700,
  letterSpacing: "1px",
  position: "relative",
  display: "inline-block",
  "&:after": {
    content: '""',
    position: "absolute",
    width: "50%",
    height: "3px",
    bottom: "-10px",
    left: "25%",
    backgroundColor: theme.palette.primary.main,
  },
}));

const services = [
  {
    id: "solar-energy",
    title: "Solar Energy Solutions",
    icon: <SolarPower fontSize="large" />,
    shortDesc: "Reliable, Clean, and Affordable Solar Energy Solutions",
    color: "#FF9800",
    image: "/images/solar-energy.jpg",
  },
  {
    id: "health-pharma",
    title: "Health & Pharma Agency",
    icon: <MedicalServices fontSize="large" />,
    shortDesc: "Comprehensive medical solutions and healthcare services",
    color: "#2196F3",
    image: "/images/health-pharma.jpg",
  },
  {
    id: "hr-talent",
    title: "HR & Talent Management",
    icon: <Groups fontSize="large" />,
    shortDesc: "Strategic human resource solutions and talent acquisition",
    color: "#9C27B0",
    image: "/images/hr-talent.jpg",
  },
  {
    id: "accounting-software",
    title: "Accounting Software",
    icon: <Calculate fontSize="large" />,
    shortDesc: "User-friendly bookkeeping tools for businesses",
    color: "#4CAF50",
    image: "/images/accounting-software.jpg",
  },
];

const Services = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const handleServiceClick = (serviceId) => {
    navigate(`/services/${serviceId}`);
  };

  return (
    <Box
      id="services"
      sx={{
        pb: 10,
        pt: 5,
        backgroundColor: "#f9f9f9",
        backgroundImage: "linear-gradient(to bottom, #ffffff, #f9f9f9)",
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="overline"
              sx={{
                color: "text.secondary",
                fontWeight: 600,
                letterSpacing: 2,
                mb: 1,
                display: "block",
              }}
            >
              OUR OFFERINGS
            </Typography>
            <SectionHeader
              variant={isMobile ? "h3" : "h2"}
              component="h2"
              sx={{
                mb: 4,
                color: "text.primary",
              }}
            >
              Professional Services
            </SectionHeader>
            <Typography
              variant="subtitle1"
              sx={{
                color: "text.secondary",
                maxWidth: 700,
                mx: "auto",
                lineHeight: 1.8,
                fontStyle: "italic",
              }}
            >
              Discover our comprehensive range of professional services designed
              to meet your business needs with excellence and precision
            </Typography>
          </motion.div>
        </Box>

        {/* Services Grid */}
        <Grid container spacing={4} sx={{ justifyContent: "center" }}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={6} lg={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <ClassicCard onClick={() => handleServiceClick(service.id)}>
                  <CardContent
                    sx={{
                      p: 4,
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <Avatar
                      sx={{
                        width: 80,
                        height: 80,
                        mb: 3,
                        bgcolor: `${service.color}10`,
                        color: service.color,
                      }}
                    >
                      {service.icon}
                    </Avatar>
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{
                        fontWeight: 600,
                        mb: 2,
                        color: "text.primary",
                        fontFamily: "'Playfair Display', serif",
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "text.secondary",
                        mb: 3,
                        flexGrow: 1,
                        lineHeight: 1.7,
                      }}
                    >
                      {service.shortDesc}
                    </Typography>
                    <Button
                      variant="text"
                      color="primary"
                      endIcon={<ArrowForward />}
                      sx={{
                        fontWeight: 600,
                        "&:hover": {
                          backgroundColor: "transparent",
                        },
                      }}
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </ClassicCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
