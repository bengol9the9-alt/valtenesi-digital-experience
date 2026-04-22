import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import esternoImg from "@/assets/gallery-esterno.png";
import pizzaImg from "@/assets/gallery-pizza.png";
import rigatoniImg from "@/assets/gallery-rigatoni.png";
import paccheriImg from "@/assets/gallery-paccheri.png";
import tagliatelleImg from "@/assets/gallery-tagliatelle.png";
import bisteccaImg from "@/assets/gallery-bistecca.png";

const images = [
  { src: esternoImg, alt: "Esterno della trattoria Valtenesi", className: "md:col-span-2 md:row-span-2" },
  { src: pizzaImg, alt: "Pizza margherita dal forno a legna", className: "md:col-span-2" },
  { src: rigatoniImg, alt: "Rigatoni al sugo", className: "" },
  { src: tagliatelleImg, alt: "Tagliatelle al ragù", className: "" },
  { src: paccheriImg, alt: "Paccheri con scampi", className: "md:col-span-2" },
  { src: bisteccaImg, alt: "Bistecca alla griglia", className: "md:col-span-2" },
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

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[250px] gap-2 md:gap-3">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative overflow-hidden group cursor-pointer ${img.className}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
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
