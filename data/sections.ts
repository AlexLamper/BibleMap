import { Section } from '../types';

export const sections: Section[] = [
  {
    id: 'places',
    title: 'Places',
    markers: [
      { id: 'place1', name: 'Jerusalem', description: 'A holy city...', completed: false },
      { id: 'place2', name: 'Bethlehem', description: 'Birthplace of Jesus...', completed: false },
    ],
  },
  {
    id: 'characters',
    title: 'Characters',
    markers: [
      { id: 'character1', name: 'Abraham', description: 'Father of many nations...', completed: false },
    ],
  },
];
