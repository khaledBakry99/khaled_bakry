
'use client';

import Link from 'next/link';
import ScrollAnimation from '@/components/ScrollAnimations';
import AcademicProjectCard from '@/components/projects/AcademicProjectCard';
import CinemaProjectCard from '@/components/projects/CinemaProjectCard';
import JobScopeProjectCard from '@/components/projects/JobScopeProjectCard';
import BlackMovieProjectCard from '@/components/projects/BlackMovieProjectCard';

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    // Download the PDF file
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
      {/* Hero Section - Ultra Professional */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
        {/* Advanced Animated Background */}
        <div className="absolute inset-0">
          {/* Multiple Gradient Orbs */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-blue-500/30 dark:from-blue-600/40 dark:via-cyan-600/40 dark:to-blue-600/40 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-purple-500/30 dark:from-purple-600/40 dark:via-pink-600/40 dark:to-purple-600/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 dark:from-emerald-600/30 dark:to-teal-600/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-r from-orange-500/20 to-amber-500/20 dark:from-orange-600/30 dark:to-amber-600/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
          
          {/* Rotating Ring */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-blue-400/10 dark:border-blue-500/20 rounded-full animate-spin-slow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-purple-400/10 dark:border-purple-500/20 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }} />
        </div>

        <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
          {/* Profile Image with Advanced Animation */}
          <ScrollAnimation animation="fadeIn">
            <div className="mb-12 flex justify-center">
              <div className="relative group">
                {/* Rotating Gradient Rings */}
                <div className="absolute inset-0 -m-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 dark:from-blue-600 dark:via-cyan-600 dark:to-purple-600 rounded-full opacity-75 blur-xl group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow" />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 dark:from-purple-600 dark:via-pink-600 dark:to-orange-600 rounded-full opacity-50 blur-xl group-hover:opacity-75 transition-opacity duration-500 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '8s' }} />
                </div>
                
                {/* Multiple Border Layers */}
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-600 dark:via-purple-600 dark:to-pink-600 rounded-full animate-gradient-x opacity-75 blur-sm" />
                  <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 dark:from-cyan-600 dark:via-blue-600 dark:to-purple-600 rounded-full animate-gradient-x opacity-50 blur-md" style={{ animationDelay: '0.5s' }} />
                  
                  {/* Image Container */}
                  <div className="relative">
                    <img
                      src="/images/profile.png"
                      alt="Khaled Bakry"
                      className="relative w-56 h-56 md:w-64 md:h-64 rounded-full object-cover border-8 border-white dark:border-slate-900 shadow-2xl group-hover:scale-105 transition-all duration-700 group-hover:shadow-[0_0_60px_rgba(59,130,246,0.5)]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Name with Shimmer Effect */}
          <ScrollAnimation animation="slideUp" delay={200}>
            <div className="mb-10">
              <h1 className="text-7xl md:text-9xl font-black tracking-wider mb-6 relative">
                <span className="relative inline-block">
                  <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 dark:from-blue-400 dark:via-cyan-400 dark:to-purple-400 blur-2xl opacity-50 animate-pulse">
                    KHALED
                  </span>
                  <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 dark:from-blue-400 dark:via-cyan-400 dark:to-purple-400 animate-gradient-x">
                    KHALED
                  </span>
                </span>
                <br />
                <span className="relative inline-block">
                  <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 dark:from-purple-400 dark:via-pink-400 dark:to-orange-400 blur-2xl opacity-50 animate-pulse">
                    BAKRY
                  </span>
                  <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 dark:from-purple-400 dark:via-pink-400 dark:to-orange-400 animate-gradient-x">
                    BAKRY
                  </span>
                </span>
              </h1>
              
              {/* Animated Divider */}
              <div className="relative h-2 w-60 mx-auto mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 rounded-full animate-gradient-x shadow-lg" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 rounded-full blur-md animate-gradient-x opacity-75" />
              </div>
            </div>
          </ScrollAnimation>

          {/* Title & Description */}
          <ScrollAnimation animation="fadeIn" delay={400}>
            <div className="mb-14">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 dark:from-blue-400 dark:via-cyan-400 dark:to-purple-400 animate-gradient-x">
                  Front-End React/Next.js Developer
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed font-medium">
                Building scalable, high-performance web applications with modern technologies and clean architecture
              </p>
            </div>
          </ScrollAnimation>

          {/* Action Buttons */}
          <ScrollAnimation animation="slideUp" delay={600}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button
                onClick={() => scrollToSection('projects')}
                className="group relative px-12 py-6 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 hover:from-blue-600 hover:via-cyan-600 hover:to-blue-700 dark:from-blue-600 dark:via-cyan-600 dark:to-blue-700 dark:hover:from-blue-700 dark:hover:via-cyan-700 dark:hover:to-blue-800 text-white rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.5)] whitespace-nowrap overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 dark:from-cyan-600 dark:via-purple-600 dark:to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-x" />
                <span className="relative flex items-center">
                  <i className="ri-eye-line mr-3 text-2xl" />
                  View My Work
                </span>
              </button>
              
              <button
                onClick={handleDownloadCV}
                className="group relative px-12 py-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border-2 border-blue-400 dark:border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 dark:hover:from-blue-600 dark:hover:to-cyan-600 hover:text-white hover:border-transparent rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 shadow-xl hover:shadow-2xl whitespace-nowrap"
              >
                <span className="flex items-center">
                  <i className="ri-download-line mr-3 text-2xl" />
                  Download CV
                </span>
              </button>
              
              <button
                onClick={() => scrollToSection('contact')}
                className="group relative px-12 py-6 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-600 hover:via-teal-600 hover:to-emerald-700 dark:from-emerald-600 dark:via-teal-600 dark:to-emerald-700 dark:hover:from-emerald-700 dark:hover:via-teal-700 dark:hover:to-emerald-800 text-white rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(16,185,129,0.5)] whitespace-nowrap overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 dark:from-teal-600 dark:via-cyan-600 dark:to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-x" />
                <span className="relative flex items-center">
                  <i className="ri-mail-line mr-3 text-2xl" />
                  Contact Me
                </span>
              </button>
            </div>
          </ScrollAnimation>

          {/* Contact Info Cards */}
          <ScrollAnimation animation="fadeIn" delay={800}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-blue-600 dark:to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative m-[2px] flex items-center justify-center gap-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 border border-blue-100/50 dark:border-slate-700/50 group-hover:-translate-y-1">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-500 to-cyan-500 dark:from-blue-600 dark:to-cyan-600 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <i className="ri-mail-line text-white text-2xl" />
                  </div>
                  <span className="text-sm font-bold text-slate-700 dark:text-slate-200">khaled.bakry.1999@gmail.com</span>
                </div>
              </div>
              
              <div className="group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-600 dark:to-pink-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative m-[2px] flex items-center justify-center gap-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 border border-purple-100/50 dark:border-slate-700/50 group-hover:-translate-y-1">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500 dark:from-purple-600 dark:to-pink-600 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <i className="ri-phone-line text-white text-2xl" />
                  </div>
                  <span className="text-sm font-bold text-slate-700 dark:text-slate-200">+963 945 364 616</span>
                </div>
              </div>
              
              <div className="group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 dark:from-emerald-600 dark:to-teal-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative m-[2px] flex items-center justify-center gap-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 border border-emerald-100/50 dark:border-slate-700/50 group-hover:-translate-y-1">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-emerald-500 to-teal-500 dark:from-emerald-600 dark:to-teal-600 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <i className="ri-map-pin-line text-white text-2xl" />
                  </div>
                  <span className="text-sm font-bold text-slate-700 dark:text-slate-200">Damascus, Syria</span>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Professional Stats Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50/80 via-cyan-50/60 to-indigo-50/80 dark:from-slate-800/80 dark:via-blue-900/60 dark:to-indigo-900/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 via-transparent to-cyan-400/5 dark:from-blue-500/10 dark:via-transparent dark:to-cyan-500/10" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300/20 dark:bg-blue-400/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300/20 dark:bg-cyan-400/30 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {/* Major Projects */}
            <ScrollAnimation animation="slideUp" delay={100}>
              <div className="group relative overflow-hidden h-full">
                {/* Animated Background Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 dark:from-blue-600 dark:via-cyan-600 dark:to-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-x" />
                
                <div className="relative m-[2px] p-10 bg-white dark:bg-slate-800 rounded-2xl backdrop-blur-xl transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-blue-50/50 group-hover:to-cyan-50/50 dark:group-hover:from-blue-950/50 dark:group-hover:to-cyan-950/50 h-full flex flex-col justify-center">
                  {/* Decorative Corner Elements */}
                  <div className="absolute top-3 right-3 w-12 h-12 border-t-2 border-r-2 border-blue-400/30 dark:border-blue-500/30 rounded-tr-xl group-hover:border-blue-500 dark:group-hover:border-blue-400 transition-colors duration-500" />
                  <div className="absolute bottom-3 left-3 w-12 h-12 border-b-2 border-l-2 border-cyan-400/30 dark:border-cyan-500/30 rounded-bl-xl group-hover:border-cyan-500 dark:group-hover:border-cyan-400 transition-colors duration-500" />
                  
                  {/* Animated Circle Background */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 dark:from-blue-500/20 dark:to-cyan-500/20 rounded-full blur-2xl scale-0 group-hover:scale-100 transition-transform duration-500" />
                  
                  <div className="relative">
                    <div className="text-7xl font-black mb-3 text-transparent bg-clip-text bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 dark:from-blue-400 dark:via-cyan-400 dark:to-blue-500 group-hover:scale-110 transition-transform duration-500 inline-block">
                      4+
                    </div>
                    <div className="h-0.5 w-16 bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 mx-auto mb-4 rounded-full group-hover:w-24 transition-all duration-500" />
                    <div className="text-slate-700 dark:text-slate-200 font-bold tracking-wider text-sm uppercase min-h-[2.5rem] flex items-center justify-center">
                      Major Projects
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Years Experience */}
            <ScrollAnimation animation="slideUp" delay={200}>
              <div className="group relative overflow-hidden h-full">
                {/* Animated Background Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 dark:from-purple-600 dark:via-pink-600 dark:to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-x" />
                
                <div className="relative m-[2px] p-10 bg-white dark:bg-slate-800 rounded-2xl backdrop-blur-xl transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-purple-50/50 group-hover:to-pink-50/50 dark:group-hover:from-purple-950/50 dark:group-hover:to-pink-950/50 h-full flex flex-col justify-center">
                  {/* Decorative Corner Elements */}
                  <div className="absolute top-3 right-3 w-12 h-12 border-t-2 border-r-2 border-purple-400/30 dark:border-purple-500/30 rounded-tr-xl group-hover:border-purple-500 dark:group-hover:border-purple-400 transition-colors duration-500" />
                  <div className="absolute bottom-3 left-3 w-12 h-12 border-b-2 border-l-2 border-pink-400/30 dark:border-pink-500/30 rounded-bl-xl group-hover:border-pink-500 dark:group-hover:border-pink-400 transition-colors duration-500" />
                  
                  {/* Animated Circle Background */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-pink-400/10 dark:from-purple-500/20 dark:to-pink-500/20 rounded-full blur-2xl scale-0 group-hover:scale-100 transition-transform duration-500" />
                  
                  <div className="relative">
                    <div className="text-7xl font-black mb-3 text-transparent bg-clip-text bg-gradient-to-br from-purple-600 via-pink-600 to-purple-700 dark:from-purple-400 dark:via-pink-400 dark:to-purple-500 group-hover:scale-110 transition-transform duration-500 inline-block">
                      2+
                    </div>
                    <div className="h-0.5 w-16 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400 mx-auto mb-4 rounded-full group-hover:w-24 transition-all duration-500" />
                    <div className="text-slate-700 dark:text-slate-200 font-bold tracking-wider text-sm uppercase min-h-[2.5rem] flex items-center justify-center">
                      Years Experience
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Technologies */}
            <ScrollAnimation animation="slideUp" delay={300}>
              <div className="group relative overflow-hidden h-full">
                {/* Animated Background Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 dark:from-emerald-600 dark:via-teal-600 dark:to-emerald-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-x" />
                
                <div className="relative m-[2px] p-10 bg-white dark:bg-slate-800 rounded-2xl backdrop-blur-xl transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-emerald-50/50 group-hover:to-teal-50/50 dark:group-hover:from-emerald-950/50 dark:group-hover:to-teal-950/50 h-full flex flex-col justify-center">
                  {/* Decorative Corner Elements */}
                  <div className="absolute top-3 right-3 w-12 h-12 border-t-2 border-r-2 border-emerald-400/30 dark:border-emerald-500/30 rounded-tr-xl group-hover:border-emerald-500 dark:group-hover:border-emerald-400 transition-colors duration-500" />
                  <div className="absolute bottom-3 left-3 w-12 h-12 border-b-2 border-l-2 border-teal-400/30 dark:border-teal-500/30 rounded-bl-xl group-hover:border-teal-500 dark:group-hover:border-teal-400 transition-colors duration-500" />
                  
                  {/* Animated Circle Background */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 dark:from-emerald-500/20 dark:to-teal-500/20 rounded-full blur-2xl scale-0 group-hover:scale-100 transition-transform duration-500" />
                  
                  <div className="relative">
                    <div className="text-7xl font-black mb-3 text-transparent bg-clip-text bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700 dark:from-emerald-400 dark:via-teal-400 dark:to-emerald-500 group-hover:scale-110 transition-transform duration-500 inline-block">
                      30+
                    </div>
                    <div className="h-0.5 w-16 bg-gradient-to-r from-emerald-500 to-teal-500 dark:from-emerald-400 dark:to-teal-400 mx-auto mb-4 rounded-full group-hover:w-24 transition-all duration-500" />
                    <div className="text-slate-700 dark:text-slate-200 font-bold tracking-wider text-sm uppercase min-h-[2.5rem] flex items-center justify-center">
                      Technologies
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Client Satisfaction */}
            <ScrollAnimation animation="slideUp" delay={400}>
              <div className="group relative overflow-hidden h-full">
                {/* Animated Background Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 dark:from-orange-600 dark:via-amber-600 dark:to-orange-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-x" />
                
                <div className="relative m-[2px] p-10 bg-white dark:bg-slate-800 rounded-2xl backdrop-blur-xl transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-orange-50/50 group-hover:to-amber-50/50 dark:group-hover:from-orange-950/50 dark:group-hover:to-amber-950/50 h-full flex flex-col justify-center">
                  {/* Decorative Corner Elements */}
                  <div className="absolute top-3 right-3 w-12 h-12 border-t-2 border-r-2 border-orange-400/30 dark:border-orange-500/30 rounded-tr-xl group-hover:border-orange-500 dark:group-hover:border-orange-400 transition-colors duration-500" />
                  <div className="absolute bottom-3 left-3 w-12 h-12 border-b-2 border-l-2 border-amber-400/30 dark:border-amber-500/30 rounded-bl-xl group-hover:border-amber-500 dark:group-hover:border-amber-400 transition-colors duration-500" />
                  
                  {/* Animated Circle Background */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-orange-400/10 to-amber-400/10 dark:from-orange-500/20 dark:to-amber-500/20 rounded-full blur-2xl scale-0 group-hover:scale-100 transition-transform duration-500" />
                  
                  <div className="relative">
                    <div className="text-7xl font-black mb-3 text-transparent bg-clip-text bg-gradient-to-br from-orange-600 via-amber-600 to-orange-700 dark:from-orange-400 dark:via-amber-400 dark:to-orange-500 group-hover:scale-110 transition-transform duration-500 inline-block">
                      100%
                    </div>
                    <div className="h-0.5 w-16 bg-gradient-to-r from-orange-500 to-amber-500 dark:from-orange-400 dark:to-amber-400 mx-auto mb-4 rounded-full group-hover:w-24 transition-all duration-500" />
                    <div className="text-slate-700 dark:text-slate-200 font-bold tracking-wider text-sm uppercase min-h-[2.5rem] flex items-center justify-center">
                      Client Satisfaction
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Professional Excellence Section - Light Theme Style */}
      <section className="py-28 bg-gradient-to-br from-rose-50/80 via-orange-50/60 to-amber-50/80 dark:from-slate-800/50 dark:via-blue-900/30 dark:to-purple-900/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-400/5 via-transparent to-amber-400/5 dark:from-blue-500/10 dark:via-transparent dark:to-cyan-500/10" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-rose-300/20 dark:bg-blue-400/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-amber-300/20 dark:bg-cyan-400/30 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6">
          <ScrollAnimation animation="slideUp">
            <div className="text-center mb-24">
              <h2 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-700 via-rose-600 to-amber-600 dark:from-slate-200 dark:via-blue-400 dark:to-cyan-400 mb-8">
                Professional Excellence
              </h2>
              <p className="text-2xl text-slate-500 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
                Delivering cutting-edge solutions with modern web technologies and best practices
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Card 1 - Clean Architecture */}
            <ScrollAnimation animation="slideUp" delay={200}>
              <div className="group relative p-12 bg-gradient-to-br from-white via-white to-blue-50/30 dark:from-slate-800 dark:via-slate-800 dark:to-blue-900/20 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.5)] dark:hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.3)] transition-all duration-700 transform hover:-translate-y-4 hover:scale-[1.02] border border-blue-100/50 dark:border-slate-700/50 overflow-hidden cursor-pointer">
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-cyan-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:via-cyan-500/10 group-hover:to-blue-500/10 dark:group-hover:from-blue-500/20 dark:group-hover:via-cyan-500/20 dark:group-hover:to-blue-500/20 transition-all duration-700" />
                
                {/* Animated Border Glow */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 dark:from-blue-500 dark:via-cyan-500 dark:to-blue-500 blur-xl opacity-50 animate-pulse" />
                </div>

                {/* Floating Particles Effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/20 dark:bg-blue-500/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-400/20 dark:bg-cyan-500/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse delay-300" />

                <div className="relative z-10">
                  {/* Icon Container with Advanced Animation */}
                  <div className="relative w-24 h-24 mx-auto mb-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 dark:from-blue-600 dark:to-cyan-600 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-700 shadow-xl" />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-600 dark:from-blue-700 dark:to-cyan-700 rounded-2xl -rotate-6 group-hover:-rotate-12 transition-transform duration-700 shadow-xl" />
                    <div className="relative w-full h-full bg-gradient-to-br from-blue-500 to-cyan-500 dark:from-blue-600 dark:to-cyan-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-700 shadow-2xl">
                      <i className="ri-code-s-slash-line text-4xl text-white group-hover:rotate-[360deg] transition-transform duration-1000" />
                    </div>
                  </div>

                  <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-blue-600 dark:from-slate-100 dark:to-blue-400 mb-6 text-center group-hover:scale-105 transition-transform duration-500">
                    Clean Architecture
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-center leading-relaxed text-lg font-medium group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors duration-500">
                    Writing maintainable, scalable code following industry best practices and modern patterns
                  </p>

                  {/* Decorative Line */}
                  <div className="mt-8 h-1 w-0 group-hover:w-full bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 mx-auto rounded-full transition-all duration-700" />
                </div>
              </div>
            </ScrollAnimation>

            {/* Card 2 - Responsive Design */}
            <ScrollAnimation animation="slideUp" delay={400}>
              <div className="group relative p-12 bg-gradient-to-br from-white via-white to-emerald-50/30 dark:from-slate-800 dark:via-slate-800 dark:to-emerald-900/20 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(16,185,129,0.5)] dark:hover:shadow-[0_20px_60px_-15px_rgba(16,185,129,0.3)] transition-all duration-700 transform hover:-translate-y-4 hover:scale-[1.02] border border-emerald-100/50 dark:border-slate-700/50 overflow-hidden cursor-pointer">
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-teal-500/0 to-emerald-500/0 group-hover:from-emerald-500/10 group-hover:via-teal-500/10 group-hover:to-emerald-500/10 dark:group-hover:from-emerald-500/20 dark:group-hover:via-teal-500/20 dark:group-hover:to-emerald-500/20 transition-all duration-700" />
                
                {/* Animated Border Glow */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400 dark:from-emerald-500 dark:via-teal-500 dark:to-emerald-500 blur-xl opacity-50 animate-pulse" />
                </div>

                {/* Floating Particles Effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-400/20 dark:bg-emerald-500/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-teal-400/20 dark:bg-teal-500/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse delay-300" />

                <div className="relative z-10">
                  {/* Icon Container with Advanced Animation */}
                  <div className="relative w-24 h-24 mx-auto mb-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-500 dark:from-emerald-600 dark:to-teal-600 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-700 shadow-xl" />
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-teal-600 dark:from-emerald-700 dark:to-teal-700 rounded-2xl -rotate-6 group-hover:-rotate-12 transition-transform duration-700 shadow-xl" />
                    <div className="relative w-full h-full bg-gradient-to-br from-emerald-500 to-teal-500 dark:from-emerald-600 dark:to-teal-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-700 shadow-2xl">
                      <i className="ri-smartphone-line text-4xl text-white group-hover:rotate-[360deg] transition-transform duration-1000" />
                    </div>
                  </div>

                  <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-emerald-600 dark:from-slate-100 dark:to-emerald-400 mb-6 text-center group-hover:scale-105 transition-transform duration-500">
                    Responsive Design
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-center leading-relaxed text-lg font-medium group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors duration-500">
                    Creating seamless user experiences across all devices with pixel‑perfect precision
                  </p>

                  {/* Decorative Line */}
                  <div className="mt-8 h-1 w-0 group-hover:w-full bg-gradient-to-r from-emerald-500 to-teal-500 dark:from-emerald-400 dark:to-teal-400 mx-auto rounded-full transition-all duration-700" />
                </div>
              </div>
            </ScrollAnimation>

            {/* Card 3 - Performance Optimization */}
            <ScrollAnimation animation="slideUp" delay={600}>
              <div className="group relative p-12 bg-gradient-to-br from-white via-white to-purple-50/30 dark:from-slate-800 dark:via-slate-800 dark:to-purple-900/20 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(168,85,247,0.5)] dark:hover:shadow-[0_20px_60px_-15px_rgba(168,85,247,0.3)] transition-all duration-700 transform hover:-translate-y-4 hover:scale-[1.02] border border-purple-100/50 dark:border-slate-700/50 overflow-hidden cursor-pointer">
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:via-pink-500/10 group-hover:to-purple-500/10 dark:group-hover:from-purple-500/20 dark:group-hover:via-pink-500/20 dark:group-hover:to-purple-500/20 transition-all duration-700" />
                
                {/* Animated Border Glow */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 dark:from-purple-500 dark:via-pink-500 dark:to-purple-500 blur-xl opacity-50 animate-pulse" />
                </div>

                {/* Floating Particles Effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-400/20 dark:bg-purple-500/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-400/20 dark:bg-pink-500/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse delay-300" />

                <div className="relative z-10">
                  {/* Icon Container with Advanced Animation */}
                  <div className="relative w-24 h-24 mx-auto mb-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 dark:from-purple-600 dark:to-pink-600 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-700 shadow-xl" />
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 dark:from-purple-700 dark:to-pink-700 rounded-2xl -rotate-6 group-hover:-rotate-12 transition-transform duration-700 shadow-xl" />
                    <div className="relative w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 dark:from-purple-600 dark:to-pink-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-700 shadow-2xl">
                      <i className="ri-rocket-line text-4xl text-white group-hover:rotate-[360deg] transition-transform duration-1000" />
                    </div>
                  </div>

                  <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-purple-600 dark:from-slate-100 dark:to-purple-400 mb-6 text-center group-hover:scale-105 transition-transform duration-500">
                    Performance Optimization
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-center leading-relaxed text-lg font-medium group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors duration-500">
                    Optimizing applications for lightning‑fast performance and exceptional user experience
                  </p>

                  {/* Decorative Line */}
                  <div className="mt-8 h-1 w-0 group-hover:w-full bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400 mx-auto rounded-full transition-all duration-700" />
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-28 bg-gradient-to-br from-slate-50/80 via-blue-50/40 to-cyan-50/60 dark:from-slate-900/80 dark:via-blue-900/40 dark:to-cyan-900/60 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300/10 dark:bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300/10 dark:bg-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
            {/* Project 1 - Academic */}
            <ScrollAnimation animation="slideLeft" delay={200}>
              <AcademicProjectCard />
            </ScrollAnimation>

            {/* Project 2 - Cinema */}
            <ScrollAnimation animation="slideRight" delay={400}>
              <CinemaProjectCard />
            </ScrollAnimation>

            {/* Project 3 - JobScope */}
            <ScrollAnimation animation="slideLeft" delay={600}>
              <JobScopeProjectCard />
            </ScrollAnimation>

            {/* Project 4 - Black Movie */}
            <ScrollAnimation animation="slideRight" delay={800}>
              <BlackMovieProjectCard />
            </ScrollAnimation>
          </div>

          <ScrollAnimation animation="fadeIn" delay={1000}>
            <div className="text-center">
              <Link
                href="/projects"
                className="group relative inline-block overflow-hidden rounded-3xl"
              >
                {/* Animated Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl animate-gradient-x" />
                
                <div className="relative m-[3px] px-14 py-7 bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 dark:from-blue-700 dark:via-cyan-700 dark:to-purple-700 rounded-3xl overflow-hidden">
                  {/* Animated Background Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 dark:from-purple-700 dark:via-pink-700 dark:to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-gradient-x" />
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  
                  <span className="relative flex items-center text-white font-black text-xl tracking-wide">
                    <i className="ri-grid-line mr-4 text-2xl group-hover:rotate-180 transition-transform duration-700"></i>
                    View All Projects
                    <i className="ri-arrow-right-line ml-4 text-2xl group-hover:translate-x-2 transition-transform duration-500"></i>
                  </span>
                </div>
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact Preview - Ultra Modern Design */}
      <section id="contact" className="relative py-32 overflow-hidden">
        {/* Animated Background with Mesh Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 dark:from-slate-950 dark:via-blue-950 dark:to-purple-950">
          {/* Animated Gradient Orbs */}
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          <ScrollAnimation animation="fadeIn">
            {/* Main Card Container */}
            <div className="relative group">
              {/* Animated Border Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-[3rem] opacity-75 group-hover:opacity-100 blur-xl transition-opacity duration-700 animate-gradient-x" />
              
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 dark:from-white/5 dark:to-white/0 backdrop-blur-2xl rounded-[3rem] border border-white/20 dark:border-white/10 p-16 overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-full blur-3xl" />
                
                {/* Content */}
                <div className="relative text-center">
                  {/* Icon Badge */}
                  <ScrollAnimation animation="slideUp" delay={200}>
                    <div className="inline-flex items-center justify-center mb-8">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-75 animate-pulse" />
                        <div className="relative w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl">
                          <i className="ri-rocket-2-line text-4xl text-white" />
                        </div>
                      </div>
                    </div>
                  </ScrollAnimation>

                  {/* Heading */}
                  <ScrollAnimation animation="slideUp" delay={300}>
                    <h2 className="text-5xl md:text-7xl font-black mb-6 relative inline-block">
                      <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 blur-2xl opacity-50 animate-pulse">
                        Ready to Build Something Amazing?
                      </span>
                      <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-x">
                        Ready to Build Something Amazing?
                      </span>
                    </h2>
                  </ScrollAnimation>

                  {/* Description */}
                  <ScrollAnimation animation="fadeIn" delay={400}>
                    <p className="text-xl md:text-2xl text-blue-200 dark:text-blue-300 mb-12 leading-relaxed max-w-3xl mx-auto font-medium">
                      Let&apos;s collaborate and bring your vision to life with cutting‑edge technology
                    </p>
                  </ScrollAnimation>

                  {/* Buttons */}
                  <ScrollAnimation animation="slideUp" delay={500}>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                      {/* Get In Touch Button */}
                      <Link
                        href="/contact"
                        className="group relative inline-block overflow-hidden rounded-3xl"
                      >
                        {/* Animated Border */}
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 rounded-3xl animate-gradient-x" />
                        
                        <div className="relative m-[3px] px-14 py-7 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-700 dark:via-teal-700 dark:to-cyan-700 rounded-3xl overflow-hidden">
                          {/* Animated Background Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 dark:from-cyan-700 dark:via-blue-700 dark:to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-gradient-x" />
                          
                          {/* Shine Effect */}
                          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                          
                          {/* Floating Particles */}
                          <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                          <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" style={{ animationDelay: '0.3s' }} />
                          
                          <span className="relative flex items-center text-white font-black text-xl tracking-wide">
                            <div className="relative mr-4">
                              <i className="ri-mail-line text-3xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500"></i>
                              <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ping" />
                            </div>
                            Get In Touch
                            <i className="ri-arrow-right-line ml-4 text-2xl group-hover:translate-x-2 transition-transform duration-500"></i>
                          </span>
                        </div>
                      </Link>

                      {/* View GitHub Button */}
                      <a
                        href="https://github.com/khaledBakry99"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-block overflow-hidden rounded-3xl"
                      >
                        {/* Animated Border */}
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-x" />
                        
                        <div className="relative m-[3px] px-14 py-7 bg-gradient-to-r from-purple-600/90 via-pink-600/90 to-purple-600/90 dark:from-purple-700/90 dark:via-pink-700/90 dark:to-purple-700/90 backdrop-blur-xl rounded-3xl border border-purple-400/30 dark:border-purple-500/30 group-hover:border-pink-400/50 dark:group-hover:border-pink-500/50 transition-all duration-500 overflow-hidden">
                          {/* Animated Background Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 dark:from-pink-700 dark:via-purple-700 dark:to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-gradient-x" />
                          
                          {/* Shine Effect */}
                          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                          
                          {/* Floating Particles */}
                          <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                          <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" style={{ animationDelay: '0.3s' }} />
                          
                          <span className="relative flex items-center text-white font-black text-xl tracking-wide">
                            <i className="ri-github-fill text-3xl mr-4 group-hover:scale-110 group-hover:rotate-[360deg] transition-all duration-700"></i>
                            View GitHub
                            <i className="ri-external-link-line ml-4 text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500"></i>
                          </span>
                        </div>
                      </a>
                    </div>
                  </ScrollAnimation>

                  {/* Social Links */}
                  <ScrollAnimation animation="fadeIn" delay={600}>
                    <div className="mt-12 flex items-center justify-center gap-6">
                      <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/30" />
                      <div className="flex gap-4">
                        <a href="https://github.com/khaledBakry99" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300">
                          <i className="ri-github-fill text-xl" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300">
                          <i className="ri-linkedin-fill text-xl" />
                        </a>
                        <a href="mailto:khaled.bakry.1999@gmail.com" className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300">
                          <i className="ri-mail-fill text-xl" />
                        </a>
                      </div>
                      <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/30" />
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
