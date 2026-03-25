const MarqueeBar = () => {
  const items = [
    "🏮 Kwetiau Goreng Singkawang",
    "✦ Choipan",
    "🏮 Bakso Ikan",
    "✦ Fu Yung Hai",
    "🏮 Kodok Goreng Mentega",
    "✦ Ikan Tahu Tausi",
    "🏮 Nasi Campur Hakka",
    "✦ Authentic Singkawang Flavors",
    "🏮 Family Style Dining",
    "✦ Since 1978",
  ];

  const content = items.join("   •   ");

  return (
    <div className="bg-primary overflow-hidden py-3 border-y border-gold/20">
      <div className="flex animate-marquee whitespace-nowrap">
        <span className="text-sm font-body tracking-[0.2em] uppercase text-primary-foreground/90 mx-4">
          {content}
        </span>
        <span className="text-sm font-body tracking-[0.2em] uppercase text-primary-foreground/90 mx-4">
          {content}
        </span>
        <span className="text-sm font-body tracking-[0.2em] uppercase text-primary-foreground/90 mx-4">
          {content}
        </span>
      </div>
    </div>
  );
};

export default MarqueeBar;
