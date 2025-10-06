import SideBarIcons from "../SideBarIcons";

export default function SideBar() {
  return (
    <aside className="w-56 h-screen bg-slate-500 flex flex-col items-start justify-start px-6 py-8">
      <ul className="w-full text-white text-lg font-semibold space-y-4 cursor-pointer">
        <SideBarIcons title="Perfil" href="/perfil"/>
        <SideBarIcons title="Contratos" href="/contratos"/>
        <SideBarIcons title="Orçamentos" href="/orcamento"/>
        <SideBarIcons title="Calendário" href="/calendario"/>
      </ul>
    </aside>
  );
}
