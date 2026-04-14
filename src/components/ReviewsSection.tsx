import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Laura Bianchi",
    flag: "🇮🇹",
    country: "Italia",
    text: "La migliore pizza del Garda! L'atmosfera è calda e accogliente, come a casa.",
    rating: 5,
  },
  {
    name: "Thomas Müller",
    flag: "🇩🇪",
    country: "Germania",
    text: "Hervorragend! Die Pasta war frisch und perfekt zubereitet. Ein Muss!",
    rating: 5,
  },
  {
    name: "Sophie Dupont",
    flag: "🇫🇷",
    country: "Francia",
    text: "Un vrai régal! Le tiramisù est le meilleur que j'ai jamais goûté.",
    rating: 5,
  },
  {
    name: "James Smith",
    flag: "🇬🇧",
    country: "UK",
    text: "Outstanding food and wine selection. The lake view terrace is magical.",
    rating: 5,
  },
  {
    name: "Maria Gonzalez",
    flag: "🇪🇸",
    country: "Spagna",
    text: "¡Increíble! Los sabores son auténticos. Volveremos seguro.",
    rating: 5,
  },
  {
    name: "Pieter van Dijk",
    flag: "🇳🇱",
    country: "Olanda",
    text: "Geweldig restaurant! De risotto was perfect en de bediening uitstekend.",
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
                <div className="w-10 h-10 bg-card rounded-full flex items-center justify-center text-lg">
                  {review.flag}
                </div>
                <div>
                  <p className="text-foreground font-display text-sm">{review.name}</p>
                  <p className="text-muted-foreground text-xs font-body">{review.country}</p>
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
