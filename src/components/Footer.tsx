"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const footerLinks = {
  navigace: [
    { href: "/", label: "Domů" },
    { href: "/o-nas", label: "O nás" },
    { href: "/cenik", label: "Ceník" },
    { href: "/pobocky", label: "Pobočky" },
    { href: "/kontakt", label: "Kontakt" },
  ],
  sluzby: [
    { href: "/cenik#male-koje", label: "Malé kóje" },
    { href: "/cenik#stredni-koje", label: "Střední kóje" },
    { href: "/cenik#velke-koje", label: "Velké kóje" },
    { href: "/cenik#xl-koje", label: "XL kóje" },
  ],
};

export default function Footer() {
  const pathname = usePathname();

  const handleServiceClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === "/cenik" && href.includes("#")) {
      e.preventDefault();
      const targetId = href.split("#")[1];
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="relative bg-stowlt-dark text-white overflow-hidden">
      {/* Wavy top edge */}
      <div className="absolute top-0 left-0 right-0 -translate-y-[99%]">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 80C1248 70 1344 50 1392 40L1440 30V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
            fill="#1A1A1A"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="rounded-xl overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="Stowlt"
                  width={50}
                  height={50}
                  className="h-11 w-auto"
                />
              </div>
              <span className="text-2xl font-bold">STOWLT</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Moderní a bezpečné úložné prostory přímo v Olomouci. Uložte si
              sezónní věci, sportovní vybavení nebo cokoliv, co doma překáží.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-stowlt-orange">
              Navigace
            </h3>
            <ul className="space-y-1">
              {footerLinks.navigace.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="block py-2 text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-stowlt-orange">
              Služby
            </h3>
            <ul className="space-y-1">
              {footerLinks.sluzby.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleServiceClick(e, link.href)}
                    className="block py-2 text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-stowlt-orange">
              Kontakt
            </h3>
            <ul className="space-y-1 text-gray-400">
              <li>
                <a href="tel:+420111222333" className="flex items-center gap-3 py-2 hover:text-white transition-colors">
                  <svg
                    className="w-5 h-5 text-stowlt-orange flex-shrink-0"
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
              </li>
              <li>
                <a href="mailto:contact@stowlt.cz" className="flex items-center gap-3 py-2 hover:text-white transition-colors">
                  <svg
                    className="w-5 h-5 text-stowlt-orange flex-shrink-0"
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
                  contact@stowlt.cz
                </a>
              </li>
              <li className="flex items-center gap-3 py-2">
                <svg
                  className="w-5 h-5 text-stowlt-orange flex-shrink-0"
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
                <span>Olomouc, Česká republika</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Stowlt. Všechna práva vyhrazena.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.stowlt.cz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white text-sm"
            >
              www.stowlt.cz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
