import { motion } from "framer-motion";

const pastWorkData = [
  {
    location: "Kurla East, Mumbai",
    issue: "Open pothole near railway station",
    date: "Reported: Apr 2 | Resolved: Apr 6",
    status: "Resolved",
    beforeImg: "/images/pothole-before.jpg",
    afterImg: "/images/pothole-after.jpg"
  },
  {
    location: "Sector 22, Noida",
    issue: "Non-functional streetlight",
    date: "Reported: Mar 12 | Escalated to Electrical Dept",
    status: "Escalated",
    beforeImg: "/images/streetlight-before.jpg",
    afterImg: "/images/streetlight-after.jpg"
  },
  {
    location: "Kurla East, Mumbai",
    issue: "Open pothole near railway station",
    date: "Reported: Apr 2 | Resolved: Apr 6",
    status: "Resolved",
    beforeImg: "/images/pothole-before.jpg",
    afterImg: "/images/pothole-after.jpg"
  },
  {
    location: "Sector 22, Noida",
    issue: "Non-functional streetlight",
    date: "Reported: Mar 12 | Escalated to Electrical Dept",
    status: "Escalated",
    beforeImg: "/images/streetlight-before.jpg",
    afterImg: "/images/streetlight-after.jpg"
  },
];

const PastWork = () => {
  return (
    <section className="py-16 px-6 bg-gray-100 text-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">🛠️ Our Past Work</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {pastWorkData.map((item, index) => (
            <motion.div  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="bg-white p-5 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-1">{item.location}</h3>
              <p className="text-sm text-gray-600 mb-2">{item.date}</p>
              <p className="mb-4">{item.issue}</p>
              
              <div className="flex gap-3">
                <img src={item.beforeImg} alt="Before" className="w-1/2 h-40 object-cover rounded-md" />
                <img src={item.afterImg} alt="After" className="w-1/2 h-40 object-cover rounded-md" />
              </div>

              <span className={`inline-block mt-4 px-3 py-1 text-xs rounded-full ${
                item.status === "Resolved" ? "bg-green-200 text-green-700" : "bg-yellow-200 text-yellow-700"
              }`}>
                {item.status}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastWork;
