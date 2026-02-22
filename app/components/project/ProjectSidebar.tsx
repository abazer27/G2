"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Building,
  Ruler,
  Tag,
  CircleDot,
  User,
} from "lucide-react";

interface ProjectSidebarProps {
  year: number;
  location: string;
  client: string;
  landArea: string;
  buildingArea: string;
  status: string;
  category: string;
  tags: string[];
}

interface DetailRowProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  isLast?: boolean;
}

function DetailRow({ icon, label, value, isLast = false }: DetailRowProps) {
  return (
    <div
      className={`flex items-center justify-between py-3 ${
        !isLast ? "border-b border-neutral-100" : ""
      }`}
    >
      <div className="flex items-center gap-2 text-neutral-500 text-sm">
        {icon}
        {label}
      </div>
      <span className="font-medium text-neutral-900 text-sm">{value}</span>
    </div>
  );
}

export default function ProjectSidebar({
  year,
  location,
  client,
  landArea,
  buildingArea,
  status,
  category,
  tags,
}: ProjectSidebarProps) {
  const iconClass = "h-4 w-4 opacity-70";

  const details = [
    { icon: <Calendar className={iconClass} />, label: "Year", value: String(year) },
    { icon: <MapPin className={iconClass} />, label: "Location", value: location },
    { icon: <User className={iconClass} />, label: "Client", value: client },
    { icon: <Ruler className={iconClass} />, label: "Land Area", value: landArea },
    { icon: <Ruler className={iconClass} />, label: "Building Area", value: buildingArea },
    {
      icon: <CircleDot className={iconClass} />,
      label: "Status",
      value: status.replace("-", " ").replace(/^\w/, (c) => c.toUpperCase()),
    },
    { icon: <Building className={iconClass} />, label: "Category", value: category },
  ];

  return (
    <motion.aside
      className="sticky top-24"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
        {/* Section title */}
        <h3 className="mb-6 text-xs font-medium uppercase tracking-widest text-neutral-500">
          Project Details
        </h3>

        {/* Detail rows */}
        <div>
          {details.map((detail, index) => (
            <DetailRow
              key={detail.label}
              icon={detail.icon}
              label={detail.label}
              value={detail.value}
              isLast={index === details.length - 1}
            />
          ))}
        </div>

        {/* Tags section */}
        {tags && tags.length > 0 && (
          <div className="mt-8">
            <div className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-neutral-500">
              <Tag className="h-3.5 w-3.5 opacity-70" />
              Tags
            </div>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <motion.span
                  key={index}
                  className="cursor-default rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-800 transition-colors duration-200 hover:bg-neutral-900 hover:text-white"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.aside>
  );
}
