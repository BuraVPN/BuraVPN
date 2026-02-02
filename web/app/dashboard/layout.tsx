import DashHeader from "@/components/dashboard/shell/DashHeader";
import DashSidebar from "@/components/dashboard/shell/DashSideBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dashboard-layout flex flex-col min-h-screen bg-gray-100">
      <DashHeader />
      <main className="flex flex-1">
        <DashSidebar />
        {children}
      </main>
    </div>
  );
}
