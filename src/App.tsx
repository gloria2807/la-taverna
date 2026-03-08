import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { About } from './components/About';
import { Events } from './components/Events';
import { Guests } from './components/Guests';
import { Photos } from './components/Photos';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <MenuSection />
        <Events />
        <Guests />
        <Photos />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
