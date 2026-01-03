import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Mail, MapPin, Phone, Instagram, Youtube, Linkedin } from "lucide-react";

const ContatoPage = () => {
  return (
    <main className="bg-background min-h-screen">
      <Navigation />
      
      {/* Main Section */}
      <section className="pt-32 pb-24 md:pb-32">
        <div className="container">
          <div className="grid grid-cols-12 gap-8 lg:gap-16">
            {/* Left - Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="col-span-12 lg:col-span-5"
            >
              <p className="text-editorial text-primary mb-4">Contato</p>
              <h1 className="text-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-8">
                Vamos
                <br />
                <span className="text-primary italic">conversar</span>
              </h1>

              <div className="space-y-6 text-muted-foreground font-light mb-12">
                <p>
                  Cada grande projeto começa com uma conversa. 
                  Estamos prontos para ouvir a sua visão.
                </p>
              </div>

              <div className="space-y-6">
                <a 
                  href="mailto:ola@estudiovisual.pt" 
                  className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="font-light">ola@estudiovisual.pt</span>
                </a>

                <a 
                  href="tel:+351912345678" 
                  className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="font-light">+351 912 345 678</span>
                </a>

                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="w-12 h-12 border border-border flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="font-light">Lisboa, Portugal</span>
                </div>
              </div>

              {/* Social */}
              <div className="flex gap-4 mt-12">
                {[Instagram, Youtube, Linkedin].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-12 h-12 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Right - Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="col-span-12 lg:col-span-6 lg:col-start-7"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="text-editorial text-xs text-muted-foreground block mb-3">Nome</label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-b border-border py-3 text-foreground font-light focus:outline-none focus:border-primary transition-colors"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label className="text-editorial text-xs text-muted-foreground block mb-3">Email</label>
                    <input
                      type="email"
                      className="w-full bg-transparent border-b border-border py-3 text-foreground font-light focus:outline-none focus:border-primary transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-editorial text-xs text-muted-foreground block mb-3">Tipo de projeto</label>
                  <select className="w-full bg-transparent border-b border-border py-3 text-muted-foreground font-light focus:outline-none focus:border-primary transition-colors">
                    <option value="">Selecionar...</option>
                    <option value="comercial">Comercial / Publicidade</option>
                    <option value="documentario">Documentário</option>
                    <option value="videoclipe">Videoclipe</option>
                    <option value="institucional">Vídeo Institucional</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label className="text-editorial text-xs text-muted-foreground block mb-3">Mensagem</label>
                  <textarea
                    rows={5}
                    className="w-full bg-transparent border-b border-border py-3 text-foreground font-light focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Conte-nos sobre o seu projeto..."
                  />
                </div>

                <div>
                  <label className="text-editorial text-xs text-muted-foreground block mb-3">Orçamento estimado</label>
                  <select className="w-full bg-transparent border-b border-border py-3 text-muted-foreground font-light focus:outline-none focus:border-primary transition-colors">
                    <option value="">Selecionar...</option>
                    <option value="5000">€5.000 - €10.000</option>
                    <option value="10000">€10.000 - €25.000</option>
                    <option value="25000">€25.000 - €50.000</option>
                    <option value="50000">€50.000+</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-4 text-editorial text-xs uppercase tracking-widest hover:bg-primary/90 transition-colors mt-8"
                >
                  Enviar Mensagem
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ContatoPage;
