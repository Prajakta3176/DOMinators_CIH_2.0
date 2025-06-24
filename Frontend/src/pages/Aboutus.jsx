function AboutUs() {
  return (
    <section className="w-full h-screen bg-[linear-gradient(to_bottom,_#06ACF180,_#FFFFFF82)] flex items-center justify-center p-0 m-0">
      <div className="bg-white w-full max-w-3xl rounded-2xl p-8 flex flex-col items-center shadow-md">
        <h2 className="text-3xl font-bold text-[#123C74] mb-4 text-center">About CivicEye</h2>
        <p className="text-lg text-[#1D506E] mb-6 text-center font-semibold">
          Citizen-Goverment Feedback Portal
        </p>
        <p className="text-gray-700 text-center mb-6">
          CivicEye is a citizen-government feedback portal designed to bridge the gap between the people of Maharashtra and their civic authorities. Our mission is to make governance more transparent, responsive, and citizen-centric by providing a seamless platform for reporting issues, tracking resolutions, and fostering community engagement.
        </p>
        <ul className="list-disc text-left text-[#2E728F] pl-6 space-y-2">
          <li>Report civic issues like Sanitized area, water supply, Proper Streetlights,  and more in just a few clicks.</li>
          <li>Track the status of your complaints and receive timely updates.</li>
          <li>Connect directly with relevant departments for faster resolutions.</li>
          <li>Contribute to a cleaner, safer, and smarter Nagpur.</li>
        </ul>
      </div>
    </section>
  );
}

export default AboutUs;