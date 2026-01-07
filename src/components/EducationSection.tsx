import React, { useState } from 'react';
import { GraduationCap, Award, ExternalLink, X } from 'lucide-react';

export function EducationSection() {
  const [showCertModal, setShowCertModal] = useState(false);

  const handleViewCertificate = () => {
    console.log('[Analytics] Certificate viewed');
    setShowCertModal(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setShowCertModal(false);
    }
  };

  return (
    <section id="education" className="section-spacing bg-secondary/30">
      <div className="swiss-container">
        <h2 className="text-title font-semibold text-foreground mb-10">
          Education & Certifications
        </h2>

        <div className="swiss-grid">
          {/* Education */}
          <div className="col-span-4 md:col-span-4 lg:col-span-5">
            <div className="swiss-card h-full">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent rounded-lg">
                  <GraduationCap size={24} className="text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-subtitle font-semibold text-foreground mb-1">
                    M.S. in Information Assurance and Cybersecurity
                  </h3>
                  <p className="text-primary font-medium mb-2">
                    Gannon University
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Graduate-level program focusing on enterprise security, 
                    risk management, and information assurance principles.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Certification */}
          <div className="col-span-4 md:col-span-4 lg:col-span-5 lg:col-start-7">
            <div className="swiss-card h-full">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent rounded-lg">
                  <Award size={24} className="text-accent-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-subtitle font-semibold text-foreground mb-1">
                    CompTIA Security+ (SY0-701)
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    Active Certification
                  </p>
                  <dl className="text-sm space-y-1 mb-4">
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Issue Date:</dt>
                      <dd className="text-foreground">September 26, 2025</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Expiration:</dt>
                      <dd className="text-foreground">September 26, 2028</dd>
                    </div>
                  </dl>
                  <button
                    onClick={handleViewCertificate}
                    className="btn-swiss-secondary w-full"
                  >
                    <Award size={16} />
                    View Certificate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {showCertModal && (
        <div
          className="modal-overlay flex items-center justify-center animate-fade-in"
          onClick={() => setShowCertModal(false)}
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-modal="true"
          aria-labelledby="cert-modal-title"
        >
          <div
            className="modal-content max-w-md animate-fade-up"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 id="cert-modal-title" className="text-subtitle font-semibold text-foreground">
                CompTIA Security+ Certificate
              </h3>
              <button
                onClick={() => setShowCertModal(false)}
                className="btn-swiss-ghost -mr-2"
                aria-label="Close modal"
                autoFocus
              >
                <X size={20} />
              </button>
            </div>

            <div className="bg-muted rounded-lg p-8 text-center mb-4">
              <Award size={48} className="text-primary mx-auto mb-4" />
              <p className="text-lg font-semibold text-foreground mb-1">
                CompTIA Security+
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                SY0-701 • Active
              </p>
              <p className="text-xs text-muted-foreground">
                Credential verification available through CompTIA
              </p>
            </div>

            <a
              href="https://www.comptia.org/certifications/security"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-swiss-primary w-full"
              onClick={() => console.log('[Analytics] Certificate verification clicked')}
            >
              Verify on CompTIA
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
