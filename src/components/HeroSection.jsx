// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Typography,
//   Button,
//   Container,
//   Stack,
//   useTheme,
//   useMediaQuery,
// } from "@mui/material";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import { motion, AnimatePresence } from "framer-motion";
// import back1 from "../assets/images/aspcope-limited.jpg";
// import back2 from "../assets/images/innovatingo-solutions.jpeg";
// import back3 from "../assets/images/trusted-partner.jpg";

// const heroData = [
//   {
//     title: "APScope Limited",
//     subtitle: "A composite of infrastructure, healthcare, and professionals",
//     description:
//       "Health • Construction • Accounting Solutions • Human Capital • Project Consultancy",
//     image: back1,
//     overlay: "rgba(0, 0, 0, 0.5)",
//     buttonColor: "#1976d2",
//   },
//   {
//     title: "Innovating Solutions",
//     subtitle: "Connecting Possibilities",
//     description:
//       "Delivering excellence across multiple industries with integrated services",
//     image: back2,
//     overlay: "rgba(0, 107, 107, 0.7)",
//     buttonColor: "#00796b",
//   },
//   {
//     title: "Your Trusted Partner",
//     subtitle: "For Comprehensive Business Solutions",
//     description: "Bridging technology and human expertise for optimal results",
//     image: back3,
//     overlay: "rgba(103, 58, 183, 0.7)",
//     buttonColor: "#7c4dff",
//   },
// ];

// const HeroSection = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isHovering, setIsHovering] = useState(false);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
//   const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

//   useEffect(() => {
//     if (isHovering) return;

//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % heroData.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [isHovering]);

//   const { title, subtitle, description, image, overlay, buttonColor } =
//     heroData[currentSlide];

//   return (
//     <Box
//       id="home"
//       sx={{
//         position: "relative",
//         height: "100vh",
//         minHeight: "600px",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         color: "common.white",
//         overflow: "hidden",
//       }}
//       onMouseEnter={() => setIsHovering(true)}
//       onMouseLeave={() => setIsHovering(false)}
//     >
//       {/* Animated Background Images */}
//       <AnimatePresence>
//         <motion.div
//           key={currentSlide}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1.5 }}
//           style={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             backgroundImage: `url(${image})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             zIndex: 1,
//           }}
//         />
//       </AnimatePresence>

//       {/* Color Overlay */}
//       <AnimatePresence>
//         <motion.div
//           key={currentSlide}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1 }}
//           style={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             backgroundColor: overlay,
//             zIndex: 2,
//           }}
//         />
//       </AnimatePresence>

