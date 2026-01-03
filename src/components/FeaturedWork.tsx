import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import type { StaticImageData } from "next/image";
import { Play } from "lucide-react";
import projectDocumentary from "@/assets/project-documentary.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";
import projectMusicvideo from "@/assets/project-musicvideo.jpg";
import projectShortfilm from "@/assets/project-shortfilm.jpg";
import heroVideomakerOne from "@/assets/hero-videomaker-1.jpg";
import heroVideomakerTwo from "@/assets/hero-videomaker-2.jpg";
import heroVideomakerThree from "@/assets/hero-videomaker-3.jpg";

const easeCinema = [0.25, 0.1, 0.25, 1] as const;

const categories = [
  { key: "filmes", label: "Filmes", total: 12 },
  { key: "videoclipes", label: "Videoclipes", total: 24 },
  { key: "corporativo", label: "Corporativo", total: 18 },
  { key: "documentarios", label: "Documentários", total: 8 },
] as const;

type CategoryKey = (typeof categories)[number]["key"];

type Project = {
  id: string;
  title: string;
  category: string;
  year: string;
  image: StaticImageData;
};

const projectsByCategory: Record<CategoryKey, Project[]> = {
  filmes: [
    {
      id: "aurora",
      title: "Aurora",
      category: "Longa-metragem",
      year: "2024",
      image: heroVideomakerOne,
    },
    {
      id: "raizes",
      title: "Raízes",
      category: "Drama histórico",
      year: "2023",
      image: projectDocumentary,
    },
    {
      id: "manifesto",
      title: "Manifesto",
      category: "Thriller urbano",
      year: "2023",
      image: projectCommercial,
    },
  ],
  videoclipes: [
    {
      id: "luz-neon",
      title: "Luz Néon",
      category: "Videoclipe",
      year: "2024",
      image: projectMusicvideo,
    },
    {
      id: "sintonia",
      title: "Sintonia",
      category: "Live session",
      year: "2023",
      image: heroVideomakerTwo,
    },
    {
      id: "mare-viva",
      title: "Maré Viva",
      category: "Performance",
      year: "2022",
      image: projectShortfilm,
    },
  ],
  corporativo: [
    {
      id: "atlas",
      title: "Atlas",
      category: "Institucional",
      year: "2024",
      image: projectCommercial,
    },
    {
      id: "nexus",
      title: "Nexus",
      category: "Brand film",
      year: "2023",
      image: heroVideomakerThree,
    },
    {
      id: "processos",
      title: "Processos",
      category: "Indústria criativa",
      year: "2022",
      image: projectDocumentary,
    },
  ],
  documentarios: [
    {
      id: "alem-do-horizonte",
      title: "Além do Horizonte",
      category: "Documentário",
      year: "2024",
      image: projectDocumentary,
    },
    {
      id: "vozes-do-sertao",
      title: "Vozes do Sertão",
      category: "Série documental",
      year: "2023",
      image: heroVideomakerTwo,
    },
    {
      id: "tempo-e-memoria",
      title: "Tempo e Memória",
      category: "Observacional",
      year: "2022",
      image: projectShortfilm,
    },
  ],
};

const revealContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.16, delayChildren: 0.1 },
  },
};

const revealItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeCinema } },
};

