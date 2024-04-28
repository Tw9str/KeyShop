import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="relative">
      <Image
        className="rounded-full blur-3xl absolute animate-spin-slow"
        src="/body-background2.svg"
        alt="test"
        width={500}
        height={500}
      />
      <Image
        className="rounded-full blur-3xl absolute top-full right-0 animate-spin-slow"
        src="/body-background2.svg"
        alt="test"
        width={500}
        height={500}
      />
      <div className="px-4 sm:px-6 md:px-8">
        <div className="glass max-w-7xl mx-auto mt-12 bg-white/5 border border-white/5 backdrop-blur-xl rounded-lg min-h-96 p-4">
          <p className="text-2xl text-gray-900 dark:text-white drop-shadow-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            ducimus magni, quidem quo placeat iste excepturi omnis vel iure
            impedit velit laborum! Incidunt sint vero repellendus, iure maiores
            tempora reprehenderit?
          </p>
        </div>
      </div>
    </div>
  );
}
