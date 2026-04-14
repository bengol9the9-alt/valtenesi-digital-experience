import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-6 bg-secondary border-y border-border" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="container mx-auto text-center max-w-3xl"
      >
        <p className="text-gold tracking-[0.3em] uppercase text-xs font-body font-bold mb-6">Prenota Ora</p>
        <h2 className="font-display text-4xl md:text-6xl text-foreground leading-tight mb-6">
          Vivi l'Esperienza della
          <br />
          <span className="italic">Vera Cucina Italiana</span>
        </h2>
        <p className="text-muted-foreground font-body text-lg mb-10">
          Prenota il tuo tavolo e concediti un viaggio culinario indimenticabile.
          Posti limitati per un'esperienza intima e autentica.
        </p>
        <a
          href="tel:0365511345"
          className="inline-block bg-foreground text-background px-10 py-4 tracking-[0.2em] uppercase text-xs font-bold hover:bg-gold transition-all duration-300"
        >
          Prenota il Tuo Tavolo
        </a>
      </motion.div>
    </section>
  );
};

export default CTASection;