export function FeaturedWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("filmes");
  const activeProjects = projectsByCategory[activeCategory];
  const [featuredProject, ...secondaryProjects] = activeProjects;

  return (
    <section ref={ref} className="relative py-32 md:py-48 bg-background overflow-hidden film-grain">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_50%_at_20%_0%,rgba(150,120,60,0.16),transparent_65%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_80%_20%,rgba(40,120,120,0.12),transparent_70%)]" />
      <div className="container">
        <motion.div
          variants={revealContainer}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="mb-16 md:mb-20"
        >
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <motion.h2
              variants={revealItem}
              className="text-display text-4xl md:text-6xl lg:text-7xl text-foreground max-w-2xl"
            >
              Trabalhos <span className="text-primary italic">Selecionados</span>
            </motion.h2>
            <motion.div
              variants={revealItem}
              className="flex flex-wrap items-center gap-3 lg:justify-end"
              role="tablist"
              aria-label="Categorias de projetos"
            >
              {categories.map((category) => {
                const isActive = activeCategory === category.key;

                return (
                  <button
                    key={category.key}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveCategory(category.key)}
                    className={`relative px-4 py-2 text-[0.6rem] uppercase tracking-[0.32em] border backdrop-blur-sm transition-all duration-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/70 ${
                      isActive
                        ? "text-primary font-semibold border-primary/60 bg-cinema-surface-elevated/70 shadow-[0_0_20px_rgba(255,200,120,0.18)]"
                        : "text-muted-foreground border-border/60 bg-cinema-surface/60 hover:text-foreground hover:border-primary/40"
                    }`}
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      <span>{category.label}</span>
                      <span className={`text-[0.55rem] ${isActive ? "text-primary" : "text-muted-foreground"}`}>
                        {String(category.total).padStart(2, "0")}
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      className={`pointer-events-none absolute bottom-0 left-0 h-px w-full origin-left bg-primary transition-all duration-400 ${
                        isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                      }`}
                    />
                  </button>
                );
              })}
            </motion.div>
          </div>
        </motion.div>

        <motion.div variants={revealItem} initial="hidden" animate={isInView ? "show" : "hidden"}>
          {isInView ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.45, ease: easeCinema }}
                className="grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)]"
              >
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                >
                  <FeaturedProjectCard project={featuredProject} isInView={isInView} />
                </motion.div>
                <div className="flex flex-col gap-6">
                  {secondaryProjects.slice(0, 2).map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.2 + index * 0.1 }}
                    >
                      <SecondaryProjectCard project={project} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          ) : null}
        </motion.div>

        <motion.div
          variants={revealItem}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="mt-12 md:mt-16 flex justify-center"
        >
          <a
            href="/portfolio"
            className="group inline-flex items-center justify-center border border-primary/60 px-8 py-3 text-[0.7rem] uppercase tracking-[0.32em] text-primary/90 transition-all duration-400 hover:bg-primary hover:text-background hover:shadow-[0_0_25px_rgba(255,200,120,0.2)]"
          >
            <span className="transition-transform duration-300 group-hover:-translate-y-0.5">
              Ver todos os projetos
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function FeaturedProjectCard({ project, isInView }: { project: Project; isInView: boolean }) {
  return (
    <a href={`/portfolio/${project.id}`} className="group relative block overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={project.image.src}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-cinematic)" }} />
        <div className="absolute inset-0 bg-background/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-primary/60 bg-background/30 backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(255,200,120,0.35)]">
            <Play className="w-6 h-6 text-primary ml-1 transition-transform duration-500 group-hover:scale-110 group-hover:animate-pulse-soft" />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute bottom-0 left-0 right-0 p-6"
        >
          <p className="text-[0.65rem] uppercase tracking-[0.32em] text-muted-foreground">
            {project.category} - {project.year}
          </p>
          <h3 className="text-display text-3xl md:text-4xl text-foreground mt-2">
            {project.title}
          </h3>
        </motion.div>

        <div className="absolute inset-0 border border-transparent transition-colors duration-500 group-hover:border-primary/30" />
      </div>
    </a>
  );
}

function SecondaryProjectCard({ project }: { project: Project }) {
  return (
    <a href={`/portfolio/${project.id}`} className="block group relative overflow-hidden">
      <div className="relative aspect-[16/9] bg-muted overflow-hidden">
        <img
          src={project.image.src}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="w-12 h-12 rounded-full border border-primary/50 flex items-center justify-center bg-background/25 backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(255,200,120,0.3)]">
            <Play className="w-5 h-5 text-primary ml-0.5 transition-transform duration-500 group-hover:scale-110 group-hover:animate-pulse-soft" />
          </div>
        </div>

        <div className="absolute inset-0 border border-transparent group-hover:border-primary/30 transition-colors duration-500" />

        <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
          <h3 className="font-display text-xl text-foreground">{project.title}</h3>
          <p className="text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground mt-2">
            {project.category}
          </p>
        </div>
      </div>
    </a>
  );
}
