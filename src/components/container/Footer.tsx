import Link from "next/link";
import Image from "next/image";
import ApplyDigitalLogo from "@/../public/logos/ApplyDigitalLogo.svg";

export default function Footer() {
  return (
    <footer className="bg-surface-neutral h-footer-height">
      <nav className="max-w-7xl mx-auto flex items-center justify-center h-full">
        <Link href="/">
          <Image
            src={ApplyDigitalLogo}
            alt="ApplyDigitalLogo"
            width={170}
            height={44}
          />
        </Link>
      </nav>
    </footer>
  );
}
