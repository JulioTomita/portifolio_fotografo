"use client";

import Button from "@/components/Button/button";
import CustomInput from "@/components/CustomInput";
import SideBar from "@/components/SideBar/sideBar";
import React, { useEffect } from "react";

export default function Home() {

  const [nomeCompleto, setNomeCompleto] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [telefone, setTelefone] = React.useState("");
  const [endereco, setEndereco] = React.useState("");

  return (
    <main className="flex min-h-screen">
      <SideBar/>
      <div className="justify-center flex p-10 w-full">
        <div className="flex flex-col gap-6 items-center">
        <a className="font-medium text-3xl">Configuração de Perfil</a>
        <div className="flex gap-4">
          <CustomInput
            label="Nome Completo"
            placeholder="Seu nome completo"
            value={nomeCompleto}
            onChange={(e) => setNomeCompleto(e)}
          />
          <CustomInput
            label="Email"
            placeholder="Seu email"
            value={email}
            onChange={(e) => setEmail(e)}
          />
        </div>
        <div className="flex gap-4">
          <CustomInput
            label="Telefone"
            placeholder="Seu telefone"
            value={telefone}
            onChange={(e) => setTelefone(e)}
          />
          <CustomInput
            label="Endereço"
            placeholder="Seu endereço"
            value={endereco}
            onChange={(e) => setEndereco(e)}
          />
        </div>
          <Button className="w-full text-white" color="bg-slate-400" text="Pronto" onClick={() => {
            console.log(nomeCompleto, email, telefone, endereco);
          }} />
        </div>
      </div>
    </main>
  );
}
