import React from "react";
import { ArrowLeft, Check, Shield, Stethoscope } from "lucide-react";

export default function CheckoutB() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F7FF] via-white to-[#FEF0F5] font-sans text-[#38404B] flex justify-center p-4 sm:p-8">
      <div className="w-full max-w-[460px] bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex flex-col relative">
        {/* Top accent bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#4EB7C0] to-[#F0327A]" />

        {/* Nav */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-50">
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="font-serif text-xl font-bold tracking-tight text-[#38404B]">
            Sculpt<span className="text-[#4EB7C0]">Rx</span>
          </div>
          <div className="w-5" /> {/* Spacer for centering */}
        </div>

        <div className="p-6 flex-1 flex flex-col gap-6">
          {/* Plan Summary Card */}
          <div className="rounded-2xl border border-gray-100 bg-gray-50/50 p-5 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#F0327A]/10 text-[#F0327A] text-[10px] font-bold uppercase tracking-wider py-1 px-3 rounded-bl-xl font-medium">
              Pre-authorization only
            </div>
            
            <h2 className="text-lg font-bold text-[#38404B] mb-1 pr-24">
              SculptRx Semaglutide Program
            </h2>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm text-gray-500 font-medium">3-Month Supply</span>
              <span className="w-1 h-1 rounded-full bg-gray-300" />
              <span className="text-sm font-semibold text-[#4EB7C0]">$209/mo</span>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-200/60">
              <span className="text-sm text-gray-500">Billed after doctor approval</span>
              <div className="bg-[#4EB7C0]/10 text-[#4EB7C0] px-3 py-1.5 rounded-full text-sm font-bold flex items-center gap-1.5">
                <span>🎉</span> Due Now: $0
              </div>
            </div>
          </div>

          {/* YOUR ENCOURAGEMENT ELEMENT - Variant B */}
          <div className="bg-white border-l-4 border-[#F0327A] rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border-y border-r border-gray-100 p-4">
            <div className="flex justify-between items-start mb-2.5">
              <div className="flex items-start gap-2.5">
                <div className="bg-[#F0327A]/10 p-1.5 rounded-md text-[#F0327A] mt-0.5">
                  <Stethoscope className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#38404B] leading-tight">
                    Only 4 physician slots left this week
                  </div>
                </div>
              </div>
              <div className="text-[11px] font-medium text-gray-400 uppercase tracking-wide whitespace-nowrap mt-1">
                Slots fill fast
              </div>
            </div>
            
            <div className="pl-9 pr-1">
              <div className="relative h-1.5 w-full bg-gray-100 rounded-full overflow-hidden mb-2">
                <div className="absolute top-0 left-0 h-full w-[80%] bg-[#F0327A] rounded-full" />
              </div>
              <div className="flex justify-between w-full px-1">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4EB7C0]" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#4EB7C0]" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#4EB7C0]" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#4EB7C0]" />
                <div className="w-1.5 h-1.5 rounded-full bg-gray-200" />
              </div>
            </div>
          </div>

          {/* Shipping Fields */}
          <div>
            <h3 className="text-sm font-bold text-[#38404B] mb-3">Shipping Details</h3>
            <div className="space-y-3">
              <div className="h-12 w-full border border-gray-200 rounded-xl bg-white/50 px-4 flex items-center text-gray-400 text-sm">
                Full Name
              </div>
              <div className="h-12 w-full border border-gray-200 rounded-xl bg-white/50 px-4 flex items-center text-gray-400 text-sm">
                Shipping Address
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="h-12 w-full border border-gray-200 rounded-xl bg-white/50 px-4 flex items-center text-gray-400 text-sm">
                  City
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="h-12 w-full border border-gray-200 rounded-xl bg-white/50 px-4 flex items-center text-gray-400 text-sm">
                    State
                  </div>
                  <div className="h-12 w-full border border-gray-200 rounded-xl bg-white/50 px-4 flex items-center text-gray-400 text-sm">
                    Zip
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Section */}
          <div className="pt-2 border-t border-gray-100">
            <h3 className="text-sm font-bold text-[#38404B] mb-3">Secure Payment</h3>
            <div className="space-y-3">
              <div className="h-12 w-full border border-gray-200 rounded-xl bg-white/50 px-4 flex items-center text-gray-400 text-sm">
                Card Number
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="h-12 w-full border border-gray-200 rounded-xl bg-white/50 px-4 flex items-center text-gray-400 text-sm">
                  MM/YY
                </div>
                <div className="h-12 w-full border border-gray-200 rounded-xl bg-white/50 px-4 flex items-center text-gray-400 text-sm">
                  CVC
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Footer */}
        <div className="p-6 pt-2 bg-white mt-auto">
          <button className="w-full bg-[#4EB7C0] hover:bg-[#43a1a9] text-white font-bold py-4 rounded-full shadow-lg shadow-[#4EB7C0]/20 transition-all flex items-center justify-center gap-2 mb-4">
            Secure My Spot
            <ArrowLeft className="w-5 h-5 rotate-180" />
          </button>

          <div className="flex items-center justify-center gap-2 text-xs text-gray-500 font-medium">
            <Shield className="w-3.5 h-3.5 text-gray-400" />
            <span>256-bit SSL</span>
            <span className="text-gray-300">&bull;</span>
            <span>Pre-authorization only</span>
            <span className="text-gray-300">&bull;</span>
            <span>Cancel anytime</span>
          </div>
        </div>
      </div>
    </div>
  );
}
