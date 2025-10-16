import Link from 'next/link';

export default function CinemaProjectCard() {
  return (
    <Link href="/projects/4" className="group relative block overflow-hidden rounded-3xl">
      {/* Animated Border */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-gradient-x" />
      
      <div className="relative m-[3px] bg-white dark:bg-slate-800 rounded-3xl overflow-hidden">
        {/* Image Container with Overlay */}
        <div className="relative overflow-hidden">
          <img
            src="/images/Cinema Management/1.png"
            alt="Cinema Management & Booking System"
            className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
          
          {/* Floating Icon */}
          <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
            <i className="ri-movie-line text-3xl text-white" />
          </div>
          
          {/* Corner Decorations */}
          <div className="absolute top-0 left-0 w-24 h-24 bg-purple-500/20 rounded-br-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-pink-500/20 rounded-tl-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </div>
        
        {/* Content */}
        <div className="relative p-8 bg-gradient-to-br from-white to-purple-50/30 dark:from-slate-800 dark:to-purple-900/10">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5 transition-all duration-700" />
          
          <div className="relative">
            <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-purple-600 dark:from-slate-100 dark:to-purple-400 mb-4 group-hover:scale-105 transition-transform duration-500">
              Cinema Management & Booking System
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              Complete cinema platform with seat selection, hall management, and comprehensive booking system for theaters.
            </p>
            
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20 text-purple-700 dark:text-purple-300 rounded-xl text-sm font-bold border border-purple-200/50 dark:border-purple-500/30">
                React
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20 text-purple-700 dark:text-purple-300 rounded-xl text-sm font-bold border border-purple-200/50 dark:border-purple-500/30">
                Tailwind CSS
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20 text-purple-700 dark:text-purple-300 rounded-xl text-sm font-bold border border-purple-200/50 dark:border-purple-500/30">
                ASP.NET Core
              </span>
            </div>
            
            {/* View Button */}
            <div className="flex items-center text-purple-600 dark:text-purple-400 font-bold group-hover:translate-x-2 transition-transform duration-500">
              <span>View Project</span>
              <i className="ri-arrow-right-line ml-2 text-xl group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
