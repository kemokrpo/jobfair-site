'use client'
import React from "react";
import SlickSlider from "@/components/SlickSlider";

const History: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-gray-100 min-h-screen" id="services">
      {/* Heading Section */}
      <div className="text-center mb-16">
        <span className="text-sm uppercase tracking-widest text-blue-600">
          BEST Mostar
        </span>
        <h2 className="text-4xl font-semibold text-blue-800 mt-4">
          JOBFAIR KROZ GODINE
        </h2>
      </div>

      {/* Agenda Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-12">
        {/* Day 1 */}
        <div className="p-8 bg-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
          <h3 className="text-xl font-semibold text-blue-700 mb-4">
            JobFair & Soft Skill Academy 2024
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
          Sajam zapošljavanja 2024. godine također je uspješno održan. Posjetioci su  imali priliku da se informišu o očekivanjima poslodavaca i poželjnim vještinama za svoju struku, kao i da istraže mogućnosti koje je domaća privreda nudila, što im je pomoglo u donošenju odluka o budućoj karijeri.
          Za učesnike iz Sarajeva bio je organizovan prevoz, a u sklopu sajma održana je i Soft Skills akademija. Kroz niz besplatnih interaktivnih radionica, mladi su imali priliku usavršiti ključne lične i profesionalne vještine potrebne za zapošljavanje i razvoj karijere. Stručnjaci su ih educirali o pisanju CV-a i motivacionog pisma, pripremi za intervju, prezentacijskim vještinama i drugim relevantnim temama.
          </p>
          <SlickSlider folder="slike/2024" />
        </div>

        {/* Day 2 */}
        <div className="p-8 bg-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
          <h3 className="text-xl font-semibold text-blue-700 mb-4">
            JobFair & Hackathon 2023
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
          Sajam zapošljavanja 2023. godine održan je u sklopu Hackathon-a, ovaj put uživo, pružajući učesnicima još bolju priliku za direktno umrežavanje s poslodavcima. Posjetioci su mogli saznati više o aktuelnim poslovnim prilikama, očekivanjima kompanija i vještinama potrebnim za uspjeh na tržištu rada. Kroz razgovore s predstavnicima renomiranih firmi, stručne savjete i interaktivne sesije, mnogi su stekli korisne kontakte i jasniju viziju svoje buduće karijere. Sajam je dodatno obogatio Hackathon, spajajući inovacije, talenat i poslovni svijet na jednom mjestu, potvrđujući značaj ovog događaja za mlade profesionalce.
          </p>
          <SlickSlider folder="slike/2023" />
        </div>

        {/* Day 3 */}
        <div className="p-8 bg-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
          <h3 className="text-xl font-semibold text-blue-700 mb-4">
            JobFair & Hackathon 2022
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
          Prvi Sajam zapošljavanja održan je 2022. godine u sklopu online Hackathon-a, programerskog takmičenja koje okuplja mlade talente u rješavanju tehnoloških izazova. Kao prvi događaj te vrste, sajam je omogućio učesnicima da virtuelno stupe u kontakt s predstavnicima kompanija, steknu uvid u tržište rada i saznaju koje su vještine najtraženije u IT industriji i srodnim sektorima.
          Kroz online panele, prezentacije i individualne razgovore, posjetioci su imali priliku povezati se s poslodavcima, dobiti savjete o zapošljavanju i istražiti mogućnosti za praksu i zaposlenje. Ovaj pionirski događaj postavio je temelje za buduće sajmove, otvarajući vrata mladim profesionalcima ka novim karijernim prilikama.
          </p>
        </div>
      </div>
    </section>
  );
};

export default History;
