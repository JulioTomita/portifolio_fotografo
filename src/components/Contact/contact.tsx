import { useState } from "react";
import CustomInput from "../CustomInput";
import Button from "../Button/button";

export default function Contact() {
  const [name, setName] = useState("");
  const [fone, setFone] = useState("");
  const [email, setEmail] = useState("");
  const [help, setHelp] = useState("");

  return (
    <div className="flex flex-col w-full h-full items-center justify-between bg-gray-200 gap-4 p-4">
      <div className="text-black font-serif text-2xl">Entre em contato</div>
      <div className="gap-4 flex flex-col w-2/5 h-full items-center">
        <CustomInput
          label="Nome"
          value={name}
          onChange={(e) => {
            setName(e);
          }}
          placeholder="Digite seu nome"
        />
        <CustomInput
          label="Telefone"
          value={fone}
          onChange={(e) => {
            setFone(e);
          }}
          placeholder="Digite seu telefone"
        />
        <CustomInput
          label="Email"
          value={email}
          onChange={(e) => {
            setEmail(e);
          }}
          placeholder="Digite seu email"
        />
        <CustomInput
          label="Como podemos ajudar?"
          value={help}
          onChange={(e) => {
            setHelp(e);
          }}
          placeholder="Digite sua mensagem"
        />
        <Button
          className="text-xl text-white w-1/2"
          color="bg-blue-300"
          text="Enviar"
          borderColor="border"
          onClick={() => {}}
        />
      </div>
    </div>
  );
}
