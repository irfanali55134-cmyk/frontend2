import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const projects = [
  {
    title: "Education Management System",
    image: "/ems.png",
    description:
      "A complete MERN based Education Management System with Admin Dashboard, JWT Authentication and Student Management.",
    tech: ["React", "Node.js", "MongoDB"],
    live: "#",
    github: "#",
  },
  {
    title: "Ws Cube Tech Mock UI",
    image: "/wscube.png",
    description:
      "Responsive Wscube tech using HTML CSS javascript Bootstarp",
    tech: ["HTML", "CSS", "Javascript"],
    live: "https://irfanmockwscube.netlify.app/",
    github: "#",
  },
  {
    title: "Portfolio Website",
    image: "/portfolio.png",
    description:
      "Modern developer portfolio with smooth animations, responsive layout and clean UI.",
    tech: ["React", "Tailwind", "Vite"],
    live: "#",
    github: "#",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="py-24 border-t border-[#263353] bg-[#0B1220]"
    >
      <div className="max-w-285 mx-auto px-5">

        <div className="mb-14">
          <span className="font-code text-[#3ECF8E] text-sm">
            // projects
          </span>

          <h2 className="font-display text-4xl font-bold mt-4">
            Selected Work
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group bg-[#16213A] rounded-2xl border border-[#263353] overflow-hidden hover:border-[#3ECF8E] duration-300"
            >

              {/* Image */}

              <div className="overflow-hidden h-52">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 duration-500"
                />

              </div>

              {/* Body */}

              <div className="p-6">

                <h3 className="font-display text-2xl mb-3">

                  {project.title}

                </h3>

                <p className="text-[#9AA4BD] text-sm leading-7">

                  {project.description}

                </p>

                {/* Tags */}

                <div className="flex flex-wrap gap-2 mt-5">

                  {project.tech.map((item, i) => (

                    <span
                      key={i}
                      className="font-code text-xs border border-[#263353] rounded-full px-3 py-1 text-[#3ECF8E]"
                    >

                      {item}

                    </span>

                  ))}

                </div>

                {/* Buttons */}

                <div className="flex gap-3 mt-7">

                  <a
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-2 bg-[#3ECF8E] text-black px-4 py-2 rounded-lg font-semibold hover:bg-[#2A9E6C] duration-300"
                  >

                    Live Demo

                    <ArrowUpRight size={17} />

                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 border border-[#263353] px-4 py-2 rounded-lg hover:border-[#3ECF8E] duration-300"
                  >

                    <FaGithub size={18} />
                    GitHub

                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;