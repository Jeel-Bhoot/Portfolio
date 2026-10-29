import localFont from "next/font/local";
import data from "@/data/data.json";
import "./globals.css";

const sfProText = localFont({
  src: "./fonts/sf-pro-text-regular.woff2",
  variable: "--font-sf-pro-text",
});
const sfProTextMedium = localFont({
  src: "./fonts/sf-pro-text-medium.woff2",
  variable: "--font-sf-pro-text-medium",
});
const sfProDisplay = localFont({
  src: "./fonts/sf-pro-display-regular.woff2",
  variable: "--font-sf-pro-display",
});
const sfProDisplayMedium = localFont({
  src: "./fonts/sf-pro-display-medium.woff2",
  variable: "--font-sf-pro-display-medium",
});
const sfMono = localFont({
  src: "./fonts/sf-mono.woff2",
  variable: "--font-sf-mono",
});

const ogImage =
  "https://raw.githubusercontent.com/Jeel-Bhoot/Portfolio/master/public/demo.png";

export const metadata = {
  title: data.app,
  description: data.intro,
  verification: {
    google: "K4npWlrvRFINidakwsxppa-ySWV1EDnK__e61M0w4ng",
  },
  openGraph: {
    type: "website",
    title: data.app,
    description: data.intro,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: data.app,
    description: data.intro,
    images: [ogImage],
  },
};

export default function RootLayout({ children }) {
  const fontVariables = [
    sfProText,
    sfProTextMedium,
    sfProDisplay,
    sfProDisplayMedium,
    sfMono,
  ]
    .map((font) => font.variable)
    .join(" ");

  return (
    <html lang="en" className={fontVariables}>
      <body>
        <div className="App flex flex-col bg-light-white-third dark:bg-default font-sans tracking-tight">
          {children}
        </div>
      </body>
    </html>
  );
}
