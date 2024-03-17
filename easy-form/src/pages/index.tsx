import { Inter } from "next/font/google";
import LoginButton from "@/components/LoginButton";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  return (
    <main className={`${inter.className}`}>
      <LoginButton />
    </main>
  );
}
