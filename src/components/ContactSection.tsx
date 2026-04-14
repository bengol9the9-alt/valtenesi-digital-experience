import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, MapPin, Clock, Mail } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", date: "", guests: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Richiesta inviata! Vi contatteremo presto per confermare la prenotazione.");
    setFormData({ name: "", email: "", phone: "", date: "", guests: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-charcoal" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4 font-body">Vieni a Trovarci</p>
          <h2 className="font-display text-4xl md:text-5xl text-primary-foreground">Prenota un Tavolo</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex gap-4">
              <MapPin className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-display text-lg text-primary-foreground mb-1">Indirizzo</h3>
                <p className="text-primary-foreground/60 font-body">Via Pergola, 53<br />25080 Moniga del Garda BS, Italia</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-display text-lg text-primary-foreground mb-1">Telefono</h3>
                <a href="tel:0365511345" className="text-primary-foreground/60 font-body hover:text-gold transition-colors">
                  0365 511345
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-display text-lg text-primary-foreground mb-1">Orari di Apertura</h3>
                <p className="text-primary-foreground/60 font-body">
                  Tutti i giorni<br />
                  Pranzo: 12:00 – 14:30<br />
                  Cena: 18:30 – 23:00
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Mail className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-display text-lg text-primary-foreground mb-1">Email</h3>
                <p className="text-primary-foreground/60 font-body">info@trattoriavaltenesi.it</p>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8 rounded-sm overflow-hidden h-[250px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2785.1!2d10.5427!3d45.5275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDMxJzM5LjAiTiAxMMKwMzInMzMuNyJF!5e0!3m2!1sit!2sit!4v1600000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Posizione Trattoria Pizzeria Valtenesi"
              />
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Nome *"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-primary-foreground/5 border border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/30 px-4 py-3 rounded-sm font-body focus:outline-none focus:border-gold transition-colors"
              />
              <input
                type="email"
                placeholder="Email *"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-primary-foreground/5 border border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/30 px-4 py-3 rounded-sm font-body focus:outline-none focus:border-gold transition-colors"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                type="tel"
                placeholder="Telefono"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="bg-primary-foreground/5 border border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/30 px-4 py-3 rounded-sm font-body focus:outline-none focus:border-gold transition-colors"
              />
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="bg-primary-foreground/5 border border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/30 px-4 py-3 rounded-sm font-body focus:outline-none focus:border-gold transition-colors"
              />
            </div>
            <select
              value={formData.guests}
              onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
              className="w-full bg-primary-foreground/5 border border-primary-foreground/15 text-primary-foreground/60 px-4 py-3 rounded-sm font-body focus:outline-none focus:border-gold transition-colors"
            >
              <option value="">Numero di ospiti</option>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <option key={n} value={n}>{n} {n === 1 ? "persona" : "persone"}</option>
              ))}
              <option value="9+">9+ persone</option>
            </select>
            <textarea
              placeholder="Messaggio o richieste speciali"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-primary-foreground/5 border border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/30 px-4 py-3 rounded-sm font-body focus:outline-none focus:border-gold transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-4 tracking-widest uppercase text-sm font-body hover:bg-primary/80 transition-all duration-300 rounded-sm"
            >
              Invia Prenotazione
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
