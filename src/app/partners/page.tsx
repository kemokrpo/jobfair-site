import React from "react";

const Partners: React.FC = () => {
  return (
    <div className="bg-gray-100">
      {/* Platinum Partners */}
      <section className="py-24 px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-blue-800 uppercase tracking-widest">
            Platinum partners
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-12">
          <div className="p-8 bg-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">SETEC</h3>
            <img src="/slike/setec.png" alt="SETEC" />
          </div>
        </div>
      </section>

      {/* Bronze Partners */}
      <section className="py-24 px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-yellow-700 uppercase tracking-widest">
            Bronze partners
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-12">
          <div className="p-8 bg-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">SMED Engineering</h3>
            <img src="/slike/smedeng.png" alt="SMED Engineering" />
          </div>
          <div className="p-8 bg-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">Telus Digital</h3>
            <img src="/slike/telus.png" alt="Telus Digital" />
          </div>
          <div className="p-8 bg-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">AtlantBH</h3>
            <img src="/slike/atlant.png" alt="AtlantBH" />
          </div>
          <div className="p-8 bg-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">UniCredit Bank</h3>
            <img src="/slike/unicredit.png" alt="UniCredit Bank" />
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-24 px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-green-700 uppercase tracking-widest">
            Partners
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-12">
          <div className="p-8 bg-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">BHFF</h3>
            <img src="/slike/BHFF.png" alt="BHFF" />
          </div>
        </div>
      </section>

      {/* Media Partners */}
      <section className="py-24 px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-gray-700 uppercase tracking-widest">
            Media partners
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-12">
          <div className="p-8 bg-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">Bolji Posao</h3>
            <img src="/slike/boljiposao.jpeg" alt="Bolji Posao" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
