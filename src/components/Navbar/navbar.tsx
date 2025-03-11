"use client";

import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { RxDropdownMenu } from "react-icons/rx";

interface NavbarProps {
  logado?: boolean;
}

export const Navbar = (props: NavbarProps) => {
  const navbar = props.logado ? "navbar logado" : "navbar";
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-10 py-4 bg-zinc-900 text-white font-semibold text-2xl">
      <LogoMark />
      <a href="/">HOME</a>
      <a href="/galeria">GALERIA</a>
      <a href="/contato">CONTATO</a>
      <a href="/orcamento">ORÇAMENTO</a>
      <LoginButton />
    </nav>
  );
};

export const LogoMark = () => {
  return (
    <div className="flex items-center justify-center w-20 h-12 bg-zinc-900 text-white text-sm font-extralight">
      <h1>
        Julio Tomita <br /> Fotografias
      </h1>
    </div>
  );
};

export const LoginButton = () => {
  return (
    <RxDropdownMenu>
      <DropdownMenuTrigger>Open</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </RxDropdownMenu>
  );
};
