import React from "react";
import HeaderP from "@/components/containers/headers/headerP";
import Example1 from "@/components/cards/cleark_example";

export default function page() {
  return (
    <div>
      <HeaderP />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        
        <div>
          <Example1 />
        </div>
      </main>

    </div>
  );
}
