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
  Divider,
  Chip,
} from "@mui/material";
import {
  SolarPower,
  MedicalServices,
  Groups,
  Calculate,
  CheckCircle,
  ArrowBack,
  Star,
  EmojiEvents,
  Verified,
} from "@mui/icons-material";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import solarEnergy from "../assets/images/solar-energy-large.jpg";
import hrTalent from "../assets/images/hr-talent.jpg";
import accountingSoftware from "../assets/images/accounting-software.jpg";
import healthPharma from "../assets/images/health-pharmacy.jpg";

const serviceData = {
  "solar-energy": {
    title: "Solar Energy Solutions",
    icon: <SolarPower fontSize="large" />,
    description:
      "Apscope Limited is a trusted dealer and installer of solar energy products and solutions across Eastern Africa. We provide comprehensive solar systems, components, and installation services tailored to diverse needs—from homes and farms to commercial and government institutions.",
    bannerHeading: "Powering a Sustainable Future",
    bannerSubheading:
      "Reliable, Clean, and Affordable Solar Energy Solutions  for Homes, Businesses, and Institutions.",
    color: "#FF9800", // Orange
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
    wtc: "Talk to our Solar Experts today",
    btn: "Contact Us",
    targetAudience: [
      "Homeowners",
      "Businesses",
      "Farms & Agricultural Operations",
      "Government Institutions",
      "Schools & Universities",
      "Healthcare Facilities",
    ],
  },
  "accounting-software": {
    title: "Smart Accounting Solutions",
    icon: <Calculate fontSize="large" />,
    description:
      "Apscope is a distributor of simplified accounting and bookkeeping software, developed for African markets. Our solutions cater to micro-enterprises, SMEs, cooperatives, and individuals who want to manage their finances better—without needing to be accountants.",
    bannerHeading: "Simplify Your Finances, Grow Your Business",
    bannerSubheading:
      "Affordable, user-friendly bookkeeping tools for SMEs, Startups, and Hustler Fund Beneficiaries.",
    color: "#4CAF50", // Green
    image: accountingSoftware,
    features: [
      "Simple income & expense tracking",
      "Customer & supplier records",
      "Inventory and stock management",
      "Invoice and quotation generation",
      "Bank reconciliation",
      "Tax calculation support (VAT, PAYE, etc.)",
      "Exportable reports (PDF, Excel, CSV)",
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
      "Training and setup support available",
    ],
    cta: "No business is too small to be professionally managed.",
    wtc: "Request a Free Demo From our Accounting Experts today",
    btn: "Get Started",
    targetAudience: [
      "Hustler Fund beneficiaries",
      "Small and Medium Enterprises (SMEs)",
      "Shops & Retailers",
      "NGOs & SACCOs",
      "Freelancers and professionals",
      "Farming cooperatives",
    ],
  },
  "health-pharma": {
    title: "Health & Pharma Partnership Agency",
    icon: <MedicalServices fontSize="large" />,
    description:
      "Apscope bridges pharmaceutical manufacturers, and Medical equipment manufacturers with East African markets through regulatory expertise, tender management, and local packaging partnerships. We provide end-to-end solutions for medical equipment, pharmaceuticals, consumables, and institutional healthcare services.",
    bannerHeading: "Gateway to East African Healthcare Markets",
    bannerSubheading:
      "Pharma Registration | Government Tenders | Local Packaging Partnerships | Distribution Networks",
    color: "#2196F3", // Blue
    image: healthPharma,
    features: [
      "Representation for Indian & Chinese pharma companies",
      "End-to-end product registration (Kenya & Uganda)",
      "Government tender procurement specialists",
      "Co-investment in local packaging facilities",
      "Medical equipment sourcing & certification",
    ],
    services: [
      "Pharma market entry & regulatory compliance",
      "Medical equipment procurement & logistics",
      "Tender bidding & contract facilitation",
      "Local packaging/JV partnership setup",
      "Distribution network development",
    ],
    benefits: [
      "Faster market access with regulatory expertise",
      "Tender-winning strategies for public sector contracts",
      "Cost-saving local packaging solutions",
      "Trusted distribution channels in East Africa",
      "End-to-end partnership (registration to retail)",
    ],
    cta: "Partner for seamless market entry in East Africa",
    wtc: "Discuss representation or partnership opportunities",
    btn: "Contact our Team",
    targetAudience: [
      "Pharmaceutical manufacturers",
      "Medical equipment suppliers",
      "Hospital & clinic chains",
      "Government health agencies",
      "NGO healthcare programs",
      "Medical importers/distributors",
    ],
    partnershipNote: {
      title: "Pharma Manufacturer? Expand to Africa",
      text: "We represent international pharma companies in Kenya & Uganda - handling registrations, tenders, marketing, and local packaging partnerships.",
      cta: "Explore Representation Services →",
    },
  },
  "hr-talent": {
    title: "Global HR & Talent Solutions",
    icon: <Groups fontSize="large" />,
    description:
      "Apscope specializes in international recruitment, training, and overseas placement for healthcare professionals (nurses, caregivers, technicians) and educators. We connect African talent with global opportunities while helping organizations build high-performing teams.",
    bannerHeading: "Bridging Talent with Global Opportunities",
    bannerSubheading:
      "Recruitment | Training | Overseas Placement | Compliance Support",
    color: "#9C27B0", // Purple
    image: hrTalent,
    features: [
      "Overseas placement for nurses, caregivers & technicians",
      "International teacher recruitment (Africa to GCC/Europe)",
      "End-to-end visa & work permit processing",
      "Pre-departure training & certification",
      "Local talent sourcing for African organizations",
    ],
    services: [
      "Healthcare workforce recruitment (USA Canada, Australia & EU markets)",
      "Teacher & skilled labor placement abroad",
      "HR consulting for hospitals & schools",
      "Compliance & licensing support (e.g., NCLEX, Prometric)",
      "Customized training programs (language, cultural adaptation)",
    ],
    benefits: [
      "Direct access to pre-screened healthcare & education talent",
      "Streamlined international placement process",
      "Reduced hiring risks with verified candidates",
      "Support for certification & regulatory requirements",
      "Post-placement retention programs",
    ],
    cta: "Staff your facility or secure international opportunities",
    wtc: "Need qualified nurses, teachers, or technicians?",
    btn: "Contact Our HR Team",
    targetAudience: [
      "Hospitals & Clinics (Africa & Abroad)",
      "Nursing Homes (USA Canada, Australia & EU markets )",
      "Schools & Training Institutes",
      "Healthcare Recruitment Agencies",
      "Government Workforce Programs",
      "Skilled Professionals Seeking Overseas Jobs",
    ],
    // Optional: Specialization highlights
    specialtyRoles: [
      "Registered Nurses (ICU, OR, ER)",
      "Certified Caregivers (Elderly/Disability Care)",
      "Medical Lab Technicians",
      "Vocational Teachers (STEM, Healthcare)",
      "Hospital Administrators",
    ],
  },
};
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const slideUp = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
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
      <Box sx={{ py: 10, mt:15, textAlign: "center" }}>
        <Typography variant="h4">Service not found</Typography>
        <Button onClick={() => navigate(-1)} sx={{ mt: 3 }}>
          Back to Services
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ mt: 15 }}>
      {/* Back Button with Classic Placement */}
      <Container maxWidth="lg" sx={{ mt: 4, px: { xs: 2, md: 4 } }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Button
            startIcon={<ArrowBack />}
            onClick={() => navigate("/#services")}
            sx={{
              mb: 2,
              color: "text.secondary",
              "&:hover": {
                color: "text.primary",
                backgroundColor: "transparent",
              },
            }}
          >
            Back to Services
          </Button>
        </motion.div>
      </Container>

      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ mb: 5, px: { xs: 2, md: 4 } }}>
        <Box sx={{ position: "relative", overflow: "hidden" }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: `linear-gradient(to left, ${service.color}CC, ${service.color}10)`,
                zIndex: 1,
              }}
            />
            <Box
              sx={{
                height: "70vh",
                minHeight: 500,
                backgroundImage: `url(${service.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "center",
                position: "relative",
              }}
            >
              <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
                <Box sx={{ maxWidth: 800, mx: "auto", textAlign: "center" }}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <Typography
                      variant="h1"
                      sx={{
                        fontWeight: 700,
                        mb: 3,
                        color: "white",
                        textShadow: "2px 2px 8px rgba(0,0,0,0.8)",
                        fontFamily: "'Playfair Display', serif",
                        fontSize: { xs: "2.5rem", md: "3.5rem" },
                      }}
                    >
                      {service.bannerHeading}
                    </Typography>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 400,
                        color: "white",
                        textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                        mb: 4,
                        fontSize: { xs: "1.25rem", md: "1.75rem" },
                      }}
                    >
                      {service.bannerSubheading}
                    </Typography>
                  </motion.div>
                </Box>
              </Container>
            </Box>
          </motion.div>
        </Box>
      </Container>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ mb: 10, px: { xs: 2, md: 4 } }}>
        {/* Service Intro */}
        <Box sx={{ mb: 4 }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, md: 6 },
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: 2,
                backgroundColor: "rgba(255,255,255,0.9)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.05)",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 4,
                  flexDirection: { xs: "column", md: "row" },
                }}
              >
                <motion.div variants={slideUp}>
                  <Avatar
                    sx={{
                      width: 100,
                      height: 100,
                      mr: { xs: 0, md: 4 },
                      mb: { xs: 3, md: 0 },
                      bgcolor: `${service.color}20`,
                      color: service.color,
                      border: `2px solid ${service.color}`,
                    }}
                  >
                    {service.icon}
                  </Avatar>
                </motion.div>
                <motion.div variants={slideUp}>
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: 700,
                      color: "text.primary",
                      fontFamily: "'Playfair Display', serif",
                      textAlign: { xs: "center", md: "left" },
                      fontSize: { xs: "2rem", md: "2.5rem" },
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Divider
                    sx={{
                      width: 80,
                      height: 4,
                      backgroundColor: service.color,
                      mt: 2,
                      mb: { xs: 2, md: 0 },
                      mx: { xs: "auto", md: "inherit" },
                    }}
                  />
                </motion.div>
              </Box>

              <Grid container spacing={6}>
                <Grid item xs={12} md={6}>
                  <motion.div variants={slideUp}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: "text.secondary",
                        lineHeight: 1.8,
                        fontSize: "1.1rem",
                        mb: 4,
                      }}
                    >
                      {service.description}
                    </Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {[1].map((item) => (
                        <Chip
                          key={item}
                          icon={<Verified sx={{ color: service.color }} />}
                          label={`Certified ${service.title.split(" ")[0]}`}
                          variant="outlined"
                          sx={{ borderColor: service.color }}
                        />
                      ))}
                    </Box>
                  </motion.div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <motion.div variants={slideUp}>
                    <Box>
                      <Typography
                        variant="h4"
                        sx={{
                          fontWeight: 600,
                          mb: 3,
                          color: service.color,
                          fontFamily: "'Playfair Display', serif",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Star sx={{ mr: 1 }} /> Why Choose Us
                      </Typography>
                      <List>
                        {service.benefits.map((benefit, index) => (
                          <motion.div
                            key={index}
                            variants={slideUp}
                            whileHover={{ x: 5 }}
                          >
                            <ListItem sx={{ px: 0, py: 1 }}>
                              <ListItemIcon sx={{ minWidth: 40 }}>
                                <CheckCircle sx={{ color: service.color }} />
                              </ListItemIcon>
                              <ListItemText
                                primary={benefit}
                                primaryTypographyProps={{
                                  variant: "body1",
                                  sx: { fontWeight: 500 },
                                }}
                              />
                            </ListItem>
                          </motion.div>
                        ))}
                      </List>
                    </Box>
                  </motion.div>
                </Grid>
              </Grid>
            </Paper>
          </motion.div>
        </Box>

        {/* Features and Services */}
        <Box sx={{ mb: 4 }}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: "100%",
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: 2,
                    boxShadow: "0 8px 32px rgba(0,0,0,0.05)",
                    transition: "transform 0.3s",
                    "&:hover": {
                      transform: "translateY(-5px)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: 3,
                    }}
                  >
                    <Box
                      sx={{
                        width: 8,
                        height: 40,
                        backgroundColor: service.color,
                        mr: 2,
                        borderRadius: 1,
                      }}
                    />
                    <Typography
                      variant="h3"
                      sx={{
                        alignContent: "center",
                        fontWeight: 600,
                        color: service.color,
                        fontFamily: "'Playfair Display', serif",
                        fontSize: { xs: "1.75rem", md: "2rem" },
                      }}
                    >
                      Our Solutions
                    </Typography>
                  </Box>
                  <List>
                    {service.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        variants={slideUp}
                        whileHover={{ x: 5 }}
                      >
                        <ListItem sx={{ px: 0, py: 1 }}>
                          <ListItemIcon sx={{ minWidth: 40 }}>
                            <CheckCircle sx={{ color: service.color }} />
                          </ListItemIcon>
                          <ListItemText
                            primary={feature}
                            primaryTypographyProps={{ variant: "body1" }}
                          />
                        </ListItem>
                      </motion.div>
                    ))}
                  </List>
                </Paper>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: 0.2 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: "100%",
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: 2,
                    boxShadow: "0 8px 32px rgba(0,0,0,0.05)",
                    transition: "transform 0.3s",
                    "&:hover": {
                      transform: "translateY(-5px)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: 3,
                    }}
                  >
                    <Box
                      sx={{
                        width: 8,
                        height: 40,
                        backgroundColor: service.color,
                        mr: 2,
                        borderRadius: 1,
                      }}
                    />
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 600,
                        color: service.color,
                        fontFamily: "'Playfair Display', serif",
                        fontSize: { xs: "1.75rem", md: "2rem" },
                      }}
                    >
                      Our Services
                    </Typography>
                  </Box>
                  <List>
                    {service.services.map((serviceItem, index) => (
                      <motion.div
                        key={index}
                        variants={slideUp}
                        whileHover={{ x: 5 }}
                      >
                        <ListItem sx={{ px: 0, py: 1 }}>
                          <ListItemIcon sx={{ minWidth: 40 }}>
                            <CheckCircle sx={{ color: service.color }} />
                          </ListItemIcon>
                          <ListItemText
                            primary={serviceItem}
                            primaryTypographyProps={{ variant: "body1" }}
                          />
                        </ListItem>
                      </motion.div>
                    ))}
                  </List>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Box>

        {/* Target Audience */}
        {service.targetAudience && (
          <Box>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.3 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 6 },
                  border: `1px solid ${theme.palette.divider}`,
                  borderRadius: "12px",
                  backgroundColor: `${service.color}08`,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    boxShadow: "0 6px 24px rgba(0,0,0,0.12)",
                  },
                }}
              >
                <Box
                  sx={{
                    textAlign: "center",
                    mb: 5,
                    px: { xs: 0, sm: 2 },
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 600,
                      mb: 3,
                      color: service.color,
                      fontFamily: "'Cormorant Garamond', serif",
                      letterSpacing: "0.02em",
                      position: "relative",
                      display: "inline-block",
                      "&:after": {
                        content: '""',
                        position: "absolute",
                        bottom: -8,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "60px",
                        height: "2px",
                        backgroundColor: service.color,
                      },
                    }}
                  >
                    <EmojiEvents
                      sx={{
                        mr: 2,
                        fontSize: "1.5rem",
                        verticalAlign: "middle",
                      }}
                    />
                    Who Benefits From This Service?
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "text.secondary",
                      fontStyle: "italic",
                      letterSpacing: "0.01em",
                      maxWidth: "600px",
                      mx: "auto",
                    }}
                  >
                    Trusted by discerning professionals and visionary
                    organizations worldwide
                  </Typography>
                </Box>

                <Grid container spacing={3}>
                  {service.targetAudience.map((audience, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <motion.div variants={slideUp} whileHover={{ y: -4 }}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "flex-start",
                            p: 3,
                            backgroundColor: "rgba(255,255,255,0.8)",
                            borderRadius: "8px",
                            borderLeft: `3px solid ${service.color}`,
                            height: "100%",
                            transition: "all 0.3s ease",
                            "&:hover": {
                              backgroundColor: "rgba(255,255,255,0.95)",
                              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                            },
                          }}
                        >
                          <CheckCircle
                            sx={{
                              color: service.color,
                              mr: 2,
                              mt: "2px",
                              fontSize: "1.4rem",
                              opacity: 0.9,
                            }}
                          />
                          <Typography
                            variant="body1"
                            sx={{
                              lineHeight: 1.6,
                              letterSpacing: "0.01em",
                            }}
                          >
                            {audience}
                          </Typography>
                        </Box>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </motion.div>
          </Box>
        )}

        {/* Call to Action */}
        <Box sx={{ mx: "auto", my: 3 }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ delay: 0.4 }}
          >
            <Paper
              elevation={0}
              sx={{
                p: { xs: 4, md: 8 },
                textAlign: "center",
                backgroundColor: `${service.color}08`,
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: 3,
                boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
                position: "relative",
                overflow: "hidden",
                "&:hover": {
                  boxShadow: "0 16px 48px rgba(0,0,0,0.12)",
                },
                transition: "all 0.3s ease-in-out",
              }}
            >
              {/* Decorative elements */}
              <Box
                sx={{
                  position: "absolute",
                  top: -120,
                  right: -120,
                  width: 350,
                  height: 350,
                  borderRadius: "50%",
                  backgroundColor: `${service.color}10`,
                  zIndex: 0,
                  opacity: 0.6,
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: -80,
                  left: -80,
                  width: 250,
                  height: 250,
                  borderRadius: "50%",
                  backgroundColor: `${service.color}05`,
                  zIndex: 0,
                }}
              />

              <Box sx={{ position: "relative", zIndex: 1 }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 500,
                    mb: 3,
                    color: theme.palette.text.primary,
                    fontFamily: "'Playfair Display', serif",
                    letterSpacing: 0.5,
                    fontSize: { xs: "2rem", md: "2.5rem" },
                  }}
                >
                  Ready to Get Started?
                </Typography>

                <Divider
                  sx={{
                    width: 80,
                    height: 2,
                    backgroundColor: service.color,
                    mx: "auto",
                    mb: 4,
                  }}
                />

                <Typography
                  variant="body1"
                  sx={{
                    mb: 5,
                    maxWidth: 600,
                    mx: "auto",
                    fontSize: "1.15rem",
                    lineHeight: 1.7,
                    color: theme.palette.text.secondary,
                  }}
                >
                  {service.cta ||
                    "Contact us today to learn more about how we can help you."}
                </Typography>

                <Typography
                  variant="subtitle1"
                  sx={{
                    mb: 3,
                    color: theme.palette.text.secondary,
                    letterSpacing: 1,
                    textTransform: "uppercase",
                    fontSize: "0.85rem",
                  }}
                >
                  {service.wtc || "Talk to ourExperts today"}
                </Typography>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    onClick={() => navigate("/#send-sms")}
                    variant="contained"
                    size="large"
                    sx={{
                      px: 6,
                      py: 1.5,
                      fontSize: "1rem",
                      backgroundColor: service.color,
                      color: "#fff",
                      borderRadius: 50,
                      letterSpacing: 1,
                      textTransform: "uppercase",
                      boxShadow: `0 4px 20px ${service.color}30`,
                      "&:hover": {
                        backgroundColor: service.color,
                        boxShadow: `0 6px 24px ${service.color}40`,
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    {service.btn || "Contact Us"}
                  </Button>
                </motion.div>
              </Box>
            </Paper>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default ServiceDetail;
