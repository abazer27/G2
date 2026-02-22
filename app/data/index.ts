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
    title: "Classic House I",
    description: "A timeless classic residence featuring elegant proportions, symmetrical facades, and refined architectural detailing. This home embraces traditional design principles while incorporating modern comfort and functionality for contemporary living.",
    shortDescription: "Elegant classic residence with timeless proportions",
    category: "Residential",
    year: 2024,
    location: "Phesona Khayangan - Depok",
    client: "Private Client",
    landArea: "300 m²",
    buildingArea: "500 m²",
    status: "completed",
    images: [
      {
        compressed: "/images/projects/houses/classic/house-01/portrait-1.png",
        hd: "/images/projects/houses/classic/house-01/portrait-1.png",
        alt: "Classic House I - Front facade view",
      },
      {
        compressed: "/images/projects/houses/classic/house-01/portrait-2.png",
        hd: "/images/projects/houses/classic/house-01/portrait-2.png",
        alt: "Classic House I - Architectural details",
      },
      {
        compressed: "/images/projects/houses/classic/house-01/portrait-3.png",
        hd: "/images/projects/houses/classic/house-01/portrait-3.png",
        alt: "Classic House I - Side elevation",
      },
    ],
    thumbnailImage: {
      compressed: "/images/projects/houses/classic/house-01/landscape-1.png",
      hd: "/images/projects/houses/classic/house-01/landscape-1.png",
      alt: "Classic House I - Thumbnail",
    },
    heroImage: {
      compressed: "/images/projects/houses/classic/house-01/landscape-1.png",
      hd: "/images/projects/houses/classic/house-01/landscape-1.png",
      alt: "Classic House I - Hero image",
    },
    tags: ["Classic", "Residential", "Sustainable"],
    features: ["Solar panels", "Green roof", "Smart home technology"],
    slug: "classic-house-1",
  },
  {
    id: "2",
    title: "Classic House II",
    description: "An exquisite classic residence showcasing sophisticated architectural heritage with graceful columns, ornate moldings, and a stunning pool area. The design harmoniously blends traditional elegance with luxurious outdoor living spaces.",
    shortDescription: "Sophisticated classic home with elegant pool area",
    category: "Residential",
    year: 2024,
    location: "Phesona Khayangan - Depok",
    client: "Private Client",
    landArea: "300 m²",
    buildingArea: "500 m²",
    status: "completed",
    images: [
      {
        compressed: "/images/projects/houses/classic/house-02/landscape-2.png",
        hd: "/images/projects/houses/classic/house-02/landscape-2.png",
        alt: "Classic House II - Front elevation",
      },
      {
        compressed: "/images/projects/houses/classic/house-02/landscape-3.png",
        hd: "/images/projects/houses/classic/house-02/landscape-3.png",
        alt: "Classic House II - Garden view",
      },
      {
        compressed: "/images/projects/houses/classic/house-02/landscape-4.png",
        hd: "/images/projects/houses/classic/house-02/landscape-4.png",
        alt: "Classic House II - Side facade",
      },
      {
        compressed: "/images/projects/houses/classic/house-02/landscape-5.png",
        hd: "/images/projects/houses/classic/house-02/landscape-5.png",
        alt: "Classic House II - Rear elevation",
      },
      {
        compressed: "/images/projects/houses/classic/house-02/landscape-6.png",
        hd: "/images/projects/houses/classic/house-02/landscape-6.png",
        alt: "Classic House II - Entrance detail",
      },
      {
        compressed: "/images/projects/houses/classic/house-02/landscape-7.png",
        hd: "/images/projects/houses/classic/house-02/landscape-7.png",
        alt: "Classic House II - Architectural detail",
      },
      {
        compressed: "/images/projects/houses/classic/house-02/pool-1.jpg",
        hd: "/images/projects/houses/classic/house-02/pool-1.jpg",
        alt: "Classic House II - Swimming pool area",
      },
    ],
    thumbnailImage: {
      compressed: "/images/projects/houses/classic/house-02/landscape-1.png",
      hd: "/images/projects/houses/classic/house-02/landscape-1.png",
      alt: "Classic House II - Thumbnail",
    },
    heroImage: {
      compressed: "/images/projects/houses/classic/house-02/landscape-1.png",
      hd: "/images/projects/houses/classic/house-02/landscape-1.png",
      alt: "Classic House II - Hero image",
    },
    tags: ["Classic", "Residential", "Sustainable"],
    features: ["Pool", "Green roof", "Smart home technology"],
    slug: "classic-house-2",
  },
  {
    id: "3",
    title: "Contemporary House I",
    description: "A bold contemporary residence featuring clean geometric lines, expansive glass facades, and seamless indoor-outdoor connections. This modern home emphasizes minimalist aesthetics with functional spatial planning and abundant natural light.",
    shortDescription: "Bold contemporary design with clean geometric lines",
    category: "Urban Planning",
    year: 2025,
    location: "Pasar Minggu - Jakarta Selatan",
    client: "City Development Authority",
    landArea: "283 m²",
    buildingArea: "700 m²",
    status: "completed",
    images: [
      {
        compressed: "/images/projects/houses/contemporary/house-01/portrait-1.png",
        hd: "/images/projects/houses/contemporary/house-01/portrait-1.png",
        alt: "Contemporary House I - Main facade",
      },
      {
        compressed: "/images/projects/houses/contemporary/house-01/portrait-2.png",
        hd: "/images/projects/houses/contemporary/house-01/portrait-2.png",
        alt: "Contemporary House I - Glass facade detail",
      },
      {
        compressed: "/images/projects/houses/contemporary/house-01/portrait-3.png",
        hd: "/images/projects/houses/contemporary/house-01/portrait-3.png",
        alt: "Contemporary House I - Entrance view",
      },
      {
        compressed: "/images/projects/houses/contemporary/house-01/portrait-4.png",
        hd: "/images/projects/houses/contemporary/house-01/portrait-4.png",
        alt: "Contemporary House I - Side elevation",
      },
      {
        compressed: "/images/projects/houses/contemporary/house-01/portrait-5.png",
        hd: "/images/projects/houses/contemporary/house-01/portrait-5.png",
        alt: "Contemporary House I - Architectural detail",
      },
    ],
    thumbnailImage: {
      compressed: "/images/projects/houses/contemporary/house-01/landscape-1.png",
      hd: "/images/projects/houses/contemporary/house-01/landscape-1.png",
      alt: "Contemporary House I - Thumbnail",
    },
    heroImage: {
      compressed: "/images/projects/houses/contemporary/house-01/landscape-1.png",
      hd: "/images/projects/houses/contemporary/house-01/landscape-1.png",
      alt: "Contemporary House I - Hero image",
    },
    tags: ["Urban Planning", "Mixed-Use", "Community"],
    features: ["Public plaza", "Green corridors", "Transit integration"],
    slug: "contemporary-house-1",
  },
  {
    id: "4",
    title: "Contemporary House II",
    description: "A striking contemporary residence that pushes the boundaries of modern architecture with innovative facade treatments, floating volumes, and dramatic cantilevers. The design creates dynamic visual interest while maintaining practical living spaces.",
    shortDescription: "Striking modern home with innovative facade design",
    category: "Educational",
    year: 2025,
    location: "Pasar Minggu - Jakarta Selatan",
    client: "City Development Authority",
    landArea: "283 m²",
    buildingArea: "700 m²",
    status: "completed",
    images: [
      {
        compressed: "/images/projects/houses/contemporary/house-02/portrait-1.png",
        hd: "/images/projects/houses/contemporary/house-02/portrait-1.png",
        alt: "Contemporary House II - Front facade",
      },
      {
        compressed: "/images/projects/houses/contemporary/house-02/portrait-2.png",
        hd: "/images/projects/houses/contemporary/house-02/portrait-2.png",
        alt: "Contemporary House II - Living spaces",
      },
      {
        compressed: "/images/projects/houses/contemporary/house-02/portrait-3.png",
        hd: "/images/projects/houses/contemporary/house-02/portrait-3.png",
        alt: "Contemporary House II - Facade detail",
      },
      {
        compressed: "/images/projects/houses/contemporary/house-02/portrait-4.png",
        hd: "/images/projects/houses/contemporary/house-02/portrait-4.png",
        alt: "Contemporary House II - Side view",
      },
      {
        compressed: "/images/projects/houses/contemporary/house-02/portrait-5.png",
        hd: "/images/projects/houses/contemporary/house-02/portrait-5.png",
        alt: "Contemporary House II - Architectural elements",
      },
    ],
    thumbnailImage: {
      compressed: "/images/projects/houses/contemporary/house-02/landscape-1.png",
      hd: "/images/projects/houses/contemporary/house-02/landscape-1.png",
      alt: "Contemporary House II - Thumbnail",
    },
    heroImage: {
      compressed: "/images/projects/houses/contemporary/house-02/landscape-1.png",
      hd: "/images/projects/houses/contemporary/house-02/landscape-1.png",
      alt: "Contemporary House II - Hero image",
    },
    tags: ["Educational", "Sustainable", "Biophilic"],
    features: [
      "Natural ventilation",
      "Rainwater harvesting",
      "Flexible classrooms",
      "Green walls",
    ],
    slug: "contemporary-house-2",
  },
  {
    id: "5",
    title: "Contemporary House III",
    description: "An avant-garde contemporary residence featuring sculptural forms, bold material contrasts, and innovative spatial compositions. This architectural statement combines artistic expression with functional design for modern urban living.",
    shortDescription: "Avant-garde residence with sculptural architecture",
    category: "Cultural",
    year: 2025,
    location: "Pasar Minggu - Jakarta Selatan",
    client: "City Development Authority",
    landArea: "283 m²",
    buildingArea: "700 m²",
    status: "completed",
    images: [
      {
        compressed: "/images/projects/houses/contemporary/house-03/portrait-1.png",
        hd: "/images/projects/houses/contemporary/house-03/portrait-1.png",
        alt: "Contemporary House III - Sculptural facade",
      },
      {
        compressed: "/images/projects/houses/contemporary/house-03/portrait-2.png",
        hd: "/images/projects/houses/contemporary/house-03/portrait-2.png",
        alt: "Contemporary House III - Interior volumes",
      },
      {
        compressed: "/images/projects/houses/contemporary/house-03/portrait-3.png",
        hd: "/images/projects/houses/contemporary/house-03/portrait-3.png",
        alt: "Contemporary House III - Material details",
      },
      {
        compressed: "/images/projects/houses/contemporary/house-03/portrait-4.png",
        hd: "/images/projects/houses/contemporary/house-03/portrait-4.png",
        alt: "Contemporary House III - Elevation view",
      },
    ],
    thumbnailImage: {
      compressed: "/images/projects/houses/contemporary/house-03/landscape-1.png",
      hd: "/images/projects/houses/contemporary/house-03/landscape-1.png",
      alt: "Contemporary House III - Thumbnail",
    },
    heroImage: {
      compressed: "/images/projects/houses/contemporary/house-03/landscape-1.png",
      hd: "/images/projects/houses/contemporary/house-03/landscape-1.png",
      alt: "Contemporary House III - Hero image",
    },
    tags: ["Cultural", "Modern", "Landmark"],
    features: [
      "Dynamic lighting",
      "Flexible galleries",
      "Sculpture garden",
      "Interactive spaces",
    ],
    slug: "contemporary-house-3",
  },
  {
    id: "6",
    title: "Mediterranean House I",
    description: "A luxurious Mediterranean-inspired residence featuring warm terracotta tones, arched doorways, wrought iron accents, and lush courtyard gardens. This home captures the romantic essence of Mediterranean architecture with modern amenities.",
    shortDescription: "Luxurious Mediterranean home with warm terracotta tones",
    category: "Hospitality",
    year: 2025,
    location: "Pasar Minggu - Jakarta Selatan",
    client: "City Development Authority",
    landArea: "283 m²",
    buildingArea: "700 m²",
    status: "completed",
    images: [
      {
        compressed: "/images/projects/houses/mediterranean/house-01/portrait-1.png",
        hd: "/images/projects/houses/mediterranean/house-01/portrait-1.png",
        alt: "Mediterranean House I - Front facade",
      },
      {
        compressed: "/images/projects/houses/mediterranean/house-01/portrait-2.png",
        hd: "/images/projects/houses/mediterranean/house-01/portrait-2.png",
        alt: "Mediterranean House I - Arched entrance",
      },
      {
        compressed: "/images/projects/houses/mediterranean/house-01/portrait-3.png",
        hd: "/images/projects/houses/mediterranean/house-01/portrait-3.png",
        alt: "Mediterranean House I - Courtyard view",
      },
      {
        compressed: "/images/projects/houses/mediterranean/house-01/portrait-4.png",
        hd: "/images/projects/houses/mediterranean/house-01/portrait-4.png",
        alt: "Mediterranean House I - Architectural details",
      },
    ],
    thumbnailImage: {
      compressed: "/images/projects/houses/mediterranean/house-01/landscape-1.png",
      hd: "/images/projects/houses/mediterranean/house-01/landscape-1.png",
      alt: "Mediterranean House I - Thumbnail",
    },
    heroImage: {
      compressed: "/images/projects/houses/mediterranean/house-01/landscape-1.png",
      hd: "/images/projects/houses/mediterranean/house-01/landscape-1.png",
      alt: "Mediterranean House I - Hero image",
    },
    tags: ["Hospitality", "Luxury", "Tropical"],
    features: [
      "Ocean views",
      "Private pools",
      "Traditional elements",
      "Landscape integration",
    ],
    slug: "mediterranean-house-1",
  },
  {
    id: "7",
    title: "Modern Traditional House I",
    description: "A harmonious fusion of modern design and traditional Indonesian architectural elements. This residence celebrates cultural heritage through contemporary interpretation, featuring natural materials, pitched roofs, and open-air living spaces.",
    shortDescription: "Modern fusion with traditional Indonesian elements",
    category: "Commercial",
    year: 2025,
    location: "Pasar Minggu - Jakarta Selatan",
    client: "City Development Authority",
    landArea: "283 m²",
    buildingArea: "700 m²",
    status: "in-progress",
    images: [
      {
        compressed: "/images/projects/houses/modern-traditional/house-01/portrait-1.png",
        hd: "/images/projects/houses/modern-traditional/house-01/portrait-1.png",
        alt: "Modern Traditional House I - Front elevation",
      },
      {
        compressed: "/images/projects/houses/modern-traditional/house-01/portrait-2.png",
        hd: "/images/projects/houses/modern-traditional/house-01/portrait-2.png",
        alt: "Modern Traditional House I - Traditional roof detail",
      },
      {
        compressed: "/images/projects/houses/modern-traditional/house-01/portrait-3.png",
        hd: "/images/projects/houses/modern-traditional/house-01/portrait-3.png",
        alt: "Modern Traditional House I - Open-air spaces",
      },
      {
        compressed: "/images/projects/houses/modern-traditional/house-01/portrait-4.png",
        hd: "/images/projects/houses/modern-traditional/house-01/portrait-4.png",
        alt: "Modern Traditional House I - Natural materials",
      },
    ],
    thumbnailImage: {
      compressed: "/images/projects/houses/modern-traditional/house-01/landscape-1.png",
      hd: "/images/projects/houses/modern-traditional/house-01/landscape-1.png",
      alt: "Modern Traditional House I - Thumbnail",
    },
    heroImage: {
      compressed: "/images/projects/houses/modern-traditional/house-01/landscape-1.png",
      hd: "/images/projects/houses/modern-traditional/house-01/landscape-1.png",
      alt: "Modern Traditional House I - Hero image",
    },
    tags: ["Commercial", "Technology", "Innovation"],
    features: [
      "Co-working spaces",
      "Research labs",
      "Central atrium",
      "Smart building systems",
    ],
    slug: "modern-traditional-house-1",
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
  email: "hendri@Garis2architect.com",
  phone: "+62 878 5618 1415",
  address: "Premiere estate3, Cibubur, Bekasi",
  socialMedia: {
    linkedin:
      "https://www.linkedin.com/in/ar-tri-henri-firmansah-iai-332732187?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    instagram:
      "https://www.instagram.com/trihenrifirmansah?igsh=cXNkc29lYjVhcHF1",
    tiktok: "https://www.tiktok.com/@Garis2architect",
  },
};

