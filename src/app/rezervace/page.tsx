"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import BlobShape from "@/components/BlobShape";
import Button from "@/components/Button";

const storageSizes = [
  { id: "male", name: "Malé", size: "1-2 m²", price: "490 Kč/měsíc" },
  { id: "stredni", name: "Střední", size: "3-5 m²", price: "890 Kč/měsíc" },
  { id: "velke", name: "Velké", size: "6-10 m²", price: "1 490 Kč/měsíc" },
  { id: "xl", name: "XL", size: "11-20 m²", price: "2 490 Kč/měsíc" },
];

export default function RezervacePage() {
  const [formData, setFormData] = useState({
    jmeno: "",
    email: "",
    telefon: "",
    velikost: "",
    datum: "",
    poznamka: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-stowlt-orange/10 to-white">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <BlobShape
            variant="2"
            className="absolute -top-40 -right-40 w-[500px] h-[500px] opacity-15"
            color="var(--stowlt-orange)"
          />
          <BlobShape
            variant="3"
            className="absolute -bottom-40 -left-40 w-[400px] h-[400px] opacity-10"
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
              Rezervace
            </h1>
            <p className="text-base sm:text-xl text-stowlt-gray">
              Vyberte si velikost úložného prostoru a rezervujte si svou kóji.
              Ozveme se vám do 24 hodin.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-6 lg:gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
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
                  <h3 className="text-2xl font-bold text-green-800 mb-2">
                    Rezervace přijata!
                  </h3>
                  <p className="text-green-700">
                    Děkujeme za váš zájem. Ozveme se vám do 24 hodin s potvrzením
                    a dalšími kroky.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="text-2xl font-bold text-stowlt-dark mb-6">
                    Rezervační formulář
                  </h2>

                  {/* Storage Size Selection */}
                  <div>
                    <label className="block text-sm font-medium text-stowlt-dark mb-3">
                      Velikost kóje *
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {storageSizes.map((size) => (
                        <label
                          key={size.id}
                          className={`relative flex flex-col p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                            formData.velikost === size.id
                              ? "border-stowlt-orange bg-stowlt-orange/5"
                              : "border-gray-200 hover:border-stowlt-orange/50"
                          }`}
                        >
                          <input
                            type="radio"
                            name="velikost"
                            value={size.id}
                            checked={formData.velikost === size.id}
                            onChange={handleChange}
                            className="sr-only"
                            required
                          />
                          <span className="font-semibold text-stowlt-dark">
                            {size.name}
                          </span>
                          <span className="text-sm text-stowlt-gray">
                            {size.size}
                          </span>
                          <span className="text-sm font-medium text-stowlt-orange mt-1">
                            {size.price}
                          </span>
                          {formData.velikost === size.id && (
                            <div className="absolute top-2 right-2 w-5 h-5 bg-stowlt-orange rounded-full flex items-center justify-center">
                              <svg
                                className="w-3 h-3 text-white"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          )}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Preferred Start Date */}
                  <div>
                    <label
                      htmlFor="datum"
                      className="block text-sm font-medium text-stowlt-dark mb-2"
                    >
                      Preferovaný začátek
                    </label>
                    <input
                      type="date"
                      id="datum"
                      name="datum"
                      value={formData.datum}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-stowlt-orange focus:ring-2 focus:ring-stowlt-orange/20 outline-none transition-all"
                    />
                  </div>

                  {/* Contact Details */}
                  <div className="grid sm:grid-cols-2 gap-4">
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
                        value={formData.jmeno}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-stowlt-orange focus:ring-2 focus:ring-stowlt-orange/20 outline-none transition-all"
                        placeholder="Jan Novák"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="telefon"
                        className="block text-sm font-medium text-stowlt-dark mb-2"
                      >
                        Telefon *
                      </label>
                      <input
                        type="tel"
                        id="telefon"
                        name="telefon"
                        value={formData.telefon}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-stowlt-orange focus:ring-2 focus:ring-stowlt-orange/20 outline-none transition-all"
                        placeholder="+420 123 456 789"
                      />
                    </div>
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
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-stowlt-orange focus:ring-2 focus:ring-stowlt-orange/20 outline-none transition-all"
                      placeholder="jan@email.cz"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="poznamka"
                      className="block text-sm font-medium text-stowlt-dark mb-2"
                    >
                      Poznámka
                    </label>
                    <textarea
                      id="poznamka"
                      name="poznamka"
                      value={formData.poznamka}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:border-stowlt-orange focus:ring-2 focus:ring-stowlt-orange/20 outline-none transition-all resize-none"
                      placeholder="Máte nějaké speciální požadavky?"
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Odeslat rezervaci
                  </Button>

                  <p className="text-sm text-stowlt-gray text-center">
                    Odesláním souhlasíte se zpracováním osobních údajů.
                  </p>
                </form>
              )}
            </motion.div>

            {/* Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6 order-first lg:order-last"
            >
              <div className="bg-stowlt-light-gray rounded-3xl p-4 sm:p-6">
                <h3 className="font-semibold text-stowlt-dark mb-4">
                  Co bude následovat?
                </h3>
                <ul className="space-y-3">
                  {[
                    "Ozveme se vám do 24 hodin",
                    "Domluvíme prohlídku prostoru",
                    "Podepíšeme smlouvu",
                    "Získáte přístupovou kartu",
                  ].map((step, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-stowlt-orange text-white rounded-full flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </div>
                      <span className="text-sm text-stowlt-gray">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-stowlt-blue/10 rounded-3xl p-4 sm:p-6">
                <h3 className="font-semibold text-stowlt-dark mb-2">
                  Akce pro nové zákazníky
                </h3>
                <p className="text-stowlt-gray text-sm mb-3">
                  První měsíc se slevou 50% pro všechny nové zákazníky!
                </p>
                <div className="text-2xl font-bold text-stowlt-orange">
                  -50%
                </div>
              </div>

              <div className="bg-white rounded-3xl p-4 sm:p-6 border border-gray-100">
                <h3 className="font-semibold text-stowlt-dark mb-3">
                  Potřebujete pomoct?
                </h3>
                <p className="text-sm text-stowlt-gray mb-4">
                  Zavolejte nám a rádi vám poradíme s výběrem správné velikosti.
                </p>
                <a
                  href="tel:+420111222333"
                  className="flex items-center gap-2 text-stowlt-orange font-medium hover:text-stowlt-orange-dark transition-colors"
                >
                  <svg
                    className="w-5 h-5"
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
                  +420 111 222 333
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
