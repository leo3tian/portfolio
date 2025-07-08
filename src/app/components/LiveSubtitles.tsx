'use client';

import { useEffect, useState } from 'react';
import { useCall } from '../contexts/CallContext';

interface Transcript {
  text: string;
  isFinal: boolean;
  speaker: 'user' | 'agent';
  medium: 'voice' | 'text';
}

interface LiveSubtitlesProps {
  isActive: boolean;
}

export default function LiveSubtitles({ isActive }: LiveSubtitlesProps) {
  const { session } = useCall();
  const [currentTranscript, setCurrentTranscript] = useState<Transcript | null>(null);

  useEffect(() => {
    if (!session || !isActive) {
      setCurrentTranscript(null);
      return;
    }

    const handleTranscripts = () => {
      const transcripts: Transcript[] = session.transcripts;
      if (transcripts && transcripts.length > 0) {
        // Show only the most recent transcript
        const latest = transcripts[transcripts.length - 1];
        setCurrentTranscript(latest);
      }
    };

    // Listen for transcript updates
    session.addEventListener('transcripts', handleTranscripts);

    return () => {
      session.removeEventListener('transcripts', handleTranscripts);
    };
  }, [session, isActive]);

  if (!isActive) return null;

  return (
    <div className="flex flex-col items-center justify-center min-w-0 max-w-sm mx-4">
      {currentTranscript ? (
        <div className="text-center w-full">
          <div className="text-xs text-blue-200 mb-1">
            {currentTranscript.speaker === 'user' ? 'You' : 'Leo'}
          </div>
          <div className={`text-sm leading-tight px-2 ${
            currentTranscript.isFinal ? 'text-blue-100' : 'text-white font-medium'
          }`}>
            {currentTranscript.text}
          </div>
        </div>
      ) : (
        <div className="text-center">
          <div className="text-xs text-blue-200">
            Listening...
          </div>
          <div className="flex items-center justify-center gap-1 mt-1">
            <div className="w-1 h-1 bg-blue-200 rounded-full animate-pulse"></div>
            <div className="w-1 h-1 bg-blue-200 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-1 h-1 bg-blue-200 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      )}
    </div>
  );
} 