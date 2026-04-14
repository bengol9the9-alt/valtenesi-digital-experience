import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-restaurant.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Trattoria Pizzeria Valtenesi - Ristorante autentico italiano a Moniga del Garda"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gold tracking-[0.4em] uppercase text-xs mb-8 font-body font-bold"
        >
          Moniga del Garda — Dal 1985
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl md:text-7xl lg:text-[5.5rem] text-foreground text-shadow-hero leading-[1.1]"
        >
          Sapori Autentici,
          <br />
          <span className="italic">Momenti Indimenticabili.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
        >
          <a
            href="tel:0365511345"
            className="bg-foreground text-background px-8 py-4 tracking-[0.2em] uppercase text-xs font-bold hover:bg-gold hover:text-background transition-all duration-300"
          >
            Prenota un Tavolo
          </a>
          <a
            href="#menu"
            className="border border-foreground/30 text-foreground px-8 py-4 tracking-[0.2em] uppercase text-xs font-bold hover:border-gold hover:text-gold transition-all duration-300"
          >
            Scopri il Menu
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#marquee"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/40 hover:text-gold transition-colors"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default HeroSection;
