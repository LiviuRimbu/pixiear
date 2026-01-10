export async function checkAndRequestCameraAccess(
    setIsModalOpen: (open: boolean) => void,
    setModalMessage: (message: string) => void
): Promise<void> {
    try {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            throw new Error("Camera API is not supported in this browser.");
        }

        const stream: MediaStream = await navigator.mediaDevices.getUserMedia({video: true});
        console.log("Camera access granted");

        const tracks: MediaStreamTrack[] = stream.getTracks();
        tracks.forEach((track: MediaStreamTrack) => track.stop());

        setIsModalOpen(false);
    } catch (error: unknown) {
        let message = "An error occurred while trying to access the camera.";

        if (error instanceof DOMException) {
            if (error.name === "NotAllowedError") {
                message =
                    "Camera access is denied. Please enable camera permissions in your browser settings.";
            }
        }

        setModalMessage(message);
        setIsModalOpen(true);
    }
}
