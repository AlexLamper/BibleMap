
interface VerseResponse {
    verse: number;
    text: string;
}

export async function fetchVerse(version: string, book: string, chapter: number, verse: number): Promise<VerseResponse> {
    const url = `https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/${version}/books/${book}/chapters/${chapter}/verses/${verse}.json`;
    const response = await fetch(url);
    return response.json();
}

export async function fetchChapter(version: string, book: string, chapter: number) {
    const url = `https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/${version}/books/${book}/chapters/${chapter}.json`;
    const response = await fetch(url);
    return response.json();
}
  