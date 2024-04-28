import Image from "next/image";
import Link from "next/link";

export default function Menu() {
  return (
    <div>
      <button
        class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-2 focus:ring-pink-500"
        type="button"
      >
        <span class="sr-only">Open user menu</span>
        <div className="relative rounded-full w-8 h-8 overflow-hidden">
          <Image
            className="rounded-full"
            src="/steam.webp"
            alt="user photo"
            fill
            objectFit="cover"
          />
        </div>
      </button>

      <div class="absolute right-0 z-10 bg-white/5 border border-white/5 backdrop-blur-xl divide-y rounded-lg shadow w-44 divide-white/5">
        <div class="px-4 py-3 text-sm text-white hover:text-pink-500">
          <div>name</div>
          <div class="font-medium truncate">name@email.com</div>
        </div>
        <ul class="py-2 text-sm text-white">
          <li>
            <Link
              href="/"
              class="block px-4 py-2 hover:bg-pink-500 hover:text-white"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/"
              class="block px-4 py-2 hover:bg-pink-500 hover:text-white"
            >
              Settings
            </Link>
          </li>
          <li>
            <Link
              href="/"
              class="block px-4 py-2 hover:bg-pink-500 hover:text-white"
            >
              Earnings
            </Link>
          </li>
        </ul>
        <div class="py-2">
          <Link
            href="/"
            class="block px-4 py-2 text-sm hover:bg-pink-500 hover:text-white"
          >
            Sign out
          </Link>
        </div>
      </div>
    </div>
  );
}
