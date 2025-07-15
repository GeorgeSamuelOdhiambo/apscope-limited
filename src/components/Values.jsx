// import React, { useState } from "react";
// import {
//   Box,
//   Typography,
//   Divider,
//   Grid,
//   Card,
//   CardContent,
//   useTheme,
//   useMediaQuery,
//   Grow,
//   Avatar,
//   Fade,
// } from "@mui/material";
// import { styled, keyframes } from "@mui/material/styles";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
// import GroupIcon from "@mui/icons-material/Group";
// import ThumbUpIcon from "@mui/icons-material/ThumbUp";
// import BuildIcon from "@mui/icons-material/Build";
// import StarIcon from "@mui/icons-material/Star";

// const gradientFlow = keyframes`
//   0% { background-position: 0% 50%; }
//   50% { background-position: 100% 50%; }
//   100% { background-position: 0% 50%; }
// `;

// const textGlow = keyframes`
//   0% { text-shadow: 0 0 0 rgba(0, 0, 0, 0.1); }
//   50% { text-shadow: 0 0 10px rgba(0, 0, 0, 0.2); }
//   100% { text-shadow: 0 0 0 rgba(0, 0, 0, 0.1); }
// `;

// const floatAnimation = keyframes`
//   0% { transform: translateY(0px); }
//   50% { transform: translateY(-5px); }
//   100% { transform: translateY(0px); }
// `;

// const pulseAnimation = keyframes`
//   0% { transform: scale(1); }
//   50% { transform: scale(1.05); }
//   100% { transform: scale(1); }
// `;

// // Styled components
// const ElegantCard = styled(Card)(({ theme }) => ({
//   position: "relative",
//   overflow: "hidden",
//   transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
//   borderRadius: "16px",
//   boxShadow: `0 6px 16px ${
//     theme.palette.mode === "dark" ? "rgba(0, 0, 0, 0.3)" : "rgba(0, 0, 0, 0.1)"
//   }`,
//   "&:before": {
//     content: '""',
//     position: "absolute",
//     top: 0,
//     left: 0,
//     width: "100%",
//     height: "100%",
//     background:
//       theme.palette.mode === "dark"
//         ? `linear-gradient(135deg, ${theme.palette.grey[900]} 0%, ${theme.palette.grey[800]} 100%)`
//         : `linear-gradient(135deg, ${theme.palette.background.paper} 0%, #f5f5f5 100%)`,
//     zIndex: -1,
//   },
//   "&:after": {
//     content: '""',
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     border: `1px solid ${theme.palette.divider}`,
//     borderRadius: "16px",
//     pointerEvents: "none",
//     opacity: 0.3,
//   },
//   "&:hover": {
//     transform: "translateY(-8px)",
//     boxShadow: `0 12px 28px ${
//       theme.palette.mode === "dark"
//         ? "rgba(0, 0, 0, 0.5)"
//         : "rgba(0, 0, 0, 0.2)"
//     }`,
//     "& .valueIcon": {
//       transform: "scale(1.1)",
//       filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))",
//       animation: `${pulseAnimation} 2s infinite`,
//     },
//     "& .valueTitle": {
//       color: theme.palette.primary.main,
//       textShadow: `0 0 8px ${theme.palette.primary.light}`,
//     },
//     "& .valueDescription": {
//       color: theme.palette.text.primary,
//     },
//     "& .cardGradient": {
//       opacity: 0.1,
//     },
//   },
// }));

// const CardGradient = styled("div")(({ theme, color }) => ({
//   position: "absolute",
//   top: 0,
//   left: 0,
//   width: "100%",
//   height: "100%",
//   background: `radial-gradient(circle at center, ${color} 0%, transparent 70%)`,
//   opacity: 0,
//   transition: "opacity 0.4s ease",
//   zIndex: -1,
// }));

// const SectionDivider = styled(Divider)(({ theme }) => ({
//   height: "4px",
//   width: "100px",
//   margin: "24px auto",
//   background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
//   backgroundSize: "200% 200%",
//   borderRadius: "4px",
//   animation: `${gradientFlow} 4s ease infinite`,
// }));

// const AnimatedTitle = styled(Typography)({
//   animation: `${floatAnimation} 3s ease-in-out infinite, ${textGlow} 4s ease-in-out infinite`,
//   display: "inline-block",
// });

// const Values = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
//   const [hoveredValue, setHoveredValue] = useState(null);

//   const coreValues = [
//     {
//       title: "Integrity",
//       description:
//         "We uphold the highest standards of integrity in all our actions, ensuring transparency and ethical conduct.",
//       icon: <CheckCircleIcon />,
//       color: theme.palette.success.main,
//     },
//     {
//       title: "Excellence",
//       description:
//         "We pursue excellence in everything we do, delivering superior quality and continuous improvement.",
//       icon: <StarIcon />,
//       color: theme.palette.warning.main,
//     },
//     {
//       title: "Collaboration",
//       description:
//         "We foster teamwork and partnerships to achieve shared success and mutual growth.",
//       icon: <GroupIcon />,
//       color: theme.palette.info.main,
//     },
//     {
//       title: "Reliability",
//       description:
//         "We are a steadfast partner, consistently delivering on our promises with dependability.",
//       icon: <ThumbUpIcon />,
//       color: theme.palette.primary.main,
//     },
//     {
//       title: "Innovation",
//       description:
//         "We embrace creativity and forward-thinking solutions to drive progress and efficiency.",
//       icon: <EmojiObjectsIcon />,
//       color: theme.palette.secondary.main,
//     },
//     {
//       title: "Customer Focus",
//       description:
//         "We prioritize our clients' needs, building lasting relationships through exceptional service.",
//       icon: <BuildIcon />,
//       color: theme.palette.error.main,
//     },
//   ];

//   return (
//     <Box
//       id="values"
//       sx={{
//         pt: 8,
//         pb: 5,
//         position: "relative",
//         overflow: "hidden",
//         "&:before": {
//           content: '""',
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           pointerEvents: "none",
//           background:
//             theme.palette.mode === "dark"
//               ? `radial-gradient(circle at 20% 30%, ${theme.palette.grey[900]} 0%, transparent 50%)`
//               : `radial-gradient(circle at 20% 30%, rgba(192, 225, 238, 0.3) 0%, transparent 50%)`,
//         },
//         "&:after": {
//           content: '""',
//           position: "absolute",
//           bottom: 0,
//           right: 0,
//           width: "100%",
//           height: "100%",
//           pointerEvents: "none",
//           background:
//             theme.palette.mode === "dark"
//               ? `radial-gradient(circle at 80% 70%, ${theme.palette.grey[800]} 0%, transparent 50%)`
//               : `radial-gradient(circle at 80% 70%, rgba(192, 225, 238, 0.3) 0%, transparent 50%)`,
//         },
//         backgroundColor: "#f9f9f9",
//         backgroundImage:
//           "linear-gradient(to bottom,rgb(192, 225, 238), #ffffff)",
//       }}
//     >
//       <>
//         {/* Section Header */}
//         <Box sx={{ textAlign: "center", mb: 8 }}>
//           <Fade in timeout={800}>
//             <Box>
//               <Typography
//                 variant="overline"
//                 component="span"
//                 sx={{
//                   color: "secondary.main",
//                   fontWeight: 600,
//                   letterSpacing: 2,
//                   display: "block",
//                   mb: 2,
//                   animation: `${textGlow} 4s ease-in-out infinite`,
//                   fontSize: "0.9rem",
//                   textTransform: "uppercase",
//                 }}
//               >
//                 Our Guiding Principles
//               </Typography>
//               <AnimatedTitle
//                 variant={isMobile ? "h4" : "h3"}
//                 component="h2"
//                 sx={{
//                   fontWeight: 700,
//                   color: "text.primary",
//                   mb: 3,
//                   fontFamily: "'Playfair Display', serif",
//                   letterSpacing: "0.5px",
//                 }}
//               >
//                 Company Core Values
//               </AnimatedTitle>
//               <SectionDivider />
//               <Typography
//                 variant="body1"
//                 sx={{
//                   maxWidth: "700px",
//                   margin: "0 auto",
//                   color: "text.secondary",
//                   fontFamily: "'Roboto', sans-serif",
//                   fontWeight: 300,
//                   lineHeight: 1.7,
//                   px: 2,
//                 }}
//               >
//                 These fundamental beliefs shape our culture, define our
//                 character, and guide how we behave in the world.
//               </Typography>
//             </Box>
//           </Fade>
//         </Box>

