export default function SideBar() {
  return (
    <aside className="w-56 h-screen bg-slate-500 flex flex-col items-start px-6 py-8">
      <ul className="w-full text-white text-lg font-semibold space-y-4 cursor-pointer">
        <li className="text-blue-500 border-b border-white pb-1">PERFIL</li>
        <li className="border-b border-white pb-1">ORÇAMENTOS</li>
        <li className="border-b border-white pb-1">CONTRATOS</li>
        <li className="border-b border-white pb-1">CALENDÁRIO</li>
      </ul>
    </aside>
  );
}
