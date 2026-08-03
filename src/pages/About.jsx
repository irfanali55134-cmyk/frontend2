import { motion } from "framer-motion";
import { BriefcaseBusiness, Smartphone } from "lucide-react";

function About() {
  return (
    <section
      id="about"
      className="py-24 border-t border-[#263353] bg-[#0B1220]"
    >
      <div className="max-w-285 mx-auto px-5">

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
          >

            <span className="font-code text-[#3ECF8E] text-sm">

              // about

            </span>

            <h2 className="font-display text-4xl font-bold mt-4">

              A little about me

            </h2>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
          >

            <p className="text-[#9AA4BD] leading-8">

              I'm a Full Stack Developer passionate about creating
              modern, fast and scalable web applications using
              React, Node.js and MongoDB.

            </p>

            <p className="text-[#9AA4BD] leading-8 mt-5">

              I enjoy solving real-world problems, building clean
              user interfaces and writing maintainable code that
              performs well on every device.

            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">

              <div className="bg-[#16213A] border border-[#263353] rounded-xl p-6">

                <BriefcaseBusiness
                  size={28}
                  className="text-[#3ECF8E]"
                />

                <h3 className="font-display text-3xl font-bold mt-5">

                  10+

                </h3>

                <p className="text-[#9AA4BD] mt-2">

                  Projects Completed

                </p>

              </div>

              <div className="bg-[#16213A] border border-[#263353] rounded-xl p-6">

                <Smartphone
                  size={28}
                  className="text-[#3ECF8E]"
                />

                <h3 className="font-display text-3xl font-bold mt-5">

                  100%

                </h3>

                <p className="text-[#9AA4BD] mt-2">

                  Responsive Design

                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;