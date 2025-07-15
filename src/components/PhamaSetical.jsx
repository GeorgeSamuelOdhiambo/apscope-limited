// // import React from "react";
// // import {
// //   Box,
// //   Container,
// //   Typography,
// //   useTheme,
// //   Button,
// //   Paper,
// //   Grid,
// // } from "@mui/material";
// // import { keyframes } from "@mui/material/styles";
// // import { Groups as CollaborationIcon } from "@mui/icons-material";
// // import { useNavigate } from "react-router-dom";
// // import StarIcon from "@mui/icons-material/Star";

// // // Custom animations
// // const pulse = keyframes`
// //   0% { transform: scale(1); }
// //   50% { transform: scale(1.05); }
// //   100% { transform: scale(1); }
// // `;

// // const Pharmaceutical = () => {
// //   const theme = useTheme();
// //   const navigate = useNavigate();

// //   return (
// //     <Box
// //       id="values"
// //       sx={{
// //         backgroundColor: "#f9f9f9",
// //         backgroundImage:
// //           "linear-gradient(to bottom,rgb(192, 225, 238), #ffffff)",
// //       }}
// //     >
// //       <Paper
// //         elevation={0}
// //         sx={{
// //           borderRadius: 1,
// //           position: "relative",
// //           backgroundColor: "transparent",
// //         }}
// //       >
// //         {/* Header with target audience */}
// //         <Box sx={{ textAlign: "center", mb: 6 }}>
// //           <Typography
// //             variant="subtitle1"
// //             component="div"
// //             sx={{
// //               color: theme.palette.primary.main,
// //               mb: 2,
// //               fontWeight: 600,
// //               letterSpacing: 1,
// //             }}
// //           >
// //             Are you a Pharmaceutical Manufacturer?
// //           </Typography>
// //           <Typography
// //             variant="h4"
// //             component="h2"
// //             sx={{
// //               fontWeight: 700,
// //               mb: 2,
// //               color: theme.palette.text.primary,
// //             }}
// //           >
// //             We offer representation, registration, packaging partnerships, and tender facilitation in Kenya & Uganda.
// //           </Typography>
// //           <Typography
// //             variant="subtitle1"
// //             sx={{
// //               color: theme.palette.text.secondary,
// //               maxWidth: 700,
// //               mx: "auto",
// //             }}
// //           >
// //             Full-service market entry and expansion partner for pharmaceutical
// //             companies
// //           </Typography>
// //         </Box>

// //         <Grid container spacing={4} justifyContent="center">
// //           {/* Services Column */}
// //           <Grid item xs={12} md={6}>
// //             <Box
// //               sx={{
// //                 p: 3,
// //                 height: "100%",
// //               }}
// //             >
// //               <Typography
// //                 variant="h5"
// //                 sx={{
// //                   fontWeight: 600,
// //                   mb: 3,
// //                   display: "flex",
// //                   alignItems: "center",
// //                   color: theme.palette.primary.main,
// //                 }}
// //               >
// //                 <CollaborationIcon sx={{ mr: 2 }} />
// //                 Our Services
// //               </Typography>
// //               <Box component="ul" sx={{ pl: 0, listStyle: "none" }}>
// //                 {[
// //                   "Product registration & regulatory compliance",
// //                   "Government tender participation",
// //                   "Market development & brand promotion",
// //                   "Distribution network management",
// //                   "Co-investment in local packaging facilities",
// //                 ].map((service, index) => (
// //                   <Box
// //                     component="li"
// //                     key={index}
// //                     sx={{ display: "flex", mb: 2 }}
// //                   >
// //                     <StarIcon
// //                       sx={{
// //                         mr: 2,
// //                         color: theme.palette.secondary.main,
// //                         fontSize: "1.2rem",
// //                       }}
// //                     />
// //                     <Typography variant="body1">{service}</Typography>
// //                   </Box>
// //                 ))}
// //               </Box>
// //             </Box>
// //           </Grid>

