import React from 'react';
import { 
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  useTheme,
  useMediaQuery,
  Slide,
  Grow
} from '@mui/material';
import {
  LocationOn as LocationIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  Language as LanguageIcon
} from '@mui/icons-material';
import officeImage from '../assets/images/aspcope-limited.jpg';

const AddressSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const contactItems = [
    {
      icon: <LocationIcon fontSize="large" />,
      title: "Physical Address",
      details: [
        "Apscope Limited",
        "P.O. Box 68254 - 00200, Nairobi, Kenya",
        "Karen Plains Arcade, Level 2, Karen Plains Road"
      ]
    },
    {
      icon: <PhoneIcon fontSize="large" />,
      title: "Phone",
      details: [
        "Tel: +254 (0)202323622 / +254 (0)730988100"
      ]
    },
    {
      icon: <EmailIcon fontSize="large" />,
      title: "Email",
      details: [
        "info@apscopelimited.com"
      ]
    },
    {
      icon: <LanguageIcon fontSize="large" />,
      title: "Website",
      details: [
        "www.apscopelimited.com"
      ]
    }
  ];

  return (
    <Box
      sx={{
        py: 10,
        position: 'relative',
        backgroundColor: 'background.paper',
        [theme.breakpoints.up('md')]: {
          py: 15
        }
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Image Section */}
          <Grid item xs={12} md={6}>
            <Slide direction="left" in timeout={800}>
              <Paper
                elevation={4}
                sx={{
                  borderRadius: 2,
                  overflow: 'hidden',
                  height: '100%',
                  '&:hover': {
                    '& img': {
                      transform: 'scale(1.03)'
                    }
                  }
                }}
              >
                <Box
                  component="img"
                  src={officeImage}
                  alt="APScope Office"
                  sx={{
                    width: '100%',
                    height: '100%',
                    minHeight: isMobile ? 300 : 400,
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                />
              </Paper>
            </Slide>
          </Grid>
          
          {/* Contact Info Section */}
          <Grid item xs={12} md={6}>
            <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Slide direction="right" in timeout={800}>
                <Box>
                  <Typography 
                    variant={isMobile ? 'h4' : 'h3'} 
                    component="h2"
                    sx={{
                      fontWeight: 700,
                      color: 'text.primary',
                      mb: 4,
                      position: 'relative',
                      '&:after': {
                        content: '""',
                        position: 'absolute',
                        bottom: -10,
                        left: 0,
                        width: 80,
                        height: 4,
                        backgroundColor: 'secondary.main'
                      }
                    }}
                  >
                    Contact Us
                  </Typography>
                  
                  <Grid container spacing={4}>
                    {contactItems.map((item, index) => (
                      <Grid item xs={12} key={index}>
                        <Grow in timeout={800 + (index * 100)}>
                          <Box sx={{ display: 'flex' }}>
                            <Box sx={{ 
                              mr: 3,
                              color: 'primary.main',
                              display: 'flex',
                              alignItems: 'flex-start'
                            }}>
                              {item.icon}
                            </Box>
                            <Box>
                              <Typography 
                                variant="h6" 
                                component="h3"
                                sx={{
                                  fontWeight: 600,
                                  color: 'text.primary',
                                  mb: 1.5
                                }}
                              >
                                {item.title}
                              </Typography>
                              {item.details.map((detail, i) => (
                                <Typography 
                                  key={i}
                                  variant="body1"
                                  sx={{
                                    color: 'text.secondary',
                                    mb: 1,
                                    lineHeight: 1.6
                                  }}
                                >
                                  {detail}
                                </Typography>
                              ))}
                            </Box>
                          </Box>
                        </Grow>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Slide>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AddressSection;