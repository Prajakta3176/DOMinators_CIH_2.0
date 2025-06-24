import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MiniNavBar from "./MiniNavBar";

const HeroSection = () => {
  const role = localStorage.getItem("role");
  return (
    <section className="pt-28 bg-[linear-gradient(to_bottom,_#06ACF180,_#FFFFFF82)] text-white">
        <MiniNavBar />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 py-10">
        {/* Left: Text */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-4xl font-bold mb-4 leading-tight text-[#1D506E] ">
            Empowering Citizens, Improving Governance
          </h2>
          <p className="mb-6 text-lg text-[#000000]">
            Use CivicEye to report issues like potholes, streetlight outages,
            and more. Help build a transparent, responsive city.
          </p>
          <div className="space-x-4 flex flex-col sm:flex-row gap-3 justify-center sm:justify-start">
            <a
              href="#report"
              className="bg-[#FAFDFF] border-[#8AC8E9] text-[#123C74] px-6 py-2 rounded-md font-semibold w-[200px] text-center hover:bg-[#003049] hover:text-[#FAFDFF] hover:border-[#8AC8E9] hover:border-2"
            >
              Report Now
            </a>
            <a
              href="/statistic-dashboard"
              className="border border-[#8AC8E9] bg-[#2E728F] text-[#FFFFFF] px-6 py-2 6 rounded-md font-semibold w-[200px] text-center  hover:bg-[#003049] hover:text-[#FAFDFF] hover:border-[#8AC8E9] hover:border-2 "
            >
              View Dashboard
            </a>
          </div>
        </div>

        {/* Right: Carousel */}
        <div className="w-full md:w-1/2">
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            showIndicators={true}
            interval={2000}
            className="rounded-lg shadow-lg"
          >
            <div>
              <img
                src="https://media.istockphoto.com/id/916291672/photo/indian-women-cleaning-road-in-the-street.jpg?s=612x612&w=0&k=20&c=qWEwLDOVEjpQsZz5m3R6jviuJz6Z8FB7QXR3av2K9vc="
                alt="Ensure Clean Street and Area"
              />
              <p className="legend">Ensure Clean Street and Area</p>
            </div>
            <div>
              <img
                src="https://media.istockphoto.com/id/544978134/photo/road-repair-in-madurai.jpg?s=612x612&w=0&k=20&c=q6agQfpkdjgpcnzV5FjvAOstekw7AeAp447Z6_dBqR4="
                alt="Potehole Reparing"
              />
              <p className="legend">Reparing the Potholes</p>
            </div>
            
            <div>
              <img
                src="https://media.istockphoto.com/id/1221392085/photo/coronavirus-outbreak-in-india.jpg?s=612x612&w=0&k=20&c=HmAv8a3KjpXnT15gYWIdQabknoK9oo_7Ge-fbEA1d4s="
                alt="Cleaning Sewage Line"
              />
              <p className="legend">Cleaning Sewage Line</p>
            </div>
            <div>
              <img
                src="https://media.istockphoto.com/id/916291672/photo/indian-women-cleaning-road-in-the-street.jpg?s=612x612&w=0&k=20&c=qWEwLDOVEjpQsZz5m3R6jviuJz6Z8FB7QXR3av2K9vc="
                alt="Ensure Clean Street and Areas"
              />
              <p className="legend">Ensure Clean Street and Area</p>
            </div>
            <div>
              <img
                src="https://c.ndtvimg.com/2024-03/fedjljf8_water-shortage-generic-water-tanker-generic-ani_625x300_22_March_24.jpeg?im=FeatureCrop,algorithm=dnn,width=260,height=195"
                alt="Streetlights"
              />
              <p className="legend">Fix streetlight outages easily</p>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
