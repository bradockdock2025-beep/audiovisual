import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";

const navItems = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Portfólio", href: "/portfolio" },
  { label: "Serviços", href: "/servicos" },
  { label: "Cursos", href: "/cursos" },
  { label: "Contato", href: "/contato" },
];

const MotionLink = motion(Link);

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const isDark = isMounted && (resolvedTheme ?? "dark") === "dark";
  const handleThemeToggle = () => setTheme(isDark ? "light" : "dark");

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/90 backdrop-blur-md border-b border-border/50"
            : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="relative z-50">
            <span className="font-display text-2xl md:text-3xl font-medium text-foreground tracking-tight">
              Estúdio
            </span>
            <span className="font-display text-2xl md:text-3xl font-light italic text-primary ml-1">
              Visual
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <MotionLink
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="relative text-sm font-body font-light text-foreground/80 hover:text-foreground transition-colors duration-300 group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
              </MotionLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            {/* CTA Button */}
            <MotionLink
              href="/contato"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="text-editorial text-xs border border-primary/50 px-6 py-3 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-400"
            >
              Iniciar Projeto
            </MotionLink>

            <button
              type="button"
              onClick={handleThemeToggle}
              aria-label="Alternar tema"
              aria-pressed={isDark}
              className="relative inline-flex h-10 w-10 items-center justify-center border border-border/60 bg-background/40 text-foreground/80 transition-all duration-400 hover:text-foreground hover:border-primary/60 hover:bg-muted/40"
            >
              {isMounted ? (
                <span className="transition-opacity duration-300">
                  {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </span>
              ) : (
                <span className="h-4 w-4" aria-hidden />
              )}
            </button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={handleThemeToggle}
              aria-label="Alternar tema"
              aria-pressed={isDark}
              className="relative inline-flex h-10 w-10 items-center justify-center border border-border/60 bg-background/40 text-foreground/80 transition-all duration-400 hover:text-foreground hover:border-primary/60 hover:bg-muted/40"
            >
              {isMounted ? (
                <span className="transition-opacity duration-300">
                  {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </span>
              ) : (
                <span className="h-4 w-4" aria-hidden />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative z-50 p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background"
          >
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex flex-col items-center justify-center h-full gap-8"
            >
              {navItems.map((item, index) => (
                <MotionLink
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-display text-4xl font-light text-foreground hover:text-primary transition-colors duration-300"
                >
                  {item.label}
                </MotionLink>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
