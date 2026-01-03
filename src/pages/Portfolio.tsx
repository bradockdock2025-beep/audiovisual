import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import type { StaticImageData } from "next/image";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import projectDocumentary from "@/assets/project-documentary.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";
import projectMusicvideo from "@/assets/project-musicvideo.jpg";
import projectShortfilm from "@/assets/project-shortfilm.jpg";
import heroVideomakerOne from "@/assets/hero-videomaker-1.jpg";
import heroVideomakerTwo from "@/assets/hero-videomaker-2.jpg";
import heroVideomakerThree from "@/assets/hero-videomaker-3.jpg";

const filters = [
  { key: "TODOS", label: "TODOS" },
  { key: "DOCUMENTÁRIO", label: "DOCUMENTÁRIO" },
  { key: "PUBLICIDADE", label: "PUBLICIDADE" },
  { key: "VIDEOCLIPE", label: "VIDEOCLIPE" },
  { key: "CURTA-METRAGEM", label: "CURTA-METRAGEM" },
  { key: "CURSOS", label: "CURSOS" },
  { key: "INSTITUCIONAL", label: "INSTITUCIONAL" },
] as const;

type FilterKey = (typeof filters)[number]["key"];
type CategoryKey = Exclude<FilterKey, "TODOS">;

type Project = {
  id: string;
  title: string;
  category: string;
  year: string;
  image: StaticImageData;
  categoryKey: CategoryKey;
};

const projects: Project[] = [
  {
    id: "alem-do-horizonte",
    title: "Além do Horizonte",
    category: "Documentário",
    year: "2024",
    image: projectDocumentary,
    categoryKey: "DOCUMENTÁRIO",
  },
  {
    id: "marca-premium",
    title: "Marca Premium",
    category: "Publicidade",
    year: "2024",
    image: projectCommercial,
    categoryKey: "PUBLICIDADE",
  },
  {
    id: "notas-de-jazz",
    title: "Notas de Jazz",
    category: "Videoclipe",
    year: "2023",
    image: projectMusicvideo,
    categoryKey: "VIDEOCLIPE",
  },
  {
    id: "urban-stories",
    title: "Urban Stories",
    category: "Curta-metragem",
    year: "2023",
    image: projectShortfilm,
    categoryKey: "CURTA-METRAGEM",
  },
  {
    id: "momento-unico",
    title: "Momento Único",
    category: "Institucional",
    year: "2023",
    image: heroVideomakerThree,
    categoryKey: "INSTITUCIONAL",
  },
  {
    id: "imersao-cinema",
    title: "Imersão Cinematográfica",
    category: "Cursos",
    year: "2023",
    image: heroVideomakerTwo,
    categoryKey: "CURSOS",
  },
  {
    id: "aurora",
    title: "Aurora",
    category: "Curta-metragem",
    year: "2022",
    image: heroVideomakerOne,
    categoryKey: "CURTA-METRAGEM",
  },
  {
    id: "laboratorio-de-luz",
    title: "Laboratório de Luz",
    category: "Cursos",
    year: "2022",
    image: projectDocumentary,
    categoryKey: "CURSOS",
  },
  {
    id: "raizes",
    title: "Raízes",
    category: "Documentário",
    year: "2022",
    image: heroVideomakerTwo,
    categoryKey: "DOCUMENTÁRIO",
  },
  {
    id: "manifesto",
    title: "Manifesto",
    category: "Publicidade",
    year: "2021",
    image: projectCommercial,
    categoryKey: "PUBLICIDADE",
  },
];

const sortedProjects = [...projects].sort((a, b) => Number(b.year) - Number(a.year));

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("TODOS");
  const visibleProjects =
    activeFilter === "TODOS"
      ? sortedProjects
      : sortedProjects.filter((project) => project.categoryKey === activeFilter);

  return (
    <main className="bg-background min-h-screen">
      <Navigation />

      <section className="pt-32 pb-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="text-editorial text-primary mb-4">Portfólio</p>
            <h1 className="text-display text-5xl md:text-7xl lg:text-8xl text-foreground">
              Trabalhos
              <br />
              <span className="text-primary italic">Selecionados</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-3 mt-12"
            role="tablist"
            aria-label="Filtros do portfólio"
          >
            {filters.map((filter) => {
              const isActive = activeFilter === filter.key;

              return (
                <button
                  key={filter.key}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`text-editorial text-xs px-4 py-2 border transition-all duration-300 ${
                    isActive
                      ? "border-primary text-primary"
                      : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {visibleProjects.map((project, index) => (
                <motion.a
                  key={project.id}
                  href={`/portfolio/${project.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group block"
                >
                  <div className="aspect-video relative overflow-hidden bg-muted">
                    <img
                      src={project.image.src}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-background/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="mt-4 flex items-start justify-between">
                    <div>
                      <h3 className="font-display text-2xl text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">{project.category}</p>
                    </div>
                    <span className="text-editorial text-xs text-muted-foreground">{project.year}</span>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default PortfolioPage;
