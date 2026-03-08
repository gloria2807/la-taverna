import React, { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, MessageCircle, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { FaWhatsapp } from 'react-icons/fa';

export const Contact = () => {
  const [contactData, setContactData] = useState<any>(null);

  useEffect(() => {
    fetch('/api/contact')
      .then(res => res.json())
      .then(data => setContactData(data));
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const date = (form.elements.namedItem("date") as HTMLInputElement).value;
    const time = (form.elements.namedItem("time") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const text = `Reservation Request - La Taverna

Name: ${name}
Email: ${email}
Date: ${date}
Time: ${time}

Message:
${message}`;

    const whatsappURL = `https://wa.me/2349086312927?text=${encodeURIComponent(text)}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Reservations & Contact</h2>
          <div className="w-24 h-1 bg-terracotta mx-auto mb-8"></div>
          <p className="text-ink/60 max-w-2xl mx-auto">
            Planning a special evening? Book your table or get in touch with our team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-ink/5"
          >

            <form className="space-y-6" onSubmit={handleSubmit}>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-ink/70 mb-2">Full Name</label>
                  <input
                    name="name"
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-ink/10 focus:border-terracotta focus:ring-1 focus:ring-terracotta outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-ink/70 mb-2">Email Address</label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-ink/10 focus:border-terracotta focus:ring-1 focus:ring-terracotta outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-ink/70 mb-2">Date</label>
                  <input
                    name="date"
                    type="date"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-ink/10 focus:border-terracotta focus:ring-1 focus:ring-terracotta outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-ink/70 mb-2">Time</label>
                  <input
                    name="time"
                    type="time"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-ink/10 focus:border-terracotta focus:ring-1 focus:ring-terracotta outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-ink/70 mb-2">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-ink/10 focus:border-terracotta focus:ring-1 focus:ring-terracotta outline-none transition-all"
                  placeholder="Book a table..."
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full py-4">
                Submit
              </button>

            </form>
          </motion.div>

          {/* Info & Map */}
           <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-ink/5">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-terracotta/10 rounded-full flex items-center justify-center text-terracotta">
                    <MapPin size={20} />
                  </div>
                  <h3 className="font-serif text-lg">Location</h3>
                </div>
                <p className="text-ink/60 text-sm">
                  {contactData?.address || '48 Balarabe Musa Cres, Victoria Island, Lagos, Nigeria'}
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-ink/5">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-terracotta/10 rounded-full flex items-center justify-center text-terracotta">
                    <Clock size={20} />
                  </div>
                  <h3 className="font-serif text-lg">Hours</h3>
                </div>
                <p className="text-ink/60 text-sm">
                  Open daily • 11:30 am–11:00 pm <br />
                  Closes 10:30 pm on Monday & Sunday
                </p>
              </div>
            </div>

            {/* Embedded Map Placeholder */}
            <div className="w-full h-64 rounded-3xl overflow-hidden shadow-sm border border-ink/5 grayscale hover:grayscale-0 transition-all duration-700">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.728362678688!2d3.4284!3d6.43!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8ad0!2sVictoria%20Island%2C%20Lagos!5e0!3m2!1sen!2sng!4v1620000000000!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>


            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start gap-6">
              <a href="https://www.instagram.com/la_taverna_lagos/" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-ink hover:bg-terracotta hover:text-white transition-all shadow-sm">
                <Instagram size={24} />
              </a>

              <a href="https://web.facebook.com/latavernalagos" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-ink hover:bg-terracotta hover:text-white transition-all shadow-sm">
                <Facebook size={24} />
              </a>

              <a
                href="https://wa.me/2349042664096"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-ink hover:bg-terracotta hover:text-white transition-all shadow-sm"
              >
                <FaWhatsapp size={24}/>
              </a>

              <a href="tel:09042664096" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-ink hover:bg-terracotta hover:text-white transition-all shadow-sm">
                <Phone size={24} />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};