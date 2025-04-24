import React from "react";
import {
  Box,
  Container,
  Typography,
  Divider,
  useTheme,
  useMediaQuery,
  Avatar,
  Paper,
  Fade,
  Slide,
  Grid,
  Zoom,
  Grow,
  Stack,
  Chip,
  Button,
} from "@mui/material";
import { styled, keyframes } from "@mui/material/styles";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import TargetIcon from "@mui/icons-material/Handshake";
import PartnershipIcon from "@mui/icons-material/Handshake";
import StarIcon from "@mui/icons-material/Star";
import GrowIcon from "@mui/icons-material/TrendingUp";
import GlobalIcon from "@mui/icons-material/Public";
import { useNavigate } from "react-router-dom";

// Custom pulse animation
const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

// Custom float animation
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
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

const companyInfo = {
  name: "APSCOPE LIMITED",
  email: "info@apscopelimited.com",
  address: "Karen Plains Arcade, Karen Plains Road",
  postal: "P.O. Box 68254 – 00200, Nairobi, Kenya",
  founded: "2008",
  ownership: "100% Kenyan-owned",
  sectors: ["Health", "Construction", "Human Capital", "Project Consultancy"],
};

// Why Partner With Us
const partnershipBenefits = [
  "Local expertise across East Africa",
  "Established government & private sector links",
  "End-to-end services – from regulatory to delivery",
  "15+ years of multisectoral experience",
  "Transparent, value-driven partnerships",
];

