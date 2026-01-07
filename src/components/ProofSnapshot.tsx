import React, { useState } from 'react';
import { TrendingUp, Shield, Clock, Target, Building2, X } from 'lucide-react';
import { useRecruiterMode } from '@/contexts/RecruiterModeContext';

interface ProofCard {
  metric: string;
  label: string;
  icon: React.ElementType;
  details: string[];
}

const proofCards: ProofCard[] = [
  {
    metric: '30%',
    label: 'Faster incident response',
    icon: TrendingUp,
    details: [
      'Streamlined SIEM alert triage workflows',
      'Automated initial investigation steps with Python',
      'Implemented standardized playbooks for common incidents',
    ],
  },
  {
    metric: '25%',
    label: 'Reduction in critical vulnerabilities',
    icon: Shield,
    details: [
      'Prioritized remediation based on exploit likelihood',
      'Worked with dev teams to patch high-risk systems first',
      'Implemented continuous vulnerability scanning',
    ],
  },
  {
    metric: '15+',
    label: 'Hours saved weekly via automation',
    icon: Clock,
    details: [
      'Automated repetitive SOC tasks with Python scripts',
      'Built automated reporting dashboards',
      'Created self-healing security controls where possible',
    ],
  },
  {
    metric: '20%',
    label: 'Reduction in false positives',
    icon: Target,
    details: [
      'Tuned SIEM detection rules and thresholds',
      'Implemented contextual correlation rules',
      'Created whitelist policies for known-good behavior',
    ],
  },
  {
    metric: 'Zero Trust',
    label: 'Enterprise design experience',
    icon: Building2,
    details: [
      'Designed Zero Trust architecture for blockchain environments',
      'Implemented identity-centric access controls',
      'Applied least privilege and continuous verification principles',
    ],
  },
];

export function ProofSnapshot() {
  const [activeModal, setActiveModal] = useState<ProofCard | null>(null);
  const { isRecruiterMode } = useRecruiterMode();

  const handleCardClick = (card: ProofCard) => {
    console.log('[Analytics] Proof card clicked:', card.label);
    setActiveModal(card);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleCloseModal();
    }
  };

  // Show fewer cards in recruiter mode
  const displayCards = isRecruiterMode ? proofCards.slice(0, 3) : proofCards;

  return (
    <section id="proof" className="section-spacing-sm bg-secondary/30">
      <div className="swiss-container">
        <h2 className="text-title font-semibold text-foreground mb-10">
          Measurable security impact
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {displayCards.map((card, index) => (
            <button
              key={index}
              onClick={() => handleCardClick(card)}
              className="swiss-card-interactive text-left group"
              aria-label={`${card.metric} ${card.label}. Click for details.`}
            >
              <card.icon 
                size={24} 
                className="text-primary mb-4 group-hover:scale-110 transition-transform" 
              />
              <p className="text-headline font-bold text-foreground mb-1">
                {card.metric}
              </p>
              <p className="text-sm text-muted-foreground">
                {card.label}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeModal && (
        <div
          className="modal-overlay flex items-center justify-center animate-fade-in"
          onClick={handleCloseModal}
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className="modal-content animate-fade-up"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <activeModal.icon size={24} className="text-primary" />
                <div>
                  <p className="text-xl font-bold text-foreground">{activeModal.metric}</p>
                  <p className="text-sm text-muted-foreground">{activeModal.label}</p>
                </div>
              </div>
              <button
                onClick={handleCloseModal}
                className="btn-swiss-ghost -mr-2 -mt-2"
                aria-label="Close modal"
                autoFocus
              >
                <X size={20} />
              </button>
            </div>

            <h3 id="modal-title" className="text-sm font-semibold text-foreground mb-3">
              How this was achieved:
            </h3>
            <ul className="space-y-2">
              {activeModal.details.map((detail, index) => (
                <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  {detail}
                </li>
              ))}
            </ul>

            <button
              onClick={handleCloseModal}
              className="btn-swiss-secondary w-full mt-6"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
