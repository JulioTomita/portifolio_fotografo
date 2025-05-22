import { useState } from "react";
import CustomInput from "../CustomInput";

export default function Contact() {
  const [name, setName] = useState("");
  const [fone, setFone] = useState("");
  const [email, setEmail] = useState("");
  const [help, setHelp] = useState("");

  return (
    <div className="flex flex-col w-full h-full items-center justify-between bg-gray-200 gap-4">
      <div className="text-black font-serif text-2xl">Entre em contato</div>
      <div className="w-full gap-4 items-center justify-center">
        <CustomInput
          label="Nome"
          value={name}
          onChange={(e) => {
            setName(e);
          }}
          placeholder="Digite seu nome"
        />
        <CustomInput
          label="Nome"
          value=""
          onChange={() => {}}
          placeholder="Digite seu nome"
        />
        <CustomInput
          label="Nome"
          value=""
          onChange={(e) => {}}
          placeholder="Digite seu nome"
        />
      </div>
    </div>
  );
}
