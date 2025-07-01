import product1 from '../assets/product-1.jpg';
import product2 from '../assets/product-2.jpg';
import product3 from '../assets/product-3.jpg';

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      title: "Heritage Collection",
      subtitle: "Timeless Elegance",
      image: product1,
      delay: "0.2s"
    },
    {
      id: 2,
      title: "Contemporary Line",
      subtitle: "Modern Sophistication",
      image: product2,
      delay: "0.4s"
    },
    {
      id: 3,
      title: "Artisan Series",
      subtitle: "Handcrafted Excellence",
      image: product3,
      delay: "0.6s"
    }
  ];

  return (
    <section id="collections" className="py-32 px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-up">
          <h2 className="heading-luxury text-5xl md:text-6xl mb-6 tracking-tighter">
            Collections
          </h2>
          <p className="heading-editorial text-lg md:text-xl max-w-2xl mx-auto">
            Curated pieces that weave together Urdu heritage and contemporary craftsmanship.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {products.map((product) => (
            <div 
              key={product.id}
              className="group cursor-pointer animate-fade-up"
              style={{ 
                animationDelay: product.delay, 
                opacity: 0, 
                animationFillMode: 'forwards' 
              }}
            >
              {/* Product Image */}
              <div className="relative overflow-hidden mb-6 aspect-square">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500" />
                
                {/* Hover CTA */}
                <div className="absolute bottom-6 left-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <button className="btn-luxury text-xs px-6 py-2">
                    View Collection
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="text-center">
                <h3 className="heading-luxury text-xl mb-2 tracking-wide">
                  {product.title}
                </h3>
                <p className="heading-editorial text-muted-foreground">
                  {product.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;