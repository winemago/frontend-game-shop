import Image from "next/image";
import Link from "next/link";
import GamerShopLogo from "@/../public/logos/GamerShop.svg";
import { NAVIGATION_ITMES } from "@/config/navigation";

export default function NavBar() {
  return (
    <header className="bg-surface-secondary h-nav-height" role="banner">
      <nav
        className="px-global flex items-center justify-between h-full"
        role="navigation"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="text-xl font-bold text-foreground hover:text-gaming-accent transition-colors"
          aria-label="GamerShop - Home"
        >
          <Image
            src={GamerShopLogo}
            alt={"GamerShopLogo"}
            width={150}
            height={24}
          />
        </Link>
        <ul className="flex items-center justify-center">
          {NAVIGATION_ITMES.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="relative h-full hover:bg-muted rounded-lg transition-colors"
                aria-label={item.label}
              >
                {item.icon ? (
                  <Image
                    src={item.icon}
                    alt={item.iconAlt || ""}
                    width={24}
                    height={24}
                  />
                ) : (
                  item.text
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
