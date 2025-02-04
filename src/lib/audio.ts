export class AudioController {
    private readonly audio: HTMLAudioElement | null = null;

    constructor(audioSrc: string = '/api/audio', volume: number = 0.1, loop: boolean = true) {
        this.audio = new Audio(audioSrc);
        this.audio.volume = volume;
        this.audio.loop = loop;
    }

    play() {
        if (this.audio) {
            this.audio.play()
                .then(() => console.log(''))
                .catch(err => console.error('Error playing audio:', err));
        }
    }

    stop() {
        if (this.audio) {
            this.audio.pause();
            this.audio.currentTime = 0;
            // console.log('Audio stop fromAPI');
        }
    }
}
