'use client';

import Image from 'next/image';
import ScrollAnimation from '@/components/ScrollAnimations';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
  handleDownloadCV: () => void;
}

export default function HeroSection({ scrollToSection, handleDownloadCV }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Advanced Animated Background */}
      <div className="absolute inset-0">
        {/* Multiple Gradient Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-blue-500/30 dark:from-blue-600/40 dark:via-cyan-600/40 dark:to-blue-600/40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-purple-500/30 dark:from-purple-600/40 dark:via-pink-600/40 dark:to-purple-600/40 rounded-full blur-3xl animate-pulse animation-delay-1000" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 dark:from-emerald-600/30 dark:to-teal-600/30 rounded-full blur-3xl animate-pulse animation-delay-2000" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-r from-orange-500/20 to-amber-500/20 dark:from-orange-600/30 dark:to-amber-600/30 rounded-full blur-3xl animate-pulse animation-delay-1500" />
        
        {/* Rotating Ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-blue-400/10 dark:border-blue-500/20 rounded-full animate-spin-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-purple-400/10 dark:border-purple-500/20 rounded-full animate-spin-slow [animation-direction:reverse]" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
        {/* Profile Image with Advanced Animation */}
        <ScrollAnimation animation="fadeIn">
          <div className="mb-12 flex justify-center">
            <div className="relative group">
              {/* Rotating Gradient Rings */}
              <div className="absolute inset-0 -m-4">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 dark:from-blue-600 dark:via-cyan-600 dark:to-purple-600 rounded-full opacity-75 blur-xl group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 dark:from-purple-600 dark:via-pink-600 dark:to-orange-600 rounded-full opacity-50 blur-xl group-hover:opacity-75 transition-opacity duration-500 animate-spin-slow [animation-direction:reverse] [animation-duration:8s]" />
              </div>
              
              {/* Multiple Border Layers */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-600 dark:via-purple-600 dark:to-pink-600 rounded-full animate-gradient-x opacity-75 blur-sm" />
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 dark:from-cyan-600 dark:via-blue-600 dark:to-purple-600 rounded-full animate-gradient-x opacity-50 blur-md animation-delay-500" />
                
                {/* Image Container */}
                <div className="relative">
                  <Image
                    src="/images/profile.png"
                    alt="Khaled Bakry"
                    width={256}
                    height={256}
                    className="relative w-56 h-56 md:w-64 md:h-64 rounded-full object-cover border-8 border-white dark:border-slate-900 shadow-2xl group-hover:scale-105 transition-all duration-700 group-hover:shadow-[0_0_60px_rgba(59,130,246,0.5)]"
                    priority
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
  );
}
