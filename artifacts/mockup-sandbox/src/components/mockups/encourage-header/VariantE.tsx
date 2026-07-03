import React, { useState } from "react";
import { Check, ArrowLeft, Sparkles, ChevronRight } from "lucide-react";

export function VariantE() {
  const [selectedPlan, setSelectedPlan] = useState("3-month");

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4 font-sans">
      <div className="w-[390px] h-[844px] bg-gradient-to-b from-[#F5F7FF] via-white to-[#FEF0F5] rounded-[40px] shadow-2xl overflow-hidden relative border-[8px] border-gray-900 flex flex-col">
        {/* Top Accent Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#4EB7C0] to-[#F0327A]" />

        {/* Header / Nav */}
        <div className="px-6 pt-5 pb-4 flex items-center justify-between border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-10">
          <button className="text-sm text-gray-500 font-medium flex items-center hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back
          </button>
          <div className="text-lg font-bold text-[#38404B] tracking-tight">
            Sculpt<span className="text-[#4EB7C0]">Rx</span>
          </div>
          <div className="w-[52px]" /> {/* Spacer for centering */}
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6 pt-6 pb-24 space-y-6">
          
          {/* Selected Medication Chip */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-1.5 bg-[#4EB7C0]/10 text-[#4EB7C0] px-3 py-1 rounded-full text-xs font-semibold">
              <Check className="w-3.5 h-3.5" />
              Semaglutide selected
            </div>
          </div>

          {/* Heading & Encouragement Element */}
          <div className="text-center space-y-4">
            <h1 className="font-['Playfair_Display'] text-[26px] font-bold text-[#38404B] leading-tight">
              Choose your plan.
            </h1>
            
            {/* The Encouragement Element - Two-line hero quote style */}
            <div className="bg-[#4EB7C0]/5 border border-[#4EB7C0]/10 rounded-2xl p-5 shadow-sm">
              <div className="font-['Playfair_Display'] italic text-[22px] text-[#4EB7C0] mb-2 font-medium">
                "Almost there."
              </div>
              <p className="text-sm text-gray-600 font-medium">
                Your personalized plan is one step away. Our medical team is ready to review.
              </p>
            </div>
          </div>

          {/* Plan Options */}
          <div className="space-y-3 pt-2">
            
            {/* 6-Month Plan */}
            <button
              onClick={() => setSelectedPlan("6-month")}
              className={`w-full relative text-left border-2 rounded-2xl p-4 transition-all duration-200 ${
                selectedPlan === "6-month"
                  ? "border-[#4EB7C0] bg-[#4EB7C0]/5"
                  : "border-gray-100 bg-white hover:border-gray-200"
              }`}
            >
              <div className="absolute -top-3 left-4 bg-gray-900 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                <Sparkles className="w-3 h-3 text-yellow-300" />
                Best Value
              </div>
              <div className="flex justify-between items-center mt-1">
                <div>
                  <div className="font-bold text-[#38404B] text-lg">6-Month Plan</div>
                  <div className="text-sm text-gray-500 mt-0.5">Billed every 6 months</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-[#38404B] text-xl">$199<span className="text-sm font-normal text-gray-500">/mo</span></div>
                </div>
              </div>
            </button>

            {/* 3-Month Plan */}
            <button
              onClick={() => setSelectedPlan("3-month")}
              className={`w-full relative text-left border-2 rounded-2xl p-4 transition-all duration-200 ${
                selectedPlan === "3-month"
                  ? "border-[#4EB7C0] bg-[#4EB7C0]/5 shadow-[0_0_0_1px_rgba(78,183,192,0.1)]"
                  : "border-gray-100 bg-white hover:border-gray-200"
              }`}
            >
              <div className="absolute -top-3 left-4 bg-[#F0327A] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                🔥 Most Popular
              </div>
              <div className="flex justify-between items-center mt-1">
                <div>
                  <div className="font-bold text-[#38404B] text-lg">3-Month Plan</div>
                  <div className="text-sm text-gray-500 mt-0.5">Billed every 3 months</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-[#38404B] text-xl">$209<span className="text-sm font-normal text-gray-500">/mo</span></div>
                </div>
              </div>
            </button>

            {/* Month-to-Month Plan */}
            <button
              onClick={() => setSelectedPlan("1-month")}
              className={`w-full relative text-left border-2 rounded-2xl p-4 transition-all duration-200 ${
                selectedPlan === "1-month"
                  ? "border-[#4EB7C0] bg-[#4EB7C0]/5"
                  : "border-gray-100 bg-white hover:border-gray-200"
              }`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-bold text-[#38404B] text-lg">Month-to-Month</div>
                  <div className="text-sm text-gray-500 mt-0.5">Billed monthly</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-[#38404B] text-xl">$229<span className="text-sm font-normal text-gray-500">/mo</span></div>
                </div>
              </div>
            </button>

          </div>
          
          {/* Trust Elements */}
          <div className="flex items-center justify-center gap-6 py-4">
            <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
              <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center">
                <Check className="w-3 h-3 text-gray-600" />
              </div>
              No hidden fees
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
              <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center">
                <Check className="w-3 h-3 text-gray-600" />
              </div>
              Cancel anytime
            </div>
          </div>
        </div>

        {/* Sticky Footer CTA */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-white border-t border-gray-100">
          <button className="w-full bg-[#4EB7C0] hover:bg-[#3FA1AA] text-white font-bold text-lg py-4 rounded-full shadow-lg shadow-[#4EB7C0]/20 transition-all flex items-center justify-center gap-2">
            Continue to Checkout
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </div>
  );
}
