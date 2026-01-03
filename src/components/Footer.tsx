import { motion } from "framer-motion";
import { Instagram, Youtube, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

const footerLinks = [
  {
    title: "Navegação",
    links: [
      { label: "Início", href: "/" },
      { label: "Sobre", href: "/sobre" },
      { label: "Portfólio", href: "/portfolio" },
      { label: "Serviços", href: "/servicos" },
    ],
  },
  {
    title: "Mais",
    links: [
      { label: "Cursos", href: "/cursos" },
      { label: "Concursos", href: "/concursos" },
      { label: "Clientes", href: "/clientes" },
      { label: "Contato", href: "/contato" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="container py-16 md:py-24">
        <div className="grid grid-cols-12 gap-8">
          {/* Brand */}
          <div className="col-span-12 lg:col-span-4">
            <a href="/" className="inline-block mb-6">
              <span className="font-display text-3xl font-medium text-foreground tracking-tight">
                Estúdio
              </span>
              <span className="font-display text-3xl font-light italic text-primary ml-1">
                Visual
              </span>
            </a>
            
            <p className="text-muted-foreground font-light text-sm leading-relaxed max-w-xs mb-8">
              Criamos narrativas visuais que transcendem o comum. 
              Cinema, publicidade e projetos autorais.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title} className="col-span-6 lg:col-span-2">
              <h4 className="text-editorial text-xs text-muted-foreground mb-6">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm font-light text-foreground/70 hover:text-primary transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="col-span-12 lg:col-span-4 lg:text-right">
            <h4 className="text-editorial text-xs text-muted-foreground mb-6">
              Contacto
            </h4>
            <a
              href="mailto:ola@estudiovisual.pt"
              className="inline-flex items-center gap-3 text-foreground hover:text-primary transition-colors duration-300"
            >
              <Mail className="w-4 h-4" />
              <span className="font-light">ola@estudiovisual.pt</span>
            </a>
            <p className="text-sm text-muted-foreground font-light mt-4">
              Lisboa, Portugal
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground font-light">
            © 2024 Estúdio Visual. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-300">
              Privacidade
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-300">
              Termos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
