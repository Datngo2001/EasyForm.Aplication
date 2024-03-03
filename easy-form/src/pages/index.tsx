import Image from "next/image";
import { Inter } from "next/font/google";
import LoginButton from "@/components/LoginButton";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <LoginButton />
    </main>
  );
}
