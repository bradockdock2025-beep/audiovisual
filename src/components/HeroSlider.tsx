import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroImage1 from "@/assets/hero-videomaker-1.jpg";
import heroImage2 from "@/assets/hero-videomaker-2.jpg";
import heroImage3 from "@/assets/hero-videomaker-3.jpg";

const slides = [
  {
    image: heroImage1,
    title: "Narrativas",
    subtitle: "em Movimento",
    caption: "Cinema autoral",
  },
  {
    image: heroImage2,
    title: "Visão",
    subtitle: "Criativa",
    caption: "Direção artística",
  },
  {
    image: heroImage3,
    title: "Cada Frame",
    subtitle: "Conta",
    caption: "Produção audiovisual",
  },
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
          {/* Cinematic Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/60" />
          <div className="absolute inset-0 vignette" />
        </motion.div>
      </AnimatePresence>

      {/* Film Grain Overlay */}
      <div className="film-grain absolute inset-0 pointer-events-none" />

      {/* Content */}
      <div className="relative h-full flex items-end">
        <div className="container pb-32 md:pb-40">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              {/* Caption */}
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-editorial text-primary mb-4"
              >
                {slides[currentSlide].caption}
              </motion.p>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-foreground"
              >
                {slides[currentSlide].title}
              </motion.h1>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-primary italic"
              >
                {slides[currentSlide].subtitle}
              </motion.h1>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 right-8 md:right-16 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="group relative p-2"
            aria-label={`Go to slide ${index + 1}`}
          >
            <div
              className={`h-px w-8 transition-all duration-500 ${
                index === currentSlide
                  ? "bg-primary w-12"
                  : "bg-foreground/30 group-hover:bg-foreground/60"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-8 md:left-16"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-editorial text-muted-foreground text-xs tracking-widest rotate-90 origin-center translate-y-8">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-primary/60 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
