import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from "next/font/google";
import { Toaster } from 'sonner';

const inter = Inter({
  variable: "--font-inter-variable",
  subsets: ["latin"],
});

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
        <Toaster />
      </body>
    </html>
  );
}
