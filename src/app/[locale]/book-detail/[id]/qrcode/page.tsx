'use client';
import React, {useEffect, useState} from "react";
import {useTranslations} from "next-intl";
import { useRouter } from 'next/navigation';

import QRScannerComponent from "@/components/qr-scanner";
import video from "@/data/video.json";
import {useIdAndLocales} from "@/lib/useIdAndLocales";
import InfoHeader from "@/components/info-header";

interface VideoData {
    [key: string]: {
        [subKey: string]: string;
    };
}

const Home: React.FC = () => {
    const t = useTranslations("qr-scanner");
    const [qrCodeData, setQrCodeData] = useState<string | null>(null);
    const [searchResult, setSearchResult] = useState<{ [key: string]: string } | null>(null);
    const videoData: VideoData = video;

    const handleQRCodeScanned = (data: string) => {
        setQrCodeData(data);
        searchByKey(data);
    };
    const router = useRouter();
    const { id, currentLocale} = useIdAndLocales();

    const searchByKey = (key: string) => {
        if (videoData[key]) {
            setSearchResult(videoData[key]);
        } else {
            setSearchResult(null);
        }
    };
    useEffect(() => {
        if (searchResult) {
            const destination = `/${currentLocale}/book-detail/id=${id}/qrcode/videos/${qrCodeData}`;
            router.push(destination);
        }
    }, [searchResult, currentLocale, id, qrCodeData, router]);

    return (
        <div className="h-[100%] relative">
            <QRScannerComponent onQRCodeScanned={handleQRCodeScanned}/>
            <InfoHeader
                btnText={t("button")}
                imageSrc={"/images/qr-code.png"}
                imgText={t("selected-image")}
                navigationWay={`${currentLocale}/book-detail/id=${id}/`}
                className="ml-[1rem]"
            />


        </div>
    );
};

export default Home;