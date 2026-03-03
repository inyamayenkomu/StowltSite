"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import BlobShape from "@/components/BlobShape";
import Button from "@/components/Button";
import Map from "@/components/Map";

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    jmeno: "",
    email: "",
    telefon: "",
    zprava: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-stowlt-light-gray to-white">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <BlobShape
            variant="4"
            className="absolute -top-40 -right-40 w-[500px] h-[500px] opacity-15"
            color="var(--stowlt-blue)"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-stowlt-dark mb-6">
              Kontakt
            </h1>
            <p className="text-base sm:text-xl text-stowlt-gray">
              Máte dotaz nebo chcete rezervovat úložný prostor? Ozvěte se nám -
              rádi vám pomůžeme.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-stowlt-dark mb-6">
                Napište nám
              </h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-3xl p-5 sm:p-6 lg:p-8 text-center"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">
                    Zpráva odeslána!
                  </h3>
                  <p className="text-green-700">
                    Děkujeme za vaši zprávu. Ozveme se vám co nejdříve.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="jmeno"
                      className="block text-sm font-medium text-stowlt-dark mb-2"
                    >
                      Jméno a příjmení *
                    </label>
                    <input
                      type="text"
                      id="jmeno"
                      name="jmeno"
                      required
                      value={formData.jmeno}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-stowlt-orange focus:ring-2 focus:ring-stowlt-orange/20 outline-none transition-all"
                      placeholder="Jan Novák"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-stowlt-dark mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-stowlt-orange focus:ring-2 focus:ring-stowlt-orange/20 outline-none transition-all"
                      placeholder="jan@email.cz"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="telefon"
                      className="block text-sm font-medium text-stowlt-dark mb-2"
                    >
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="telefon"
                      name="telefon"
                      value={formData.telefon}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-stowlt-orange focus:ring-2 focus:ring-stowlt-orange/20 outline-none transition-all"
                      placeholder="+420 123 456 789"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="zprava"
                      className="block text-sm font-medium text-stowlt-dark mb-2"
                    >
                      Zpráva *
                    </label>
                    <textarea
                      id="zprava"
                      name="zprava"
                      required
                      rows={5}
                      value={formData.zprava}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-stowlt-orange focus:ring-2 focus:ring-stowlt-orange/20 outline-none transition-all resize-none"
                      placeholder="Jak vám můžeme pomoci?"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Odeslat zprávu
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-2xl font-bold text-stowlt-dark mb-6">
                Kontaktní údaje
              </h2>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4 p-6 bg-stowlt-light-gray rounded-2xl">
                  <div className="w-12 h-12 bg-stowlt-orange/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-stowlt-orange"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-stowlt-dark mb-1">
                      Telefon
                    </h3>
                    <a
                      href="tel:+420111222333"
                      className="text-lg text-stowlt-orange hover:underline"
                    >
                      +420 111 222 333
                    </a>
                    <p className="text-sm text-stowlt-gray mt-1">
                      Po - Pá: 8:00 - 18:00
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-6 bg-stowlt-light-gray rounded-2xl">
                  <div className="w-12 h-12 bg-stowlt-orange/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-stowlt-orange"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-stowlt-dark mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:contact@stowlt.cz"
                      className="text-lg text-stowlt-orange hover:underline"
                    >
                      contact@stowlt.cz
                    </a>
                    <p className="text-sm text-stowlt-gray mt-1">
                      Odpovídáme do 24 hodin
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 p-6 bg-stowlt-light-gray rounded-2xl">
                  <div className="w-12 h-12 bg-stowlt-orange/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-stowlt-orange"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-stowlt-dark mb-1">
                      Adresa
                    </h3>
                    <p className="text-stowlt-gray">
                      Tomkova 45/314
                      <br />
                      779 00 Olomouc
                      <br />
                      Česká republika
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Access */}
              <div className="bg-gradient-to-br from-stowlt-blue to-stowlt-blue-dark rounded-3xl p-5 sm:p-6 lg:p-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <BlobShape
                    variant="2"
                    className="absolute -bottom-20 -right-20 w-[200px] h-[200px] opacity-20"
                    color="white"
                  />
                </div>
                <div className="relative">
                  <h3 className="text-xl font-semibold mb-3">
                    Přístup k jednotkám
                  </h3>
                  <p className="text-white/80 mb-4">
                    Naši zákazníci mají přístup ke svým jednotkám kdykoliv -
                    24 hodin denně, 7 dní v týdnu.
                  </p>
                  <div className="flex items-center gap-2 text-stowlt-orange-light font-medium">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    24/7 přístup
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Map */}
      <section className="h-64 sm:h-80 lg:h-96 relative">
        <Map />
      </section>
    </div>
  );
}
