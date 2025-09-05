'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { UltravoxSession } from 'ultravox-client';

interface CallContextType {
  session: UltravoxSession | null;
  isSpeaking: boolean;
  isConnecting: boolean;
  showIntroModal: boolean;
  startCall: () => Promise<void>;
  stopCall: () => Promise<void>;
  showModal: () => void;
  hideModal: () => void;
}

const CallContext = createContext<CallContextType | undefined>(undefined);

export function CallProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<UltravoxSession | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [showIntroModal, setShowIntroModal] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const initSession = async () => {
      const uvSession = new UltravoxSession();
      setSession(uvSession);
    };
    initSession();
  }, []);

  const createJoinUrl = async () => {
    const response = await fetch("/api/create-call", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({})
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Failed to create call: ${errorData.error || response.statusText}`);
    }

    const data = await response.json();
    return data.joinUrl || data.join_url;
  };

  const startCall = async () => {
    if (session && !isSpeaking && !isConnecting) {
      try {
        setIsConnecting(true);
        setShowIntroModal(false);
        const joinUrl = await createJoinUrl();
        console.log('Joining call with URL:', joinUrl);
        await session.joinCall(joinUrl);
        setIsSpeaking(true);
      } catch (err) {
        console.error("Error starting Ultravox session:", err);
      } finally {
        setIsConnecting(false);
      }
    }
  };

  const stopCall = async () => {
    if (session && isSpeaking) {
      try {
        await session.leaveCall();
        setIsSpeaking(false);
      } catch (err) {
        console.error("Error stopping Ultravox session:", err);
      }
    }
  };

  const showModal = () => {
    setShowIntroModal(true);
  };

  const hideModal = () => {
    setShowIntroModal(false);
  };

  // Register client tool: navigate
  useEffect(() => {
    if (!session) return;

    const navigate = (parameters: Record<string, unknown>) => {
      const value = (parameters?.path as string) || (parameters?.page as string) || (parameters?.route as string) || (parameters?.to as string) || '';
      const input = typeof value === 'string' ? value.trim() : '';
      const alias = input.toLowerCase();
      const dictionary: Record<string, string> = {
        home: '/',
        index: '/',
        portfolio: '/',
        projects: '/work',
        project: '/work',
        work: '/work'
      };
      let path = input.startsWith('/') ? input : (dictionary[alias] || '/');
      if (!path.startsWith('/')) path = '/';
      try {
        router.push(path);
        return `Navigating to ${path}`;
      } catch (_e) {
        return 'Failed to navigate';
      }
    };

    session.registerToolImplementation('navigate', navigate);
  }, [session, router]);

  return (
    <CallContext.Provider value={{ 
      session, 
      isSpeaking, 
      isConnecting, 
      showIntroModal,
      startCall, 
      stopCall,
      showModal,
      hideModal
    }}>
      {children}
    </CallContext.Provider>
  );
}

export function useCall() {
  const context = useContext(CallContext);
  if (context === undefined) {
    throw new Error('useCall must be used within a CallProvider');
  }
  return context;
} 