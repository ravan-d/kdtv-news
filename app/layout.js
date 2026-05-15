
export const metadata = {
  title: "KDTV - Breaking News & Live Updates",
  description: "KDTV is a modern news channel website covering politics, sports, entertainment, technology, business, health and world news.",
  keywords: "news, latest news, breaking news, india news, sports news, technology news",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
