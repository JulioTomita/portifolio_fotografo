import CustomInput from "../CustomInput";

export default function Contact() {
  return (
    <div className="flex flex-col w-full h-full items-center justify-between bg-gray-200 gap-4">
      <div className="text-black font-serif text-2xl">Entre em contato</div>
      <div className="flex flex-col w-full h-full gap-4 items-center justify-center">
        <CustomInput
          label="Nome"
          value=""
          onChange={() => {}}
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
          onChange={() => {}}
          placeholder="Digite seu nome"
        />
      </div>
    </div>
  );
}