// //           {/* Benefits Column */}
// //           <Grid item xs={12} md={6}>
// //             <Box
// //               sx={{
// //                 p: 3,
// //                 height: "100%",
// //               }}
// //             >
// //               <Typography
// //                 variant="h5"
// //                 sx={{
// //                   fontWeight: 600,
// //                   mb: 3,
// //                   display: "flex",
// //                   alignItems: "center",
// //                   color: theme.palette.primary.main,
// //                 }}
// //               >
// //                 <StarIcon sx={{ mr: 2 }} />
// //                 Partnership Benefits
// //               </Typography>
// //               <Box component="ul" sx={{ pl: 0, listStyle: "none" }}>
// //                 {[
// //                   "Local expertise across East Africa",
// //                   "Established government & private sector links",
// //                   "End-to-end services – from regulatory to delivery",
// //                   "15+ years of multisectoral experience",
// //                   "Transparent, value-driven partnerships",
// //                 ].map((benefit, index) => (
// //                   <Box
// //                     component="li"
// //                     key={index}
// //                     sx={{ display: "flex", mb: 2 }}
// //                   >
// //                     <StarIcon
// //                       sx={{
// //                         mr: 2,
// //                         color: theme.palette.secondary.main,
// //                         fontSize: "1.2rem",
// //                       }}
// //                     />
// //                     <Typography variant="body1">{benefit}</Typography>
// //                   </Box>
// //                 ))}
// //               </Box>
// //             </Box>
// //           </Grid>
// //         </Grid>

// //         {/* CTA Section */}
// //         <Box
// //           sx={{
// //             textAlign: "center",
// //             mt: 6,
// //             pt: 4,
// //             borderTop: `1px solid ${theme.palette.divider}`,
// //           }}
// //         >
// //           <Button
// //             variant="contained"
// //             color="primary"
// //             size="large"
// //             onClick={() => navigate("/contact")}
// //             sx={{
// //               px: 6,
// //               py: 1.5,
// //               fontWeight: 600,
// //               fontSize: "1rem",
// //               borderRadius: 1,
// //               textTransform: "none",
// //               minWidth: 300,
// //               "&:hover": {
// //                 backgroundColor: theme.palette.primary.dark,
// //               },
// //             }}
// //           >
// //             Contact Us for Partnership Details
// //           </Button>
// //           <Typography
// //             variant="body2"
// //             sx={{
// //               mt: 3,
// //               color: theme.palette.text.secondary,
// //               fontStyle: "italic",
// //             }}
// //           >
// //             Let's discuss how we can expand your market reach in East Africa
// //           </Typography>
// //         </Box>
// //       </Paper>
// //     </Box>
// //   );
// // };

// // export default Pharmaceutical;

// import React from "react";
// import {
//   Box,
//   Container,
//   Typography,
//   useTheme,
//   Button,
//   Paper,
//   Grid,
//   Stack,
// } from "@mui/material";
// import { keyframes } from "@mui/material/styles";
// import { Groups as CollaborationIcon, Factory } from "@mui/icons-material";
// import { useNavigate } from "react-router-dom";
// import StarIcon from "@mui/icons-material/Star";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// // Custom animations
// const pulse = keyframes`
//   0% { transform: scale(1); }
//   50% { transform: scale(1.05); }
//   100% { transform: scale(1); }
// `;

// const Pharmaceutical = () => {
//   const theme = useTheme();
//   const navigate = useNavigate();