const VisionObjectives = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const visionPillars = [
    {
      icon: <GlobalIcon />,
      title: "Global Recognition",
      content:
        "Establish as a premier company renowned worldwide for innovation and reliability.",
    },
    {
      icon: <StarIcon />,
      title: "Excellence Standard",
      content:
        "Pursue excellence across all dimensions of our business operations.",
    },
    {
      icon: <GrowIcon />,
      title: "Talent Investment",
      content:
        "Foster continuous learning to build an unparalleled team of experts.",
    },
  ];

  const objectives = [
    {
      icon: <PartnershipIcon />,
      title: "Enduring Partnerships",
      content:
        "Build long-term relationships based on trust and mutual success.",
    },
    {
      icon: <EmojiObjectsIcon />,
      title: "Transformative Value",
      content:
        "Create measurable impact through innovative solutions and services.",
    },
    {
      icon: <TargetIcon />,
      title: "Client-Centric Focus",
      content:
        "Maintain unwavering commitment to our clients' objectives and success.",
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#f9f9f9",
        backgroundImage:
          "linear-gradient(to bottom, #ffffff,rgb(192, 225, 238))",
      }}
    >
      <Container
        id="profile"
        maxWidth="lg"
        sx={{
          mt: 5,
        }}
      >
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
                ABOUT APSCOPE LIMITED
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
                Innovating Solutions, Connecting Possibilities
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
                mt: 4,
                p: 4,
              }}
            >
              <Typography
                variant="h6"
                component="p"
                sx={{
                  textAlign: "center",
                  lineHeight: 1.8,
                  color: "text.primary",
                  mb: 2,
                }}
              >
                Since {companyInfo.founded}, we have delivered innovative and
                reliable solutions in {companyInfo.sectors.join(", ")}. Based in
                Nairobi, Kenya, and {companyInfo.ownership}, we are committed to
                creating sustainable value through partnerships across East
                Africa and beyond.
              </Typography>
              <Stack
                direction="row"
                spacing={1}
                justifyContent="center"
                sx={{ mt: 2 }}
              >
                {companyInfo.sectors.map((sector, index) => (
                  <Chip
                    key={index}
                    label={sector}
                    color="primary"
                    variant="outlined"
                    sx={{ fontWeight: 600 }}
                  />
                ))}
              </Stack>

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
                  "We are committed to building enduring partnerships and
                  creating transformative value for our clients. Leveraging our
                  core values as our foundation, we pursue excellence across all
                  dimensions of our business."
                </Typography>
              </Box>
            </Box>
          </Fade>
        </Box>

        {/* Vision Column */}
        <Box sx={{ mb: 10 }}>
          <Slide direction="left" in timeout={600}>
            <Box sx={{ textAlign: "center", mb: 1 }}>
              <Typography
                variant="h5"
                component="h3"
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 2,
                  fontWeight: 800,
                  color: "text.primary",
                  "&:hover": {
                    "& svg": {
                      animation: `${float} 2s ease-in-out infinite`,
                    },
                  },
                }}
              >
                Our Vision
              </Typography>
            </Box>
          </Slide>

          <Grid container spacing={4} justifyContent="center">
            {visionPillars.map((item, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Grow
                  in
                  timeout={800 + index * 200}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Box sx={{ display: "flex", height: "100%" }}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 2,
                        backgroundColor: "#f9f9f9",
                        backgroundImage:
                          "linear-gradient(to bottom, #ffffff,rgb(221, 237, 243))",
                        borderRadius: theme.shape.borderRadius,
                        borderRight: `3px solid ${theme.palette.primary.main}`,
                        flexGrow: 1,
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-5px)",
                          boxShadow: theme.shadows[6],
                          "& .MuiAvatar-root": {
                            transform: "rotate(15deg)",
                            transition: "transform 0.3s ease",
                          },
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
                        <Avatar
                          sx={{
                            bgcolor: "primary.light",
                            color: "primary.contrastText",
                            mr: 2,
                            width: 48,
                            height: 48,
                            transition: "transform 0.3s ease",
                          }}
                        >
                          {item.icon}
                        </Avatar>
                        <Typography
                          variant="h6"
                          component="h5"
                          sx={{ fontWeight: 600 }}
                        >
                          {item.title}
                        </Typography>
                      </Box>
                      <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        {item.content}
                      </Typography>
                    </Paper>
                  </Box>
                </Grow>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Objectives Column */}
        <Box>
          <Slide direction="right" in timeout={600}>
            <Box sx={{ textAlign: "center", mb: 3 }}>
              <Typography
                variant="h5"
                component="h3"
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 2,
                  fontWeight: 800,
                  color: "text.primary",
                  "&:hover": {
                    "& svg": {
                      animation: `${pulse} 1.5s ease-in-out infinite`,
                    },
                  },
                }}
              >
                Our Objectives
              </Typography>
            </Box>
          </Slide>

          <Grid container spacing={4} justifyContent="center">
            {objectives.map((item, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Zoom
                  in
                  timeout={800 + index * 200}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Box sx={{ display: "flex", height: "100%" }}>
                    <Box
                      sx={{
                        p: 2,
                        backgroundColor: "#f9f9f9",
                        backgroundImage:
                          "linear-gradient(to bottom, #ffffff,rgb(221, 237, 243))",
                        borderRadius: theme.shape.borderRadius,
                        borderLeft: `3px solid ${theme.palette.secondary.main}`,
                        flexGrow: 1,
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "scale(1.03)",
                          boxShadow: theme.shadows[4],
                          borderLeftWidth: "5px",
                          "& .MuiAvatar-root": {
                            animation: `${pulse} 1s ease-in-out infinite`,
                          },
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
                        <Avatar
                          sx={{
                            bgcolor: "secondary.light",
                            color: "secondary.contrastText",
                            mr: 2,
                            width: 48,
                            height: 48,
                          }}
                        >
                          {item.icon}
                        </Avatar>
                        <Typography
                          variant="h6"
                          component="h5"
                          sx={{ fontWeight: 600 }}
                        >
                          {item.title}
                        </Typography>
                      </Box>
                      <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                        {item.content}
                      </Typography>
                    </Box>
                  </Box>
                </Zoom>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Partnership Section */}
        <Box sx={{ mt: 10 }}>
          <Paper
            elevation={3}
            sx={{
              p: 6,
              background: ` linear-gradient(110deg,rgb(139, 68, 214) 0%, #8a2be2 45%,rgb(230, 76, 129) 100%),
              radial-gradient(circle at 20% 80%, 
              rgba(255,255,255,0.3) 0%, transparent 40%)`,
              color: theme.palette.primary.contrastText,
              borderRadius: theme.shape.borderRadius * 2,
              position: "relative",
              overflow: "hidden",
              transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              transform: "translateY(0)",
              boxShadow: `${theme.shadows[4]}, inset 0 1px 1px rgba(255,255,255,0.2)`,
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: `${theme.shadows[8]}, inset 0 1px 1px rgba(255,255,255,0.3)`,
                "&::after": {
                  opacity: 0.15,
                },
              },
              "&::before": {
                content: '""',
                position: "absolute",
                top: "-50%",
                left: "-50%",
                right: "-50%",
                bottom: "-50%",
                background: `linear-gradient(to bottom right,rgba(255,255,255,0) 45%,rgba(255,255,255,0.1) 50%,rgba(255,255,255,0) 55%)`,
                transform: "rotate(15deg)",
                animation: "shimmer 8s infinite linear",
                pointerEvents: "none",
              },
              "&::after": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `radial-gradient(circle at center, ${theme.palette.primary.light} 0%, transparent 70%)`,
                opacity: 0.1,
                transition: "opacity 0.4s ease",
                pointerEvents: "none",
              },
              "@keyframes shimmer": {
                "0%": {
                  transform: "translateX(-100%) rotate(15deg)",
                },
                "100%": {
                  transform: "translateX(100%) rotate(15deg)",
                },
              },
            }}
          >
            <Typography
              variant="h4"
              component="h3"
              sx={{
                textAlign: "center",
                fontWeight: 700,
                mb: 4,
                position: "relative",
                zIndex: 1,
                animation: `${pulse} 2s infinite`,
              }}
            >
              Why Partner With APSCOPE?
            </Typography>
            <Grid container spacing={4}>
              {partnershipBenefits.map((benefit, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    <StarIcon
                      sx={{ mr: 2, mt: "2px", color: "secondary.light" }}
                    />
                    <Typography
                      variant="body1"
                      sx={{ lineHeight: 1.6, fontSize: "1.1rem" }}
                    >
                      {benefit}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
            <Box sx={{ textAlign: "center", mt: 6 }}>
              <Button
                onClick={() => navigate(`/#send-sms`)}
                variant="contained"
                color="secondary"
                size="large"
                sx={{
                  px: 6,
                  py: 1.5,
                  fontWeight: 700,
                  fontSize: "1.1rem",
                }}
              >
                Contact Us Today
              </Button>
            </Box>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default VisionObjectives;
