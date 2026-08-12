"use client";

import { 
  Scale, 
  CheckCircle, 
  Clock, 
  Globe, 
  FileText, 
  Shield, 
  AlertCircle,
  Phone,
  Info,
  Heart,
} from "lucide-react";
import NextLink from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BRAND, CONTACT } from "@/app/constants";

export default function PriceMatchPolicyPage() {
  const sections = [
    {
      icon: Scale,
      title: "Price Match Promise",
      content: [
        `${BRAND.name}, operated by Noam Flyers Inc., is committed to presenting travel pricing in a transparent, reviewable, and fair manner.`,
        `${BRAND.name} is an independent travel agency and is not an airline. Airline names, route information, schedules, fare brands, trademarks, and logos may appear on the Website solely to identify available travel inventory or supplier content. Their appearance does not imply any affiliation, endorsement, sponsorship, or ownership relationship between Noam Flyers Inc. and any airline unless expressly stated.`,
        `${BRAND.name} may provide both online self-service booking and optional assisted booking through telephone, chat, or email. Pricing displayed online and pricing quoted through an assisted channel may differ when the service level differs, an assisted-booking fee applies, or availability and pricing change between channels.`
      ]
    },
    {
      icon: CheckCircle,
      title: "Our Price Match Promise",
      content: [
        "Subject to the conditions below, Noam Flyers Inc. may review a properly submitted claim where a lower publicly available total airfare was available for the same itinerary shortly after a booking was made through Tickettooceania.com.",
        "Because airline inventory and pricing can change rapidly, not every lower price found elsewhere will qualify.",
        "Our Price Match Promise is intended to provide a consistent process for reviewing properly documented and independently verifiable lower-price claims."
      ]
    },
    {
      icon: Info,
      title: "What Qualifies as the Same Itinerary?",
      content: [
        "For a Price Match claim to qualify, the compared booking must match the original Tickettooceania.com reservation on all material booking elements.",
        "This generally includes:",
        "• Operating airline or airlines",
        "• Marketing carrier, where applicable",
        "• Flight number or materially identical flight",
        "• Origin and destination airports",
        "• Travel dates",
        "• Applicable departure time or departure window",
        "• Cabin class",
        "• Fare family or equivalent fare conditions",
        "• Number and type of passengers",
        "• Baggage allowance",
        "• Seat inclusion, where applicable",
        "• Change and cancellation conditions",
        "• Flexibility provisions",
        "• Other mandatory services or charges included in the fare",
        "The comparison must be like-for-like.",
        "For example, a basic fare without a cabin-baggage allowance would not generally be considered equivalent to a fare that includes baggage.",
        "Similarly, an online self-service fare is not automatically comparable to an assisted-booking quote where the assisted transaction includes a clearly disclosed service fee.",
        "A competitor's advertised headline price will not qualify if mandatory fees are added later and the resulting checkout total is higher."
      ],
      twoColumn: true
    },
    {
      icon: Globe,
      title: "Publicly Available Fare Requirement",
      content: [
        "A lower fare will generally qualify for review only when it was:",
        "• Visible to the general public",
        "• Available for public purchase",
        "• Bookable at the time of verification",
        "• For the same itinerary",
        "• Based on materially equivalent fare conditions",
        "• Inclusive of the same applicable mandatory charges",
        "Taxes and known mandatory airline, supplier, or agency charges should be included when comparing the total price.",
        "Optional services selected only by the customer are generally excluded from the comparison unless both offers include those services on the same basis.",
        "Examples of optional services may include:",
        "• Optional seat purchases",
        "• Travel protection",
        "• Donations",
        "• Optional baggage",
        "• Additional after-sale services",
        "• Other customer-selected ancillary services"
      ],
      twoColumn: true
    },
    {
      icon: Clock,
      title: "Price Match Claim Period",
      content: [
        "Price Match claims must be submitted within twenty-four (24) hours of the original booking confirmation time shown by Noam Flyers Inc. and before the first flown segment departs, whichever occurs first.",
        "The claim should include:",
        "• Tickettooceania.com booking reference",
        "• Passenger's full name",
        "• Original itinerary",
        "• Lower advertised fare",
        "• Comparison website or URL, where available",
        "• Date and time the lower fare was observed",
        "• Currency displayed",
        "• Screenshots or other objective evidence showing the lower public price",
        "Noam Flyers Inc. may request additional documentation if the submitted information is insufficient to independently verify the claim.",
        "Claims that cannot be independently verified may be declined."
      ],
      twoColumn: true
    },
    {
      icon: Scale,
      title: "How We Review a Claim",
      content: [
        "Once a claim is received, Noam Flyers Inc. will review the submitted information and compare the lower fare against the original Tickettooceania.com reservation.",
        "The review may consider:",
        "• Whether the lower price was publicly available.",
        "• Whether the fare could actually be booked.",
        "• Whether the itinerary is materially identical.",
        "• Whether the passenger mix is identical.",
        "• Whether the cabin and fare conditions are equivalent.",
        "• Whether mandatory taxes and charges are included.",
        "• Whether baggage and other included services are equivalent.",
        "• Whether the lower price is still available at the time of verification.",
        "• Whether the comparison is based on the same applicable currency and point of sale.",
        "• Whether the competing offer is subject to restrictions unavailable to the general public.",
        "Dynamic or temporary pricing differences do not automatically qualify."
      ],
      twoColumn: true
    },
    {
      icon: CheckCircle,
      title: "Approved Price Match Remedies",
      content: [
        "If a Price Match claim is approved, Noam Flyers Inc. may resolve the claim through one of the following remedies, depending on the circumstances.",
        "1. Verified Difference Refund",
        "Where operationally practical, Noam Flyers Inc. may refund the verified difference between the amount originally charged and the lower comparable public fare.",
        "2. Agency Credit",
        "Where a direct refund is not operationally practical but another transparent remedy is appropriate, Noam Flyers Inc. may issue an applicable agency credit for the verified difference.",
        "3. Eligible Cancellation and Reversal",
        "If the reservation remains within an applicable cancellation period and the airline fare permits cancellation without loss of the applicable airfare, Noam Flyers Inc. may offer to cancel the reservation and process the applicable reversal in accordance with the relevant cancellation conditions.",
        "The available remedy may depend on:",
        "• Ticket status",
        "• Time elapsed since booking",
        "• Payment status",
        "• Airline fare rules",
        "• Supplier restrictions",
        "• Cancellation eligibility",
        "• Operational feasibility",
        "The applicable remedy will be communicated when the claim is resolved."
      ],
      twoColumn: true
    },
    {
      icon: AlertCircle,
      title: "Excluded Offers",
      content: [
        "The following types of fares or offers are generally excluded from this Price Match Promise:",
        "• Member-only fares",
        "• Login-only fares",
        "• Subscription fares",
        "• Corporate fares",
        "• Negotiated fares",
        "• Student fares",
        "• Military fares",
        "• Tour-operator fares",
        "• Group fares",
        "• Charter fares",
        "• Consolidator fares",
        "• Unpublished fares",
        "• Opaque fares",
        "• Auction or bidding-based fares",
        "• Coupon-dependent prices unavailable to the general public",
        "• Loyalty-point or loyalty-redemption offers",
        "• Cashback offers",
        "• Financing-specific offers",
        "• Obvious pricing errors",
        "• Metasearch preview prices that are not the final checkout total",
        "• Prices that cannot be reproduced or independently verified",
        "• Prices requiring a different point of sale",
        "• Prices available only in a different country or market",
        "• Prices dependent on different tax residency",
        "• Prices involving materially different currency-conversion treatment",
        "• Prices requiring a payment method unavailable to the claimant",
        "Offers bundled with unrelated services that materially change the effective airfare may also be excluded."
      ],
      twoColumn: true
    },
    {
      icon: Globe,
      title: "Online Booking vs. Assisted Booking",
      content: [
        "Tickettooceania.com may provide both self-service online booking and assisted booking through telephone, chat, or email.",
        "If the original reservation was made through an assisted channel, the comparison must take into account the relevant service level.",
        "For example, an online-only competitor fare will not automatically invalidate an assisted Tickettooceania.com booking where the assisted transaction included a clearly disclosed service fee and the competitor fare does not provide comparable assisted service.",
        "However, if a customer can demonstrate that another publicly available assisted-booking transaction for the same itinerary provides a lower verified total, including applicable mandatory assisted-booking charges, Noam Flyers Inc. may review that claim under the same Price Match criteria."
      ]
    },
    {
      icon: AlertCircle,
      title: "Abusive or Invalid Claims",
      content: [
        "Noam Flyers Inc. reserves the right to decline repeated, abusive, fraudulent, or bad-faith Price Match submissions.",
        "This may include claims involving:",
        "• Manipulated screenshots",
        "• Altered booking information",
        "• Stale cached prices",
        "• Automated or artificially generated pricing results",
        "• Scraped prices that cannot be purchased",
        "• Offers that were never genuinely available for public purchase",
        "• Repeated claims based solely on normal dynamic price fluctuations",
        "Airline fares can change rapidly, sometimes within minutes. The purpose of this Price Match Promise is to address objectively verifiable price differences, not to guarantee protection against every future movement in airline pricing."
      ],
      twoColumn: true
    },
    {
      icon: Shield,
      title: "Effect on Your Original Booking",
      content: [
        "Nothing in this Price Match Promise changes the fact that Tickettooceania.com is an independent travel agency and that airline inventory, ticket conditions, and fare rules are controlled by the applicable airline or travel supplier.",
        "Payment for the original booking is processed through the applicable booking and payment arrangements of Noam Flyers Inc.",
        "Approval of a Price Match claim does not guarantee that any later voluntary cancellation, exchange, refund, or modification will be free of airline or agency fees.",
        "If a Price Match claim is denied, the original booking remains subject to the fare rules, conditions, and policies presented at the time of booking, together with any other applicable Tickettooceania.com policies."
      ]
    },
    {
      icon: FileText,
      title: "Price Match Summary",
      content: [
        "Claim Component: Tickettooceania.com Rule",
        "Claim Window: Within 24 hours of booking and before the first departure",
        "Compared Price: Same itinerary, passenger mix, cabin, fare conditions, and mandatory charges",
        "Proof Required: Booking reference, comparison URL where available, screenshots/evidence, timestamp, and currency",
        "Mandatory Charges: Base fare, applicable airline charges, known taxes, and known mandatory agency charges",
        "Excluded Prices: Optional ancillary services, member-only fares, coupon-only savings, opaque fares, loyalty redemptions, and non-public fares",
        "Remedies: Verified difference refund, agency credit, or eligible cancellation/reversal where operationally feasible",
        "Online vs. Assisted: Must be compared on a like-for-like service basis"
      ],
      twoColumn: true
    },
    {
      icon: CheckCircle,
      title: "Verification Requirement",
      content: [
        "Any approved Price Match claim will be resolved only after Noam Flyers Inc. independently verifies that the lower fare was publicly available, bookable, and materially identical to the confirmed Tickettooceania.com itinerary.",
        "Dynamic price differences, stale cached fares, membership-only promotions, unavailable fares, and prices that exclude mandatory charges will not qualify."
      ]
    },
    {
      icon: Heart,
      title: "Our Commitment",
      content: [
        "Tickettooceania.com aims to make airfare pricing as transparent and understandable as possible.",
        "Our Price Match Promise is designed to give customers a clear process for bringing a potentially lower publicly available fare to our attention while recognizing the highly dynamic nature of airline pricing and inventory.",
        "We encourage customers to provide complete and accurate documentation so that claims can be reviewed efficiently and consistently.",
        "",
        "Tickettooceania.com",
        "Operated by Noam Flyers Inc."
      ]
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white pt-16 sm:pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm mb-4 sm:mb-6">
            <NextLink href="/" className="transition-colors" style={{ color: '#111822' }}>
              Home
            </NextLink>
            <span className="text-[#111822]/30">›</span>
            <span className="text-[#111822]/60">Price Match Policy</span>
          </nav>

          {/* Full width container */}
          <div className="w-full">
            {/* Header Section */}
            <div className="mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight" style={{ color: '#111822' }}>
                Price Match Policy
              </h1>
              <div 
                className="w-10 sm:w-12 h-0.5 sm:h-1 mt-2 sm:mt-3 rounded-full"
                style={{
                  background: `linear-gradient(to right, #111822, #4a7ab5)`
                }}
              />
            </div>

            {/* Sections */}
            {sections.map((section, index) => {
              const Icon = section.icon;
              const isTwoColumn = section.twoColumn;
              
              return (
                <div key={index} className="mt-6 sm:mt-8">
                  {/* Heading with icon */}
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <div 
                      className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#e8edf4' }}
                    >
                      <Icon size={16} className="sm:w-4 sm:h-4" style={{ color: '#4a7ab5' }} />
                    </div>
                    <h2 className="text-sm sm:text-base lg:text-xl font-bold leading-tight" style={{ color: '#111822' }}>
                      {section.title}
                    </h2>
                  </div>
                  
                  {/* Content */}
                  <div className="w-full text-sm sm:text-base lg:text-base leading-relaxed text-justify">
                    {Array.isArray(section.content) ? (
                      <div className={isTwoColumn ? "grid grid-cols-1 md:grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-2 sm:gap-y-3 w-full" : "space-y-2 sm:space-y-3 w-full"}>
                        {section.content.map((paragraph, pIndex) => {
                          if (paragraph === "") {
                            return <div key={pIndex} className="h-1 sm:h-2 col-span-2" />;
                          }

                          if (paragraph.startsWith("•") || paragraph.match(/^\d\./)) {
                            return (
                              <div key={pIndex} className="flex items-start gap-2 w-full col-span-2 md:col-span-1 text-justify">
                                <div 
                                  className="w-1.5 h-1.5 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"
                                  style={{ backgroundColor: '#4a7ab5' }}
                                />
                                <span className="leading-relaxed text-sm sm:text-base flex-1" style={{ color: '#111822/60' }}>
                                  {paragraph}
                                </span>
                              </div>
                            );
                          }

                          return (
                            <p key={pIndex} className="w-full col-span-2 leading-relaxed text-sm sm:text-base" style={{ color: '#111822/60' }}>
                              {paragraph}
                            </p>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="w-full overflow-x-auto overflow-y-hidden">
                        <div className="min-w-[640px] sm:min-w-0">
                          {section.content}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Footer Note */}
            <div className="mt-8 sm:mt-10 p-4 sm:p-6 rounded-lg" style={{ backgroundColor: '#f5f7fa' }}>
              <p className="text-sm sm:text-base text-center" style={{ color: '#111822/60' }}>
                {BRAND.name}
              </p>
              <p className="text-sm sm:text-base text-center" style={{ color: '#111822/60' }}>
                Operated by Noam Flyers Inc.
              </p>
            </div>

            {/* Call to Action */}
            <div 
              className="mt-8 sm:mt-10 p-4 sm:p-6 rounded-lg text-white w-full"
              style={{
                background: `linear-gradient(to right, #111822, #4a7ab5)`
              }}
            >
              <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-1.5 sm:mb-2 !text-white">
                Need Help With Your Travel Plans?
              </h3>
              <p className="text-sm sm:text-base mb-3 sm:mb-4 text-white/80">
                Our travel experts are here to assist you with flight bookings, changes, and more.
              </p>
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:scale-105 text-sm sm:text-base"
                style={{
                  backgroundColor: '#ffffff',
                  color: '#111822'
                }}
              >
                <Phone size={16} className="sm:w-4 sm:h-4" />
                Call Us Now: {CONTACT.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}