import {
  Bell,
  Search,
  UserCircle2,
  Menu,
} from "lucide-react";

function Topbar({ setSidebarOpen }) {
  const admin = JSON.parse(localStorage.getItem("admin"));

  return (
    <header className="fixed top-0 right-0 left-0 lg:left-64 h-20 bg-[#16213A] border-b border-[#263353] flex items-center justify-between px-4 md:px-8 sticky top-0 z-30">

      <div className="flex items-center gap-4">

        <button
          className="lg:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu size={28} />
        </button>

        <div className="relative hidden md:block w-[280px] lg:w-[350px]">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-[#0B1220] border border-[#263353] rounded-xl py-3 pl-12 pr-4 outline-none text-white"
          />

        </div>

      </div>

      <div className="flex items-center gap-4 md:gap-6">

        <button className="relative">

          <Bell
            className="text-gray-300 hover:text-[#3ECF8E] duration-300"
            size={24}
          />

          <span className="absolute -top-2 -right-2 bg-red-500 text-xs w-5 h-5 rounded-full flex items-center justify-center">
            0
          </span>

        </button>

        <div className="flex items-center gap-3">

         <img
  src={
    admin?.image
      ? admin.image
      : "https://ui-avatars.com/api/?name=Admin"
  }
  alt="Admin"
  className="w-10 h-10 rounded-full object-cover border-2 border-[#3ECF8E]"
/>

          <div className="hidden sm:block">

            <h2 className="font-semibold">
              {admin?.name}
            </h2>

            <p className="text-sm text-gray-400">
              {admin?.email}
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Topbar;