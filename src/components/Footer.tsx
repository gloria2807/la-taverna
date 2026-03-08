import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-ink text-cream py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-bold">
              La Taverna <span className="text-terracotta">Lagos</span>
            </h3>
            <p className="text-cream/60 text-sm leading-relaxed">
              Authentic Mediterranean dining experience in the heart of Lagos. 
              Join us for tacos, pasta, and wood-fired pizzas.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-cream/60">
              <li><a href="#home" className="hover:text-terracotta transition-colors">Home</a></li>
              <li><a href="#menu" className="hover:text-terracotta transition-colors">Our Services</a></li>
              <li><a href="#about" className="hover:text-terracotta transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-terracotta transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-cream/60">
              <li>48 Balarabe Musa Cres, Victoria Island</li>
              <li>Lagos, Nigeria</li>
              <li>+234 908 631 2927</li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Newsletter</h4>
            <p className="text-sm text-cream/60 mb-4">Subscribe for special offers and events.</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Email"
                className="bg-white/10 border border-white/10 rounded-lg px-4 py-2 text-sm outline-none focus:border-terracotta w-full"
              />
              <button className="bg-terracotta px-4 py-2 rounded-lg hover:bg-terracotta/90 transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-sm text-cream/40">
          <p>&copy; {new Date().getFullYear()} La Taverna Lagos. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
