import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

type Category = "antipasti" | "primi" | "pizze" | "secondi" | "dolci";

const categories: { key: Category; label: string }[] = [
  { key: "antipasti", label: "Antipasti" },
  { key: "primi", label: "Primi Piatti" },
  { key: "pizze", label: "Pizze" },
  { key: "secondi", label: "Secondi Piatti" },
  { key: "dolci", label: "Dolci" },
];

const menuItems: Record<Category, { name: string; desc: string; price: string }[]> = {
  antipasti: [
    { name: "Bruschetta della Casa", desc: "Pomodorini, basilico fresco, olio EVO", price: "€7" },
    { name: "Tagliere Valtenesi", desc: "Salumi e formaggi locali, miele, confetture", price: "€14" },
    { name: "Carpaccio di Bresaola", desc: "Rucola, parmigiano, limone", price: "€10" },
    { name: "Insalata di Polpo", desc: "Polpo, patate, olive taggiasche, capperi", price: "€13" },
  ],
  primi: [
    { name: "Tagliatelle ai Porcini", desc: "Pasta fresca, funghi porcini, parmigiano", price: "€14" },
    { name: "Risotto al Lugana", desc: "Riso carnaroli, vino Lugana, burro", price: "€13" },
    { name: "Casoncelli Bresciani", desc: "Pasta ripiena, burro fuso, salvia", price: "€12" },
    { name: "Spaghetti alle Vongole", desc: "Vongole veraci, aglio, prezzemolo", price: "€15" },
  ],
  pizze: [
    { name: "Margherita", desc: "San Marzano, fior di latte, basilico fresco", price: "€8" },
    { name: "Valtenesi", desc: "Crema di zucca, speck, scamorza affumicata", price: "€12" },
    { name: "Diavola", desc: "Salame piccante, peperoncino, mozzarella", price: "€10" },
    { name: "Quattro Stagioni", desc: "Carciofi, funghi, prosciutto, olive", price: "€11" },
  ],
  secondi: [
    { name: "Tagliata di Manzo", desc: "Rucola, parmigiano, aceto balsamico", price: "€18" },
    { name: "Filetto di Branzino", desc: "Patate, olive, pomodorini", price: "€16" },
    { name: "Scaloppine al Limone", desc: "Vitello, limone, capperi", price: "€15" },
    { name: "Grigliata Mista", desc: "Carni alla griglia, verdure di stagione", price: "€20" },
  ],
  dolci: [
    { name: "Tiramisù della Casa", desc: "Mascarpone, savoiardi, caffè espresso", price: "€7" },
    { name: "Panna Cotta", desc: "Vaniglia, coulis di frutti di bosco", price: "€6" },
    { name: "Sbrisolona", desc: "Dolce tipico con mandorle, servita con grappa", price: "€7" },
    { name: "Sorbetto al Limone", desc: "Limoni di Sicilia, menta fresca", price: "€5" },
  ],
};

const MenuSection = () => {
  const [openCat, setOpenCat] = useState<Category | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="menu" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl text-foreground">Il Nostro Menu</h2>
          <p className="text-muted-foreground mt-4 font-body text-lg">
            Scopri i sapori autentici della tradizione italiana
          </p>
        </motion.div>

        <div className="divide-y divide-border">
          {categories.map((cat) => (
            <div key={cat.key}>
              <button
                onClick={() => setOpenCat(openCat === cat.key ? null : cat.key)}
                className="w-full py-8 flex items-center justify-between group"
              >
                <h3 className="font-display text-3xl md:text-5xl text-foreground group-hover:text-gold transition-colors duration-300 tracking-tight">
                  {cat.label.toUpperCase()}
                </h3>
                <ChevronRight
                  className={`w-8 h-8 text-muted-foreground group-hover:text-gold transition-all duration-300 ${
                    openCat === cat.key ? "rotate-90" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openCat === cat.key && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 space-y-6">
                      {menuItems[cat.key].map((item) => (
                        <div
                          key={item.name}
                          className="flex justify-between items-start gap-4 pl-4 md:pl-8"
                        >
                          <div>
                            <h4 className="font-display text-lg text-foreground">{item.name}</h4>
                            <p className="text-muted-foreground font-body text-sm mt-1">{item.desc}</p>
                          </div>
                          <span className="text-gold font-display text-lg flex-shrink-0">{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
