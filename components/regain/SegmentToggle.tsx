"use client";

import { Segment, SEGMENT_LABELS } from "@/lib/regain-content";

interface SegmentToggleProps {
  segment: Segment;
  onChange: (segment: Segment) => void;
  className?: string;
}

/**
 * 個人向け / 法人向け のセグメント切替トグル（白テーマ）
 */
export default function SegmentToggle({
  segment,
  onChange,
  className = "",
}: SegmentToggleProps) {
  const segments: Segment[] = ["personal", "corporate"];

  return (
    <div
      role="tablist"
      aria-label="対象セグメント切替"
      className={`inline-flex items-center bg-white border border-ink/15 rounded-full p-1 shadow-sm ${className}`}
    >
      {segments.map((s) => {
        const active = segment === s;
        return (
          <button
            key={s}
            role="tab"
            aria-selected={active}
            onClick={() => onChange(s)}
            data-cta={`toggle-${s}`}
            className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/40 ${
              active
                ? "bg-cta text-white shadow"
                : "text-ink-sub hover:text-ink"
            }`}
          >
            {SEGMENT_LABELS[s]}
          </button>
        );
      })}
    </div>
  );
}
