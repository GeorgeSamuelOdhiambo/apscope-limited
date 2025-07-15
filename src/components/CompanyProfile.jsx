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
import {
  EmojiObjects as InnovationIcon,
  Public as GlobalIcon,
  TrendingUp as GrowthIcon,
  Stars as ExcellenceIcon,
  Handshake as PartnershipIcon,
  Groups as CollaborationIcon,
  Business as BusinessIcon,
  Checklist as ChecklistIcon,
  PlayCircleFilled as PlayCircleFilledIcon,
  Assignment as AssignmentIcon,
} from "@mui/icons-material";
// import { useNavigate } from "react-router-dom";
// import StarIcon from "@mui/icons-material/Star";
// Custom animations
const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const AnimatedDivider = styled(Divider)(({ theme }) => ({
  height: 4,
  width: 80,
  margin: "16px auto",
  backgroundColor: theme.palette.primary.main,
  transition: "all 0.5s ease",
  "&:hover": {
    width: 120,
    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
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

// const partnershipBenefits = [
//   "Local expertise across East Africa",
//   "Established government & private sector links",
//   "End-to-end services – from regulatory to delivery",
//   "15+ years of multisectoral experience",
//   "Transparent, value-driven partnerships",
// ];

const VisionObjectives = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  // const navigate = useNavigate();

  return (
    <Box
      sx={{
        pt: 5,
        backgroundColor: "#f9f9f9",
        backgroundImage:
          "linear-gradient(to bottom, #ffffff,rgb(192, 225, 238))",
      }}
    >
      <Container id="profile" maxWidth="lg">
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
                  display: "block",
                  mb: 2,
                  fontSize: "0.9rem",
                  animation: `${pulse} 2s infinite`,
                }}
              >
                ABOUT APSCOPE LIMITED
              </Typography>
              <Typography
                variant={isMobile ? "h4" : "h3"}
                component="h4"
                sx={{
                  fontWeight: 700,
                  color: "text.primary",
                  mb: 3,
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                Welcome to Apscope Limited
              </Typography>
              <AnimatedDivider />
            </Box>
          </Slide>

          {/* Introductory Statement */}
          <Fade in timeout={800}>
            <Box sx={{ mt: 4 }}>
              <Typography
                variant="h6"
                component="p"
                sx={{
                  textAlign: "center",
                  lineHeight: 1.8,
                  color: "text.secondary",
                  mb: 3,
                  maxWidth: 800,
                  mx: "auto",
                  px: 2,
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: 300,
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
                sx={{ mt: 3 }}
              >
                {companyInfo.sectors.map((sector, index) => (
                  <Chip
                    key={index}
                    label={sector}
                    color="primary"
                    variant="outlined"
                    sx={{
                      fontWeight: 600,
                      borderColor: theme.palette.primary.main,
                      color: theme.palette.primary.main,
                      "&:hover": {
                        backgroundColor: theme.palette.primary.main,
                        color: theme.palette.primary.contrastText,
                      },
                    }}
                  />
                ))}
              </Stack>

              <Box sx={{ mt: 5, position: "relative" }}>
                <Typography
                  variant={isMobile ? "body1" : "h6"}
                  component="p"
                  sx={{
                    textAlign: "center",
                    lineHeight: 1.8,
                    color: "text.primary",
                    fontStyle: "italic",
                    maxWidth: 800,
                    mx: "auto",
                    px: 2,
                    position: "relative",
                    "&:before, &:after": {
                      content: '""',
                      position: "absolute",
                      top: "50%",
                      width: 40,
                      height: 2,
                      backgroundColor: theme.palette.primary.light,
                      [theme.breakpoints.down("sm")]: { display: "none" },
                    },
                    "&:before": { left: -60 },
                    "&:after": { right: -60 },
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

        <Box
          sx={{
            py: 8,
            px: { xs: 2, sm: 4, md: 6 },
          }}
        >
          <Grid
            container
            spacing={{ xs: 4, md: 6 }}
            alignItems="stretch"
            justifyContent="center"
          >
            {/* Left Column - Vision & Mission */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  height: "100%",
                  justifyContent: "center",
                  px: { xs: 2, sm: 4 },
                }}
              >
                {/* Vision */}
                <Box
                  sx={{
                    mb: 5,
                    width: "100%",
                    maxWidth: 500,
                    px: { xs: 1, sm: 2 },
                  }}
                >
                  <BusinessIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
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
                    Our Vision
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      lineHeight: 1.8,
                      fontSize: { xs: "1rem", sm: "1.1rem" },
                      color: "text.secondary",
                      fontStyle: "italic",
                    }}
                  >
                    "To be a Premier Company among the Top 100 Companies in
                    Africa."
                  </Typography>
                </Box>

                {/* Mission */}
                <Box
                  sx={{
                    width: "100%",
                    maxWidth: 500,
                    px: { xs: 1, sm: 2 },
                  }}
                >
                  <AssignmentIcon
                    color="primary"
                    sx={{ fontSize: 40, mb: 2 }}
                  />
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
                    Our Mission
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      lineHeight: 1.8,
                      fontSize: { xs: "1rem", sm: "1.1rem" },
                      color: "text.secondary",
                    }}
                  >
                    "To effectively, efficiently and innovatively build and
                    create value for our customers, directors, staff and the
                    public."
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/* Right Column - YouTube Video */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  minHeight: { xs: 300, sm: 400 },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 2,
                  overflow: "hidden",
                  backgroundColor: "transparent",
                  position: "relative",
                  "& iframe": {
                    backgroundColor: "transparent",
                  },
                }}
              >
                <iframe
                  width="100%"
                  height="100%"
                  minHeight="400"
                  src="https://www.youtube.com/embed/tUP5S4YdEJo"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    border: "none",
                    borderRadius: "8px",
                    aspectRatio: "16/9",
                  }}
                ></iframe>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Partnership Section */}
        {/* <Box sx={{ mt: 10 }}>
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
                mb: 6,
                position: "relative",
                fontFamily: "'Playfair Display', serif",
                animation: `${pulse} 2s infinite`,
              }}
            >
              <CollaborationIcon
                sx={{
                  fontSize: 48,
                  verticalAlign: "middle",
                  mr: 2,
                }}
              />
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
        </Box> */}
      </Container>
    </Box>
  );
};

export default VisionObjectives;
