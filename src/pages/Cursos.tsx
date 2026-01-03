import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Clock, Users, Award } from "lucide-react";
import heroImage3 from "@/assets/hero-videomaker-3.jpg";

const courses = [
  {
    id: 1,
    title: "Cinematografia Essencial",
    subtitle: "Fundamentos de imagem",
    duration: "12 semanas",
    students: "Máx. 15",
    level: "Iniciante",
    description: "Aprenda técnica e estética da imagem para criar cenas com luz, composição e ritmo.",
  },
  {
    id: 2,
    title: "Direção de Fotografia",
    subtitle: "Linguagem visual avançada",
    duration: "16 semanas",
    students: "Máx. 12",
    level: "Intermédio",
    description: "Aprofunde a linguagem visual para cinema e publicidade com controle de luz e câmera.",
  },
  {
    id: 3,
    title: "Masterclass: Color Grading",
    subtitle: "DaVinci Resolve intensivo",
    duration: "4 semanas",
    students: "Máx. 10",
    level: "Avançado",
    description: "Domine o fluxo do DaVinci Resolve para finalização profissional e consistência de cor.",
  },
];

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

      {/* Intro */}
      <section className="py-16">
        <div className="container">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl text-muted-foreground font-light max-w-3xl"
          >
            Formação para criadores e profissionais que querem dominar narrativa, técnica e estética
            da imagem em movimento. Do nível iniciante ao avançado, com prática guiada e
            acompanhamento especializado.
          </motion.p>
        </div>
      </section>

      <section className="pb-12 md:pb-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="border border-border/60 px-8 py-8 md:px-12 md:py-10"
          >
            <p className="text-editorial text-primary mb-6">Como funciona a formação</p>
            <div className="grid gap-6 md:grid-cols-3 text-base md:text-lg text-muted-foreground font-light leading-relaxed">
              <p>Formação prática com exercícios orientados e feedback direto.</p>
              <p>Turmas reduzidas para acompanhamento próximo e troca real.</p>
              <p>Acompanhamento profissional com orientação de mercado.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Courses */}
      <section className="pb-24 md:pb-32">
        <div className="container">
          <div className="space-y-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border border-border p-8 md:p-12 hover:border-primary/50 transition-colors duration-500 group"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <p className="text-editorial text-xs text-primary mb-2">{course.subtitle}</p>
                    <h3 className="font-display text-3xl md:text-4xl text-foreground group-hover:text-primary transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-muted-foreground font-light text-base md:text-lg mt-3 max-w-xl">
                      {course.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-6 lg:gap-8">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 text-primary" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4 text-primary" />
                      {course.students}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Award className="w-4 h-4 text-primary" />
                      {course.level}
                    </div>
                  </div>

                  <a
                    href="/contato"
                    className="text-editorial text-xs border border-primary/50 px-6 py-3 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    Saber mais
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <p className="text-editorial text-primary mb-4">Comece a aprender</p>
            <h2 className="text-display text-4xl md:text-5xl lg:text-6xl text-foreground">
              Escolha o seu curso
              <br />
              <span className="text-primary italic">e evolua com orientação</span>
            </h2>
            <p className="text-muted-foreground/90 text-xl md:text-2xl mt-6">
              Precisa de ajuda para escolher? Fale connosco e indicamos a formação certa para o seu nível.
            </p>
            <a
              href="/contato"
              className="group inline-flex items-center justify-center border border-primary/60 px-8 py-3 text-[0.7rem] uppercase tracking-[0.32em] text-primary/90 transition-all duration-400 hover:bg-primary hover:text-background hover:shadow-[0_0_25px_rgba(255,200,120,0.2)] mt-10"
            >
              Fale connosco
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CursosPage;
