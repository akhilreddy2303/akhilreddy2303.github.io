import React from 'react';
import { ArrowUp, Github } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleBackToTop = () => {
    console.log('[Analytics] Back to top clicked');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGithubClick = () => {
    console.log('[Analytics] GitHub footer clicked');
    window.open('https://github.com/akhilreddy2303', '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="py-8 border-t border-border">
      <div className="swiss-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Akhil Reddy Muduganti. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={handleGithubClick}
              className="btn-swiss-ghost text-muted-foreground"
              aria-label="View GitHub profile"
            >
              <Github size={18} />
            </button>
            <button
              onClick={handleBackToTop}
              className="btn-swiss-ghost text-muted-foreground"
              aria-label="Back to top"
            >
              <ArrowUp size={18} />
              Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
