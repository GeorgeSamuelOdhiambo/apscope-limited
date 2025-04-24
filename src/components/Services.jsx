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
  Avatar,
  styled,
  Fade,
  Slide,
  Divider,
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
import back1 from "../assets/images/solar-energy-large.jpg";

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

// Animated divider component
const AnimatedDivider = styled(Divider)(({ theme }) => ({
  height: 4,
  transition: "all 0.5s ease",
  "&:hover": {
    width: "120px !important",
    backgroundColor: theme.palette.primary.main,
  },
}));

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


const services = [
  {
    id: "solar-energy",
    title: "Solar Energy Solutions",
    icon: <SolarPower fontSize="large" />,
    shortDesc: "Reliable, Clean, and Affordable Solar Energy Solutions",
    color: "#FF9800",
    image: back1,
  },
  {
    id: "health-pharma",
    title: "Health & Pharma Agency",
    icon: <MedicalServices fontSize="large" />,
    shortDesc: "Comprehensive medical solutions and healthcare services",
    color: "#2196F3",
    image: back1,
  },
  {
    id: "hr-talent",
    title: "HR & Talent Management",
    icon: <Groups fontSize="large" />,
    shortDesc: "Strategic human resource solutions and talent acquisition",
    color: "#9C27B0",
    image: back1,
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
        backgroundImage: "linear-gradient(to bottom, #ffffff,rgb(192, 225, 238))",
      }}
    >
      <Container maxWidth="lg">
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
                  animation: `${pulse} 2s infinite`,
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
