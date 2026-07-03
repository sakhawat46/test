import React from "react";

export function CheckoutA() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F5F7FF] via-white to-[#FEF0F5] p-4 font-sans text-[#38404B]">
      {/* Main Card */}
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden max-w-[460px] w-[390px] mx-auto flex flex-col relative">
        
        {/* Top gradient accent bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#4EB7C0] to-[#F0327A]"></div>
        
        {/* Nav */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-50">
          <button className="text-gray-400 hover:text-gray-600 transition-colors flex items-center justify-center w-8 h-8 rounded-full bg-gray-50">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          <div className="font-serif font-bold text-xl tracking-tight text-[#38404B]">
            Sculpt<span className="text-[#4EB7C0]">Rx</span>
          </div>
          <div className="w-8"></div> {/* Spacer for centering */}
        </div>

        <div className="p-6 flex flex-col gap-6 overflow-y-auto max-h-[80vh] hide-scrollbar">
          
          {/* Plan Summary Card */}
          <div className="bg-gray-50/80 rounded-2xl p-5 border border-gray-100 relative">
            <div className="absolute -top-3 left-5 bg-pink-50 text-[#F0327A] text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-pink-100 shadow-sm">
              Pre-authorization only
            </div>
            
            <h3 className="font-semibold text-lg mt-2 text-[#38404B]">SculptRx Semaglutide Program</h3>
            <div className="flex items-center gap-2 mt-1 mb-4 text-sm text-gray-500">
              <span className="bg-white px-2 py-0.5 rounded border border-gray-200 text-xs font-medium text-gray-600">3-Month Supply</span>
              <span>•</span>
              <span>$209/mo</span>
            </div>
            
            <div className="flex items-center justify-between bg-white px-4 py-3 rounded-xl border border-gray-100 shadow-sm">
              <span className="text-sm font-medium text-gray-600">🎉 Due Now</span>
              <span className="text-lg font-bold text-[#38404B]">$0.00</span>
            </div>
          </div>

          {/* ENCOURAGEMENT ELEMENT - Doctor's Note */}
          <div className="rounded-2xl p-5 border border-[#4EB7C0]/15 relative overflow-hidden" style={{ backgroundColor: 'rgba(78, 183, 192, 0.05)' }}>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#4EB7C0]">👩‍⚕️ A note from our medical team</span>
            </div>
            <p className="font-serif italic text-[17px] text-[#38404B] leading-relaxed mb-4">
              "You've made it to the final step. We're ready to review your profile and create your personalized plan."
            </p>
            <div className="text-sm font-medium text-gray-500 flex items-center gap-2">
              <div className="w-6 h-[1px] bg-gray-300"></div>
              Dr. Sarah Chen, Medical Director
            </div>
          </div>

          {/* Shipping Section */}
          <div>
            <h4 className="font-semibold text-[15px] mb-3 text-[#38404B] flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>
              </svg>
              Shipping Details
            </h4>
            <div className="space-y-3">
              <input type="text" placeholder="Full Name" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#4EB7C0]/20 focus:border-[#4EB7C0] transition-all" />
              <input type="text" placeholder="Street Address" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#4EB7C0]/20 focus:border-[#4EB7C0] transition-all" />
              <div className="grid grid-cols-2 gap-3">
                <input type="text" placeholder="City" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#4EB7C0]/20 focus:border-[#4EB7C0] transition-all" />
                <input type="text" placeholder="ZIP Code" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#4EB7C0]/20 focus:border-[#4EB7C0] transition-all" />
              </div>
            </div>
          </div>

          {/* Payment Section */}
          <div className="pt-2 border-t border-gray-100">
            <h4 className="font-semibold text-[15px] mb-3 text-[#38404B] mt-2 flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                <rect x="2" y="5" width="20" height="14" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line>
              </svg>
              Payment Method
            </h4>
            <div className="space-y-3">
              <div className="relative">
                <input type="text" placeholder="Card Number" className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#4EB7C0]/20 focus:border-[#4EB7C0] transition-all" />
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-3.5 top-3.5 text-gray-400">
                  <rect x="2" y="5" width="20" height="14" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line>
                </svg>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <input type="text" placeholder="MM/YY" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#4EB7C0]/20 focus:border-[#4EB7C0] transition-all" />
                <input type="text" placeholder="CVC" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#4EB7C0]/20 focus:border-[#4EB7C0] transition-all" />
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-2">
            <button className="w-full bg-[#4EB7C0] hover:bg-[#43a1a9] text-white font-semibold py-4 rounded-full shadow-lg shadow-[#4EB7C0]/25 transition-all flex items-center justify-center gap-2 group">
              Secure My Spot
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
            <div className="text-[11px] text-gray-400 text-center mt-4 flex items-center justify-center gap-1.5 font-medium">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              256-bit SSL · Pre-authorization only · Cancel anytime
            </div>
          </div>

        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
}
