import { Sidebar } from "@/components/layout/Sidebar";
import { MobileNav } from "@/components/layout/MobileNav";

export default function DashboardGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 px-6 md:px-10 py-8 pb-24 md:pb-8 max-w-6xl mx-auto w-full">
        {children}
      </main>
      <MobileNav />
    </div>
  );
}
