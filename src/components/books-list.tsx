import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { books } from '@/data/books-list';
import { useIdAndLocales } from '@/lib/useIdAndLocales';

const BooksList: React.FC = () => {
    const t = useTranslations('books-covers-ar');
    const currentLocale = useIdAndLocales().currentLocale;
    const router = useRouter();

    const handleImageClick = (id: number) => {
        router.push(`/${currentLocale}/book-detail/id=${id}`);

    };

    return (
        <div className="flex flex-col items-center justify-center relative w-full max-w-xl max-h-xl mx-auto">
            <p className="text-3xl font-bold text-violet font-herculanum text-[16px] mb-2">
                {t('instruction')}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-[90vw] sm:w-[60vw] sm:mt-10 max-w-2xl">
                {books.map((book, index) => {
                    const lastImagePosition =  (index === books.length - 1) && ((books.length - 1) % 2 === 0) ;
                    console.log(lastImagePosition, "lastImagePosition", books.length-1, " index", index);
                    return (
                        <Image
                            key={index}
                            src={book.imageSrc}
                            alt="book cover"
                            width={200}
                            height={300}
                            priority
                            className={`cursor-pointer rounded-lg hover:scale-105 transition-transform active:scale-105 h-[50vw] w-[100%] sm:h-[20vw] aspect-h-3  ${lastImagePosition && 'translate-x-1/2 ' }`}
                            onClick={() => handleImageClick(book.id)}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default BooksList;
