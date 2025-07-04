import Header from '../components/Header';
import Hero from '../components/Hero';
import MarqueeText from '../components/MarqueeText';
import ProductGrid from '../components/ProductGrid';
import About from '../components/About';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <MarqueeText />
      <ProductGrid />
      <About />
      <Footer />
    </div>
  );
};

export default Index;
