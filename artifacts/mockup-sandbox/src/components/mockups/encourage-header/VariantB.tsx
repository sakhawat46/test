import React, { useState } from "react";
import { Check, ChevronRight, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import "./_group.css";

export function VariantB() {
  const [selectedPlan, setSelectedPlan] = useState<string>("3-month");

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F7FF] via-white to-[#FEF0F5] flex justify-center p-4 font-['Inter']">
      <div className="w-full max-w-[460px] bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden relative flex flex-col">
        {/* Top accent bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#4EB7C0] to-[#F0327A]" />

        {/* Nav bar */}
        <div className="px-6 pt-5 pb-4 flex items-center justify-between border-b border-gray-100 bg-white sticky top-0 z-10">
          <button className="text-sm text-muted-foreground hover:text-gray-900 transition-colors w-[80px] text-left">
            ← Back
          </button>
          
          <div className="font-bold text-[15px] tracking-tight">
            Sculpt<span className="text-[#4EB7C0]">Rx</span>
          </div>

          <div className="w-[80px] flex justify-end">
            <div className="flex items-center gap-1.5 bg-[#4EB7C0]/10 px-2 py-1 rounded-full border border-[#4EB7C0]/20">
              <div className="relative flex h-2 w-2">
                <span className="animate-pulse-dot absolute inline-flex h-full w-full rounded-full bg-[#4EB7C0] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4EB7C0]"></span>
              </div>
              <span className="text-[10px] font-medium text-[#4EB7C0] whitespace-nowrap leading-none tracking-tight">
                Physician ready
              </span>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto pb-24">
          <div className="px-6 pt-6 flex flex-col gap-6">
            
            {/* Medication Chip */}
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-1.5 bg-[#4EB7C0]/10 text-[#4EB7C0] px-3 py-1.5 rounded-full text-xs font-medium">
                <Check className="w-3.5 h-3.5" />
                Semaglutide selected
              </div>
            </div>

            {/* Heading */}
            <div className="text-center">
              <h1 className="font-['Playfair_Display'] text-3xl font-bold text-gray-900 mb-2">
                Choose your plan.
              </h1>
              <p className="text-gray-500 text-sm">
                Commit to your health journey. Cancel anytime.
              </p>
            </div>

            {/* Plans */}
            <div className="flex flex-col gap-3">
              {/* Plan 1 */}
              <div 
                onClick={() => setSelectedPlan("1-month")}
                className={`p-4 rounded-2xl border-2 transition-all cursor-pointer relative overflow-hidden ${
                  selectedPlan === "1-month" 
                    ? "border-[#4EB7C0] bg-[#4EB7C0]/5" 
                    : "border-gray-100 hover:border-gray-200"
                }`}
              >
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="font-semibold text-gray-900">Month-to-Month</h3>
                    <p className="text-sm text-gray-500">Billed monthly</p>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-lg text-gray-900">$229</span>
                    <span className="text-sm text-gray-500">/mo</span>
                  </div>
                </div>
              </div>

              {/* Plan 2 */}
              <div 
                onClick={() => setSelectedPlan("3-month")}
                className={`p-4 rounded-2xl border-2 transition-all cursor-pointer relative overflow-hidden ${
                  selectedPlan === "3-month" 
                    ? "border-[#4EB7C0] bg-[#4EB7C0]/5 shadow-sm" 
                    : "border-gray-100 hover:border-gray-200"
                }`}
              >
                {/* Most Popular Badge */}
                <div className="absolute top-0 right-0 bg-[#F0327A] text-white text-[10px] font-bold px-2 py-0.5 rounded-bl-lg uppercase tracking-wider">
                  MOST POPULAR
                </div>
                
                <div className="flex justify-between items-start mb-1 pt-1">
                  <div>
                    <h3 className="font-semibold text-gray-900">3-Month Commitment</h3>
                    <p className="text-sm text-[#4EB7C0] font-medium mt-0.5">Save $60 total</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1.5 justify-end">
                      <span className="text-xs text-gray-400 line-through">$229</span>
                      <span className="font-bold text-xl text-gray-900">$209</span>
                    </div>
                    <span className="text-sm text-gray-500">/mo</span>
                  </div>
                </div>
              </div>

              {/* Plan 3 */}
              <div 
                onClick={() => setSelectedPlan("6-month")}
                className={`p-4 rounded-2xl border-2 transition-all cursor-pointer relative overflow-hidden ${
                  selectedPlan === "6-month" 
                    ? "border-[#4EB7C0] bg-[#4EB7C0]/5" 
                    : "border-gray-100 hover:border-gray-200"
                }`}
              >
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="font-semibold text-gray-900">6-Month Commitment</h3>
                    <p className="text-sm text-[#4EB7C0] font-medium mt-0.5">Save $180 total</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1.5 justify-end">
                      <span className="text-xs text-gray-400 line-through">$229</span>
                      <span className="font-bold text-lg text-gray-900">$199</span>
                    </div>
                    <span className="text-sm text-gray-500">/mo</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Perks */}
            <div className="bg-gray-50 rounded-xl p-4 mt-2">
              <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-3">Included in all plans</h4>
              <ul className="space-y-2.5">
                {[
                  "Provider consultation & prescription",
                  "Medication & supplies shipped to door",
                  "Ongoing medical support & check-ins",
                  "Nutrition & lifestyle guidance"
                ].map((perk, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-[#4EB7C0] shrink-0 mt-0.5" />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Fixed Bottom Action */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-white border-t border-gray-100 pb-8">
          <Button className="w-full bg-gray-900 hover:bg-black text-white h-14 rounded-full text-base font-semibold shadow-lg shadow-gray-200 flex items-center justify-center gap-2 transition-transform active:scale-[0.98]">
            Continue
            <ChevronRight className="w-5 h-5" />
          </Button>
          <p className="text-center text-xs text-gray-400 mt-4">
            No charge until provider approval
          </p>
        </div>
      </div>
    </div>
  );
}