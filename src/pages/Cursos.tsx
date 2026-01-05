import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import {
  Award,
  Camera,
  Clapperboard,
  Clock,
  GraduationCap,
  Leaf,
  Sparkles,
  Users,
} from "lucide-react";
import heroImage3 from "@/assets/hero-videomaker-3.jpg";
import courseImageEssencial from "@/assets/cameraman-1.jpg";
import courseImageFoto from "@/assets/cameraman-2.jpg";
import courseImageColor from "@/assets/cameraman-3.jpg";

const courses = [
  {
    id: 1,
    title: "Cinematografia Essencial",
    subtitle: "Fundamentos de imagem",
    duration: "12 semanas",
    students: "Máx. 15",
    level: "Iniciante",
    format: "Presencial + laboratório",
    badge: "Mais procurado",
    description:
      "Domine luz, composição e movimento para criar cenas com intenção cinematográfica.",
    highlights: [
      "Prática de luz com sets reais",
      "Exercícios guiados de composição",
      "Projeto final com direção de fotografia",
    ],
    image: courseImageEssencial,
    imageAlt: "Operador de camera filmando em area externa",
    glow:
      "radial-gradient(120% 120% at 0% 0%, rgba(255,200,120,0.18), transparent 70%)",
  },
  {
    id: 2,
    title: "Direção de Fotografia",
    subtitle: "Linguagem visual avançada",
    duration: "16 semanas",
    students: "Máx. 12",
    level: "Intermédio",
    format: "Presencial + set avançado",
    badge: "Trilha avançada",
    description:
      "Eleve a linguagem visual com método profissional e assinatura autoral.",
    highlights: [
      "Desenvolvimento de look e moodboard",
      "Iluminação avançada de set",
      "Campanha curta como projeto final",
    ],
    image: courseImageFoto,
    imageAlt: "Operador de camera com equipamento de transmissao",
    glow:
      "radial-gradient(120% 120% at 100% 0%, rgba(60,150,150,0.22), transparent 70%)",
  },
  {
    id: 3,
    title: "Masterclass: Color Grading",
    subtitle: "DaVinci Resolve intensivo",
    duration: "4 semanas",
    students: "Máx. 10",
    level: "Avançado",
    format: "Laboratório + estudo orientado",
    badge: "Intensivo",
    description:
      "Finalização com consistência, precisão técnica e assinatura de cor.",
    highlights: [
      "Color management e ACES",
      "Looks cinematográficos replicáveis",
      "Entrega e versões com QC",
    ],
    image: courseImageColor,
    imageAlt: "Cameraman em campo de futebol",
    glow:
      "radial-gradient(120% 120% at 0% 100%, rgba(255,180,120,0.2), transparent 70%)",
  },
];

const contests = [
  {
    id: 1,
    title: "Preparação para concursos",
    subtitle: "Editais e critérios",
    duration: "8 semanas",
    students: "Máx. 20",
    level: "Todos os níveis",
    format: "Mentoria + simulados",
    badge: "Foco em aprovação",
    description:
      "Estratégia de edital, organização do portfólio e simulados para ganhar segurança técnica.",
    highlights: [
      "Checklist técnico e documental",
      "Simulados com correção orientada",
      "Portfólio com narrativa consistente",
    ],
    image: courseImageEssencial,
    imageAlt: "Operador de camera filmando em area externa",
    glow:
      "radial-gradient(120% 120% at 0% 0%, rgba(255,200,120,0.18), transparent 70%)",
  },
  {
    id: 2,
    title: "Prova prática e portfólio",
    subtitle: "Execução com linguagem",
    duration: "6 semanas",
    students: "Máx. 15",
    level: "Intermediário",
    format: "Laboratório + revisão",
    badge: "Nova turma",
    description:
      "Captação, direção e finalização voltadas para avaliação técnica e narrativa.",
    highlights: [
      "Briefing realista de banca",
      "Direção de fotografia aplicada",
      "Entrega com padrão técnico",
    ],
    image: courseImageFoto,
    imageAlt: "Operador de camera com equipamento de transmissao",
    glow:
      "radial-gradient(120% 120% at 100% 0%, rgba(60,150,150,0.22), transparent 70%)",
  },
  {
    id: 3,
    title: "Narrativa para banca",
    subtitle: "Projeto guiado",
    duration: "10 semanas",
    students: "Máx. 12",
    level: "Avançado",
    format: "Mentoria + apresentação",
    badge: "Intensivo",
    description:
      "Construção de assinatura visual com foco em consistência, impacto e defesa do projeto.",
    highlights: [
      "Pitch e argumentação visual",
      "Sequência com ritmo e continuidade",
      "Revisões orientadas por meta",
    ],
    image: courseImageColor,
    imageAlt: "Cameraman em campo de futebol",
    glow:
      "radial-gradient(120% 120% at 0% 100%, rgba(255,180,120,0.2), transparent 70%)",
  },
];

