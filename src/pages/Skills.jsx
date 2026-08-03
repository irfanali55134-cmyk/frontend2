import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Wrench,
} from "lucide-react";

const skillData = [
  {
    title: "Frontend",
    icon: <Code2 size={20} />,
    skills: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Backend",
    icon: <Database size={20} />,
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
      "JWT",
      "Mongoose",
    ],
  },
  {
    title: "Tools",
    icon: <Wrench size={20} />,
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Figma",
      "Vercel",
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="py-24 border-t border-[#263353] bg-[#0B1220]"
    >
      <div className="max-w-[1140px] mx-auto px-5">

        {/* Heading */}

        <div className="mb-14">

          <span className="font-code text-[#3ECF8E] text-sm">

            // skills

          </span>

          <h2 className="font-display text-4xl font-bold mt-4">

            What I work with

          </h2>

        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 gap-7">

          {skillData.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .5, delay: index * .15 }}
              className="bg-[#16213A] border border-[#263353] rounded-2xl p-7 hover:border-[#3ECF8E] duration-300"
            >

              {/* Title */}

              <div className="flex items-center gap-3 mb-6">

                <div className="text-[#3ECF8E]">

                  {item.icon}

                </div>

                <h3 className="font-code text-[#FF6B5C]">

                  {item.title}

                </h3>

              </div>

              {/* Skills */}

              <div className="flex flex-wrap gap-3">

                {item.skills.map((skill, i) => (

                  <span
                    key={i}
                    className="font-body text-sm px-4 py-2 rounded-full border border-[#263353] text-[#9AA4BD] hover:bg-[#3ECF8E] hover:text-black hover:border-[#3ECF8E] duration-300 cursor-default"
                  >

                    {skill}

                  </span>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;