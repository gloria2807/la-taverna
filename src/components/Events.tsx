import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Wine, Music } from 'lucide-react';
import { EVENTS } from '../constants';

export const Events = () => {
  const getIcon = (title: string) => {
    if (title.toLowerCase().includes('wine')) return <Wine className="text-terracotta" size={32} />;
    if (title.toLowerCase().includes('jazz') || title.toLowerCase().includes('music')) return <Music className="text-terracotta" size={32} />;
    return <Sparkles className="text-terracotta" size={32} />;
  };

  return (
    <section id="events" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Special Events</h2>
          <div className="w-24 h-1 bg-terracotta mx-auto mb-8"></div>
          <p className="text-ink/60 max-w-2xl mx-auto">
            There is always something happening at La Taverna. Join us for our weekly specials and seasonal celebrations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EVENTS.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="p-8 rounded-3xl bg-cream border border-ink/5 text-center hover:shadow-lg transition-all group"
            >
              <div className="w-full overflow-hidden rounded-xl mb-6">
  <img
    src={event.img}
    alt={event.title}
    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
  />
</div>
             
              <h3 className="text-2xl font-serif mb-2">{event.title}</h3>
              <p className="text-terracotta font-medium text-sm mb-4 uppercase tracking-wider">{event.date}</p>
              <p className="text-ink/60 text-sm leading-relaxed">{event.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
