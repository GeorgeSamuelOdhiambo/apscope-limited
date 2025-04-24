import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  useTheme,
  useMediaQuery,
  styled,
  Fade,
  Slide,
  Divider,
  alpha,
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
import { keyframes } from "@mui/material/styles";

// Animation definitions
const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

// Styled components
const ClassicCard = styled(Card)(({ theme }) => ({
  height: "100%",
  borderRadius: "12px",
  boxShadow: `0 6px 16px ${alpha(theme.palette.primary.main, 0.1)}`,
  transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
  background: theme.palette.background.paper,
  border: `1px solid ${alpha(theme.palette.divider, 0.2)}`,
  overflow: "hidden",
  position: "relative",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: `0 12px 24px ${alpha(theme.palette.primary.main, 0.15)}`,
    borderColor: alpha(theme.palette.primary.main, 0.3),
    "&::before": {
      opacity: 1,
      transform: "scaleX(1)",
    },
    "& .service-icon": {
      animation: `${float} 3s ease-in-out infinite`,
      backgroundColor: alpha(theme.palette.primary.main, 0.1),
      borderColor: alpha(theme.palette.primary.main, 0.3),
    },
  },
  "&::before": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "4px",
    background: theme.palette.primary.main,
    opacity: 0,
    transform: "scaleX(0)",
    transformOrigin: "left center",
    transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
  },
}));

const AnimatedDivider = styled(Divider)(({ theme }) => ({
  height: 4,
  width: 80,
  backgroundColor: theme.palette.secondary.main,
  margin: "0 auto",
  transition: "all 0.5s ease",
  "&:hover": {
    width: 120,
    backgroundColor: theme.palette.primary.main,
  },
}));

const pulseAnimation = keyframes`${pulse}`;

const services = [
  {
    id: "solar-energy",
    title: "Solar Energy Solutions",
    icon: <SolarPower fontSize="large" />,
    shortDesc: "Reliable, Clean, and Affordable Solar Energy Solutions",
    color: "#FF9800",
  },
  {
    id: "health-pharma",
    title: "Health & Pharma Agency",
    icon: <MedicalServices fontSize="large" />,
    shortDesc: "Comprehensive medical solutions and healthcare services",
    color: "#2196F3",
  },
  {
    id: "hr-talent",
    title: "HR & Talent Management",
    icon: <Groups fontSize="large" />,
    shortDesc: "Strategic human resource solutions and talent acquisition",
    color: "#9C27B0",
  },
  {
    id: "accounting-software",
    title: "Accounting Software",
    icon: <Calculate fontSize="large" />,
    shortDesc: "User-friendly bookkeeping tools for businesses",
    color: "#4CAF50",
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
        py: 10,
        backgroundImage: "linear-gradient(to top, #ffffff,rgb(192, 225, 238))",
        background: `
          linear-gradient(to top, #ffffff,rgb(192, 225, 238)),
          url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%239C92AC' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")
        `,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl">
        {/* Section Header */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Slide direction="down" in timeout={500}>
            <Box>
              <Typography
                variant="overline"
                component="span"
                sx={{
                  color: "secondary.main",
                  fontWeight: 600,
                  letterSpacing: 2,
                  display: "inline-block",
                  mb: 2,
                  animation: `${pulseAnimation} 2s infinite`,
                }}
              >
                OUR OFFERINGS
              </Typography>
              <Typography
                variant={isMobile ? "h5" : "h4"}
                component="h4"
                sx={{
                  fontWeight: 700,
                  color: "text.primary",
                  mb: 3,
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                Professional Services
              </Typography>
              <AnimatedDivider
                sx={{
                  width: 80,
                  backgroundColor: "secondary.main",
                  mx: "auto",
                }}
              />
            </Box>
          </Slide>

          {/* Introductory Statement */}
          <Fade in timeout={800}>
            <Box
              sx={{
                maxWidth: 800,
                mx: "auto",
                mt: 4,
                fontStyle: "italic",
                position: "relative",
                "&:before, &:after": {
                  content: '""',
                  position: "absolute",
                  width: 40,
                  height: 2,
                  backgroundColor: theme.palette.primary.light,
                  top: "50%",
                },
                "&:before": {
                  left: -60,
                },
                "&:after": {
                  right: -60,
                },
                [theme.breakpoints.down("sm")]: {
                  "&:before, &:after": {
                    display: "none",
                  },
                },
              }}
            >
              <Typography
                variant={isMobile ? "body1" : "h6"}
                component="p"
                sx={{
                  textAlign: "center",
                  lineHeight: 1.8,
                  color: "text.primary",
                  fontFamily: "'Roboto', sans-serif",
                }}
              >
                "Discover our comprehensive range of professional services
                designed to meet your business needs with excellence and
                precision"
              </Typography>
            </Box>
          </Fade>
        </Box>

        {/* Services Grid */}
        <Grid container spacing={4} justifyContent="center">
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  scale: 1.03,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  },
                }}
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
                      "&:last-child": {
                        pb: 4,
                      },
                    }}
                  >
                    <Box
                      className="service-icon"
                      sx={{
                        width: 80,
                        height: 80,
                        mb: 4,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                        backgroundColor: alpha(service.color, 0.1),
                        border: `1px solid ${alpha(service.color, 0.2)}`,
                        position: "relative",
                        transition: "all 0.3s ease",
                        "&:after": {
                          content: '""',
                          position: "absolute",
                          width: "100%",
                          height: "100%",
                          borderRadius: "50%",
                          border: `1px solid ${alpha(service.color, 0.3)}`,
                          transform: "scale(1.1)",
                          transition: "all 0.3s ease",
                        },
                      }}
                    >
                      {React.cloneElement(service.icon, {
                        sx: {
                          fontSize: 36,
                          color: service.color,
                        },
                      })}
                    </Box>

                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{
                        fontWeight: 700,
                        mb: 2,
                        color: "text.primary",
                        fontFamily: "'Playfair Display', serif",
                        position: "relative",
                        display: "inline-block",
                        "&:after": {
                          content: '""',
                          position: "absolute",
                          bottom: -8,
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: 40,
                          height: 2,
                          backgroundColor: alpha(service.color, 0.5),
                          transition: "all 0.3s ease",
                        },
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
                        fontFamily: "'Roboto', sans-serif",
                        fontSize: "1rem",
                        fontWeight: 300,
                      }}
                    >
                      {service.shortDesc}
                    </Typography>

                    <Button
                      variant="outlined"
                      color="primary"
                      endIcon={<ArrowForward />}
                      sx={{
                        fontWeight: 600,
                        letterSpacing: "0.5px",
                        textTransform: "none",
                        borderRadius: "50px",
                        px: 3,
                        py: 1,
                        borderWidth: 2,
                        "&:hover": {
                          backgroundColor: alpha(
                            theme.palette.primary.main,
                            0.1
                          ),
                          borderWidth: 2,
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
