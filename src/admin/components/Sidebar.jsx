import {
  LayoutDashboard,
  MessageSquare,
  User,
  Settings,
  LogOut,
  X,
  FolderKanban,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const navigate = useNavigate();

  const menuItems = [
    {
      title: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/admin/dashboard",
    },
    {
      title: "Messages",
      icon: <MessageSquare size={20} />,
      path: "/admin/messages",
    },
    {
      title: "Profile",
      icon: <User size={20} />,
      path: "/admin/profile",
    },
    {
      title: "Settings",
      icon: <Settings size={20} />,
      path: "/admin/settings",
    },
    {
  title: "Projects",
  icon: <FolderKanban size={20} />,
  path: "/admin/projects",
},
  ];

  const handleLogout = async () => {
    const result = await Swal.fire({
      title: "Logout?",
      text: "Do you want to logout?",
      icon: "question",
      background: "#16213A",
      color: "#fff",
      confirmButtonColor: "#3ECF8E",
      cancelButtonColor: "#ef4444",
      showCancelButton: true,
      confirmButtonText: "Logout",
    });

    if (result.isConfirmed) {
      localStorage.clear();

      await Swal.fire({
        icon: "success",
        title: "Logged Out",
        timer: 1200,
        showConfirmButton: false,
        background: "#16213A",
        color: "#fff",
      });

      navigate("/admin/login");
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-screen w-64
          bg-[#16213A]
          border-r border-[#263353]
          z-50
          transform transition-transform duration-300
          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
          lg:translate-x-0
        `}
      >
        {/* Header */}
        <div className="h-20 flex items-center justify-between px-6 border-b border-[#263353]">

          <h1 className="text-xl font-bold text-[#3ECF8E]">
            Portfolio Admin
          </h1>

          <button
            className="lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={24} />
          </button>

        </div>

        {/* Menu */}
        <div className="mt-6 px-4 space-y-2">

          {menuItems.map((item) => (
            <NavLink
              key={item.title}
              to={item.path}
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                  isActive
                    ? "bg-[#3ECF8E] text-black"
                    : "text-gray-300 hover:bg-[#0B1220] hover:text-[#3ECF8E]"
                }`
              }
            >
              {item.icon}
              <span>{item.title}</span>
            </NavLink>
          ))}

          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500 hover:text-white transition-all duration-300 mt-10"
          >
            <LogOut size={20} />
            Logout
          </button>

        </div>
      </aside>
    </>
  );
}

export default Sidebar;