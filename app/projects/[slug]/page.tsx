"use client";

import { projects } from "../../data";
import { notFound } from "next/navigation";
import { use, useState } from "react";
import ImageModal from "../../components/ui/ImageModal";
import {
  ProjectHero,
  ProjectOverview,
  ProjectFeatures,
  ProjectGallery,
  ProjectSidebar,
} from "../../components/project";

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Find the project by slug
  const project = projects.find((p) => p.slug === slug);

  // If project not found, show 404
  if (!project) {
    notFound();
  }

  const handleHeroClick = () => {
    setCurrentImageIndex(0);
    setIsModalOpen(true);
  };

  const handleGalleryImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ProjectHero
          title={project.title}
          category={project.category}
          year={project.year}
          location={project.location}
          heroImage={project.heroImage}
          onImageClick={handleHeroClick}
        />
      </div>

      {/* Main Content */}
      <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8 pb-20">
        <div className="grid gap-16 lg:grid-cols-[2fr_1fr]">
          {/* Left Column - Content */}
          <div className="space-y-12">
            <ProjectOverview description={project.description} />
            <ProjectFeatures features={project.features} />
            <ProjectGallery
              images={project.images}
              projectTitle={project.title}
              onImageClick={handleGalleryImageClick}
            />
          </div>

          {/* Right Column - Sidebar */}
          <ProjectSidebar
            year={project.year}
            location={project.location}
            client={project.client}
            landArea={project.landArea}
            buildingArea={project.buildingArea}
            status={project.status}
            category={project.category}
            tags={project.tags}
          />
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal
        images={[project.heroImage, ...project.images]}
        isOpen={isModalOpen}
        currentIndex={currentImageIndex}
        onClose={() => setIsModalOpen(false)}
        onNavigate={(index) => setCurrentImageIndex(index)}
      />
    </div>
  );
}
