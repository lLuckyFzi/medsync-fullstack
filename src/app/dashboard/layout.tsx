import Header from "@/components/Header";
import Sidebar from "@/components/Siderbar";
import { BookingProvider } from "@/providers/BookingProvider";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50 p-4 flex gap-6">
      <BookingProvider>
        <Sidebar />

        <div className="flex-1 flex flex-col h-[calc(100vh-2rem)]">
          <Header />

          <main className="flex-1 bg-white rounded-xl shadow-[0_10px_40px_rgb(0,0,0,0.03)] border border-slate-100 overflow-hidden relative">
            <div className="h-full overflow-y-auto p-4 custom-scrollbar">
              {children}
            </div>
          </main>
        </div>
      </BookingProvider>
    </div>
  );
}
