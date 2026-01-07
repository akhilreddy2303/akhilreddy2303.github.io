import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { ProofSnapshot } from '@/components/ProofSnapshot';
import { AboutSection } from '@/components/AboutSection';
import { PhilosophySection } from '@/components/PhilosophySection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { SkillsSection } from '@/components/SkillsSection';
import { EducationSection } from '@/components/EducationSection';
import { TrustStrip } from '@/components/TrustStrip';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Akhil Reddy Muduganti",
  "jobTitle": "Cybersecurity Analyst",
  "url": "https://akhilreddy.dev",
  "sameAs": [
    "https://github.com/akhilreddy2303"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Erie",
    "addressRegion": "PA",
    "addressCountry": "US"
  },
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "Gannon University"
  },
  "knowsAbout": [
    "Cybersecurity",
    "SIEM",
    "Vulnerability Management",
    "Cloud Security",
    "Zero Trust Architecture",
    "Identity and Access Management"
  ]
};

export default function Index() {
  return (
    <>
      <Helmet>
        <title>Akhil Reddy Muduganti | Cybersecurity Analyst</title>
        <meta 
          name="description" 
          content="Cybersecurity Analyst specializing in threat detection, Zero Trust principles, and cloud security. 3+ years of experience in SOC operations, vulnerability management, and enterprise security." 
        />
        <meta name="keywords" content="cybersecurity analyst, security operations, SIEM, vulnerability management, cloud security, AWS, Azure, Zero Trust, IAM" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Akhil Reddy Muduganti | Cybersecurity Analyst" />
        <meta property="og:description" content="Designing and securing enterprise systems through threat detection, Zero Trust principles, and cloud security." />
        <meta property="og:url" content="https://akhilreddy.dev" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Akhil Reddy Muduganti | Cybersecurity Analyst" />
        <meta name="twitter:description" content="Designing and securing enterprise systems through threat detection, Zero Trust principles, and cloud security." />
        
        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify(personSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <HeroSection />
          <ProofSnapshot />
          <AboutSection />
          <PhilosophySection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <EducationSection />
          <TrustStrip />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
