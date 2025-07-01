const MarqueeText = () => {
  const text = "RAUNAQH — WORLDWIDE SHIPPING — LUXURY FASHION — CRAFTED WITH CULTURE — ";

  return (
    <div className="w-full overflow-hidden bg-foreground text-background py-4 border-y border-grey-light">
      <div className="marquee whitespace-nowrap text-sm tracking-widest uppercase font-medium">
        {Array.from({ length: 10 }, (_, i) => (
          <span key={i} className="inline-block mr-16">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeText;