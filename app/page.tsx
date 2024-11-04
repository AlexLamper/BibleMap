"use client";

import React from "react";
import Hero from "@/components/home/Hero";
import Map from "@/components/map/Map";
import DailyVerse from "@/components/daily/DailyVerse";

export default function HomePage() {

  return (
    <main className="p-4">
      <Hero />
      <DailyVerse />
      <Map />
    </main>
  );
};
