import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/style/globals.css";
import ThemeProvider from "@/context/ThemeContext";
import { NextIntlClientProvider, useMessages } from "next-intl";
import Favicon from "/public/favicon.ico";
import { AntdRegistry } from "@ant-design/nextjs-registry";

const poppins = Poppins({ weight: ["300", "500", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fabio Estevez Developer",
  description:
    "Desarrollador Full Stack con enfoque especializado en Frontend y diseño de experiencias de usuario. Amplio dominio de Next.js, JavaScript, Sass, Tailwind y React Native, con 2 años de experiencia, incluyendo 1 año de preparación intensiva y 1 año trabajando como freelance. Apasionado por la creación de interfaces atractivas y funcionales que ofrecen una experiencia de usuario excepcional.",
  icons: [{ rel: "icon", url: Favicon.src }],
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = useMessages();
  return (
    <html lang={locale}>
      <body
        className={`${poppins.className} max-w-screen-2xl m-auto relative scroll-smooth bg-gray-100`}
      >
        <AntdRegistry>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <ThemeProvider>{children}</ThemeProvider>
          </NextIntlClientProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
