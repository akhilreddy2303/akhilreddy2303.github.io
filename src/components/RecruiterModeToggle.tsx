import React from 'react';
import { Zap } from 'lucide-react';
import { useRecruiterMode } from '@/contexts/RecruiterModeContext';

export function RecruiterModeToggle() {
  const { isRecruiterMode, toggleRecruiterMode } = useRecruiterMode();

  return (
    <div className="inline-flex items-center gap-3 bg-secondary/80 backdrop-blur-sm rounded-full px-4 py-2 border border-border">
      <Zap size={16} className={isRecruiterMode ? 'text-primary' : 'text-muted-foreground'} />
      <span className="text-sm font-medium text-foreground">Recruiter Mode</span>
      <button
        role="switch"
        aria-checked={isRecruiterMode}
        onClick={toggleRecruiterMode}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-ring ${
          isRecruiterMode ? 'bg-primary' : 'bg-muted'
        }`}
      >
        <span className="sr-only">Toggle Recruiter Mode</span>
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-card shadow-subtle transition-transform ${
            isRecruiterMode ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  );
}
