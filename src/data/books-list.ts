export interface Book {
  id: number;
  src: string;
  imageSrc: string;
}

export const books: Book[] = [
  { id: 0, src: 'https://mywebar.com/1', imageSrc: '/images/english.webp' },
  { id: 1, src: 'https://mywebar.com/p/Project_7_87chzb90ir33865911', imageSrc: '/images/english2.webp' },
  { id: 2, src: 'https://mywebar.com/2', imageSrc: '/images/grammar.webp' },
  { id: 3, src: 'https://mywebar.com/p/Project_25_h8qc2gbhwl', imageSrc: '/images/grammar-clone.webp' },
  { id: 4, src: 'https://mywebar.com/3', imageSrc: '/images/france.webp' },

];