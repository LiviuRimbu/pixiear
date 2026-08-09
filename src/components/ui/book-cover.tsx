import React from 'react';
import Image from 'next/image';

interface BookCoverProps {
    src: string;
    id: number;
    onClick: (id: number) => void;
}

const BookCover: React.FC<BookCoverProps> = ({ src, id, onClick }) => {
    return (
        <div className="w-[clamp(120px,40vw,200px)] aspect-[2/3] rounded-lg overflow-hidden">
            <Image
                src={src}
                alt="book cover"
                width={200}
                height={300}
                priority
                className="cursor-pointer hover:scale-105 transition-transform active:scale-105 w-full h-full "
                onClick={() => onClick(id)}
            />
        </div>
    );
};

export default BookCover;