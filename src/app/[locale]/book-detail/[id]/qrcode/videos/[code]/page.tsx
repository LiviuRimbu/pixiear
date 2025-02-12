'use client'
import React, {useEffect, useState} from "react"
import {useTranslations} from "next-intl";

import {Button} from "@/components/ui/button";
import LinkButton from "@/components/link-button";
import InfoHeader from "@/components/info-header";
import Modal from "@/components/modal";
import IframeVideo from "@/components/iframe-video";
import PlayButton from '@/../public/images/play-button.svg';
import {useIdAndLocales} from "@/lib/useIdAndLocales";
import video from "@/data/video.json";

interface VideoData {
    [key: string]: {
        [subKey: string]: string;
    };
}

const Videos: React.FC = () => {
    const t = useTranslations('qr-scanner');
    const {currentLocale, id, currentPath} = useIdAndLocales();
    const [searchResult, setSearchResult] = useState<{ [key: string]: string } | null>(null);
    const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

    const key = currentPath.split("videos/")[1];
    const videoData: VideoData = video;

    useEffect(() => {
        const searchByKey = (key: string) => {
            if (videoData[key]) {
                setSearchResult(videoData[key]);
            } else {
                setSearchResult(null);
            }
        };
        searchByKey(key);
    }, [key, videoData]);

    return (
        <div className=" min-h-screen p-[5%]">
            <div className="flex flex-col items-center mt-[14vh]">
                <LinkButton
                    href={`/${currentLocale}/book-detail/id=${id}/qrcode`}
                    className="w-[228px] h-[65px] text-[23px] mb-[3rem]"
                    imageSrc="/images/qr-code-white.webp"
                    altText="cover book"
                    btnTextMain="SCAN"
                    imgClassName="mr-[15px]"
                />
            </div>
            {searchResult ? (
                <div className="border-white border-2 p-[3rem] rounded-3xl flex flex-col items-center justify-center">
                    <div className="flex flex-col items-start justify-center gap-2">
                        {Object.keys(searchResult).map((key) => (
                            <div key={key}>
                                <Button
                                    className="border-none bg-transparent shadow-none hover:bg-transparent hover:scale-105"
                                    onClick={() => setActiveVideoId(searchResult[key])}
                                >
                                    <PlayButton
                                        width={40}
                                        height={40}
                                        className="mr-[1vw]"
                                    />
                                    <span className="text-violet font-bold"> {key.split(/ p\d+/)[0]}</span>
                                </Button>
                                <Modal
                                    isOpen={activeVideoId === searchResult[key]}
                                    onClose={() => setActiveVideoId(null)}
                                    className="fixed flex flex-col items-center justify-center w-[100vw] h-[100vh] bg-black bg-opacity-50 z-9999"
                                >
                                    <IframeVideo id={searchResult[key]}/>
                                </Modal>
                            </div>
                        ))}
                    </div>
                </div>
            ) : null}
            <InfoHeader
                btnText={t('button')}
                imageSrc="/images/qr-code.webp"
                imgText={t('selected-image')}
                navigationWay={`${currentLocale}/book-detail/id=${id}/qrcode`}
            />
        </div>
    );
};

export default Videos;
