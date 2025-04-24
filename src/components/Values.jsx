import React, { useState } from "react";
import {
  Box,
  Typography,
  Divider,
  Grid,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
  Grow,
  Avatar,
  Fade,
} from "@mui/material";
import { styled, keyframes } from "@mui/material/styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import GroupIcon from "@mui/icons-material/Group";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import BuildIcon from "@mui/icons-material/Build";
import StarIcon from "@mui/icons-material/Star";

const gradientFlow = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const textGlow = keyframes`
  0% { text-shadow: 0 0 0 rgba(0, 0, 0, 0.1); }
  50% { text-shadow: 0 0 10px rgba(0, 0, 0, 0.2); }
  100% { text-shadow: 0 0 0 rgba(0, 0, 0, 0.1); }
`;

const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0px); }
`;

// Styled components
const ElegantCard = styled(Card)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
  borderRadius: "12px",
  "&:before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
    zIndex: -1,
  },
  "&:after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: "12px",
    pointerEvents: "none",
    opacity: 0.5,
  },
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: theme.shadows[8],
    "& .valueIcon": {
      transform: "scale(1.1)",
      filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))",
    },
    "& .valueTitle": {
      color: theme.palette.primary.main,
    },
    "& .valueDescription": {
      color: theme.palette.text.primary,
    },
  },
}));

const SectionDivider = styled(Divider)(({ theme }) => ({
  height: "3px",
  width: "80px",
  margin: "24px auto",
  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  backgroundSize: "200% 200%",
  borderRadius: "3px",
  animation: `${gradientFlow} 4s ease infinite`,
}));

const AnimatedTitle = styled(Typography)({
  animation: `${floatAnimation} 3s ease-in-out infinite, ${textGlow} 4s ease-in-out infinite`,
  display: "inline-block",
});

const Values = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [hoveredValue, setHoveredValue] = useState(null);

  const coreValues = [
    {
      title: "Integrity",
      description:
        "We uphold the highest standards of integrity in all our actions, ensuring transparency and ethical conduct.",
      icon: <CheckCircleIcon />,
      color: theme.palette.success.main,
    },
    {
      title: "Excellence",
      description:
        "We pursue excellence in everything we do, delivering superior quality and continuous improvement.",
      icon: <StarIcon />,
      color: theme.palette.warning.main,
    },
    {
      title: "Collaboration",
      description:
        "We foster teamwork and partnerships to achieve shared success and mutual growth.",
      icon: <GroupIcon />,
      color: theme.palette.info.main,
    },
    {
      title: "Reliability",
      description:
        "We are a steadfast partner, consistently delivering on our promises with dependability.",
      icon: <ThumbUpIcon />,
      color: theme.palette.primary.main,
    },
    {
      title: "Innovation",
      description:
        "We embrace creativity and forward-thinking solutions to drive progress and efficiency.",
      icon: <EmojiObjectsIcon />,
      color: theme.palette.secondary.main,
    },
    {
      title: "Customer Focus",
      description:
        "We prioritize our clients' needs, building lasting relationships through exceptional service.",
      icon: <BuildIcon />,
      color: theme.palette.error.main,
    },
  ];

  return (
    <Box
      id="values"
      sx={{
        pt: 5,
        pb: 10,
        position: "relative",
        overflow: "hidden",
        "&:before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        },
        "&:after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        },
        backgroundColor: "#f9f9f9",
        backgroundImage:
          "linear-gradient(to bottom, #ffffff,rgb(192, 225, 238))",
      }}
    >
      <>
        {/* Section Header */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Fade in timeout={800}>
            <Box>
              <Typography
                variant="overline"
                component="span"
                sx={{
                  color: "secondary.main",
                  fontWeight: 600,
                  letterSpacing: 2,
                  display: "block", // Changed from inline-block to block
                  mb: 2,
                  animation: `${textGlow} 4s ease-in-out infinite`,
                }}
              >
                VALUES
              </Typography>
              <AnimatedTitle
                variant={isMobile ? "h5" : "h4"}
                component="h4"
                sx={{
                  fontWeight: 700,
                  color: "text.primary",
                  mb: 3,
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                Company Core Values
              </AnimatedTitle>
              <SectionDivider />
            </Box>
          </Fade>
        </Box>

        {/* Core Values Grid */}
        <Grid container spacing={4} sx={{ justifyContent: "center" }}>
          {coreValues.map((value, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              onMouseEnter={() => setHoveredValue(index)}
              onMouseLeave={() => setHoveredValue(null)}
            >
              <Grow
                in
                timeout={800 + index * 100}
                easing="cubic-bezier(0.34, 1.56, 0.64, 1)"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <ElegantCard
                  elevation={hoveredValue === index ? 8 : 2}
                  sx={{
                    width: "100%",
                    maxWidth: 380,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    background: theme.palette.background.paper,
                  }}
                >
                  <CardContent sx={{ width: "100%", p: 4 }}>
                    <Avatar
                      className="valueIcon"
                      sx={{
                        bgcolor: "transparent",
                        color: value.color,
                        mb: 3,
                        width: 64,
                        height: 64,
                        mx: "auto",
                        transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
                        border: `2px solid ${value.color}`,
                        "& svg": {
                          fontSize: "32px",
                        },
                      }}
                    >
                      {value.icon}
                    </Avatar>
                    <Typography
                      className="valueTitle"
                      variant="h6"
                      component="h3"
                      sx={{
                        fontWeight: 600,
                        color: "text.primary",
                        mb: 2,
                        transition: "all 0.3s ease",
                        fontFamily: "'Playfair Display', serif",
                      }}
                    >
                      {value.title}
                    </Typography>
                    <Typography
                      className="valueDescription"
                      variant="body1"
                      sx={{
                        color: "text.secondary",
                        lineHeight: 1.7,
                        transition: "all 0.3s ease",
                        fontFamily: "'Roboto', sans-serif",
                        fontWeight: 300,
                      }}
                    >
                      {value.description}
                    </Typography>
                  </CardContent>
                </ElegantCard>
              </Grow>
            </Grid>
          ))}
        </Grid>
      </>
    </Box>
  );
};

export default Values;
