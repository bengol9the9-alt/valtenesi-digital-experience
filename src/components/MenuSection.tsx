import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

type Category = "antipasti" | "primi" | "pizze" | "secondi" | "dolci";

const categories: { key: Category; label: string }[] = [
  { key: "antipasti", label: "Antipasti" },
  { key: "primi", label: "Primi" },
  { key: "secondi", label: "Secondi" },
  { key: "pizze", label: "Pizze" },
  { key: "dolci", label: "Dolci" },
];

const menuItems: Record<Category, { name: string; desc: string; price: string }[]> = {
  antipasti: [
    { name: "Tagliere di salumi e formaggi misti", desc: "Consigliato per 2 persone", price: "€20,00" },
    { name: "Polenta alla griglia", desc: "Con formaggio fuso e miele", price: "€9,00" },
    { name: "Vellutata di zucca", desc: "Con fonduta al parmigiano e crostini al timo", price: "€11,00" },
  ],
  primi: [
    { name: "Casoncelli alla bresciana", desc: "Pasta ripiena tipica bresciana", price: "€13,00" },
    { name: "Tagliolini ai funghi porcini", desc: "Pasta fresca con funghi porcini", price: "€18,00" },
    { name: "Risotto alla barbabietola", desc: "Con fonduta al gorgonzola", price: "€16,00" },
    { name: "Pappardelle al ragù di cinghiale", desc: "Pasta fresca con ragù di cinghiale", price: "€15,00" },
    { name: "Linguine all'astice", desc: "Pasta fresca con astice", price: "€22,50" },
  ],
  secondi: [
    { name: "Costata di manzo alla griglia", desc: "Carne alla griglia", price: "€16,50" },
    { name: "Pescato del giorno", desc: "Pesce fresco di giornata", price: "€20,00" },
    { name: "Tagliata di manzo", desc: "Con rucola e grana", price: "€17,00" },
    { name: "Stinco di maiale brasato", desc: "Al Groppello e miele", price: "€15,00" },
  ],
  pizze: [
    { name: "Margherita", desc: "Pomodoro, mozzarella", price: "€7,50" },
    { name: "Speck", desc: "Pomodoro, mozzarella, speck", price: "€11,30" },
    { name: "Crudo di Parma", desc: "Pomodoro, mozzarella, crudo", price: "€11,30" },
    { name: "Tonno e cipolle", desc: "Pomodoro, mozzarella, cipolle, tonno", price: "€10,00" },
    { name: "Parmigiana", desc: "Pomodoro, mozzarella, grana, melanzane", price: "€10,00" },
    { name: "Focaccia con sale, rosmarino e olio", desc: "Focaccia semplice", price: "€5,00" },
    { name: "Marinara", desc: "Pomodoro, mozzarella, aglio, origano", price: "€6,30" },
    { name: "Gorgonzola", desc: "Pomodoro, mozzarella, gorgonzola", price: "€10,00" },
    { name: "Prosciutto cotto", desc: "Pomodoro, mozzarella, prosciutto cotto", price: "€10,00" },
    { name: "Pugliese", desc: "Pomodoro, mozzarella, cipolle", price: "€10,00" },
    { name: "Würstel", desc: "Pomodoro, mozzarella, würstel", price: "€8,80" },
    { name: "Napoletana", desc: "Pomodoro, mozzarella, origano, acciughe", price: "€8,80" },
    { name: "Siciliana", desc: "Pomodoro, mozzarella, capperi, olive nere, origano, acciughe", price: "€10,00" },
    { name: "Romana", desc: "Pomodoro, mozzarella, acciughe, capperi, origano", price: "€10,00" },
    { name: "Porcini", desc: "Pomodoro, mozzarella, porcini", price: "€10,00" },
    { name: "Capricciosa", desc: "Pomodoro, mozzarella, prosciutto cotto, funghi champignon, carciofi", price: "€11,30" },
    { name: "4 Stagioni", desc: "Pomodoro, mozzarella, prosciutto cotto, funghi champignon, olive nere, carciofi", price: "€11,30" },
    { name: "4 Formaggi", desc: "Pomodoro, mozzarella, gorgonzola, scamorza, grana, brie", price: "€11,30" },
    { name: "Bresaola, rucola e grana", desc: "Pomodoro, mozzarella, bresaola, rucola e grana", price: "€11,30" },
    { name: "Vip", desc: "Pomodoro, mozzarella di bufala, basilico, crudo di Parma, grana", price: "€12,50" },
    { name: "Mezzogiorno", desc: "Pomodoro, mozzarella, friarielli, salsiccia", price: "€11,30" },
    { name: "Lombarda", desc: "Pomodoro, mozzarella, porcini, rucola, salsiccia, grana", price: "€11,30" },
    { name: "Maestà", desc: "Pomodoro, mozzarella, porcini, gorgonzola, speck", price: "€11,30" },
    { name: "Porcona", desc: "Pomodoro, mozzarella di bufala, salsiccia, porcini", price: "€11,30" },
    { name: "Bagoss e salsiccia", desc: "Pomodoro, mozzarella, bagoss e salsiccia", price: "€12,50" },
    { name: "Bagoss e porcini", desc: "Pomodoro, mozzarella, bagoss e porcini", price: "€12,50" },
    { name: "Big Bag", desc: "Pomodoro, mozzarella, salame piccante, würstel, cotto, carciofi, funghi, gorgonzola, peperoni, cipolle, olive nere", price: "€15,00" },
    { name: "Nordica", desc: "Pomodoro, mozzarella, gamberetti, polpa di granchio, salmone, pomodorini, prezzemolo", price: "€12,50" },
    { name: "Frutti di mare", desc: "Pomodoro, mozzarella, insalata di mare, aglio, prezzemolo, pomodorini", price: "€12,50" },
    { name: "Calamari", desc: "Pomodoro, mozzarella, calamari fritti", price: "€12,50" },
    { name: "Viziata", desc: "Pomodoro, mozzarella, panna, salmone, rucola, prezzemolo", price: "€11,30" },
    { name: "Nemo", desc: "Pomodoro, mozzarella, gamberetti, zucchine, prezzemolo", price: "€11,30" },
    { name: "Sorrento", desc: "Pomodoro, mozzarella, ricotta, olive nere, acciughe, salame piccante, origano", price: "€11,30" },
    { name: "Fattoria", desc: "Pomodoro, mozzarella, gorgonzola, pancetta, rucola", price: "€11,30" },
    { name: "Mediterranea", desc: "Pomodoro, mozzarella, pomodorini, origano, crudo di Parma, rucola, grana", price: "€12,50" },
    { name: "Bufalina", desc: "Pomodoro, mozzarella di bufala, pomodorini freschi, rucola", price: "€12,50" },
    { name: "Delizia", desc: "Pomodoro, mozzarella, panna, crudo di Parma", price: "€11,30" },
    { name: "Fuego", desc: "Pomodoro, mozzarella, peperoni, salame piccante, peperoncino, gorgonzola", price: "€11,30" },
    { name: "Primavera", desc: "Pomodoro, mozzarella, pomodorini, origano", price: "€8,80" },
    { name: "Caprese", desc: "Pomodoro, mozzarella, tonno, olive nere, pomodorini, origano", price: "€11,30" },
    { name: "Verdure fresche", desc: "Pomodoro, mozzarella, peperoni, zucchine, spinaci, melanzane", price: "€11,30" },
    { name: "Tropea", desc: "Pomodoro, mozzarella di bufala, cipolle, olive nere, origano", price: "€11,30" },
    { name: "Giardino del Re", desc: "Base pasta oxo grana, verdure e funghi freschi", price: "€11,30" },
    { name: "Dolomiti", desc: "Pomodoro, mozzarella, funghi, bresaola, rucola e grana", price: "€11,30" },
    { name: "Armonia", desc: "Pomodoro, mozzarella, pomodorini, brie, zucchine", price: "€10,00" },
    { name: "Ligure", desc: "Mozzarella di bufala, pomodorini, pesto alla genovese, origano", price: "€11,30" },
    { name: "Trentina", desc: "Mozzarella, panna, noci, speck", price: "€11,30" },
    { name: "Malibu", desc: "Mozzarella, gamberetti, polpa di granchio, salmone, pomodorini, prezzemolo", price: "€12,50" },
    { name: "Salmone e burrata", desc: "Pomodoro, mozzarella, salmone e burrata", price: "€16,30" },
    { name: "Crudo e burrata", desc: "Pomodoro, mozzarella, crudo e burrata", price: "€16,30" },
    { name: "Focaccia burrata e salmone", desc: "Focaccia con doppia pasta", price: "€16,30" },
    { name: "Focaccia burrata e crudo", desc: "Focaccia con doppia pasta", price: "€16,30" },
    { name: "Focaccia con verdure fresche e burrata", desc: "Verdure di stagione e burrata", price: "€16,30" },
    { name: "Focaccia Malibù", desc: "Gamberi, salmone e polpa di granchio", price: "€16,30" },
  ],
  dolci: [
    { name: "Torta di mele con gelato alla vaniglia", desc: "Fatto in casa", price: "€5,00" },
    { name: "Tiramisù alle fragole e limoncello", desc: "Fatto in casa", price: "€6,00" },
    { name: "Macedonia con gelato", desc: "Frutta fresca con gelato", price: "€5,00" },
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