//   return (
//     <Box
//       id="pharmaceutical"
//       sx={{
//         backgroundColor: "#f0f9ff",
//         backgroundImage:
//           "linear-gradient(to bottom, rgb(192, 225, 238), #ffffff)",
//         pr: 8,
//         pl: 8,
//       }}
//     >
//       <Container maxWidth="lg">
//         <Paper
//           elevation={0}
//           sx={{
//             borderRadius: 3,
//             position: "relative",
//             backgroundColor: "transparent",
//             p: { xs: 2, md: 4 },
//           }}
//         >
//           {/* Header with target audience */}
//           <Stack alignItems="center" spacing={2} sx={{ mb: 6 }}>
//             <Typography
//               variant="h4"
//               component="h2"
//               sx={{
//                 fontWeight: 700,
//                 color: theme.palette.text.primary,
//                 textAlign: "center",
//               }}
//             >
//               Pharmaceutical Manufacturers
//             </Typography>
//             <Typography
//               variant="h6"
//               component="div"
//               sx={{
//                 color: theme.palette.primary.main,
//                 fontWeight: 600,
//                 letterSpacing: 1,
//                 textAlign: "center",
//               }}
//             >
//               Expand Your Reach in East Africa
//             </Typography>
//             <Typography
//               variant="subtitle1"
//               sx={{
//                 color: theme.palette.text.secondary,
//                 maxWidth: 700,
//                 textAlign: "center",
//               }}
//             >
//               Full-service market entry and expansion partner for pharmaceutical
//               companies in Kenya & Uganda
//             </Typography>
//           </Stack>

//           <Grid container spacing={4} justifyContent="center">
//             {/* Services Column */}
//             <Grid item xs={12} md={6}>
//               <Box
//                 sx={{
//                   p: 3,
//                   height: "100%",
//                   borderRadius: 2,
//                 }}
//               >
//                 <Typography
//                   variant="h5"
//                   sx={{
//                     fontWeight: 600,
//                     mb: 3,
//                     display: "flex",
//                     alignItems: "center",
//                     color: theme.palette.primary.main,
//                   }}
//                 >
//                   <CollaborationIcon sx={{ mr: 2 }} />
//                   Our Comprehensive Services
//                 </Typography>
//                 <Box component="ul" sx={{ pl: 0, listStyle: "none" }}>
//                   {[
//                     "Product registration & regulatory compliance",
//                     "Government tender participation & facilitation",
//                     "Market development & brand promotion",
//                     "Distribution network management",
//                     "Packaging partnerships & co-investment in local facilities",
//                     "Market intelligence & strategic advisory",
//                   ].map((service, index) => (
//                     <Box
//                       component="li"
//                       key={index}
//                       sx={{ display: "flex", mb: 2, alignItems: "flex-start" }}
//                     >
//                       <CheckCircleIcon
//                         sx={{
//                           mr: 2,
//                           color: theme.palette.success.main,
//                           fontSize: "1.2rem",
//                           mt: "2px",
//                         }}
//                       />
//                       <Typography variant="body1">{service}</Typography>
//                     </Box>
//                   ))}
//                 </Box>
//               </Box>
//             </Grid>

//             {/* Benefits Column */}
//             <Grid item xs={12} md={6}>
//               <Box
//                 sx={{
//                   p: 3,
//                   height: "100%",
//                   borderRadius: 2,
//                 }}
//               >
//                 <Typography
//                   variant="h5"
//                   sx={{
//                     fontWeight: 600,
//                     mb: 3,
//                     display: "flex",
//                     alignItems: "center",
//                     color: theme.palette.primary.main,
//                   }}
//                 >
//                   <StarIcon sx={{ mr: 2 }} />
//                   Why Partner With Us?
//                 </Typography>
//                 <Box component="ul" sx={{ pl: 0, listStyle: "none" }}>
//                   {[
//                     "Local regulatory expertise across East Africa",
//                     "Established government & private sector networks",
//                     "End-to-end solutions from registration to delivery",
//                     "15+ years of healthcare sector experience",
//                     "Transparent, performance-driven partnerships",
//                     "Cost-effective market entry strategies",
//                   ].map((benefit, index) => (
//                     <Box
//                       component="li"
//                       key={index}
//                       sx={{ display: "flex", mb: 2, alignItems: "flex-start" }}
//                     >
//                       <CheckCircleIcon
//                         sx={{
//                           mr: 2,
//                           color: theme.palette.success.main,
//                           fontSize: "1.2rem",
//                           mt: "2px",
//                         }}
//                       />
//                       <Typography variant="body1">{benefit}</Typography>
//                     </Box>
//                   ))}
//                 </Box>
//               </Box>
//             </Grid>
//           </Grid>

