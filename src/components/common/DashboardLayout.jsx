import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-100">
      
      {/* MOBILE: Top Navbar */}
      <div className="block lg:hidden w-full sticky top-0 z-20">
        <Sidebar variant="horizontal" />
      </div>

      {/* DESKTOP: Left Sidebar */}
      <div className="hidden lg:block">
        <Sidebar variant="vertical" />
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-4 md:p-6">
        <Outlet />
      </div>
    </div>
  );
}
