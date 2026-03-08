import React from 'react';
import { motion } from 'motion/react';
import AboutImg from '../assets/about.jpg';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-terracotta uppercase tracking-widest text-sm font-bold mb-4 block">
              Our Story
            </span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              A Rustic Haven in the <br />
              Heart of Victoria Island
            </h2>
            <div className="space-y-6 text-ink/70 leading-relaxed text-lg text-justify">
              <p>
                La Taverna Lagos was born from a passion for the simple, honest flavors of the Mediterranean. 
                Inspired by the bustling tavernas of Spain and the cozy trattorias of Italy, we brought a 
                slice of European coastal life to Lagos.
              </p>
              <p>
                Our kitchen is centered around a traditional wood-fired oven and the freshest local ingredients, 
                blended with premium imports to ensure every bite is authentic. Whether it's a casual lunch 
                with friends or a romantic evening under the stars, we provide an atmosphere that feels like home.
              </p>
              <p className="italic font-serif text-ink">
                "Good food, good wine, and the best of company; that is the Mediterranean way."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-4/5 rounded-3xl overflow-hidden shadow-2xl">
              <img src={AboutImg}
                alt="Chef cooking in wood-fired oven"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-terracotta/10 rounded-full -z-10 blur-3xl"></div>
            <div className="absolute -top-8 -right-8 w-64 h-64 bg-olive/10 rounded-full -z-10 blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
