import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { useRecruiterMode } from '@/contexts/RecruiterModeContext';

interface SkillGroup {
  category: string;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  {
    category: 'Security Monitoring',
    skills: ['Splunk', 'QRadar', 'AlienVault', 'ArcSight'],
  },
  {
    category: 'Threat Detection',
    skills: ['IDS', 'IPS', 'EDR', 'Wireshark', 'Burp Suite'],
  },
  {
    category: 'Vulnerability Management',
    skills: ['Nessus', 'Qualys', 'OpenVAS'],
  },
  {
    category: 'Cloud Security',
    skills: ['AWS Security Hub', 'Azure Security Center', 'CIS Benchmarks'],
  },
  {
    category: 'Identity & Access Management',
    skills: ['Azure AD', 'Okta', 'RBAC', 'MFA', 'Active Directory'],
  },
  {
    category: 'Compliance',
    skills: ['NIST', 'ISO 27001', 'PCI DSS', 'SOX', 'HIPAA'],
  },
  {
    category: 'Automation',
    skills: ['Python', 'PowerShell', 'Bash'],
  },
  {
    category: 'Governance & Collaboration',
    skills: ['JIRA', 'Confluence', 'ServiceNow', 'Risk Assessment'],
  },
];

export function SkillsSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const { isRecruiterMode } = useRecruiterMode();

  const filteredGroups = useMemo(() => {
    if (!searchTerm) return skillGroups;

    const lowerSearch = searchTerm.toLowerCase();
    return skillGroups
      .map(group => ({
        ...group,
        skills: group.skills.filter(skill => 
          skill.toLowerCase().includes(lowerSearch)
        ),
      }))
      .filter(group => 
        group.skills.length > 0 || 
        group.category.toLowerCase().includes(lowerSearch)
      );
  }, [searchTerm]);

  // In recruiter mode, show only top skills
  const displayGroups = isRecruiterMode 
    ? skillGroups.slice(0, 4) 
    : filteredGroups;

  return (
    <section id="skills" className="section-spacing">
      <div className="swiss-container">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
          <h2 className="text-title font-semibold text-foreground">
            Skills
          </h2>

          {!isRecruiterMode && (
            <div className="relative w-full sm:w-64">
              <Search 
                size={16} 
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" 
              />
              <input
                type="text"
                placeholder="Filter skills…"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm bg-secondary border border-border rounded-md 
                         placeholder:text-muted-foreground text-foreground
                         focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
                aria-label="Filter skills"
              />
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayGroups.map((group, index) => (
            <div key={index}>
              <h3 className="text-sm font-semibold text-foreground mb-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {(isRecruiterMode ? group.skills.slice(0, 3) : group.skills).map((skill, sIndex) => (
                  <span key={sIndex} className="swiss-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {!isRecruiterMode && filteredGroups.length === 0 && (
          <p className="text-center text-muted-foreground py-8">
            No skills match "{searchTerm}"
          </p>
        )}
      </div>
    </section>
  );
}
