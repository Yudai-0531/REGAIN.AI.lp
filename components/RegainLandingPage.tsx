"use client";

import { useState, useRef } from "react";
import {
  Brain,
  Clock,
  TrendingDown,
  Smartphone,
  BookOpen,
  Building2,
  Users,
  Layers,
  AlertCircle,
  FileQuestion,
  Check,
  X,
  ArrowRight,
  ChevronRight,
  Shield,
  Target,
  Zap,
} from "lucide-react";
import {
  Segment,
  HERO_CONTENT,
  PAIN_TITLE,
  PAIN_CARDS,
  COST_ITEMS,
  SOLUTION_STEPS,
  METRICS,
  MID_CTA_CONTENT,
  VOICE_CARDS,
  OFFER_CARD,
  COMPARISON_COLUMNS,
  COMPARISON_ROWS_3,
  FAQS_CV,
  FINAL_CTA_CONTENT,
  CONTACT_FORM_FIELDS,
  CONTACT_FORM_SUBMIT,
  FormField,
  trackCtaClick,
} from "@/lib/regain-content";
import SegmentToggle from "./SegmentToggle";
import CTAButton from "./CTAButton";
import FAQAccordion from "./FAQAccordion";

const ICON_MAP: Record<string, React.ElementType> = {
  Brain,
  Clock,
  TrendingDown,
  Smartphone,
  BookOpen,
  Building2,
  Users,
  Layers,
  AlertCircle,
  FileQuestion,
};

function SectionLabel({
  children,
  tone = "dark",
}: {
  children: React.ReactNode;
  tone?: "dark" | "light" | "white";
}) {
  const color =
    tone === "white"
      ? "text-white/80"
      : tone === "light"
      ? "text-primary"
      : "text-primary";
  return (
    <span
      className={`inline-block text-xs font-semibold tracking-[0.25em] uppercase mb-3 ${color}`}
    >
      {children}
    </span>
  );
}

