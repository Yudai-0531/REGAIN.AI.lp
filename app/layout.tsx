import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto",
});

export const metadata: Metadata = {
  title: "REGAIN｜AI・ITで成果を取り戻すコーチング",
  description:
    "REGAINは、スポーツ・ヘルスケア・フィットネス領域の個人・法人向けAI/IT活用コーチングです。研修で終わらせず、業務整理・伴走・実装まで支援します。",
  openGraph: {
    title: "REGAIN｜AI・ITで成果を取り戻すコーチング",
    description:
      "個人には現状整理セッション、法人には組織課題診断。AI導入を成果に変えるコーチング。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${inter.variable} ${notoSansJP.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
