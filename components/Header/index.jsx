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
        <ul className="flex gap-4">
          <li>
            <Link className="text-lg font-bold" href="/">
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
