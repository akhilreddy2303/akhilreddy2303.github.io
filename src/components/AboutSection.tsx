import React from 'react';
import { useRecruiterMode } from '@/contexts/RecruiterModeContext';

export function AboutSection() {
  const { isRecruiterMode } = useRecruiterMode();

  return (
    <section id="about" className="section-spacing">
      <div className="swiss-container">
        <div className="swiss-grid">
          <div className="col-span-4 md:col-span-6 lg:col-span-7">
            <h2 className="text-title font-semibold text-foreground mb-6">
              About
            </h2>

            {isRecruiterMode ? (
              <p className="text-body text-muted-foreground mb-4">
                Experienced cybersecurity analyst specializing in SOC operations, vulnerability 
                management, cloud security (AWS & Azure), and IAM. Background in financial 
                services and enterprise environments.
              </p>
            ) : (
              <>
                <p className="text-body text-muted-foreground mb-4">
                  I'm a cybersecurity analyst with expertise in security operations center (SOC) 
                  monitoring, SIEM administration, and threat detection. My work focuses on 
                  protecting enterprise environments through proactive vulnerability management 
                  and incident response.
                </p>
                <p className="text-body text-muted-foreground mb-4">
                  With experience in cloud security across AWS and Azure, I implement and maintain 
                  security controls aligned with CIS benchmarks. I specialize in identity and 
                  access management, ensuring organizations follow least-privilege principles 
                  and maintain compliance with frameworks like NIST, ISO 27001, and PCI DSS.
                </p>
                <p className="text-body text-muted-foreground mb-4">
                  My approach combines technical expertise with a strong understanding of 
                  business risk, allowing me to prioritize security initiatives that deliver 
                  real value to organizations in the financial services and enterprise sectors.
                </p>
              </>
            )}

            <p className="text-sm text-primary font-medium italic mt-6">
              "Focused on reducing real risk, not just generating alerts."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
