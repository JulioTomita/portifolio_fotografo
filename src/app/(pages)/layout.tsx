import { FooterBar } from "@/components/footer";
import { Navbar } from "@/components/navbar";

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
