import React from "react";
import { Check, ChevronLeft, Heart, Users } from "lucide-react";

export function VariantC() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5F7FF] via-white to-[#FEF0F5] font-['Inter'] flex justify-center p-4 sm:p-8">
      {/* Phone container */}
      <div className="w-full max-w-[390px] bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden relative flex flex-col">
        {/* Top Accent Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#4EB7C0] to-[#F0327A]" />

        {/* Nav Bar */}
        <div className="px-5 pt-5 pb-4 flex items-center justify-between border-b border-gray-100">
          {/* Left: Back */}
          <button className="flex items-center text-sm text-muted-foreground hover:text-gray-900 transition-colors w-[80px]">
            <ChevronLeft className="w-4 h-4 mr-0.5" />
            Back
          </button>

          {/* Center: Logo */}
          <div className="font-['Playfair_Display'] font-bold text-[17px] tracking-tight shrink-0">
            Sculpt<span className="text-[#4EB7C0]">Rx</span>
          </div>

          {/* Right: Social Proof Encouragement Element */}
          <div className="flex items-center justify-end w-[80px]">
            <div className="flex flex-col items-end">
              <div className="flex -space-x-1.5 mb-0.5">
                <div className="w-4 h-4 rounded-full border border-white bg-gradient-to-br from-pink-300 to-rose-300 z-30" />
                <div className="w-4 h-4 rounded-full border border-white bg-gradient-to-br from-rose-200 to-pink-400 z-20" />
                <div className="w-4 h-4 rounded-full border border-white bg-gradient-to-br from-pink-400 to-[#F0327A] z-10 flex items-center justify-center">
                  <Heart className="w-2 h-2 text-white fill-white" />
                </div>
              </div>
              <span className="text-[10px] font-medium text-[#F0327A] leading-tight whitespace-nowrap">
                2,400+ women
              </span>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6 pb-28">
          {/* Medication Chip */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-1.5 bg-[#4EB7C0]/10 text-[#4EB7C0] px-3 py-1.5 rounded-full text-xs font-medium">
              <Check className="w-3.5 h-3.5" />
              Semaglutide selected
            </div>
          </div>

          <h1 className="font-['Playfair_Display'] text-3xl font-bold text-center text-gray-900 mb-8">
            Choose your plan.
          </h1>

          {/* Plan Cards */}
          <div className="space-y-4">
            {/* 6-Month Plan (Recommended) */}
            <div className="relative rounded-2xl border-2 border-[#4EB7C0] bg-[#4EB7C0]/5 p-5 cursor-pointer shadow-sm transition-all hover:shadow-md">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#4EB7C0] text-white px-3 py-0.5 rounded-full text-[11px] font-bold tracking-wider uppercase">
                Most Popular
              </div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-gray-900 text-lg">6-Month Plan</h3>
                <div className="w-5 h-5 rounded-full border-2 border-[#4EB7C0] flex items-center justify-center bg-[#4EB7C0]">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
              </div>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-2xl font-bold text-gray-900">$199</span>
                <span className="text-sm text-gray-500">/mo</span>
              </div>
              <p className="text-sm text-gray-600">Billed $1,194 every 6 months</p>
            </div>

            {/* 3-Month Plan */}
            <div className="rounded-2xl border border-gray-200 bg-white p-5 cursor-pointer hover:border-[#4EB7C0]/50 transition-colors">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-gray-900 text-lg">3-Month Plan</h3>
                <div className="w-5 h-5 rounded-full border-2 border-gray-300" />
              </div>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-2xl font-bold text-gray-900">$209</span>
                <span className="text-sm text-gray-500">/mo</span>
              </div>
              <p className="text-sm text-gray-600">Billed $627 every 3 months</p>
            </div>

            {/* Month-to-Month Plan */}
            <div className="rounded-2xl border border-gray-200 bg-white p-5 cursor-pointer hover:border-[#4EB7C0]/50 transition-colors">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-gray-900 text-lg">Month-to-Month</h3>
                <div className="w-5 h-5 rounded-full border-2 border-gray-300" />
              </div>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-2xl font-bold text-gray-900">$229</span>
                <span className="text-sm text-gray-500">/mo</span>
              </div>
              <p className="text-sm text-gray-600">Billed monthly. Cancel anytime.</p>
            </div>
          </div>
        </div>

        {/* Fixed Bottom Button Bar */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-white border-t border-gray-100">
          <button className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-3.5 rounded-xl shadow-lg shadow-gray-200 transition-all active:scale-[0.98]">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
