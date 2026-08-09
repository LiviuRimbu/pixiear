import React from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useIdAndLocales } from '@/lib/useIdAndLocales';
import BookCover from '@/components/ui/book-cover';

const BooksList: React.FC = () => {
    const t = useTranslations('books-covers-ar');
    const currentLocale = useIdAndLocales().currentLocale;
    const router = useRouter();

    const goTo = (id: number) => {
        router.push(`/${currentLocale}/book-detail/id=${id}`);
    };

    return (
        <div className="flex flex-col items-center justify-center mb-8 p-4">
            <p className="text-2xl font-bold text-center text-violet font-herculanum text-[16px] mb-2">
                {t('instruction')}
            </p>

            <div className="flex flex-col gap-4">

                <div className="flex gap-4 justify-center">
                    <BookCover src="/images/english.webp" id={0} onClick={goTo} />
                    <BookCover src="/images/english2.webp" id={1} onClick={goTo} />
                </div>

                <div className="border-2 border-violet rounded-lg p-1">
                    <span className="flex w-full items-center justify-center text-center text-violet font-herculanum text-[16px] mb-2">
                        Grammar Level A
                    </span>
                    <div className="flex gap-2 justify-center">
                        <BookCover src="/images/grammar.webp" id={2} onClick={goTo} />
                        <BookCover src="/images/grammar-clone.webp" id={3} onClick={goTo} />
                    </div>
                </div>

                <div className="flex justify-center">
                    <BookCover src="/images/france.webp" id={4} onClick={goTo} />
                </div>

            </div>
        </div>
    );
};

export default BooksList;