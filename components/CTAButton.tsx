"use client";

import { trackCtaClick } from "@/lib/regain-content";

interface CTAButtonProps {
  label: string;
  ctaId: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
}

export default function CTAButton({
  label,
  ctaId,
  variant = "primary",
  onClick,
  className = "",
}: CTAButtonProps) {
  const handleClick = () => {
    trackCtaClick(ctaId);
    onClick?.();
  };

  if (variant === "primary") {
    return (
      <button
        onClick={handleClick}
        data-cta={ctaId}
        className={`inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-full text-base transition-all duration-200 shadow-lg hover:shadow-primary/30 active:scale-95 ${className}`}
      >
        {label}
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      data-cta={ctaId}
      className={`inline-flex items-center justify-center px-8 py-4 border border-white/30 hover:border-white/60 text-text-main font-medium rounded-full text-base transition-all duration-200 active:scale-95 ${className}`}
    >
      {label}
    </button>
  );
}
