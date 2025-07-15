import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  TextField,
  Button,
  Grid,
  useTheme,
  useMediaQuery,
  Grow,
  Avatar,
  Stack,
  Card,
  CardContent,
  Link,
  styled,
} from "@mui/material";
import {
  CheckCircle as CheckCircleIcon,
  Send as SendIcon,
  LocationOn as LocationIcon,
  Phone as PhoneIcon,
  Mail as MailIcon,
} from "@mui/icons-material";
import { keyframes } from "@emotion/react";

// Animations
const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-6px); }
  100% { transform: translateY(0px); }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulseAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const borderGlow = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(25, 118, 210, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(25, 118, 210, 0); }
  100% { box-shadow: 0 0 0 0 rgba(25, 118, 210, 0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

// Styled Components
const SectionHeader = styled(Typography)(({ theme }) => ({
  fontFamily: '"Playfair Display", serif',
  fontWeight: 700,
  position: "relative",
  marginBottom: theme.spacing(4),
  "&:after": {
    content: '""',
    position: "absolute",
    bottom: -12,
    left: "50%",
    transform: "translateX(-50%)",
    width: 60,
    height: 3,
    background: theme.palette.primary.main,
    borderRadius: 3,
  },
}));

const ContactCard = styled(Card)(({ theme }) => ({
  height: "100%",
  borderRadius: 8,
  boxShadow: theme.shadows[2],
  transition: "all 0.3s ease",
  backgroundColor: theme.palette.background.paper,
  animation: `${fadeIn} 0.6s ease-out forwards`,
  opacity: 0,
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: theme.shadows[6],
    "& .card-icon-container": {
      animation: `${pulseAnimation} 1.5s ease infinite, ${borderGlow} 2s ease infinite`,
    },
    "& .card-icon": {
      animation: `${floatAnimation} 2s ease-in-out infinite`,
    },
  },
}));

const IconContainer = styled(Box)(({ theme }) => ({
  width: 64,
  height: 64,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  bgcolor: "transparent",
  border: "2px solid",
  borderColor: "primary.main",
  borderRadius: "50%",
  mb: 2,
  transition: "all 0.3s ease",
}));

const ContactForm = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
      // Reset form after submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      // Reset submission status after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <Box
      id="contact"
      sx={{
        backgroundColor: "background.default",
        py: { xs: 6, mb: 5 },
        position: "relative",
        overflow: "hidden",
        "&:before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "#f9f9f9",
          backgroundImage:
            "linear-gradient(to top,rgb(192, 225, 238), #ffffff)",
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Header Section */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="overline"
            component="span"
            sx={{
              color: "secondary.main",
              fontWeight: 600,
              letterSpacing: 2,
              display: "block",
              mb: 2,
              animation: `${pulse} 2s infinite`,
              fontSize: "0.9rem",
              textTransform: "uppercase",
            }}
          >
            CONTACT US
          </Typography>

          <SectionHeader variant={isMobile ? "h4" : "h3"} gutterBottom>
            Get In Touch
          </SectionHeader>

          <Typography
            variant={isMobile ? "body1" : "h6"}
            sx={{
              color: "text.secondary",
              maxWidth: 700,
              mx: "auto",
              lineHeight: 1.8,
            }}
          >
            Have questions or need assistance? Reach out through any of these
            channels or send us a message directly.
          </Typography>
        </Box>

        {/* Elegant Contact Information Grid */}
        <Grid container spacing={4} sx={{ mb: 10, justifyContent: "center" }}>
          <Grid item xs={12} md={6}>
            <ContactCard
              sx={{
                border: "none",
                borderRadius: 0,
                boxShadow: "none",
                background: "linear-gradient(to bottom, #f9f9f9, #ffffff)",
                animationDelay: "0.2s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
                },
              }}
            >
              <CardContent sx={{ p: 5, height: "100%" }}>
                <Stack spacing={3} alignItems="flex-start">
                  <IconContainer className="card-icon-container">
                    <LocationIcon
                      className="card-icon"
                      fontSize="medium"
                      sx={{ color: "primary.main" }}
                    />
                  </IconContainer>
                  <Typography
                    variant="h6"
                    fontWeight={500}
                    fontFamily="'Georgia', serif"
                    sx={{
                      color: "text.primary",
                      letterSpacing: "0.05em",
                      position: "relative",
                      "&:after": {
                        content: '""',
                        display: "block",
                        width: "40px",
                        height: "2px",
                        bgcolor: "primary.main",
                        mt: 1,
                      },
                    }}
                  >
                    Our Location
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                      lineHeight: 1.8,
                      fontFamily: "'Lora', serif",
                      letterSpacing: "0.02em",
                      fontSize: "1.05rem",
                    }}
                  >
                    Karen Plains Arcade, Level 2<br />
                    Karen Plains Road
                    <br />
                    P.O. Box 68254 - 00200
                    <br />
                    Nairobi, Kenya
                  </Typography>
                </Stack>
              </CardContent>
            </ContactCard>
          </Grid>

          <Grid item xs={12} md={6}>
            <ContactCard
              sx={{
                border: "none",
                borderRadius: 0,
                boxShadow: "none",
                background: "linear-gradient(to bottom, #f9f9f9, #ffffff)",
                animationDelay: "0.4s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
                },
              }}
            >
              <CardContent sx={{ p: 5, height: "100%" }}>
                <Stack spacing={3} alignItems="flex-start">
                  <IconContainer className="card-icon-container">
                    <PhoneIcon
                      className="card-icon"
                      fontSize="medium"
                      sx={{ color: "primary.main" }}
                    />
                  </IconContainer>
                  <Typography
                    variant="h6"
                    fontWeight={500}
                    fontFamily="'Georgia', serif"
                    sx={{
                      color: "text.primary",
                      letterSpacing: "0.05em",
                      position: "relative",
                      "&:after": {
                        content: '""',
                        display: "block",
                        width: "40px",
                        height: "2px",
                        bgcolor: "primary.main",
                        mt: 1,
                      },
                    }}
                  >
                    Contact Details
                  </Typography>
                  <Box>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{
                        lineHeight: 2.2,
                        fontFamily: "'Lora', serif",
                        letterSpacing: "0.02em",
                        fontSize: "1.05rem",
                      }}
                    >
                      <Link
                        href="tel:+254202323622"
                        color="inherit"
                        underline="none"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1.5,
                          transition: "color 0.3s ease",
                          "&:hover": {
                            color: "primary.main",
                          },
                          "&:before": {
                            content: '"\\2022"',
                            color: "primary.main",
                            fontSize: "1.5rem",
                            lineHeight: 0,
                          },
                        }}
                      >
                        +254 (0)202 323622
                      </Link>
                      <Link
                        href="tel:+254730988100"
                        color="inherit"
                        underline="none"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1.5,
                          transition: "color 0.3s ease",
                          "&:hover": {
                            color: "primary.main",
                          },
                          "&:before": {
                            content: '"\\2022"',
                            color: "primary.main",
                            fontSize: "1.5rem",
                            lineHeight: 0,
                          },
                        }}
                      >
                        +254 (0)730 988100
                      </Link>
                      <Link
                        href="mailto:info@apscopelimited.com"
                        color="inherit"
                        underline="none"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1.5,
                          transition: "color 0.3s ease",
                          "&:hover": {
                            color: "primary.main",
                          },
                          "&:before": {
                            content: '"\\2022"',
                            color: "primary.main",
                            fontSize: "1.5rem",
                            lineHeight: 0,
                          },
                        }}
                      >
                        info@apscopelimited.com
                      </Link>
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </ContactCard>
          </Grid>
        </Grid>

        {/* Contact Form Section */}
        <Box id="send-sms" sx={{ maxWidth: 800, mx: "auto" }}>
          <Paper
            elevation={2}
            sx={{
              p: { xs: 3, md: 5 },
              borderRadius: 2,
              position: "relative",
              overflow: "hidden",
              backgroundColor: "background.paper",
              "&:before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: 4,
                background: theme.palette.primary.main,
              },
            }}
          >
            {submitted ? (
              <Box sx={{ textAlign: "center", py: 4 }}>
                <Grow in timeout={500}>
                  <Stack spacing={4} alignItems="center">
                    <Box
                      sx={{
                        animation: `${fadeIn} 0.5s ease-out`,
                        position: "relative",
                      }}
                    >
                      <Avatar
                        sx={{
                          width: 80,
                          height: 80,
                          bgcolor: "success.light",
                          color: "success.main",
                          mb: 2,
                        }}
                      >
                        <MailIcon fontSize="large" />
                      </Avatar>
                      <CheckCircleIcon
                        fontSize="large"
                        sx={{
                          position: "absolute",
                          bottom: 0,
                          right: 0,
                          color: "success.main",
                          bgcolor: "background.paper",
                          borderRadius: "50%",
                        }}
                      />
                    </Box>
                    <Typography variant="h5" fontWeight={600}>
                      Message Sent Successfully
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ maxWidth: 500, mx: "auto" }}
                    >
                      Thank you for contacting us. We've received your message
                      and will respond within 24 hours.
                    </Typography>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => setSubmitted(false)}
                      sx={{ mt: 3 }}
                    >
                      Send Another Message
                    </Button>
                  </Stack>
                </Grow>
              </Box>
            ) : (
              <>
                <Typography
                  variant="h5"
                  fontWeight={600}
                  sx={{ mb: 4, color: "text.primary" }}
                >
                  Send Us a Message
                </Typography>

                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3} sx={{ justifyContent: "center" }}>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              borderColor: "divider",
                            },
                            "&:hover fieldset": {
                              borderColor: "primary.main",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "primary.main",
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="Phone Number (Optional)"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        variant="outlined"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sx={{ m: 3 }}>
                    <TextField
                      fullWidth
                      label="Your Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      multiline
                      rows={2}
                      variant="outlined"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& textarea": {
                            minHeight: 100,
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    endIcon={<SendIcon />}
                    disabled={isSubmitting}
                    sx={{
                      px: 6,
                      py: 1.5,
                      minWidth: 200,
                      fontSize: "1rem",
                      fontWeight: 500,
                      borderRadius: 1,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-2px)",
                        boxShadow: theme.shadows[4],
                      },
                      "&.Mui-disabled": {
                        backgroundColor: "primary.light",
                        color: "primary.contrastText",
                      },
                    }}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </>
            )}
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactForm;
