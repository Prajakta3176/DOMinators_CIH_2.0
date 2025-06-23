import React, { useEffect, useRef, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// 🟢 Original: Issue Icons
const greenIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/190/190411.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const redIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/484/484662.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

// 🟢 Dummy Issue Data
const issues = [
  {
    id: 1,
    lat: 22.5726,
    lng: 88.3639,
    location: "Kolkata",
    description: "Broken road",
    status: "Unresolved",
  },
  {
    id: 2,
    lat: 19.076,
    lng: 72.8777,
    location: "Mumbai",
    description: "Water leakage",
    status: "Resolved",
  },
];

// ✅✅✅ ADDED: FlyToLocation helper to move map on selection
const FlyToLocation = ({ coords }) => {
  const map = useMap();
  useEffect(() => {
    if (coords) {
      map.flyTo(coords, 14);
    }
  }, [coords, map]);
  return null;
};

const MapComponent = () => {
  // ✅✅✅ ADDED: States for search bar and suggestions
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedCoords, setSelectedCoords] = useState(null);
  const timeoutRef = useRef(null);

  // ✅✅✅ ADDED: Handle typing + search query
  const handleSearch = async (value) => {
    setSearchTerm(value);
    if (value.length < 3) {
      setSuggestions([]);
      return;
    }

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(async () => {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${value}`
      );
      const data = await res.json();
      setSuggestions(data);
    }, 300);
  };

  // ✅✅✅ ADDED: Handle location selection
  const handleSelect = (place) => {
    setSearchTerm(place.display_name);
    setSuggestions([]);
    setSelectedCoords([parseFloat(place.lat), parseFloat(place.lon)]);
  };

  return (
    <div className="w-full">
      {/* ✅✅✅ ADDED: Search bar with suggestions */}
      <div className="mb-4 relative w-full max-w-xl mx-auto">
        <input
          type="text"
          placeholder="Search location..."
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none"
        />
        {suggestions.length > 0 && (
          <ul className="absolute z-10 bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-y-auto w-full">
            {suggestions.map((place, idx) => (
              <li
                key={idx}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSelect(place)}
              >
                {place.display_name}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* 🌍 Original Map Code with Markers */}
      <div className="h-[500px] w-full rounded-lg shadow-md">
        <MapContainer center={[22.9734, 78.6569]} zoom={5} className="h-full w-full">
          <TileLayer
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {issues.map((issue) => (
            <Marker
              key={issue.id}
              position={[issue.lat, issue.lng]}
              icon={issue.status === "Resolved" ? greenIcon : redIcon}
            >
              <Popup>
                <strong>{issue.location}</strong><br />
                {issue.description}<br />
                <span
                  className={`text-sm font-semibold ${
                    issue.status === "Resolved"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {issue.status}
                </span>
              </Popup>
            </Marker>
          ))}

          {/* ✅✅✅ ADDED: Fly to searched location */}
          {selectedCoords && <FlyToLocation coords={selectedCoords} />}
        </MapContainer>
      </div>
    </div>
  );
};

export default MapComponent;
