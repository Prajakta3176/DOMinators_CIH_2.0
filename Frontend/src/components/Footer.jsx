import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#2E728F] text-white py-10 mt-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* CivicEye Logo + Brief */}
        <div>
          <h2 className="text-2xl font-bold mb-3">CivicEye</h2>
          <p className="text-sm text-gray-300">
            Empowering citizens and authorities through transparency and tech-enabled civic engagement.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Dashboard</a></li>
            <li><a href="#" className="hover:text-white">Report Issue</a></li>
            <li><a href="#" className="hover:text-white">Past Work</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold mb-3">Government Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="https://www.india.gov.in/" target="_blank" className="hover:text-white">India.gov.in</a></li>
            <li><a href="https://pgportal.gov.in/" target="_blank" className="hover:text-white">CPGRAMS</a></li>
            <li><a href="https://rural.nic.in/" target="_blank" className="hover:text-white">Rural Development</a></li>
            <li><a href="https://uidai.gov.in/" target="_blank" className="hover:text-white">UIDAI (Aadhaar)</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3">Contact Us</h3>
          <p className="text-sm text-gray-300">
            Email: civic.eye@gmail.com<br />
            Phone: +91 98765 43210<br />
            Address: CivicTech HQ, New Delhi
          </p>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} CivicEye. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
