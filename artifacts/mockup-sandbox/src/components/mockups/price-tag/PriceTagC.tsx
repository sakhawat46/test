import React from 'react';
import { Leaf, Stethoscope, ChevronRight } from 'lucide-react';

export function PriceTagC() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F7FF] via-white to-[#FEF0F5] p-8 flex flex-col items-center justify-center gap-6 font-sans">
      {/* Semaglutide Card */}
      <div className="w-[390px] bg-white rounded-2xl border border-gray-100 shadow-sm p-4 overflow-hidden flex flex-col">
        <div className="flex flex-col flex-grow">
          <div className="inline-flex items-center px-2 py-1 rounded-full bg-[#4EB7C0]/10 text-[#4EB7C0] text-[10px] font-semibold uppercase tracking-widest w-fit mb-3">
            Weight Loss
          </div>
          <h2 className="text-2xl font-serif text-[#38404B] mb-2">Semaglutide</h2>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-2.5 py-1 rounded-md bg-gray-50 text-gray-600 text-xs font-medium border border-gray-100">Weekly Injection</span>
            <span className="px-2.5 py-1 rounded-md bg-gray-50 text-gray-600 text-xs font-medium border border-gray-100">Lose 15% Body Fat</span>
          </div>
        </div>

        {/* Price Tag C - Strip */}
        <div className="-mx-4 -mb-4 mt-3 px-4 py-3 border-t flex justify-between items-center" 
             style={{ 
               backgroundColor: 'rgba(78, 183, 192, 0.08)',
               borderTopColor: 'rgba(78, 183, 192, 0.2)'
             }}>
          <div className="flex items-center gap-1.5">
            <Leaf size={14} color="#4EB7C0" />
            <span className="text-xs text-gray-500 font-medium">As low as</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-sm font-bold text-[#4EB7C0]">$199/mo</span>
            <ChevronRight size={14} color="#4EB7C0" className="opacity-70" />
          </div>
        </div>
      </div>

      {/* Tirzepatide Card */}
      <div className="w-[390px] bg-white rounded-2xl border border-gray-100 shadow-sm p-4 overflow-hidden flex flex-col">
        <div className="flex flex-col flex-grow">
          <div className="inline-flex items-center px-2 py-1 rounded-full bg-[#F0327A]/10 text-[#F0327A] text-[10px] font-semibold uppercase tracking-widest w-fit mb-3">
            Maximum Weight Loss
          </div>
          <h2 className="text-2xl font-serif text-[#38404B] mb-2">Tirzepatide</h2>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-2.5 py-1 rounded-md bg-gray-50 text-gray-600 text-xs font-medium border border-gray-100">Weekly Injection</span>
            <span className="px-2.5 py-1 rounded-md bg-gray-50 text-gray-600 text-xs font-medium border border-gray-100">Lose 20%+ Body Fat</span>
          </div>
        </div>

        {/* Price Tag C - Strip */}
        <div className="-mx-4 -mb-4 mt-3 px-4 py-3 border-t flex justify-between items-center" 
             style={{ 
               backgroundColor: 'rgba(240, 50, 122, 0.08)',
               borderTopColor: 'rgba(240, 50, 122, 0.2)'
             }}>
          <div className="flex items-center gap-1.5">
            <Stethoscope size={14} color="#F0327A" />
            <span className="text-xs text-gray-500 font-medium">As low as</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-sm font-bold text-[#F0327A]">$299/mo</span>
            <ChevronRight size={14} color="#F0327A" className="opacity-70" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PriceTagC;
