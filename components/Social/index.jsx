import Link from "next/link";
import { MdiTwitter, MdiYoutube, MdiInstagram, MdiWhatsapp } from "./Icons";

export default function Social() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pb-12">
      <ul className="flex justify-center gap-4 dark:text-white">
        <li>
          <Link href="https://x.com" target="_blank">
            <MdiTwitter />
          </Link>
        </li>
        <li>
          <Link href="https://youtube.com" target="_blank">
            <MdiYoutube />
          </Link>
        </li>
        <li>
          <Link href="https://instagram.com" target="_blank">
            <MdiInstagram />
          </Link>
        </li>
        <li>
          <Link href="https://whatsapp.com" target="_blank">
            <MdiWhatsapp />
          </Link>
        </li>
      </ul>
    </div>
  );
}
