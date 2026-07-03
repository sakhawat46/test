import React from "react";
import { Tag } from "lucide-react";

export default function PriceTagB() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F7FF] via-white to-[#FEF0F5] p-8 flex flex-col items-center justify-center gap-6 font-sans text-[#38404B]">
      
      {/* Semaglutide Card */}
      <div className="w-[390px] bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col gap-4">
        <div>
          <span className="inline-block px-2 py-1 bg-[#4EB7C0]/10 text-[#4EB7C0] text-[10px] font-bold tracking-wider uppercase rounded-md mb-2">
            Most Popular
          </span>
          <h2 className="text-2xl font-serif text-[#38404B]">Semaglutide</h2>
          <p className="text-sm text-gray-500 mt-1">GLP-1 active ingredient in Wegovy® & Ozempic®</p>
        </div>

        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-gray-50 text-gray-600 text-xs rounded-full border border-gray-100">
            Once weekly
          </span>
          <span className="px-3 py-1 bg-gray-50 text-gray-600 text-xs rounded-full border border-gray-100">
            Appetite control
          </span>
        </div>

        <div className="mt-2 flex items-center justify-between border-t border-gray-50 pt-4">
          <div className="flex items-center">
            {/* Split Price Tag Badge - Teal */}
            <div className="flex items-stretch rounded-full overflow-hidden shadow-sm">
              <div className="bg-[#4EB7C0] flex items-center justify-center px-3 py-1.5 border-2 border-[#4EB7C0] rounded-l-full">
                <Tag size={10} className="text-white mr-1" />
                <span className="text-white text-[9px] font-bold uppercase tracking-wider leading-none">From</span>
              </div>
              <div className="bg-white flex items-center justify-center px-3 py-1.5 border-y-2 border-r-2 border-[#4EB7C0] rounded-r-full -ml-[2px]">
                <span className="text-[#4EB7C0] text-sm font-bold leading-none">$199/mo</span>
              </div>
            </div>
          </div>
          <button className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors">
            Select
          </button>
        </div>
      </div>

      {/* Tirzepatide Card */}
      <div className="w-[390px] bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col gap-4">
        <div>
          <span className="inline-block px-2 py-1 bg-[#F0327A]/10 text-[#F0327A] text-[10px] font-bold tracking-wider uppercase rounded-md mb-2">
            Premium
          </span>
          <h2 className="text-2xl font-serif text-[#38404B]">Tirzepatide</h2>
          <p className="text-sm text-gray-500 mt-1">GLP-1/GIP active ingredient in Zepbound® & Mounjaro®</p>
        </div>

        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-gray-50 text-gray-600 text-xs rounded-full border border-gray-100">
            Once weekly
          </span>
          <span className="px-3 py-1 bg-gray-50 text-gray-600 text-xs rounded-full border border-gray-100">
            Maximum results
          </span>
        </div>

        <div className="mt-2 flex items-center justify-between border-t border-gray-50 pt-4">
          <div className="flex items-center">
            {/* Split Price Tag Badge - Pink */}
            <div className="flex items-stretch rounded-full overflow-hidden shadow-sm">
              <div className="bg-[#F0327A] flex items-center justify-center px-3 py-1.5 border-2 border-[#F0327A] rounded-l-full">
                <Tag size={10} className="text-white mr-1" />
                <span className="text-white text-[9px] font-bold uppercase tracking-wider leading-none">From</span>
              </div>
              <div className="bg-white flex items-center justify-center px-3 py-1.5 border-y-2 border-r-2 border-[#F0327A] rounded-r-full -ml-[2px]">
                <span className="text-[#F0327A] text-sm font-bold leading-none">$299/mo</span>
              </div>
            </div>
          </div>
          <button className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors">
            Select
          </button>
        </div>
      </div>

    </div>
  );
}
