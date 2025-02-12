"use client";
import React, { useEffect, useRef, useState } from "react";
import QrScanner from "qr-scanner";

import Image from "next/image";
import {useTranslations} from "next-intl";
import {Button} from "@/components/ui/button";

interface QRScannerComponentProps {
    onQRCodeScanned: (data: string) => void;
}

const QRScannerComponent: React.FC<QRScannerComponentProps> = ({ onQRCodeScanned }) => {
    const t = useTranslations('camera-access');
    const videoRef = useRef<HTMLVideoElement>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let qrScanner: QrScanner | null = null;

        const startScanner = async () => {
            if (!videoRef.current) {
                setError("Video element is not available.");
                return;
            }

            qrScanner = new QrScanner(
                videoRef.current,
                (result) => {
                    onQRCodeScanned(result); // Pass the scanned result
                    setError(null); // Clear any previous errors
                }
            );

            try {
                await qrScanner.start(); // Start the QR scanner
                console.log("QR scanner started");
            } catch (err) {
                console.error("Error starting QR scanner:", err);
                setError( t('camera-access-error'));
            }
        };

        startScanner(); // Initialize the scanner

        return () => {
            const currentVideoRef = videoRef.current; // Save the ref to a local variable
            if (qrScanner) {
                qrScanner.stop();
                qrScanner.destroy(); // Cleanup QR scanner resources
            }
            if (currentVideoRef?.srcObject) {
                const tracks = (currentVideoRef.srcObject as MediaStream)?.getTracks();
                tracks.forEach((track) => track.stop());
                currentVideoRef.srcObject = null; // Release the camera
            }
        };
    }, [onQRCodeScanned]);

    return (
        <div className="fixed h-screen w-screen flex flex-col justify-center items-center bg-black text-white">
            {/* Video feed */}
            <div className="w-screen h-screen overflow-hidden relative">

                <Image
                    src="/images/qr-code-white.webp"
                    alt="QR Scanner logo"
                    width={40}
                    height={40}
                    className="absolute transform left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[100px] w-[100px] z-40 opacity-30"
                />
                <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    playsInline
                    muted
                    autoPlay
                ></video>

                {/* Error message */}
                {error && (
                    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-70 text-white p-4">
                        <p className="text-center text-xl font-bold mb-4">{error}</p>
                        <Button
                            onClick={() => window.location.reload()}
                            className="mt-4 px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg"
                        >
                            Retry
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default QRScannerComponent;
