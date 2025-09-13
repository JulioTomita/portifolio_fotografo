"use client";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import React from "react";
import { Button } from "../ui/button";

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
      <a href="/sobre">SOBRE</a>
      <a href="/orcamento">ORÇAMENTO</a>
      <DropdownButton />
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

export function DropdownButton() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="bg-blue-300 rounded-xl w-36 h-10 hover:text-black"
        >
          Login
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full bg-blue-200 p-4 rounded-xl bg-opacity-75 cursor-pointer">
        <DropdownMenuCheckboxItem
          onClick={() => {
            window.location.href = "/galeria";
          }}
        >
          PERFIL
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          onClick={() => {
            window.location.href = "/orcamento";
          }}
        >
          ORÇAMENTOS
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          onClick={() => {
            window.location.href = "/galeria";
          }}
        >
          CONTRATOS
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          onClick={() => {
            window.location.href = "/galeria";
          }}
        >
          CALENDARIO
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
