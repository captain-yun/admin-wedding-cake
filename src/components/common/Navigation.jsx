"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            <i>Wedding Cake Admin</i>
          </Link>

          <div className="hidden md:flex space-x-8">
            {[
              { href: "/about", label: "About" },
              { href: "/works", label: "Works" },
              { href: "/contact", label: "Contact" },
              { href: "/careers", label: "Careers" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm hover:text-gray-600 transition-colors ${
                  pathname === href ? "text-black font-bold" : "text-gray-500"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
