'use client'

import React, { useEffect, useRef, useState } from 'react';
import Player from '@vimeo/player';
import Image from 'next/image';

import DetectRotation from '@/components/detect-rotation';

interface IframeVideoProps {
    id: string;
}

const IframeVideo: React.FC<IframeVideoProps> = ({ id }) => {
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const [showAnimation, setShowAnimation] = useState(true);
    const [isLandscape, setIsLandscape] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);



    useEffect(() => {
        audioRef.current = new Audio('/audio/loading.mp3');
    }, []);

    const playAudio = async () => {
        try {
            await audioRef.current?.play();
        } catch (err) {
            console.warn('Autoplay prevented on mobile');
        }
    };

    const stopAudio = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
    };

    useEffect(() => {
        if (!iframeRef.current) return;
        const player = new Player(iframeRef.current);

        player.on('loaded', async () => {
            console.log('Player initialized');
            await playAudio();

            setTimeout(() => {
                setShowAnimation(false);
                stopAudio();
            }, 3000);
        });

        player.on('bufferstart', () => {
            console.log('Buffering started');
            setShowAnimation(true);
            playAudio();
        });

        player.on('bufferend', () => {
            console.log('Buffering ended');
            setShowAnimation(false);
            stopAudio();
        });

        player.on('play', () => {
            console.log('Video playing');
            setShowAnimation(false);
            stopAudio();
        });

        return () => {
            stopAudio();
            player.off('loaded');
            player.off('bufferstart');
            player.off('bufferend');
            player.off('play');
        };
    }, []);

    return (
        <div
            className={`flex items-center justify-center ${
                isLandscape ? 'w-[100vw] h-[100%]' : 'w-[90vw] h-[80vw]'
            } top-[15vh] left-[5vw] z-[100]`}
        >

            <DetectRotation
                onLandscape={() => setIsLandscape(true)}
                onPortrait={() => setIsLandscape(false)}
            />

            {showAnimation && (
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <Image
                        src="/gif/loading-cat.webp"
                        alt="Loading"
                        width={300}
                        height={300}
                        className="rounded-full"
                        unoptimized
                    />
                </div>
            )}
            <iframe
                ref={iframeRef}
                src={`https://player.vimeo.com/video/${id}&badge=0?autopause=0&player_id=1&app_id=58479&byline=0&title=0&portrait=0&dnt=1&autoplay=1&quality=360p&api=1`}
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                className={`transition-opacity duration-500 ease-in-out rounded-lg shadow-lg ${
                    isLandscape ? 'w-full h-full object-cover' : 'min-w-[300px] w-[90vw] h-[50vw]'
                } ${showAnimation ? 'opacity-100' : 'opacity-100'}`}
            />
        </div>
    );
};

export default IframeVideo;
