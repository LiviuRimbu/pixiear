// src/data/books.ts
export interface books {
    id: number;
    src: string;
    imageSrc: string;
}

export const books: books[] = [
    {id: 0, src: 'https://mywebar.com/p/Project_0_qu59hfweju18028869', imageSrc: '/images/english.png'},
    {id: 1, src: 'https://mywebar.com/p/Project_7_87chzb90ir33865911', imageSrc: '/images/english2.png'},
    {id: 2, src: 'https://mywebar.com/p/Project_4_6k8la19ohc75691675', imageSrc: '/images/grammar.png'},
    {id: 3, src: 'https://mywebar.com/p/Project_7_87chzb90ir33869729', imageSrc: '/images/france.png'},
];