const courseStats = [
  { value: "80%", label: "Prática em estúdio" },
  { value: "15", label: "Máx. por turma" },
  { value: "1:1", label: "Feedback dedicado" },
];

const learningPillars = [
  {
    icon: Sparkles,
    title: "Direção criativa",
    description: "Construção de linguagem autoral com referências guiadas.",
  },
  {
    icon: Clapperboard,
    title: "Laboratório de set",
    description: "Exercícios práticos com ritmo de produção real.",
  },
  {
    icon: Camera,
    title: "Técnica aplicada",
    description: "Luz, câmera e composição para decisões consistentes.",
  },
  {
    icon: GraduationCap,
    title: "Mentoria próxima",
    description: "Turmas reduzidas e feedback personalizado.",
  },
];

const journeySteps = [
  {
    step: "01",
    title: "Diagnóstico de olhar",
    description: "Mapeamos referências, objetivos e nível de base.",
  },
  {
    step: "02",
    title: "Laboratório técnico",
    description: "Exposição, luz e movimento com exercícios orientados.",
  },
  {
    step: "03",
    title: "Direção narrativa",
    description: "Ritmo, continuidade e escolhas de fotografia.",
  },
  {
    step: "04",
    title: "Entrega profissional",
    description: "Finalização, apresentação e portfólio.",
  },
];

const sustainability = [
  {
    icon: Leaf,
    title: "Evolução sustentável",
    description: "Currículo revisto a cada turma para acompanhar o mercado.",
  },
  {
    icon: GraduationCap,
    title: "Mentoria contínua",
    description: "Feedback pós-aula e revisões estratégicas.",
  },
  {
    icon: Sparkles,
    title: "Biblioteca viva",
    description: "Templates, LUTs e guias para apoiar o aprendizado.",
  },
];

