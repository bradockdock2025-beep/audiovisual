import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Award, Clapperboard, Film, Users } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import aboutStudio from "@/assets/about-studio.jpg";
import heroImage2 from "@/assets/hero-videomaker-2.jpg";

const metrics = [
  {
    icon: Film,
    value: "10+",
    label: "Anos criando narrativas audiovisuais",
  },
  {
    icon: Clapperboard,
    value: "200+",
    label: "Projetos em cinema, publicidade e branded content",
  },
  {
    icon: Users,
    value: "50+",
    label: "Clientes satisfeitos e relações duradouras",
  },
  {
    icon: Award,
    value: "15",
    label: "Prémios conquistados em festivais e seleções",
  },
];

const values = [
  {
    title: "Autenticidade",
    desc: "Cada projeto nasce de uma escuta profunda do cliente e do contexto.",
  },
  {
    title: "Excelência",
    desc: "Do roteiro à pós-produção, nada é deixado ao acaso.",
  },
  {
    title: "Colaboração",
    desc: "Trabalhamos lado a lado com marcas, agências e artistas.",
  },
];

const SobrePage = () => {
  return (
    <main className="bg-background min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage2.src})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 vignette" />
        
        <div className="container relative pb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-editorial text-primary mb-4">Sobre o Estúdio Visual</p>
            <h1 className="text-display text-5xl md:text-7xl lg:text-8xl text-foreground">
              Sobre o Estúdio Visual
              <br />
              <span className="text-primary italic">uma visão cinematográfica</span>
            </h1>
            <p className="text-muted-foreground/90 text-lg md:text-xl max-w-2xl mt-6">
              Somos um estúdio audiovisual especializado em produção de vídeo, cursos de video maker e narrativas
              cinematográficas para marcas, cinema e projetos autorais.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 md:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-12"
          >
            <p className="text-editorial text-primary mb-4">Nossa história</p>
            <h2 className="text-display text-3xl md:text-4xl text-foreground">
              A origem de um estúdio audiovisual com assinatura autoral
            </h2>
          </motion.div>

          <div className="grid grid-cols-12 gap-8 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="col-span-12 lg:col-span-5"
            >
              <div className="aspect-[4/5] relative overflow-hidden sticky top-32">
                <Image
                  src={aboutStudio}
                  alt="Retrato do diretor criativo no estúdio"
                  fill
                  sizes="(min-width: 1024px) 35vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[image:var(--overlay-image-strong)]" />
                <div className="film-grain absolute inset-0" />
                <div className="absolute bottom-0 left-0 right-0 px-6 pb-6 pt-16 bg-gradient-to-t from-background/90 via-background/40 to-transparent">
                  <p className="text-[0.65rem] uppercase tracking-[0.32em] text-foreground/80">
                    Rafael Monteiro
                  </p>
                  <p className="text-[0.65rem] uppercase tracking-[0.28em] text-primary/80 mt-2">
                    Diretor Criativo & Fundador
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="col-span-12 lg:col-span-6 lg:col-start-7"
            >
              <div className="space-y-8 text-muted-foreground/90 font-light leading-relaxed md:leading-8 text-lg">
                <div className="space-y-3">
                  <h3 className="text-editorial text-primary/90">Nossa origem</h3>
                  <p>
                    O Estúdio Visual nasceu de uma paixão simples: contar histórias através da imagem.
                    Há mais de uma década, transformamos essa paixão numa missão — criar narrativas
                    que ficam na memória.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-editorial text-primary/90">Nossa abordagem</h3>
                  <p>
                    Cada filme começa com escuta e pesquisa. Da direção de fotografia ao
                    color grading, combinamos rigor técnico com sensibilidade artística.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-editorial text-primary/90">Nosso diferencial</h3>
                  <p>
                    Não seguimos fórmulas: criamos linguagens visuais personalizadas para cinema,
                    publicidade e branded content, alinhadas à essência de cada história.
                  </p>
                </div>

                <blockquote className="border-l border-primary/30 pl-6 text-foreground/90 italic">
                  “Acreditamos que toda marca tem uma história que merece ser contada com verdade.”
                </blockquote>

                <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-border/80">
                  {metrics.map((metric) => (
                    <div key={metric.label} className="flex items-start gap-4">
                      <div className="mt-1 flex h-9 w-9 items-center justify-center border border-primary/30 bg-primary/10">
                        <metric.icon aria-hidden="true" className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <span className="font-display text-4xl text-primary">{metric.value}</span>
                        <p className="text-sm text-muted-foreground mt-2">{metric.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-editorial text-primary mb-4">Filosofia</p>
            <h2 className="text-display text-4xl md:text-6xl text-foreground">
              O que nos move
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-background p-10 md:p-16 text-center"
              >
                <h3 className="font-display text-3xl text-foreground mb-4">{value.title}</h3>
                <p className="text-muted-foreground font-light">{value.desc}</p>
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
            <p className="text-editorial text-primary mb-4">Vamos contar a sua história</p>
            <h2 className="text-display text-4xl md:text-5xl lg:text-6xl text-foreground">
              Pronto para iniciar
              <br />
              <span className="text-primary italic">um novo filme?</span>
            </h2>
            <p className="text-muted-foreground/90 text-lg mt-6">
              Partilhe a sua visão connosco e desenhamos juntos a narrativa certa para a sua marca.
            </p>
            <Link
              href="/contato"
              className="group inline-flex items-center justify-center border border-primary/60 px-8 py-3 text-[0.7rem] uppercase tracking-[0.32em] text-primary/90 transition-all duration-400 hover:bg-primary hover:text-background hover:shadow-[var(--shadow-glow)] mt-10"
            >
              Fale connosco
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default SobrePage;
