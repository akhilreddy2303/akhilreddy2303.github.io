import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useRecruiterMode } from '@/contexts/RecruiterModeContext';

interface Experience {
  title: string;
  company: string;
  period: string;
  highlights: string[];
}

const experiences: Experience[] = [
  {
    title: 'Cybersecurity Analyst',
    company: 'JPMorgan Chase',
    period: 'Jan 2025 – Present',
    highlights: [
      'SIEM monitoring with Splunk for real-time threat detection',
      'Vulnerability management using Nessus & Qualys',
      'Incident response and forensic analysis',
      'IAM audits across Azure AD, Okta, and Active Directory',
      'Python automation saving 15+ hours weekly',
      'AWS & Azure hardening using CIS benchmarks',
    ],
  },
  {
    title: 'Junior Cybersecurity Analyst',
    company: 'Adons Softech',
    period: 'Mar 2020 – Nov 2022',
    highlights: [
      'NIST & ISO 27001 security policy implementation',
      'SOC monitoring and incident triage',
      'Risk assessments and remediation planning',
      'Endpoint security improvements',
      'BCDR and ransomware simulations',
    ],
  },
];

export function ExperienceSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const { isRecruiterMode } = useRecruiterMode();

  const toggleExpand = (index: number) => {
    console.log('[Analytics] Experience expanded:', experiences[index].company);
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="section-spacing">
      <div className="swiss-container">
        <h2 className="text-title font-semibold text-foreground mb-10">
          Experience
        </h2>

        <div className="swiss-grid">
          <div className="col-span-4 md:col-span-8 lg:col-span-8">
            <div className="space-y-4">
              {experiences.map((exp, index) => {
                const isExpanded = expandedIndex === index;
                const showHighlights = isRecruiterMode 
                  ? (isExpanded && exp.highlights.slice(0, 3))
                  : (isExpanded && exp.highlights);

                return (
                  <div
                    key={index}
                    className="swiss-card"
                  >
                    <button
                      onClick={() => toggleExpand(index)}
                      className="w-full text-left flex items-start justify-between gap-4 focus-ring rounded-md"
                      aria-expanded={isExpanded}
                    >
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-1">
                          <h3 className="text-subtitle font-semibold text-foreground">
                            {exp.title}
                          </h3>
                          <span className="hidden sm:inline text-muted-foreground">—</span>
                          <span className="text-primary font-medium">
                            {exp.company}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {exp.period}
                        </p>
                      </div>
                      <span className="text-muted-foreground mt-1">
                        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </span>
                    </button>

                    {showHighlights && (
                      <ul className="mt-4 pt-4 border-t border-border space-y-2 animate-fade-in">
                        {(showHighlights as string[]).map((highlight, hIndex) => (
                          <li
                            key={hIndex}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                        {isRecruiterMode && exp.highlights.length > 3 && (
                          <li className="text-sm text-primary cursor-pointer hover:underline">
                            + {exp.highlights.length - 3} more details
                          </li>
                        )}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Timeline indicator */}
          <div className="hidden lg:block lg:col-span-4 lg:col-start-10">
            <div className="sticky top-32 text-right">
              <p className="text-sm text-muted-foreground mb-2">Timeline</p>
              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <button
                    key={index}
                    onClick={() => toggleExpand(index)}
                    className={`block w-full text-right text-sm transition-colors focus-ring rounded ${
                      expandedIndex === index 
                        ? 'text-foreground font-medium' 
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {exp.period}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
