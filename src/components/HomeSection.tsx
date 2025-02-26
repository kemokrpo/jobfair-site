// components/HomeSection.tsx
import React from "react";
import CountdownTimer from "@/components/CountdownTimer";

const HomeSection: React.FC = () => {
  return (
    <section
      className="w-full h-screen relative flex justify-center items-center text-center text-white bg-no-repeat"
      style={{
        backgroundImage: "url('/pozadina.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col items-start pl-12">
        <h5 className="text-[1.6rem] font-medium tracking-[1.5rem] text-[#2b2323] uppercase mb-4 ml-[170px]">
          BEST PRESENTS
        </h5>
        <h1 className="text-[80px] font-bold text-[#1F4293] mb-[25px] leading-[1.4]">
          Jobfair & Academy
        </h1>
        <p className="text-[1.3rem] text-[#35404e] w-[430px] leading-[1.8] mb-[20px] ml-[150px]">
          Where Ambitions Meet Opportunities
        </p>
        <CountdownTimer />
      </div>
    </section>
  );
};

export default HomeSection;
