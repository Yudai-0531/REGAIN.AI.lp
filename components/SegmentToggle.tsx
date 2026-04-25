"use client";

import { Segment } from "@/lib/regain-content";

interface SegmentToggleProps {
  segment: Segment;
  onChange: (segment: Segment) => void;
}

export default function SegmentToggle({
  segment,
  onChange,
}: SegmentToggleProps) {
  return (
    <div className="inline-flex items-center bg-surface border border-white/10 rounded-full p-1">
      <button
        onClick={() => onChange("personal")}
        data-cta="toggle-personal"
        className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
          segment === "personal"
            ? "bg-primary text-white shadow-sm"
            : "text-text-sub hover:text-text-main"
        }`}
      >
        個人向け
      </button>
      <button
        onClick={() => onChange("corporate")}
        data-cta="toggle-corporate"
        className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
          segment === "corporate"
            ? "bg-primary text-white shadow-sm"
            : "text-text-sub hover:text-text-main"
        }`}
      >
        法人向け
      </button>
    </div>
  );
}
