import { FooterBar } from "@/components/Footer/footer";
import { Navbar } from "@/components/Navbar/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>
        <Navbar />
        {children}
        <FooterBar />
      </div>
    </>
  );
}
