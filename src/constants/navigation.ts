import cartIcon from "@/../public/icons/cart.svg";
import type { NavigationItem } from "@/types";

export const navigationItems: NavigationItem[] = [
  {
    href: "/cart",
    label: "View shopping cart",
    icon: cartIcon,
    iconAlt: "Shopping cart icon",
  },
];
