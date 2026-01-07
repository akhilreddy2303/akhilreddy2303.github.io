import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

interface RecruiterModeContextType {
  isRecruiterMode: boolean;
  toggleRecruiterMode: () => void;
}

const RecruiterModeContext = createContext<RecruiterModeContextType | undefined>(undefined);

export function RecruiterModeProvider({ children }: { children: ReactNode }) {
  const [isRecruiterMode, setIsRecruiterMode] = useState(false);

  const toggleRecruiterMode = useCallback(() => {
    setIsRecruiterMode(prev => {
      const newValue = !prev;
      console.log('[Analytics] Recruiter Mode toggled:', newValue ? 'ON' : 'OFF');
      return newValue;
    });
  }, []);

  return (
    <RecruiterModeContext.Provider value={{ isRecruiterMode, toggleRecruiterMode }}>
      {children}
    </RecruiterModeContext.Provider>
  );
}

export function useRecruiterMode() {
  const context = useContext(RecruiterModeContext);
  if (context === undefined) {
    throw new Error('useRecruiterMode must be used within a RecruiterModeProvider');
  }
  return context;
}
