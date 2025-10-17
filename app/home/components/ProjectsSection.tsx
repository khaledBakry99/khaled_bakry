'use client';

import Link from 'next/link';
import ScrollAnimation from '@/components/ScrollAnimations';
import SyriaExpressProjectCard from '@/components/projects/SyriaExpressProjectCard';
import AcademicProjectCard from '@/components/projects/AcademicProjectCard';
import CinemaProjectCard from '@/components/projects/CinemaProjectCard';
import JobScopeProjectCard from '@/components/projects/JobScopeProjectCard';
import BlackMovieProjectCard from '@/components/projects/BlackMovieProjectCard';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-28 bg-gradient-to-br from-slate-50/80 via-blue-50/40 to-cyan-50/60 dark:from-slate-900/80 dark:via-blue-900/40 dark:to-cyan-900/60 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300/10 dark:bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300/10 dark:bg-cyan-400/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-6">
        <ScrollAnimation animation="slideUp">
          <div className="text-center mb-24">
            <h2 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-700 via-blue-600 to-cyan-600 dark:from-slate-200 dark:via-blue-400 dark:to-cyan-400 mb-8">
              Featured Projects
            </h2>
            <p className="text-2xl text-slate-500 dark:text-slate-400">
              A showcase of innovative solutions and technical expertise
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {/* Project 1 - Syria Express */}
          <ScrollAnimation animation="slideLeft" delay={200}>
            <SyriaExpressProjectCard />
          </ScrollAnimation>

          {/* Project 2 - Cinema */}
          <ScrollAnimation animation="slideRight" delay={400}>
            <CinemaProjectCard />
          </ScrollAnimation>

          {/* Project 3 - JobScope */}
          <ScrollAnimation animation="slideLeft" delay={600}>
            <JobScopeProjectCard />
          </ScrollAnimation>

          {/* Project 4 - Academic */}
          <ScrollAnimation animation="slideRight" delay={800}>
            <AcademicProjectCard />
          </ScrollAnimation>
        </div>

        <ScrollAnimation animation="fadeIn" delay={1000}>
          <div className="text-center">
            <Link
              href="/projects"
              className="group relative inline-block overflow-hidden rounded-2xl"
            >
              {/* Animated Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl animate-gradient-x" />
              
              <div className="relative m-[3px] px-10 py-4 bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 dark:from-blue-700 dark:via-cyan-700 dark:to-purple-700 rounded-2xl overflow-hidden">
                {/* Animated Background Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 dark:from-purple-700 dark:via-pink-700 dark:to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-gradient-x" />
                
                {/* Shine Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                
                <span className="relative flex items-center text-white font-bold text-base tracking-wide">
                  <i className="ri-grid-line mr-3 text-xl group-hover:rotate-180 transition-transform duration-700"></i>
                  View All Projects
                  <i className="ri-arrow-right-line ml-3 text-xl group-hover:translate-x-2 transition-transform duration-500"></i>
                </span>
              </div>
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