const easeCinema = [0.25, 0.1, 0.25, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeCinema } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const CursosPage = () => {
  return (
    <main className="bg-background min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative h-[60vh] flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage3.src})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

        <div className="container relative pb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-editorial text-primary mb-4">Formação</p>
            <h1 className="text-display text-5xl md:text-7xl lg:text-8xl text-foreground">
              Cursos &
              <br />
              <span className="text-primary italic">Workshops</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(50%_40%_at_10%_10%,rgba(255,200,120,0.12),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(45%_35%_at_85%_0%,rgba(30,120,120,0.14),transparent_70%)]" />
        <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="container relative">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
            className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]"
          >
            <div className="space-y-6">
              <motion.p variants={fadeUp} className="text-editorial text-primary">
                Formação cinematográfica
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="text-display text-4xl md:text-5xl lg:text-6xl text-foreground"
              >
                Uma trilha visual para evoluir do fundamento ao set profissional.
                <span className="block text-primary italic">Aprender, praticar, refinar.</span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl"
              >
                Formação para criadores e profissionais que querem dominar narrativa, técnica e
                estética da imagem em movimento. Do nível iniciante ao avançado, com prática
                guiada, repertório e acompanhamento especializado.
              </motion.p>
              <motion.div variants={fadeUp} className="grid gap-6 sm:grid-cols-3">
                {courseStats.map((stat) => (
                  <div key={stat.label} className="border border-border/60 bg-muted/40 px-5 py-4">
                    <p className="font-display text-3xl text-foreground">{stat.value}</p>
                    <p className="text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground mt-2">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div variants={stagger} className="grid gap-4 sm:grid-cols-2">
              {learningPillars.map((pillar) => (
                <motion.div
                  key={pillar.title}
                  variants={fadeUp}
                  className="group relative overflow-hidden border border-border/60 bg-card/70 p-6 transition-all duration-700 hover:border-primary/40 hover:shadow-[var(--shadow-card)]"
                >
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 bg-[radial-gradient(80%_80%_at_0%_0%,rgba(255,200,120,0.18),transparent_70%)]" />
                  <div className="relative space-y-3">
                    <pillar.icon className="h-5 w-5 text-primary transition-transform duration-500 group-hover:-translate-y-1" />
                    <h3 className="font-display text-xl text-foreground">{pillar.title}</h3>
                    <p className="text-sm text-muted-foreground font-light">{pillar.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="relative py-20 md:py-28 bg-muted/20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(55%_40%_at_85%_10%,rgba(30,120,120,0.16),transparent_70%)]" />
        <div className="absolute inset-0 bg-[image:var(--overlay-panel)]" />
        <div className="container relative">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
            className="max-w-3xl space-y-6"
          >
            <motion.p variants={fadeUp} className="text-editorial text-primary">
              Como funciona a formação
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-display text-4xl md:text-5xl lg:text-6xl text-foreground"
            >
              Trilha de evolução visual <span className="text-primary italic">com método e ritmo.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-muted-foreground font-light">
              Cada etapa reforça a anterior, garantindo evolução consistente e sustentável. A prática
              é guiada, a análise é profunda e o resultado é um portfólio com assinatura.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
            className="mt-12 grid gap-6 lg:grid-cols-4"
          >
            {journeySteps.map((step) => (
              <motion.div
                key={step.step}
                variants={fadeUp}
                className="group relative border border-border/60 bg-background/70 p-6 transition-all duration-600 hover:border-primary/40 hover:-translate-y-1"
              >
                <span className="font-display text-4xl text-primary/80">{step.step}</span>
                <h3 className="mt-4 font-display text-xl text-foreground">{step.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground font-light">{step.description}</p>
                <div className="mt-6 h-px w-10 bg-primary/40 transition-all duration-500 group-hover:w-16" />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
            className="mt-12 grid gap-6 lg:grid-cols-3"
          >
            {sustainability.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="group border border-border/60 bg-card/60 p-6 transition-all duration-700 hover:border-primary/40"
              >
                <div className="flex items-center gap-3">
                  <item.icon className="h-5 w-5 text-primary transition-transform duration-500 group-hover:-translate-y-1" />
                  <p className="text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
                    Melhoria contínua
                  </p>
                </div>
                <h4 className="mt-4 font-display text-lg text-foreground">{item.title}</h4>
                <p className="mt-3 text-sm text-muted-foreground font-light">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_10%_20%,rgba(255,200,120,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(50%_30%_at_90%_10%,rgba(30,120,120,0.12),transparent_70%)]" />
        <div className="container relative">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
            className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-12"
          >
            <div className="space-y-4">
              <motion.p variants={fadeUp} className="text-editorial text-primary">
                Cursos com profundidade
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="text-display text-4xl md:text-5xl lg:text-6xl text-foreground"
              >
                Detalhe visual que <span className="text-primary italic">vira método.</span>
              </motion.h2>
            </div>
            <motion.p
              variants={fadeUp}
              className="text-lg text-muted-foreground font-light max-w-xl"
            >
              Cada curso apresenta uma visão direta do essencial: imagem, pontos-chave e detalhes
              rápidos para decidir com clareza.
            </motion.p>
          </motion.div>

          <div className="space-y-10">
            {courses.map((course, index) => {
              const meta = [
                { icon: Clock, label: "Duração", value: course.duration },
                { icon: Users, label: "Turma", value: course.students },
                { icon: Award, label: "Nível", value: course.level },
                { icon: Camera, label: "Formato", value: course.format },
              ];

              return (
                <motion.article
                  key={course.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: easeCinema }}
                  viewport={{ once: true, margin: "-120px" }}
                  className="group relative overflow-hidden border border-border/60 bg-card/40 p-8 md:p-12 transition-all duration-700 hover:border-primary/50 hover:shadow-[var(--shadow-card-strong)]"
                >
                  <div
                    className="pointer-events-none absolute inset-0 opacity-80"
                    style={{ backgroundImage: course.glow }}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[image:var(--overlay-card)]" />

                  <div className="relative grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
                    <div className="relative aspect-[4/3] overflow-hidden border border-border/60 bg-muted/40 lg:aspect-auto lg:min-h-[320px]">
                      <Image
                        src={course.image}
                        alt={course.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 40vw, 90vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-[image:var(--overlay-image)]" />
                      <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2">
                        <span className="text-[0.6rem] uppercase tracking-[0.32em] text-foreground/80 border border-border/60 bg-background/40 px-3 py-1">
                          {course.subtitle}
                        </span>
                        {course.badge ? (
                          <span className="text-[0.6rem] uppercase tracking-[0.32em] border border-primary/40 px-3 py-1 text-primary/90 bg-background/40">
                            {course.badge}
                          </span>
                        ) : null}
                      </div>
                    </div>

                    <div className="space-y-6">
                      <h3 className="font-display text-3xl md:text-4xl text-foreground group-hover:text-primary transition-colors">
                        {course.title}
                      </h3>
                      <p className="text-muted-foreground font-light text-base md:text-lg">
                        {course.description}
                      </p>

                      <div className="grid gap-4 sm:grid-cols-2">
                        {meta.map((item) => (
                          <div key={item.label} className="border border-border/60 bg-muted/30 px-4 py-4">
                            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                              <item.icon className="h-4 w-4 text-primary" />
                              {item.label}
                            </div>
                            <p className="mt-3 text-sm text-foreground">{item.value}</p>
                          </div>
                        ))}
                      </div>

                      <div className="space-y-3">
                        <p className="text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
                          Destaques
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground font-light">
                          {course.highlights.map((highlight) => (
                            <li key={highlight} className="flex items-start gap-2">
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/60" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link
                        href="/contato"
                        className="group inline-flex items-center justify-center border border-primary/50 px-6 py-3 text-[0.7rem] uppercase tracking-[0.32em] text-primary/90 transition-all duration-400 hover:bg-primary hover:text-background"
                      >
                        <span className="transition-transform duration-300 group-hover:-translate-y-0.5">
                          Saber mais
                        </span>
                      </Link>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32 overflow-hidden bg-muted/10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_90%_20%,rgba(255,200,120,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(50%_35%_at_15%_80%,rgba(30,120,120,0.12),transparent_70%)]" />
        <div className="container relative">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
            className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between mb-12"
          >
            <div className="space-y-4">
              <motion.p variants={fadeUp} className="text-editorial text-primary">
                Para concursos
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="text-display text-4xl md:text-5xl lg:text-6xl text-foreground"
              >
                Concursos com profundidade
                <span className="block text-primary italic">Detalhe visual que vira método.</span>
              </motion.h2>
            </div>
            <motion.p
              variants={fadeUp}
              className="text-lg text-muted-foreground font-light max-w-xl"
            >
              Preparação estruturada para provas, banca e portfólio com prática orientada e feedback
              detalhado.
            </motion.p>
          </motion.div>

          <div className="space-y-10">
            {contests.map((contest, index) => {
              const meta = [
                { icon: Clock, label: "Duração", value: contest.duration },
                { icon: Users, label: "Turma", value: contest.students },
                { icon: Award, label: "Nível", value: contest.level },
                { icon: Camera, label: "Formato", value: contest.format },
              ];

              return (
                <motion.article
                  key={contest.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: easeCinema }}
                  viewport={{ once: true, margin: "-120px" }}
                  className="group relative overflow-hidden border border-border/60 bg-card/40 p-8 md:p-12 transition-all duration-700 hover:border-primary/50 hover:shadow-[var(--shadow-card-strong)]"
                >
                  <div
                    className="pointer-events-none absolute inset-0 opacity-80"
                    style={{ backgroundImage: contest.glow }}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[image:var(--overlay-card)]" />

                  <div className="relative grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
                    <div className="relative aspect-[4/3] overflow-hidden border border-border/60 bg-muted/40 lg:aspect-auto lg:min-h-[320px]">
                      <Image
                        src={contest.image}
                        alt={contest.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 40vw, 90vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-[image:var(--overlay-image)]" />
                      <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2">
                        <span className="text-[0.6rem] uppercase tracking-[0.32em] text-foreground/80 border border-border/60 bg-background/40 px-3 py-1">
                          {contest.subtitle}
                        </span>
                        {contest.badge ? (
                          <span className="text-[0.6rem] uppercase tracking-[0.32em] border border-primary/40 px-3 py-1 text-primary/90 bg-background/40">
                            {contest.badge}
                          </span>
                        ) : null}
                      </div>
                    </div>

                    <div className="space-y-6">
                      <h3 className="font-display text-3xl md:text-4xl text-foreground group-hover:text-primary transition-colors">
                        {contest.title}
                      </h3>
                      <p className="text-muted-foreground font-light text-base md:text-lg">
                        {contest.description}
                      </p>

                      <div className="grid gap-4 sm:grid-cols-2">
                        {meta.map((item) => (
                          <div key={item.label} className="border border-border/60 bg-muted/30 px-4 py-4">
                            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                              <item.icon className="h-4 w-4 text-primary" />
                              {item.label}
                            </div>
                            <p className="mt-3 text-sm text-foreground">{item.value}</p>
                          </div>
                        ))}
                      </div>

                      <div className="space-y-3">
                        <p className="text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
                          Destaques
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground font-light">
                          {contest.highlights.map((highlight) => (
                            <li key={highlight} className="flex items-start gap-2">
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/60" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link
                        href="/contato"
                        className="group inline-flex items-center justify-center border border-primary/50 px-6 py-3 text-[0.7rem] uppercase tracking-[0.32em] text-primary/90 transition-all duration-400 hover:bg-primary hover:text-background"
                      >
                        <span className="transition-transform duration-300 group-hover:-translate-y-0.5">
                          Saber mais
                        </span>
                      </Link>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
        <div className="absolute -top-24 right-[-10%] h-64 w-64 rounded-full bg-primary/10 blur-3xl animate-pulse-soft" />
        <div className="absolute -bottom-24 left-[-10%] h-64 w-64 rounded-full bg-accent/10 blur-3xl animate-pulse-soft" />
        <div className="container relative">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
            className="max-w-3xl"
          >
            <motion.p variants={fadeUp} className="text-editorial text-primary mb-4">
              Comece a aprender
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-display text-4xl md:text-5xl lg:text-6xl text-foreground"
            >
              Escolha o seu curso
              <br />
              <span className="text-primary italic">e evolua com orientação</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground/90 text-xl md:text-2xl mt-6">
              Precisa de ajuda para escolher? Fale connosco e indicamos a formação certa para o seu
              nível.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap gap-3 text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground"
            >
              <span className="border border-border/60 px-4 py-2">Diagnóstico gratuito</span>
              <span className="border border-border/60 px-4 py-2">Plano personalizado</span>
              <span className="border border-border/60 px-4 py-2">Calendário de turmas</span>
            </motion.div>
            <motion.div variants={fadeUp}>
              <Link
                href="/contato"
                className="group inline-flex items-center justify-center border border-primary/60 px-8 py-3 text-[0.7rem] uppercase tracking-[0.32em] text-primary/90 transition-all duration-400 hover:bg-primary hover:text-background hover:shadow-[var(--shadow-glow)] mt-10"
              >
                <span className="transition-transform duration-300 group-hover:-translate-y-0.5">
                  Fale connosco
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CursosPage;
