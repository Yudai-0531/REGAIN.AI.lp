export type Segment = "personal" | "corporate";

export interface HeroContent {
  eyebrow: string;
  headline: string;
  subheadline: string;
  primaryCta: string;
  secondaryCta: string;
}

export interface PainCard {
  icon: string;
  text: string;
}

export interface CostItem {
  text: string;
}

export interface CaseCard {
  type: string;
  before: string;
  insight: string;
  after: string;
  change: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface OfferContent {
  title: string;
  bullets: string[];
}

export interface FormField {
  label: string;
  type: "text" | "email" | "tel" | "select" | "textarea";
  placeholder?: string;
  options?: string[];
  required: boolean;
}

export interface MetricItem {
  label: string;
  value: string;
  note: string;
}

// ===== METRICS (差し替え可能な定数) =====
// NOTE: 実績数値は公開可能なデータに差し替えてください
export const METRICS: MetricItem[] = [
  { label: "支援領域", value: "3層", note: "研修・伴走・実装" },
  { label: "対象領域", value: "3分野", note: "Sports / Healthcare / Fitness" },
  { label: "無料診断", value: "30〜45分", note: "現状整理と改善提案" },
  {
    label: "支援実績",
    value: "要差し替え",
    note: "公開可能な支援件数・満足度・継続率に置換",
  },
];

// ===== HERO =====
export const HERO_CONTENT: Record<Segment, HeroContent> = {
  personal: {
    eyebrow: "個人向け｜AI・IT活用コーチング",
    headline: "専門性はある。次は、成果に変える型を取り戻そう。",
    subheadline:
      "REGAINは、スポーツ・ヘルスケア領域で働く個人のためのAI/IT活用コーチングです。発信・営業・資料作成・顧客対応を、あなたの仕事に合わせて実装できる状態まで伴走します。",
    primaryCta: "45分無料 現状整理セッションを受ける",
    secondaryCta: "支援内容を見る",
  },
  corporate: {
    eyebrow: "法人向け｜AI・IT組織コーチング",
    headline: "AI導入を、現場が動く組織変革に変える。",
    subheadline:
      "REGAINは、スポーツ・ヘルスケア関連組織のためのAI/IT組織コーチングです。研修で終わらせず、業務整理・現場定着・実装ロードマップまで伴走します。",
    primaryCta: "30分無料 組織課題診断を受ける",
    secondaryCta: "支援内容を見る",
  },
};

// ===== PAIN =====
export const PAIN_TITLE: Record<Segment, string> = {
  personal: "こんな状態で、止まっていませんか？",
  corporate: "組織のAI活用、こんな状態で止まっていませんか？",
};

export const PAIN_CARDS: Record<Segment, PainCard[]> = {
  personal: [
    {
      icon: "Brain",
      text: "AIを使った方がいいのは分かるが、何から始めればいいか分からない",
    },
    {
      icon: "Clock",
      text: "発信・営業・資料作成・顧客管理が自己流で、時間ばかりかかる",
    },
    {
      icon: "TrendingDown",
      text: "専門性はあるのに、売上や単価に変換できていない",
    },
    {
      icon: "Smartphone",
      text: "SNSやChatGPTを触っているが、実務成果につながっていない",
    },
    {
      icon: "BookOpen",
      text: "学びたいが忙しく、結局後回しになる",
    },
  ],
  corporate: [
    {
      icon: "Building2",
      text: "AI導入と言われても、現場で何に使えばよいか分からない",
    },
    {
      icon: "Users",
      text: "スタッフごとにITリテラシーがバラバラで、現場定着しない",
    },
    {
      icon: "Layers",
      text: "問い合わせ対応・予約管理・顧客管理・資料作成が属人化している",
    },
    {
      icon: "AlertCircle",
      text: "研修だけ受けても、結局現場の業務が変わらない",
    },
    {
      icon: "FileQuestion",
      text: "経営課題はあるが、システム会社に頼む前の整理ができていない",
    },
  ],
};

// =====放置コスト =====
export const COST_ITEMS: Record<Segment, CostItem[]> = {
  personal: [
    { text: "自己流の発信を続けても、指名につながらない" },
    { text: "AIを触っているだけで、業務時間は減らない" },
    { text: "専門性が売上・単価・信用に変換されない" },
  ],
  corporate: [
    { text: "AI研修だけで終わり、現場行動が変わらない" },
    { text: "属人化した業務が残り、スタッフの負担が増え続ける" },
    { text: "競合が業務改善を進める中、改善スピードで遅れる" },
  ],
};

// ===== 3ステップ =====
export const SOLUTION_STEPS = [
  {
    step: "Step 1",
    name: "診断",
    descriptionPersonal:
      "現状の仕事・営業・発信のボトルネックを、一緒に見える化する",
    descriptionCorporate:
      "現場業務・集客・顧客対応・組織課題を構造的に見える化する",
  },
  {
    step: "Step 2",
    name: "コーチング",
    descriptionPersonal:
      "AI/ITを何に使うべきかを絞り、あなたの仕事に合った実務の型に落とす",
    descriptionCorporate:
      "組織課題を整理し、AI/IT活用を現場スタッフが定着できる型に落とす",
  },
  {
    step: "Step 3",
    name: "実装",
    descriptionPersonal:
      "LP・フォーム・発信設計・顧客管理など、必要なものを形にする",
    descriptionCorporate:
      "マニュアル・業務フロー・ツール・社内運用まで、現場に合わせて実装する",
  },
];

// ===== 比較表 =====
export const COMPARISON_ROWS = [
  {
    topic: "目的",
    general: "AIツールの使い方を学ぶ",
    regain: "仕事・組織の成果に変える",
  },
  {
    topic: "対象",
    general: "業種を問わない汎用研修",
    regain: "スポーツ・ヘルスケア・フィットネス特化",
  },
  {
    topic: "支援範囲",
    general: "講義・ワーク中心",
    regain: "診断・コーチング・実装まで",
  },
  {
    topic: "ゴール",
    general: "知識を得る",
    regain: "現場で使える仕組みを作る",
  },
];

// ===== 事例 =====
export const CASE_CARDS: CaseCard[] = [
  {
    type: "個人｜トレーナー",
    before: "SNS発信はしているが、問い合わせにつながらない",
    insight: "投稿テーマ・導線・プロフィールが分断されていた",
    after: "発信テーマと無料相談導線を再設計",
    change: "指名相談につながる発信設計へ",
  },
  {
    type: "個人｜治療家",
    before: "資料作成や顧客対応に時間がかかる",
    insight: "よくある説明をAIテンプレ化できる余地があった",
    after: "説明資料・問診後フォロー・LINE文面を型化",
    change: "業務時間を削減し、提案品質を安定化",
  },
  {
    type: "法人｜ジム/施設",
    before: "スタッフごとに顧客対応品質がバラバラ",
    insight: "接客・入会案内・継続提案の型がなかった",
    after: "AI活用マニュアルと接客テンプレを整備",
    change: "新人でも一定品質で対応できる状態へ",
  },
  {
    type: "法人｜クリニック/治療院",
    before: "予約・問い合わせ・説明業務が属人化",
    insight: "患者接点の前後に自動化余地があった",
    after: "フォーム・FAQ・説明導線の改善案を設計",
    change: "現場負担を減らし、対応漏れを防ぐ設計へ",
  },
];

// ===== オファー =====
export const OFFER_CONTENT: Record<Segment, OfferContent> = {
  personal: {
    title: "45分無料 現状整理セッション",
    bullets: [
      "今の仕事・発信・営業の詰まりを整理",
      "AI/ITで改善できる優先順位を提示",
      "明日から使えるアクションを3つ提案",
    ],
  },
  corporate: {
    title: "30分無料 組織課題診断",
    bullets: [
      "現場業務・顧客対応・集客導線を整理",
      "AI/IT化すべき業務を優先順位化",
      "研修・伴走・実装の簡易ロードマップを提示",
    ],
  },
};

// ===== FAQ =====
export const FAQS_COMMON: FaqItem[] = [
  {
    q: "AIに詳しくなくても大丈夫ですか？",
    a: "大丈夫です。REGAINはツールの知識量ではなく、あなたの仕事や組織課題に合わせて、何から使うべきかを一緒に整理するコーチングです。",
  },
  {
    q: "無料診断で営業されませんか？",
    a: "強引な営業は行いません。まずは現状整理と改善ポイントの提示を行い、必要な場合のみ支援プランをご案内します。",
  },
  {
    q: "オンライン対応は可能ですか？",
    a: "可能です。個人・法人ともにオンラインで実施できます。",
  },
  {
    q: "どんな人・組織には向きませんか？",
    a: "AIを魔法のように一瞬で成果に変えたい方、現場の業務整理に向き合う意思がない組織には向きません。",
  },
];

export const FAQS_PERSONAL: FaqItem[] = [
  {
    q: "個人事業主でも受けられますか？",
    a: "受けられます。むしろ、発信・営業・資料作成・顧客対応を自分で担う個人事業主と相性が良いです。",
  },
];

export const FAQS_CORPORATE: FaqItem[] = [
  {
    q: "法人研修だけの依頼も可能ですか？",
    a: "可能です。ただしREGAINでは、研修で終わらせず、現場で使われる状態までの伴走や実装も推奨しています。",
  },
];

// ===== FINAL CTA =====
export const FINAL_CTA_COPY: Record<Segment, string> = {
  personal:
    "AIを触るだけで終わらせず、あなたの仕事の成果に変える。まずは45分で、今の詰まりを整理しましょう。",
  corporate:
    "AI導入を研修で終わらせず、現場が動く組織変革へ。まずは30分で、改善余地を見える化しましょう。",
};

// ===== フォームフィールド =====
export const FORM_FIELDS_COMMON: FormField[] = [
  { label: "お名前", type: "text", placeholder: "山田 太郎", required: true },
  {
    label: "メールアドレス",
    type: "email",
    placeholder: "example@email.com",
    required: true,
  },
  {
    label: "電話番号（任意）",
    type: "tel",
    placeholder: "090-0000-0000",
    required: false,
  },
];

export const FORM_FIELDS_PERSONAL: FormField[] = [
  {
    label: "職種",
    type: "select",
    options: [
      "トレーナー",
      "治療家・理学療法士",
      "パーソナルジム運営",
      "S&Cコーチ",
      "スポーツ指導者",
      "その他",
    ],
    required: true,
  },
  {
    label: "現在一番改善したいこと",
    type: "textarea",
    placeholder: "例：SNS発信はしているが問い合わせにつながらない",
    required: true,
  },
];

export const FORM_FIELDS_CORPORATE: FormField[] = [
  {
    label: "会社名 / 団体名",
    type: "text",
    placeholder: "株式会社〇〇",
    required: true,
  },
  { label: "役職", type: "text", placeholder: "代表取締役", required: false },
  {
    label: "組織規模",
    type: "select",
    options: ["1〜5名", "6〜20名", "21〜50名", "51名以上"],
    required: true,
  },
  {
    label: "現在の課題",
    type: "textarea",
    placeholder: "例：スタッフの顧客対応品質がバラバラで定着しない",
    required: true,
  },
];

// CTA クリックイベントハンドラ（GA4・Meta Pixel差し替え用）
export function trackCtaClick(ctaId: string): void {
  // TODO: GA4 / Meta Pixel のイベントをここに実装
  // 例: window.gtag?.('event', 'cta_click', { cta_id: ctaId });
  if (typeof window !== "undefined") {
    console.debug("[REGAIN CTA]", ctaId);
  }
}
