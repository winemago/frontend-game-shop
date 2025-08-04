import cartIcon from "@/../public/icons/cart.svg";
import { NavigationItem } from "@/types/navigation";

export const NAVIGATION_ITMES: NavigationItem[] = [
  {
    href: "/cart",
    label: "View shopping cart",
    icon: cartIcon,
    iconAlt: "Shopping cart icon",
  },
] as const;
