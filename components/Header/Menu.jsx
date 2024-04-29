"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Menu() {
  const [HideMenu, setHideMenu] = useState(true);

  return (
    <div className="relative">
      <button
        className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-2 focus:ring-pink-500"
        onClick={() => setHideMenu(!HideMenu)}
        type="button"
      >
        <span className="sr-only">Open user menu</span>
        <div className="relative rounded-full w-10 h-10 overflow-hidden">
          <Image
            className="rounded-full object-cover"
            src="/steam.webp"
            alt="user photo"
            fill
          />
        </div>
      </button>

      <div
        className={`${
          HideMenu ? "hidden " : ""
        }absolute end-0 top-11 z-10 bg-gray-500/50 xs:bg-white/5 border border-white/5 backdrop-blur-3xl divide-y rounded-lg shadow w-44 divide-white/5`}
      >
        <div className="px-4 py-3 text-sm text-white hover:text-pink-500">
          <div>name</div>
          <div className="font-medium truncate">name@email.com</div>
        </div>
        <ul className="py-2 text-sm text-white">
          <li>
            <Link
              href="/"
              className="block px-4 py-2 hover:bg-pink-500 hover:text-white"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="block px-4 py-2 hover:bg-pink-500 hover:text-white"
            >
              Settings
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="block px-4 py-2 hover:bg-pink-500 hover:text-white"
            >
              Earnings
            </Link>
          </li>
        </ul>
        <div className="py-2">
          <Link
            href="/"
            className="block px-4 py-2 text-sm hover:bg-pink-500 hover:text-white"
          >
            Sign out
          </Link>
        </div>
      </div>
    </div>
  );
}
