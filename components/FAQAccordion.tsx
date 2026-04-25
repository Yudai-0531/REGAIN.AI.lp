"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FaqItem } from "@/lib/regain-content";

interface FAQAccordionProps {
  items: FaqItem[];
  variant?: "dark" | "light";
}

export default function FAQAccordion({
  items,
  variant = "dark",
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (variant === "light") {
    return (
      <div className="space-y-3">
        {items.map((item, index) => {
          const open = openIndex === index;
          return (
            <div
              key={index}
              className="rounded-2xl overflow-hidden bg-white shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(open ? null : index)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="font-semibold text-light-text pr-4">
                  <span className="text-primary mr-2 font-black">Q.</span>
                  {item.q}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-primary flex-shrink-0 transition-transform duration-200 ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open && (
                <div className="px-6 py-5 border-t border-gray-100 bg-gray-50">
                  <p className="text-light-text/80 leading-relaxed">
                    <span className="text-primary mr-2 font-black">A.</span>
                    {item.a}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  }

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
