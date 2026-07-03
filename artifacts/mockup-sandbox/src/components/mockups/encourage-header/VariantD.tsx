import React from 'react';
import { ArrowLeft, Check } from 'lucide-react';

export function VariantD() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5F7FF] via-white to-[#FEF0F5] py-8 px-4 flex justify-center items-start font-sans">
      <div className="w-full max-w-[460px] bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden mx-auto relative flex flex-col h-[850px] max-h-[90vh]">
        {/* Top Accent Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#4EB7C0] to-[#F0327A] shrink-0"></div>

        {/* Navigation */}
        <div className="px-6 pt-5 pb-4 flex items-center justify-between border-b border-gray-100 shrink-0">
          <button className="text-sm text-gray-500 hover:text-gray-800 flex items-center gap-1 font-medium transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
          <div className="font-bold text-xl tracking-tight text-[#38404B]">
            Sculpt<span className="text-[#4EB7C0]">Rx</span>
          </div>
          <div className="w-14"></div> {/* Spacer for centering */}
        </div>

        {/* Full-width step progress strip */}
        <div className="w-full bg-[#f4fafb] border-b border-[#e0f2f4] py-3.5 px-6 flex justify-between items-center relative shrink-0">
          {/* Steps */}
          <div className="flex justify-between items-center w-full z-10 relative">
            {/* Step 1: Quiz (Completed) */}
            <div className="flex flex-col items-center gap-1">
              <div className="w-6 h-6 rounded-full bg-[#4EB7C0] text-white flex items-center justify-center shadow-sm">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <span className="text-[10px] font-bold text-[#4EB7C0] uppercase tracking-wide">Quiz</span>
            </div>

            <div className="h-[2px] w-8 bg-[#4EB7C0] opacity-30 rounded-full mx-1"></div>

            {/* Step 2: Meds (Completed) */}
            <div className="flex flex-col items-center gap-1">
              <div className="w-6 h-6 rounded-full bg-[#4EB7C0] text-white flex items-center justify-center shadow-sm">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <span className="text-[10px] font-bold text-[#4EB7C0] uppercase tracking-wide">Meds</span>
            </div>

            <div className="h-[2px] w-8 bg-[#4EB7C0] rounded-full mx-1"></div>

            {/* Step 3: Plan (Active) */}
            <div className="flex flex-col items-center gap-1">
              <div className="w-7 h-7 rounded-full bg-white border-2 border-[#4EB7C0] text-[#4EB7C0] flex items-center justify-center shadow-sm relative">
                <div className="w-2.5 h-2.5 rounded-full bg-[#4EB7C0]"></div>
              </div>
              <span className="text-[11px] font-extrabold text-[#38404B] uppercase tracking-wide">Plan</span>
            </div>

            <div className="h-[2px] w-8 bg-gray-200 rounded-full mx-1"></div>

            {/* Step 4: Start (Pending) */}
            <div className="flex flex-col items-center gap-1 opacity-50">
              <div className="w-6 h-6 rounded-full bg-white border-2 border-gray-200 text-gray-400 flex items-center justify-center shadow-sm text-xs font-bold">
                4
              </div>
              <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide">Start</span>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6 pt-6 pb-8">
          <div className="inline-flex items-center gap-1.5 bg-[#f4fafb] border border-[#e0f2f4] text-[#4EB7C0] px-3 py-1.5 rounded-full text-xs font-semibold mb-6">
            <Check className="w-3.5 h-3.5" />
            Semaglutide selected
          </div>

          <h1 className="font-['Playfair_Display'] text-[26px] font-bold text-[#38404B] mb-6 leading-tight">
            Choose your plan.
          </h1>

          <div className="space-y-4 mb-8">
            {/* 3-Month Plan (Highlighted) */}
            <label className="block relative cursor-pointer group">
              <input type="radio" name="plan" className="peer sr-only" defaultChecked />
              <div className="absolute -top-3 right-4 bg-gradient-to-r from-[#F0327A] to-[#ff5c9a] text-white text-[10px] font-bold uppercase tracking-wider py-1 px-3 rounded-full shadow-sm z-10">
                🔥 Most Popular
              </div>
              <div className="p-5 rounded-2xl border-2 border-[#4EB7C0] bg-[#f4fafb] transition-all relative overflow-hidden">
                <div className="flex justify-between items-start mb-1">
                  <span className="font-bold text-[#38404B] text-lg">3-Month Plan</span>
                  <div className="w-5 h-5 rounded-full border-2 border-[#4EB7C0] flex items-center justify-center bg-[#4EB7C0]">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                </div>
                <div className="text-3xl font-bold text-[#38404B] font-['Playfair_Display']">
                  $209<span className="text-sm font-sans text-gray-500 font-medium">/mo</span>
                </div>
                <div className="text-sm text-gray-500 mt-2 font-medium">Billed $627 every 3 months</div>
              </div>
            </label>

            {/* 6-Month Plan */}
            <label className="block relative cursor-pointer group">
              <input type="radio" name="plan" className="peer sr-only" />
              <div className="absolute -top-3 right-4 bg-[#38404B] text-white text-[10px] font-bold uppercase tracking-wider py-1 px-3 rounded-full shadow-sm z-10">
                ✦ Best Value
              </div>
              <div className="p-5 rounded-2xl border-2 border-gray-100 bg-white hover:border-gray-200 transition-all peer-checked:border-[#4EB7C0] peer-checked:bg-[#f4fafb]">
                <div className="flex justify-between items-start mb-1">
                  <span className="font-bold text-[#38404B] text-lg">6-Month Plan</span>
                  <div className="w-5 h-5 rounded-full border-2 border-gray-200 group-hover:border-gray-300 flex items-center justify-center peer-checked:border-[#4EB7C0] peer-checked:bg-[#4EB7C0]">
                    <div className="w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100"></div>
                  </div>
                </div>
                <div className="text-3xl font-bold text-[#38404B] font-['Playfair_Display']">
                  $199<span className="text-sm font-sans text-gray-500 font-medium">/mo</span>
                </div>
                <div className="text-sm text-gray-500 mt-2 font-medium">Billed $1,194 every 6 months</div>
              </div>
            </label>

            {/* Month-to-Month Plan */}
            <label className="block relative cursor-pointer group">
              <input type="radio" name="plan" className="peer sr-only" />
              <div className="p-5 rounded-2xl border-2 border-gray-100 bg-white hover:border-gray-200 transition-all peer-checked:border-[#4EB7C0] peer-checked:bg-[#f4fafb]">
                <div className="flex justify-between items-start mb-1">
                  <span className="font-bold text-[#38404B] text-lg">Month-to-Month</span>
                  <div className="w-5 h-5 rounded-full border-2 border-gray-200 group-hover:border-gray-300 flex items-center justify-center peer-checked:border-[#4EB7C0] peer-checked:bg-[#4EB7C0]">
                    <div className="w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100"></div>
                  </div>
                </div>
                <div className="text-3xl font-bold text-[#38404B] font-['Playfair_Display']">
                  $229<span className="text-sm font-sans text-gray-500 font-medium">/mo</span>
                </div>
                <div className="text-sm text-gray-500 mt-2 font-medium">Billed monthly</div>
              </div>
            </label>
          </div>
        </div>

        {/* Bottom CTA Sticky Bar */}
        <div className="p-6 border-t border-gray-100 bg-white shrink-0 shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.05)] z-20">
          <button className="w-full bg-[#4EB7C0] hover:bg-[#43a2aa] text-white font-bold py-4 px-6 rounded-full transition-colors flex justify-center items-center gap-2 shadow-md shadow-[#4EB7C0]/20 text-lg">
            Continue to checkout
          </button>
        </div>
      </div>
    </div>
  );
}
