"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  X,
  PhoneCall,
  Phone,
} from "lucide-react";
import ContactModal from "./ContactModal";
import Link from "next/link";
import Image from "next/image";
import { COMPANY, CONTACT, BRAND } from "@/app/constants";

const navItems = [
  { name: "FLIGHTS", isActive: true },
  { name: "LIVE HELP?" },
  { name: "BLOG" },
  { name: "CUSTOMER SUPPORT" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedTab, setSelectedTab] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (item: { name: string; isActive?: boolean }) => {
    if (item.isActive) {
      return;
    }
    
    setSelectedTab(item.name);
    setShowModal(true);
    
    if (open) {
      setOpen(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedTab("");
  };

  return (
    <>
      <header
        className={`
          fixed top-2 left-0 w-full z-50 px-3 sm:px-6
          transition-all duration-500 ease-in-out
          ${scrolled ? "pt-0.5 sm:pt-1" : "pt-1 sm:pt-2"}
        `}
      >
        <div
          className={`
          max-w-7xl mx-auto rounded-2xl xl:rounded-full border transition-all duration-500 ease-in-out
            ${
              scrolled
                ? "border-white/30 bg-white/95 backdrop-blur-xl shadow-2xl py-0"
                : "border-[#111822]/10 bg-white/80 backdrop-blur-xl shadow-lg"
            }
          `}
        >
          <div
            className={`
              flex items-center justify-between px-2 sm:px-4 md:px-6
              transition-all duration-500 ease-in-out
              ${scrolled ? "py-1 sm:py-1.5" : "py-1.5 sm:py-2"}
            `}
          >
            {/* LOGO - Ticket to Europe with Homepage Link */}
            <Link href="/" className="flex items-center gap-2 sm:gap-2 md:gap-2 group cursor-pointer flex-shrink-0">
              <div className="relative flex-shrink-0">
                <Image
                  src={BRAND.logo}
                  alt={BRAND.name}
                  width={scrolled ? 32 : 36}
                  height={scrolled ? 32 : 48}
                  className="transition-all duration-500 group-hover:scale-105 group-hover:rotate-6 pb-1"
                  priority
                />
              </div>

              <div>
                <h1
                  className={`
                    font-heading
                    font-bold
                    italic
                    text-[#111822]
                    tracking-tight
                    leading-tight
                    transition-all duration-500 ease-in-out
                    relative
                    ${scrolled ? "text-sm sm:text-base" : "text-base sm:text-lg md:text-xl"}
                  `}
                >
                  {BRAND.name}
                </h1>
                <p
                  className={`
                    font-body
                    text-[#4a7ab5]
                    leading-tight
                    font-medium
                    tracking-[0.15em] sm:tracking-[0.2em]
                    uppercase
                    transition-all duration-500 ease-in-out
                    ${scrolled ? "text-[6px] sm:text-[7px]" : "text-[7px] sm:text-[8px]"}
                  `}
                >
                  {BRAND.tagline}
                </p>
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden xl:flex items-center justify-center flex-1 gap-1.5 lg:gap-3 xl:gap-4 px-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className={`
                    group
                    flex items-center
                    font-body
                    font-medium
                    transition-all
                    duration-200
                    px-1.5 lg:px-2.5
                    py-1
                    rounded-full
                    hover:bg-[#f5f7fa]
                    ${scrolled ? "text-[7px] lg:text-[8px] xl:text-[10px]" : "text-[8px] lg:text-[9px] xl:text-[12px]"}
                    tracking-wider
                    relative
                    ${
                      item.isActive
                        ? "text-[#111822] bg-[#f5f7fa]"
                        : "text-[#111822] hover:text-[#111822]/80"
                    }
                  `}
                >
                  {item.name}
                  {item.isActive && (
                    <span className="absolute inset-x-2 -bottom-0.5 h-0.5 bg-gradient-to-r from-[#111822] to-[#4a7ab5]" />
                  )}
                  {!item.isActive && (
                    <span className="absolute inset-x-2 -bottom-0.5 h-0.5 bg-gradient-to-r from-[#111822] to-[#4a7ab5] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                  )}
                </button>
              ))}
            </nav>

            {/* RIGHT SIDE - Call Only Deals */}
            <div className="hidden xl:flex items-center gap-2 sm:gap-3">
              <a
  href={`tel:${CONTACT.phoneRaw}`}
  className={`
    flex items-center gap-1.5 sm:gap-2 md:gap-3
    bg-gradient-to-r from-[#111822] to-[#2a3a5a]
    hover:from-[#2a3a5a] hover:to-[#4a7ab5]
    transition-all duration-300
    rounded-full
    border border-[#4a7ab5]/30
    ${scrolled ? "px-2 sm:px-3 py-0.5 sm:py-1" : "px-2.5 sm:px-3.5 py-1 sm:py-1.5"}
    cursor-pointer
    hover:scale-105 active:scale-95
    group
    shadow-lg
    shadow-[#111822]/20
  `}
>
  <div className="flex-shrink-0">
    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-[#4a7ab5] to-[#111822] flex items-center justify-center shadow-lg">
      <Phone
        size={scrolled ? 10 : 12}
        className="text-white sm:w-3 sm:h-3"
      />
    </div>
  </div>
  
  <div className="flex flex-col">
    <span
      className={`
        font-body
        font-bold
        text-white/80
        transition-all duration-300
        ${scrolled ? "text-[8px] sm:text-[9px]" : "text-[9px] sm:text-[10px]"}
      `}
    >
      Call Only Deals
    </span>
    <span
      className={`
        font-body
        font-bold
        text-[#7ba0cc]
        transition-all duration-300
        ${scrolled ? "text-[6px] sm:text-[7px]" : "text-[7px] sm:text-[8px]"}
        group-hover:text-[#9ab0d4]
      `}
    >
      {CONTACT.phone}
    </span>
  </div>
</a>
            </div>

            {/* MOBILE/TABLET BUTTON */}
            <button
              onClick={() => setOpen(!open)}
              className="
                xl:hidden
                text-[#111822]
                hover:text-[#2a3a5a]
                transition-colors
                p-1
                rounded-full
                hover:bg-[#f5f7fa]
                flex-shrink-0
              "
              aria-label="Toggle menu"
            >
              {open ? <X size={18} className="sm:w-5 sm:h-5" /> : <Menu size={18} className="sm:w-5 sm:h-5" />}
            </button>
          </div>

          {/* MOBILE MENU */}
          {open && (
            <div
              className="
                xl:hidden
                px-4 sm:px-6
                pb-4 sm:pb-6
                space-y-1
                animate-in
                slide-in-from-top-2
                duration-200
              "
            >
              <div className="pt-2 border-t border-[#f5f7fa]">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => {
                      handleNavClick(item);
                    }}
                    className={`
                      w-full
                      flex items-center gap-3
                      transition-all
                      duration-200
                      px-3 py-2.5 sm:py-3
                      rounded-xl
                      font-body
                      text-xs sm:text-sm
                      font-semibold
                      tracking-wider
                      ${
                        item.isActive
                          ? "text-[#111822] bg-[#f5f7fa]"
                          : "text-[#111822] hover:text-[#111822]/80 hover:bg-[#f5f7fa]"
                      }
                    `}
                  >
                    {item.name}
                    {item.isActive && (
                      <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#111822]" />
                    )}
                  </button>
                ))}
                
                <div className="mt-3 pt-3 border-t border-[#f5f7fa]">
                  <a
                    href={`tel:${CONTACT.phoneRaw}`}
                    className="flex items-center gap-3 bg-gradient-to-r from-[#111822] to-[#2a3a5a] rounded-xl px-4 py-3 hover:from-[#2a3a5a] hover:to-[#4a7ab5] transition-all duration-300 border border-[#4a7ab5]/20"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#4a7ab5] to-[#111822] flex items-center justify-center flex-shrink-0">
                      <Phone size={14} className="text-white" />
                    </div>
                    <div>
                      <p className="font-body text-[10px] font-medium text-white/60">
                        Call Only Deals
                      </p>
                      <p className="font-body text-xs font-bold text-[#7ba0cc]">
                        {CONTACT.phone}
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={showModal}
        onClose={closeModal}
        selectedItem={selectedTab}
      />
    </>
  );
}