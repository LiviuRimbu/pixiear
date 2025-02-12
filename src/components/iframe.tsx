import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Image from "next/image";
import { useRouter } from 'next/navigation';

import InfoHeader from "@/components/info-header";
import { books } from "@/data/books-list";
import { useIdAndLocales } from "@/lib/useIdAndLocales";
import { Button } from "@/components/ui/button";

const IframeComponent: React.FC = () => {
    const t = useTranslations('iframe');
    const { id, currentLocale } = useIdAndLocales();
    const router = useRouter();

    const [showButton, setShowButton] = useState(false);
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowButton(true);
            setTimeout(() => setFadeIn(true), 100);
        }, 7000); // 7 seconds delay

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-custom-gradient">
            <iframe
                src={books[Number(id)].src}
                frameBorder="0"
                scrolling="yes"
                seamless
                style={{ display: 'block', width: '100vw', height: '100vh' }}
                allow="camera;gyroscope;accelerometer;magnetometer;xr-spatial-tracking;microphone"
                title="Project Iframe"
            ></iframe>

            <InfoHeader
                btnText={t('button')}
                imageSrc={books[Number(id)].imageSrc}
                imgText={t('selected-image')}
                navigationWay={`${currentLocale}/book-detail/id=${id}/`}
            />

            {showButton && (
                <Button
                    className={`absolute hover:scale-105 active:scale-105 bottom-10 px-12 py-6 font-bold tracking-wider rounded-full bg-gradient-to-r from-blue-500 via-red-900 to-yellow-400 bg-[length:200%] animate-gradient transition-all duration-4000 
                    transition-opacity duration-1000 ease-in-out ${fadeIn ? 'opacity-100' : 'opacity-0'}`}
                    onClick={() => router.push(`/${currentLocale}/book-detail/id=${id}/qrcode`)}
                >
                    <Image src="/images/qr-code-white.webp" alt='qr code' width={20} height={20} className="mr-5" />
                    <p className="text-2xl text-white">{t('button-to-qr')}</p>
                </Button>
            )}
        </div>
    );
};

export default IframeComponent;
