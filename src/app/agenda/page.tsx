import React from "react";

const Agenda: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-gray-100 min-h-screen" id="services">
      {/* Heading Section */}
      <div className="text-center mb-16">
        <span className="text-sm uppercase tracking-widest text-blue-600">
          7-9 April 2025
        </span>
        <h2 className="text-4xl font-semibold text-blue-800 mt-4">
          JOBFAIR AGENDA
        </h2>
      </div>

      {/* Agenda Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-12">
        {/* Day 1 */}
        <div className="p-8 bg-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
          <h3 className="text-xl font-semibold text-blue-700 mb-4">Day One</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            ~ Otvaranje (9:00)<br></br>
            ~ Radionica 1 (10:00 -11:30) <br></br>
            ~ Pauza (11:30-12:00)<br></br>
            ~ Radionica 2 (12:00 - 13:30)<br></br>
            ~ Zatvaranje (14:00)<br></br>
            
           

          </p>
        </div>

        {/* Day 2 */}
        <div className="p-8 bg-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
          <h3 className="text-xl font-semibold text-blue-700 mb-4">Day Two</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
          ~ Registracija učesnika (9:30 - 10:00)<br></br>
            ~ Otvaranje akademije (10:00 - 10:30) <br></br>
            ~ Radionica Marketing i brendiranje za StartUp-ove Adela Hadžić(10:30-11:45)<br></br>
            ~ Pauza za kafu (11:45 - 12:15)<br></br>
            ~ Radionica Kako privući i zadržati klijente: Savjeti za dugoročni poslovni uspjeh Mesud Pašić (12:15 - 13:30)<br></br>
            ~ Pauza za ručak (13:30 - 14:30) <br></br>     
            ~ Radionica Od kontakta do kapitala: Kako do mentora, mreže i finansiranja? Muniz Karajbić (14:30 -15:30) <br></br>
          </p>
        </div>

        {/* Day 3 */}
        <div className="p-8 bg-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
          <h3 className="text-xl font-semibold text-blue-700 mb-4">Day Three</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
          ~ Registracija učesnika (9:30 - 10:00)<br></br>
            ~ (Samo)motivacija Mia Dugandžić (10:00 - 11:15) <br></br>
            ~ Pauza za kafu(11:15-11:45)<br></br>
            ~ Biznis modeli i strategije monetizacije Goran Dodig (11:45 - 13:00)<br></br>
            ~ Pauza za ručak (13:00 - 14:00)<br></br>
            ~ Najčešće greške na početku i kako ih ispraviti Elvis Šabić (14:00 - 15:30) <br></br>     
            ~ Zatvaranje akademije (15:30 -16:00) <br></br>
         
          </p>
        </div>
      </div>
    </section>
  );
};

export default Agenda;
