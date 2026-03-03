"use client";

import { motion } from "framer-motion";
import BlobShape from "@/components/BlobShape";
import Button from "@/components/Button";

export default function PobockyPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-stowlt-light-gray to-white">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <BlobShape
            variant="3"
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
              Pobočky
            </h1>
            <p className="text-base sm:text-xl text-stowlt-gray">
              Navštivte nás v srdci Olomouce. Jsme snadno dostupní a vždy
              připraveni vám pomoci.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Location Card */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-start">
            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative aspect-square lg:aspect-[4/3] bg-stowlt-light-gray rounded-3xl overflow-hidden"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-stowlt-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-10 h-10 text-stowlt-blue"
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
                  <p className="text-stowlt-gray">
                    Interaktivní mapa
                    <br />
                    <span className="text-sm">(bude brzy k dispozici)</span>
                  </p>
                </div>
              </div>
              {/* Decorative blob */}
              <BlobShape
                variant="2"
                className="absolute -bottom-20 -right-20 w-[300px] h-[300px] opacity-20"
                color="var(--stowlt-blue)"
              />
            </motion.div>

            {/* Location Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-3xl p-5 sm:p-6 lg:p-8 shadow-lg border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-stowlt-orange/10 rounded-2xl flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-stowlt-orange"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-stowlt-dark">
                      Stowlt Olomouc
                    </h2>
                    <p className="text-stowlt-gray">Hlavní pobočka</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-stowlt-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-stowlt-blue"
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
                        Průmyslová 123
                        <br />
                        779 00 Olomouc
                        <br />
                        Česká republika
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-stowlt-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-stowlt-blue"
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
                        className="text-stowlt-orange hover:underline"
                      >
                        +420 111 222 333
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-stowlt-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-stowlt-blue"
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
                        className="text-stowlt-orange hover:underline"
                      >
                        contact@stowlt.cz
                      </a>
                    </div>
                  </div>

                  {/* Opening Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-stowlt-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-stowlt-blue"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-stowlt-dark mb-1">
                        Otevírací doba kanceláře
                      </h3>
                      <div className="text-stowlt-gray space-y-1">
                        <p>Po - Pá: 8:00 - 18:00</p>
                        <p>So: 9:00 - 12:00</p>
                        <p>Ne: Zavřeno</p>
                      </div>
                      <p className="text-sm text-stowlt-orange mt-2 font-medium">
                        Přístup k jednotkám 24/7
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <Button href="/kontakt" className="w-full">
                    Domluvit prohlídku
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-stowlt-light-gray relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <BlobShape
            variant="1"
            className="absolute -top-40 -left-40 w-[400px] h-[400px] opacity-10"
            color="var(--stowlt-blue)"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-stowlt-dark mb-4">
              Co u nás najdete
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🚗",
                title: "Parkování zdarma",
                description: "Prostorné parkoviště přímo u vchodu",
              },
              {
                icon: "🛒",
                title: "Vozíky k dispozici",
                description: "Usnadníme vám nakládání a vykládání",
              },
              {
                icon: "🔐",
                title: "Zabezpečený areál",
                description: "Kamerový systém a elektronický přístup",
              },
              {
                icon: "♿",
                title: "Bezbariérový přístup",
                description: "Přístupné pro všechny zákazníky",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 text-center shadow-sm"
              >
                <span className="text-4xl mb-4 block">{feature.icon}</span>
                <h3 className="font-semibold text-stowlt-dark mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-stowlt-gray">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-stowlt-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Přijeďte se podívat
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Rádi vás provedeme naším centrem a pomůžeme vám vybrat ideální
              jednotku.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/kontakt" size="lg">
                Domluvit prohlídku
              </Button>
              <a
                href="tel:+420111222333"
                className="inline-flex items-center justify-center font-medium transition-all duration-300 ease-out px-8 py-4 text-lg rounded-3xl border-2 border-white text-white hover:bg-white hover:text-stowlt-dark hover:scale-105"
              >
                Zavolat nyní
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
