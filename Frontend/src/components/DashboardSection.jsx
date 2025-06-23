import { motion } from "framer-motion";
import MapComponent from "./MapComponent";
import PieChartComponent from "./PieChartComponent";

const stats = [
  { title: "Total Reports", value: 1423, color: "bg-blue-100 text-blue-800" },
  { title: "Resolved", value: 1034, color: "bg-green-100 text-green-800" },
  { title: "Pending", value: 389, color: "bg-yellow-100 text-yellow-800" },
];

const DashboardSection = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-10" id="dashboard">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4"
        >
          📊 Transparency Dashboard
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-gray-600 mb-10 max-w-2xl mx-auto"
        >
          Real-time tracking of citizen-reported issues and departmental responses.
        </motion.p>

        {/* Stats Cards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
              className={`rounded-xl p-6 shadow-md ${stat.color}`}
            >
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-sm mt-2">{stat.title}</div>
            </motion.div>
          ))}
        </div>

        {/* Graph + Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 gap-8 items-center justify-center max-w-5xl mx-auto"
        >
          <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center text-gray-500">
            {/* 📈 Graph Placeholder (e.g., Bar or Pie Chart) */}
            <PieChartComponent/>
          </div>

          <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center text-gray-500 overflow-hidden">
            {/* 🗺️ Map Preview (e.g., with markers) */}
            <MapComponent/>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-12"
        >
          <a
            href="/statistic-dashboard"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md transition"
          >
            View Full Dashboard →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardSection;
