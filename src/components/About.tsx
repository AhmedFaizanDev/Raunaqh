const About = () => {
  return (
    <section id="about" className="py-32 px-6 bg-card">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <div className="animate-fade-up">
            <div className="mb-8">
              <span className="text-sm tracking-widest uppercase text-accent font-medium">
                Our Heritage
              </span>
            </div>
            
            <h2 className="heading-luxury text-4xl md:text-5xl lg:text-6xl mb-8 tracking-tighter">
              Crafted with Culture
            </h2>
            
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
              Raunaqh is an embodiment of Hyderabad’s timeless Urdu legacy, reimagined through the lens of contemporary luxury fashion. Every piece is a reflection of poetic elegance, a dialogue between heritage and modernity.
              </p>
              
              <p>
              Rooted in the soul of Hyderabad, a city of Nizami grandeur, lyrical culture, and rich artisanal history, Raunaqh creates garments that transcend seasons and fleeting trends. From the finest fabrics to the most intricate detailing, every element is meticulously curated, honoring the past while dressing the present.
              </p>

              <p>This is more than fashion.
It’s tehzeeb stitched into fabric.
It’s legacy made wearable.
It’s Raunaqh.</p>
            </div>

            <div className="mt-12">
              <button className="btn-gold">
                Our Story
              </button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="animate-fade-up" style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}>
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-gold rounded-none p-8">
                <div className="w-full h-full border border-background/30 flex items-center justify-center">
                  <div className="text-center text-background">
                    <div className="w-16 h-16 border border-background/50 mx-auto mb-6"></div>
                    <p className="text-sm tracking-widest uppercase font-medium">
                    Stitched in Hyderabad’s Tehzeeb
                    </p>
                    <p className="text-xs tracking-wider mt-2 opacity-75">
                    Hunar • Quality • Excellence
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;