//         {/* Core Values Grid */}
//         <Grid
//           container
//           spacing={4}
//           sx={{ justifyContent: "center", px: isMobile ? 2 : 4 }}
//         >
//           {coreValues.map((value, index) => (
//             <Grid
//               item
//               xs={12}
//               sm={6}
//               md={4}
//               key={index}
//               onMouseEnter={() => setHoveredValue(index)}
//               onMouseLeave={() => setHoveredValue(null)}
//               sx={{ display: "flex", justifyContent: "center" }}
//             >
//               <Grow
//                 in
//                 timeout={800 + index * 100}
//                 easing="cubic-bezier(0.34, 1.56, 0.64, 1)"
//                 style={{ transitionDelay: `${index * 50}ms` }}
//               >
//                 <ElegantCard
//                   elevation={hoveredValue === index ? 8 : 2}
//                   sx={{
//                     width: "100%",
//                     maxWidth: 380,
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                     textAlign: "center",
//                     background: theme.palette.background.paper,
//                     minHeight: "320px",
//                   }}
//                 >
//                   <CardGradient className="cardGradient" color={value.color} />
//                   <CardContent
//                     sx={{
//                       width: "100%",
//                       p: 4,
//                       position: "relative",
//                       zIndex: 1,
//                     }}
//                   >
//                     <Avatar
//                       className="valueIcon"
//                       sx={{
//                         bgcolor:
//                           theme.palette.mode === "dark"
//                             ? theme.palette.grey[800]
//                             : "rgba(255,255,255,0.9)",
//                         color: value.color,
//                         mb: 3,
//                         width: 72,
//                         height: 72,
//                         mx: "auto",
//                         transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
//                         border: `2px solid ${value.color}`,
//                         boxShadow: `0 4px 12px ${
//                           theme.palette.mode === "dark"
//                             ? "rgba(0,0,0,0.3)"
//                             : "rgba(0,0,0,0.1)"
//                         }`,
//                         "& svg": {
//                           fontSize: "36px",
//                         },
//                       }}
//                     >
//                       {value.icon}
//                     </Avatar>
//                     <Typography
//                       className="valueTitle"
//                       variant="h5"
//                       component="h3"
//                       sx={{
//                         fontWeight: 600,
//                         color: "text.primary",
//                         mb: 2,
//                         transition: "all 0.3s ease",
//                         fontFamily: "'Playfair Display', serif",
//                         position: "relative",
//                         "&:after": {
//                           content: '""',
//                           position: "absolute",
//                           bottom: -8,
//                           left: "50%",
//                           transform: "translateX(-50%)",
//                           width: "40px",
//                           height: "2px",
//                           background: value.color,
//                           transition: "all 0.3s ease",
//                         },
//                       }}
//                     >
//                       {value.title}
//                     </Typography>
//                     <Typography
//                       className="valueDescription"
//                       variant="body1"
//                       sx={{
//                         color: "text.secondary",
//                         lineHeight: 1.7,
//                         transition: "all 0.3s ease",
//                         fontFamily: "'Roboto', sans-serif",
//                         fontWeight: 300,
//                         fontSize: "1rem",
//                       }}
//                     >
//                       {value.description}
//                     </Typography>
//                   </CardContent>
//                 </ElegantCard>
//               </Grow>
//             </Grid>
//           ))}
//         </Grid>
//       </>
//     </Box>
//   );
// };

// export default Values;


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

// Replace with your actual image import
import BackgroundImage from "../assets/images/background.jpg"; // Example image name

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

const pulseAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

// Styled components
const ElegantCard = styled(Card)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
  borderRadius: "16px",
  boxShadow: `0 6px 16px ${
    theme.palette.mode === "dark" ? "rgba(0, 0, 0, 0.3)" : "rgba(0, 0, 0, 0.1)"
  }`,
  "&:before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background:
      theme.palette.mode === "dark"
        ? `linear-gradient(135deg, ${theme.palette.grey[900]} 0%, ${theme.palette.grey[800]} 100%)`
        : `linear-gradient(135deg, ${theme.palette.background.paper} 0%, #f5f5f5 100%)`,
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
    borderRadius: "16px",
    pointerEvents: "none",
    opacity: 0.3,
  },
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: `0 12px 28px ${
      theme.palette.mode === "dark"
        ? "rgba(0, 0, 0, 0.5)"
        : "rgba(0, 0, 0, 0.2)"
    }`,
    "& .valueIcon": {
      transform: "scale(1.1)",
      filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))",
      animation: `${pulseAnimation} 2s infinite`,
    },
    "& .valueTitle": {
      color: theme.palette.primary.main,
      textShadow: `0 0 8px ${theme.palette.primary.light}`,
    },
    "& .valueDescription": {
      color: theme.palette.text.primary,
    },
    "& .cardGradient": {
      opacity: 0.1,
    },
  },
}));

const CardGradient = styled("div")(({ theme, color }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: `radial-gradient(circle at center, ${color} 0%, transparent 70%)`,
  opacity: 0,
  transition: "opacity 0.4s ease",
  zIndex: -1,
}));

