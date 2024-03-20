import LoginButton from "@/components/login-button";
import NameBox from "@/use-case/view-my-data/name-box";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <LoginButton />
      <NameBox /> 
    </main>
  );
}
