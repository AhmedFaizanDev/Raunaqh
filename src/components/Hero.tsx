import heroImage from '../assets/hero-luxury.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        />
        <div className="absolute inset-0 bg-background/10" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-up" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
          <h1 className="heading-luxury text-6xl md:text-8xl lg:text-9xl mb-8 tracking-tighter">
            RAUNAQH
          </h1>
        </div>
        
        <div className="animate-fade-up" style={{ animationDelay: '0.6s', opacity: 0, animationFillMode: 'forwards' }}>
          <p className="heading-editorial text-lg md:text-xl lg:text-2xl mb-12 max-w-2xl mx-auto">
          Where Hyderabad’s Urdu legacy meets modern luxury fashion          </p>
        </div>

        <div className="animate-fade-up" style={{ animationDelay: '1s', opacity: 0, animationFillMode: 'forwards' }}>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button className="btn-luxury">
              Explore Collection
            </button>
            <button className="btn-gold">
              Watch Story
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-0.5 h-12 bg-foreground/50"></div>
      </div>
    </section>
  );
};

export default Hero;