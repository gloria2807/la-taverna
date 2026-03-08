import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GUEST_ITEMS } from '../constants';

const categories = ['All', 'Seafood', 'Cake', 'Meat', 'Drinks'];

export const Guests = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? GUEST_ITEMS 
    : GUEST_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-cream text-justify">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">What Guests Are Saying</h2>
          <div className="w-24 h-1 bg-terracotta mx-auto mb-8"></div>
        </div>

        {/* Guests Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-ink/5"
              >
                <div className="p-6">
                  <h3 className="text-xl font-serif mb-2 group-hover:text-terracotta transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-ink/60 text-sm leading-relaxed">
                    {item.description}
                  </p>
                  <p className="text-sm leading-relaxed">
                    {item.star}
                  </p>
                  <p className="text-ink/60 text-sm leading-relaxed">
                    {item.review}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
