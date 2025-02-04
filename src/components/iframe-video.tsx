import React, {useEffect, useRef, useState} from 'react';
import Player from '@vimeo/player';
import DetectRotation from '@/components/detect-rotation';
import RandomAnimation from "@/components/random-animation";
import {AudioController} from "@/lib/audio";

interface IframeVideoProps {
    id: string;
}

const IframeVideo: React.FC<IframeVideoProps> = ({id}) => {
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const [showAnimation, setShowAnimation] = useState(false);
    const [isLandscape, setIsLandscape] = useState(false);

    const audio = new AudioController('/api/audio');

    const handlePlay = () => {
        audio.play();
    };

    const handleStop = () => {
        audio.stop();
    };

    useEffect(() => {
        if (iframeRef.current) {
            const player = new Player(iframeRef.current);
            player.on('loaded', () => {
                console.log('Player is initialized');
                handlePlay()
            });
            player.on('bufferstart', () => {
                console.log('Buffering started');
            });
            player.on('bufferend', () => {
                console.log('Buffering ended - Video is ready to play');
                setShowAnimation(false)
                handleStop();
                console.log('Stop sound'); //
            });
            player.on('play', () => {
                console.log('Video is playing');
            });

            return () => {
                handleStop();
                player.off('loaded');
                player.off('bufferstart');
                player.off('bufferend');
                player.off('play');
            };
        }
    }, []);


    const handleLandscape = () => {
        setIsLandscape(true);
    };

    const handlePortrait = () => {
        setIsLandscape(false);
    };

    return (

        <div
            className={`flex items-center justify-center ${
                isLandscape ? ' w-[100vw] h-[100%]' : 'w-[90vw] h-[80vw]'
            } top-[15vh] left-[5vw] z-[100]`}
        >
            {/*<RandomAnimation isLandscape={isLandscape}/>*/}
            <DetectRotation onLandscape={handleLandscape} onPortrait={handlePortrait}/>
            {showAnimation && (
                <RandomAnimation isLandscape={isLandscape}/>
            )
            }

            <iframe
                ref={iframeRef}
                src={`https://player.vimeo.com/video/${id}&badge=0&autopause=0&player_id=1&app_id=58479&byline=0&title=0&portrait=0&dnt=1&autoplay=1&quality=360p&api=1`}
                onLoad={() => setShowAnimation(true)}
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                className={`${
                    isLandscape ? 'w-full h-full object-cover' : 'min-w-[300px] w-[90vw] h-[50vw]'
                }
                 ${showAnimation && 'opacity-0'}
                rounded-lg shadow-lg`}
            ></iframe>
        </div>
    );
};

export default IframeVideo;