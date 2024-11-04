"use client";

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { VerseData } from '../../../../types';

export default function MarkerPage() {
  const searchParams = useSearchParams();
  const marker = searchParams.get('marker');

  const [markerData, setMarkerData] = useState<VerseData | null>(null);

  useEffect(() => {
    if (marker) {
      fetch(`https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/en-asv/books/genesis/chapters/1/verses/1.json`)
        .then((response) => response.json())
        .then((data: VerseData) => setMarkerData(data))
        .catch((error) => console.error('Error fetching data:', error));
    }
  }, [marker]);

  if (!markerData) return <div>Loading...</div>;

  return (
    <div>
      <h1>{markerData.book} {markerData.chapter}:{markerData.verse}</h1>
      <p>{markerData.text}</p>
    </div>
  );
}