const SectionDivider = styled(Divider)(({ theme }) => ({
  height: "4px",
  width: "100px",
  margin: "24px auto",
  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  backgroundSize: "200% 200%",
  borderRadius: "4px",
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

  // Updated core values to match your content
  const coreValues = [
    {
      title: "Deep Domain Knowledge",
      description:
        "Expertise in banking, financial inclusion, project and change management to deliver tailored solutions.",
      icon: <CheckCircleIcon />,
      color: theme.palette.success.main,
    },
    {
      title: "Commitment",
      description:
        "Dedicated to quality, project timeliness, innovation and building long-term partnerships.",
      icon: <StarIcon />,
      color: theme.palette.warning.main,
    },
    {
      title: "Trusted Advisor",
      description:
        "Experienced in digital transformation, providing reliable guidance and strategic direction.",
      icon: <GroupIcon />,
      color: theme.palette.info.main,
    },
    {
      title: "Emerging Markets Experience",
      description:
        "Proven track record across Africa, Europe, and APAC regions with local market insights.",
      icon: <ThumbUpIcon />,
      color: theme.palette.primary.main,
    },
    {
      title: "Innovation",
      description:
        "Pioneering digital solutions to drive financial inclusion and banking transformation.",
      icon: <EmojiObjectsIcon />,
      color: theme.palette.secondary.main,
    },
    {
      title: "Global Perspective",
      description:
        "Combining international expertise with local knowledge for cross-border success.",
      icon: <BuildIcon />,
      color: theme.palette.error.main,
    },
  ];

  return (
    <Box
      id="values"
      sx={{
        pt: 8,
        pb: 5,
        position: "relative",
        overflow: "hidden",
        // Background image with overlay
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.92)), url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        "&:before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          background:
            theme.palette.mode === "dark"
              ? `radial-gradient(circle at 20% 30%, ${theme.palette.grey[900]} 0%, transparent 50%)`
              : `radial-gradient(circle at 20% 30%, rgba(192, 225, 238, 0.2) 0%, transparent 50%)`,
        },
        "&:after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          background:
            theme.palette.mode === "dark"
              ? `radial-gradient(circle at 80% 70%, ${theme.palette.grey[800]} 0%, transparent 50%)`
              : `radial-gradient(circle at 80% 70%, rgba(192, 225, 238, 0.2) 0%, transparent 50%)`,
        },
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
                  display: "block",
                  mb: 2,
                  animation: `${textGlow} 4s ease-in-out infinite`,
                  fontSize: "0.9rem",
                  textTransform: "uppercase",
                }}
              >
                Our Strategic Advantages
              </Typography>
              <AnimatedTitle
                variant={isMobile ? "h4" : "h3"}
                component="h2"
                sx={{
                  fontWeight: 700,
                  color: "text.primary",
                  mb: 3,
                  fontFamily: "'Playfair Display', serif",
                  letterSpacing: "0.5px",
                }}
              >
                Core Expertise Areas
              </AnimatedTitle>
              <SectionDivider />
              <Typography
                variant="body1"
                sx={{
                  maxWidth: "700px",
                  margin: "0 auto",
                  color: "text.secondary",
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: 300,
                  lineHeight: 1.7,
                  px: 2,
                }}
              >
                Combining deep financial expertise with digital innovation to drive transformation in emerging markets.
              </Typography>
            </Box>
          </Fade>
        </Box>

        {/* Core Values Grid */}
        <Grid
          container
          spacing={4}
          sx={{ justifyContent: "center", px: isMobile ? 2 : 4 }}
        >
          {coreValues.map((value, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              onMouseEnter={() => setHoveredValue(index)}
              onMouseLeave={() => setHoveredValue(null)}
              sx={{ display: "flex", justifyContent: "center" }}
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
                    minHeight: "320px",
                  }}
                >
                  <CardGradient className="cardGradient" color={value.color} />
                  <CardContent
                    sx={{
                      width: "100%",
                      p: 4,
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    <Avatar
                      className="valueIcon"
                      sx={{
                        bgcolor:
                          theme.palette.mode === "dark"
                            ? theme.palette.grey[800]
                            : "rgba(255,255,255,0.9)",
                        color: value.color,
                        mb: 3,
                        width: 72,
                        height: 72,
                        mx: "auto",
                        transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
                        border: `2px solid ${value.color}`,
                        boxShadow: `0 4px 12px ${
                          theme.palette.mode === "dark"
                            ? "rgba(0,0,0,0.3)"
                            : "rgba(0,0,0,0.1)"
                        }`,
                        "& svg": {
                          fontSize: "36px",
                        },
                      }}
                    >
                      {value.icon}
                    </Avatar>
                    <Typography
                      className="valueTitle"
                      variant="h5"
                      component="h3"
                      sx={{
                        fontWeight: 600,
                        color: "text.primary",
                        mb: 2,
                        transition: "all 0.3s ease",
                        fontFamily: "'Playfair Display', serif",
                        position: "relative",
                        "&:after": {
                          content: '""',
                          position: "absolute",
                          bottom: -8,
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: "40px",
                          height: "2px",
                          background: value.color,
                          transition: "all 0.3s ease",
                        },
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
                        fontSize: "1rem",
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
