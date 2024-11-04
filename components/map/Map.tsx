"use client";

import React, { useEffect, useState } from "react";
import { sections } from "@/data/sections"; // Import sections data
import { Section } from "@/types";

export default function Map() {
  const [loading, setLoading] = useState(true);

  // Simulate loading delay for visual effect
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500); // Adjust delay as needed
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <div>Loading map...</div>;

  return (
    <div className="p-6 bg-gray-50">
      <h2 className="text-2xl font-bold text-center mb-6">Explore the Bible Map</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sections.map((section: Section) => (
          <div key={section.id} className="bg-white p-4 shadow rounded-lg border-l-4 border-blue-500">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">{section.title}</h3>
            <ul>
              {section.markers.map((marker) => (
                <li key={marker.id} className="p-3 mb-2 rounded-md bg-blue-50 hover:bg-blue-100">
                  <div className="flex justify-between items-center">
                    <p className="text-lg font-medium">{marker.name}</p>
                    {marker.completed && (
                      <span className="text-green-600 font-semibold text-sm">Completed</span>
                    )}
                  </div>
                  <p className="text-gray-600">{marker.description}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
