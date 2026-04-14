const Footer = () => (
  <footer className="bg-background border-t border-border py-16 px-6">
    <div className="container mx-auto">
      <div className="text-center">
        <p className="font-display text-3xl text-foreground mb-2">
          Trattoria <span className="text-gold italic">Valtenesi</span>
        </p>
        <p className="text-muted-foreground font-body text-sm mb-8 max-w-md mx-auto">
          Via Pergola, 53 — 25080 Moniga del Garda BS — Tel. 0365 511345
        </p>
        <div className="flex flex-wrap justify-center gap-8 mb-10">
          {[
            { label: "Home", href: "#home" },
            { label: "Chi Siamo", href: "#about" },
            { label: "Menu", href: "#menu" },
            { label: "Galleria", href: "#gallery" },
            { label: "Contatti", href: "#contact" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-muted-foreground hover:text-gold text-xs tracking-[0.2em] uppercase font-body font-bold transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="border-t border-border pt-8">
          <p className="text-muted-foreground/50 text-xs font-body">
            © {new Date().getFullYear()} Trattoria Pizzeria Valtenesi. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
