import Image from "next/image";
import Button from "../Button/button";
import Router from "next/router";
interface SectorsProps {
  img: string;
  title: string;
}

export default function Sectors() {
  return (
    <div className="bg-gray-200 px-64 py-8 w-full h-full flex flex-col gap-6 items-center">
      <span className="font-semibold text-2xl text-black font-serif">
        Setores
      </span>
      <div className="grid grid-cols-5 gap-4 h-96 w-full text-black">
        <SectorsTemplate title="Formatura" img="/fotografo.jpg" />
        <SectorsTemplate title="Casamento" img="/fotografo.jpg" />
        <SectorsTemplate title="Aniversario" img="/fotografo.jpg" />
        <SectorsTemplate title="Corporativo" img="/fotografo.jpg" />
        <SectorsTemplate title="Festa" img="/fotografo.jpg" />
      </div>
      <Button
        text="Solicite um Orçamento"
        onClick={() => alert("Solicite um Orçamento")}
        className="w-1/6 h-12 font-semibold"
        color="text-black"
        borderColor="border-black"
      />
    </div>
  );
}

export const SectorsTemplate = ({ img, title }: SectorsProps) => {
  const irParaTabelaComFiltro = () => {
    window.location.href = "/galeria?filtro=" + title;
  };

  return (
    <div className="bg-white rounded-lg">
      <div className="">
        <div
          className="relative h-80 w-full overflow-hidden cursor-pointer"
          onClick={() => irParaTabelaComFiltro()}
        >
          <Image
            src="/fotografo.jpg"
            fill
            alt="Imagem de fundo"
            className="object-cover"
          />
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center p-4">
        <p className="text-xl font-semibold text-black">{title}</p>
      </div>
    </div>
  );
};
