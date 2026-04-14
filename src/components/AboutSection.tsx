import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import terraceImg from "@/assets/terrace.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src={terraceImg}
              alt="Terrazza del ristorante con vista sul Lago di Garda"
              className="w-full h-[500px] object-cover rounded-sm shadow-2xl"
              loading="lazy"
              width={1200}
              height={800}
            />
            <div className="absolute -bottom-6 -right-6 bg-wine text-wine-foreground p-6 rounded-sm hidden lg:block">
              <p className="font-display text-3xl">40+</p>
              <p className="text-sm tracking-wider uppercase font-body">Anni di tradizione</p>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4 font-body">La Nostra Storia</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6 leading-tight">
              Tradizione e passione <br />
              <span className="italic text-primary">dal cuore</span>
            </h2>
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
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
            </div>

            <div className="flex gap-8 mt-8 pt-8 border-t border-border">
              <div>
                <p className="font-display text-3xl text-primary">100%</p>
                <p className="text-sm text-muted-foreground tracking-wider uppercase">Ingredienti freschi</p>
              </div>
              <div>
                <p className="font-display text-3xl text-primary">Forno</p>
                <p className="text-sm text-muted-foreground tracking-wider uppercase">A legna</p>
              </div>
              <div>
                <p className="font-display text-3xl text-primary">Vini</p>
                <p className="text-sm text-muted-foreground tracking-wider uppercase">Del territorio</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
