import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Federica DINI",
    initial: "F",
    meta: "Local Guide · 77 recensioni",
    text: "Ottima pizza croccante con 30% di farina integrale, staff super gentile e dolcetto finale, semifreddo al caffè, delizioso. Pezzi onestissimi.",
    rating: 5,
  },
  {
    name: "Silvia Negri",
    initial: "S",
    meta: "Local Guide · 81 recensioni",
    text: "Buonissimi e gentilissimi, in chiusura ma serviti e riveriti carne ottima, verdure fresche, grazie! Siete una certezza!!",
    rating: 5,
  },
  {
    name: "marco ripa",
    initial: "M",
    meta: "Local Guide · 74 recensioni",
    text: "Locale carino con servizio cordiale e veloce. Ci sono stato in pausa pranzo e mi è piaciuto molto. Ci tornerò.",
    rating: 5,
  },
  {
    name: "Loretta Persavalli \"Lory\"",
    initial: "L",
    meta: "Local Guide · 43 recensioni",
    text: "Ci siamo recati a cena per caso, ma devo dire che ritorneremo sicuramente, personale gentile e cibo ottimo.",
    rating: 5,
  },
  {
    name: "Elisa Borlenghi",
    initial: "E",
    meta: "6 recensioni",
    text: "Prenotato all'ultimo per 12 persone. Ci siamo trovati molto bene! Abbiamo preso tutti pizze diverse davvero molto buone! Siamo stati serviti da due ragazzi giovani molto gentili. Parcheggio grande dedicato. Pizzeria consigliata!",
    rating: 5,
  },
  {
    name: "Giacomo Vezzoli",
    initial: "G",
    meta: "3 recensioni",
    text: "Io e la mia compagna siamo stati a cena in questo posticino! Trattoria tipica e casereccia, qualità prezzo ok! Personale molto cordiale e giovane e giovanile. Quando siamo al lago verremo sempre qua. Grazie ragazzi.",
    rating: 5,
  },
];

const ReviewsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="reviews" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl text-foreground">I Nostri Ospiti</h2>
          <p className="text-muted-foreground mt-4 font-body text-lg">
            Le parole di chi ha vissuto la nostra esperienza culinaria
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-secondary p-8 border border-border hover:border-gold/30 transition-colors duration-300"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-foreground/80 font-body italic leading-relaxed mb-6">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-card rounded-full flex items-center justify-center text-base font-display text-gold">
                  {review.initial}
                </div>
                <div>
                  <p className="text-foreground font-display text-sm">{review.name}</p>
                  <p className="text-muted-foreground text-xs font-body">{review.meta}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
