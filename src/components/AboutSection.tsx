import React from "react";
import Link from "next/link"; // Import Next.js Link component
import Image from "next/image"; // Import Next.js Image component

const AboutSection: React.FC = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-[10rem] items-center py-16 px-6 md:px-12 lg:px-16 relative">
      {/* About Image */}
      <div className="about-image flex justify-center">
        <Image
          src="/s2.jpg"
          alt="About Jobfair"
          className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[650px] border-4 border-[#1F4293] rounded-md"
          width={650}
          height={500} // Add dimensions for the Image component
        />
      </div>

      {/* About Text */}
      <div className="about-text">
        <span className="block text-sm md:text-base font-semibold text-[#2b2323] tracking-[0.5rem] md:tracking-[1rem] uppercase mb-4">
          About
        </span>
        <h2 className="text-2xl md:text-3xl lg:text-[2.26rem] font-bold text-[#1F4293] uppercase mb-6">
          Jobfair & Business Academy
        </h2>
        <p className="text-sm md:text-base lg:text-[1.3rem] text-[#35404e] leading-relaxed md:leading-[1.7] mb-6">
          Sajam zapošljavanja predstavlja jedan od najvažnijih projekata koje
          organizacija BEST Mostar organizuje. Ovaj događaj pruža studentima
          izuzetnu priliku da ostvare direktan kontakt sa predstavnicima
          kompanija, steknu uvid u očekivanja poslodavaca i saznaju koje su
          vještine najpoželjnije u njihovoj struci. Posjetioci Sajma
          zapošljavanja koji će se održavati od 7.4. do 9.4., imaće priliku upoznati se sa različitim mogućnostima
          koje tržište rada u našoj zemlji nudi, što će im pomoći da donesu
          informisane odluke u vezi sa izborom budućeg profesionalnog puta i
          razvijanjem svojih karijernih ciljeva. Dodatno, kroz organizaciju
          besplatnih, interaktivnih radionica, Akademija omogućava mladim
          ljudima da unaprijede svoje lične i profesionalne vještine i tako
          izgrade uspješnu karijeru.
          Dodatno, Biznis akademija nudi interaktivne radionice i predavanja stručnjaka, pomažući učesnicima da razviju poslovne i komunikacijske vještine ključne za uspješnu karijeru.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-4">
          <Link
            href="/agenda"
            className="px-6 py-2 bg-[#162E72] text-white text-sm md:text-base rounded-full hover:scale-105 hover:bg-[#35404e] transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Agenda
          </Link>
          <Link
            href="/partners"
            className="px-6 py-2 bg-[#162E72] text-white text-sm md:text-base rounded-full hover:scale-105 hover:bg-[#35404e] transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Partners
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
