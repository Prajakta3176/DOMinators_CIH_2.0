import React from 'react';
import { FaTrash, FaTint, FaRoad, FaToilet, FaLightbulb, FaTree, FaHospital, FaCarCrash, FaBuilding, FaRegFileAlt } from 'react-icons/fa';

const departments = [
  {
    name: 'Garbage Collection',
    email: 'garbage.nmc@nagpur.gov.in',
    contact: '+91-712-2567035',
    icon: <FaTrash className="text-2xl text-[#2E728F]" />,
  },
  {
    name: 'Water Supply',
    email: 'water.nmc@nagpur.gov.in',
    contact: '+91-712-2567036',
    icon: <FaTint className="text-2xl text-[#2E728F]" />,
  },
  {
    name: 'Street Maintenance',
    email: 'streets.nmc@nagpur.gov.in',
    contact: '+91-712-2567037',
    icon: <FaRoad className="text-2xl text-[#2E728F]" />,
  },
  {
    name: 'Sewage & Drainage',
    email: 'sewage.nmc@nagpur.gov.in',
    contact: '+91-712-2567038',
    icon: <FaToilet className="text-2xl text-[#2E728F]" />,
  },
  {
    name: 'Street Lighting',
    email: 'lighting.nmc@nagpur.gov.in',
    contact: '+91-712-2567039',
    icon: <FaLightbulb className="text-2xl text-[#2E728F]" />,
  },
  {
    name: 'Parks & Gardens',
    email: 'parks.nmc@nagpur.gov.in',
    contact: '+91-712-2567040',
    icon: <FaTree className="text-2xl text-[#2E728F]" />,
  },
  {
    name: 'Public Health',
    email: 'health.nmc@nagpur.gov.in',
    contact: '+91-712-2567041',
    icon: <FaHospital className="text-2xl text-[#2E728F]" />,
  },
  {
    name: 'Roads & Traffic',
    email: 'traffic.nmc@nagpur.gov.in',
    contact: '+91-712-2567042',
    icon: <FaCarCrash className="text-2xl text-[#2E728F]" />,
  },
  {
    name: 'Building Permissions',
    email: 'buildings.nmc@nagpur.gov.in',
    contact: '+91-712-2567043',
    icon: <FaBuilding className="text-2xl text-[#2E728F]" />,
  },
  {
    name: 'Birth & Death Registration',
    email: 'registration.nmc@nagpur.gov.in',
    contact: '+91-712-2567044',
    icon: <FaRegFileAlt className="text-2xl text-[#2E728F]" />,
  },
];

function Departments() {
  return (
    <div className="pt-28 border-[#8AC8E9] border-1 min-h-[85vh] sm:min-h-screen bg-[linear-gradient(to_bottom,_#06ACF180,_#FFFFFF82)] px-10 flex items-center justify-center">
      <div className="bg-white w-[90vw] max-w-4xl rounded-2xl p-8 flex flex-col items-center shadow-md">
        <h2 className="text-2xl font-bold text-[#123C74] mb-6 text-center">Nagpur Civic Departments</h2>
        <div className="overflow-x-auto w-full">
          <table className="min-w-full border border-[#8AC8E9] rounded-lg overflow-hidden">
            <thead className="bg-[#2E728F] text-white">
              <tr>
                <th className="py-3 px-4 text-center">Logo</th>
                <th className="py-3 px-4 text-left">Department</th>
                <th className="py-3 px-4 text-left">Email</th>
                <th className="py-3 px-4 text-left">Contact</th>
              </tr>
            </thead>
            <tbody>
              {departments.map((dept, idx) => (
                <tr key={dept.name} className={idx % 2 === 0 ? 'bg-[#F3FAFC]' : 'bg-white'}>
                  <td className="py-2 px-4 text-center">{dept.icon}</td>
                  <td className="py-2 px-4 font-semibold text-[#123C74]">{dept.name}</td>
                  <td className="py-2 px-4 text-blue-700 underline">{dept.email}</td>
                  <td className="py-2 px-4">{dept.contact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Departments;