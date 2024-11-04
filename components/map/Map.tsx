"use client";

import React, { useEffect, useState } from "react";

interface VerseData {
  book: string;
  chapter: number;
  verse: number;
  text: string;
}

export default function Map() {
  const [verseData, setVerseData] = useState<VerseData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchVerse() {
      try {
        const response = await fetch(
          "https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/en-asv/books/genesis/chapters/1/verses/1.json"
        );
        if (response.ok) {
          const data: VerseData = await response.json();
          setVerseData(data);
        } else {
          console.error("Failed to fetch verse data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching verse data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchVerse();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2 className="text-xl font-bold">Sample Verse Data</h2>
      {verseData ? (
        <div>
          <p>
            <strong>{verseData.book} {verseData.chapter}:{verseData.verse}</strong> - {verseData.text}
          </p>
        </div>
      ) : (
        <p>Error loading verse data.</p>
      )}
    </div>
  );
}