//       {/* Content */}
//       <Container
//         maxWidth="lg"
//         sx={{
//           position: "relative",
//           zIndex: 3,
//           textAlign: "center",
//           px: isMobile ? 2 : 4,
//         }}
//       >
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentSlide}
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             exit={{ y: -20, opacity: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <Stack spacing={isMobile ? 2 : 4} alignItems="center">
//               <Typography
//                 variant={isMobile ? "h4" : isTablet ? "h3" : "h2"}
//                 component="h2"
//                 sx={{
//                   fontWeight: 700,
//                   lineHeight: 1.2,
//                   textShadow: "0 2px 4px rgba(0,0,0,0.5)",
//                   animation: "float 3s ease-in-out infinite",
//                 }}
//               >
//                 {title}
//               </Typography>

//               <Typography
//                 variant={isMobile ? "h7" : "h6"}
//                 component="h3"
//                 sx={{
//                   fontWeight: 500,
//                   textShadow: "0 2px 3px rgba(0,0,0,0.4)",
//                   maxWidth: "800px",
//                 }}
//               >
//                 {subtitle}
//               </Typography>

//               <Typography
//                 variant={isMobile ? "body1" : "h6"}
//                 component="p"
//                 sx={{
//                   mb: isMobile ? 4 : 6,
//                   textShadow: "0 1px 2px rgba(0,0,0,0.3)",
//                   maxWidth: "800px",
//                 }}
//               >
//                 {description}
//               </Typography>

//               <Stack
//                 direction={isMobile ? "column" : "row"}
//                 spacing={2}
//                 sx={{ width: isMobile ? "100%" : "auto" }}
//               >
//                 <Button
//                   variant="contained"
//                   href="#contact"
//                   size={isMobile ? "medium" : "large"}
//                   sx={{
//                     px: 4,
//                     py: isMobile ? 1.5 : 2,
//                     fontSize: isMobile ? "0.9rem" : "1rem",
//                     fontWeight: 600,
//                     bgcolor: buttonColor,
//                     "&:hover": {
//                       bgcolor: buttonColor,
//                       transform: "translateY(-2px)",
//                       boxShadow: `0 4px 12px ${buttonColor}80`,
//                     },
//                     transition: "all 0.3s ease",
//                   }}
//                 >
//                   Contact Us
//                 </Button>

//                 <Button
//                   variant="outlined"
//                   href="#services"
//                   size={isMobile ? "medium" : "large"}
//                   sx={{
//                     px: 4,
//                     py: isMobile ? 1.5 : 2,
//                     fontSize: isMobile ? "0.9rem" : "1rem",
//                     fontWeight: 600,
//                     borderWidth: 2,
//                     color: "white",
//                     borderColor: "white",
//                     "&:hover": {
//                       backgroundColor: "rgba(255,255,255,0.1)",
//                       borderWidth: 2,
//                       transform: "translateY(-2px)",
//                     },
//                     transition: "all 0.3s ease",
//                   }}
//                 >
//                   Explore Services
//                 </Button>
//               </Stack>
//             </Stack>
//           </motion.div>
//         </AnimatePresence>
//       </Container>

//       {/* Scroll Down Indicator - Centered at Bottom */}
//       <Box
//         sx={{
//           position: "absolute",
//           bottom: isMobile ? 20 : 40,
//           left: 0,
//           right: 0,
//           display: "flex",
//           justifyContent: "center",
//           zIndex: 3,
//         }}
//       >
//         <Button
//           component="a"
//           href="#profile"
//           color="inherit"
//           sx={{
//             minWidth: "auto",
//             p: 1,
//             "&:hover": {
//               backgroundColor: "transparent",
//             },
//           }}
//         >
//           <KeyboardArrowDownIcon
//             sx={{
//               fontSize: isMobile ? 30 : 40,
//               opacity: 0.8,
//               "&:hover": {
//                 opacity: 1,
//               },
//               animation: "bounce 2s infinite",
//             }}
//           />
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default HeroSection;


import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { motion, AnimatePresence } from "framer-motion";
import back1 from "../assets/images/aspcope-limited.jpg";
import back2 from "../assets/images/innovatingo-solutions.jpeg";
import back3 from "../assets/images/trusted-partner.jpg";

const heroData = [
  {
    title: "Apscope Limited",
    subtitle: "A composite of infrastructure, healthcare, and professionals",
    description:
      "Health • Construction • Accounting Solutions • Human Capital • Project Consultancy",
    image: back1,
    overlay: "rgba(103, 128, 160, 0.5)",
    buttonColor: "#1976d2",
  },
  {
    title: "Innovating Solutions",
    subtitle: "Connecting Possibilities",
    description:
      "Delivering excellence across multiple industries with integrated services",
    image: back2,
    overlay: "rgba(103, 197, 197, 0.7)",
    buttonColor: "#00796b",
  },
  {
    title: "Your Trusted Partner",
    subtitle: "For Comprehensive Business Solutions",
    description: "Bridging technology and human expertise for optimal results",
    image: back3,
    overlay: "rgba(103, 58, 183, 0.7)",
    buttonColor: "#7c4dff",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  const [isHovering, setIsHovering] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const goToNext = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % heroData.length);
  };

  const goToPrev = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + heroData.length) % heroData.length);
  };

  useEffect(() => {
    if (isHovering) return;

    const interval = setInterval(() => {
      goToNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [isHovering]);

  const { title, subtitle, description, image, overlay, buttonColor } =
    heroData[currentSlide];

  const backgroundVariants = {
    enter: (direction) => ({
      opacity: 0,
      scale: direction > 0 ? 1.05 : 0.95,
    }),
    center: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2, ease: [0.33, 1, 0.68, 1] },
    },
    exit: (direction) => ({
      opacity: 0,
      scale: direction > 0 ? 0.95 : 1.05,
      transition: { duration: 1.2, ease: [0.33, 1, 0.68, 1] },
    }),
  };
  
  const overlayVariants = {
    enter: { opacity: 0 },
    center: { opacity: 1, transition: { duration: 1 } },
    exit: { opacity: 0, transition: { duration: 1 } },
  };
  
  const contentVariants = {
    enter: (direction) => ({
      y: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] },
    },
    exit: (direction) => ({
      y: direction > 0 ? -50 : 50,
      opacity: 0,
      transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] },
    }),
  };

  return (
    <Box
      id="home"
      sx={{
        position: "relative",
        height: "100vh",
        minHeight: "600px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "common.white",
        overflow: "hidden",
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Animated Background Images with custom directional animation */}
      <AnimatePresence custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={backgroundVariants}
          initial="enter"
          animate="center"
          exit="exit"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 1,
          }}
        />
      </AnimatePresence>

      {/* Color Overlay */}
      <AnimatePresence>
        <motion.div
          key={currentSlide}
          variants={overlayVariants}
          initial="enter"
          animate="center"
          exit="exit"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: overlay,
            zIndex: 2,
          }}
        />
      </AnimatePresence>

      {/* Navigation Arrows (visible on hover) */}
      {/* {isHovering && (
        <>
          <Button
            onClick={goToPrev}
            sx={{
              position: "absolute",
              left: 20,
              zIndex: 4,
              color: "white",
              minWidth: "auto",
              p: 1,
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.1)",
              },
            }}
          >
            <KeyboardArrowDownIcon
              sx={{
                fontSize: 40,
                transform: "rotate(90deg)",
                opacity: 0.7,
                transition: "opacity 0.3s",
                "&:hover": {
                  opacity: 1,
                },
              }}
            />
          </Button>
          <Button
            onClick={goToNext}
            sx={{
              position: "absolute",
              right: 20,
              zIndex: 4,
              color: "white",
              minWidth: "auto",
              p: 1,
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.1)",
              },
            }}
          >
            <KeyboardArrowDownIcon
              sx={{
                fontSize: 40,
                transform: "rotate(-90deg)",
                opacity: 0.7,
                transition: "opacity 0.3s",
                "&:hover": {
                  opacity: 1,
                },
              }}
            />
          </Button>
        </>
      )} */}

      {/* Content with directional animation */}
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 3,
          textAlign: "center",
          px: isMobile ? 2 : 4,
        }}
      >
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={contentVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <Stack spacing={isMobile ? 2 : 4} alignItems="center">
              <Typography
                variant={isMobile ? "h4" : isTablet ? "h3" : "h2"}
                component="h2"
                sx={{
                  fontWeight: 700,
                  lineHeight: 1.2,
                  textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                  animation: "float 3s ease-in-out infinite",
                }}
              >
                {title}
              </Typography>

              <Typography
                variant={isMobile ? "h7" : "h6"}
                component="h3"
                sx={{
                  fontWeight: 500,
                  textShadow: "0 2px 3px rgba(0,0,0,0.4)",
                  maxWidth: "800px",
                }}
              >
                {subtitle}
              </Typography>

              <Typography
                variant={isMobile ? "body1" : "h6"}
                component="p"
                sx={{
                  mb: isMobile ? 4 : 6,
                  textShadow: "0 1px 2px rgba(0,0,0,0.3)",
                  maxWidth: "800px",
                }}
              >
                {description}
              </Typography>

              <Stack
                direction={isMobile ? "column" : "row"}
                spacing={2}
                sx={{ width: isMobile ? "100%" : "auto" }}
              >
                <Button
                  variant="contained"
                  href="#contact"
                  size={isMobile ? "medium" : "large"}
                  sx={{
                    px: 4,
                    py: isMobile ? 1.5 : 2,
                    fontSize: isMobile ? "0.9rem" : "1rem",
                    fontWeight: 600,
                    bgcolor: buttonColor,
                    "&:hover": {
                      bgcolor: buttonColor,
                      transform: "translateY(-2px)",
                      boxShadow: `0 4px 12px ${buttonColor}80`,
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Contact Us
                </Button>

                <Button
                  variant="outlined"
                  href="#services"
                  size={isMobile ? "medium" : "large"}
                  sx={{
                    px: 4,
                    py: isMobile ? 1.5 : 2,
                    fontSize: isMobile ? "0.9rem" : "1rem",
                    fontWeight: 600,
                    borderWidth: 2,
                    color: "white",
                    borderColor: "white",
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.1)",
                      borderWidth: 2,
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Explore Services
                </Button>
              </Stack>
            </Stack>
          </motion.div>
        </AnimatePresence>
      </Container>

      {/* Scroll Down Indicator - Centered at Bottom */}
      <Box
        sx={{
          position: "absolute",
          bottom: isMobile ? 20 : 40,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          zIndex: 3,
        }}
      >
        <Button
          component="a"
          href="#profile"
          color="inherit"
          sx={{
            minWidth: "auto",
            p: 1,
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          <KeyboardArrowDownIcon
            sx={{
              fontSize: isMobile ? 30 : 40,
              opacity: 0.8,
              "&:hover": {
                opacity: 1,
              },
              animation: "bounce 2s infinite",
            }}
          />
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;