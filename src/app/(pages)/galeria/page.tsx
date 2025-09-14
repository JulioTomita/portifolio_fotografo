"use client";

import Button from "@/components/Button/button";
import { ComboboxDemo } from "@/components/ComboBox/comboBox";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const searchParams = useSearchParams();
  const [dados, setDados] = useState([]);

  useEffect(() => {
    const galeryFilter = searchParams.get("filtro");

    if (galeryFilter) {
      console.log("Aplicando filtro:", galeryFilter);

      // Aqui, adicionar a lógica para filtrar os dados com base no parâmetro "filtro"

      // fetch(`/api/tabela?status=${statusFiltro}`).then(...)
    }
  }, [searchParams]);

  const galeryFilter = searchParams.get("filtro") || "";

  return (
    <main className="min-h-screen flex-col items-center justify-between p-24 bg-gray-200">
      <div>
        <div className="flex items-start w-full text-2xl gap-8 justify-between">
          <div className="flex flex-col gap-4">
            <a className="font-bold">GALERIA</a>
            <ComboboxDemo filter={galeryFilter} />
          </div>

          <Button
            text="VOLTAR"
            className="bg-sky-900 rounded-xl justify-center hover:text-black hover:bg-sky-400"
            onClick={() => {
              window.location.href = "/";
            }}
          />
        </div>
      </div>
      <div className="mt-8 grid grid-cols-5 gap-4">
        {Array.from({ length: 20 }).map((_, index) => (
          <div key={index} className="w-90% h-96 bg-gray-300 rounded-lg" />
        ))}
      </div>
    </main>
  );
}
