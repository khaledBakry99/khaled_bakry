'use client';

import dynamic from 'next/dynamic';
import HeroSection from './home/components/HeroSection';
import StatsSection from './home/components/StatsSection';

// Lazy load sections that are below the fold
const ExcellenceSection = dynamic(() => import('./home/components/ExcellenceSection'), {
  loading: () => <div className="min-h-screen" />
});

const ProjectsSection = dynamic(() => import('./home/components/ProjectsSection'), {
  loading: () => <div className="min-h-screen" />
});

const ContactSection = dynamic(() => import('./home/components/ContactSection'), {
  loading: () => <div className="min-h-screen" />
});

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    try {
      const link = document.createElement('a');
      link.href = '/Khaled_Bakry_CV.pdf';
      link.download = 'Khaled_Bakry_CV.pdf';
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      setTimeout(() => {
        document.body.removeChild(link);
      }, 100);
    } catch (error) {
      console.error('Error downloading CV:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40 dark:from-slate-900 dark:via-blue-900/50 dark:to-indigo-900/60">
      <HeroSection scrollToSection={scrollToSection} handleDownloadCV={handleDownloadCV} />
      <StatsSection />
      <ExcellenceSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
