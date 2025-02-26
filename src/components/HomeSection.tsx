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
      <div className="flex flex-col items-center md:items-start px-4 md:pl-12">
      <h5 className="text-[1rem] md:text-[1.6rem] font-medium tracking-[0.2rem] md:tracking-[1.5rem] text-[#2b2323] uppercase mb-4 md:self-center">
  BEST PRESENTS
</h5>

        <h1 className="text-[2rem] md:text-[80px] font-bold text-[#1F4293] mb-[15px] md:mb-[25px] leading-[1.2] md:leading-[1.4]">
          Jobfair & Academy
        </h1>
        <p className="text-[1rem] md:text-[1.3rem] text-[#35404e] w-full max-w-[320px] md:max-w-[430px] leading-[1.6] md:leading-[1.8] mb-[20px] md:ml-[150px]">
          Where Ambitions Meet Opportunities
        </p>
        <CountdownTimer />
      </div>
    </section>
  );
};

export default HomeSection;
