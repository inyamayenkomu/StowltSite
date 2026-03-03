"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BlobShape from "@/components/BlobShape";
import Button from "@/components/Button";

const pricingPlans = [
  {
    id: "male-koje",
    name: "Malé",
    size: "1-2 m²",
    price: "490",
    description: "Ideální pro krabice, sezónní oblečení nebo menší sportovní vybavení.",
    features: [
      "24/7 přístup",
      "Kamerový systém",
      "Pojištění v ceně",
      "Bez dlouhodobého závazku",
    ],
    popular: false,
  },
  {
    id: "stredni-koje",
    name: "Střední",
    size: "3-5 m²",
    price: "890",
    description: "Vhodné pro nábytek, kola nebo větší množství věcí.",
    features: [
      "24/7 přístup",
      "Kamerový systém",
      "Pojištění v ceně",
      "Bez dlouhodobého závazku",
      "Vlastní zámek",
    ],
    popular: true,
  },
  {
    id: "velke-koje",
    name: "Velké",
    size: "6-10 m²",
    price: "1 490",
    description: "Pro stěhování, rekonstrukce nebo dlouhodobé skladování.",
    features: [
      "24/7 přístup",
      "Kamerový systém",
      "Pojištění v ceně",
      "Bez dlouhodobého závazku",
      "Vlastní zámek",
      "Vozíky k dispozici",
    ],
    popular: false,
  },
  {
    id: "xl-koje",
    name: "XL",
    size: "11-20 m²",
    price: "2 490",
    description: "Maximální prostor pro firmy nebo velké projekty.",
    features: [
      "24/7 přístup",
      "Kamerový systém",
      "Pojištění v ceně",
      "Bez dlouhodobého závazku",
      "Vlastní zámek",
      "Vozíky k dispozici",
      "Prioritní podpora",
    ],
    popular: false,
  },
];

const faqs = [
  {
    question: "Jak dlouhá je minimální doba pronájmu?",
    answer:
      "Minimální doba pronájmu je 1 měsíc. Můžete kdykoliv ukončit bez sankcí s měsíční výpovědní lhůtou.",
  },
  {
    question: "Co všechno mohu skladovat?",
    answer:
      "Můžete skladovat prakticky cokoliv - nábytek, oblečení, sportovní vybavení, knihy, elektroniku. Výjimkou jsou nebezpečné látky, potraviny a živá zvířata.",
  },
  {
    question: "Jak je zajištěna bezpečnost?",
    answer:
      "Naše centrum je vybaveno 24/7 kamerovým systémem, elektronickým přístupem a alarm systémem. Každá jednotka má vlastní zámek.",
  },
  {
    question: "Mohu svou jednotku navštívit kdykoliv?",
    answer:
      "Ano, máte přístup ke své jednotce 24 hodin denně, 7 dní v týdnu prostřednictvím elektronické karty.",
  },
];

export default function CenikPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-stowlt-light-gray to-white">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <BlobShape
            variant="1"
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
              Ceník
            </h1>
            <p className="text-base sm:text-xl text-stowlt-gray mb-6">
              Transparentní ceny bez skrytých poplatků. Platíte pouze za prostor,
              který potřebujete.
            </p>
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Bez skrytých poplatků
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section id="ceny" className="py-24 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                id={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white rounded-3xl p-5 sm:p-6 lg:p-8 shadow-lg border-2 h-full flex flex-col scroll-mt-24 ${
                  plan.popular
                    ? "border-stowlt-orange"
                    : "border-gray-100"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-stowlt-orange text-white px-4 py-1 rounded-full text-sm font-medium">
                    Nejoblíbenější
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-stowlt-dark mb-2">
                    {plan.name}
                  </h3>
                  <div className="text-stowlt-gray mb-4">{plan.size}</div>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-stowlt-dark">
                      {plan.price}
                    </span>
                    <span className="text-stowlt-gray">Kč/měsíc</span>
                  </div>
                </div>

                <p className="text-stowlt-gray text-center mb-6 text-sm">
                  {plan.description}
                </p>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-3 text-sm text-stowlt-gray"
                    >
                      <svg
                        className="w-5 h-5 text-stowlt-orange flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  href="/rezervace"
                  variant={plan.popular ? "primary" : "outline"}
                  className="w-full mt-auto"
                >
                  Rezervovat
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 bg-stowlt-light-gray relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <BlobShape
            variant="2"
            className="absolute -bottom-40 -right-40 w-[400px] h-[400px] opacity-10"
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
              Co je zahrnuto v ceně
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                icon: "🔐",
                title: "Zabezpečený přístup",
                description: "Elektronická karta pro vstup 24/7",
              },
              {
                icon: "📹",
                title: "Kamerový systém",
                description: "Nepřetržitý monitoring celého areálu",
              },
              {
                icon: "🛡️",
                title: "Pojištění",
                description: "Základní pojištění obsahu v ceně",
              },
              {
                icon: "🛒",
                title: "Vozíky k dispozici",
                description: "Usnadníme vám nakládání a vykládání",
              },
              {
                icon: "🧹",
                title: "Čisté prostory",
                description: "Pravidelně udržované a čisté jednotky",
              },
              {
                icon: "📞",
                title: "Zákaznická podpora",
                description: "Vždy připraveni vám pomoci",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 sm:gap-4 bg-white rounded-2xl p-4 sm:p-6 shadow-sm"
              >
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <h3 className="font-semibold text-stowlt-dark mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-stowlt-gray">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-stowlt-dark mb-4">
              Často kladené dotazy
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-4 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-semibold text-stowlt-dark">
                    {faq.question}
                  </h3>
                  <motion.svg
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-5 h-5 text-stowlt-gray flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </motion.svg>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <p className="px-6 pb-6 text-stowlt-gray">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-stowlt-orange to-stowlt-orange-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Potřebujete poradit s výběrem?
            </h2>
            <p className="text-base sm:text-xl text-white/80 mb-8">
              Rádi vám pomůžeme vybrat správnou velikost pro vaše potřeby.
            </p>
            <a
              href="/kontakt"
              className="inline-flex items-center justify-center font-medium transition-all duration-300 ease-out px-8 py-4 text-lg rounded-3xl bg-white text-stowlt-orange hover:bg-gray-100 hover:scale-105"
            >
              Kontaktujte nás
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
