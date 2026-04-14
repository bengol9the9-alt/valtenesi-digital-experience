const MarqueeSection = () => {
  const text = '"serviamo più di un semplice pasto — serviamo esperienze"';
  
  return (
    <section id="marquee" className="py-8 border-y border-border overflow-hidden bg-background">
      <div className="marquee flex whitespace-nowrap">
        {Array.from({ length: 6 }).map((_, i) => (
          <span
            key={i}
            className="font-display italic text-2xl md:text-4xl text-foreground/30 mx-12 flex-shrink-0"
          >
            {text}
          </span>
        ))}
      </div>
    </section>
  );
};

export default MarqueeSection;
