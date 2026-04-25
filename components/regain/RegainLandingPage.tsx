"use client";

import { useState } from "react";
import { Segment, HERO_CONTENT } from "@/lib/regain-content";
import CTAButton from "./CTAButton";
import SegmentToggle from "./SegmentToggle";
import DiagonalSection from "./DiagonalSection";

/**
 * REGAIN LP – Phase 1
 *
 * 目的:
 *   WorX型LPの土台（白背景・赤い斜め面・黒CTA）を最小構成で立ち上げる。
 *   各セクションは見出しのプレースホルダのみ。中身は Phase 2 以降で実装。
 */
export default function RegainLandingPage() {
  const [segment, setSegment] = useState<Segment>("personal");
  const hero = HERO_CONTENT[segment];

  return (
    <main className="bg-white text-ink">
      {/* ===== Sticky Header ===== */}
      <header className="sticky top-0 z-50 bg-white/85 backdrop-blur border-b border-ink/5">
        <div className="container-lp flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <span className="text-lg font-black tracking-tightish">REGAIN</span>
            <span className="hidden sm:inline text-xs text-ink-mute">
              AI / IT Coaching
            </span>
          </div>
          <div className="hidden md:block">
            <SegmentToggle segment={segment} onChange={setSegment} />
          </div>
          <CTAButton
            label={segment === "personal" ? "無料で相談" : "無料診断"}
            ctaId={`header-cta-${segment}`}
            variant="primary"
            withArrow={false}
            className="!px-5 !py-2 text-sm"
          />
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-white">
        {/* 背景の斜め赤面 */}
        <div
          aria-hidden="true"
          className="absolute -top-32 -right-40 h-[120%] w-[70%] bg-primary -skew-y-6 origin-top-right opacity-95"
          style={{ zIndex: 0 }}
        />
        {/* 背景の薄い赤帯 (奥) */}
        <div
          aria-hidden="true"
          className="absolute -bottom-24 -left-40 h-[60%] w-[60%] bg-primary-pale -skew-y-6 origin-bottom-left"
          style={{ zIndex: 0 }}
        />

        <div className="relative z-10 container-lp pt-16 pb-24 md:pt-24 md:pb-32">
          {/* モバイル用トグル */}
          <div className="md:hidden mb-8">
            <SegmentToggle segment={segment} onChange={setSegment} />
          </div>

          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7">
              <p className="eyebrow-en text-primary mb-5">{hero.eyebrow}</p>
              <h1 className="headline-jp text-4xl sm:text-5xl md:text-6xl whitespace-pre-line text-ink">
                {hero.headline}
              </h1>
              <p className="mt-8 text-base md:text-lg text-ink-sub leading-loose max-w-xl">
                {hero.subheadline}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <CTAButton
                  label={hero.primaryCta}
                  ctaId={`hero-primary-${segment}`}
                  variant="primary"
                />
                <CTAButton
                  label={hero.secondaryCta}
                  ctaId={`hero-secondary-${segment}`}
                  variant="secondary"
                  href="#solution"
                  withArrow={false}
                />
              </div>
            </div>

            {/* ヒーロー右側のビジュアル枠（画像なしfallback） */}
            <div className="md:col-span-5">
              <div className="relative aspect-[4/5] w-full max-w-sm mx-auto">
                <div className="absolute inset-0 bg-white/60 backdrop-blur-sm border border-white shadow-2xl rounded-3xl" />
                <div className="absolute inset-4 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                  <div className="text-white text-center px-6">
                    <p className="eyebrow-en mb-3 opacity-80">REGAIN</p>
                    <p className="font-black text-2xl leading-snug">
                      AI × IT で
                      <br />
                      成果を取り戻す。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Section: PAIN (placeholder) ===== */}
      <DiagonalSection id="pain" tone="gray">
        <SectionHeading
          eyebrow="PAIN"
          title={
            segment === "personal"
              ? "こんな状態で、止まっていませんか？"
              : "組織のAI活用、こんな状態で止まっていませんか？"
          }
        />
        <PlaceholderNote>
          Phase 2 で 5 枚のペインカード（個人 / 法人）を実装します。
        </PlaceholderNote>
      </DiagonalSection>

      {/* ===== Section: COST (placeholder) ===== */}
      <DiagonalSection id="cost" tone="red" diagonal>
        <SectionHeading
          eyebrow="COST OF INACTION"
          title="放置すると、ここまで差がつきます。"
          inverted
        />
        <PlaceholderNote inverted>
          Phase 2 で「放置コスト」の3項目を実装します。
        </PlaceholderNote>
      </DiagonalSection>

      {/* ===== Section: SOLUTION (placeholder) ===== */}
      <DiagonalSection id="solution" tone="white">
        <SectionHeading
          eyebrow="SOLUTION"
          title="診断 → コーチング → 実装。"
        />
        <PlaceholderNote>
          Phase 2 で 3 ステップのソリューションカードを実装します。
        </PlaceholderNote>
      </DiagonalSection>

      {/* ===== Section: COMPARISON (placeholder) ===== */}
      <DiagonalSection id="comparison" tone="gray">
        <SectionHeading
          eyebrow="COMPARISON"
          title="一般的なAI研修とREGAINの違い。"
        />
        <PlaceholderNote>Phase 2 で比較表を実装します。</PlaceholderNote>
      </DiagonalSection>

      {/* ===== Section: CASES (placeholder) ===== */}
      <DiagonalSection id="cases" tone="white">
        <SectionHeading
          eyebrow="CASES"
          title="支援の型を、事例で見る。"
        />
        <PlaceholderNote>Phase 2 で4枚の事例カードを実装します。</PlaceholderNote>
      </DiagonalSection>

      {/* ===== Section: OFFER (placeholder) ===== */}
      <DiagonalSection id="offer" tone="deep-red" diagonal skewDirection="right">
        <SectionHeading
          eyebrow="FREE OFFER"
          title={
            segment === "personal"
              ? "45分無料 現状整理セッション"
              : "30分無料 組織課題診断"
          }
          inverted
        />
        <PlaceholderNote inverted>
          Phase 2 でオファー詳細・特典バレットを実装します。
        </PlaceholderNote>
      </DiagonalSection>

      {/* ===== Section: FAQ (placeholder) ===== */}
      <DiagonalSection id="faq" tone="white">
        <SectionHeading eyebrow="FAQ" title="よくあるご質問" />
        <PlaceholderNote>Phase 2 でFAQアコーディオンを実装します。</PlaceholderNote>
      </DiagonalSection>

      {/* ===== Section: CONTACT (placeholder) ===== */}
      <DiagonalSection id="contact" tone="black">
        <SectionHeading
          eyebrow="CONTACT"
          title="まずは無料で、現状を整理しましょう。"
          inverted
        />
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <CTAButton
            label={hero.primaryCta}
            ctaId={`final-primary-${segment}`}
            variant="primary"
            className="!bg-primary hover:!bg-primary-dark"
          />
        </div>
        <PlaceholderNote inverted className="mt-12">
          Phase 2 でフォーム項目（個人 / 法人）を実装します。
        </PlaceholderNote>
      </DiagonalSection>

      {/* ===== Footer ===== */}
      <footer className="bg-white border-t border-ink/10">
        <div className="container-lp py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-sm text-ink-mute">
            © {new Date().getFullYear()} REGAIN. All rights reserved.
          </p>
          <p className="text-xs text-ink-mute">
            Sports / Healthcare / Fitness 領域の AI・IT 活用コーチング
          </p>
        </div>
      </footer>
    </main>
  );
}

/* =================================================
 * Sub components (Phase 1 用 / 内部のみ)
 * ================================================= */

function SectionHeading({
  eyebrow,
  title,
  inverted = false,
}: {
  eyebrow: string;
  title: string;
  inverted?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <p
        className={`eyebrow-en mb-4 ${
          inverted ? "text-white/80" : "text-primary"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`headline-jp text-3xl md:text-4xl ${
          inverted ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}

function PlaceholderNote({
  children,
  inverted = false,
  className = "",
}: {
  children: React.ReactNode;
  inverted?: boolean;
  className?: string;
}) {
  return (
    <p
      className={`mt-8 text-sm leading-relaxed ${
        inverted ? "text-white/70" : "text-ink-mute"
      } ${className}`}
    >
      {children}
    </p>
  );
}
