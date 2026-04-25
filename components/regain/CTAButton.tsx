"use client";

import { ArrowRight } from "lucide-react";
import { trackCtaClick } from "@/lib/regain-content";

type Variant = "primary" | "secondary" | "ghost";

interface CTAButtonProps {
  label: string;
  ctaId: string;
  variant?: Variant;
  href?: string;
  onClick?: () => void;
  className?: string;
  withArrow?: boolean;
}

/**
 * CTAボタン（WorX型）
 * - primary: 黒背景 + 白文字（メインCTA）
 * - secondary: 白背景 + 黒枠 + 黒文字
 * - ghost: 背景透過 + 下線（テキストリンク）
 */
export default function CTAButton({
  label,
  ctaId,
  variant = "primary",
  href,
  onClick,
  className = "",
  withArrow = true,
}: CTAButtonProps) {
  const handleClick = () => {
    trackCtaClick(ctaId);
    onClick?.();
  };

  const base =
    "inline-flex items-center justify-center gap-2 font-bold rounded-full transition-all duration-200 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2";

  const styles: Record<Variant, string> = {
    primary:
      "px-8 py-4 bg-cta hover:bg-cta-hover text-white text-base shadow-lg shadow-black/10 hover:shadow-black/20 focus:ring-cta",
    secondary:
      "px-8 py-4 bg-white hover:bg-surface text-ink border border-ink/80 text-base focus:ring-ink",
    ghost:
      "px-2 py-1 text-ink hover:text-primary underline underline-offset-4 text-sm focus:ring-ink/40",
  };

  const classes = `${base} ${styles[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        onClick={handleClick}
        data-cta={ctaId}
        className={classes}
      >
        <span>{label}</span>
        {withArrow && variant !== "ghost" && (
          <ArrowRight size={18} aria-hidden="true" />
        )}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      data-cta={ctaId}
      className={classes}
    >
      <span>{label}</span>
      {withArrow && variant !== "ghost" && (
        <ArrowRight size={18} aria-hidden="true" />
      )}
    </button>
  );
}
