import React from "react";

export default function CheckoutE() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F7FF] via-white to-[#FEF0F5] flex flex-col items-center py-10 px-4 font-sans text-[#38404B]">
      {/* Container */}
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden max-w-[460px] w-full relative">
        
        {/* Top accent bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#4EB7C0] to-[#F0327A]" />

        {/* Nav */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-50">
          <button className="text-gray-400 hover:text-[#38404B] transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="font-serif italic font-bold text-xl tracking-tight">SculptRx</div>
          <div className="w-5" /> {/* Balance */}
        </div>

        <div className="p-6 space-y-8">
          
          {/* Plan Summary Card */}
          <div className="bg-[#F5F7FF] rounded-2xl p-5 border border-blue-50/50">
            <div className="inline-block bg-[#FEF0F5] text-[#F0327A] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-3">
              Pre-authorization only
            </div>
            <h2 className="text-lg font-bold mb-1">SculptRx Semaglutide Program</h2>
            <p className="text-sm text-gray-500 mb-4">3-Month Supply • $209/mo</p>
            
            <div className="bg-white rounded-xl p-3 flex items-center justify-between border border-gray-100 shadow-sm">
              <span className="text-sm font-medium">Due Now</span>
              <div className="flex items-center gap-1.5">
                <span className="text-lg">🎉</span>
                <span className="font-bold text-lg text-[#4EB7C0]">$0</span>
              </div>
            </div>
          </div>

          {/* ENCOURAGEMENT ELEMENT - Milestone Tracker */}
          <div className="px-2">
            <div className="relative flex items-center justify-between mb-3">
              {/* Connecting Lines */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[2px] bg-gray-100 z-0"></div>
              {/* Completed lines */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[75%] h-[2px] bg-[#4EB7C0] z-0"></div>
              
              {/* Step 1: Quiz */}
              <div className="relative z-10 flex flex-col items-center gap-1.5 w-12">
                <div className="w-5 h-5 rounded-full bg-[#4EB7C0] flex items-center justify-center text-white shrink-0">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="text-[10px] font-medium text-[#4EB7C0] whitespace-nowrap absolute top-full mt-1">Quiz</span>
              </div>

              {/* Step 2: Medication */}
              <div className="relative z-10 flex flex-col items-center gap-1.5 w-12">
                <div className="w-5 h-5 rounded-full bg-[#4EB7C0] flex items-center justify-center text-white shrink-0">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="text-[10px] font-medium text-[#4EB7C0] whitespace-nowrap absolute top-full mt-1">Meds</span>
              </div>

              {/* Step 3: Plan */}
              <div className="relative z-10 flex flex-col items-center gap-1.5 w-12">
                <div className="w-5 h-5 rounded-full bg-[#4EB7C0] flex items-center justify-center text-white shrink-0">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="text-[10px] font-medium text-[#4EB7C0] whitespace-nowrap absolute top-full mt-1">Plan</span>
              </div>

              {/* Step 4: Checkout */}
              <div className="relative z-10 flex flex-col items-center gap-1.5 w-12">
                <div className="w-6 h-6 rounded-full bg-white border-[2.5px] border-[#4EB7C0] flex items-center justify-center shrink-0 shadow-[0_0_0_3px_rgba(78,183,192,0.1)]">
                  <div className="w-2 h-2 rounded-full bg-[#4EB7C0] animate-pulse"></div>
                </div>
                <span className="text-[11px] font-bold text-[#38404B] whitespace-nowrap absolute top-full mt-0.5">Checkout</span>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="font-serif italic text-[13px] text-gray-500">
                "Your future self will thank you for this moment."
              </p>
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-6">
            <div>
              <h3 className="text-[15px] font-bold mb-3 flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
                Shipping Details
              </h3>
              <div className="space-y-3">
                <input type="text" placeholder="Full Name" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#4EB7C0]/20 focus:border-[#4EB7C0] transition-all" />
                <input type="text" placeholder="Street Address" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#4EB7C0]/20 focus:border-[#4EB7C0] transition-all" />
                <div className="grid grid-cols-2 gap-3">
                  <input type="text" placeholder="City" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#4EB7C0]/20 focus:border-[#4EB7C0] transition-all" />
                  <input type="text" placeholder="ZIP Code" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#4EB7C0]/20 focus:border-[#4EB7C0] transition-all" />
                </div>
              </div>
            </div>

            <div className="pt-2">
              <h3 className="text-[15px] font-bold mb-3 flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                Payment Method
              </h3>
              <div className="space-y-3">
                <div className="relative">
                  <input type="text" placeholder="Card Number" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#4EB7C0]/20 focus:border-[#4EB7C0] transition-all" />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1">
                    <div className="w-8 h-5 bg-gray-200 rounded text-[9px] flex items-center justify-center font-bold text-gray-500">VISA</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <input type="text" placeholder="MM/YY" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#4EB7C0]/20 focus:border-[#4EB7C0] transition-all" />
                  <input type="text" placeholder="CVC" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#4EB7C0]/20 focus:border-[#4EB7C0] transition-all" />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 space-y-4">
            <button className="w-full bg-[#4EB7C0] hover:bg-[#43a2aa] text-white font-bold py-4 rounded-full shadow-lg shadow-[#4EB7C0]/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2">
              Secure My Spot
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            
            <div className="flex items-center justify-center text-[11px] text-gray-400 gap-2">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              <span>256-bit SSL • Pre-authorization only • Cancel anytime</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
