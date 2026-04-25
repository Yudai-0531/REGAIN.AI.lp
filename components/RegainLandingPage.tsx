"use client";

import { useState, useRef } from "react";
import {
  Check,
  ArrowRight,
  ChevronRight,
  Shield,
  Target,
  Zap,
} from "lucide-react";
import {
  Segment,
  HERO_CONTENT,
  HERO_IMAGE_PATH,
  LOGO_STRIP_CHIPS,
  CAMPAIGN_CONTENT,
  PAIN_CHECKLIST_TITLE,
  PAIN_CHECKLIST,
  BRIDGE_CONTENT,
  COST_ITEMS,
  SOLUTION_STEPS,
  COMPARISON_ROWS,
  CASE_CARDS,
  OFFER_CONTENT,
  FAQS_COMMON,
  FAQS_PERSONAL,
  FAQS_CORPORATE,
  FINAL_CTA_COPY,
  FORM_FIELDS_COMMON,
  FORM_FIELDS_PERSONAL,
  FORM_FIELDS_CORPORATE,
  FormField,
  trackCtaClick,
} from "@/lib/regain-content";
import SegmentToggle from "./SegmentToggle";
import CTAButton from "./CTAButton";
import FAQAccordion from "./FAQAccordion";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-3">
      {children}
    </span>
  );
}

function FormInput({ field }: { field: FormField }) {
  if (field.type === "select") {
    return (
      <div>
        <label className="block text-sm font-medium text-text-sub mb-1.5">
          {field.label}
          {field.required && <span className="text-primary ml-1">*</span>}
        </label>
        <select
          required={field.required}
          className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-text-main focus:outline-none focus:border-primary transition-colors"
        >
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
        <label className="block text-sm font-medium text-text-sub mb-1.5">
          {field.label}
          {field.required && <span className="text-primary ml-1">*</span>}
        </label>
        <textarea
          required={field.required}
          placeholder={field.placeholder}
          rows={4}
          className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-text-main placeholder-text-sub/50 focus:outline-none focus:border-primary transition-colors resize-none"
        />
      </div>
    );
  }
  return (
    <div>
      <label className="block text-sm font-medium text-text-sub mb-1.5">
        {field.label}
        {field.required && <span className="text-primary ml-1">*</span>}
      </label>
      <input
        type={field.type}
        required={field.required}
        placeholder={field.placeholder}
        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-text-main placeholder-text-sub/50 focus:outline-none focus:border-primary transition-colors"
      />
    </div>
  );
}

