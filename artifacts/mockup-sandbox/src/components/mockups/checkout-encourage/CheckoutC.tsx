import React from "react";
import { ChevronLeft, Lock, Users, Star, TrendingDown } from "lucide-react";

export default function CheckoutC() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F7FF] via-white to-[#FEF0F5] flex items-start justify-center p-4 sm:p-8 font-sans">
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden max-w-[460px] w-full sm:w-[390px] relative flex flex-col">
        {/* 1. Top gradient accent bar + nav */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#4EB7C0] to-[#F0327A]" />
        <div className="px-6 py-4 flex items-center justify-between border-b border-gray-50">
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="font-serif text-xl font-semibold tracking-tight text-[#38404B]">
            SculptRx
          </div>
          <div className="w-5" /> {/* Spacer for centering */}
        </div>

        <div className="p-6 flex flex-col gap-6">
          {/* 2. Plan summary card */}
          <div className="bg-gray-50/50 rounded-2xl p-5 border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#F0327A]/10 text-[#F0327A] text-[10px] font-bold px-2.5 py-1 rounded-bl-lg uppercase tracking-wider">
              Pre-authorization only
            </div>
            <h3 className="font-serif text-xl font-bold text-[#38404B] mb-1 pr-24 leading-tight">
              SculptRx Semaglutide Program
            </h3>
            <p className="text-sm text-gray-500 mb-4 font-medium">
              3-Month Supply
            </p>
            <div className="flex items-end justify-between">
              <div className="text-3xl font-bold text-[#38404B] font-serif leading-none">
                $209<span className="text-base font-sans font-normal text-gray-500">/mo</span>
              </div>
              <div className="bg-[#4EB7C0]/10 text-[#4EB7C0] text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <span>🎉</span> Due Now: $0
              </div>
            </div>
          </div>

          {/* 3. ENCOURAGEMENT ELEMENT (Variant C) */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-3 py-4 flex items-stretch justify-between">
            {/* Stat 1 */}
            <div className="flex-1 flex flex-col items-center justify-center text-center px-1">
              <Users className="w-5 h-5 text-[#4EB7C0] mb-2.5" strokeWidth={2.5} />
              <div className="font-serif text-[22px] font-bold text-[#38404B] leading-none mb-1.5">
                2,400+
              </div>
              <div className="text-[9px] uppercase tracking-widest text-gray-400 font-bold leading-tight">
                Women<br/>Treated
              </div>
            </div>

            {/* Divider */}
            <div className="w-px bg-gray-100 self-center h-12 mx-1" />

            {/* Stat 2 */}
            <div className="flex-1 flex flex-col items-center justify-center text-center px-1">
              <Star className="w-5 h-5 text-[#F0327A] mb-2.5" strokeWidth={2.5} />
              <div className="font-serif text-[22px] font-bold text-[#38404B] leading-none mb-1.5">
                94%
              </div>
              <div className="text-[9px] uppercase tracking-widest text-gray-400 font-bold leading-tight">
                Client<br/>Satisfaction
              </div>
            </div>

            {/* Divider */}
            <div className="w-px bg-gray-100 self-center h-12 mx-1" />

            {/* Stat 3 */}
            <div className="flex-1 flex flex-col items-center justify-center text-center px-1">
              <TrendingDown className="w-5 h-5 text-[#4EB7C0] mb-2.5" strokeWidth={2.5} />
              <div className="font-serif text-[22px] font-bold text-[#38404B] leading-none mb-1.5">
                15%
              </div>
              <div className="text-[9px] uppercase tracking-widest text-gray-400 font-bold leading-tight">
                Avg. Weight<br/>Lost
              </div>
            </div>
          </div>

          {/* 4. Shipping fields */}
          <div>
            <h4 className="text-sm font-bold text-[#38404B] mb-3">
              Shipping Address
            </h4>
            <div className="space-y-2.5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#4EB7C0]/20 focus:border-[#4EB7C0] transition-all placeholder:text-gray-400"
              />
              <input
                type="text"
                placeholder="Street Address"
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#4EB7C0]/20 focus:border-[#4EB7C0] transition-all placeholder:text-gray-400"
              />
              <div className="grid grid-cols-2 gap-2.5">
                <input
                  type="text"
                  placeholder="City"
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#4EB7C0]/20 focus:border-[#4EB7C0] transition-all placeholder:text-gray-400"
                />
                <input
                  type="text"
                  placeholder="ZIP Code"
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#4EB7C0]/20 focus:border-[#4EB7C0] transition-all placeholder:text-gray-400"
                />
              </div>
            </div>
          </div>

          {/* 5. Payment section */}
          <div className="pt-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px bg-gray-100 flex-1" />
              <h4 className="text-sm font-bold text-[#38404B]">Payment Details</h4>
              <div className="h-px bg-gray-100 flex-1" />
            </div>
            <div className="space-y-2.5">
              <input
                type="text"
                placeholder="Card Number"
                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#4EB7C0]/20 focus:border-[#4EB7C0] transition-all placeholder:text-gray-400"
              />
              <div className="grid grid-cols-2 gap-2.5">
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#4EB7C0]/20 focus:border-[#4EB7C0] transition-all placeholder:text-gray-400"
                />
                <input
                  type="text"
                  placeholder="CVC"
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#4EB7C0]/20 focus:border-[#4EB7C0] transition-all placeholder:text-gray-400"
                />
              </div>
            </div>
          </div>

          {/* 6. Button */}
          <div className="mt-2">
            <button className="w-full bg-[#4EB7C0] hover:bg-[#43a1a9] text-white font-bold text-[17px] py-4 rounded-full shadow-lg shadow-[#4EB7C0]/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2">
              Secure My Spot <span className="text-xl font-normal leading-none">→</span>
            </button>

            {/* 7. Trust line */}
            <div className="flex items-center justify-center gap-1.5 text-[11px] font-medium text-gray-400 mt-4">
              <Lock className="w-3 h-3" />
              <span>256-bit SSL</span>
              <span className="text-gray-300">&bull;</span>
              <span>Pre-authorization only</span>
              <span className="text-gray-300">&bull;</span>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
