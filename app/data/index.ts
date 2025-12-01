import {
  Project,
  Service,
  Testimonial,
  ContactInfo,
  AboutContent,
} from "../types";

// Sample projects data - replace with your actual projects
export const projects: Project[] = [
  {
    id: "1",
    title: "Modern Residential Villa",
    description:
      "A contemporary villa design featuring clean lines, open spaces, and sustainable materials. The project emphasizes natural light and seamless indoor-outdoor living.",
    shortDescription: "Contemporary villa with sustainable design principles",
    category: "Residential",
    year: 2024,
    location: "Los Angeles, CA",
    client: "Private Client",
    area: "4,500 sq ft",
    status: "completed",
    images: [
      {
        compressed: "/images/projects/project-1/content1.jpg",
        hd: "/images/projects/project-1/content1.jpg",
        alt: "Modern villa exterior view",
      },
      {
        compressed: "/images/projects/project-1/content2.jpg",
        hd: "/images/projects/project-1/content2.jpg",
        alt: "Villa living area interior",
      },
      {
        compressed: "/images/projects/project-1/content3.jpg",
        hd: "/images/projects/project-1/content3.jpg",
        alt: "Villa outdoor terrace",
      },
    ],
    thumbnailImage: {
      compressed: "/images/projects/project-1/content4.jpg",
      hd: "/images/projects/project-1/content4.jpg",
      alt: "Modern residential villa thumbnail",
    },
    heroImage: {
      compressed: "/images/projects/project-1/content4.jpg",
      hd: "/images/projects/project-1/content4.jpg",
      alt: "Modern residential villa hero image",
    },
    tags: ["Modern", "Residential", "Sustainable"],
    features: ["Solar panels", "Green roof", "Smart home technology"],
    slug: "modern-residential-villa",
  },
  {
    id: "2",
    title: "Corporate Office Complex",
    description:
      "A modern commercial space designed for productivity and collaboration. Features open floor plans, natural lighting, and sustainable building materials.",
    shortDescription: "Modern commercial space with open floor plans",
    category: "Commercial",
    year: 2023,
    location: "Jakarta, Indonesia",
    client: "Tech Innovations Ltd",
    area: "12,000 sq ft",
    status: "completed",
    images: [
      {
        compressed: "/images/projects/project-2/content1.jpg",
        hd: "/images/projects/project-2/img-1-hd.jpg",
        alt: "Corporate office exterior view",
      },
      {
        compressed: "/images/projects/project-2/content2.jpg",
        hd: "/images/projects/project-2/img-2-hd.jpg",
        alt: "Office interior workspace",
      },
      {
        compressed: "/images/projects/project-2/content3.jpg",
        hd: "/images/projects/project-2/img-3-hd.jpg",
        alt: "Office collaborative spaces",
      },
    ],
    thumbnailImage: {
      compressed: "/images/projects/project-2/content1.jpg",
      hd: "/images/projects/project-2/thumb-hd.jpg",
      alt: "Corporate office complex thumbnail",
    },
    heroImage: {
      compressed: "/images/projects/project-2/content1.jpg",
      hd: "/images/projects/project-2/hero-hd.jpg",
      alt: "Corporate office complex hero image",
    },
    tags: ["Modern", "Commercial", "Collaborative"],
    features: ["Open workspaces", "Meeting pods", "Rooftop garden"],
    slug: "corporate-office-complex",
  },
  {
    id: "3",
    title: "Urban Mixed-Use Development",
    description:
      "A comprehensive urban development project combining residential, commercial, and public spaces. Designed to create a vibrant community hub with sustainable urban planning principles.",
    shortDescription: "Mixed-use development with community focus",
    category: "Urban Planning",
    year: 2024,
    location: "Bekasi, Indonesia",
    client: "City Development Authority",
    area: "50,000 sq ft",
    status: "in-progress",
    images: [
      {
        compressed: "/images/projects/project-3/content1.jpg",
        hd: "/images/projects/project-3/img-1-hd.jpg",
        alt: "Urban mixed-use development overview",
      },
      {
        compressed: "/images/projects/project-3/content2.jpg",
        hd: "/images/projects/project-3/img-2-hd.jpg",
        alt: "Urban development public spaces",
      },
      {
        compressed: "/images/projects/project-3/content3.jpg",
        hd: "/images/projects/project-3/img-3-hd.jpg",
        alt: "Urban development residential area",
      },
    ],
    thumbnailImage: {
      compressed: "/images/projects/project-3/content1.jpg",
      hd: "/images/projects/project-3/thumb-hd.jpg",
      alt: "Urban mixed-use development thumbnail",
    },
    heroImage: {
      compressed: "/images/projects/project-3/content1.jpg",
      hd: "/images/projects/project-3/hero-hd.jpg",
      alt: "Urban mixed-use development hero image",
    },
    tags: ["Urban Planning", "Mixed-Use", "Community"],
    features: ["Public plaza", "Green corridors", "Transit integration"],
    slug: "urban-mixed-use-development",
  },
  {
    id: "4",
    title: "Sustainable Education Center",
    description:
      "An innovative educational facility designed with biophilic principles and sustainable materials. The building features natural ventilation, rainwater harvesting, and flexible learning spaces that adapt to different teaching methods.",
    shortDescription: "Eco-friendly educational facility with biophilic design",
    category: "Educational",
    year: 2023,
    location: "Bandung, Indonesia",
    client: "Green Valley School Foundation",
    area: "8,500 sq ft",
    status: "completed",
    images: [
      {
        compressed: "/images/projects/project-4/content1.jpg",
        hd: "/images/projects/project-4/img-1-hd.jpg",
        alt: "Education center exterior with biophilic design",
      },
      {
        compressed: "/images/projects/project-4/content2.jpg",
        hd: "/images/projects/project-4/img-2-hd.jpg",
        alt: "Flexible classroom spaces",
      },
      {
        compressed: "/images/projects/project-4/content3.jpg",
        hd: "/images/projects/project-4/img-3-hd.jpg",
        alt: "Natural ventilation and green walls",
      },
    ],
    thumbnailImage: {
      compressed: "/images/projects/project-4/content1.jpg",
      hd: "/images/projects/project-4/thumb-hd.jpg",
      alt: "Sustainable education center thumbnail",
    },
    heroImage: {
      compressed: "/images/projects/project-4/content1.jpg",
      hd: "/images/projects/project-4/hero-hd.jpg",
      alt: "Sustainable education center hero image",
    },
    tags: ["Educational", "Sustainable", "Biophilic"],
    features: [
      "Natural ventilation",
      "Rainwater harvesting",
      "Flexible classrooms",
      "Green walls",
    ],
    slug: "sustainable-education-center",
  },
  {
    id: "5",
    title: "Contemporary Art Museum",
    description:
      "A striking cultural landmark featuring dramatic geometric forms and innovative lighting systems. The museum combines exhibition spaces with interactive areas, creating an immersive experience for visitors while showcasing contemporary Indonesian art.",
    shortDescription: "Modern art museum with geometric architecture",
    category: "Cultural",
    year: 2024,
    location: "Yogyakarta, Indonesia",
    client: "Indonesian Arts Council",
    area: "15,000 sq ft",
    status: "completed",
    images: [
      {
        compressed: "/images/projects/project-5/img-1-compressed.jpg",
        hd: "/images/projects/project-5/img-1-hd.jpg",
        alt: "Museum geometric architecture exterior",
      },
      {
        compressed: "/images/projects/project-5/img-2-compressed.jpg",
        hd: "/images/projects/project-5/img-2-hd.jpg",
        alt: "Museum gallery interior with dynamic lighting",
      },
      {
        compressed: "/images/projects/project-5/img-3-compressed.jpg",
        hd: "/images/projects/project-5/img-3-hd.jpg",
        alt: "Museum sculpture garden and interactive spaces",
      },
    ],
    thumbnailImage: {
      compressed: "/images/projects/project-5/thumb-compressed.jpg",
      hd: "/images/projects/project-5/thumb-hd.jpg",
      alt: "Contemporary art museum thumbnail",
    },
    heroImage: {
      compressed: "/images/projects/project-5/hero-compressed.jpg",
      hd: "/images/projects/project-5/hero-hd.jpg",
      alt: "Contemporary art museum hero image",
    },
    tags: ["Cultural", "Modern", "Landmark"],
    features: [
      "Dynamic lighting",
      "Flexible galleries",
      "Sculpture garden",
      "Interactive spaces",
    ],
    slug: "contemporary-art-museum",
  },
  {
    id: "6",
    title: "Luxury Resort Villas",
    description:
      "A collection of luxury villas nestled in tropical landscape, each designed to maximize privacy while offering stunning ocean views. The architecture blends modern minimalism with traditional Indonesian elements, creating a unique hospitality experience.",
    shortDescription: "Luxury resort villas with ocean views",
    category: "Hospitality",
    year: 2023,
    location: "Bali, Indonesia",
    client: "Tropical Paradise Resorts",
    area: "25,000 sq ft",
    status: "completed",
    images: [
      {
        compressed: "/images/projects/project-6/img-1-compressed.jpg",
        hd: "/images/projects/project-6/img-1-hd.jpg",
        alt: "Luxury resort villa with ocean view",
      },
      {
        compressed: "/images/projects/project-6/img-2-compressed.jpg",
        hd: "/images/projects/project-6/img-2-hd.jpg",
        alt: "Resort villa private pool area",
      },
      {
        compressed: "/images/projects/project-6/img-3-compressed.jpg",
        hd: "/images/projects/project-6/img-3-hd.jpg",
        alt: "Resort villa tropical landscape integration",
      },
    ],
    thumbnailImage: {
      compressed: "/images/projects/project-6/thumb-compressed.jpg",
      hd: "/images/projects/project-6/thumb-hd.jpg",
      alt: "Luxury resort villas thumbnail",
    },
    heroImage: {
      compressed: "/images/projects/project-6/hero-compressed.jpg",
      hd: "/images/projects/project-6/hero-hd.jpg",
      alt: "Luxury resort villas hero image",
    },
    tags: ["Hospitality", "Luxury", "Tropical"],
    features: [
      "Ocean views",
      "Private pools",
      "Traditional elements",
      "Landscape integration",
    ],
    slug: "luxury-resort-villas",
  },
  {
    id: "7",
    title: "Innovation Hub Complex",
    description:
      "A cutting-edge technology campus designed to foster innovation and collaboration. The complex features co-working spaces, research labs, and startup incubators, all connected by a central atrium that encourages interaction and knowledge sharing.",
    shortDescription: "Modern tech campus for innovation and collaboration",
    category: "Commercial",
    year: 2024,
    location: "Singapore",
    client: "Tech Forward Industries",
    area: "30,000 sq ft",
    status: "in-progress",
    images: [
      {
        compressed: "/images/projects/project-7/img-1-compressed.jpg",
        hd: "/images/projects/project-7/img-1-hd.jpg",
        alt: "Innovation hub complex exterior",
      },
      {
        compressed: "/images/projects/project-7/img-2-compressed.jpg",
        hd: "/images/projects/project-7/img-2-hd.jpg",
        alt: "Innovation hub central atrium",
      },
      {
        compressed: "/images/projects/project-7/img-3-compressed.jpg",
        hd: "/images/projects/project-7/img-3-hd.jpg",
        alt: "Innovation hub co-working spaces",
      },
    ],
    thumbnailImage: {
      compressed: "/images/projects/project-7/thumb-compressed.jpg",
      hd: "/images/projects/project-7/thumb-hd.jpg",
      alt: "Innovation hub complex thumbnail",
    },
    heroImage: {
      compressed: "/images/projects/project-7/hero-compressed.jpg",
      hd: "/images/projects/project-7/hero-hd.jpg",
      alt: "Innovation hub complex hero image",
    },
    tags: ["Commercial", "Technology", "Innovation"],
    features: [
      "Co-working spaces",
      "Research labs",
      "Central atrium",
      "Smart building systems",
    ],
    slug: "innovation-hub-complex",
  },
  {
    id: "8",
    title: "Wellness & Spa Retreat",
    description:
      "A holistic wellness center designed to promote healing and relaxation through architecture. The design incorporates natural materials, water features, and meditation gardens, creating a tranquil environment that supports physical and mental well-being.",
    shortDescription: "Tranquil wellness center with healing architecture",
    category: "Wellness",
    year: 2024,
    location: "Ubud, Indonesia",
    client: "Serenity Wellness Group",
    area: "6,800 sq ft",
    status: "completed",
    images: [
      {
        compressed: "/images/projects/project-8/img-1-compressed.jpg",
        hd: "/images/projects/project-8/img-1-hd.jpg",
        alt: "Wellness center exterior with natural materials",
      },
      {
        compressed: "/images/projects/project-8/img-2-compressed.jpg",
        hd: "/images/projects/project-8/img-2-hd.jpg",
        alt: "Wellness center meditation gardens",
      },
      {
        compressed: "/images/projects/project-8/img-3-compressed.jpg",
        hd: "/images/projects/project-8/img-3-hd.jpg",
        alt: "Wellness center spa facilities with water features",
      },
    ],
    thumbnailImage: {
      compressed: "/images/projects/project-8/thumb-compressed.jpg",
      hd: "/images/projects/project-8/thumb-hd.jpg",
      alt: "Wellness & spa retreat thumbnail",
    },
    heroImage: {
      compressed: "/images/projects/project-8/hero-compressed.jpg",
      hd: "/images/projects/project-8/hero-hd.jpg",
      alt: "Wellness & spa retreat hero image",
    },
    tags: ["Wellness", "Healing", "Natural"],
    features: [
      "Meditation gardens",
      "Water features",
      "Natural materials",
      "Spa facilities",
    ],
    slug: "wellness-spa-retreat",
  },
];

