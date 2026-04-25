import { ReactNode } from "react";

type Tone = "white" | "gray" | "red" | "deep-red" | "black";

interface DiagonalSectionProps {
  /** 背景色 */
  tone?: Tone;
  /** 斜め背景を表示するか（false の場合は単色背景） */
  diagonal?: boolean;
  /** 斜めの方向 */
  skewDirection?: "left" | "right";
  /** id（アンカー用） */
  id?: string;
  /** 上下の余白を抑える */
  compact?: boolean;
  className?: string;
  children: ReactNode;
}

const toneBg: Record<Tone, string> = {
  white: "bg-white",
  gray: "bg-surface",
  red: "bg-primary",
  "deep-red": "bg-primary-dark",
  black: "bg-cta",
};

const toneText: Record<Tone, string> = {
  white: "text-ink",
  gray: "text-ink",
  red: "text-white",
  "deep-red": "text-white",
  black: "text-white",
};

/**
 * WorX風の斜め背景セクション
 * - diagonal=true で背景に skewY された色面が広がる
 * - 中身は通常の縦方向レイアウトのまま、見た目だけ斜めに切れる
 */
export default function DiagonalSection({
  tone = "white",
  diagonal = false,
  skewDirection = "left",
  id,
  compact = false,
  className = "",
  children,
}: DiagonalSectionProps) {
  const skewClass =
    skewDirection === "left" ? "-skew-y-3" : "skew-y-3";

  return (
    <section
      id={id}
      className={`relative overflow-hidden ${diagonal ? "" : toneBg[tone]} ${toneText[tone]} ${
        compact ? "py-16 md:py-20" : "section-y"
      } ${className}`}
    >
      {diagonal && (
        <div
          aria-hidden="true"
          className={`absolute inset-0 ${toneBg[tone]} ${skewClass} origin-top-left`}
          style={{ zIndex: 0 }}
        />
      )}
      <div className="relative z-10 container-lp">
        {children}
      </div>
    </section>
  );
}
