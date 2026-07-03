import React from "react";
import { ArrowLeft, Shield, CheckCircle2 } from "lucide-react";

export default function CheckoutD() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F7FF] via-white to-[#FEF0F5] flex justify-center p-4 sm:p-8 font-sans text-[#38404B]">
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden max-w-[460px] w-[390px] flex flex-col relative">
        {/* Top accent bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#4EB7C0] to-[#F0327A]" />

        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-50">
          <button className="p-2 hover:bg-gray-50 rounded-full transition-colors text-gray-500">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="text-xl font-bold tracking-tight text-[#38404B]">
            Sculpt<span className="text-[#4EB7C0]">Rx</span>
          </div>
          <div className="w-9" /> {/* Spacer for centering */}
        </div>

        {/* Content */}
        <div className="flex-1 p-5 overflow-y-auto space-y-6">
          
          {/* Plan Summary Card */}
          <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#F0327A]/10 text-[#F0327A] text-[10px] font-bold px-2.5 py-1 rounded-bl-lg">
              PRE-AUTHORIZATION ONLY
            </div>
            <div className="flex items-start gap-3 mt-2">
              <div className="w-10 h-10 rounded-full bg-[#4EB7C0]/10 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5 text-[#4EB7C0]" />
              </div>
              <div>
                <h3 className="font-bold text-[#38404B] leading-tight">SculptRx Semaglutide Program</h3>
                <p className="text-sm text-gray-500 mt-0.5">3-Month Supply • $209/mo</p>
                
                <div className="mt-3 inline-flex items-center gap-1.5 bg-[#4EB7C0]/10 text-[#4EB7C0] px-2.5 py-1 rounded-full text-sm font-medium">
                  <span>🎉</span> Due Now: $0
                </div>
              </div>
            </div>
          </div>

          {/* Shipping Fields */}
          <div className="space-y-3">
            <h3 className="font-semibold text-sm text-[#38404B]">Shipping Details</h3>
            <div className="space-y-2">
              <div className="h-12 bg-gray-50 border border-gray-200 rounded-xl px-4 flex items-center text-sm text-gray-400">
                Full Legal Name
              </div>
              <div className="h-12 bg-gray-50 border border-gray-200 rounded-xl px-4 flex items-center text-sm text-gray-400">
                Shipping Address
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="h-12 bg-gray-50 border border-gray-200 rounded-xl px-4 flex items-center text-sm text-gray-400">
                  City
                </div>
                <div className="h-12 bg-gray-50 border border-gray-200 rounded-xl px-4 flex items-center text-sm text-gray-400">
                  ZIP Code
                </div>
              </div>
            </div>
          </div>

          {/* Payment Fields */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="h-px bg-gray-100 flex-1" />
              <h3 className="font-semibold text-sm text-[#38404B]">Payment Method</h3>
              <div className="h-px bg-gray-100 flex-1" />
            </div>
            <div className="space-y-2">
              <div className="h-12 bg-gray-50 border border-gray-200 rounded-xl px-4 flex items-center text-sm text-gray-400">
                Card Number
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="h-12 bg-gray-50 border border-gray-200 rounded-xl px-4 flex items-center text-sm text-gray-400">
                  MM/YY
                </div>
                <div className="h-12 bg-gray-50 border border-gray-200 rounded-xl px-4 flex items-center text-sm text-gray-400">
                  CVC
                </div>
              </div>
            </div>
          </div>

          {/* ENCOURAGEMENT ELEMENT: Variant D */}
          <div className="bg-gradient-to-br from-[#F5F7FF] to-white rounded-2xl p-4 border border-gray-100 shadow-sm mt-6">
            <div className="text-[#F0327A] text-xs tracking-widest mb-2">
              ★★★★★
            </div>
            <p className="font-serif italic text-[14px] text-[#38404B] leading-relaxed mb-3">
              "I almost didn't finish the checkout. So glad I did — I've lost 28 lbs in 4 months."
            </p>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#4EB7C0] flex items-center justify-center text-[10px] font-bold text-white">
                SM
              </div>
              <p className="text-xs text-gray-500 font-medium">
                Sarah M., Texas · Lost 28 lbs
              </p>
            </div>
          </div>

        </div>

        {/* Sticky Footer */}
        <div className="p-5 bg-white border-t border-gray-50">
          <button className="w-full bg-[#4EB7C0] hover:bg-[#45a3ab] text-white font-bold py-4 rounded-full transition-transform active:scale-[0.98] shadow-lg shadow-[#4EB7C0]/20 flex items-center justify-center gap-2">
            Secure My Spot
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </button>
          
          <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-gray-400 font-medium text-center">
            <Shield className="w-3.5 h-3.5" />
            <span>256-bit SSL · Pre-authorization only · Cancel anytime</span>
          </div>
        </div>

      </div>
    </div>
  );
}
