import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-left justify-between">
      <div className="w-1/6 h-full flex flex-col">
        <div className="bg-black">
          <h1 className="text-white">SideBar</h1>
        </div>
        <div className="h-20 w-full bg-red-500">
          <h1>Perfil</h1>
        </div>
        <div className="h-20 w-full bg-blue-500">Perfil</div>
        <div className="h-20 w-full bg-blue-500">Perfil</div>
        <div className="h-20 w-full bg-blue-500">Perfil</div>
        <div className="h-20 w-full bg-blue-500">Perfil</div>
      </div>
    </main>
  );
}
