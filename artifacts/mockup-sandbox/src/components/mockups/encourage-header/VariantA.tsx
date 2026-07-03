import React from 'react';
import { ArrowLeft, Check, Sparkles } from 'lucide-react';

export function VariantA() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5F7FF] via-white to-[#FEF0F5] font-['Inter'] pb-24">
      {/* Top Accent Bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#4EB7C0] to-[#F0327A]" />

      {/* Nav Bar */}
      <header className="px-5 pt-4 pb-4 flex items-center justify-between border-b border-gray-100 bg-white/50 backdrop-blur-md sticky top-0 z-10">
        <button className="text-sm font-medium text-gray-500 flex items-center gap-1 hover:text-gray-900 transition-colors w-[80px]">
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
        
        <div className="font-bold text-[16px] tracking-tight text-center">
          Sculpt<span className="text-[#4EB7C0]">Rx</span>
        </div>
        
        <div className="w-[80px] flex justify-end">
          <div className="inline-flex items-center gap-1.5 bg-[#4EB7C0]/10 text-[#2B868E] px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap border border-[#4EB7C0]/20">
            Last step <Sparkles className="w-3 h-3 text-[#4EB7C0]" />
          </div>
        </div>
      </header>

      <main className="max-w-[460px] mx-auto px-5 pt-8 flex flex-col items-center">
        {/* Medication Chip */}
        <div className="inline-flex items-center gap-2 bg-[#4EB7C0]/10 text-[#2B868E] px-4 py-1.5 rounded-full text-sm font-medium mb-8">
          <div className="bg-[#4EB7C0] rounded-full p-0.5">
            <Check className="w-3 h-3 text-white stroke-[3]" />
          </div>
          Semaglutide selected
        </div>

        {/* Heading */}
        <h1 className="font-['Playfair_Display'] text-4xl font-bold text-gray-900 mb-8 text-center">
          Choose your plan.
        </h1>

        {/* Plan Cards */}
        <div className="w-full space-y-4">
          {/* Card 1 */}
          <label className="block relative bg-white rounded-3xl shadow-sm border-2 border-[#4EB7C0] overflow-hidden cursor-pointer transition-all">
            <div className="absolute top-0 right-0 bg-[#4EB7C0] text-white text-[10px] font-bold uppercase tracking-wider py-1 px-3 rounded-bl-xl">
              Most Popular
            </div>
            <div className="p-6 flex items-start gap-4">
              <div className="mt-1">
                <div className="w-5 h-5 rounded-full border-2 border-[#4EB7C0] flex items-center justify-center">
                  <div className="w-2.5 h-2.5 bg-[#4EB7C0] rounded-full" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-gray-900">3-Month Commitment</h3>
                <div className="mt-1 text-gray-500 text-sm">Billed every 3 months</div>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-[#4EB7C0]">$209</span>
                  <span className="text-gray-500 font-medium">/mo</span>
                </div>
              </div>
            </div>
          </label>

          {/* Card 2 */}
          <label className="block bg-white rounded-3xl shadow-sm border border-gray-200 opacity-70 hover:opacity-100 overflow-hidden cursor-pointer transition-all">
            <div className="p-6 flex items-start gap-4">
              <div className="mt-1">
                <div className="w-5 h-5 rounded-full border-2 border-gray-300" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-gray-900">Month-to-Month</h3>
                <div className="mt-1 text-gray-500 text-sm">Flexible, cancel anytime</div>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-gray-900">$229</span>
                  <span className="text-gray-500 font-medium">/mo</span>
                </div>
              </div>
            </div>
          </label>

          {/* Card 3 */}
          <label className="block bg-white rounded-3xl shadow-sm border border-gray-200 opacity-70 hover:opacity-100 overflow-hidden cursor-pointer transition-all">
            <div className="p-6 flex items-start gap-4">
              <div className="mt-1">
                <div className="w-5 h-5 rounded-full border-2 border-gray-300" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-gray-900">6-Month Commitment</h3>
                <div className="mt-1 text-gray-500 text-sm">Best value, billed every 6 months</div>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-gray-900">$199</span>
                  <span className="text-gray-500 font-medium">/mo</span>
                </div>
              </div>
            </div>
          </label>
        </div>
      </main>

      {/* Floating Action Button */}
      <div className="fixed bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-white via-white/90 to-transparent">
        <div className="max-w-[460px] mx-auto">
          <button className="w-full bg-[#F0327A] text-white rounded-full py-4 font-bold text-lg shadow-lg shadow-[#F0327A]/25 hover:bg-[#d82a6c] active:scale-[0.98] transition-all">
            Continue to checkout
          </button>
        </div>
      </div>
    </div>
  );
}
