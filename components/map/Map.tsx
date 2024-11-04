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
      <div className="space-y-8">
        {sections.map((section: Section) => (
          <div key={section.id}>
            <h3 className="text-xl font-bold text-blue-700 mb-2">{section.title}</h3>
            <ul className="space-y-2">
              {section.markers.map((marker) => (
                <li key={marker.id} className="flex items-start">
                  <div className="flex flex-col items-start pl-4">
                    <span className="w-3 h-3 rounded-full bg-blue-500 mr-2 mt-1"></span>
                    <span className="h-6 border-l-2 border-blue-500 ml-1"></span>
                  </div>
                  <div className="ml-2 p-3 rounded-md bg-blue-50 hover:bg-blue-100 w-full">
                    <div className="flex justify-between items-center">
                      <p className="text-lg font-medium">{marker.name}</p>
                      {marker.completed && (
                        <span className="text-green-600 font-semibold text-sm">Completed</span>
                      )}
                    </div>
                    <p className="text-gray-600">{marker.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
