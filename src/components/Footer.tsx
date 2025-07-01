const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-20 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="heading-luxury text-3xl mb-6 tracking-widest">
              RAUNAQH
            </h3>
            <p className="heading-editorial text-background/75 text-lg mb-8 max-w-md">
              Where heritage meets luxury. Discover collections that celebrate 
              the artistry of South Asian craftsmanship.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm tracking-wider uppercase hover:text-accent transition-colors duration-300">
                Instagram
              </a>
              <a href="#" className="text-sm tracking-wider uppercase hover:text-accent transition-colors duration-300">
                Facebook
              </a>
              <a href="#" className="text-sm tracking-wider uppercase hover:text-accent transition-colors duration-300">
                Twitter
              </a>
            </div>
          </div>

          {/* Collections */}
          <div>
            <h4 className="font-medium text-sm tracking-widest uppercase mb-6">
              Collections
            </h4>
            <ul className="space-y-4 text-background/75">
              <li>
                <a href="#" className="hover:text-background transition-colors duration-300">
                  Heritage Collection
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors duration-300">
                  Contemporary Line
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors duration-300">
                  Artisan Series
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors duration-300">
                  Limited Editions
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="font-medium text-sm tracking-widest uppercase mb-6">
              Customer Care
            </h4>
            <ul className="space-y-4 text-background/75">
              <li>
                <a href="#" className="hover:text-background transition-colors duration-300">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors duration-300">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors duration-300">
                  Care Instructions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors duration-300">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/50 text-sm mb-4 md:mb-0">
              © 2024 RAUNAQH. All rights reserved.
            </p>
            <div className="flex space-x-8 text-sm">
              <a href="#" className="text-background/50 hover:text-background transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-background/50 hover:text-background transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;