//           {/* CTA Section */}
//           <Box
//             sx={{
//               textAlign: "center",
//               mt: 6,
//               pb: 4,
//               borderBottom: `1px solid ${theme.palette.divider}`,
//             }}
//           >
//             <Button
//               variant="contained"
//               color="primary"
//               size="large"
//               href="#send-sms"
//               sx={{
//                 px: 6,
//                 py: 1.5,
//                 fontWeight: 600,
//                 fontSize: "1.1rem",
//                 borderRadius: 2,
//                 textTransform: "none",
//                 minWidth: 300,
//                 animation: `${pulse} 2s infinite`,
//                 "&:hover": {
//                   backgroundColor: theme.palette.primary.dark,
//                   transform: "translateY(-2px)",
//                   boxShadow: `0 4px 8px ${theme.palette.primary.light}`,
//                 },
//               }}
//             >
//               Partner With Us
//             </Button>
//           </Box>
//         </Paper>
//       </Container>
//     </Box>
//   );
// };

// export default Pharmaceutical;





import React from "react";
import {
  Box,
  Container,
  Typography,
  useTheme,
  Button,
  Paper,
  Grid,
  Stack,
} from "@mui/material";
import { keyframes } from "@mui/material/styles";
import { Groups as CollaborationIcon, Factory } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// Custom animations
const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

// Pharmaceutical illustration (you'll need to replace this with your actual image path)
const PharmaIllustration = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 300" fill="none">
    <path fill="#D1EBFA" d="M0 0h500v300H0z"/>
    <path d="M150 150h200v50H150z" fill="#4A90E2" opacity="0.8"/>
    <circle cx="250" cy="125" r="25" fill="#4A90E2" opacity="0.8"/>
    <path d="M175 100h150v25H175z" fill="#4A90E2" opacity="0.8"/>
    <circle cx="100" cy="200" r="15" fill="#4A90E2" opacity="0.6"/>
    <circle cx="400" cy="200" r="15" fill="#4A90E2" opacity="0.6"/>
    <path d="M85 185h30v30h-30zM385 185h30v30h-30z" fill="#4A90E2" opacity="0.6"/>
  </svg>
);

