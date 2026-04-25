"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FaqItem } from "@/lib/regain-content";

interface FAQAccordionProps {
  items: FaqItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-white/10 rounded-xl overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between px-6 py-5 text-left bg-surface hover:bg-white/5 transition-colors duration-200"
          >
            <span className="font-medium text-text-main pr-4">{item.q}</span>
            <ChevronDown
              size={18}
              className={`text-text-sub flex-shrink-0 transition-transform duration-200 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>
          {openIndex === index && (
            <div className="px-6 py-5 bg-white/5 border-t border-white/10">
              <p className="text-text-sub leading-relaxed">{item.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
