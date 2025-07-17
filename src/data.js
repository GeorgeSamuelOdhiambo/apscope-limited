import { Devices, Engineering, Groups, MedicalServices } from "@mui/icons-material";

import itSolutionsImage from "./assets/images/technology_solutions.png";
import hrTalent from "./assets/images/hr-talent.jpg";
import projectDevelopmentImage from "./assets/images/ProjectDevelopment.png";
import healthPharma from "./assets/images/health-pharmacy.jpg";

// src/data.js
export const values = [
  {
    icon: 'fa-handshake',
    title: 'Integrity',
    description: 'We conduct business with honesty and transparency in all our dealings.'
  },
  {
    icon: 'fa-award',
    title: 'Quality',
    description: 'We deliver exceptional standards in all our products and services.'
  },
  {
    icon: 'fa-user-tie',
    title: 'Professionalism',
    description: 'We maintain the highest levels of expertise and ethical conduct.'
  },
  {
    icon: 'fa-clock',
    title: 'Reliability',
    description: 'We honor our commitments and deliver on our promises.'
  },
  {
    icon: 'fa-lightbulb',
    title: 'Innovativeness',
    description: 'We continuously seek creative solutions to complex challenges.'
  },
  {
    icon: 'fa-heart',
    title: 'Customer Satisfaction',
    description: 'We prioritize our clients needs and strive to exceed expectations.'
  }
];

export const services = [
  {
    icon: 'fa-building',
    id: "project-development",
    title: 'Project Development',
    shortDesc: 'End-to-end project management from conception to completion.',
    color: "#FF9800"
  },
  {
    icon: 'fa-heartbeat',
    id: "health-pharma",
    title: 'Health & Pharma Agency',
    shortDesc: "Comprehensive medical solutions and healthcare services",
    color: "#2196F3",
    bgImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  
  },
  {
    icon: 'fa-users',
    id: "hr-talent",
    title: 'HR & Talent Management',
    shortDesc: "Strategic human resource solutions and talent acquisition",
    color: "#9C27B0",
    bgImage: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  
  },
  {
    icon: 'fa-laptop-code',
    id: "it-solutions",
    title: 'I.T. & Commodity Trading',
    shortDesc: 'Technology solutions and commodity trading services.'
  }
];


