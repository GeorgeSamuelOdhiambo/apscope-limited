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
} from "@mui/material";
import { styled, keyframes } from "@mui/material/styles";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import TargetIcon from "@mui/icons-material/Handshake";
import PartnershipIcon from "@mui/icons-material/Handshake";
import StarIcon from "@mui/icons-material/Star";
import GrowIcon from "@mui/icons-material/TrendingUp";
import GlobalIcon from "@mui/icons-material/Public";

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

const VisionObjectives = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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
    <Container id="profile" maxWidth={false} sx={{ maxWidth: 1200, mt: 5 }}>
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
              ABOUT US
            </Typography>
            <Typography
              variant={isMobile ? "h3" : "h2"}
              component="h2"
              sx={{
                fontWeight: 700,
                color: "text.primary",
                mb: 3,
                "&:hover": {
                  animation: `${float} 3s ease-in-out infinite`,
                },
              }}
            >
              Vision & Objectives
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
      </Box>

      {/* Introductory Statement */}
      <Fade in timeout={800}>
        <Box
          sx={{
            maxWidth: 800,
            mx: "auto",
            mb: 8,
            "&:hover": {
              transform: "scale(1.02)",
              transition: "transform 0.3s ease",
            },
          }}
        >
          <Typography
            variant="h6"
            component="p"
            sx={{
              fontStyle: "italic",
              textAlign: "center",
              lineHeight: 1.8,
              color: "text.primary",
            }}
          >
            "We are committed to building enduring partnerships and creating
            transformative value for our clients. Leveraging our core values as
            our foundation, we pursue excellence across all dimensions of our
            business."
          </Typography>
        </Box>
      </Fade>

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
                      p: 4,
                      backgroundColor: "rgba(255,255,255,0.9)",
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
                      p: 4,
                      backgroundColor: "rgba(255,255,255,0.9)",
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

      {/* Closing Statement */}
      <Fade in timeout={1200}>
        <Box
          sx={{
            mt: 10,
            textAlign: "center",
            "&:hover": {
              "& .MuiDivider-root": {
                width: "50%",
                transition: "width 0.5s ease",
              },
            },
          }}
        >
          <Typography
            variant="h5"
            component="p"
            sx={{
              maxWidth: 800,
              mx: "auto",
              lineHeight: 1.8,
              fontWeight: 500,
              mb: 4,
            }}
          >
            Our ultimate objective is to be the most valued partner to our
            clients—delivering consistent, measurable impact through our
            solutions.
          </Typography>
          {/* <AnimatedDivider
            sx={{
              width: 120,
              height: 2,
              backgroundColor: "divider",
              mx: "auto",
              my: 4,
            }}
          /> */}
        </Box>
      </Fade>
    </Container>
  );
};

export default VisionObjectives;
