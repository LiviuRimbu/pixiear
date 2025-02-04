import { useEffect, useRef } from "react";
import { animations } from "@/data/animations-list";

interface RandomAnimationProps {
    isLandscape : boolean;
}

export default function RandomAnimation({isLandscape}: RandomAnimationProps): JSX.Element {
    const animationsList = animations;
    const randomAnimation = animationsList[Math.floor(Math.random() * animationsList.length)];
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        const playAudio = () => {
            if (audioRef.current) {
                audioRef.current.play().catch((error) => {
                    console.warn("Autoplay failed: User interaction required.", error);
                });
            }
        };

        // Try playing when the page loads
        playAudio();

        // Also play on user interaction
        document.addEventListener("click", playAudio);

        return () => {
            document.removeEventListener("click", playAudio);
        };
    }, []);

    return (
        <div>
            <iframe
                src={`https://lottie.host/embed/${randomAnimation}.lottie`}
                className={`absolute  left-1/2 -translate-x-1/2 -translate-y-2/3 w-[300px] h-[300px] ${isLandscape ? `top-[70%]` : 'top-1/2'}`}
            />

        </div>
    );
}
