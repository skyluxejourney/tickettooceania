"use client";

import { Phone, ArrowRight, Star, Users, Shield, Tag, Sparkles, Award, Clock, CheckCircle, Crown, Gem, Headphones } from "lucide-react";
import { COMPANY, CONTACT } from "@/app/constants";
import Image from "next/image";

export default function ExclusiveDealsPoster() {
  // Use static positions instead of Math.random() to avoid hydration mismatches
  const particles = [
    { left: "10%", top: "20%", delay: "0s", duration: "4s" },
    { left: "25%", top: "45%", delay: "0.5s", duration: "5s" },
    { left: "40%", top: "15%", delay: "1s", duration: "3.5s" },
    { left: "55%", top: "60%", delay: "1.5s", duration: "4.5s" },
    { left: "70%", top: "25%", delay: "0.3s", duration: "5.5s" },
    { left: "85%", top: "50%", delay: "0.8s", duration: "4s" },
    { left: "15%", top: "75%", delay: "1.2s", duration: "3s" },
    { left: "35%", top: "85%", delay: "0.6s", duration: "6s" },
    { left: "50%", top: "35%", delay: "1.8s", duration: "4.2s" },
    { left: "65%", top: "80%", delay: "0.2s", duration: "5s" },
    { left: "80%", top: "15%", delay: "0.9s", duration: "3.8s" },
    { left: "5%", top: "50%", delay: "1.4s", duration: "4.7s" },
    { left: "45%", top: "70%", delay: "0.7s", duration: "5.2s" },
    { left: "75%", top: "40%", delay: "1.1s", duration: "3.3s" },
    { left: "95%", top: "30%", delay: "0.4s", duration: "4.8s" },
    { left: "20%", top: "10%", delay: "1.6s", duration: "5.8s" },
    { left: "60%", top: "90%", delay: "0.1s", duration: "3.9s" },
    { left: "30%", top: "55%", delay: "1.3s", duration: "4.3s" },
    { left: "88%", top: "70%", delay: "0.5s", duration: "5.1s" },
    { left: "12%", top: "90%", delay: "0.8s", duration: "4.6s" },
  ];

  return (
    <section className="py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-[#060b12] via-[#111822] to-[#1a2a4a] overflow-hidden shadow-2xl border border-[#4a7ab5]/10">
          
          {/* Premium Background Pattern */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#4a7ab5] rounded-full blur-[120px] opacity-20" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#7ba0cc] rounded-full blur-[120px] opacity-15" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#4a7ab5] rounded-full blur-[150px] opacity-10" />
            
            {/* Diamond grid pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTQwIDBMODAgNDBMNDAgODBMMCA0MHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50" />
            
            {/* Gold accent lines */}
            <div className="absolute top-0 left-0 w-1 h-32 bg-gradient-to-b from-[#c9a84c] to-transparent opacity-40" />
            <div className="absolute bottom-0 right-0 w-1 h-32 bg-gradient-to-t from-[#c9a84c] to-transparent opacity-40" />
          </div>

          {/* Premium Particles with gold glow */}
          <div className="absolute inset-0 overflow-hidden">
            {particles.map((particle, i) => (
              <div
                key={i}
                className="absolute w-1.5 h-1.5 bg-[#c9a84c]/20 rounded-full animate-float"
                style={{
                  left: particle.left,
                  top: particle.top,
                  animationDelay: particle.delay,
                  animationDuration: particle.duration,
                }}
              />
            ))}
          </div>

          <div className="relative flex flex-col lg:flex-row items-stretch">
            {/* Left Content */}
            <div className="flex-1 p-8 sm:p-10 lg:p-12 xl:p-14 text-center lg:text-left">
              {/* Premium Badge */}
              <div className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#c9a84c]/20 to-[#4a7ab5]/20 backdrop-blur-sm rounded-full px-5 py-2 mb-6 border border-[#c9a84c]/20 shadow-lg shadow-[#c9a84c]/5">
                <Crown size={14} className="text-[#c9a84c]" />
                <span className="text-[#c9a84c] text-xs sm:text-sm font-semibold tracking-[0.15em] uppercase">
                  Exclusive VIP Offer
                </span>
              </div>

              {/* Main Heading with gold accent */}
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white !text-white mb-5 leading-[1.1]">
                Save Up to{" "}
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a84c] to-[#f0d080]">
                    20%
                  </span>
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#c9a84c]/50 to-[#f0d080]/30 rounded-full blur-sm" />
                </span>
              </h2>

              <p className="text-white/70 !text-white/70 text-base sm:text-lg lg:text-xl max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed font-light tracking-wide">
                Unlock premium travel experiences with our exclusive deals. 
                <span className="block text-white/50 text-sm mt-1">Limited time offer – book now!</span>
              </p>

              {/* Premium Trust Badges with gold accents */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 sm:gap-7 mb-8">
                <div className="flex items-center gap-2.5 text-white/80 !text-white/80 bg-white/5 backdrop-blur-sm px-3 py-2 rounded-full border border-white/10">
                  <div className="p-1 bg-gradient-to-r from-[#c9a84c]/20 to-yellow-400/10 rounded-full">
                    <Star size={14} className="text-[#c9a84c] fill-[#c9a84c]" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium">4.9/5 Rating</span>
                </div>
                <div className="flex items-center gap-2.5 text-white/80 !text-white/80 bg-white/5 backdrop-blur-sm px-3 py-2 rounded-full border border-white/10">
                  <div className="p-1 bg-white/10 rounded-full">
                    <Users size={14} className="text-white/80" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium">2.5M+ Bookings</span>
                </div>
                <div className="flex items-center gap-2.5 text-white/80 !text-white/80 bg-white/5 backdrop-blur-sm px-3 py-2 rounded-full border border-white/10">
                  <div className="p-1 bg-white/10 rounded-full">
                    <Shield size={14} className="text-white/80" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium">Secure Payment</span>
                </div>
              </div>

              {/* Premium CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href={`tel:${CONTACT.phoneRaw}`}
                  className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-6 sm:px-7 py-4 w-full sm:w-auto hover:bg-white/15 transition-all duration-300 border border-white/10 hover:border-[#c9a84c]/30 group"
                >
                  <div className="p-1.5 bg-gradient-to-r from-[#c9a84c]/20 to-[#4a7ab5]/20 rounded-full">
                    <Phone size={18} className="text-[#c9a84c] animate-pulse" />
                  </div>
                  <span className="text-white !text-white font-bold text-base sm:text-lg tracking-wider group-hover:tracking-[0.15em] transition-all">
                    {CONTACT.phone}
                  </span>
                </a>
                <a
                  href={`tel:${CONTACT.phoneRaw}`}
                  className="relative group overflow-hidden bg-gradient-to-r from-[#c9a84c] to-[#f0d080] text-[#111822] !text-[#111822] px-8 sm:px-10 py-4 rounded-full font-bold hover:from-[#b8983a] hover:to-[#d4b860] transition-all duration-300 shadow-lg shadow-[#c9a84c]/30 hover:shadow-xl hover:shadow-[#c9a84c]/50 whitespace-nowrap w-full sm:w-auto flex items-center justify-center gap-2"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span>Call Now</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </a>
              </div>

              {/* Premium Features */}
              <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-6">
                <div className="flex items-center gap-2 text-white/40 text-xs">
                  <Gem size={12} className="text-[#c9a84c]" />
                  <span>Premium Service</span>
                </div>
                <div className="w-px h-4 bg-white/10" />
                <div className="flex items-center gap-2 text-white/40 text-xs">
                  <Headphones size={12} className="text-[#c9a84c]" />
                  <span>24/7 Support</span>
                </div>
                <div className="w-px h-4 bg-white/10" />
                <div className="flex items-center gap-2 text-white/40 text-xs">
                  <Clock size={12} className="text-[#c9a84c]" />
                  <span>Instant Booking</span>
                </div>
              </div>
            </div>

            {/* Right Image - Premium travel experience */}
            <div className="relative lg:w-1/2 min-h-[300px] sm:min-h-[350px] lg:min-h-[450px] xl:min-h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop&crop=center"
                alt="Exclusive Travel Deals"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-[#111822]/90 via-[#111822]/50 to-transparent" />
              
              {/* Premium Floating Gold Badge */}
              <div className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 bg-gradient-to-br from-[#c9a84c] to-[#f0d080] rounded-2xl p-3 sm:p-4 shadow-2xl animate-bounce-slow">
                <div className="bg-[#111822]/90 backdrop-blur-sm px-5 sm:px-7 py-3 sm:py-4 rounded-xl text-center border border-[#c9a84c]/30">
                  <div className="text-[10px] sm:text-xs font-bold tracking-[0.15em] uppercase text-[#c9a84c]">Save Up To</div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-[#c9a84c] to-[#f0d080] bg-clip-text text-transparent">
                    20%
                  </div>
                  <div className="text-[8px] sm:text-[10px] font-medium text-white/40">Limited Time</div>
                </div>
              </div>

              {/* Premium Features Tags */}
              <div className="absolute bottom-6 left-6 flex flex-col gap-2.5">
                <div className="bg-[#111822]/90 backdrop-blur-md px-5 py-3 border border-[#c9a84c]/20 shadow-xl">
                  <div className="flex items-center gap-2.5 text-white">
                    <div className="p-1 bg-gradient-to-r from-[#c9a84c]/20 to-[#4a7ab5]/20 rounded-full">
                      <CheckCircle size={14} className="text-[#c9a84c]" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium">Instant Confirmation</span>
                  </div>
                </div>
                <div className="bg-[#111822]/90 backdrop-blur-md px-5 py-3 border border-[#4a7ab5]/20 shadow-xl">
                  <div className="flex items-center gap-2.5 text-white">
                    <div className="p-1 bg-gradient-to-r from-[#c9a84c]/20 to-[#4a7ab5]/20 rounded-full">
                      <Clock size={14} className="text-[#c9a84c]" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium">24/7 Support Available</span>
                  </div>
                </div>
              </div>

             
              {/* Price Tag */}
              <div className="absolute bottom-6 right-6 bg-[#111822]/90 backdrop-blur-md px-4 py-2 border border-white/10">
                <div className="flex items-center gap-2">
                  <Tag size={12} className="text-[#c9a84c]" />
                  <span className="text-white/60 text-xs font-medium">Best Price Guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0) translateX(0) rotate(0deg); 
            opacity: 0.2; 
          }
          25% { 
            transform: translateY(-15px) translateX(8px) rotate(3deg); 
            opacity: 0.5; 
          }
          50% { 
            transform: translateY(0) translateX(-8px) rotate(0deg); 
            opacity: 0.2; 
          }
          75% { 
            transform: translateY(15px) translateX(8px) rotate(-3deg); 
            opacity: 0.5; 
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0) rotate(-2deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}