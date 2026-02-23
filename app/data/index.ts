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
    title: "Rumah Ibu Amos",
    description: "A timeless classic residence featuring elegant proportions, symmetrical facades, and refined architectural detailing. This home embraces traditional design principles while incorporating modern comfort and functionality for contemporary living.",
    shortDescription: "Elegant classic residence with timeless proportions",
    category: "Classic",
    year: 2024,
    location: "Phesona Khayangan - Depok",
    client: "Private Client",
    landArea: "400 m²",
    buildingArea: "500 m²",
    status: "completed",
    images: [
      {
        compressed: "/images/projects/houses/classic/house-01/portrait-1.png",
        hd: "/images/projects/houses/classic/house-01/portrait-1.png",
        alt: "Rumah Ibu Amos - Front facade view",
      },
      {
        compressed: "/images/projects/houses/classic/house-01/portrait-2.png",
        hd: "/images/projects/houses/classic/house-01/portrait-2.png",
        alt: "Rumah Ibu Amos - Architectural details",
      },
      {
        compressed: "/images/projects/houses/classic/house-01/portrait-3.png",
        hd: "/images/projects/houses/classic/house-01/portrait-3.png",
        alt: "Rumah Ibu Amos - Side elevation",
      },
    ],
    thumbnailImage: {
      compressed: "/images/projects/houses/classic/house-01/landscape-1.png",
      hd: "/images/projects/houses/classic/house-01/landscape-1.png",
      alt: "Rumah Ibu Amos - Thumbnail",
    },
    heroImage: {
      compressed: "/images/projects/houses/classic/house-01/landscape-1.png",
      hd: "/images/projects/houses/classic/house-01/landscape-1.png",
      alt: "Rumah Ibu Amos - Hero image",
    },
    tags: ["Classic", "Residential"],
    features: ["Smart home technology", "2 floors"],
    slug: "rumah-ibu-amos",
  },
  {
    id: "2",
    title: "Rumah Pak Ardi",
    description: "An exquisite classic residence showcasing sophisticated architectural heritage with graceful columns, ornate moldings, and a stunning pool area. The design harmoniously blends traditional elegance with luxurious outdoor living spaces.",
    shortDescription: "Sophisticated classic home with elegant pool area",
    category: "Classic",
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
        alt: "Rumah Pak Ardi - Front elevation",
      },
      {
        compressed: "/images/projects/houses/classic/house-02/landscape-3.png",
        hd: "/images/projects/houses/classic/house-02/landscape-3.png",
        alt: "Rumah Pak Ardi - Garden view",
      },
      {
        compressed: "/images/projects/houses/classic/house-02/landscape-4.png",
        hd: "/images/projects/houses/classic/house-02/landscape-4.png",
        alt: "Rumah Pak Ardi - Side facade",
      },
      {
        compressed: "/images/projects/houses/classic/house-02/landscape-5.png",
        hd: "/images/projects/houses/classic/house-02/landscape-5.png",
        alt: "Rumah Pak Ardi - Rear elevation",
      },
      {
        compressed: "/images/projects/houses/classic/house-02/landscape-6.png",
        hd: "/images/projects/houses/classic/house-02/landscape-6.png",
        alt: "Rumah Pak Ardi - Entrance detail",
      },
      {
        compressed: "/images/projects/houses/classic/house-02/landscape-7.png",
        hd: "/images/projects/houses/classic/house-02/landscape-7.png",
        alt: "Rumah Pak Ardi - Architectural detail",
      },
      {
        compressed: "/images/projects/houses/classic/house-02/pool-1.jpg",
        hd: "/images/projects/houses/classic/house-02/pool-1.jpg",
        alt: "Rumah Pak Ardi - Swimming pool area",
      },
    ],
    thumbnailImage: {
      compressed: "/images/projects/houses/classic/house-02/landscape-1.png",
      hd: "/images/projects/houses/classic/house-02/landscape-1.png",
      alt: "Rumah Pak Ardi - Thumbnail",
    },
    heroImage: {
      compressed: "/images/projects/houses/classic/house-02/landscape-1.png",
      hd: "/images/projects/houses/classic/house-02/landscape-1.png",
      alt: "Rumah Pak Ardi - Hero image",
    },
    tags: ["Classic", "Residential"],
    features: ["Smart home technology", "Pool area", "3 floors"],
    slug: "rumah-pak-ardi",
  },
  {
    id: "3",
    title: "Rumah Pak Marsal",
    description: "A bold contemporary residence featuring clean geometric lines, expansive glass facades, and seamless indoor-outdoor connections. This modern home emphasizes minimalist aesthetics with functional spatial planning and abundant natural light.",
    shortDescription: "Bold contemporary design with clean geometric lines",
    category: "Contemporary",
    year: 2025,
    location: "Pasar Minggu - Jakarta Selatan",
    client: "Private Client",
    landArea: "283 m²",
    buildingArea: "300 m²",
    status: "completed",
    images: [
      {
        compressed: "/images/projects/houses/contemporary/house-01/portrait-1.png",
        hd: "/images/projects/houses/contemporary/house-01/portrait-1.png",
        alt: "Rumah Pak Marsal - Main facade",
      },
      {
        compressed: "/images/projects/houses/contemporary/house-01/portrait-2.png",
        hd: "/images/projects/houses/contemporary/house-01/portrait-2.png",
        alt: "Rumah Pak Marsal - Glass facade detail",
      },
      {
        compressed: "/images/projects/houses/contemporary/house-01/portrait-3.png",
        hd: "/images/projects/houses/contemporary/house-01/portrait-3.png",
        alt: "Rumah Pak Marsal - Entrance view",
      },
      {
        compressed: "/images/projects/houses/contemporary/house-01/portrait-4.png",
        hd: "/images/projects/houses/contemporary/house-01/portrait-4.png",
        alt: "Rumah Pak Marsal - Side elevation",
      },
      {
        compressed: "/images/projects/houses/contemporary/house-01/portrait-5.png",
        hd: "/images/projects/houses/contemporary/house-01/portrait-5.png",
        alt: "Rumah Pak Marsal - Architectural detail",
      },
    ],
    thumbnailImage: {
      compressed: "/images/projects/houses/contemporary/house-01/landscape-1.png",
      hd: "/images/projects/houses/contemporary/house-01/landscape-1.png",
      alt: "Rumah Pak Marsal - Thumbnail",
    },
    heroImage: {
      compressed: "/images/projects/houses/contemporary/house-01/landscape-1.png",
      hd: "/images/projects/houses/contemporary/house-01/landscape-1.png",
      alt: "Rumah Pak Marsal - Hero image",
    },
    tags: ["Contemporary", "Residential"],
    features: ["Smart home technology" , "2 floors"],
    slug: "rumah-pak-marsal",
  },
  {
    id: "4",
    title: "Rumah Pak Marsal II",
    description: "A striking contemporary residence that pushes the boundaries of modern architecture with innovative facade treatments, floating volumes, and dramatic cantilevers. The design creates dynamic visual interest while maintaining practical living spaces.",
    shortDescription: "Striking modern home with innovative facade design",
    category: "Contemporary",
    year: 2025,
    location: "Pasar Minggu - Jakarta Selatan",
    client: "Private Client",
    landArea: "283 m²",
    buildingArea: "700 m²",
    status: "completed",
    images: [
      {
        compressed: "/images/projects/houses/contemporary/house-02/portrait-1.png",
        hd: "/images/projects/houses/contemporary/house-02/portrait-1.png",
        alt: "Rumah Pak Marsal II - Front facade",
      },
      {
        compressed: "/images/projects/houses/contemporary/house-02/portrait-2.png",
        hd: "/images/projects/houses/contemporary/house-02/portrait-2.png",
        alt: "Rumah Pak Marsal II - Living spaces",
      },
      {
        compressed: "/images/projects/houses/contemporary/house-02/portrait-3.png",
        hd: "/images/projects/houses/contemporary/house-02/portrait-3.png",
        alt: "Rumah Pak Marsal II - Facade detail",
      },
      {
        compressed: "/images/projects/houses/contemporary/house-02/portrait-4.png",
        hd: "/images/projects/houses/contemporary/house-02/portrait-4.png",
        alt: "Rumah Pak Marsal II - Side view",
      },
      {
        compressed: "/images/projects/houses/contemporary/house-02/portrait-5.png",
        hd: "/images/projects/houses/contemporary/house-02/portrait-5.png",
        alt: "Rumah Pak Marsal II - Architectural elements",
      },
    ],
    thumbnailImage: {
      compressed: "/images/projects/houses/contemporary/house-02/landscape-1.png",
      hd: "/images/projects/houses/contemporary/house-02/landscape-1.png",
      alt: "Rumah Pak Marsal II - Thumbnail",
    },
    heroImage: {
      compressed: "/images/projects/houses/contemporary/house-02/landscape-1.png",
      hd: "/images/projects/houses/contemporary/house-02/landscape-1.png",
      alt: "Rumah Pak Marsal II - Hero image",
    },
    tags: ["Contemporary", "Residential"],
    features: ["Smart home technology" , "4 floors"],
    slug: "rumah-pak-marsal-ii",
  },
  {
    id: "5",
    title: "Rumah Pak Slamet",
    description: "An avant-garde contemporary residence featuring sculptural forms, bold material contrasts, and innovative spatial compositions. This architectural statement combines artistic expression with functional design for modern urban living.",
    shortDescription: "Avant-garde residence with sculptural architecture",
    category: "Contemporary",
    year: 2025,
    location: "Depok - Jawa Barat",
    client: "Private Client",
    landArea: "200 m²",
    buildingArea: "250 m²",
    status: "completed",
    images: [
      {
        compressed: "/images/projects/houses/contemporary/house-03/portrait-1.png",
        hd: "/images/projects/houses/contemporary/house-03/portrait-1.png",
        alt: "Rumah Pak Slamet - Sculptural facade",
      },
      {
        compressed: "/images/projects/houses/contemporary/house-03/portrait-2.png",
        hd: "/images/projects/houses/contemporary/house-03/portrait-2.png",
        alt: "Rumah Pak Slamet - Interior volumes",
      },
      {
        compressed: "/images/projects/houses/contemporary/house-03/portrait-3.png",
        hd: "/images/projects/houses/contemporary/house-03/portrait-3.png",
        alt: "Rumah Pak Slamet - Material details",
      },
      {
        compressed: "/images/projects/houses/contemporary/house-03/portrait-4.png",
        hd: "/images/projects/houses/contemporary/house-03/portrait-4.png",
        alt: "Rumah Pak Slamet - Elevation view",
      },
    ],
    thumbnailImage: {
      compressed: "/images/projects/houses/contemporary/house-03/landscape-1.png",
      hd: "/images/projects/houses/contemporary/house-03/landscape-1.png",
      alt: "Rumah Pak Slamet - Thumbnail",
    },
    heroImage: {
      compressed: "/images/projects/houses/contemporary/house-03/landscape-1.png",
      hd: "/images/projects/houses/contemporary/house-03/landscape-1.png",
      alt: "Rumah Pak Slamet - Hero image",
    },
    tags: ["Contemporary", "Residential"],
    features: ["Smart home technology", "2 floors"],
    slug: "rumah-pak-slamet",
  },
  {
    id: "6",
    title: "Rumah Pak Reza",
    description: "A luxurious Mediterranean-inspired residence featuring warm terracotta tones, arched doorways, wrought iron accents, and lush courtyard gardens. This home captures the romantic essence of Mediterranean architecture with modern amenities.",
    shortDescription: "Luxurious Mediterranean home with warm terracotta tones",
    category: "Mediterranean",
    year: 2025,
    location: "Bekasi - Jawa Barat",
    client: "Private Client",
    landArea: "60 m²",
    buildingArea: "55 m²",
    status: "completed",
    images: [
      {
        compressed: "/images/projects/houses/mediterranean/house-01/portrait-1.png",
        hd: "/images/projects/houses/mediterranean/house-01/portrait-1.png",
        alt: "Rumah Pak Reza - Front facade",
      },
      {
        compressed: "/images/projects/houses/mediterranean/house-01/portrait-2.png",
        hd: "/images/projects/houses/mediterranean/house-01/portrait-2.png",
        alt: "Rumah Pak Reza - Arched entrance",
      },
      {
        compressed: "/images/projects/houses/mediterranean/house-01/portrait-3.png",
        hd: "/images/projects/houses/mediterranean/house-01/portrait-3.png",
        alt: "Rumah Pak Reza - Courtyard view",
      },
      {
        compressed: "/images/projects/houses/mediterranean/house-01/portrait-4.png",
        hd: "/images/projects/houses/mediterranean/house-01/portrait-4.png",
        alt: "Rumah Pak Reza - Architectural details",
      },
    ],
    thumbnailImage: {
      compressed: "/images/projects/houses/mediterranean/house-01/landscape-1.png",
      hd: "/images/projects/houses/mediterranean/house-01/landscape-1.png",
      alt: "Rumah Pak Reza - Thumbnail",
    },
    heroImage: {
      compressed: "/images/projects/houses/mediterranean/house-01/landscape-1.png",
      hd: "/images/projects/houses/mediterranean/house-01/landscape-1.png",
      alt: "Rumah Pak Reza - Hero image",
    },
    tags: ["Mediterranean", "Residential"],
    features: ["Smart home technology", "2 floors"],
    slug: "rumah-pak-reza",
  },
  {
    id: "7",
    title: "Rumah Pak Hasan",
    description: "A harmonious fusion of modern design and traditional Indonesian architectural elements. This residence celebrates cultural heritage through contemporary interpretation, featuring natural materials, pitched roofs, and open-air living spaces.",
    shortDescription: "Modern fusion with traditional Indonesian elements",
    category: "Modern Traditional",
    year: 2024,
    location: "Bekasi - Harapan Indah",
    client: "Private Client",
    landArea: "283 m²",
    buildingArea: "250 m²",
    status: "completed",
    images: [
      {
        compressed: "/images/projects/houses/modern-traditional/house-01/portrait-1.png",
        hd: "/images/projects/houses/modern-traditional/house-01/portrait-1.png",
        alt: "Rumah Pak Hasan - Front elevation",
      },
      {
        compressed: "/images/projects/houses/modern-traditional/house-01/portrait-2.png",
        hd: "/images/projects/houses/modern-traditional/house-01/portrait-2.png",
        alt: "Rumah Pak Hasan - Traditional roof detail",
      },
      {
        compressed: "/images/projects/houses/modern-traditional/house-01/portrait-3.png",
        hd: "/images/projects/houses/modern-traditional/house-01/portrait-3.png",
        alt: "Rumah Pak Hasan - Open-air spaces",
      },
      {
        compressed: "/images/projects/houses/modern-traditional/house-01/portrait-4.png",
        hd: "/images/projects/houses/modern-traditional/house-01/portrait-4.png",
        alt: "Rumah Pak Hasan - Natural materials",
      },
    ],
    thumbnailImage: {
      compressed: "/images/projects/houses/modern-traditional/house-01/landscape-1.png",
      hd: "/images/projects/houses/modern-traditional/house-01/landscape-1.png",
      alt: "Rumah Pak Hasan - Thumbnail",
    },
    heroImage: {
      compressed: "/images/projects/houses/modern-traditional/house-01/landscape-1.png",
      hd: "/images/projects/houses/modern-traditional/house-01/landscape-1.png",
      alt: "Rumah Pak Hasan - Hero image",
    },
    tags: ["Modern Traditional", "Residential"],
    features: ["Smart home technology", "2 floors"],
    slug: "rumah-pak-hasan",
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
    title: "About Garis2Architect",
    subtitle: "Human-centered design rooted in context and clarity. Creating spaces that are not only beautiful but also functional and sustainable.",
  },
  milestones: [
    {
      id: "1",
      year: "2019",
      title: "Fondasi dan Identitas",
      description: "Garis 2 lahir dengan gagasan menghadirkan ruang yang tidak hanya indah secara visual, tetapi juga memiliki garis pemikiran yang jelas, jujur, dan manusiawi. Fokus pada proyek residensial dan interior komersial skala kecil–menengah dengan pendekatan kontekstual.",
    },
    {
      id: "2",
      year: "2020–2021",
      title: "Adaptasi & Ketahanan",
      description: "Merespons pandemi dengan pendekatan desain adaptif: rumah multifungsi, kantor rumahan, ruang komunal sehat. Meningkatkan efisiensi proses dan kolaborasi jarak jauh.",
    },
    {
      id: "3",
      year: "2022–2023",
      title: "Momentum Pertumbuhan",
      description: "Menangani proyek skala lebih besar: hunian tropis kontemporer, villa, renovasi bangunan lama, proyek komersial strategis. Mematangkan signature style: garis modern, material natural, pencahayaan kuat.",
    },
    {
      id: "4",
      year: "2024",
      title: "Penguatan Sistem & Integritas Desain",
      description: "Mengembangkan metode kerja terstruktur dari riset hingga pengawasan. Fokus pada sustainability: ventilasi alami, material lokal, efisiensi energi.",
    },
    {
      id: "5",
      year: "2025",
      title: "Studio Dewasa & Visioner",
      description: "Menjadi mitra tepercaya dalam menciptakan ruang fungsional, estetis, dan bermakna. Arsitektur sebagai narasi hidup.",
    },
  ],
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