export const services: Service[] = [
  {
    id: "1",
    title: "Architectural Design",
    description:
      "Complete architectural design services from concept to construction documentation.",
    icon: "building",
  },
  {
    id: "2",
    title: "Interior Design",
    description:
      "Thoughtful interior spaces that complement the architectural vision.",
    icon: "home",
  },
  {
    id: "3",
    title: "Urban Planning",
    description: "Strategic planning for sustainable and livable communities.",
    icon: "city",
  },
  {
    id: "4",
    title: "Consultation",
    description:
      "Expert architectural consultation for your development projects.",
    icon: "consultation",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "John Smith",
    role: "CEO",
    company: "Development Corp",
    content:
      "Exceptional architectural vision and attention to detail. The project exceeded our expectations.",
  },
  // Add more testimonials
];

export const contactInfo: ContactInfo = {
  email: "hendri@g2architect.com",
  phone: "+62 878 5618 1415",
  address: "Premiere estate3, Cibubur, Bekasi",
  socialMedia: {
    linkedin:
      "https://www.linkedin.com/in/ar-tri-henri-firmansah-iai-332732187?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    instagram:
      "https://www.instagram.com/trihenrifirmansah?igsh=cXNkc29lYjVhcHF1",
    tiktok: "https://www.tiktok.com/@g2architect",
  },
};

