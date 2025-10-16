'use client';

import ScrollAnimation from '@/components/ScrollAnimations';

export default function ExcellenceSection() {
  return (
    <section className="py-28 bg-gradient-to-br from-rose-50/80 via-orange-50/60 to-amber-50/80 dark:from-slate-800/50 dark:via-blue-900/30 dark:to-purple-900/40 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-rose-400/5 via-transparent to-amber-400/5 dark:from-blue-500/10 dark:via-transparent dark:to-cyan-500/10" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-rose-300/20 dark:bg-blue-400/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-amber-300/20 dark:bg-cyan-400/30 rounded-full blur-3xl animate-pulse animation-delay-1000" />
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
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-cyan-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:via-cyan-500/10 group-hover:to-blue-500/10 dark:group-hover:from-blue-500/20 dark:group-hover:via-cyan-500/20 dark:group-hover:to-blue-500/20 transition-all duration-700" />
              
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 dark:from-blue-500 dark:via-cyan-500 dark:to-blue-500 blur-xl opacity-50 animate-pulse" />
              </div>

              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/20 dark:bg-blue-500/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-400/20 dark:bg-cyan-500/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse delay-300" />

              <div className="relative z-10">
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

                <div className="mt-8 h-1 w-0 group-hover:w-full bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 mx-auto rounded-full transition-all duration-700" />
              </div>
            </div>
          </ScrollAnimation>

          {/* Card 2 - Responsive Design */}
          <ScrollAnimation animation="slideUp" delay={400}>
            <div className="group relative p-12 bg-gradient-to-br from-white via-white to-emerald-50/30 dark:from-slate-800 dark:via-slate-800 dark:to-emerald-900/20 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(16,185,129,0.5)] dark:hover:shadow-[0_20px_60px_-15px_rgba(16,185,129,0.3)] transition-all duration-700 transform hover:-translate-y-4 hover:scale-[1.02] border border-emerald-100/50 dark:border-slate-700/50 overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-teal-500/0 to-emerald-500/0 group-hover:from-emerald-500/10 group-hover:via-teal-500/10 group-hover:to-emerald-500/10 dark:group-hover:from-emerald-500/20 dark:group-hover:via-teal-500/20 dark:group-hover:to-emerald-500/20 transition-all duration-700" />
              
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400 dark:from-emerald-500 dark:via-teal-500 dark:to-emerald-500 blur-xl opacity-50 animate-pulse" />
              </div>

              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-400/20 dark:bg-emerald-500/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-teal-400/20 dark:bg-teal-500/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse delay-300" />

              <div className="relative z-10">
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

                <div className="mt-8 h-1 w-0 group-hover:w-full bg-gradient-to-r from-emerald-500 to-teal-500 dark:from-emerald-400 dark:to-teal-400 mx-auto rounded-full transition-all duration-700" />
              </div>
            </div>
          </ScrollAnimation>

          {/* Card 3 - Performance Optimization */}
          <ScrollAnimation animation="slideUp" delay={600}>
            <div className="group relative p-12 bg-gradient-to-br from-white via-white to-purple-50/30 dark:from-slate-800 dark:via-slate-800 dark:to-purple-900/20 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(168,85,247,0.5)] dark:hover:shadow-[0_20px_60px_-15px_rgba(168,85,247,0.3)] transition-all duration-700 transform hover:-translate-y-4 hover:scale-[1.02] border border-purple-100/50 dark:border-slate-700/50 overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:via-pink-500/10 group-hover:to-purple-500/10 dark:group-hover:from-purple-500/20 dark:group-hover:via-pink-500/20 dark:group-hover:to-purple-500/20 transition-all duration-700" />
              
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 dark:from-purple-500 dark:via-pink-500 dark:to-purple-500 blur-xl opacity-50 animate-pulse" />
              </div>

              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-400/20 dark:bg-purple-500/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-400/20 dark:bg-pink-500/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse delay-300" />

              <div className="relative z-10">
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

                <div className="mt-8 h-1 w-0 group-hover:w-full bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400 mx-auto rounded-full transition-all duration-700" />
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
