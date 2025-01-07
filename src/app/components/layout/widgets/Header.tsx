"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { navLinks } from "@/app/helpers/stub-data/nav-links";
import SideDrawer from "./Drawer";
import Logo from "./Logo";
import Button from "@/app/components/reusable/Button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import ThemeIcon from "../../reusable/Theme";

export default function Header() {
  const pathname = usePathname();
  const isDashboard = pathname === "/dashboard";

  return (
    <header className="flex p-3 lg:p-6 items-center justify-between fixed z-50 top-0 w-screen shadow-lg">
      <Logo />
      <nav className="hidden lg:flex">
        <ul className="flex gap-4 flex-row capitalize">
          {navLinks.map((link) => (
            <li key={link.name} className="p-3 hover:rounded-md">
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
          <ThemeIcon />
        </ul>
      </nav>

      <SignedOut>
        <div className="hidden lg:flex flex-row items-center gap-3">
          <Link href="#home">
            <span className="text-primary mr-6">
              <SignInButton mode="modal" />
            </span>
          </Link>
          <Link href="#home">
            <Button className="rounded-[1.875rem]">Get Started</Button>
          </Link>
        </div>
      </SignedOut>

      <SignedIn>
        <div className="hidden lg:flex flex-row items-center gap-3">
          <Link href={isDashboard ? "/" : "/"}>
            <Button className="rounded-[1.875rem]">
              {isDashboard ? "Home" : "Dashboard"}
            </Button>
          </Link>
          <UserButton />
        </div>
      </SignedIn>

      <div className="flex lg:hidden">
        <SideDrawer
          buttonChildren={
            <MenuOutlinedIcon
              fontSize="large"
              className="m-3 hover:bg-gray-100  hover:rounded-md"
            />
          }
        />
      </div>
    </header>
  );
}