export default function RegainLandingPage() {
  const [segment, setSegment] = useState<Segment>("personal");
  const formRef = useRef<HTMLDivElement>(null);

  const hero = HERO_CONTENT[segment];
  const offerFormFields = [
    ...FORM_FIELDS_COMMON,
    ...(segment === "personal" ? FORM_FIELDS_PERSONAL : FORM_FIELDS_CORPORATE),
  ];
  const faqs = [
    ...FAQS_COMMON,
    ...(segment === "personal" ? FAQS_PERSONAL : FAQS_CORPORATE),
  ];

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
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
              scrollToForm();
            }}
            data-cta="header-cta"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-dark text-white text-sm font-medium rounded-full transition-colors"
          >
            無料診断を受ける
            <ChevronRight size={14} />
          </button>
        </div>
      </header>

      {/* ===== HERO (WorX風) ===== */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col justify-center bg-light-bg pt-24 pb-16 px-4 overflow-hidden"
      >
        {/* PCのみ：右側に赤い斜め図形 */}
        <div
          aria-hidden
          className="hidden md:block absolute top-0 right-0 w-[58%] h-full hero-diagonal-shape z-0"
        />
        {/* 左側装飾の薄いグリッド */}
        <div
          aria-hidden
          className="hidden md:block absolute top-0 left-0 w-1/2 h-full pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgba(17,24,39,0.06) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <div className="mb-8 flex justify-start">
            <SegmentToggle segment={segment} onChange={setSegment} />
          </div>

          <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* 左：強いコピー */}
            <div>
              <div className="mb-5">
                <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-primary border-l-4 border-primary pl-3 py-0.5">
                  {hero.eyebrow}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black leading-[1.15] tracking-tight mb-6 text-light-text whitespace-pre-line">
                {hero.headline}
              </h1>

              <p className="text-light-text/75 text-base sm:text-lg leading-relaxed mb-6 max-w-lg">
                {hero.subheadline}
              </p>

              <p className="inline-block text-sm font-semibold text-primary bg-primary/10 px-3 py-1.5 rounded-full mb-8">
                AI研修ではなく、成果につながるAI/ITコーチング
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    trackCtaClick(`hero-${segment}-primary`);
                    scrollToForm();
                  }}
                  data-cta={`hero-${segment}-primary`}
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-light-text hover:bg-black text-white font-bold rounded-full text-base transition-all duration-200 shadow-xl active:scale-95"
                >
                  {hero.primaryCta}
                  <ChevronRight size={18} />
                </button>
                <button
                  onClick={() => {
                    trackCtaClick(`hero-${segment}-secondary`);
                    document
                      .getElementById("solution")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  data-cta={`hero-${segment}-secondary`}
                  className="inline-flex items-center justify-center px-7 py-4 border-2 border-light-text/30 hover:border-light-text text-light-text font-semibold rounded-full text-base transition-all duration-200 active:scale-95 bg-white/60"
                >
                  {hero.secondaryCta}
                </button>
              </div>
            </div>

            {/* 右：画像（無ければ赤グラデのフォールバック） */}
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto md:max-w-none aspect-[4/5] rounded-[28px] overflow-hidden shadow-2xl bg-gradient-to-br from-primary via-primary-dark to-[#5a0714]">
                {/* 画像。ファイルが無ければ自動でhide → グラデが見える */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={HERO_IMAGE_PATH}
                  alt="REGAIN｜AI/ITで成果を取り戻すコーチング"
                  loading="eager"
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display =
                      "none";
                  }}
                />
                {/* フォールバック装飾 */}
                <div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-50 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_55%)]" />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="text-[10px] font-bold tracking-[0.35em] uppercase opacity-90 mb-1">
                    REGAIN
                  </div>
                  <div className="text-xl sm:text-2xl font-black leading-tight">
                    AI × IT × COACHING
                  </div>
                  <div className="text-xs opacity-80 mt-1">
                    Sports / Healthcare / Fitness
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ロゴ帯（業種チップ） ===== */}
      <section
        id="logo-strip"
        className="bg-white border-y border-gray-100 py-7 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-light-text/60 sm:w-44 flex-shrink-0">
              FOR / 対象領域
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {LOGO_STRIP_CHIPS.map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center px-4 py-1.5 rounded-full bg-gray-100 text-light-text text-sm font-semibold border border-gray-200"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== キャンペーン（無料診断カード） ===== */}
      <section id="campaign" className="bg-light-bg py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            {/* 左の赤い斜めアクセント */}
            <div
              aria-hidden
              className="absolute top-0 left-0 h-full w-2 bg-primary"
            />
            <div className="grid md:grid-cols-3 gap-6 p-7 sm:p-9 items-center">
              <div className="md:col-span-2">
                <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-primary mb-2">
                  CAMPAIGN
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-light-text leading-tight mb-3">
                  {CAMPAIGN_CONTENT.title}
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-primary text-4xl sm:text-5xl font-black tracking-tight">
                    {CAMPAIGN_CONTENT.highlight}
                  </span>
                </div>
                <p className="text-light-text/70 text-sm mt-3">
                  {CAMPAIGN_CONTENT.note}
                </p>
              </div>
              <div className="md:col-span-1 flex md:justify-end">
                <button
                  onClick={() => {
                    trackCtaClick(`campaign-${segment}-cta`);
                    scrollToForm();
                  }}
                  data-cta={`campaign-${segment}-cta`}
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 bg-light-text hover:bg-black text-white font-bold rounded-full text-base transition-all duration-200 shadow-lg active:scale-95"
                >
                  {CAMPAIGN_CONTENT.cta}
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PAIN（チェックリスト：薄グレー＋中央白カード） ===== */}
      <section id="pain" className="py-20 px-4 bg-light-bg">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <SectionLabel>現状の課題</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-black text-light-text leading-tight">
              {PAIN_CHECKLIST_TITLE[segment]}
            </h2>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-7 sm:p-10">
            <ul className="space-y-4">
              {PAIN_CHECKLIST[segment].map((text, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 pb-4 border-b border-gray-100 last:border-b-0 last:pb-0"
                >
                  <div className="flex-shrink-0 w-7 h-7 rounded-md border-2 border-primary flex items-center justify-center mt-0.5">
                    <Check
                      size={16}
                      className="text-primary"
                      strokeWidth={3}
                    />
                  </div>
                  <p className="text-light-text text-base sm:text-lg font-medium leading-relaxed">
                    {text}
                  </p>
                </li>
              ))}
            </ul>

            <p className="text-center text-sm text-light-text/60 mt-7">
              ひとつでも当てはまる方は、まずは無料診断から。
            </p>
          </div>
        </div>
      </section>

      {/* ===== BRIDGE（黒い帯：AIを学ぶだけでは成果は変わらない） ===== */}
      <section
        id="bridge"
        className="relative bg-light-text text-white py-20 sm:py-24 px-4 bridge-clip"
      >
        {/* 赤い細い斜めアクセント */}
        <div
          aria-hidden
          className="absolute top-0 left-0 w-full h-1 bg-primary"
        />
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs sm:text-sm font-bold tracking-[0.35em] text-primary mb-5">
            {BRIDGE_CONTENT.small}
          </p>
          <h2 className="text-3xl sm:text-5xl font-black leading-tight">
            {BRIDGE_CONTENT.main}
          </h2>
          <div className="mt-6 inline-flex items-center gap-2 text-text-sub text-sm">
            <ArrowRight size={16} className="text-primary" />
            REGAINは、現場で使える状態まで伴走します
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
              onClick={scrollToForm}
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

      {/* ===== COMPARISON ===== */}
      <section id="comparison" className="py-20 px-4 bg-light-bg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel>REGAINとは</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-black text-light-text">
              一般的なAI研修と、
              <span className="text-primary">何が違うのか</span>
            </h2>
          </div>

          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <table className="w-full">
              <thead>
                <tr className="bg-light-text text-white">
                  <th className="px-6 py-4 text-left text-sm font-medium w-1/4">
                    比較項目
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-medium w-3/8">
                    一般的なAI研修
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-medium w-3/8 bg-primary">
                    REGAIN
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-6 py-4 text-sm font-semibold text-light-text">
                      {row.topic}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 text-center">
                      {row.general}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-light-text text-center bg-primary/5 border-l border-primary/20">
                      <span className="flex items-center justify-center gap-2">
                        <Check size={14} className="text-primary flex-shrink-0" />
                        {row.regain}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===== CASES ===== */}
      <section id="cases" className="py-20 px-4 bg-surface">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel>支援事例</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-black">
              どんな変化が
              <span className="text-primary">起きるか</span>
            </h2>
            <p className="text-text-sub text-sm mt-2">
              ※以下は想定ケースです。実際の事例は差し替え予定。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {CASE_CARDS.map((c, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <div className="inline-block text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
                  {c.type}
                </div>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <span className="text-xs font-bold text-text-sub w-14 flex-shrink-0 pt-0.5">
                      Before
                    </span>
                    <p className="text-text-sub text-sm">{c.before}</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-xs font-bold text-accent w-14 flex-shrink-0 pt-0.5">
                      気づき
                    </span>
                    <p className="text-text-main text-sm">{c.insight}</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-xs font-bold text-primary w-14 flex-shrink-0 pt-0.5">
                      After
                    </span>
                    <p className="text-text-main text-sm font-medium">
                      {c.after}
                    </p>
                  </div>
                  <div className="mt-3 pt-3 border-t border-white/10 flex items-center gap-2">
                    <ArrowRight size={14} className="text-primary" />
                    <p className="text-primary text-sm font-semibold">
                      {c.change}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OFFER ===== */}
      <section id="offer" className="py-20 px-4 bg-base">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel>無料オファー</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-black">
              まずは、
              <span className="text-primary">価値を受け取る</span>
              ところから
            </h2>
          </div>

          <div className="bg-surface border border-primary/30 rounded-3xl p-8 sm:p-10 mb-8">
            <h3 className="text-2xl font-black text-primary mb-6">
              {OFFER_CONTENT[segment].title}
            </h3>
            <ul className="space-y-4 mb-8">
              {OFFER_CONTENT[segment].bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} className="text-white" />
                  </div>
                  <span className="text-text-main">{b}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 text-sm text-text-sub">
              <div className="flex items-center gap-2">
                <Shield size={14} className="text-primary" />
                強引な営業は一切ありません
              </div>
              <div className="flex items-center gap-2">
                <Target size={14} className="text-primary" />
                オンライン実施可能
              </div>
              <div className="flex items-center gap-2">
                <Zap size={14} className="text-primary" />
                翌営業日以内に返信
              </div>
            </div>
          </div>

          <div className="text-center">
            <CTAButton
              label={hero.primaryCta}
              ctaId={`offer-${segment}-cta`}
              onClick={scrollToForm}
            />
          </div>
        </div>
      </section>

      {/* ===== FORM ===== */}
      <section id="form" ref={formRef} className="py-20 px-4 bg-surface">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <SectionLabel>申し込みフォーム</SectionLabel>
            <h2 className="text-3xl font-black">{OFFER_CONTENT[segment].title}</h2>
            <p className="text-text-sub text-sm mt-2">
              {/* TODO: 送信先フォームURLを差し替えてください（Google Forms / Calendly 等） */}
              送信先フォームは準備中です。問い合わせ先を差し替えてご利用ください。
            </p>
          </div>

          <form
            className="space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              trackCtaClick(`form-submit-${segment}`);
              alert(
                "送信先フォームを設定後、この処理を差し替えてください。"
              );
            }}
          >
            {offerFormFields.map((field, i) => (
              <FormInput key={i} field={field} />
            ))}

            <button
              type="submit"
              data-cta={`form-submit-${segment}`}
              className="w-full py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-full text-base transition-all duration-200 shadow-lg active:scale-95"
            >
              {hero.primaryCta}
            </button>

            <p className="text-xs text-text-sub text-center">
              送信後、担当者よりご連絡します。強引な営業は行いません。
            </p>
          </form>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="py-20 px-4 bg-base">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel>よくある質問</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-black">FAQ</h2>
          </div>

          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section id="final-cta" className="py-24 px-4 bg-surface">
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel>まずは一歩</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-black mb-6">
            {FINAL_CTA_COPY[segment]}
          </h2>
          <CTAButton
            label={hero.primaryCta}
            ctaId={`final-cta-${segment}`}
            onClick={scrollToForm}
            className="text-lg px-10 py-5"
          />
          <p className="text-text-sub text-sm mt-6">
            無料・強引な営業なし・オンライン対応可
          </p>
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
