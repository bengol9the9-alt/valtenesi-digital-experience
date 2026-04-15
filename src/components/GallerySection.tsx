import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import heroImg from "@/assets/hero-restaurant.jpg";
import pizzaImg from "@/assets/pizza.jpg";
import pastaImg from "@/assets/pasta.jpg";
import antipastiImg from "@/assets/antipasti.jpg";
import dessertImg from "@/assets/dessert.jpg";
import terraceImg from "@/assets/terrace.jpg";

const images = [
  { src: heroImg, alt: "Interno del ristorante", className: "md:col-span-2 md:row-span-2" },
  { src: pizzaImg, alt: "Pizza margherita dal forno a legna", className: "" },
  { src: dessertImg, alt: "Tiramisù fatto in casa", className: "" },
  { src: pastaImg, alt: "Tagliatelle ai funghi porcini", className: "" },
  { src: antipastiImg, alt: "Antipasto della casa", className: "" },
  { src: terraceImg, alt: "Terrazza con vista lago", className: "md:col-span-2" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="section-padding bg-secondary" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl text-foreground">Galleria</h2>
          <p className="text-muted-foreground mt-4 font-body text-lg">
            Scopri la nostra arte culinaria attraverso un viaggio visivo immersivo
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative overflow-hidden group cursor-pointer ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full min-h-[200px] object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                width={800}
                height={800}
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/50 transition-all duration-500 flex items-center justify-center">
                <p className="text-foreground font-display text-lg tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {img.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