function FormInput({ field }: { field: FormField }) {
  const baseInput =
    "w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-light-text placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-colors";
  const baseLabel = "block text-sm font-semibold text-light-text mb-1.5";

  if (field.type === "select") {
    return (
      <div>
        <label className={baseLabel}>
          {field.label}
          {field.required && <span className="text-primary ml-1">*</span>}
        </label>
        <select required={field.required} className={baseInput}>
          <option value="">選択してください</option>
          {field.options?.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
    );
  }
  if (field.type === "textarea") {
    return (
      <div>
        <label className={baseLabel}>
          {field.label}
          {field.required && <span className="text-primary ml-1">*</span>}
        </label>
        <textarea
          required={field.required}
          placeholder={field.placeholder}
          rows={5}
          className={`${baseInput} resize-none`}
        />
      </div>
    );
  }
  return (
    <div>
      <label className={baseLabel}>
        {field.label}
        {field.required && <span className="text-primary ml-1">*</span>}
      </label>
      <input
        type={field.type}
        required={field.required}
        placeholder={field.placeholder}
        className={baseInput}
      />
    </div>
  );
}

export default function RegainLandingPage() {
  const [segment, setSegment] = useState<Segment>("personal");
  const contactRef = useRef<HTMLDivElement>(null);

  const hero = HERO_CONTENT[segment];
  const offerTitle =
    segment === "personal" ? OFFER_CARD.personalTitle : OFFER_CARD.corporateTitle;
  const finalCtaText =
    segment === "personal"
      ? FINAL_CTA_CONTENT.personalText
      : FINAL_CTA_CONTENT.corporateText;

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-base text-text-main font-sans">
      {/* ===== HEADER ===== */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-base/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold text-xl tracking-tight text-text-main">
              REGAIN
            </span>
            <span className="text-text-sub text-xs hidden sm:inline">
              by RIATIS Sports
            </span>
          </div>
          <SegmentToggle segment={segment} onChange={setSegment} />
          <button
            onClick={() => {
              trackCtaClick("header-cta");
              scrollToContact();
            }}
            data-cta="header-cta"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-dark text-white text-sm font-medium rounded-full transition-colors"
          >
            無料診断を受ける
            <ChevronRight size={14} />
          </button>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section
        id="hero"
        className="min-h-screen flex flex-col justify-center bg-base pt-24 pb-20 px-4"
      >
        <div className="max-w-4xl mx-auto w-full">
          <div className="flex justify-center mb-10">
            <SegmentToggle segment={segment} onChange={setSegment} />
          </div>

          <div className="mb-3 text-center">
            <SectionLabel>{hero.eyebrow}</SectionLabel>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-center leading-tight mb-6 text-text-main">
            {hero.headline}
          </h1>

          <p className="text-text-sub text-lg sm:text-xl text-center max-w-2xl mx-auto leading-relaxed mb-4">
            {hero.subheadline}
          </p>

          <p className="text-center text-sm text-primary font-medium mb-10">
            AI研修ではなく、成果につながるAI/ITコーチング
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CTAButton
              label={hero.primaryCta}
              ctaId={`hero-${segment}-primary`}
              variant="primary"
              onClick={scrollToContact}
            />
            <CTAButton
              label={hero.secondaryCta}
              ctaId={`hero-${segment}-secondary`}
              variant="secondary"
              onClick={() =>
                document
                  .getElementById("solution")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            />
          </div>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {METRICS.map((m) => (
              <div
                key={m.label}
                className="bg-surface border border-white/10 rounded-xl p-4 text-center"
              >
                <div className="text-2xl font-black text-primary mb-1">
                  {m.value === "要差し替え" ? (
                    <span className="text-base text-text-sub">公開準備中</span>
                  ) : (
                    m.value
                  )}
                </div>
                <div className="text-xs text-text-sub font-medium">
                  {m.label}
                </div>
                <div className="text-xs text-text-sub/60 mt-0.5">{m.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PAIN ===== */}
      <section id="pain" className="py-20 px-4 bg-light-bg">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel>現状の課題</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-black text-light-text">
              {PAIN_TITLE[segment]}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PAIN_CARDS[segment].map((card, i) => {
              const IconComponent = ICON_MAP[card.icon];
              return (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    {IconComponent && (
                      <IconComponent size={20} className="text-primary" />
                    )}
                  </div>
                  <p className="text-light-text text-sm leading-relaxed">
                    {card.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== COST ===== */}
      <section id="cost" className="py-20 px-4 bg-surface">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel>放置コスト</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-black">
              今、動かないことで
              <span className="text-primary">失い続けるもの</span>
            </h2>
          </div>

          <div className="space-y-4">
            {COST_ITEMS[segment].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-5 bg-white/5 border border-white/10 rounded-2xl px-6 py-5"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                  {i + 1}
                </div>
                <p className="text-text-main font-medium">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <CTAButton
              label={hero.primaryCta}
              ctaId={`cost-${segment}-cta`}
              onClick={scrollToContact}
            />
          </div>
        </div>
      </section>

      {/* ===== SOLUTION ===== */}
      <section id="solution" className="py-20 px-4 bg-base">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <SectionLabel>支援の流れ</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-black">
              REGAINの
              <span className="text-primary">3ステップ</span>
            </h2>
            <p className="text-text-sub mt-3 text-base">
              {segment === "personal"
                ? "あなたの仕事に合わせて、自走できる型を作る"
                : "組織の業務課題を整理し、現場定着と実装まで進める"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SOLUTION_STEPS.map((step, i) => (
              <div key={i} className="relative">
                <div className="bg-surface border border-white/10 rounded-2xl p-7 h-full">
                  <div className="text-xs font-bold text-primary tracking-widest mb-2">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-black mb-3">{step.name}</h3>
                  <p className="text-text-sub text-sm leading-relaxed">
                    {segment === "personal"
                      ? step.descriptionPersonal
                      : step.descriptionCorporate}
                  </p>
                </div>
                {i < 2 && (
                  <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <ArrowRight size={20} className="text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MID CTA ===== */}
      <section
        id="mid-cta"
        className="relative py-24 px-4 overflow-hidden bg-light-text"
        style={{
          backgroundImage: `url(${MID_CTA_CONTENT.bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary-dark/80 to-light-text/90"
          aria-hidden="true"
        />
        <div className="relative max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl text-center">
            <h2 className="text-2xl sm:text-3xl font-black text-light-text leading-tight mb-8">
              {MID_CTA_CONTENT.title}
            </h2>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => {
                  trackCtaClick(`mid-cta-personal`);
                  setSegment("personal");
                  scrollToContact();
                }}
                data-cta="mid-cta-personal"
                className={`inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-bold text-sm sm:text-base transition-all duration-200 active:scale-95 ${
                  segment === "personal"
                    ? "bg-primary hover:bg-primary-dark text-white shadow-lg"
                    : "bg-white border-2 border-primary text-primary hover:bg-primary/5"
                }`}
              >
                {MID_CTA_CONTENT.personalCta}
                <ChevronRight size={16} />
              </button>
              <button
                onClick={() => {
                  trackCtaClick(`mid-cta-corporate`);
                  setSegment("corporate");
                  scrollToContact();
                }}
                data-cta="mid-cta-corporate"
                className={`inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-bold text-sm sm:text-base transition-all duration-200 active:scale-95 ${
                  segment === "corporate"
                    ? "bg-primary hover:bg-primary-dark text-white shadow-lg"
                    : "bg-white border-2 border-primary text-primary hover:bg-primary/5"
                }`}
              >
                {MID_CTA_CONTENT.corporateCta}
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== VOICES（想定される変化） ===== */}
      <section id="voices" className="py-20 px-4 bg-light-bg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel>VOICES</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-black text-light-text">
              想定される
              <span className="text-primary">変化</span>
            </h2>
            <p className="text-light-text/60 text-sm mt-3">
              ※公開可能な実績・お客様の声がある場合は、後から差し替え可能な構造です。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VOICE_CARDS.map((v, i) => (
              <article
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col"
              >
                <div
                  className="aspect-[4/3] bg-gradient-to-br from-primary/15 via-primary/5 to-light-bg relative"
                  style={{
                    backgroundImage: `url(${v.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <span className="absolute top-4 left-4 inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    {v.label}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-base font-black text-light-text leading-snug mb-3">
                    {v.title}
                  </h3>
                  <p className="text-light-text/70 text-sm leading-relaxed">
                    {v.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OFFER（WorX風 料金カード） ===== */}
      <section id="offer" className="py-20 px-4 bg-surface">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel>{OFFER_CARD.eyebrow}</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-black">
              {OFFER_CARD.title}
            </h2>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <div className="bg-light-text text-white px-6 py-4 text-center">
              <span className="text-sm font-bold tracking-widest">
                {offerTitle}
              </span>
            </div>

            <div className="px-6 sm:px-10 py-10 text-center">
              <div className="text-sm font-semibold text-light-text/60 mb-2">
                {OFFER_CARD.headline.replace(" 0円", "")}
              </div>
              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span className="text-7xl sm:text-8xl font-black text-primary leading-none">
                  0
                </span>
                <span className="text-3xl sm:text-4xl font-black text-primary">
                  円
                </span>
              </div>
              <div className="text-xs text-light-text/60 mb-8">
                ※初回診断は完全無料です
              </div>

              <ul className="space-y-3 mb-8 text-left max-w-md mx-auto">
                {OFFER_CARD.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={12} className="text-white" />
                    </div>
                    <span className="text-light-text text-sm">{b}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => {
                  trackCtaClick(`offer-${segment}-cta`);
                  scrollToContact();
                }}
                data-cta={`offer-${segment}-cta`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-full text-base transition-all duration-200 shadow-lg active:scale-95"
              >
                {OFFER_CARD.cta}
                <ChevronRight size={16} />
              </button>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-light-text/60">
                <div className="flex items-center gap-1.5">
                  <Shield size={12} className="text-primary" />
                  強引な営業なし
                </div>
                <div className="flex items-center gap-1.5">
                  <Target size={12} className="text-primary" />
                  オンライン可
                </div>
                <div className="flex items-center gap-1.5">
                  <Zap size={12} className="text-primary" />
                  翌営業日返信
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== COMPARISON（3列） ===== */}
      <section id="comparison" className="py-20 px-4 bg-light-bg">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel>OTHER SERVICES</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-black text-light-text">
              他サービスとの
              <span className="text-primary">違い</span>
            </h2>
          </div>

          <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
            <div className="min-w-[680px] rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm">
              <table className="w-full">
                <thead>
                  <tr className="bg-light-text text-white">
                    <th className="px-4 sm:px-6 py-4 text-left text-sm font-medium w-[22%]">
                      比較項目
                    </th>
                    <th className="px-4 sm:px-6 py-4 text-center text-sm font-medium">
                      {COMPARISON_COLUMNS[0]}
                    </th>
                    <th className="px-4 sm:px-6 py-4 text-center text-sm font-medium">
                      {COMPARISON_COLUMNS[1]}
                    </th>
                    <th className="px-4 sm:px-6 py-4 text-center text-sm font-bold bg-primary border-x-2 border-primary">
                      {COMPARISON_COLUMNS[2]}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS_3.map((row, i) => {
                    const isLast = i === COMPARISON_ROWS_3.length - 1;
                    return (
                      <tr
                        key={i}
                        className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                      >
                        <td className="px-4 sm:px-6 py-4 text-sm font-semibold text-light-text">
                          {row.topic}
                        </td>
                        <td className="px-4 sm:px-6 py-4 text-sm text-gray-500 text-center">
                          <span className="inline-flex items-start gap-1.5">
                            <X
                              size={14}
                              className="text-gray-400 flex-shrink-0 mt-0.5"
                            />
                            <span>{row.general}</span>
                          </span>
                        </td>
                        <td className="px-4 sm:px-6 py-4 text-sm text-gray-500 text-center">
                          <span className="inline-flex items-start gap-1.5">
                            <X
                              size={14}
                              className="text-gray-400 flex-shrink-0 mt-0.5"
                            />
                            <span>{row.agency}</span>
                          </span>
                        </td>
                        <td
                          className={`px-4 sm:px-6 py-4 text-sm font-semibold text-light-text text-center bg-primary/5 border-x-2 border-primary ${
                            isLast ? "border-b-2" : ""
                          }`}
                        >
                          <span className="inline-flex items-start gap-1.5">
                            <Check
                              size={14}
                              className="text-primary flex-shrink-0 mt-0.5"
                            />
                            <span>{row.regain}</span>
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-light-text/60 text-xs text-center mt-3 sm:hidden">
            ←→ 横にスクロールできます
          </p>
        </div>
      </section>

      {/* ===== FAQ（赤背景＋白アコーディオン） ===== */}
      <section id="faq" className="py-20 px-4 bg-primary">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel tone="white">FAQ</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              よくある質問
            </h2>
          </div>

          <FAQAccordion items={FAQS_CV} variant="light" />
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section
        id="final-cta"
        className="relative py-24 px-4 overflow-hidden bg-light-text"
        style={{
          backgroundImage: `url(${FINAL_CTA_CONTENT.bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-light-text/90 via-primary-dark/85 to-primary/85"
          aria-hidden="true"
        />
        <div className="relative max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl text-center">
            <h2 className="text-3xl sm:text-4xl font-black text-light-text leading-tight mb-4">
              {FINAL_CTA_CONTENT.title}
            </h2>
            <p className="text-light-text/70 text-base mb-8 leading-relaxed">
              {finalCtaText}
            </p>
            <CTAButton
              label={hero.primaryCta}
              ctaId={`final-cta-${segment}`}
              onClick={scrollToContact}
              className="text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5"
            />
            <p className="text-light-text/50 text-xs mt-6">
              無料・強引な営業なし・オンライン対応可
            </p>
          </div>
        </div>
      </section>

      {/* ===== CONTACT FORM（最終CVポイント） ===== */}
      <section
        id="contact"
        ref={contactRef}
        className="py-20 px-4 bg-light-bg"
      >
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <SectionLabel tone="light">CONTACT</SectionLabel>
            <h2 className="text-3xl font-black text-light-text">
              無料診断 申し込みフォーム
            </h2>
            <p className="text-light-text/60 text-sm mt-3">
              現状の課題に合わせて、診断内容をご案内します。
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-gray-100">
            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                trackCtaClick(`contact-form-submit`);
                alert(
                  "送信先フォームを設定後、この処理を差し替えてください。"
                );
              }}
            >
              {CONTACT_FORM_FIELDS.map((field, i) => (
                <FormInput key={i} field={field} />
              ))}

              <button
                type="submit"
                data-cta="contact-form-submit"
                className="w-full inline-flex items-center justify-center gap-2 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-full text-base transition-all duration-200 shadow-lg active:scale-95"
              >
                {CONTACT_FORM_SUBMIT}
                <ChevronRight size={16} />
              </button>

              <p className="text-xs text-light-text/50 text-center pt-2">
                送信後、担当者よりご連絡します。強引な営業は行いません。
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-base border-t border-white/10 py-10 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="font-bold text-lg">REGAIN</div>
            <div className="text-text-sub text-xs">
              株式会社RIATIS Sports
            </div>
          </div>
          <p className="text-text-sub text-xs">
            © {new Date().getFullYear()} RIATIS Sports Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
