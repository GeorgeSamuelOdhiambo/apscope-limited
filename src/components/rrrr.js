import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Divider,
  Paper,
  TextField,
  Button,
  Grid,
  useTheme,
  useMediaQuery,
  Slide,
  Fade,
  Grow,
  Avatar,
  Stack,
  Card,
  CardContent,
  Link,
  styled
} from "@mui/material";
import {
  CheckCircle as CheckCircleIcon,
  Send as SendIcon,
  Person as PersonIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  Subject as SubjectIcon,
  Message as MessageIcon,
  LocationOn as LocationIcon,
  Language as WebsiteIcon,
  ArrowRightAlt as ArrowIcon
} from "@mui/icons-material";
import { keyframes } from "@emotion/react";

// Custom animations
const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
`;

const borderGlow = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(25, 118, 210, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(25, 118, 210, 0); }
  100% { box-shadow: 0 0 0 0 rgba(25, 118, 210, 0); }
`;

// Custom styled components
const ClassicSectionTitle = styled(Typography)(({ theme }) => ({
  fontFamily: '"Playfair Display", serif',
  fontWeight: 700,
  position: 'relative',
  display: 'inline-block',
  '&:after': {
    content: '""',
    position: 'absolute',
    bottom: -12,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 60,
    height: 3,
    background: theme.palette.primary.main,
    borderRadius: 3
  }
}));

const ContactCard = styled(Card)(({ theme }) => ({
  height: '100%',
  border: 'none',
  borderRadius: 8,
  boxShadow: '0 6px 20px rgba(0,0,0,0.06)',
  transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
  background: theme.palette.background.paper,
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 12px 24px rgba(0,0,0,0.1)',
    '& .card-icon': {
      animation: `${floatAnimation} 2.5s ease-in-out infinite`,
    },
    '&:before': {
      opacity: 1
    }
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 4,
    background: theme.palette.primary.main,
    opacity: 0.7,
    transition: 'opacity 0.3s ease'
  }
}));

const AnimatedButton = styled(Button)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: `${theme.shadows[6]} !important`,
    '& .arrow-icon': {
      transform: 'translateX(4px)'
    },
    '&:after': {
      animation: `${borderGlow} 1.2s ease-out`
    }
  },
  '& .arrow-icon': {
    transition: 'transform 0.3s ease'
  },
  '&:after': {
    content: '""',
    position: 'absolute',
    borderRadius: 'inherit',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  }
}));

