'use client';

import ScrollAnimation from '@/components/ScrollAnimations';

export default function StatsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50/80 via-cyan-50/60 to-indigo-50/80 dark:from-slate-800/80 dark:via-blue-900/60 dark:to-indigo-900/80 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 via-transparent to-cyan-400/5 dark:from-blue-500/10 dark:via-transparent dark:to-cyan-500/10" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300/20 dark:bg-blue-400/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300/20 dark:bg-cyan-400/30 rounded-full blur-3xl animate-pulse animation-delay-1000" />
      </div>
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {/* Major Projects */}
          <ScrollAnimation animation="slideUp" delay={100}>
            <div className="group relative overflow-hidden h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 dark:from-blue-600 dark:via-cyan-600 dark:to-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-x" />

              <div className="relative m-[2px] p-10 bg-white dark:bg-slate-800 rounded-2xl backdrop-blur-xl transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-blue-50/50 group-hover:to-cyan-50/50 dark:group-hover:from-blue-950/50 dark:group-hover:to-cyan-950/50 h-full flex flex-col justify-center">
                <div className="absolute top-3 right-3 w-12 h-12 border-t-2 border-r-2 border-blue-400/30 dark:border-blue-500/30 rounded-tr-xl group-hover:border-blue-500 dark:group-hover:border-blue-400 transition-colors duration-500" />
                <div className="absolute bottom-3 left-3 w-12 h-12 border-b-2 border-l-2 border-cyan-400/30 dark:border-cyan-500/30 rounded-bl-xl group-hover:border-cyan-500 dark:group-hover:border-cyan-400 transition-colors duration-500" />

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
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 dark:from-purple-600 dark:via-pink-600 dark:to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-x" />

              <div className="relative m-[2px] p-10 bg-white dark:bg-slate-800 rounded-2xl backdrop-blur-xl transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-purple-50/50 group-hover:to-pink-50/50 dark:group-hover:from-purple-950/50 dark:group-hover:to-pink-950/50 h-full flex flex-col justify-center">
                <div className="absolute top-3 right-3 w-12 h-12 border-t-2 border-r-2 border-purple-400/30 dark:border-purple-500/30 rounded-tr-xl group-hover:border-purple-500 dark:group-hover:border-purple-400 transition-colors duration-500" />
                <div className="absolute bottom-3 left-3 w-12 h-12 border-b-2 border-l-2 border-pink-400/30 dark:border-pink-500/30 rounded-bl-xl group-hover:border-pink-500 dark:group-hover:border-pink-400 transition-colors duration-500" />

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-pink-400/10 dark:from-purple-500/20 dark:to-pink-500/20 rounded-full blur-2xl scale-0 group-hover:scale-100 transition-transform duration-500" />

                <div className="relative">
                  <div className="text-7xl font-black mb-3 text-transparent bg-clip-text bg-gradient-to-br from-purple-600 via-pink-600 to-purple-700 dark:from-purple-400 dark:via-pink-400 dark:to-purple-500 group-hover:scale-110 transition-transform duration-500 inline-block">
                    3+
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
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 dark:from-emerald-600 dark:via-teal-600 dark:to-emerald-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-x" />

              <div className="relative m-[2px] p-10 bg-white dark:bg-slate-800 rounded-2xl backdrop-blur-xl transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-emerald-50/50 group-hover:to-teal-50/50 dark:group-hover:from-emerald-950/50 dark:group-hover:to-teal-950/50 h-full flex flex-col justify-center">
                <div className="absolute top-3 right-3 w-12 h-12 border-t-2 border-r-2 border-emerald-400/30 dark:border-emerald-500/30 rounded-tr-xl group-hover:border-emerald-500 dark:group-hover:border-emerald-400 transition-colors duration-500" />
                <div className="absolute bottom-3 left-3 w-12 h-12 border-b-2 border-l-2 border-teal-400/30 dark:border-teal-500/30 rounded-bl-xl group-hover:border-teal-500 dark:group-hover:border-teal-400 transition-colors duration-500" />

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
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 dark:from-orange-600 dark:via-amber-600 dark:to-orange-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-x" />

              <div className="relative m-[2px] p-10 bg-white dark:bg-slate-800 rounded-2xl backdrop-blur-xl transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-orange-50/50 group-hover:to-amber-50/50 dark:group-hover:from-orange-950/50 dark:group-hover:to-amber-950/50 h-full flex flex-col justify-center">
                <div className="absolute top-3 right-3 w-12 h-12 border-t-2 border-r-2 border-orange-400/30 dark:border-orange-500/30 rounded-tr-xl group-hover:border-orange-500 dark:group-hover:border-orange-400 transition-colors duration-500" />
                <div className="absolute bottom-3 left-3 w-12 h-12 border-b-2 border-l-2 border-amber-400/30 dark:border-amber-500/30 rounded-bl-xl group-hover:border-amber-500 dark:group-hover:border-amber-400 transition-colors duration-500" />

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
  );
}
