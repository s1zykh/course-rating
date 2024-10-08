import { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Link from "next/link";

import styles from "./page.module.css";
import "./globals.css";

const inter = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Наш проект",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head></head>
      <body className={inter.className}>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href={"/"}>Главная</Link>
            </li>
            <li>Курсы</li>
            <li>Для детей</li>
            <li>
              <Link href={"/about"}>О нас</Link>
            </li>
            <li>
              <a href={"/products/typescript"}>Продукт 1</a>
            </li>
            <li>
              <Link href={"/aboutsdfsdf"}>О нас 3</Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
