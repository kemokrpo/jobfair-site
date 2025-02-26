// components/HomeSection.tsx
import React from "react";
import CountdownTimer from "@/components/CountdownTimer";

const HomeSection: React.FC = () => {
  return (
    <section
      className="w-full h-screen relative flex justify-center items-center text-center text-white bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: "url('/pozadina.jpg')",
      }}
    >
      <div className="flex flex-col items-center md:items-start px-4 md:px-12">
        <h5 className="text-[1rem] md:text-[1.6rem] font-medium tracking-[0.3rem] md:tracking-[1.5rem] text-[#2b2323] uppercase mb-4">
          BEST PRESENTS
        </h5>
        <h1 className="text-[2.5rem] md:text-[80px] font-bold text-[#1F4293] mb-4 leading-tight md:leading-[1.4] text-center md:text-left">
          Jobfair & Academy
        </h1>
        <p className="text-[1rem] md:text-[1.3rem] text-[#35404e] max-w-[90%] md:max-w-[430px] leading-relaxed md:leading-[1.8] mb-6 text-center md:text-left">
          Where Ambitions Meet Opportunities
        </p>
        <CountdownTimer />
      </div>
    </section>
  );
};

export default HomeSection;
