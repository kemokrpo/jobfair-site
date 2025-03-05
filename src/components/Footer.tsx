import { FC } from "react";
import Link from "next/link";
import IconWindmill from "./Icons/IconWindmill";

const Footer: FC = () => {
  return (
    <footer className="bg-black p-6 md:p-12 grid gap-16 md:gap-32 grid-cols-1 md:grid-cols-4 w-full">
      <div className="flex flex-col items-start">
        <div className="flex items-center space-x-3">
          <span className="fill-white">
            <IconWindmill width={40} />
          </span>
          <h1 className="text-lg text-white font-medium">BEST Mostar</h1>
        </div>
        <h3 className="mt-4 text-gray-200 text-sm">
          © 2025 • Made with ♥ by BEST Mostar
        </h3>
      </div>
      <div className="flex flex-col">
        <h2 className="text-lg text-gray-100 mb-2">E-mail</h2>
        <Link
          href={"mailto:mostar@best-eu.org"}
          className="text-gray-300 underline text-sm"
        >
          mostar@best-eu.org
        </Link>
        <Link
          href={"mailto:jobfair.mostar@best-eu.org"}
          className="text-gray-300 underline text-sm"
        >
          jobfair.mostar@best-eu.org
        </Link>
      </div>
      <div className="flex flex-col">
        <h2 className="text-lg text-gray-100 mb-2">Adresa</h2>
        <h3 className="text-gray-300 text-sm">
          USRC Midhat Hujdur Hujka, Sjeverni logor bb, Mostar, 88000
          Bosna i Herzegovina
        </h3>
      </div>
      <div className="flex flex-col">
        <h2 className="text-lg text-gray-100 mb-2">Zaprati nas</h2>
        <Link
          href={"https://www.facebook.com/BESTMostar/"}
          className="text-gray-300 underline text-sm mb-2"
          target="_blank"
        >
          Facebook
        </Link>
        <Link
          href={"https://www.instagram.com/best.mostar/"}
          className="text-gray-300 underline text-sm mb-2"
          target="_blank"
        >
          Instagram
        </Link>
        <Link
          href={"https://ba.linkedin.com/company/best-mostar"}
          className="text-gray-300 underline text-sm mb-2"
          target="_blank"
        >
          LinkedIn
        </Link>
        <Link
          href={"https://www.tiktok.com/@best.mostar?_t=ZM-8uPkh4KJjQU&_r=1"}
          className="text-gray-300 underline text-sm"
          target="_blank"
        >
          TikTok
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
