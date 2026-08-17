"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Clock,
  Award,
  Shield,
  AlertCircle,
} from "lucide-react";
import ContactModal from "./ContactModal";
import Link from "next/link";
import Image from "next/image";
import { COMPANY, CONTACT, BRAND } from "@/app/constants";
import { airlinesDataMap } from "@/app/airlines/[slug]/data";
import type { AirlineData } from "@/app/airlines/[slug]/airlines-data";

export default function Footer() {
  const [showModal, setShowModal] = useState(false);
  const [selectedLink, setSelectedLink] = useState("");

  // Updated Quick Links - Contact Us now links to /contact
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Disclaimer", href: "/disclaimer" },
    { name: "Contact Us", href: "/contact" }, // Changed to /contact
    { name: "Site Map", href: "/sitemap" },
  ];

  const legalLinks = [
    { name: "Terms & Conditions", href: "/terms-of-service" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Price Match Promise", href: "/price-match-policy" },
    { name: "Fulfillment Policy", href: "/fulfillment-policy" },
    { name: "Fare Disclosure", href: "/fare-disclosure-policy" },
    { name: "Advertiser Disclosure", href: "/advertiser-disclosure-policy" },
    { name: "Cookies Policy", href: "/cookies-policy" },
    { name: "Cancellation and Refund", href: "/cancellation-refund-policy" },
    { name: "Post Ticketing Fees Service", href: "/post-ticketing-fees-service" },
    { name: "Taxes and Fees", href: "/taxes-fees-policy" },
  ];

  // Helper function to generate slug from airline name - with safety check
  function getSlugFromName(name: string): string {
    if (!name || typeof name !== 'string') return "";
    return name
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');
  }

  // Get top airlines from the airlinesDataMap - limit to 7 for display
  const allAirlines = Object.values(airlinesDataMap);
  const topAirlines = allAirlines
    .filter((airline: AirlineData) => airline.airline?.name)
    .slice(0, 7)
    .map((airline: AirlineData) => ({
      name: airline.airline.name,
      slug: getSlugFromName(airline.airline.name)
    }));

  const closeModal = () => {
    setShowModal(false);
    setSelectedLink("");
  };

  return (
    <>
      <footer className="bg-[#f5f7fa] text-[#111822]/80">
        {/* Main Footer */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:pt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
            
            {/* Brand & About */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0">
                  <Image
                    src="/logo/ticketlogo.png"
                    alt={BRAND.name}
                    width={56}
                    height={56}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[#111822] tracking-wide font-heading italic">
                    {BRAND.name}
                  </h2>
                  <p className="text-xs text-[#111822] font-medium tracking-wider uppercase">
                    {BRAND.tagline || "Travel Assistance"}
                  </p>
                </div>
              </div>
              <p className="text-sm text-[#111822]/60 leading-relaxed mb-4 max-w-xs">
                Your trusted partner for unforgettable travel experiences across Oceania and beyond. We help
                you discover the world with ease and comfort.
              </p>
              <div className="flex items-center gap-3 text-sm text-[#111822]/60">
                <div className="flex items-center gap-1">
                  <Award size={14} className="text-[#111822]" />
                  <span>5 Years of Trust</span>
                </div>
                <div className="flex items-center gap-1">
                  <Shield size={14} className="text-[#111822]" />
                  <span>Secure Booking</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-[#111822] font-semibold text-lg mb-4 relative">
                Quick Links
                <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-[#111822] to-[#4a7ab5] rounded-full" />
              </h3>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    {link.name === "Home" ? (
                      <a
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="text-sm text-[#111822]/60 hover:text-[#111822] transition-colors duration-200 flex items-center gap-2 group cursor-pointer"
                      >
                        <span className="w-1 h-1 bg-[#111822]/40 rounded-full group-hover:bg-[#111822] transition-colors" />
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-[#111822]/60 hover:text-[#111822] transition-colors duration-200 flex items-center gap-2 group"
                      >
                        <span className="w-1 h-1 bg-[#111822]/40 rounded-full group-hover:bg-[#111822] transition-colors" />
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Top Airlines */}
            <div>
              <h3 className="text-[#111822] font-semibold text-lg mb-4 relative">
                Top Airlines
                <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-[#111822] to-[#4a7ab5] rounded-full" />
              </h3>
              <ul className="space-y-2.5">
                {topAirlines.map((airline) => (
                  <li key={airline.name}>
                    <Link
                      href={`/airlines/${airline.slug}`}
                      className="text-sm text-[#111822]/60 hover:text-[#111822] transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-[#111822]/40 rounded-full group-hover:bg-[#111822] transition-colors" />
                      {airline.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-[#111822] font-semibold text-lg mb-4 relative">
                Legal Links
                <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-[#111822] to-[#4a7ab5] rounded-full" />
              </h3>
              <ul className="space-y-2.5">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#111822]/60 hover:text-[#111822] transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-[#111822]/40 rounded-full group-hover:bg-[#111822] transition-colors" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="mt-12 pt-8 border-t border-[#111822]/10">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-[#111822] font-semibold text-base">
                  Subscribe to Our Newsletter
                </h4>
                <p className="text-sm text-[#111822]/40">
                  Get the best travel deals straight to your inbox
                </p>
              </div>
              <div className="flex w-full sm:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 sm:w-64 px-4 py-2.5 bg-white/80 border border-[#111822]/20 rounded-l-full text-[#111822] placeholder-[#111822]/30 focus:outline-none focus:border-[#111822] transition-colors text-sm"
                />
                <button className="px-5 py-2.5 bg-gradient-to-r from-[#111822] to-[#4a7ab5] hover:from-[#2a3a5a] hover:to-[#7ba0cc] text-white rounded-r-full font-semibold transition-all duration-300 flex items-center gap-2 text-sm whitespace-nowrap shadow-lg shadow-[#111822]/20">
                  <Send size={14} />
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer Section - Full Width */}
        <div 
          className="w-full"
          style={{ 
            backgroundColor: '#11182205', 
            borderTop: '1px solid #1118221A', 
            borderBottom: '1px solid #1118221A'
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5">
            <div className="flex items-start gap-2 sm:gap-3">
              <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" style={{ color: '#111822' }} />
              <p className="text-[10px] sm:text-xs leading-relaxed" style={{ color: '#11182299' }}>
                <span className="font-semibold" style={{ color: '#111822' }}>Disclaimer:</span>{" "}
                This Disclaimer governs the use of the website www.tickettooceania.com 
                (the "Website"), operated by Noam Flyers Inc. ("Company," "we," "us," 
                or "our"), a USA-registered travel company. Ticket to Oceania is an 
                independent online travel agency and is not an airline. We are not 
                affiliated with, owned by, or operated by any airline. Our role is to 
                facilitate travel bookings and provide customers with access to available 
                travel options from airlines and other travel service providers.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#111822]/10 bg-[#f5f7fa]/80">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#111822]/40">
              <p>
                &copy; {COMPANY.year || new Date().getFullYear()} {COMPANY.name || BRAND.name}. All rights reserved.
              </p>
              <div className="flex items-center gap-4">
                <Link href="/privacy-policy" className="hover:text-[#111822] transition-colors">
                  Privacy Policy
                </Link>
                <span className="w-px h-3 bg-[#111822]/10" />
                <Link href="/terms-of-service" className="hover:text-[#111822] transition-colors">
                  Terms of Service
                </Link>
                <span className="w-px h-3 bg-[#111822]/10" />
                <Link href="/cookie-policy" className="hover:text-[#111822] transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={showModal}
        onClose={closeModal}
        selectedItem={selectedLink}
      />
    </>
  );
}