import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Report an Issue',
    description: 'Citizens submit local problems with photos, description, and location.',
    icon: '📝',
  },
  {
    title: 'Auto Route to Department',
    description: 'System assigns the report to the correct government department.',
    icon: '🏢',
  },
  {
    title: 'Track Status Live',
    description: 'Users can track issue status via map & dashboard with color indicators.',
    icon: '📍',
  },
  {
    title: 'Resolution & Feedback',
    description: 'Once resolved, users are notified and can provide feedback.',
    icon: '✅',
  },
];

const HowItWorks = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-12 text-center">📌 How CivicEye Works</h2>
      <div className="relative border-l-4 border-blue-600 pl-6 space-y-12">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            <div className="absolute -left-9 top-1 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-xl shadow-md">
              {step.icon}
            </div>
            <h3 className="text-xl font-semibold">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
