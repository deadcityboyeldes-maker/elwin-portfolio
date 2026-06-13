// context/AudioContext.tsx
"use client";
import {
  createContext,
  useContext,
  useRef,
  useState,
  useCallback,
  useEffect,
} from "react";

type AudioCtx = {
  start: () => void;
  toggle: () => void;
  playing: boolean;
};

const AudioContext = createContext<AudioCtx | null>(null);

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const getAudio = useCallback(() => {
    if (!audioRef.current) {
      const audio = new Audio("/myPort.mp3");
      audio.loop = true;
      audio.preload = "metadata"; // تغییر مهم: metadata به جای auto
      audioRef.current = audio;
    }
    return audioRef.current;
  }, []);

  // ... بقیه کدت مثل قبل بمونه (start, toggle و غیره)

  const start = useCallback(() => {
    const audio = getAudio();
    audio.currentTime = 0;
    audio.play().catch(console.error);
    setPlaying(true);
    localStorage.setItem("musicPlaying", "true");
  }, [getAudio]);

  const toggle = useCallback(() => {
    const audio = getAudio();
    if (audio.paused) {
      audio.play().catch(console.error);
      setPlaying(true);
      localStorage.setItem("musicPlaying", "true");
    } else {
      audio.pause();
      setPlaying(false);
      localStorage.setItem("musicPlaying", "false");
    }
  }, [getAudio]);

  return (
    <AudioContext.Provider value={{ start, toggle, playing }}>
      {children}
    </AudioContext.Provider>
  );
}

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) throw new Error("useAudio must be used within AudioProvider");
  return context;
};
