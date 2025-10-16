'use client';

import Link from 'next/link';
import ScrollAnimation from '@/components/ScrollAnimations';

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Animated Background with Mesh Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 dark:from-slate-900 dark:via-blue-900 dark:to-purple-900">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-400/20 to-cyan-400/20 dark:from-blue-500/30 dark:to-cyan-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-400/20 to-pink-400/20 dark:from-purple-500/30 dark:to-pink-500/30 rounded-full blur-3xl animate-pulse animation-delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-emerald-400/15 to-teal-400/15 dark:from-emerald-500/20 dark:to-teal-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000" />
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 grid-pattern" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <ScrollAnimation animation="fadeIn">
          {/* Main Card Container */}
          <div className="relative group">
            {/* Animated Border Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-[3rem] opacity-75 group-hover:opacity-100 blur-xl transition-opacity duration-700 animate-gradient-x" />
            
            <div className="relative bg-gradient-to-br from-white/90 to-white/80 dark:from-white/10 dark:to-white/5 backdrop-blur-2xl rounded-[2rem] border border-blue-200/40 dark:border-white/20 p-8 md:p-12 overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/15 to-purple-400/15 dark:from-blue-500/20 dark:to-purple-500/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-emerald-400/15 to-cyan-400/15 dark:from-emerald-500/20 dark:to-cyan-500/20 rounded-full blur-3xl" />
              
              {/* Content */}
              <div className="relative text-center">
                {/* Icon Badge */}
                <ScrollAnimation animation="slideUp" delay={200}>
                  <div className="inline-flex items-center justify-center mb-8">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-75 animate-pulse" />
                      <div className="relative w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-2xl">
                        <i className="ri-rocket-2-line text-3xl text-white" />
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>

                {/* Heading */}
                <ScrollAnimation animation="slideUp" delay={300}>
                  <h2 className="text-3xl md:text-5xl font-black mb-4 relative inline-block">
                    <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 blur-2xl opacity-50 animate-pulse">
                      Ready to Build Something Amazing?
                    </span>
                    <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 animate-gradient-x">
                      Ready to Build Something Amazing?
                    </span>
                  </h2>
                </ScrollAnimation>

                {/* Description */}
                <ScrollAnimation animation="fadeIn" delay={400}>
                  <p className="text-base md:text-lg text-slate-700 dark:text-blue-200 mb-8 leading-relaxed max-w-2xl mx-auto font-medium">
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
                      
                      <div className="relative m-[3px] px-8 py-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-700 dark:via-teal-700 dark:to-cyan-700 rounded-2xl overflow-hidden">
                        {/* Animated Background Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 dark:from-cyan-700 dark:via-blue-700 dark:to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-gradient-x" />
                        
                        {/* Shine Effect */}
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                        
                        {/* Floating Particles */}
                        <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                        <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse animation-delay-300" />
                        
                        <span className="relative flex items-center text-white font-bold text-base tracking-wide">
                          <div className="relative mr-4">
                            <i className="ri-mail-line text-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500"></i>
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ping" />
                          </div>
                          Get In Touch
                          <i className="ri-arrow-right-line ml-3 text-xl group-hover:translate-x-2 transition-transform duration-500"></i>
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
                      
                      <div className="relative m-[3px] px-8 py-4 bg-gradient-to-r from-purple-600/90 via-pink-600/90 to-purple-600/90 dark:from-purple-700/90 dark:via-pink-700/90 dark:to-purple-700/90 backdrop-blur-xl rounded-2xl border border-purple-400/30 dark:border-purple-500/30 group-hover:border-pink-400/50 dark:group-hover:border-pink-500/50 transition-all duration-500 overflow-hidden">
                        {/* Animated Background Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 dark:from-pink-700 dark:via-purple-700 dark:to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-gradient-x" />
                        
                        {/* Shine Effect */}
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                        
                        {/* Floating Particles */}
                        <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                        <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse animation-delay-300" />
                        
                        <span className="relative flex items-center text-white font-bold text-base tracking-wide">
                          <i className="ri-github-fill text-2xl mr-3 group-hover:scale-110 group-hover:rotate-[360deg] transition-all duration-700"></i>
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
                    <div className="h-px w-16 bg-gradient-to-r from-transparent to-slate-400/30 dark:to-white/30" />
                    <div className="flex gap-4">
                      <a href="https://github.com/khaledBakry99" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/60 dark:bg-white/10 backdrop-blur-lg border border-blue-300/40 dark:border-white/20 flex items-center justify-center text-slate-700 dark:text-white hover:bg-white/80 dark:hover:bg-white/20 hover:scale-110 transition-all duration-300">
                        <i className="ri-github-fill text-xl" />
                      </a>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/60 dark:bg-white/10 backdrop-blur-lg border border-blue-300/40 dark:border-white/20 flex items-center justify-center text-slate-700 dark:text-white hover:bg-white/80 dark:hover:bg-white/20 hover:scale-110 transition-all duration-300">
                        <i className="ri-linkedin-fill text-xl" />
                      </a>
                      <a href="mailto:khaled.bakry.1999@gmail.com" className="w-12 h-12 rounded-xl bg-white/60 dark:bg-white/10 backdrop-blur-lg border border-blue-300/40 dark:border-white/20 flex items-center justify-center text-slate-700 dark:text-white hover:bg-white/80 dark:hover:bg-white/20 hover:scale-110 transition-all duration-300">
                        <i className="ri-mail-fill text-xl" />
                      </a>
                    </div>
                    <div className="h-px w-16 bg-gradient-to-l from-transparent to-slate-400/30 dark:to-white/30" />
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
