import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useRecruiterMode } from '@/contexts/RecruiterModeContext';

interface Project {
  title: string;
  subtitle: string;
  description: string[];
  tech: string[];
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: 'Zero Trust Security in Permissioned Blockchain',
    subtitle: 'Enterprise-focused Zero Trust framework for Hyperledger Fabric environments.',
    description: [
      'Designed an enterprise Zero Trust security architecture for permissioned blockchain using Hyperledger Fabric',
      'Analyzed MSP, PKI, RBAC, ACLs, channels, and private data collections',
      'Applied Zero Trust principles: least privilege, continuous verification, identity-centric access control',
      'Identified risks: insider threats, over-privileged access, misconfigurations, lateral movement',
      'Proposed Zero Trust–aligned controls improving identity governance, auditability, and regulatory compliance',
    ],
    tech: ['Hyperledger Fabric', 'Zero Trust Architecture', 'PKI', 'RBAC', 'IAM', 'Blockchain Security', 'Enterprise Security'],
    githubUrl: 'https://github.com/akhilreddy2303/zero-trust-permissioned-blockchain',
  },
  {
    title: 'Incident Response & Automation Platform',
    subtitle: 'SOC automation and monitoring solution for enterprise security operations.',
    description: [
      'Centralized SOC monitoring using Splunk',
      'Python automation for triage and reporting',
      'Improved detection accuracy by 30%',
      'Reduced manual effort by 15+ hours weekly',
      'IAM enforcement with RBAC and MFA',
      'AWS & Azure security posture improvements',
    ],
    tech: ['Splunk', 'Python', 'AWS', 'Azure', 'RBAC', 'MFA', 'SOC'],
  },
];

export function ProjectsSection() {
  const { isRecruiterMode } = useRecruiterMode();

  const handleGithubClick = (url: string, title: string) => {
    console.log('[Analytics] Project GitHub clicked:', title);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="section-spacing bg-secondary/30">
      <div className="swiss-container">
        <h2 className="text-title font-semibold text-foreground mb-10">
          Featured Projects
        </h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <article key={index} className="swiss-card">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-subtitle font-semibold text-foreground mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-primary">
                    {project.subtitle}
                  </p>
                </div>
                {project.githubUrl && (
                  <button
                    onClick={() => handleGithubClick(project.githubUrl!, project.title)}
                    className="btn-swiss-secondary flex-shrink-0"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github size={16} />
                    View on GitHub
                    <ExternalLink size={14} />
                  </button>
                )}
              </div>

              {!isRecruiterMode && (
                <ul className="space-y-2 mb-6">
                  {project.description.map((item, dIndex) => (
                    <li
                      key={dIndex}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, tIndex) => (
                  <span key={tIndex} className="swiss-chip">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
