"use client";
import Bio from "@/components/bio";
import Budget from "@/components/budget";
import Sectors from "@/components/sectors";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full h-full justify-between bg-white">
      <div className="w-full h-full">
        <Budget />
        <Bio />
        <Sectors />
      </div>
    </main>
  );
}
