import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import founderImage from "@/assets/hero-videomaker-2.jpg";

const stats = [
  { value: 8, suffix: "+", label: "Anos de experiência" },
  { value: 150, suffix: "+", label: "Projetos entregues" },
  { value: 40, suffix: "+", label: "Clientes satisfeitos" },
];

const easeCinema = [0.25, 0.1, 0.25, 1] as const;

const contentContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.1 },
  },
};

const contentItem = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeCinema },
  },
};

const MotionLink = motion(Link);

export function AboutPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section ref={ref} className="relative py-32 md:py-48 bg-background overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_40%_at_15%_15%,rgba(150,120,60,0.16),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_30%_at_80%_10%,rgba(30,120,120,0.12),transparent_70%)]" />
      <div className="container relative">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: easeCinema }}
            className="relative"
          >
            <div className="relative group">
              <div className="absolute -inset-6 bg-[radial-gradient(circle,rgba(255,200,120,0.18),transparent_70%)] opacity-60 blur-2xl transition-opacity duration-700 group-hover:opacity-90" />
              <div className="relative aspect-[3/4] overflow-hidden border border-border/60 bg-muted shadow-[0_20px_60px_rgba(0,0,0,0.55)] transition-all duration-700 group-hover:border-primary/40 group-hover:shadow-[0_30px_80px_rgba(255,200,120,0.2)]">
                <motion.div
                  animate={isInView ? { y: [0, -10, 0] } : {}}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={founderImage}
                    alt="Diretor criativo do estúdio"
                    fill
                    sizes="(min-width: 1024px) 40vw, 80vw"
                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  />
                </motion.div>

                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,6,6,0.05),rgba(8,8,8,0.7),rgba(120,90,40,0.65))]" />
                <div className="absolute inset-0 film-grain" />
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_30%_70%,rgba(255,200,120,0.18),transparent_55%)]" />

                <div className="absolute top-6 left-6 h-px w-20 bg-gradient-to-r from-primary/70 to-transparent" />
                <div className="absolute top-6 left-6 h-20 w-px bg-gradient-to-b from-primary/70 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 px-6 pb-6 pt-16 bg-gradient-to-t from-background/90 via-background/40 to-transparent">
                  <p className="text-[0.65rem] uppercase tracking-[0.32em] text-muted-foreground transition-colors duration-500 group-hover:text-foreground">
                    Rafael Monteiro
                  </p>
                  <p className="text-[0.65rem] uppercase tracking-[0.28em] text-primary/80 mt-2">
                    Diretor Criativo & Video Maker
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={contentContainer}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="flex flex-col gap-8 lg:pl-8"
          >
            <motion.p variants={contentItem} className="text-editorial text-primary">
              SOBRE O ESTÚDIO
            </motion.p>

            <motion.h2
              variants={contentItem}
              className="text-display text-4xl md:text-5xl lg:text-6xl text-foreground"
            >
              Uma marca,
              <br />
              uma{" "}
              <motion.span
                initial={{ opacity: 0, y: 8 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-primary italic drop-shadow-[0_0_18px_rgba(255,200,120,0.35)]"
              >
                visão
              </motion.span>
            </motion.h2>

            <motion.div
              variants={contentItem}
              className="space-y-6 text-muted-foreground text-lg leading-relaxed font-light"
            >
              <p>
                O estúdio nasce da visão de um criador que transforma luz em memória. Cada projeto é
                tratado como obra, onde técnica e emoção caminham lado a lado.
              </p>
              <p>
                Procuramos o instante que permanece: a imagem que revela intenções e constrói
                presença. Mais do que registrar, dirigimos experiências visuais com assinatura
                autoral.
              </p>
            </motion.div>

            <motion.div variants={contentItem} className="pt-2">
              <div className="h-px w-full bg-primary/15 overflow-hidden">
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                  className="block h-px w-full origin-left bg-primary/50"
                />
              </div>
            </motion.div>

            <motion.div variants={contentItem} className="grid gap-6 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="space-y-2">
                  <span className="font-display text-3xl md:text-4xl text-foreground">
                    <CountUp value={stat.value} suffix={stat.suffix} isInView={isInView} />
                  </span>
                  <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>

            <MotionLink
              variants={contentItem}
              href="/sobre"
              className="group inline-flex items-center justify-center border border-primary/60 px-8 py-3 text-[0.7rem] uppercase tracking-[0.32em] text-primary/90 transition-all duration-400 hover:bg-primary hover:text-background hover:shadow-[0_0_25px_rgba(255,200,120,0.2)]"
            >
              <span className="transition-transform duration-300 group-hover:-translate-y-0.5">
                Conhecer o estúdio
              </span>
            </MotionLink>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CountUp({ value, suffix, isInView }: { value: number; suffix?: string; isInView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) {
      return;
    }

    const duration = 1200;
    const start = Date.now();
    let frame: number;

    const step = () => {
      const progress = Math.min((Date.now() - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));

      if (progress < 1) {
        frame = requestAnimationFrame(step);
      }
    };

    frame = requestAnimationFrame(step);

    return () => cancelAnimationFrame(frame);
  }, [value, isInView]);

  return (
    <>
      {count}
      {suffix ?? ""}
    </>
  );
}
