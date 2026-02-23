"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface MissionItem {
  id: string;
  title: string;
  description: string;
}

const visiContent = {
  label: "Visi",
  title: "Ruang yang Bermakna",
  content:
    "Menjadi studio arsitektur yang menghadirkan ruang-ruang bermakna—fungsional, estetis, dan berkelanjutan—yang mampu memperkaya kehidupan penggunanya serta memberi kontribusi positif pada lingkungan dan budaya lokal.",
};

const misiItems: MissionItem[] = [
  {
    id: "01",
    title: "Mewujudkan Desain yang Manusiawi",
    description:
      "Menciptakan arsitektur yang memahami kebutuhan pengguna, mengutamakan kenyamanan, pengalaman ruang, dan hubungan yang harmonis antara manusia dan lingkungannya.",
  },
  {
    id: "02",
    title: "Menghadirkan Kualitas Desain yang Konsisten dan Berintegritas",
    description:
      "Menjaga proses kreatif yang terstruktur, teliti, dan jujur—dari riset, konsep, hingga implementasi—sehingga setiap proyek mencerminkan karakter Garis 2 yang bersih, tegas, dan bermakna.",
  },
  {
    id: "03",
    title: "Beradaptasi dengan Perubahan dan Tantangan Zaman",
    description:
      "Mengembangkan solusi inovatif yang relevan dengan gaya hidup modern, termasuk kebutuhan ruang fleksibel, efisiensi, dan teknologi dalam proses desain.",
  },
  {
    id: "04",
    title: "Mengutamakan Prinsip Keberlanjutan",
    description:
      "Menerapkan desain yang memperhatikan iklim tropis, memaksimalkan pencahayaan alami, sirkulasi udara, material lokal, dan strategi hemat energi untuk menciptakan ruang yang sehat dan tahan lama.",
  },
  {
    id: "05",
    title: "Membangun Kolaborasi yang Kuat dengan Klien dan Mitra",
    description:
      "Menjalin komunikasi yang terbuka dan transparan agar setiap proyek berjalan lancar serta menghasilkan hasil yang sesuai kebutuhan, karakter, dan visi klien.",
  },
  {
    id: "06",
    title: "Mendorong Pertumbuhan Studio Secara Profesional",
    description:
      "Mengembangkan kompetensi tim, meningkatkan metode kerja, dan memperkuat karakter desain studio agar selalu relevan dan memiliki nilai kompetitif dalam perkembangan dunia arsitektur.",
  },
];

export default function MissionSection() {
  return (
    <section className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - VISI */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32"
          >
            <span className="text-xs uppercase tracking-widest text-neutral-400">
              {visiContent.label}
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 mt-3">
              {visiContent.title}
            </h2>
            <div className="w-10 h-0.5 bg-black mt-4" />
            <p className="text-neutral-600 leading-relaxed mt-6 max-w-xl">
              {visiContent.content}
            </p>
          </motion.div>

          {/* Right Column - MISI Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
              {/* Header */}
              <span className="text-xs uppercase tracking-widest text-neutral-400">
                Misi
              </span>

              {/* Mission Items */}
              <div className="mt-8 space-y-0">
                {misiItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    className={`pb-6 ${
                      index !== misiItems.length - 1
                        ? "border-b border-neutral-100 mb-6"
                        : ""
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <div className="flex items-start gap-4">
                      {/* Number */}
                      <span className="text-xs font-medium text-neutral-300 mt-1 shrink-0">
                        {item.id}
                      </span>

                      {/* Content */}
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-2">
                          <ArrowRight className="w-4 h-4 text-neutral-400 shrink-0" strokeWidth={1.5} />
                          <h3 className="font-semibold text-neutral-900 leading-snug">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-neutral-600 text-sm leading-relaxed pl-6">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
