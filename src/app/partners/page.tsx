import React from "react";
import Image from "next/image";

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
          <div className="p-8 bg-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col items-center aspect-square max-w-sm mx-auto">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">SETEC</h3>
            {/* Image Container with maximum size control */}
            <div className="w-full flex justify-center max-w-[200px]">
              <Image
                src="/slike/setec.png"
                alt="SETEC"
                width={200}
                height={200}
                className="object-contain max-w-full max-h-[150px]"
              />
            </div>
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
          {[
            { name: "SMED Engineering", src: "/slike/smedeng.png", extraText: "x5" },
            { name: "Telus Digital", src: "/slike/telus.png", extraText: "" },
            { name: "NLB", src: "/slike/nlb.png", extraText: "x2" },
            { name: "Bright Moon Digital", src: "/slike/digital.jpeg", extraText: "x2" },
            { name: "UniCredit Bank", src: "/slike/unicredit.png", extraText: "x4" },
          ].map((partner) => (
            <div
              key={partner.name}
              className="p-8 bg-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col items-center aspect-square max-w-sm mx-auto"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-4">
                {partner.name}
              </h3>
              {/* Image Container with maximum size control */}
              <div className="w-full flex justify-center max-w-[200px]">
                <Image
                  src={partner.src}
                  alt={partner.name}
                  width={200}
                  height={200}
                  className="object-contain max-w-full max-h-[150px]"
                />
              </div>
              
            </div>
          ))}
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
          <div className="p-8 bg-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col items-center aspect-square max-w-sm mx-auto">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">BHFF</h3>
            {/* Image Container with maximum size control */}
            <div className="w-full flex justify-center max-w-[200px]">
              <Image
                src="/slike/BHFF.png"
                alt="BHFF"
                width={200}
                height={200}
                className="object-contain max-w-full max-h-[150px]"
              />
            </div>
            
          </div>

          <div className="p-8 bg-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col items-center aspect-square max-w-sm mx-auto">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">Intera</h3>
            {/* Image Container with maximum size control */}
            <div className="w-full flex justify-center max-w-[200px]">
              <Image
                src="/slike/intera.webp"
                alt="BHFF"
                width={200}
                height={200}
                className="object-contain max-w-full max-h-[150px]"
              />
            </div>
            
          </div>

          <div className="p-8 bg-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col items-center aspect-square max-w-sm mx-auto">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">NSoft</h3>
            {/* Image Container with maximum size control */}
            <div className="w-full flex justify-center max-w-[200px]">
              <Image
                src="/slike/nsoft.jpeg"
                alt="BHFF"
                width={200}
                height={200}
                className="object-contain max-w-full max-h-[150px]"
              />
            </div>
            
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
          <div className="p-8 bg-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col items-center aspect-square max-w-sm mx-auto">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">Bolji Posao</h3>
            {/* Image Container with maximum size control Promjena komentara */}
            <div className="w-full flex justify-center max-w-[200px]">
              <Image
                src="/slike/boljiposao.jpeg"
                alt="Bolji Posao"
                width={200}
                height={200}
                className="object-contain max-w-full max-h-[150px]"
              />
            </div>
            
          </div>
          <div className="p-8 bg-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col items-center aspect-square max-w-sm mx-auto">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">Bljesak info</h3>
            {/* Image Container with maximum size control Promjena komentara */}
            <div className="w-full flex justify-center max-w-[200px]">
              <Image
                src="/slike/bljesak.jpeg"
                alt="Bolji Posao"
                width={200}
                height={200}
                className="object-contain max-w-full max-h-[150px]"
              />
            </div>
            
          </div>

          <div className="p-8 bg-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col items-center aspect-square max-w-sm mx-auto">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">STUDOMAT</h3>
            {/* Image Container with maximum size control Promjena komentara */}
            <div className="w-full flex justify-center max-w-[200px]">
              <Image
                src="/slike/studomat.png"
                alt="Bolji Posao"
                width={200}
                height={200}
                className="object-contain max-w-full max-h-[150px]"
              />
            </div>
            
          </div>
          <div className="p-8 bg-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col items-center aspect-square max-w-sm mx-auto">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">Radio Ilijaš</h3>
            {/* Image Container with maximum size control Promjena komentara */}
            <div className="w-full flex justify-center max-w-[200px]">
              <Image
                src="/slike/radioIlijas.jpg"
                alt="Bolji Posao"
                width={200}
                height={200}
                className="object-contain max-w-full max-h-[150px]"
              />
            </div>
            
          </div>
          <div className="p-8 bg-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col items-center aspect-square max-w-sm mx-auto">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">Buka d.o.o.</h3>
            {/* Image Container with maximum size control Promjena komentara */}
            <div className="w-full flex justify-center max-w-[200px]">
              <Image
                src="/slike/buka.png"
                alt="Bolji Posao"
                width={200}
                height={200}
                className="object-contain max-w-full max-h-[150px]"
              />
            </div>
            
          </div>

          <div className="p-8 bg-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col items-center aspect-square max-w-sm mx-auto">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">RTV Gradiška</h3>
            {/* Image Container with maximum size control Promjena komentara */}
            <div className="w-full flex justify-center max-w-[200px]">
              <Image
                src="/slike/gradiska.png"
                alt="Bolji Posao"
                width={200}
                height={200}
                className="object-contain max-w-full max-h-[150px]"
              />
            </div>
            
          </div>
          <div className="p-8 bg-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col items-center aspect-square max-w-sm mx-auto">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">Radio M i Radio M plus</h3>
            {/* Image Container with maximum size control Promjena komentara */}
            <div className="w-full flex justify-center max-w-[200px]">
              <Image
                src="/slike/radio m.jpeg"
                alt="Bolji Posao"
                width={200}
                height={200}
                className="object-contain max-w-full max-h-[150px]"
              />
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