const ContactForm = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <Box
      id="contact"
      sx={{
        py: 12,
        background: theme.palette.background.default,
        position: 'relative',
        overflow: 'hidden',
        [theme.breakpoints.up("md")]: {
          py: 15,
        },
      }}
    >
      {/* Decorative elements */}
      <Box sx={{
        position: 'absolute',
        top: -100,
        right: -100,
        width: 400,
        height: 400,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(25, 118, 210, 0.08) 0%, rgba(255,255,255,0) 70%)',
        zIndex: 0
      }} />
      
      <Box sx={{
        position: 'absolute',
        bottom: -150,
        left: -150,
        width: 500,
        height: 500,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(25, 118, 210, 0.05) 0%, rgba(255,255,255,0) 70%)',
        zIndex: 0
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <Box sx={{ textAlign: "center", mb: 10 }}>
          <Fade in timeout={800}>
            <Stack direction="column" alignItems="center" spacing={2}>
              <Typography
                variant="overline"
                component="span"
                sx={{
                  color: 'primary.main',
                  fontWeight: 600,
                  letterSpacing: 3,
                  fontSize: '0.9rem',
                  display: 'inline-block',
                  mb: 1
                }}
              >
                CONTACT US
              </Typography>
              <ClassicSectionTitle
                variant={isMobile ? "h3" : "h2"}
                component="h2"
              >
                Get In Touch
              </ClassicSectionTitle>
              <Typography
                variant={isMobile ? "body1" : "h6"}
                component="p"
                sx={{
                  color: "text.secondary",
                  maxWidth: 700,
                  lineHeight: 1.8,
                  mt: 3
                }}
              >
                Have questions or want to discuss a project? Reach out through any of these channels or send us a message.
              </Typography>
            </Stack>
          </Fade>
        </Box>

        {/* Contact Information Cards */}
        <Grid container spacing={4} sx={{ mb: 10 }}>
          <Grid item xs={12} md={4}>
            <Slide direction="up" in timeout={800} style={{ transitionDelay: '100ms' }}>
              <div>
                <ContactCard elevation={0}>
                  <CardContent sx={{ p: 5, height: '100%' }}>
                    <Stack direction="column" spacing={3} alignItems="flex-start" height="100%">
                      <Avatar 
                        className="card-icon"
                        sx={{ 
                          bgcolor: 'primary.light', 
                          color: 'primary.main',
                          width: 60, 
                          height: 60,
                          mb: 2
                        }}
                      >
                        <LocationIcon fontSize="medium" />
                      </Avatar>
                      <Typography variant="h6" component="h3" sx={{ fontWeight: 600 }}>
                        Our Office
                      </Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                        Karen Plains Arcade, Level 2<br />
                        Karen Plains Road<br />
                        P.O. Box 68254 - 00200<br />
                        Nairobi, Kenya
                      </Typography>
                    </Stack>
                  </CardContent>
                </ContactCard>
              </div>
            </Slide>
          </Grid>
          <Grid item xs={12} md={4}>
            <Slide direction="up" in timeout={800} style={{ transitionDelay: '200ms' }}>
              <div>
                <ContactCard elevation={0}>
                  <CardContent sx={{ p: 5, height: '100%' }}>
                    <Stack direction="column" spacing={3} alignItems="flex-start" height="100%">
                      <Avatar 
                        className="card-icon"
                        sx={{ 
                          bgcolor: 'primary.light', 
                          color: 'primary.main',
                          width: 60, 
                          height: 60,
                          mb: 2
                        }}
                      >
                        <PhoneIcon fontSize="medium" />
                      </Avatar>
                      <Typography variant="h6" component="h3" sx={{ fontWeight: 600 }}>
                        Contact Details
                      </Typography>
                      <Box>
                        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 2.2 }}>
                          <Link href="tel:+254202323622" color="inherit" underline="hover" sx={{ display: 'flex', alignItems: 'center' }}>
                            <PhoneIcon sx={{ mr: 1.5, fontSize: '1rem', color: 'primary.main' }} /> +254 (0)202 323622
                          </Link>
                          <Link href="tel:+254730988100" color="inherit" underline="hover" sx={{ display: 'flex', alignItems: 'center' }}>
                            <PhoneIcon sx={{ mr: 1.5, fontSize: '1rem', color: 'primary.main' }} /> +254 (0)730 988100
                          </Link>
                          <Link href="mailto:info@apscopelimited.com" color="inherit" underline="hover" sx={{ display: 'flex', alignItems: 'center' }}>
                            <EmailIcon sx={{ mr: 1.5, fontSize: '1rem', color: 'primary.main' }} /> info@apscopelimited.com
                          </Link>
                        </Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </ContactCard>
              </div>
            </Slide>
          </Grid>
          <Grid item xs={12} md={4}>
            <Slide direction="up" in timeout={800} style={{ transitionDelay: '300ms' }}>
              <div>
                <ContactCard elevation={0}>
                  <CardContent sx={{ p: 5, height: '100%' }}>
                    <Stack direction="column" spacing={3} alignItems="flex-start" height="100%">
                      <Avatar 
                        className="card-icon"
                        sx={{ 
                          bgcolor: 'primary.light', 
                          color: 'primary.main',
                          width: 60, 
                          height: 60,
                          mb: 2
                        }}
                      >
                        <WebsiteIcon fontSize="medium" />
                      </Avatar>
                      <Typography variant="h6" component="h3" sx={{ fontWeight: 600 }}>
                        Online
                      </Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, mb: 2 }}>
                        Visit our website to learn more about our services and offerings.
                      </Typography>
                      <AnimatedButton 
                        variant="contained" 
                        color="primary" 
                        href="https://www.apscopelimited.com" 
                        target="_blank"
                        sx={{ mt: 'auto' }}
                        endIcon={<ArrowIcon className="arrow-icon" />}
                      >
                        Visit Website
                      </AnimatedButton>
                    </Stack>
                  </CardContent>
                </ContactCard>
              </div>
            </Slide>
          </Grid>
        </Grid>

        {/* Form Section */}
        <Fade in timeout={1200}>
          <Box sx={{ maxWidth: 900, mx: 'auto' }}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 4, md: 6 },
                borderRadius: 3,
                backgroundColor: "background.paper",
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                border: '1px solid rgba(0,0,0,0.03)',
                position: 'relative',
                overflow: 'hidden',
                '&:before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: 4,
                  background: theme.palette.primary.main
                }
              }}
            >
              {submitted ? (
                <Box sx={{ textAlign: "center", py: 6 }}>
                  <Grow in timeout={500}>
                    <Stack spacing={4} alignItems="center">
                      <Avatar
                        sx={{
                          width: 100,
                          height: 100,
                          bgcolor: "success.light",
                          color: "success.main",
                        }}
                      >
                        <CheckCircleIcon sx={{ fontSize: 50 }} />
                      </Avatar>
                      <Typography
                        variant={isMobile ? "h5" : "h4"}
                        component="h3"
                        sx={{
                          fontWeight: 600,
                          color: "text.primary",
                          fontFamily: '"Playfair Display", serif'
                        }}
                      >
                        Message Sent!
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "text.secondary",
                          maxWidth: 600,
                          lineHeight: 1.8,
                        }}
                      >
                        Thank you for contacting us. We've received your message and will respond within 24 hours.
                      </Typography>
                    </Stack>
                  </Grow>
                </Box>
              ) : (
                <>
                  <Typography variant="h5" component="h3" sx={{ 
                    fontWeight: 600,
                    mb: 6,
                    fontFamily: '"Playfair Display", serif',
                    display: 'flex',
                    alignItems: 'center',
                    '&:before': {
                      content: '""',
                      display: 'inline-block',
                      width: 30,
                      height: 3,
                      background: theme.palette.primary.main,
                      mr: 3
                    }
                  }}>
                    Send Us a Message
                  </Typography>
                  
                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={4}>
                      <Grid item xs={12} md={6}>
                        <TextField
                          fullWidth
                          label="Full Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          variant="outlined"
                          size="medium"
                          InputProps={{
                            sx: {
                              fontSize: "1rem",
                              height: 56,
                            },
                          }}
                          InputLabelProps={{
                            sx: {
                              fontSize: "1rem",
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
                          size="medium"
                          InputProps={{
                            sx: {
                              fontSize: "1rem",
                              height: 56,
                            },
                          }}
                          InputLabelProps={{
                            sx: {
                              fontSize: "1rem",
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          fullWidth
                          label="Phone Number"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          variant="outlined"
                          size="medium"
                          InputProps={{
                            sx: {
                              fontSize: "1rem",
                              height: 56,
                            },
                          }}
                          InputLabelProps={{
                            sx: {
                              fontSize: "1rem",
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          fullWidth
                          label="Subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          variant="outlined"
                          size="medium"
                          InputProps={{
                            sx: {
                              fontSize: "1rem",
                              height: 56,
                            },
                          }}
                          InputLabelProps={{
                            sx: {
                              fontSize: "1rem",
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Your Message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          multiline
                          rows={5}
                          variant="outlined"
                          size="medium"
                          InputProps={{
                            sx: {
                              fontSize: "1rem",
                            },
                          }}
                          InputLabelProps={{
                            sx: {
                              fontSize: "1rem",
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sx={{ textAlign: { xs: 'center', md: 'left' }, mt: 2 }}>
                        <AnimatedButton
                          type="submit"
                          variant="contained"
                          color="primary"
                          size="large"
                          endIcon={<SendIcon className="arrow-icon" />}
                          sx={{
                            px: 6,
                            py: 1.5,
                            fontSize: "1rem",
                            fontWeight: 600,
                            borderRadius: 2,
                            minWidth: 200,
                            height: 50
                          }}
                        >
                          Send Message
                        </AnimatedButton>
                      </Grid>
                    </Grid>
                  </form>
                </>
              )}
            </Paper>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

export default ContactForm;