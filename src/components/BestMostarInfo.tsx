import React from "react";
import Image from "next/image"; // Import Next.js Image component

const BestMostarInfo: React.FC = () => {
  return (
    <div
      className="flex flex-col items-center bg-white py-16 px-4 md:px-8"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='1000' preserveAspectRatio='none' viewBox='0 0 1440 1000'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1356%26quot%3b)' fill='none'%3e%3crect width='1440' height='1000' x='0' y='0' fill='url(%26quot%3b%23SvgjsLinearGradient1357%26quot%3b)'%3e%3c/rect%3e%3cpath d='M0 0L534.43 0L0 209.67z' fill='rgba(255%2c 255%2c 255%2c .1)'%3e%3c/path%3e%3cpath d='M0 209.67L534.43 0L750.7099999999999 0L0 548.71z' fill='rgba(255%2c 255%2c 255%2c .075)'%3e%3c/path%3e%3cpath d='M0 548.71L750.7099999999999 0L776.1299999999999 0L0 778.61z' fill='rgba(255%2c 255%2c 255%2c .05)'%3e%3c/path%3e%3cpath d='M0 778.61L776.1299999999999 0L1220 0L0 841.58z' fill='rgba(255%2c 255%2c 255%2c .025)'%3e%3c/path%3e%3cpath d='M1440 1000L836.19 1000L1440 994.05z' fill='rgba(0%2c 0%2c 0%2c .1)'%3e%3c/path%3e%3cpath d='M1440 994.05L836.19 1000L642.4300000000001 1000L1440 591.1099999999999z' fill='rgba(0%2c 0%2c 0%2c .075)'%3e%3c/path%3e%3cpath d='M1440 591.11L642.4300000000001 1000L635.33 1000L1440 280.7z' fill='rgba(0%2c 0%2c 0%2c .05)'%3e%3c/path%3e%3cpath d='M1440 280.70000000000005L635.33 1000L582.94 1000L1440 276.06000000000006z' fill='rgba(0%2c 0%2c 0%2c .025)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1356'%3e%3crect width='1440' height='1000' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='7.64%25' y1='-11%25' x2='92.36%25' y2='111%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1357'%3e%3cstop stop-color='%230e2a47' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(32%2c 66%2c 147%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Image Section */}
      <div className="p-4 md:w-2/3">
        <Image
          src="/aboutBestPicture.jpg"
          alt="BEST Mostar"
          className="border-2 border-white p-2 rounded-lg w-full"
          width={800} // Set appropriate width
          height={600} // Set appropriate height
        />
      </div>

      {/* Text Section */}
      <div className="text-center w-full md:w-2/3 mt-12 flex flex-col items-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          BEST MOSTAR
        </h1>
        <div className="text-center text-sm md:text-xl text-white leading-relaxed">
          BEST (Board of European Students of Technology) je volonterska,
          neprofitna, apolitička studentska organizacija osnovana s ciljem
          pružanja mogućnosti za komunikaciju, suradnju i razvoj studenata
          inženjerstva širom Evrope. Djelujemo u 34 zemlje Evrope, sa 85 lokalne
          BEST grupe i 3300+ članova. Težimo pružanju komplementarnog znanja i
          prilika studentima da steknu dodatne praktične vještine.
          <br />
          <br />
          BEST-ove ciljne skupine su: studenti, univerziteti i kompanije, te
          kroz svoje projekte:
          <ul className="list-disc list-inside">
            <li>međunarodni akademski seminari,</li>
            <li>soft-skills treninzi,</li>
            <li>sajmovi zapošljavanja,</li>
            <li>internacionalni kursevi,</li>
            <li>kulturne razmjene</li>
          </ul>
          …nastojimo ostvariti uspješnu saradnju.
        </div>
      </div>
    </div>
  );
};

export default BestMostarInfo;
