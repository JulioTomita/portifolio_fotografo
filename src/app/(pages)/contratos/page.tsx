"use client"

import Button from "@/components/Button/button";
import { mockedContratos } from "@/components/mocked";
import SideBar from "@/components/SideBar/sideBar";
import React, { useEffect } from "react";

export default function Home() {

  // const [contratos, setContratos] = React.useState([Array]);

  useEffect(() => {
    // Verifica se existe algum contrato dentro do banco de dados
    // Se não existir, aparece uma mensagem falando que ainda não existe contrato
    // setContratos([mockedContratos]);
    console.log(mockedContratos);
    
  }, []);

  return (
    <main className="flex min-h-screen items-left justify-between">
      <SideBar/>
        <div className="justify-center flex p-10 w-full">
          <div className="flex flex-col gap-6 items-center">
            {mockedContratos.length === 0 ? (
              <span className="text-2xl font-serif font-semibold">
                Ainda não existe nenhum contrato cadastrado!
                </span>
                ) : (
                  <>
                    <span className="text-2xl font-serif font-semibold">
                      Meus Contratos:
                      </span>
                      <div className="grid grid-cols-3 gap-4 cursor-pointer">
                        {mockedContratos.map((contrato, index) => (
                          <div key={index} className="grid grid-cols-3 gap-2 p-4 border border-gray-300 rounded-lg shadow-md w-full">
                            <span className="font-semibold">Contrato #{index + 1}</span>
                            <span><span className="font-semibold">Nome do Cliente:</span> {contrato.nomeCliente}</span>
                            <span><span className="font-semibold">Serviço:</span> {contrato.servico}</span>
                            <span><span className="font-semibold">Data de Início:</span> {contrato.dataInicio}</span>
                            <span><span className="font-semibold">Data de Término:</span> {contrato.dataTermino}</span>
                            <span><span className="font-semibold">Valor:</span> R$ {contrato.valor}</span>
                            <span className={`font-bold flex ${contrato.status === "Concluído" ? "text-green-500" : "text-yellow-500"}`}>
                              <span className="font-semibold text-black">Status:</span> 
                              {contrato.status}
                            </span>
                          </div>
                        ))}
                      </div>
                  </>
                )}
          </div>
        </div>
    </main>
  );
}
