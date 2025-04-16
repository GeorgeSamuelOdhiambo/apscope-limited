import React from "react";
import {
  Box,
  Container,
  Typography,
  Divider,
  Button,
  useTheme,
  useMediaQuery,
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
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";

const serviceData = {
  "solar-energy": {
    title: "Solar Energy Solutions",
    icon: <SolarPower fontSize="large" />,
    description:
      "Powering a Sustainable Future with Reliable, Clean, and Affordable Solar Energy for Homes, Businesses, and Institutions.",
    color: "#FF9800",
    image: "/images/solar-energy-large.jpg",
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
  },
  "health-pharma": {
    title: "Health & Pharma Agency",
    icon: <MedicalServices fontSize="large" />,
    description:
      "Comprehensive medical solutions and healthcare services for institutions and individuals.",
    color: "#2196F3",
    image: "/images/health-pharma-large.jpg",
    features: [
      "Global sourcing of medical equipment",
      "Pharmaceutical distribution network",
      "Regulatory compliance expertise",
      "Healthcare facility management",
      "Training and certification programs",
    ],
    services: [
      "Medical equipment procurement",
      "Pharmaceutical supply chain management",
      "Healthcare facility consulting",
      "Medical staff training programs",
      "Regulatory compliance assistance",
    ],
    benefits: [
      "Reliable medical equipment sourcing",
      "Quality pharmaceutical products",
      "Expert regulatory guidance",
      "Comprehensive training programs",
      "End-to-end healthcare solutions",
    ],
  },
  "hr-talent": {
    title: "HR & Talent Management",
    icon: <Groups fontSize="large" />,
    description:
      "Strategic human resource solutions and talent acquisition for organizations of all sizes.",
    color: "#9C27B0",
    image: "/images/hr-talent-large.jpg",
    features: [
      "Executive search and recruitment",
      "Organizational development",
      "Training and leadership programs",
      "Performance management systems",
      "Global workforce solutions",
    ],
    services: [
      "Talent acquisition strategies",
      "Leadership development programs",
      "Organizational restructuring",
      "Employee engagement solutions",
      "HR technology implementation",
    ],
    benefits: [
      "Access to top-tier talent",
      "Customized HR solutions",
      "Proven leadership development",
      "Data-driven performance management",
      "Global HR expertise",
    ],
  },
  "accounting-software": {
    title: "Accounting Software",
    icon: <Calculate fontSize="large" />,
    description:
      "Simplify Your Finances, Grow Your Business with our affordable, user-friendly bookkeeping tools for SMEs, Startups, and Hustler Fund Beneficiaries.",
    color: "#4CAF50",
    image: "/images/accounting-software-large.jpg",
    features: [
      "Simple income & expense tracking",
      "Customer & supplier records",
      "Inventory and stock management",
      "Invoice and quotation generation",
      "Bank reconciliation",
      "Tax calculation support (VAT, PAYE, etc.)",
    ],
    services: [
      "Software implementation",
      "User training and onboarding",
      "Custom package development",
      "Regular software updates",
      "Dedicated support team",
    ],
    benefits: [
      "Very low monthly cost",
      "Accessible on desktop and mobile",
      "No accounting knowledge required",
      "Custom packages for institutions",
      "Exportable reports (PDF, Excel, CSV)",
    ],
  },
};

const ServiceDetail = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  const { serviceId } = useParams();
  const service = serviceData[serviceId];

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
    <Box
      sx={{
        py: 8,
        backgroundColor: "#f9f9f9",
      }}
    >
      <Container maxWidth="lg">
        <Button
          startIcon={<ArrowBack />}
          onClick={() => navigate("/services")}
          sx={{ mb: 4 }}
        >
          Back to Services
        </Button>

        <Paper
          elevation={0}
          sx={{
            mb: 6,
            borderRadius: "4px",
            overflow: "hidden",
            border: `1px solid ${theme.palette.divider}`,
          }}
        >
          <Grid container>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  height: "100%",
                  minHeight: 400,
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ p: 6 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 4,
                  }}
                >
                  <Avatar
                    sx={{
                      width: 60,
                      height: 60,
                      mr: 3,
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
                    fontStyle: "italic",
                  }}
                >
                  {service.description}
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    px: 4,
                    borderRadius: "4px",
                    fontWeight: 600,
                  }}
                >
                  Contact Us
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>

        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: "100%",
                  border: `1px solid ${theme.palette.divider}`,
                  borderRadius: "4px",
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
                  Key Features
                </Typography>
                <List>
                  {service.features.map((feature, index) => (
                    <ListItem key={index} sx={{ px: 0 }}>
                      <ListItemIcon sx={{ minWidth: 40 }}>
                        <CheckCircle sx={{ color: service.color }} />
                      </ListItemIcon>
                      <ListItemText primary={feature} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: "100%",
                  border: `1px solid ${theme.palette.divider}`,
                  borderRadius: "4px",
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
                  Our Services
                </Typography>
                <List>
                  {service.services.map((item, index) => (
                    <ListItem key={index} sx={{ px: 0 }}>
                      <ListItemIcon sx={{ minWidth: 40 }}>
                        <CheckCircle sx={{ color: service.color }} />
                      </ListItemIcon>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: "100%",
                  border: `1px solid ${theme.palette.divider}`,
                  borderRadius: "4px",
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
                  Benefits
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {service.benefits.map((benefit, index) => (
                    <Chip
                      key={index}
                      label={benefit}
                      sx={{
                        backgroundColor: `${service.color}10`,
                        color: "text.primary",
                        mb: 1,
                      }}
                    />
                  ))}
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ServiceDetail;