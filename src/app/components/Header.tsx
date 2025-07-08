'use client';

import Link from 'next/link';
import { useCall } from '../contexts/CallContext';
import LiveSubtitles from './LiveSubtitles';
import VoiceIntroModal from './VoiceIntroModal';

export default function Header() {
  const { isSpeaking, isConnecting, startCall, stopCall, showIntroModal, showModal, hideModal } = useCall();

  const handleSpeakClick = async () => {
    if (isSpeaking) {
      await stopCall();
    } else {
      showModal();
    }
  };

  const handleProceedWithCall = async () => {
    await startCall();
  };

  const isLoading = isConnecting;
  const isActive = isSpeaking || isLoading;

  return (
    <>
      <header className={`
        sticky top-0 z-50 transition-all duration-500 ease-in-out border-b
        ${isActive 
          ? 'bg-blue-600 border-blue-700' 
          : 'bg-white border-gray-200'
        }
      `}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 relative">
            {/* Navigation - slides left when active */}
            <nav className={`
              flex space-x-8 transition-all duration-500 ease-in-out
              ${isActive ? '-translate-x-4' : 'translate-x-0'}
            `}>
              <Link 
                href="/" 
                className={`
                  transition-colors text-sm
                  ${isActive 
                    ? 'text-blue-100 hover:text-white' 
                    : 'text-gray-700 hover:text-blue-600'
                  }
                `}
              >
                Home
              </Link>
              <Link 
                href="/work" 
                className={`
                  transition-colors text-sm
                  ${isActive 
                    ? 'text-blue-100 hover:text-white' 
                    : 'text-gray-700 hover:text-blue-600'
                  }
                `}
              >
                Projects
              </Link>
            </nav>

            {/* Live Subtitles - appears in center when active */}
            {isActive && (
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <LiveSubtitles isActive={isSpeaking} />
              </div>
            )}

            {/* Speak to me button - slides right when active */}
            <div className={`
              relative transition-all duration-500 ease-in-out
              ${isActive ? 'translate-x-4' : 'translate-x-0'}
            `}>
              <button
                onClick={handleSpeakClick}
                disabled={isLoading}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200
                  ${isSpeaking 
                    ? 'bg-red-600 hover:bg-red-700 text-white' 
                    : isActive
                      ? 'bg-blue-800 hover:bg-blue-900 text-white'
                      : 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-md'
                  }
                  ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}
                `}
              >
                {/* Microphone Icon */}
                <svg 
                  className="w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  {isSpeaking ? (
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M6 18L18 6M6 6l12 12" 
                    />
                  ) : (
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" 
                    />
                  )}
                </svg>
                {isLoading ? 'Connecting...' : isSpeaking ? 'End call' : 'Speak to me'}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Voice Intro Modal */}
      <VoiceIntroModal
        isOpen={showIntroModal}
        onClose={hideModal}
        onProceed={handleProceedWithCall}
      />
    </>
  );
} 