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

  const infoItems = [
    {
      icon: MapPin,
      title: "Indirizzo",
      content: (
        <>Via Pergola, 53<br />25080 Moniga del Garda BS</>
      ),
    },
    {
      icon: Phone,
      title: "Prenotazioni",
      content: <a href="tel:0365511345" className="hover:text-gold transition-colors">0365 511345</a>,
    },
    {
      icon: Clock,
      title: "Orari",
      content: (
        <>Tutti i giorni<br />12:00 – 14:30 / 18:30 – 23:00</>
      ),
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@trattoriavaltenesi.it",
    },
  ];

  return (
    <section id="contact" className="bg-background" ref={ref}>
      {/* Info cards */}
      <div className="section-padding border-b border-border">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-6xl text-foreground">Vieni a Trovarci</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {infoItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <item.icon className="w-6 h-6 text-gold mx-auto mb-4" />
                <h3 className="font-display text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground font-body text-sm">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Map + Form */}
      <div className="section-padding">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-[400px] lg:h-full min-h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2785.1!2d10.5427!3d45.5275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDMxJzM5LjAiTiAxMMKwMzInMzMuNyJF!5e0!3m2!1sit!2sit!4v1600000000000"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg) saturate(0.3)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Posizione Trattoria Pizzeria Valtenesi"
            />
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-5"
          >
            <h3 className="font-display text-2xl text-foreground mb-6">Richiedi una Prenotazione</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Nome *"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-secondary border border-border text-foreground placeholder:text-muted-foreground px-4 py-3 font-body text-sm focus:outline-none focus:border-gold transition-colors"
              />
              <input
                type="email"
                placeholder="Email *"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-secondary border border-border text-foreground placeholder:text-muted-foreground px-4 py-3 font-body text-sm focus:outline-none focus:border-gold transition-colors"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="tel"
                placeholder="Telefono"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="bg-secondary border border-border text-foreground placeholder:text-muted-foreground px-4 py-3 font-body text-sm focus:outline-none focus:border-gold transition-colors"
              />
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="bg-secondary border border-border text-foreground placeholder:text-muted-foreground px-4 py-3 font-body text-sm focus:outline-none focus:border-gold transition-colors"
              />
            </div>
            <select
              value={formData.guests}
              onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
              className="w-full bg-secondary border border-border text-muted-foreground px-4 py-3 font-body text-sm focus:outline-none focus:border-gold transition-colors"
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
              className="w-full bg-secondary border border-border text-foreground placeholder:text-muted-foreground px-4 py-3 font-body text-sm focus:outline-none focus:border-gold transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full bg-foreground text-background py-4 tracking-[0.2em] uppercase text-xs font-bold hover:bg-gold transition-all duration-300"
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
