import React from "react";
import Link from "next/link"; // Import Next.js Link component
import Image from "next/image"; // Import Next.js Image component

const AboutSection: React.FC = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-[10rem] items-center py-[100px] px-8 relative">
      <div className="about-image">
        <Image
          src="/s2.jpg"
          alt="About Jobfair"
          className="max-w-full w-[650px] m-[100px] border-[3px] border-[#1F4293]"
          width={650}
          height={500} // Add dimensions for the Image component
        />
      </div>
      <div className="about-text mr-[70px]">
        <span className="block text-[1rem] font-semibold text-[#2b2323] tracking-[1rem] uppercase mb-[15px]">
          About
        </span>
        <h2 className="text-[2.26rem] font-bold text-[#1F4293] uppercase mb-[15px]">
          Jobfair & Academy
        </h2>
        <p className="text-[#35404e] text-[1.3rem] leading-[1.7] mb-[20px]">
          Sajam zapošljavanja predstavlja jedan od najvažnijih projekata koje
          organizacija BEST Mostar organizuje. Ovaj događaj pruža studentima
          izuzetnu priliku da ostvare direktan kontakt sa predstavnicima
          kompanija, steknu uvid u očekivanja poslodavaca i saznaju koje su
          vještine najpoželjnije u njihovoj struci. Posjetioci Sajma zapošljavanja
          imaće priliku upoznati se sa različitim mogućnostima koje tržište rada
          u našoj zemlji nudi, što će im pomoći da donesu informisane odluke u vezi
          sa izborom budućeg profesionalnog puta i razvijanjem svojih karijernih
          ciljeva. Dodatno, kroz organizaciju besplatnih, interaktivnih radionica,
          Akademija omogućava mladim ljudima da unaprijede svoje lične i profesionalne
          vještine i tako izgrade uspješnu karijeru.
        </p>

        {/* Use Next.js Link for routing */}
        <Link
          href="/agenda" // Path to the agenda page
          className="px-[40px] py-[10px] bg-[#162E72] text-white rounded-full mt-[10px] ml-[180px] hover:scale-[1.2] hover:bg-[#35404e] transition-all duration-400 hover:shadow-[0_5px_15px_2px_rgba(63,44,44,0.18)]"
        >
          Agenda
        </Link>
        <Link
          href="/partners" // Path to the partners page
          className="px-[40px] py-[10px] bg-[#162E72] text-white rounded-full mt-[10px] ml-[50px] hover:scale-[1.2] hover:bg-[#35404e] transition-all duration-400 hover:shadow-[0_5px_15px_2px_rgba(63,44,44,0.18)]"
        >
          Partners
        </Link>
      </div>
    </section>
  );
};

export default AboutSection;
