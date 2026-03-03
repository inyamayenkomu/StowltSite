"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/Button";
import BlobShape from "@/components/BlobShape";

const features = [
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    ),
    title: "Bezpečnost 24/7",
    description:
      "Váš majetek je pod neustálým dohledem kamerového systému a zabezpečeným přístupem.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "Sezónní úložiště",
    description:
      "Lyže, kola, nafukovací bazény - vše co doma překáží, u nás bezpečně uložíte.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Kamerový systém",
    description:
      "Moderní CCTV monitoring zajišťuje, že máte vždy přehled o svých věcech.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
        />
      </svg>
    ),
    title: "Flexibilní velikosti",
    description:
      "Od malých kójí až po prostorné jednotky - platíte jen za prostor, který potřebujete.",
  },
];

const steps = [
  {
    number: "1",
    title: "Vyberte velikost",
    description: "Zvolte si kóji podle vašich potřeb - od 1m² až po 20m².",
  },
  {
    number: "2",
    title: "Rezervujte online",
    description: "Snadná rezervace přes web nebo telefonicky.",
  },
  {
    number: "3",
    title: "Začněte ukládat",
    description: "Získejte přístup a začněte ihned využívat váš prostor.",
  },
];

const testimonials = [
  {
    name: "Petra Nováková",
    role: "Olomouc",
    quote:
      "Konečně mám doma prostor! Všechny naše lyže a kola jsou bezpečně uložené a já mám volný balkon.",
    image: "/review-female-1.png",
  },
  {
    name: "Martin Svoboda",
    role: "Olomouc",
    quote:
      "Skvělá služba pro naši rodinu. Profesionální přístup a hlavně bezpečno. Doporučuji všem!",
    image: "/review-male.png",
  },
  {
    name: "Jana Dvořáková",
    role: "Olomouc",
    quote:
      "Stěhovali jsme se a potřebovali dočasné úložiště. Stowlt nám to perfektně vyřešil.",
    image: "/review-female-2.png",
  },
];

const trustItems = [
  { icon: "🔒", text: "Zabezpečený přístup" },
  { icon: "📹", text: "24/7 Kamerový systém" },
  { icon: "🏠", text: "Lokální firma" },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* Background Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <BlobShape
            variant="1"
            className="absolute -top-20 -right-40 w-[600px] h-[600px] opacity-20"
            color="var(--stowlt-blue)"
          />
          <BlobShape
            variant="2"
            className="absolute -bottom-40 -left-40 w-[500px] h-[500px] opacity-15"
            color="var(--stowlt-blue)"
          />
          <BlobShape
            variant="3"
            className="absolute top-1/2 right-1/4 w-[300px] h-[300px] opacity-10"
            color="var(--stowlt-orange)"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stowlt-dark leading-tight mb-6">
                Uložte věci chytře.{" "}
                <span className="text-stowlt-orange">Bezpečně.</span>{" "}
                <span className="text-stowlt-blue">Lokálně.</span>
              </h1>
              <p className="text-base sm:text-xl text-stowlt-gray mb-8 max-w-lg">
                Moderní a bezpečné úložné prostory přímo v Olomouci. Ideální
                řešení pro rodiny, které potřebují více místa doma.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button href="/cenik" size="lg">
                  Zobrazit ceník
                </Button>
                <Button href="/kontakt" variant="outline" size="lg">
                  Kontaktujte nás
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <BlobShape
                  variant="4"
                  className="absolute inset-0 w-full h-full"
                  color="var(--stowlt-blue)"
                  animate={true}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <div className="text-6xl font-bold mb-2">24/7</div>
                    <div className="text-xl">Bezpečný přístup</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-stowlt-light-gray py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 md:gap-16">
            {trustItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 text-stowlt-dark"
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="font-medium">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <BlobShape
            variant="2"
            className="absolute top-0 -left-60 w-[400px] h-[400px] opacity-10"
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
              Proč si vybrat Stowlt?
            </h2>
            <p className="text-base sm:text-xl text-stowlt-gray max-w-2xl mx-auto">
              Nabízíme moderní řešení pro rodiny, které potřebují více prostoru.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-5 sm:p-6 lg:p-8 shadow-lg shadow-gray-100 hover:shadow-xl transition-shadow duration-300 border border-gray-50"
              >
                <div className="w-14 h-14 bg-stowlt-orange/10 rounded-2xl flex items-center justify-center text-stowlt-orange mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-stowlt-dark mb-3">
                  {feature.title}
                </h3>
                <p className="text-stowlt-gray">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-stowlt-light-gray relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <BlobShape
            variant="1"
            className="absolute -bottom-40 -right-40 w-[500px] h-[500px] opacity-10"
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
              Jak to funguje?
            </h2>
            <p className="text-base sm:text-xl text-stowlt-gray max-w-2xl mx-auto">
              Tři jednoduché kroky k vašemu novému úložnému prostoru.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative text-center"
              >
                <div className="w-16 h-16 bg-stowlt-orange text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg shadow-stowlt-orange/30">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-stowlt-dark mb-3">
                  {step.title}
                </h3>
                <p className="text-stowlt-gray">{step.description}</p>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-stowlt-orange/50 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-stowlt-dark mb-4">
              Co říkají naši zákazníci
            </h2>
            <p className="text-base sm:text-xl text-stowlt-gray max-w-2xl mx-auto">
              Spokojení zákazníci jsou naší nejlepší vizitkou.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-5 sm:p-6 lg:p-8 shadow-lg border border-gray-100 h-full flex flex-col"
              >
                <div className="flex items-center gap-1 text-stowlt-orange mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-stowlt-gray mb-6 italic flex-grow">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="mt-auto flex items-center gap-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={56}
                    height={56}
                    className="rounded-full object-cover object-top w-14 h-14"
                  />
                  <div>
                    <div className="font-semibold text-stowlt-dark">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-stowlt-gray">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-stowlt-blue to-stowlt-blue-dark relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <BlobShape
            variant="3"
            className="absolute -top-40 -left-40 w-[400px] h-[400px] opacity-20"
            color="white"
          />
          <BlobShape
            variant="1"
            className="absolute -bottom-40 -right-40 w-[500px] h-[500px] opacity-10"
            color="white"
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Připraveni na více prostoru doma?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Rezervujte si svůj úložný prostor ještě dnes. První měsíc se slevou
              pro nové zákazníky.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Button href="/cenik" size="lg">
                Zobrazit ceník
              </Button>
              <a
                href="/kontakt"
                className="inline-flex items-center justify-center font-medium transition-all duration-300 ease-out px-8 py-4 text-lg rounded-3xl border-2 border-white text-white hover:bg-white hover:text-stowlt-dark hover:scale-105"
              >
                Kontaktujte nás
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