export const aboutContent: AboutContent = {
  hero: {
    title: "About G2 Architect",
  },
  story: {
    title: "Our Story",
    paragraphs: [
      "Welcome to G2 Architect, where innovative design meets sustainable architecture. With over a decade of experience in creating exceptional spaces, we specialize in residential, commercial, and urban planning projects.",
      "Our philosophy centers on human-centered design that responds to both environmental context and client needs, creating spaces that are not only beautiful but also functional and sustainable.",
    ],
  },
  mission: {
    title: "Our Mission",
    content:
      "To create architectural experiences that inspire, innovate, and transform communities through thoughtful design that balances aesthetics, functionality, and environmental responsibility.",
  },
  whatWeDo: {
    title: "What We Do",
    services: [
      {
        title: "Residential Design",
        description: "Custom homes and residential developments",
      },
      {
        title: "Commercial Architecture",
        description:
          "Office buildings, retail spaces, and mixed-use developments",
      },
      {
        title: "Urban Planning",
        description: "Community development and sustainable urban design",
      },
      {
        title: "Interior Design",
        description: "Complete interior design services",
      },
    ],
  },
  approach: {
    title: "Our Approach",
    values: [
      {
        title: "Design Excellence",
        description: "Creating spaces that are both beautiful and functional",
      },
      {
        title: "Sustainability Focus",
        description: "Environmentally responsible design practices",
      },
      {
        title: "Client Collaboration",
        description: "Working closely with clients to realize their vision",
      },
    ],
  },
};
