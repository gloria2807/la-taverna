import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import heroImg from '../assets/heroimg.png';
import { FaWhatsapp } from 'react-icons/fa';

export const Hero = () => {
  const [heroData, setHeroData] = useState<any>(null);

  useEffect(() => {
    fetch('/api/hero')
      .then(res => res.json())
      .then(data => setHeroData(data));
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden bg-cream pt-20 pb-8">
      <div className="relative z-10 text-center md:text-left px-4 max-w-2xl md:ml-12 lg:ml-24">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/*<span className="text-terracotta uppercase tracking-[0.3em] text-sm font-bold mb-4 block">
            {heroData?.subtitle || 'Authentic Mediterranean Flavors'}
          </span>*/}
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-ink font-serif mb-8 mt-8 leading-tight">
            {heroData?.title?.includes('Mediterranean') ? (
              <>
                {heroData.title.split('Mediterranean')[0]}
                <span className="italic text-terracotta">Mediterranean</span>
                {heroData.title.split('Mediterranean')[1]}
              </>
            ) : (
              heroData?.title || 'A Taste of the Mediterranean in Lagos'
            )}
          </h1>
          <p className="text-ink/70 text-lg md:text-xl mb-10 max-w-xl font-light leading-relaxed">
            {heroData?.description || 'Experience the warmth of rustic dining in the heart of Victoria Island.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#menu" className="btn-primary">
              {heroData?.button_text || 'Explore Menu'}
            </a>
            <a href="#contact" className="btn-secondary">
              Book a Table
            </a>
          </div>
        </motion.div>
      </div>

       <div className='flex flex-col justify-center'>
                <img src={heroImg} alt='' className='animate-spin-slow img-shadow w-125 mx-auto'/>
            </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-ink/20 hidden md:block"
      >
        <div className="w-px h-12 bg-ink/20 mx-auto"></div>
      </motion.div>
      <div className='text-3xl text-white fixed bottom-10 right-10 hover:rotate-360 duration-500 z-99999 mix-blend-difference'>
        <a href="https://wa.me/2349042664096"
                target="_blank"
                rel="noopener noreferrer" >
            <FaWhatsapp />
        </a>
       </div>
    </section>
  );
};
