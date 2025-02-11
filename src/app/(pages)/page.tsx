"use client";
import Bio from "@/components/Bio/bio";
import Budget from "@/components/Budget/budget";
import CarroselHomepage from "@/components/Carrosel/carroselHomepage";
import Contact from "@/components/Contact/contact";
import FeedbackBox from "@/components/FeedBackBox/feedbackBox";
import Sectors from "@/components/Sectors/sectors";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full h-full justify-between bg-white">
      <div className="w-full h-full">
        <Budget />
        <Bio />
        <Sectors />
        <CarroselHomepage />
        <FeedbackBox />
        <Contact />
      </div>
    </main>
  );
}
