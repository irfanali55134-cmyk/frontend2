import { motion } from "framer-motion";

function DashboardCard({ title, value, icon, color }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-[#16213A] border border-[#263353] rounded-2xl p-5 md:p-6 shadow-lg"
    >
      <div className="flex justify-between items-center">

        <div>

          <p className="text-gray-400 text-sm">
            {title}
          </p>

          <h2 className="text-2xl md:text-4xl font-bold mt-2 break-words">
            {value}
          </h2>

        </div>

        <div
          className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex justify-center items-center"
          style={{ backgroundColor: color }}
        >
          {icon}
        </div>

      </div>

    </motion.div>
  );
}

export default DashboardCard;