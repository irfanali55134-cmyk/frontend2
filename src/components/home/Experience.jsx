import { motion } from "framer-motion";

const experience = [
  {
    year: "2026 - Present",
    role: "Freelance Full Stack Developer",
    company: "EduGaon Technology",
    description:
      "Building responsive web applications, dashboards and business websites using React, Node.js and MongoDB.",
  },
  {
    year: "2025",
    role: "Frontend Developer",
    company: "EduGaon Technology",
    description:
      "Developed multiple responsive websites and dashboards while learning modern frontend technologies.",
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="py-24 bg-[#0B1220] border-t border-[#263353]"
    >
      <div className="max-w-[1140px] mx-auto px-5">

        <span className="font-code text-[#3ECF8E]">
          // experience
        </span>

        <h2 className="font-display text-4xl font-bold mt-4 mb-16">
          Where I've Worked
        </h2>

        <div className="relative border-l border-[#263353] ml-4">

          {experience.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity:0, x:-40 }}
              whileInView={{ opacity:1, x:0 }}
              viewport={{ once:true }}
              transition={{ delay:index*.2 }}
              className="relative pl-10 pb-14"
            >

              <div className="absolute -left-[10px] top-2 w-5 h-5 rounded-full bg-[#3ECF8E]" />

              <p className="font-code text-sm text-[#9AA4BD]">
                {item.year}
              </p>

              <h3 className="font-display text-2xl mt-2">
                {item.role}
              </h3>

              <h4 className="text-[#3ECF8E] mt-1">
                {item.company}
              </h4>

              <p className="text-[#9AA4BD] mt-4 leading-7">
                {item.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;