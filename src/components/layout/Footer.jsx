import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-[#263353] py-8 bg-[#0B1220]">

      <div className="max-w-285 mx-auto px-5 flex flex-col md:flex-row justify-between items-center gap-5">

        <p className="font-code text-sm text-[#9AA4BD]">
          © 2026 Irfan Ali. All Rights Reserved.
        </p>

        <div className="flex gap-5 text-2xl">

          <a href="#">
            <FaGithub />
          </a>

          <a href="#">
            <FaLinkedin />
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;