'use client';

import { useCall } from '../contexts/CallContext';

interface CallButtonProps {
  className?: string;
  variant?: 'primary' | 'secondary';
}

export default function CallButton({ className = '', variant = 'primary' }: CallButtonProps) {
  const { isSpeaking, isConnecting, startCall, stopCall } = useCall();

  const handleClick = async () => {
    if (isSpeaking) {
      await stopCall();
    } else {
      await startCall();
    }
  };

  const getButtonText = () => {
    if (isConnecting) return 'Connecting...';
    if (isSpeaking) return 'End call';
    return 'Talk to me now';
  };

  const getButtonStyles = () => {
    if (variant === 'primary') {
      if (isSpeaking) {
        return 'bg-red-600 hover:bg-red-700 text-white';
      }
      return 'bg-blue-600 hover:bg-blue-700 text-white';
    } else {
      if (isSpeaking) {
        return 'border-2 border-red-600 text-red-600 hover:bg-red-50';
      }
      return 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50';
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={isConnecting}
      className={`font-medium py-3 px-8 rounded-lg transition-colors ${getButtonStyles()} ${className} ${
        isConnecting ? 'opacity-50 cursor-not-allowed' : ''
      }`}
    >
      {getButtonText()}
    </button>
  );
} 