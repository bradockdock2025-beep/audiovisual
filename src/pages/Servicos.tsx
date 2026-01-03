import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ContactCTA } from "@/components/ContactCTA";
import { Film, Clapperboard, Video, GraduationCap, Camera, Monitor } from "lucide-react";

const services = [
  {
    icon: Film,
    title: "Cinema & Ficção",
    description: "Curtas e longas-metragens com linguagem cinematográfica autoral. Da pré-produção à pós-produção.",
    features: ["Direção criativa", "Cinematografia", "Edição e color grading", "Sound design"],
  },
  {
    icon: Clapperboard,
    title: "Publicidade",
    description: "Comerciais e filmes institucionais que elevam marcas e conectam com audiências.",
    features: ["Conceito criativo", "Produção executiva", "Motion graphics", "Entrega multiplataforma"],
  },
  {
    icon: Video,
    title: "Documentário",
    description: "Histórias reais contadas com sensibilidade, profundidade e respeito.",
    features: ["Pesquisa e desenvolvimento", "Entrevistas cinematográficas", "Narrativa autoral", "Arquivo e restauro"],
  },
  {
    icon: Camera,
    title: "Videoclipes",
    description: "Narrativas visuais únicas para artistas e músicos que querem destacar-se.",
    features: ["Visual storytelling", "Efeitos especiais", "Animação 2D/3D", "Live performance"],
  },
  {
    icon: GraduationCap,
    title: "Cursos",
    description: "Formação audiovisual para criadores que buscam narrativa, técnica e linguagem autoral.",
    features: ["Direção de fotografia", "Storytelling cinematográfico", "Workshops autorais", "Mentorias individuais"],
  },
  {
    icon: Monitor,
    title: "Conteúdo Digital",
    description: "Vídeos otimizados para plataformas digitais e redes sociais.",
    features: ["Social media content", "Ads criativos", "Reels e shorts", "Estratégia visual"],
  },
];

const ServicosPage = () => {
  return (
    <main className="bg-background min-h-screen">
      <Navigation />
      
      {/* Header */}
      <section className="pt-32 pb-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <p className="text-editorial text-primary mb-4">Serviços</p>
            <h1 className="text-display text-5xl md:text-7xl lg:text-8xl text-foreground">
              O que fazemos
              <br />
              <span className="text-primary italic">com excelência</span>
            </h1>
            <p className="text-muted-foreground font-light text-lg mt-8 max-w-xl">
              Da visão inicial à entrega final, oferecemos soluções completas 
              de produção audiovisual.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-24 md:pb-32">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-background p-8 md:p-12 group hover:bg-muted/30 transition-colors duration-500"
              >
                <service.icon className="w-10 h-10 text-primary mb-6" />
                <h3 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1 h-1 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </main>
  );
};

export default ServicosPage;
