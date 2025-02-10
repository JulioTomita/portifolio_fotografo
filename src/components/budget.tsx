import Image from "next/image";
import Button from "./button";

export default function Budget() {
  return (
    <div className="flex flex-col w-full h-full items-center justify-between bg-white">
      <div className="text-black border border-black relative">
        <Image
          src="/budget.jpg"
          alt="Budget"
          width={2000}
          height={100}
          className=""
        />
        <BudgetButton />
      </div>
    </div>
  );
}

export const BudgetButton = () => {
  return (
    <div className="absolute top-48 left-56 text-white font-serif px-2 py-1 text-5xl flex flex-col gap-2">
      <span className="">
        Fotografias em
        <br />
        Alta Qualidade
      </span>
      <Button
        text="Solicite um Orçamento"
        onClick={() => alert("Orçamento")}
        className="text-lg w-56"
      />
    </div>
  );
};
