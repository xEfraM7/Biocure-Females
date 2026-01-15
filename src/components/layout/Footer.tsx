"use client";

import { UserCheck, Building2, Instagram, Youtube } from "lucide-react";
import logo from "@/assets/biocure-logo.png";
import Image from "next/image";
import { useState } from "react";
import { PrivacyModal } from "@/components/modals/PrivacyModal";
import { siteContent } from "@/content/site-content";

const Footer = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const { footer } = siteContent;

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 pb-12 border-b border-background/20">
          <div className="flex items-center gap-2 text-sm">
            <UserCheck className="w-5 h-5 text-biocure-gold" />
            <span>{footer.trustBadges[0].text}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Building2 className="w-5 h-5 text-biocure-gold" />
            <span>{footer.trustBadges[1].text}</span>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo & About */}
          <div className="md:col-span-1">
            <Image src={logo} alt={footer.logoAlt} className="h-16 w-auto brightness-0 invert" width={64} height={64} />
            <p className="text-sm text-background/70 leading-relaxed">
              {footer.about}
            </p>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold mb-4">{footer.legal.title}</h3>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <button
                  onClick={() => setIsPrivacyOpen(true)}
                  className="hover:text-background transition-colors text-left"
                >
                  {footer.legal.privacyPolicy}
                </button>
              </li>
            </ul>
          </div>

          {/* Menu */}
          <div>
            <h3 className="font-semibold mb-4">{footer.menu.title}</h3>
            <ul className="space-y-2 text-sm text-background/70">
              {footer.menu.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-background transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-semibold mb-4">{footer.connect.title}</h3>
            <p className="text-sm text-background/70 mb-4">
              {footer.connect.email}
            </p>
            <div className="flex gap-4">
              <a
                href={footer.connect.social[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label={footer.connect.social[0].ariaLabel}
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={footer.connect.social[1].url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label={footer.connect.social[1].ariaLabel}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
              <a
                href={footer.connect.social[2].url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
                aria-label={footer.connect.social[2].ariaLabel}
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/20 text-center text-sm text-background/50">
          <p>© {new Date().getFullYear()} {footer.copyright}</p>
          <p className="mt-2">{footer.disclaimer}</p>
        </div>
      </div>

      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
    </footer>
  );
};

export default Footer;
