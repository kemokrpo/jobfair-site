// app/page.tsx
import React from "react";
import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";
import BestMostarInfo from "@/components/BestMostarInfo";


const Page: React.FC = () => {
  return (
    <main className="bg-[#f9f9ff] text-[#35404e]">
      <HomeSection />
      <AboutSection />
      <BestMostarInfo />
      
    </main>
  );
};

export default Page;
