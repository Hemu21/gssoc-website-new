import React from "react";
import Image from "next/image";
import Link from "next/link";

const PopupBanner = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg relative shadow-lg text-center animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-center h-7 w-7 text-2xl"
        >
          &times;
        </button>
        <Image
          src="/GSSOC_popup.webp"
          alt="Postman Challenge"
          width={600}
          height={300}
          className="rounded-lg"
        />
        <div className="mt-4">
          <p className="text-2xl font-bold text-orange-600">
            Hack Web3Conf India&apos;24!!!
          </p>
          <p className="text-lg text-gray-700">
            Let&apos;s dive into realm of web3
          </p>

          <div className="mt-4 gap-5 flex max-md:flex-col w-full items-center justify-center">
            <a
              className=""
              href="https://dorahacks.io/hackathon/hack-web3conf-24/detail"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                id="CTA-button"
                data-aos="fade-down"
                className=" bg-gradient-to-b w-full from-primary_orange-0 to-orange-600 text-md text-white font-semibold px-4 py-4 rounded-2xl md:text-2xl md:py-2 hover:bg-gradient-to-t hover:from-primary_orange-0 hover:to-orange-600"
              >
                Register Here
              </button>
            </a>
          </div>
          <div className="flex flex-row gap-4 mt-5 text-center m-auto">
            <p className="text-lg text-gray-700 text-center m-auto">
              To Be a part of Web3Conf&apos;24{" "}
              <a
                href="https://www.web3confindia.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary_orange-0 hover:text-orange-600 underline hover:no-underline hover:font-bold bg-none cursor-pointer hover:text-xl"
              >
                Book Now
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupBanner;
