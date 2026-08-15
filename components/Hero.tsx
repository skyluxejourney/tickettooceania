"use client";

import { useState } from "react";
import SearchEngine from "./SearchEngine";
import Image from "next/image";
import { Phone, Headphones } from "lucide-react";
import { CONTACT } from "@/app/constants";

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-[100svh] overflow-hidden flex items-center pt-16 sm:pt-20 pb-8">
      {/* =========================================================
          BACKGROUND – Bright & clear for dark text
      ========================================================= */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/tiltback.jpg"
          alt="Travel Experiences"
          fill
          priority
          quality={100}
          className="object-cover object-center"
        />

        {/* Very subtle dark overlay (5%) – just enough for depth */}
        <div className="absolute inset-0 bg-black/5" />

        {/* Subtle blue tint for atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#315d91]/10 via-transparent to-transparent" />
      </div>

      {/* Premium texture – barely visible (2% opacity) */}
      <div className="absolute inset-0 z-0 opacity-[0.02] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJNMzYgMzRjMCAxLjEuOSAyIDIgMnMyLS45IDItMi0uOS0yLTItMiAtMiAuOS0yIDJ6LTEyIDRjMCAxLjEuOSAyIDIgMnMyLS45IDItMi0uOS0yLTItMiAtMiAuOS0yIDJ6Ii8+PC9nPjwvc3ZnPg==')]" />

      {/* Top line – stays */}
      <div className="absolute top-0 left-0 right-0 z-20 h-[2px] bg-gradient-to-r from-[#4a7ab5] via-white/70 to-[#7ba0cc]" />

      {/* =========================================================
          HERO CONTENT
      ========================================================= */}
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-7xl mx-auto">

            {/* Left content – with staggered slide-from-left */}
            <div className="w-full lg:w-[60%] xl:w-[56%] py-8 sm:pt-10 lg:pt-12">

              {/* Eyebrow – slide from left */}
              <div className="flex items-center gap-3 mb-3 sm:mb-4 opacity-0 animate-[slideLeft_0.6s_ease-out_0.1s_forwards]">
                <span className="h-px w-8 bg-[#4a7ab5]" />
                <span className="text-[#4a7ab5] text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.25em] drop-shadow-[0_2px_4px_rgba(255,255,255,0.3)]">
                  Your Journey Begins Here
                </span>
              </div>

              {/* Heading – slide from left, delayed */}
              <h1 className="mb-4 sm:mb-5 opacity-0 animate-[slideLeft_0.7s_ease-out_0.2s_forwards]">
                <span
                  className="
                    block
                    text-transparent
                    bg-clip-text
                    bg-gradient-to-r
                    from-[#111822]
                    to-[#5588c7]
                    text-3xl
                    sm:text-3xl
                    md:text-4xl
                    lg:text-[3.2rem]
                    xl:text-[3.5rem]
                    font-bold
                    leading-[1]
                    tracking-[-0.035em]
                    drop-shadow-[0_2px_15px_rgba(255,255,255,0.2)]
                  "
                >
                  Explore the World,
                </span>
                <span
                  className="
                    block
                    mt-1
                    text-transparent
                    bg-clip-text
                    bg-gradient-to-r
                    from-[#05162b]
                    to-[#7997c2]
                    text-3xl
                    sm:text-4xl
                    md:text-5xl
                    lg:text-[3rem]
                    xl:text-[3.5rem]
                    font-semibold
                    italic
                    leading-[1]
                    tracking-[-0.035em]
                    drop-shadow-[0_2px_15px_rgba(255,255,255,0.2)]
                  "
                >
                  One Journey at a Time.
                </span>
              </h1>

              {/* Decorative line – slide from left */}
              <div className="flex items-center gap-2 mb-4 opacity-0 animate-[slideLeft_0.8s_ease-out_0.3s_forwards]">
                <div className="h-[2px] w-12 bg-gradient-to-r from-[#4a7ab5] to-[#111822]" />
                <div className="h-[2px] w-2 bg-[#111822]/50" />
                <div className="h-[2px] w-2 bg-[#111822]/25" />
              </div>

              {/* Description – slide from left */}
              <p
                className="
                  max-w-lg
                  text-[#111822]/80
                  text-xs
                  sm:text-sm
                  md:text-[15px]
                  font-light
                  leading-6
                  tracking-wide
                  mb-3
                  drop-shadow-[0_2px_10px_rgba(255,255,255,0.3)]
                  opacity-0
                  animate-[slideLeft_0.7s_ease-out_0.3s_forwards]
                "
              >
                Discover personalized and hassle-free travel experiences,
                carefully crafted around your preferences. Your next
                adventure starts here.
              </p>
            </div>

            {/* =====================================================
                SEARCH ENGINE – slide from left, slightly later
            ===================================================== */}
            <div className="w-full flex opacity-0 animate-[slideLeft_0.8s_ease-out_0.5s_forwards]">
              <div className="w-full max-w-4xl">
                <SearchEngine />
              </div>
            </div>

            {/* =====================================================
                TRUST INDICATORS – slide from left, last
            ===================================================== */}
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[#111822]/70 text-[10px] sm:text-xs drop-shadow-[0_2px_8px_rgba(255,255,255,0.2)] opacity-0 animate-[slideLeft_0.8s_ease-out_0.7s_forwards]">
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_7px_rgba(34,197,94,0.7)]" />
                <span>24/7 Travel Assistance</span>
              </div>
              <div className="hidden sm:block h-3 w-px bg-[#111822]/20" />
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#4a7ab5]" />
                <span>Best Travel Support</span>
              </div>
              <div className="hidden sm:block h-3 w-px bg-[#111822]/20" />
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#4a7ab5]" />
                <span>Hassle-Free Booking</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          SCROLL INDICATOR – dark, fade in (no slide)
      ========================================================= */}
      <div className="absolute bottom-4 right-8 lg:right-12 hidden md:flex flex-col items-center gap-1.5 text-[#111822]/50 animate-[fadeIn_1s_ease-out_1s_forwards] opacity-0">
        <span className="text-[8px] uppercase tracking-[0.3em] [writing-mode:vertical-rl] drop-shadow-[0_2px_4px_rgba(255,255,255,0.3)]">
          Scroll
        </span>
        <div className="w-px h-7 bg-gradient-to-b from-[#111822]/50 to-transparent" />
      </div>

      {/* Bottom line – stays */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-[2px] bg-gradient-to-r from-[#7ba0cc] via-white/60 to-[#4a7ab5]" />

      {/* =========================================================
          FLOATING CALL WIDGET – with gentle floating animation
      ========================================================= */}
      <div
        className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-3"
        style={{ pointerEvents: "none" }}
      >
        {/* Chat Card – fade in on hover */}
        <div
          className={`
            hidden sm:block
            w-[255px]
            border border-white/30
            bg-white/95
            backdrop-blur-xl
            p-3.5
            shadow-[0_20px_60px_rgba(0,0,0,0.25)]
            transition-all duration-300
            ease-[cubic-bezier(0.34,1.56,0.64,1)]
            ${
              isHovered
                ? "opacity-100 translate-x-0 scale-100 pointer-events-auto"
                : "opacity-0 translate-x-4 scale-95 pointer-events-none"
            }
          `}
        >
          <div className="flex items-start gap-3">
            <div className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e8f0fe]">
              <span className="absolute inset-0 rounded-full bg-[#4a7ab5]/20 animate-ping" />
              <Headphones className="relative z-10 h-4 w-4 text-[#4a7ab5]" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="mb-1 flex items-center gap-2">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500" />
                </span>
                <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-gray-500">
                  24/7 Call Assistance
                </p>
              </div>
              <p className="text-sm font-bold text-gray-900">
                {CONTACT.phone}
              </p>
              <p className="mt-0.5 text-[11px] leading-relaxed text-gray-500">
                Flight booking, changes and cancellations.
              </p>
            </div>
          </div>
        </div>

        {/* Call Button – floating + pulse rings */}
        <a
          href={`tel:${CONTACT.phoneRaw}`}
          aria-label="Call support"
          className="
            group
            relative
            flex
            h-14
            w-14
            shrink-0
            items-center
            justify-center
            rounded-full
            text-white
            bg-gradient-to-br
            from-[#4a7ab5]
            to-[#7ba0cc]
            shadow-[0_10px_28px_rgba(74,122,181,0.45)]
            transition-all
            duration-300
            hover:scale-110
            hover:shadow-[0_18px_40px_rgba(74,122,181,0.55)]
            focus:outline-none
            focus:ring-4
            focus:ring-[#4a7ab5]/30
            active:scale-95
            animate-[float_3s_ease-in-out_infinite]
          "
          style={{ pointerEvents: "auto" }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Wave rings */}
          <span className="absolute inset-0 rounded-full border-2 border-[#4a7ab5]/60 animate-[ping_2s_ease-in-out_infinite]" />
          <span className="absolute inset-[-5px] rounded-full border border-[#7ba0cc]/40 animate-[pulse_2.5s_ease-in-out_infinite_0.5s]" />

          {/* Inner circle */}
          <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/25 transition-all duration-300 group-hover:bg-white/20">
            <Phone className="h-5 w-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
          </span>
        </a>
      </div>

      {/* =========================================================
          GLOBAL ANIMATIONS – slideLeft, fadeIn, float
      ========================================================= */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
          @keyframes slideLeft {
            0% { opacity: 0; transform: translateX(-40px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
            100% { transform: translateY(0px); }
          }
        `
      }} />
    </section>
  );
}