import { useEffect, useRef } from "react";
import { animations } from "@/data/animations-list";

export default function RandomAnimation() {
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
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/3 w-[300px] h-[300px]"
            />
            {/*<audio ref={audioRef} src="/audio/loading.mp3" loop hidden />*/}
            {/*<audio*/}
            {/*    ref={audioRef}*/}
            {/*    src="/audio/loading.mp3"*/}
            {/*    loop*/}
            {/*    hidden*/}
            {/*    onPlay={() => console.log("✅ Audio is playing!")}*/}
            {/*    onPause={() => console.log("⏸️ Audio is paused!")}*/}
            {/*    onError={(e) => console.error("❌ Audio error:", e)}*/}
            {/*/>*/}

        </div>
    );
}
