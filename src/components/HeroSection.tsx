import React from 'react';
import { Download, Mail, Github, MapPin, Briefcase, Shield, Building2 } from 'lucide-react';
import { RecruiterModeToggle } from './RecruiterModeToggle';

const quickFacts = [
  { icon: Briefcase, label: '3+ years experience' },
  { icon: Shield, label: 'SOC • Cloud • IAM • Compliance' },
  { icon: Building2, label: 'Financial services & enterprise' },
  { icon: MapPin, label: 'Erie, PA' },
];

export function HeroSection() {
  const handleDownloadResume = () => {
    console.log('[Analytics] Resume download clicked');
    // In production, this would trigger actual download
    alert('Resume download would start here. Add your resume PDF to enable this feature.');
  };

  const handleEmailClick = () => {
    console.log('[Analytics] Email CTA clicked');
    window.location.href = 'mailto:akhilreddy.muduganti@example.com';
  };

  const handleGithubClick = () => {
    console.log('[Analytics] GitHub profile clicked from hero');
    window.open('https://github.com/akhilreddy2303', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20">
      <div className="swiss-container">
        <div className="swiss-grid">
          <div className="col-span-4 md:col-span-8 lg:col-span-8 lg:col-start-1">
            {/* Recruiter Mode Toggle */}
            <div className="mb-8 animate-fade-up" style={{ animationDelay: '0ms' }}>
              <RecruiterModeToggle />
            </div>

            {/* Name */}
            <h1 
              className="text-display font-bold text-foreground mb-4 animate-fade-up"
              style={{ animationDelay: '50ms' }}
            >
              Akhil Reddy<br />Muduganti
            </h1>

            {/* Title */}
            <p 
              className="text-title text-primary font-medium mb-6 animate-fade-up"
              style={{ animationDelay: '100ms' }}
            >
              Cybersecurity Analyst
            </p>

            {/* Value Statement */}
            <p 
              className="text-subtitle text-muted-foreground max-w-xl mb-8 text-balance animate-fade-up"
              style={{ animationDelay: '150ms' }}
            >
              Designing and securing enterprise systems through threat detection, 
              Zero Trust principles, and cloud security.
            </p>

            {/* Quick Facts */}
            <div 
              className="flex flex-wrap gap-2 mb-10 animate-fade-up"
              style={{ animationDelay: '200ms' }}
            >
              {quickFacts.map((fact, index) => (
                <span key={index} className="swiss-chip-accent flex items-center gap-1.5">
                  <fact.icon size={14} />
                  {fact.label}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div 
              className="flex flex-wrap gap-3 animate-fade-up"
              style={{ animationDelay: '250ms' }}
            >
              <button
                onClick={handleDownloadResume}
                className="btn-swiss-primary"
              >
                <Download size={18} />
                Download Resume
              </button>
              <button
                onClick={handleEmailClick}
                className="btn-swiss-secondary"
              >
                <Mail size={18} />
                Email Me
              </button>
              <button
                onClick={handleGithubClick}
                className="btn-swiss-ghost"
                aria-label="View GitHub profile"
              >
                <Github size={18} />
                GitHub
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
