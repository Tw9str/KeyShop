import Link from "next/link";
import { PhBag } from "../Social/Icons";
import Menu from "./Menu";

export default function Header() {
  return (
    <header className="pt-4 px-4 sm:px-6 md:px-8 dark:text-white">
      <div className="flex justify-between items-center ">
        <h1>
          <Link href="/">KeyShop</Link>
        </h1>
        <ul className="flex justify-center items-center gap-6">
          <li className="relative">
            <span className="absolute grid place-content-center -right-3.5 -top-3.5 w-6 h-6 bg-pink-500 rounded-full">
              1
            </span>
            <Link className="text-lg font-bold" href="/cart">
              <PhBag />
            </Link>
          </li>
          <li>
            <Menu />
          </li>
        </ul>
      </div>
    </header>
  );
}
