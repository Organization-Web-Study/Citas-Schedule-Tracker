import Image from "next/image";
import HeaderP from "@/components/containers/headers/headerP"

export default function Home() {
  return (
    <div>
      <HeaderP />
      <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
    </div>
  );
}
