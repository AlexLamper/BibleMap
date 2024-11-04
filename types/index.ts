export interface Marker {
    id: string;
    name: string;
    description: string;
    completed: boolean;
}

export interface Section {
    id: string;
    title: string;
    markers: Marker[];
}

export interface VerseData {
    book: string;
    chapter: number;
    verse: number;
    text: string;
}
  