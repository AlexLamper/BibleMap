"use client";

import React, { useEffect, useState } from "react";

interface VerseData {
  book: string;
  chapter: number;
  verse: number;
  text: string;
}

export default function DailyVerse() {
  const [verseData, setVerseData] = useState<VerseData | null>(null);
  const [loading, setLoading] = useState(true);

  // Helper function to generate a random number based on the current date
  const generateDailySeed = () => {
    const date = new Date();
    return date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate();
  };

  const fetchDailyVerse = async () => {
    setLoading(true);

    // Daily "seeded" selection of book, chapter, and verse
    const books = ["genesis", "exodus", "psalms", "matthew", "john"];
    const book = books[generateDailySeed() % books.length];
    const chapter = (generateDailySeed() % 50) + 1; // Random chapter (1-50 as an example)
    const verse = (generateDailySeed() % 30) + 1;   // Random verse (1-30 as an example)

    try {
      const response = await fetch(
        `https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/en-asv/books/${book}/chapters/${chapter}/verses/${verse}.json`
      );
      if (response.ok) {
        const data = await response.json();
        console.log("Fetched data:", data); // Log the data to inspect the structure

        // Adjust this based on the actual structure of `data`
        const parsedData: VerseData = {
          book: data.book || book,
          chapter: data.chapter || chapter,
          verse: data.verse || verse,
          text: data.text || "Verse text not available",
        };

        setVerseData(parsedData);
      } else {
        console.error("Failed to fetch daily verse:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching daily verse:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDailyVerse();
  }, []);

  if (loading) return <div>Loading daily verse...</div>;

  return (
    <div className="p-4 bg-blue-50 border-l-4 border-blue-500">
      <h2 className="text-xl font-semibold">Today&apos;s Verse</h2>
      {verseData ? (
        <p>
          <strong>{verseData.book} {verseData.chapter}:{verseData.verse}</strong> - {verseData.text}
        </p>
      ) : (
        <p>Error loading verse for today.</p>
      )}
    </div>
  );
}
