// Type definitions for the architecture portfolio

export interface ImageSet {
  compressed: string;
  hd: string;
  alt?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  category: string;
  year: number;
  location: string;
  client: string;
  landArea: string;
  buildingArea: string;
  status: "completed" | "in-progress" | "concept";
  images: ImageSet[];
  thumbnailImage: ImageSet;
  heroImage: ImageSet;
  tags: string[];
  features: string[];
  slug: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  image?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  socialMedia: {
    linkedin?: string;
    instagram?: string;
    tiktok?: string;
    dribbble?: string;
  };
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface AboutContent {
  hero: {
    title: string;
  };
  story: {
    title: string;
    paragraphs: string[];
  };
  mission: {
    title: string;
    content: string;
  };
  whatWeDo: {
    title: string;
    services: {
      id: string;
      title: string;
      description: string;
      icon: string;
      points: string[];
    }[];
  };
}
