import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export function ContactCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 md:py-48 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      {/* Decorative Elements */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-px bg-gradient-to-l from-transparent via-primary/30 to-transparent" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-editorial text-primary mb-6">Próximo Projeto</p>
          
          <h2 className="text-display text-5xl md:text-7xl lg:text-8xl text-foreground mb-8">
            Vamos criar algo
            <br />
            <span className="text-primary italic">extraordinário?</span>
          </h2>

          <p className="text-muted-foreground font-light text-lg max-w-xl mx-auto mb-12">
            Cada grande projeto começa com uma conversa. 
            Conte-nos a sua visão.
          </p>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            href="/contato"
            className="group inline-flex items-center gap-4 bg-primary text-primary-foreground px-10 py-5 font-body text-sm uppercase tracking-widest hover:gap-6 transition-all duration-400"
          >
            Iniciar Conversa
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>
        </motion.div>
      </div>

      {/* Bottom Line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-primary/30 to-transparent" />
    </section>
  );
}
