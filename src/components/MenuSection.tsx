import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import pizzaImg from "@/assets/pizza.jpg";
import pastaImg from "@/assets/pasta.jpg";
import antipastiImg from "@/assets/antipasti.jpg";
import dessertImg from "@/assets/dessert.jpg";

type Category = "antipasti" | "primi" | "pizze" | "dolci";

const categories: { key: Category; label: string; image: string }[] = [
  { key: "antipasti", label: "Antipasti", image: antipastiImg },
  { key: "primi", label: "Primi Piatti", image: pastaImg },
  { key: "pizze", label: "Pizze", image: pizzaImg },
  { key: "dolci", label: "Dolci", image: dessertImg },
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
  dolci: [
    { name: "Tiramisù della Casa", desc: "Mascarpone, savoiardi, caffè espresso", price: "€7" },
    { name: "Panna Cotta", desc: "Vaniglia, coulis di frutti di bosco", price: "€6" },
    { name: "Sbrisolona", desc: "Dolce tipico con mandorle, servita con grappa", price: "€7" },
    { name: "Sorbetto al Limone", desc: "Limoni di Sicilia, menta fresca", price: "€5" },
  ],
};

const MenuSection = () => {
  const [active, setActive] = useState<Category>("antipasti");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const activeCat = categories.find((c) => c.key === active)!;

  return (
    <section id="menu" className="section-padding bg-charcoal" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4 font-body">Il Nostro</p>
          <h2 className="font-display text-4xl md:text-5xl text-primary-foreground">Menu</h2>
        </motion.div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`px-6 py-3 text-sm tracking-widest uppercase font-body rounded-sm transition-all duration-300 ${
                active === cat.key
                  ? "bg-primary text-primary-foreground"
                  : "bg-transparent text-primary-foreground/60 border border-primary-foreground/20 hover:border-gold hover:text-gold"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-sm hidden lg:block"
          >
            <img
              src={activeCat.image}
              alt={activeCat.label}
              className="w-full h-[500px] object-cover"
              loading="lazy"
              width={800}
              height={800}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
          </motion.div>

          {/* Items */}
          <motion.div
            key={active + "-items"}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-0"
          >
            {menuItems[active].map((item, i) => (
              <div
                key={item.name}
                className={`py-6 ${i !== menuItems[active].length - 1 ? "border-b border-primary-foreground/10" : ""}`}
              >
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-display text-xl text-primary-foreground">{item.name}</h3>
                  <span className="text-gold font-display text-lg ml-4">{item.price}</span>
                </div>
                <p className="text-primary-foreground/50 font-body text-sm">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
