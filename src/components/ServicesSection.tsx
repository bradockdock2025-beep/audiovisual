import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Film, Clapperboard, Video, GraduationCap, Camera, Play } from "lucide-react";

const services = [
  {
    icon: Film,
    title: "Cinema & Ficção",
    description: "Curtas e longas-metragens com linguagem cinematográfica autoral.",
  },
  {
    icon: Clapperboard,
    title: "Publicidade",
    description: "Comerciais e filmes institucionais que elevam marcas.",
  },
  {
    icon: Video,
    title: "Documentário",
    description: "Histórias reais contadas com sensibilidade e profundidade.",
  },
  {
    icon: Camera,
    title: "Videoclipes",
    description: "Narrativas visuais únicas para artistas e músicos.",
  },
  {
    icon: GraduationCap,
    title: "Cursos",
    description: "Formação audiovisual para quem deseja dominar narrativa, técnica e estética.",
  },
  {
    icon: Play,
    title: "Conteúdo Digital",
    description: "Vídeos otimizados para plataformas digitais.",
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 md:py-48 bg-muted/30">
      {/* Decorative Line */}
      <div className="absolute top-0 left-1/2 w-px h-32 bg-gradient-to-b from-transparent to-primary/30" />
      
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 md:mb-32"
        >
          <p className="text-editorial text-primary mb-4">O Que Fazemos</p>
          <h2 className="text-display text-4xl md:text-6xl lg:text-7xl text-foreground">
            Serviços
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-background p-8 md:p-12 hover:bg-muted/50 transition-colors duration-500"
            >
              <service.icon className="w-8 h-8 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
              
              <h3 className="font-display text-2xl md:text-3xl text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground font-light text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Hover line */}
              <div className="mt-6 w-0 h-px bg-primary group-hover:w-12 transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16 md:mt-24"
        >
          <Link
            href="/servicos"
            className="inline-flex items-center gap-4 text-editorial text-xs border border-primary/50 px-8 py-4 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-400"
          >
            Explorar todos os serviços
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
