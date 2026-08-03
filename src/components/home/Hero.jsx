import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  BadgeCheck,
  Code2,
    Braces,
  Database,
  Wind,
  Server,

} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#0B1220] pt-28 pb-24"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <div className="absolute -top-40 -left-40 h-125 w-125 rounded-full bg-[#3ECF8E]/10 blur-[140px]" />

        <div className="absolute right-0 bottom-0 h-105 w-105 rounded-full bg-cyan-500/10 blur-[120px]" />

      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-[1.1fr_.9fr] gap-20 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
          >

            {/* Badge */}

            <div className="inline-flex items-center gap-2 rounded-full border border-[#2A9E6C] bg-[#16213A]/60 backdrop-blur-md px-5 py-2">

              <BadgeCheck
                size={15}
                className="text-[#3ECF8E]"
              />

              <span className="font-code text-[#3ECF8E] text-sm">

                Available for Full Time

              </span>

            </div>

            {/* Heading */}

            <h1
              className="
              mt-8
              font-display
              text-5xl
              md:text-6xl
              xl:text-7xl
              font-bold
              leading-[1.05]
              tracking-[-2px]
              "
            >

              Building

              <br />

              <span className="text-[#3ECF8E]">

                modern

              </span>

              {" "}web experiences

              <br />

              for the future.

            </h1>

            {/* Role */}

            <div className="mt-7 flex items-center gap-3">

              <Code2
                size={18}
                className="text-[#FF6B5C]"
              />

              <span className="font-code text-[#9AA4BD]">

                Full Stack Developer • React • Node.js • MongoDB

              </span>

            </div>

            {/* Description */}

            <p
              className="
              mt-8
              max-w-xl
              text-lg
              leading-9
              text-[#9AA4BD]
              "
            >

              I build scalable, responsive and high-performance
              web applications using React, Node.js and MongoDB.
              My focus is clean architecture, smooth user
              experience and pixel-perfect interfaces.

            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-5">

              <button
                className="
                flex items-center gap-2
                rounded-xl
                bg-[#3ECF8E]
                px-8 py-4
                font-semibold
                text-black
                duration-300
                hover:scale-105
                hover:bg-[#2FAF75]
                "
              >

                Hire Me

                <ArrowRight size={18} />

              </button>

              <button
                className="
                flex items-center gap-2
                rounded-xl
                border border-[#263353]
                px-8 py-4
                duration-300
                hover:border-[#3ECF8E]
                "
              >

                <Download size={18} />

                Resume

              </button>

            </div>

            {/* Social */}

            <div className="mt-10 flex gap-4">

              <a
                href="#"
                className="
                h-12 w-12
                rounded-xl
                border border-[#263353]
                bg-[#16213A]
                flex items-center justify-center
                hover:border-[#3ECF8E]
                hover:-translate-y-1
                duration-300
                "
              >

              <FaGithub size={20} />
              </a>

              <a
                href="#"
                className="
                h-12 w-12
                rounded-xl
                border border-[#263353]
                bg-[#16213A]
                flex items-center justify-center
                hover:border-[#3ECF8E]
                hover:-translate-y-1
                duration-300
                "
              >

                <FaLinkedin size={20} />

              </a>

            </div>

          </motion.div>

        {/* RIGHT */}

<motion.div
  initial={{ opacity: 0, x: 60 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="flex justify-center lg:justify-end lg:-translate-x-12 lg:-translate-y-8"
>
<div className="relative w-85 h-112.5 lg:-ml-12 lg:-mt-10">  
    {/* Animated Glow */}

    <div
      className="
      absolute
      -inset-5
      rounded-[40px]
      bg-linear-to-r
      from-[#3ECF8E]
      via-cyan-400
      to-[#3ECF8E]
      opacity-30
      blur-3xl
      animate-pulse
      "
    />

    {/* Animated Border */}

    <div
      className="
      absolute
      inset-0
      rounded-[34px]
      bg-linear-to-br
      from-[#3ECF8E]
      via-[#1B2844]
      to-cyan-400
      p-0.5
      "
    >

      <div
        className="
        h-full
        w-full
        rounded-4xl
        overflow-hidden
        bg-[#16213A]
        border
        border-[#263353]
        "
      >

        <img
          src="/irrrfan.png"
          alt="Irfan Ali"
          className="
          h-full
          w-full
          object-cover
          transition-transform
          duration-500
          hover:scale-105
          "
        />

      </div>

    </div>

    {/* React */}

   
<motion.div
  animate={{ y: [-8, 8, -8] }}
  transition={{ repeat: Infinity, duration: 3 }}
  className="absolute -left-12 top-8 flex items-center gap-2 rounded-xl border border-[#263353] bg-[#16213A] px-4 py-3 shadow-xl"
>
  <Braces size={18} className="text-sky-400" />
  <span className="font-code text-sm">React</span>
</motion.div>

{/* MongoDB */}

<motion.div
  animate={{ y: [8, -8, 8] }}
  transition={{ repeat: Infinity, duration: 4 }}
  className="absolute -right-12 top-1/2 flex items-center gap-2 rounded-xl border border-[#263353] bg-[#16213A] px-4 py-3 shadow-xl"
>
  <Database size={18} className="text-[#3ECF8E]" />
  <span className="font-code text-sm">MongoDB</span>
</motion.div>

{/* Tailwind */}

<motion.div
  animate={{ y: [-10, 10, -10] }}
  transition={{ repeat: Infinity, duration: 3.5 }}
  className="absolute right-0 -bottom-8 flex items-center gap-2 rounded-xl border border-[#263353] bg-[#16213A] px-4 py-3 shadow-xl"
>
  <Wind size={18} className="text-cyan-400" />
  <span className="font-code text-sm">Tailwind CSS</span>
</motion.div>

{/* Node */}

<motion.div
  animate={{ y: [8, -8, 8] }}
  transition={{ repeat: Infinity, duration: 3.8 }}
  className="absolute left-10 -bottom-8 flex items-center gap-2 rounded-xl border border-[#263353] bg-[#16213A] px-4 py-3 shadow-xl"
>
  <Server size={18} className="text-green-400" />
  <span className="font-code text-sm">Node.js</span>
</motion.div>

  </div>
</motion.div>
        </div>

      </div>

    </section>
  );
}

export default Hero;