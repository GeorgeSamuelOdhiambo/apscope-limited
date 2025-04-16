import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Divider,
  Card,
  CardMedia,
  CardContent,
  Paper,
  Avatar,
  useTheme,
  useMediaQuery,
  Slide,
  Fade,
  Grow,
  IconButton,
  Modal,
  Grid,
  Chip,
} from "@mui/material";
import {
  Business as BusinessIcon,
  Groups as GroupsIcon,
  Person as PersonIcon,
  School as SchoolIcon,
  Work as WorkIcon,
  Star as StarIcon,
  ChevronLeft,
  ChevronRight,
  Close,
} from "@mui/icons-material";
import kaptenImage from "../assets/images/directors/kapten.jpg";
import johnImage from "../assets/images/directors/john.jpg";
import stanleyImage from "../assets/images/directors/stanley.jpg";
import andrewImage from "../assets/images/directors/andrew.jpg";

const Directors = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [selectedDirector, setSelectedDirector] = useState(null);

  const directors = [
    {
      name: "Caleb K. Kapten",
      position: "CEO & Managing Director",
      image: kaptenImage,
      tenure: "Since 2010",
      bio: [
        "Mr. Kapten has an MBA degree from the Cardiff Business School, University of Wales, and a B.Com degree from the University of Nairobi.",
        "He is a member of the Chartered Institute of Purchasing and Supply (CIPS).",
        "Until recently, Mr. Kapten was the General Manager, East African Portland Cement Company Limited.",
        "He has previously worked with Nzoia Sugar Company, Moi University, Ministry of Finance, Ministry of Trade and Industry, Ministry of Health, and Office of the President.",
        "Mr. Kapten is a Director in a number of Companies (Salino Limited, Kwetu Limited and Westmount Holdings Limited), Western Hydro Co., and serves as Board/Council member of a number of institutions.",
      ],
    },
    {
      name: "John G. Kapten",
      position: "Executive Director",
      image: johnImage,
      tenure: "Since 2012",
      bio: [
        "John has a Masters Degree in Education (Psychology) from Wichita State University, Kansas, USA and a B.Sc Degree from the same University.",
        "He is Executive Director, Dignified Living LLC, Texas and a Director, Global Ultra Partners Inc, Texas USA.",
        "He is a licensed Realtor.",
      ],
    },
    {
      name: "Stanley K. Soita",
      position: "Director of Operations",
      image: stanleyImage,
      tenure: "Since 2015",
      bio: [
        "Stanley has a Masters in Business Administration (MBA) from Kansas State University.",
        "He is a Marketing, Sales and Logistics specialist.",
        "He currently works with Abundant Life Medical Equipment in Dallas Texas, as a Marketing Manager.",
        "He has previously worked with Texas Instruments as Quality Manager.",
        "Prior to that he worked with General Instruments as a Logistics Manager, and with Mervins Distribution Center as Physical Distribution Manager.",
      ],
    },
    {
      name: "Andrew Wandabwa",
      position: "Legal Director",
      image: andrewImage,
      tenure: "Since 2013",
      bio: [
        "Mr. Wandabwa is an advocate of the High Court.",
        "He is the Managing Partner of Wandabwa and Co. Advocates.",
        "He has an LLB Degree from the University of Nairobi and a Diploma from the Kenya School of Law.",
        "Mr. Wandabwa has previously worked as partner with Pheroze Nowrojee and Lang'at Wandabwa Advocates.",
        "He is a Director of Kwetu Limited.",
      ],
    },
  ];

  const departments = [
    {
      name: "Sales & Marketing",
      icon: <WorkIcon />,
      description: "Driving revenue growth and brand positioning",
    },
    {
      name: "Finance & Administration",
      icon: <BusinessIcon />,
      description: "Ensuring financial health and operational efficiency",
    },
    {
      name: "Business Development",
      icon: <GroupsIcon />,
      description: "Identifying new opportunities and strategic partnerships",
    },
    {
      name: "Investment & Projects",
      icon: <PersonIcon />,
      description: "Managing capital allocation and major initiatives",
    },
    {
      name: "Operations & Logistics",
      icon: <SchoolIcon />,
      description: "Optimizing supply chain and daily operations",
    },
    {
      name: "Consultancy Services",
      icon: <WorkIcon />,
      description: "Providing expert advice to clients and stakeholders",
    },
  ];

  // Auto-rotate directors every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % directors.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [directors.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? directors.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % directors.length);
  };

  const handleOpenModal = (director) => {
    setSelectedDirector(director);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // Get current and next director for display
  const currentDirector = directors[currentIndex];
  const nextDirector = directors[(currentIndex + 1) % directors.length];

  return (
    <Box
      id="directors"
      sx={{
        backgroundColor: theme.palette.background.default,
        py: 8,
        position: "relative",
        "&:before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 300,
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <Box
          sx={{
            textAlign: "center",
            mb: 8,
            position: "relative",
            "&:after": {
              content: '""',
              position: "absolute",
              bottom: -20,
              left: "50%",
              transform: "translateX(-50%)",
              width: 100,
              height: 4,
              backgroundColor: theme.palette.secondary.main,
              borderRadius: 2,
            },
          }}
        >
          <Slide direction="down" in timeout={800}>
            <Typography
              variant={isMobile ? "h4" : "h3"}
              component="h2"
              sx={{
                fontWeight: 700,
                color: theme.palette.common.white,
                mb: 2,
                textTransform: "uppercase",
                letterSpacing: 1.5,
              }}
            >
              Board of Directors
            </Typography>
          </Slide>
          <Fade in timeout={1000}>
            <Typography
              variant="subtitle1"
              sx={{
                color: theme.palette.common.white,
                maxWidth: 800,
                mx: "auto",
                lineHeight: 1.6,
                fontStyle: "italic",
              }}
            >
              Guiding Visionaries Shaping Our Future
            </Typography>
          </Fade>
        </Box>

        {/* Directors Carousel */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 4,
            mb: 10,
            position: "relative",
            minHeight: 400,
          }}
        >
          <IconButton
            onClick={handlePrev}
            sx={{
              position: { xs: "relative", sm: "absolute" },
              left: { xs: 0, sm: -60 },
              color: theme.palette.primary.main,
              backgroundColor: theme.palette.background.paper,
              "&:hover": {
                backgroundColor: theme.palette.primary.light,
                color: theme.palette.common.white,
              },
            }}
          >
            <ChevronLeft fontSize="large" />
          </IconButton>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 4,
              width: "100%",
              maxWidth: 1000,
            }}
          >
            <Grow in timeout={500} key={`current-${currentIndex}`}>
              <Box sx={{ flex: 1 }}>
                <DirectorCard
                  director={currentDirector}
                  onClick={() => handleOpenModal(currentDirector)}
                />
              </Box>
            </Grow>

            {!isMobile && (
              <Grow
                in
                timeout={700}
                key={`next-${(currentIndex + 1) % directors.length}`}
              >
                <Box sx={{ flex: 1 }}>
                  <DirectorCard
                    director={nextDirector}
                    onClick={() => handleOpenModal(nextDirector)}
                  />
                </Box>
              </Grow>
            )}
          </Box>

          <IconButton
            onClick={handleNext}
            sx={{
              position: { xs: "relative", sm: "absolute" },
              right: { xs: 0, sm: -60 },
              color: theme.palette.primary.main,
              backgroundColor: theme.palette.background.paper,
              "&:hover": {
                backgroundColor: theme.palette.primary.light,
                color: theme.palette.common.white,
              },
            }}
          >
            <ChevronRight fontSize="large" />
          </IconButton>
        </Box>

        {/* Bio Modal */}
        <Modal
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="director-bio-modal"
          aria-describedby="director-bio-description"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: 2,
          }}
        >
          <Box
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: 2,
              boxShadow: 24,
              p: 4,
              maxWidth: 800,
              width: "90%",
              maxHeight: "90vh",
              overflowY: "auto",
              position: "relative",
            }}
          >
            <IconButton
              onClick={handleCloseModal}
              sx={{
                position: "absolute",
                right: 16,
                top: 16,
                color: theme.palette.text.secondary,
              }}
            >
              <Close />
            </IconButton>

            {selectedDirector && (
              <Box sx={{ pt: 4 }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    gap: 4,
                    mb: 4,
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: "100%", md: 300 },
                      height: { xs: 300, md: 350 },
                      borderRadius: 2,
                      overflow: "hidden",
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={selectedDirector.image}
                      alt={selectedDirector.name}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h4" component="h3" sx={{ mb: 1 }}>
                      {selectedDirector.name}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        color: theme.palette.secondary.main,
                        mb: 3,
                      }}
                    >
                      {selectedDirector.position}
                    </Typography>
                    <Chip
                      icon={<StarIcon />}
                      label={selectedDirector.tenure}
                      sx={{ mb: 3 }}
                    />

                    {selectedDirector.bio.map((paragraph, index) => (
                      <Typography key={index} paragraph sx={{ mb: 2 }}>
                        {paragraph}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              </Box>
            )}
          </Box>
        </Modal>

        {/* Company Structure */}
        <Slide direction="up" in timeout={1000}>
          <Box
            sx={{
              position: "relative",
              "&:before": {
                content: '""',
                position: "absolute",
                top: -40,
                left: -40,
                width: 100,
                height: 100,
                borderRadius: "50%",
                backgroundColor: theme.palette.secondary.light,
                opacity: 0.2,
                zIndex: -1,
              },
              "&:after": {
                content: '""',
                position: "absolute",
                bottom: -30,
                right: -30,
                width: 80,
                height: 80,
                borderRadius: "50%",
                backgroundColor: theme.palette.primary.light,
                opacity: 0.2,
                zIndex: -1,
              },
            }}
          >
            <Paper
              elevation={0}
              sx={{
                p: isMobile ? 3 : 5,
                backgroundColor: theme.palette.background.paper,
                borderRadius: 2,
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
                border: `1px solid ${theme.palette.divider}`,
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 6,
                  background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                }}
              />

              <Typography
                variant={isMobile ? "h5" : "h4"}
                component="h3"
                sx={{
                  fontWeight: 700,
                  color: theme.palette.primary.dark,
                  mb: 4,
                  textAlign: "center",
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  position: "relative",
                  "&:after": {
                    content: '""',
                    position: "absolute",
                    bottom: -12,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 60,
                    height: 3,
                    backgroundColor: theme.palette.secondary.main,
                  },
                }}
              >
                Corporate Structure
              </Typography>
              <Box
                sx={{
                  textAlign: "center",
                  mb: 4,
                }}
              >
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    fontWeight: 700,
                    color: theme.palette.primary.main,
                    mb: 1,
                    letterSpacing: 1,
                  }}
                >
                  BOARD OF DIRECTORS
                </Typography>
                <Divider
                  sx={{
                    width: 120,
                    height: 2,
                    backgroundColor: theme.palette.secondary.main,
                    mx: "auto",
                    mb: 2,
                  }}
                />
                <Typography
                  variant="subtitle1"
                  component="div"
                  sx={{
                    fontWeight: 600,
                    color: theme.palette.secondary.dark,
                    fontStyle: "italic",
                  }}
                >
                  Chief Executive Officer & Managing Director
                </Typography>
              </Box>

              <Grid container spacing={3}>
                {departments.map((dept, index) => (
                  <Grid item xs={12} sm={4} md={4} key={index}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 3,
                        height: "100%",
                        minHeight: 220, // Ensures equal height
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center", // Centers content vertically
                        textAlign: "center",
                        transition: "all 0.3s ease",
                        backgroundColor: "transparent",
                        border: `1px solid ${theme.palette.divider}`,
                        "&:hover": {
                          transform: "translateY(-5px)",
                          backgroundColor: theme.palette.primary.light,
                          borderColor: theme.palette.primary.main,
                          "& .deptIcon": {
                            backgroundColor: theme.palette.primary.main,
                            color: theme.palette.common.white,
                          },
                          "& .deptName": {
                            color: theme.palette.common.white,
                          },
                          "& .deptDesc": {
                            color: theme.palette.common.white,
                          },
                        },
                      }}
                    >
                      <Avatar
                        className="deptIcon"
                        sx={{
                          mb: 2,
                          bgcolor: theme.palette.secondary.light,
                          color: theme.palette.secondary.dark,
                          width: 60,
                          height: 60,
                          transition: "all 0.3s ease",
                        }}
                      >
                        {dept.icon}
                      </Avatar>
                      <Typography
                        className="deptName"
                        variant="subtitle1"
                        sx={{
                          fontWeight: 600,
                          color: theme.palette.text.primary,
                          mb: 1,
                          transition: "all 0.3s ease",
                        }}
                      >
                        {dept.name}
                      </Typography>
                      <Typography
                        className="deptDesc"
                        variant="body2"
                        sx={{
                          color: theme.palette.text.secondary,
                          fontSize: "0.8rem",
                          transition: "all 0.3s ease",
                        }}
                      >
                        {dept.description}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
              {/* <Grid container spacing={3}>
                  {departments.map((dept, index) => (
                    <Grid item xs={4} sm={4} md={4} key={index}>
                      <Paper
                        elevation={0}
                        sx={{
                          p: 3,
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          textAlign: "center",
                          transition: "all 0.3s ease",
                          backgroundColor: "transparent",
                          border: `1px solid ${theme.palette.divider}`,
                          "&:hover": {
                            transform: "translateY(-5px)",
                            backgroundColor: theme.palette.primary.light,
                            borderColor: theme.palette.primary.main,
                            "& .deptIcon": {
                              backgroundColor: theme.palette.primary.main,
                              color: theme.palette.common.white,
                            },
                            "& .deptName": {
                              color: theme.palette.common.white,
                            },
                            "& .deptDesc": {
                              color: theme.palette.common.white,
                            },
                          },
                        }}
                      >
                        <Avatar
                          className="deptIcon"
                          sx={{
                            mb: 2,
                            bgcolor: theme.palette.secondary.light,
                            color: theme.palette.secondary.dark,
                            width: 60,
                            height: 60,
                            transition: "all 0.3s ease",
                          }}
                        >
                          {dept.icon}
                        </Avatar>
                        <Typography
                          className="deptName"
                          variant="subtitle1"
                          sx={{
                            fontWeight: 600,
                            color: theme.palette.text.primary,
                            mb: 1,
                            transition: "all 0.3s ease",
                          }}
                        >
                          {dept.name}
                        </Typography>
                        <Typography
                          className="deptDesc"
                          variant="body2"
                          sx={{
                            color: theme.palette.text.secondary,
                            fontSize: "0.8rem",
                            transition: "all 0.3s ease",
                          }}
                        >
                          {dept.description}
                        </Typography>
                      </Paper>
                    </Grid>
                  ))}
                </Grid> */}
            </Paper>
          </Box>
        </Slide>
      </Container>
    </Box>
  );
};

// Director Card Component
const DirectorCard = ({ director, onClick }) => {
  const theme = useTheme();

  return (
    <Card
      onClick={onClick}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.3s ease",
        boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
        borderRadius: 2,
        overflow: "hidden",
        cursor: "pointer",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
        },
      }}
    >
      <Box
        sx={{
          height: 300,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <CardMedia
          component="img"
          image={director.image}
          alt={director.name}
          sx={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
        />
        <Chip
          icon={<StarIcon />}
          label={director.tenure}
          size="small"
          sx={{
            position: "absolute",
            bottom: 16,
            left: 16,
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.common.white,
            fontWeight: 600,
          }}
        />
      </Box>
      <CardContent sx={{ p: 4, flexGrow: 1 }}>
        <Typography
          variant="h6"
          component="h3"
          sx={{
            fontWeight: 700,
            color: theme.palette.primary.dark,
            mb: 1,
          }}
        >
          {director.name}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: theme.palette.secondary.main,
            fontWeight: 600,
            mb: 2,
          }}
        >
          {director.position}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: theme.palette.primary.main,
            fontWeight: 600,
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          View Full Biography
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Directors;
