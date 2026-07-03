import React from "react";
import { Sparkles, Syringe, Pill } from "lucide-react";

export function PriceTagA() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F7FF] via-white to-[#FEF0F5] p-8 flex flex-col items-center gap-8 font-sans text-[#38404B]">
      {/* Semaglutide Card */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 w-[390px]">
        <div className="flex flex-col gap-4">
          <div>
            <div className="inline-block px-2 py-1 bg-[#4EB7C0]/10 text-[#4EB7C0] text-xs font-semibold rounded-md mb-2">
              Most Popular
            </div>
            <h3 className="font-serif text-2xl font-semibold">Semaglutide</h3>
            <p className="text-sm text-gray-500">Same active ingredient as Wegovy® & Ozempic®</p>
          </div>
          
          <div className="flex gap-2">
            <div className="flex items-center gap-1 text-xs bg-gray-50 px-2 py-1 rounded-md text-gray-600">
              <Syringe className="w-3 h-3 text-[#4EB7C0]" /> Once weekly
            </div>
            <div className="flex items-center gap-1 text-xs bg-gray-50 px-2 py-1 rounded-md text-gray-600">
              <Pill className="w-3 h-3 text-[#4EB7C0]" /> Injection
            </div>
          </div>

          {/* Price Tag Variant A - Teal */}
          <div 
            className="flex items-center gap-2 py-2 px-3 rounded-xl border-l-[3px] mt-2"
            style={{ 
              borderColor: "#4EB7C0",
              background: "linear-gradient(to right, rgba(78, 183, 192, 0.15), transparent)"
            }}
          >
            <Sparkles className="w-4 h-4" style={{ color: "#4EB7C0" }} />
            <span className="text-xs text-gray-500 font-medium tracking-tight">As low as</span>
            <span className="text-base font-bold" style={{ color: "#4EB7C0" }}>$199/mo</span>
          </div>
        </div>
      </div>

      {/* Tirzepatide Card */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 w-[390px]">
        <div className="flex flex-col gap-4">
          <div>
            <div className="inline-block px-2 py-1 bg-[#F0327A]/10 text-[#F0327A] text-xs font-semibold rounded-md mb-2">
              Premium Efficacy
            </div>
            <h3 className="font-serif text-2xl font-semibold">Tirzepatide</h3>
            <p className="text-sm text-gray-500">Same active ingredient as Zepbound® & Mounjaro®</p>
          </div>
          
          <div className="flex gap-2">
            <div className="flex items-center gap-1 text-xs bg-gray-50 px-2 py-1 rounded-md text-gray-600">
              <Syringe className="w-3 h-3 text-[#F0327A]" /> Once weekly
            </div>
            <div className="flex items-center gap-1 text-xs bg-gray-50 px-2 py-1 rounded-md text-gray-600">
              <Pill className="w-3 h-3 text-[#F0327A]" /> Injection
            </div>
          </div>

          {/* Price Tag Variant A - Pink */}
          <div 
            className="flex items-center gap-2 py-2 px-3 rounded-xl border-l-[3px] mt-2"
            style={{ 
              borderColor: "#F0327A",
              background: "linear-gradient(to right, rgba(240, 50, 122, 0.15), transparent)"
            }}
          >
            <Sparkles className="w-4 h-4" style={{ color: "#F0327A" }} />
            <span className="text-xs text-gray-500 font-medium tracking-tight">As low as</span>
            <span className="text-base font-bold" style={{ color: "#F0327A" }}>$259/mo</span>
          </div>
        </div>
      </div>
    </div>
  );
}
