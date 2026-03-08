import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { NAV_ITEMS } from '../constants';
import logo from '../assets/logo.jpg';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed bg-cream w-full z-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="shrink-0">
            <a href="#home" className="font-serif text-3xl font-bold tracking-tight">
              <img src={logo} alt="La Taverna logo" className="h-10 w-10 inline-block mr-2 rounded-full object-cover" />
              La Taverna <span className="text-terracotta">Lagos</span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-10">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-ink/80 hover:text-terracotta px-3 py-2 text-sm font-medium transition-all hover:scale-105"
                >
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="btn-primary py-2.5 px-8 text-sm shadow-xl shadow-terracotta/20">
                Book a Table
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-terracotta focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cream border-b border-ink/5 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-ink block px-3 py-4 text-base font-medium hover:bg-ink/5"
                >
                  {item.label}
                </a>
              ))}
              <div className="px-3 py-4">
                <a href="#contact" onClick={() => setIsOpen(false)} className="btn-primary block text-center">
                  Book a Table
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