const Pharmaceutical = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box
      id="pharmaceutical"
      sx={{
        backgroundColor: "#f0f9ff",
        backgroundImage:
          "linear-gradient(to bottom, rgba(192, 225, 238, 0.9), #ffffff)",
        position: "relative",
        overflow: "hidden",
        px: { xs: 2, md: 8 },
      }}
    >
      {/* Floating decorative elements */}
      <Box
        sx={{
          position: "absolute",
          right: 40,
          top: 40,
          width: 120,
          height: 120,
          borderRadius: "50%",
          backgroundColor: "rgba(74, 144, 226, 0.1)",
          display: { xs: "none", md: "block" },
        }}
      />
      <Box
        sx={{
          position: "absolute",
          left: 60,
          bottom: 80,
          width: 80,
          height: 80,
          borderRadius: "50%",
          backgroundColor: "rgba(74, 144, 226, 0.1)",
          display: { xs: "none", md: "block" },
        }}
      />

      {/* Pharmaceutical illustration */}
      {/* <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mb: 2,
          mt: -4,
        }}
      >
        <Box
          sx={{
            height: 180,
            width: "auto",
            filter: "drop-shadow(0px 4px 8px rgba(0,0,0,0.1))",
            "& svg": {
              height: "100%",
              width: "auto",
            },
          }}
        >
          <PharmaIllustration />
        </Box>
      </Box> */}

      <Container maxWidth="lg">
        <Paper
          elevation={0}
          sx={{
            borderRadius: 3,
            position: "relative",
            backgroundColor: "transparent",
            p: { xs: 2, md: 4 },
          }}
        >
          {/* Header with target audience */}
          <Stack alignItems="center" spacing={2} sx={{ mb: 6 }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: 700,
                color: theme.palette.text.primary,
                textAlign: "center",
              }}
            >
              Pharmaceutical Manufacturers
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 600,
                letterSpacing: 1,
                textAlign: "center",
              }}
            >
              Expand Your Reach in East Africa
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                color: theme.palette.text.secondary,
                maxWidth: 700,
                textAlign: "center",
              }}
            >
              Full-service market entry and expansion partner for pharmaceutical
              companies in Kenya & Uganda
            </Typography>
          </Stack>

          <Grid container spacing={4} justifyContent="center">
            {/* Services Column */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  p: 3,
                  height: "100%",
                  borderRadius: 2,
                  backgroundColor: "rgba(255, 255, 255, 0.7)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    mb: 3,
                    display: "flex",
                    alignItems: "center",
                    color: theme.palette.primary.main,
                  }}
                >
                  <CollaborationIcon sx={{ mr: 2 }} />
                  Our Comprehensive Services
                </Typography>
                <Box component="ul" sx={{ pl: 0, listStyle: "none" }}>
                  {[
                    "Product registration & regulatory compliance",
                    "Government tender participation & facilitation",
                    "Market development & brand promotion",
                    "Distribution network management",
                    "Packaging partnerships & co-investment in local facilities",
                    "Market intelligence & strategic advisory",
                  ].map((service, index) => (
                    <Box
                      component="li"
                      key={index}
                      sx={{ display: "flex", mb: 2, alignItems: "flex-start" }}
                    >
                      <CheckCircleIcon
                        sx={{
                          mr: 2,
                          color: theme.palette.success.main,
                          fontSize: "1.2rem",
                          mt: "2px",
                        }}
                      />
                      <Typography variant="body1">{service}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>

            {/* Benefits Column */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  p: 3,
                  height: "100%",
                  borderRadius: 2,
                  backgroundColor: "rgba(255, 255, 255, 0.7)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    mb: 3,
                    display: "flex",
                    alignItems: "center",
                    color: theme.palette.primary.main,
                  }}
                >
                  <StarIcon sx={{ mr: 2 }} />
                  Why Partner With Us?
                </Typography>
                <Box component="ul" sx={{ pl: 0, listStyle: "none" }}>
                  {[
                    "Local regulatory expertise across East Africa",
                    "Established government & private sector networks",
                    "End-to-end solutions from registration to delivery",
                    "15+ years of healthcare sector experience",
                    "Transparent, performance-driven partnerships",
                    "Cost-effective market entry strategies",
                  ].map((benefit, index) => (
                    <Box
                      component="li"
                      key={index}
                      sx={{ display: "flex", mb: 2, alignItems: "flex-start" }}
                    >
                      <CheckCircleIcon
                        sx={{
                          mr: 2,
                          color: theme.palette.success.main,
                          fontSize: "1.2rem",
                          mt: "2px",
                        }}
                      />
                      <Typography variant="body1">{benefit}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>

          {/* CTA Section */}
          <Box
            sx={{
              textAlign: "center",
              mt: 6,
              pb: 4,borderBottom: `1px solid ${theme.palette.divider}`,
            }}
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              href="#send-sms"
              sx={{
                px: 6,
                py: 1.5,
                fontWeight: 600,
                fontSize: "1.1rem",
                borderRadius: 2,
                textTransform: "none",
                minWidth: 300,
                animation: `${pulse} 2s infinite`,
                "&:hover": {
                  backgroundColor: theme.palette.primary.dark,
                  transform: "translateY(-2px)",
                  boxShadow: `0 4px 8px ${theme.palette.primary.light}`,
                },
              }}
            >
              Partner With Us
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Pharmaceutical;

