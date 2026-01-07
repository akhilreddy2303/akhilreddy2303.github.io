import React from 'react';
import { useRecruiterMode } from '@/contexts/RecruiterModeContext';

const philosophyPoints = [
  'Signal over noise',
  'Automation before scale',
  'Metrics-driven incident response',
  'Identity-centric security and Zero Trust',
  'Compliance as validation, not paperwork',
];

export function PhilosophySection() {
  const { isRecruiterMode } = useRecruiterMode();

  if (isRecruiterMode) {
    return null;
  }

  return (
    <section className="section-spacing-sm bg-secondary/30">
      <div className="swiss-container">
        <div className="swiss-grid">
          <div className="col-span-4 md:col-span-6 lg:col-span-6">
            <h2 className="text-title font-semibold text-foreground mb-6">
              How I think about security
            </h2>

            <ul className="space-y-3">
              {philosophyPoints.map((point, index) => (
                <li 
                  key={index} 
                  className="flex items-center gap-3 text-body text-muted-foreground"
                >
                  <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
