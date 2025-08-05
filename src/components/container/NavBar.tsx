import Image from "next/image";
import Link from "next/link";
import GamerShopLogo from "@/../public/logos/GamerShop.svg";
import { NAVIGATION_ITMES } from "@/config/navigation";

export default function NavBar() {
  return (
    <header
      className="bg-surface-secondary h-nav-height sticky top-0 z-50"
      role="banner"
    >
      <nav
        className="px-4 sm:px-6 lg:px-8 xl:px-global flex items-center justify-between h-full "
        role="navigation"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="text-xl font-bold text-foreground hover:text-gaming-accent transition-colors flex-shrink-0"
          aria-label="GamerShop - Home"
        >
          <Image
            src={GamerShopLogo}
            alt="GamerShop Logo"
            width={120}
            height={20}
            className="w-[100px] h-auto sm:w-[120px] lg:w-[150px]"
            priority
          />
        </Link>
        <ul className="flex items-center justify-center gap-2 sm:gap-4 lg:gap-6">
          {NAVIGATION_ITMES.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="relative flex items-center justify-center p-2 sm:p-3 hover:bg-muted rounded-lg transition-colors group"
                aria-label={item.label}
              >
                {item.icon ? (
                  <div className="flex items-center justify-center">
                    <Image
                      src={item.icon}
                      alt={item.iconAlt || ""}
                      width={20}
                      height={20}
                      className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:scale-110"
                    />
                    {item.text && (
                      <span className="hidden lg:inline-block ml-2 text-sm font-medium">
                        {item.text}
                      </span>
                    )}
                  </div>
                ) : (
                  <span className="text-sm sm:text-base font-medium px-2 py-1">
                    {item.text}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
