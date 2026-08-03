import { Menu, X, LockKeyhole } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const navItems = [
  { title: "About", id: "about" },
  { title: "Skills", id: "skills" },
  { title: "Projects", id: "projects" },
  { title: "Experience", id: "experience" },
  { title: "Contact", id: "contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 20);

      const sections = navItems.map((item) =>
        document.getElementById(item.id)
      );

      sections.forEach((section) => {
        if (!section) return;

        const top = section.offsetTop - 120;
        const bottom = top + section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scroll
          ? "bg-[#0B1220]/80 backdrop-blur-xl border-b border-[#263353]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1140px] mx-auto h-[72px] px-5 flex justify-between items-center">

        <a
          href="#home"
          className="font-code text-[#3ECF8E] text-[16px]"
        >
          irfan
          <span className="text-[#9AA4BD]">.dev</span>
        </a>

        {/* Desktop */}

        <nav className="hidden md:flex gap-8">

          {navItems.map((item) => (

            <a
              key={item.id}
              href={`#${item.id}`}
              className={`font-code text-[13px] relative duration-300

              ${
                active === item.id
                  ? "text-white"
                  : "text-[#9AA4BD] hover:text-white"
              }`}
            >

              {item.title}

              {active === item.id && (

                <span className="absolute left-0 -bottom-2 h-[2px] w-full bg-[#3ECF8E]" />

              )}

            </a>

          ))}

        </nav>

        <div className="hidden md:flex items-center gap-3">

          <a
            href="#contact"
            className="border border-[#2A9E6C] px-5 py-2 rounded-lg text-[#3ECF8E] font-code hover:bg-[#3ECF8E] hover:text-black duration-300"
          >
            Hire Me
          </a>

          <Link
            to="/admin/login"
            className="flex items-center gap-2 border border-[#263353] px-4 py-2 rounded-lg text-[#9AA4BD] font-code hover:border-[#3ECF8E] hover:text-[#3ECF8E] duration-300"
          >
            <LockKeyhole size={15} />
            Login
          </Link>

        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>

      </div>

      {open && (

        <div className="md:hidden bg-[#111A2C] border-t border-[#263353]">

          {navItems.map((item) => (

            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className="block px-6 py-4 font-code text-[#9AA4BD]"
            >
              {item.title}
            </a>

          ))}

          <Link
            to="/admin/login"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 px-6 py-4 font-code text-[#3ECF8E] border-t border-[#263353]"
          >
            <LockKeyhole size={15} />
            Admin Login
          </Link>

        </div>

      )}

    </header>
  );
}

export default Navbar;