export const serviceData = {
  "it-solutions": {
    title: "I.T. Solutions & Tech Trading",
    icon: <Devices fontSize="large" />,
    description:
      "Apscope delivers tailored I.T. hardware and software solutions, including tech product sourcing and commodity trading. We serve public and private institutions with reliable technology infrastructure to power their operations.",
    bannerHeading: "Tech-Driven Solutions for Growth",
    bannerSubheading:
      "From hardware supply to software and tech-related commodity trading—we connect you to the digital tools you need.",
    color: "#607D8B", // Blue-grey
    image: itSolutionsImage, // replace with actual image import
    features: [
      "Supply of I.T. hardware (PCs, servers, networking)",
      "Software deployment (ERP, accounting, CRM, etc.)",
      "Peripheral and accessory sourcing (printers, UPS, routers)",
      "Tech-related commodity trading (devices, gadgets, etc.)",
      "OEM & branded product partnerships",
    ],
    services: [
      "Custom I.T. procurement for organizations",
      "Installation & systems integration",
      "After-sales support & maintenance",
      "Tech vendor partnerships & representation",
      "Consulting for digital transformation",
    ],
    benefits: [
      "Wide network of tech suppliers",
      "Affordable and scalable solutions",
      "Support for large-scale tenders",
      "Tech advisory & needs assessment",
      "Flexible trading models (bulk, B2B, B2C)",
    ],
    cta: "Streamline your tech procurement and boost performance",
    wtc: "Let’s power your digital transformation",
    btn: "Request a Quote",
    targetAudience: [
      "Government Ministries & Agencies",
      "Educational Institutions",
      "SMEs & Corporates",
      "ICT Tenders & Contractors",
      "Tech Importers/Distributors",
    ],
  },

  "project-development": {
    title: "Infrastructure & Project Development",
    icon: <Engineering fontSize="large" />,
    description:
      "We identify infrastructure needs, develop project documentation, and support investor sourcing and execution. Our integrated approach accelerates project delivery and stakeholder alignment in key sectors including healthcare, education, and technology.",
    bannerHeading: "From Idea to Execution",
    bannerSubheading:
      "Concept-to-completion project development and execution support across Eastern Africa.",
    color: "#795548", // Brown
    image: projectDevelopmentImage, // replace with actual image import
    features: [
      "Infrastructure needs assessment",
      "Feasibility studies & stakeholder mapping",
      "Business case & concept documentation",
      "Investor sourcing & deal structuring",
      "Project execution & oversight",
    ],
    services: [
      "Development of funding proposals and project documents",
      "Investor pitching and partnership facilitation",
      "Government and donor engagement support",
      "Coordination of multi-stakeholder projects",
      "Post-implementation monitoring & evaluation",
    ],
    benefits: [
      "Strong investor and institutional networks",
      "Proven experience across public-private projects",
      "End-to-end execution support",
      "Compliance and risk management focus",
      "Tailored support for each development phase",
    ],
    cta: "Turn your project vision into reality",
    wtc: "Let’s discuss your infrastructure or investment need",
    btn: "Book a Consultation",
    targetAudience: [
      "County & National Governments",
      "Hospitals & Health Systems",
      "Development Partners & NGOs",
      "Tech Parks & Innovation Hubs",
      "Education Sector Institutions",
      "Private Sector Investors",
    ],
  },
  "health-pharma": {
    title: "Health & Pharma Partnership Agency",
    icon: <MedicalServices fontSize="large" />,
    description:
      "Apscope bridges pharmaceutical manufacturers, and Medical equipment manufacturers with East African markets through regulatory expertise, tender management, and local packaging partnerships. We provide end-to-end solutions for medical equipment, pharmaceuticals, consumables, and institutional healthcare services.",
    bannerHeading: "Gateway to East African Healthcare Markets",
    bannerSubheading:
      "Pharma Registration | Government Tenders | Local Packaging Partnerships | Distribution Networks",
    color: "#2196F3", // Blue
    image: healthPharma,
    features: [
      "Representation for Indian & Chinese pharma companies",
      "End-to-end product registration (Kenya & Uganda)",
      "Government tender procurement specialists",
      "Co-investment in local packaging facilities",
      "Medical equipment sourcing & certification",
    ],
    services: [
      "Pharma market entry & regulatory compliance",
      "Medical equipment procurement & logistics",
      "Tender bidding & contract facilitation",
      "Local packaging/JV partnership setup",
      "Distribution network development",
    ],
    benefits: [
      "Faster market access with regulatory expertise",
      "Tender-winning strategies for public sector contracts",
      "Cost-saving local packaging solutions",
      "Trusted distribution channels in East Africa",
      "End-to-end partnership (registration to retail)",
    ],
    cta: "Partner for seamless market entry in East Africa",
    wtc: "Discuss representation or partnership opportunities",
    btn: "Contact our Team",
    targetAudience: [
      "Pharmaceutical manufacturers",
      "Medical equipment suppliers",
      "Hospital & clinic chains",
      "Government health agencies",
      "NGO healthcare programs",
      "Medical importers/distributors",
    ],
    partnershipNote: {
      title: "Pharma Manufacturer? Expand to Africa",
      text: "We represent international pharma companies in Kenya & Uganda - handling registrations, tenders, marketing, and local packaging partnerships.",
      cta: "Explore Representation Services →",
    },
  },
  "hr-talent": {
    title: "Global HR & Talent Solutions",
    icon: <Groups fontSize="large" />,
    description:
      "Apscope specializes in international recruitment, training, and overseas placement for healthcare professionals (nurses, caregivers, technicians) and educators. We connect African talent with global opportunities while helping organizations build high-performing teams.",
    bannerHeading: "Bridging Talent with Global Opportunities",
    bannerSubheading:
      "Recruitment | Training | Overseas Placement | Compliance Support",
    color: "#9C27B0", // Purple
    image: hrTalent,
    features: [
      "Overseas placement for nurses, caregivers & technicians",
      "International teacher recruitment (Africa to GCC/Europe)",
      "End-to-end visa & work permit processing",
      "Pre-departure training & certification",
      "Local talent sourcing for African organizations",
    ],
    services: [
      "Healthcare workforce recruitment (USA Canada, Australia & EU markets)",
      "Teacher & skilled labor placement abroad",
      "HR consulting for hospitals & schools",
      "Compliance & licensing support (e.g., NCLEX, Prometric)",
      "Customized training programs (language, cultural adaptation)",
    ],
    benefits: [
      "Direct access to pre-screened healthcare & education talent",
      "Streamlined international placement process",
      "Reduced hiring risks with verified candidates",
      "Support for certification & regulatory requirements",
      "Post-placement retention programs",
    ],
    cta: "Staff your facility or secure international opportunities",
    wtc: "Need qualified nurses, teachers, or technicians?",
    btn: "Contact Our HR Team",
    targetAudience: [
      "Hospitals & Clinics (Africa & Abroad)",
      "Nursing Homes (USA Canada, Australia & EU markets )",
      "Schools & Training Institutes",
      "Healthcare Recruitment Agencies",
      "Government Workforce Programs",
      "Skilled Professionals Seeking Overseas Jobs",
    ],
    // Optional: Specialization highlights
    specialtyRoles: [
      "Registered Nurses (ICU, OR, ER)",
      "Certified Caregivers (Elderly/Disability Care)",
      "Medical Lab Technicians",
      "Vocational Teachers (STEM, Healthcare)",
      "Hospital Administrators",
    ],
  },
};

