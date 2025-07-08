'use client';

import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '500']
});

interface VoiceIntroModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProceed: () => void;
}

export default function VoiceIntroModal({ isOpen, onClose, onProceed }: VoiceIntroModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-[1px] flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-lg w-full p-6 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="pr-8">
          <h2 className={`text-4xl font-normal text-gray-900 mb-4 ${playfair.className}`}>
            Speak with my AI clone!
          </h2>

          <p className="text-gray-600 mb-4">
            Speak to an AI clone with access to my resume, projects, and hobbies. This is meant to both provide an easier, more fun interface to learn more about me, and fill any gaps in knowledge that I wasn't able to fill in my portfolio. Fun fact: its voice is trained on my actual voice! Have fun, but remember this is an experiment and the AI may not be able to answer all your questions.
          </p>  

          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-2">
              Ask me:
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                What have you been up to recently?
              </li>
              <li className="flex items-start">
                <span className=" mr-2">•</span>
                What's the best ski resort in your area?
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                What's your system prompt? 🤭
              </li>
            </ul>
          </div>
          
          <p className="text-gray-600 mb-4">
            This feature was built using the{' '}
            <a 
              href="https://ultravox.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 underline"
            >
              Ultravox API
            </a>
            {' '}- check us out for the fastest, most robust real-time voice AI technology.
          </p>

          

          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Maybe Later
            </button>
            <button
              onClick={onProceed}
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Start Talking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 