import Button from "@/components/Button/button";
import { ComboboxDemo } from "@/components/ComboBox/comboBox";

export default function Home() {
  return (
    <main className="min-h-screen flex-col items-center justify-between p-24 bg-gray-200">
      <div>
        <div className="flex items-start w-full text-2xl gap-8">
          <a className="font-bold">GALERIA</a>
          <ComboboxDemo />
        </div>
      </div>
    </main>
  );
}
