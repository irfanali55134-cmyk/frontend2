import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-[#0B1220] min-h-screen text-white flex">

      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="flex-1 lg:ml-64 min-w-0">

        <Topbar setSidebarOpen={setSidebarOpen} />

        <main className="pt-24 p-4 md:p-6 lg:p-8 overflow-x-hidden">
          {children}
        </main>

      </div>

    </div>
  );
}

export default AdminLayout;