export const aboutContent: AboutContent = {
  hero: {
    title: "About Garis 2 Architect",
  },
  story: {
    title: "Our Story",
    paragraphs: [
      "Welcome to Garis 2 Architect, where innovative design meets sustainable architecture. With over a decade of experience in creating exceptional spaces, we specialize in residential, commercial, and urban planning projects.",
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
        id: "1",
        title: "Perencanaan & Desain Arsitektur",
        description: "Menyediakan layanan perancangan bangunan dari konsep hingga gambar kerja, Fokus pada desain kontekstual, tropis kontemporer, fungsional, dan estetis.",
        icon: "PencilRuler",
        points: [
          "Hunian pribadi",
          "Villa",
          "Komersial & retail",
          "Renovasi dan perluasan bangunan"
        ],
      },
      {
        id: "2",
        title: "Desain Interior",
        description:
          "Merancang interior yang selaras dengan karakter bangunan dan kebutuhan pengguna, Dengan pendekatan estetika yang bersih, material natural, dan tata ruang efisien.",
        icon: "Home",
        points: [
          "Perumahan",
          "Kantor",
          "Ruang komersial",
          "Hospitality"
        ],
      },
      {
        id: "3",
        title: "Konsep Fasade & Re-Design",
        description: "Memberikan solusi tampak bangunan yang lebih modern, adaptif, dan sesuai identitas klien",
        icon: "Layers",
        points: [
          "Pembaruan fasade (re-facing)",
          "Desain fasade baru untuk bangunan lama",
          "Studi bentuk dan estetika visual"
        ],
      },
      {
        id: "4",
        title: "Masterplan & Site Planning",
        description: "Penataan kawasan skala kecil hingga menengah, Fokus pada sirkulasi, landscape, dan hubungan antar ruang luar–dalam.",
        icon: "Map",
        points: [
          "Villa complex",
          "Cluster perumahan",
          "Kawasan komersial"
        ],
      },
      {
        id: "5",
        title: "3D Visualization & Rendering",
        description: "Menyajikan visualisasi 3D realistis yang membantu klien memahami desain dengan lebih jelas",
        icon: "Box",
        points: [
          "Exterior rendering",
          "Interior rendering",
          "Animasi dan walkthrough"
        ],
      },
      {
        id: "6",
        title: "Gambar Kerja & Dokumen Teknis",
        description: "Menyusun dokumen teknis yang lengkap dan dapat digunakan oleh kontraktor untuk proses pembangunan, penekanan pada akurasi dan kejelasan informasi.",
        icon: "FileText",
        points: [
          "Gambar arsitektur detail",
          "Detail konstruksi",
          "Rencana material & spesifikasi teknis"
        ],
      },
      {
        id: "7",
        title: "Pengawasan & Koordinasi Lapangan",
        description: "Mengawal desain agar terbangun sesuai konsep dan standar kualitas studio",
        icon: "ClipboardCheck",
        points: [
          "Site visit berkala",
          "Evaluasi progres",
          "Koordinasi dengan kontraktor dan vendor",
          "Penyesuaian teknis di lapangan jika diperlukan"
        ],
      },
      {
        id: "8",
        title: "Konsultasi Arsitektur",
        description: "Memberikan arahan profesional bagi klien yang membutuhkan panduan awal",
        icon: "MessageSquare",
        points: [
          "Studi kelayakan lahan",
          "Estimasi kebutuhan ruang",
          "Penilaian potensi desain",
          "Solusi renovasi dan perbaikan fungsi"
        ],
      },
    ],
  },
};
