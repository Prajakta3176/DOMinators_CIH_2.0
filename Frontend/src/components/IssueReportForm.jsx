import React, { useState } from "react";
import exifr from "exifr";
import { Input } from "./ui/input.jsx";
import { Button } from "./ui/button.jsx";
import { Textarea } from "./ui/textarea.jsx";
import { Label } from "./ui/label.jsx";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert.jsx";
import { CheckCircle2, XCircle } from "lucide-react";
import axios from "axios";

export default function IssueForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "Road",
    image: null,
    lat: null,
    lng: null,
    city: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
    setLoading(true);
    setSuccess(false);
    setError("");

    try {
      const gps = await exifr.gps(file);
      let lat, lng;

      if (gps?.latitude && gps?.longitude) {
        lat = gps.latitude;
        lng = gps.longitude;
      } else {
        const pos = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });
        lat = pos.coords.latitude;
        lng = pos.coords.longitude;
      }

      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
      );
      const data = await res.json();
      const city = data.address.city || data.address.town || data.address.village || "";

      setFormData({ ...formData, image: file, lat, lng, city });
    } catch (err) {
      console.error("Location error:", err);
      setError("Failed to detect location. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const headers = {
    id : localStorage.getItem("id"),
    authorization : `Bearer ${localStorage.getItem("token")}`
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);
    setError("");

    try {
      const body = new FormData();
      body.append("title", formData.title);
      body.append("description", formData.description);
      body.append("category", formData.category);
      body.append("image", formData.image);
      body.append("lat", formData.lat);
      body.append("lng", formData.lng);
      body.append("city", formData.city);

      const response = await axios.post("http://localhost:8080/api/user/citizen/addComplaint", body , {headers});

      if (!response.ok) throw new Error("Failed to submit complaint");

      setSuccess(true);
      setFormData({
        title: "",
        description: "",
        category: "Road",
        image: null,
        lat: null,
        lng: null,
        city: "",
      });
    } catch (err) {
      setError(err.message || "Something went wrong");
    }
  };

  return (
    <section className=" flex justify-center items-center flex-col h-full w-full bg-[linear-gradient(to_bottom,#06ACF180,#FFFFFF82)]">
      <div className="space-y-6 p-6 max-w-xl mx-auto bg-[#fefeff] rounded-2xl w-[80vw] shadow-lg">
      {success && (
        <Alert variant="success" className="bg-green-100 text-green-800 border-green-300">
          <CheckCircle2 className="h-5 w-5" />
          <AlertTitle>Complaint submitted!</AlertTitle>
          <AlertDescription>Thank you for making your city better.</AlertDescription>
        </Alert>
      )}
      {error && (
        <Alert variant="destructive" className="bg-red-100 text-red-800 border-red-300">
          <XCircle className="h-5 w-5" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <h1 className="text-3xl font-bold text-center mb-5">Report Issue</h1>
        <div>
          <Label htmlFor="title" className="text-blue-900 font-medium">Title</Label>
          <Input id="title" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} required className="bg-white border border-blue-300" />
        </div>

        <div>
          <Label htmlFor="description" className="text-blue-900 font-medium">Description</Label>
          <Textarea id="description" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} required className="bg-white border border-blue-300" />
        </div>

        <div>
          <Label htmlFor="category" className="text-blue-900 font-medium">Category</Label>
          <select
            id="category"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="w-full border border-blue-300 bg-white rounded-md p-2"
          >
            <option>Road</option>
            <option>Drainage</option>
            <option>Potholes</option>
            <option>Electricity</option>
            <option>Others</option>
          </select>
        </div>

        <div>
          <Label htmlFor="image" className="text-blue-900 font-medium">Upload Image</Label>
          <Input id="image" type="file" accept="image/*" onChange={handleImageUpload} required className="bg-white border border-blue-300" />
          {loading && <p className="text-sm text-blue-500 mt-1">Detecting location...</p>}
        </div>

        <Button type="submit" className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-lg">Submit Complaint</Button>
      </form>

      <div className="p-4 bg-white border border-blue-200 rounded-xl shadow mt-6">
        <h2 className="text-lg font-semibold text-blue-800 mb-2">Detected Location</h2>
        {formData.lat && formData.lng ? (
          <>
            <p className="text-blue-900"><strong>City:</strong> {formData.city || "Unknown"}</p>
            <p className="text-blue-900"><strong>Latitude:</strong> {formData.lat.toFixed(5)}</p>
            <p className="text-blue-900"><strong>Longitude:</strong> {formData.lng.toFixed(5)}</p>
          </>
        ) : (
          <p className="text-sm text-blue-500">Location data will appear here once detected.</p>
        )}
      </div>
    </div>

    </section>  );
}