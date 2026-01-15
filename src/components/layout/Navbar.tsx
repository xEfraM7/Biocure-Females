"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/biocure-logo.png";
import Image from "next/image";
import { useLenis } from "lenis/react";
import { siteContent } from "@/content/site-content";

interface NavbarProps {
  onOpenModal?: () => void;
}

const Navbar = ({ onOpenModal }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const lenis = useLenis();
  const { navbar } = siteContent;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = href.replace("#", "");
    lenis?.scrollTo(`#${target}`, { offset: -80 });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <Image src={logo} alt={navbar.logoAlt} className="h-16 w-auto" width={72} height={72} priority />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navbar.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-foreground/80 hover:text-primary font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="hero" size="lg" onClick={onOpenModal}>
              {navbar.ctaButton}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navbar.navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-foreground/80 hover:text-primary font-medium py-2 transition-colors"
                  onClick={(e) => {
                    handleNavClick(e, link.href);
                    setIsOpen(false);
                  }}
                >
                  {link.label}
                </a>
              ))}
              <Button variant="hero" size="lg" className="mt-2" onClick={onOpenModal}>
                {navbar.ctaButton}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
