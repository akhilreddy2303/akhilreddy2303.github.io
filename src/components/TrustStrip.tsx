import React from 'react';

export function TrustStrip() {
  return (
    <section className="py-12 border-y border-border">
      <div className="swiss-container">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {/* JPMorgan Chase */}
          <div className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
            <div className="w-10 h-10 bg-muted rounded flex items-center justify-center">
              <span className="text-lg font-bold text-muted-foreground">JP</span>
            </div>
            <span className="text-sm font-medium text-muted-foreground">
              JPMorgan Chase
            </span>
          </div>

          {/* Gannon University */}
          <div className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
            <div className="w-10 h-10 bg-muted rounded flex items-center justify-center">
              <span className="text-lg font-bold text-muted-foreground">GU</span>
            </div>
            <span className="text-sm font-medium text-muted-foreground">
              Gannon University
            </span>
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Experience across financial services and enterprise security environments.
        </p>
      </div>
    </section>
  );
}
