import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import terraceImg from "@/assets/terrace.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl text-foreground leading-tight">La Nostra Storia</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-muted-foreground font-body leading-relaxed text-lg"
          >
            <p>
              Nel cuore della Valtenesi, affacciata sulle colline che digradano verso il
              Lago di Garda, la nostra trattoria accoglie gli ospiti con il calore e
              l'autenticità della cucina italiana da oltre quarant'anni.
            </p>
            <p>
              Ogni piatto nasce dalla selezione dei migliori ingredienti locali e
              stagionali, dalle farine macinate a pietra per le nostre pizze cotte nel
              forno a legna, ai prodotti dell'orto che arricchiscono i nostri primi piatti.
            </p>
            <p>
              La nostra cantina vanta una ricca selezione di vini del Garda e delle
              migliori denominazioni italiane, perfetti per accompagnare ogni portata.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <img
              src={terraceImg}
              alt="Terrazza del ristorante con vista sul Lago di Garda"
              className="w-full h-[500px] object-cover"
              loading="lazy"
              width={1200}
              height={800}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
