"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import BlobShape from "@/components/BlobShape";
import Button from "@/components/Button";

function CountUp({ target, suffix = "", duration = 2 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * target));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const values = [
  {
    title: "Bezpečnost",
    description:
      "Váš majetek je pro nás prioritou. Moderní zabezpečení a 24/7 monitoring zajišťují klid na duši.",
    icon: (
      <svg
        className="w-10 h-10"
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
  },
  {
    title: "Spolehlivost",
    description:
      "Můžete se na nás spolehnout. Jsme tu pro vás kdykoliv potřebujete přístup ke svým věcem.",
    icon: (
      <svg
        className="w-10 h-10"
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
    ),
  },
  {
    title: "Férovost",
    description:
      "Žádné skryté poplatky, transparentní ceny. Platíte pouze za prostor, který skutečně využíváte.",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
        />
      </svg>
    ),
  },
];

export default function ONasPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-stowlt-light-gray to-white">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <BlobShape
            variant="2"
            className="absolute -top-40 -right-40 w-[500px] h-[500px] opacity-15"
            color="var(--stowlt-blue)"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-stowlt-dark mb-6">
              O nás
            </h1>
            <p className="text-base sm:text-xl text-stowlt-gray">
              Jsme lokální firma z Olomouce s jasnou misí - pomoci rodinám
              získat více prostoru doma. Nabízíme moderní, bezpečné a cenově
              dostupné úložné prostory.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-stowlt-dark mb-6">
                Náš příběh
              </h2>
              <div className="space-y-4 text-stowlt-gray text-lg">
                <p>
                  Stowlt vznikl z jednoduché myšlenky - rodiny v bytových domech
                  často nemají dostatek úložného prostoru. Sklepy jsou malé,
                  balkony přeplněné a v bytě se hromadí věci, které používáme
                  jen sezónně.
                </p>
                <p>
                  Proto jsme vytvořili moderní úložné centrum přímo v srdci
                  Olomouce. Místo, kde můžete bezpečně uložit lyže, kola,
                  sezónní oblečení nebo cokoliv, co doma překáží.
                </p>
                <p>
                  Naším cílem je poskytnout rodinám více prostoru pro to, co je
                  skutečně důležité - pro život, ne pro věci.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-square max-w-md mx-auto">
                <BlobShape
                  variant="1"
                  className="absolute inset-0 w-full h-full"
                  color="var(--stowlt-blue)"
                />
                <div className="absolute inset-0 flex items-center justify-center text-white text-center p-8">
                  <div>
                    <div className="text-5xl font-bold mb-2">2025</div>
                    <div className="text-xl">Založeno v Olomouci</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-stowlt-light-gray relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <BlobShape
            variant="3"
            className="absolute -bottom-40 -left-40 w-[400px] h-[400px] opacity-10"
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
              Naše hodnoty
            </h2>
            <p className="text-base sm:text-xl text-stowlt-gray max-w-2xl mx-auto">
              Tři pilíře, na kterých stavíme naši službu.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-5 sm:p-6 lg:p-8 text-center shadow-lg"
              >
                <div className="w-20 h-20 bg-stowlt-orange/10 rounded-full flex items-center justify-center text-stowlt-orange mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-semibold text-stowlt-dark mb-4">
                  {value.title}
                </h3>
                <p className="text-stowlt-gray">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-stowlt-dark mb-4">
              Proč Stowlt?
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { target: 100, suffix: "+", label: "Úložných jednotek" },
              { target: 500, suffix: "+", label: "Spokojených zákazníků" },
              { target: null, display: "24/7", label: "Přístup k vašim věcem" },
              { target: 0, suffix: "", label: "Skrytých poplatků" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="text-4xl font-bold text-stowlt-orange mb-2">
                  {stat.target !== null ? (
                    <CountUp target={stat.target} suffix={stat.suffix} />
                  ) : (
                    stat.display
                  )}
                </div>
                <div className="text-stowlt-gray">{stat.label}</div>
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
              Chcete vědět více?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Rádi vám zodpovíme všechny dotazy a provedeme vás naším centrem.
            </p>
            <Button href="/kontakt" size="lg">
              Kontaktujte nás
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
